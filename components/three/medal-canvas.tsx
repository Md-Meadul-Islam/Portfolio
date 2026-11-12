"use client";

import { Suspense, useEffect, useMemo, useRef } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import {
  ContactShadows,
  Environment,
  Float,
  Lightformer,
} from "@react-three/drei";
import * as THREE from "three";
import { useReducedMotion } from "@/components/use-reduced-motion";
import { StudioBackdrop } from "@/components/three/studio-backdrop";

function createStarShape() {
  const shape = new THREE.Shape();
  const spikes = 5;
  const outer = 0.44;
  const inner = 0.19;

  for (let index = 0; index < spikes * 2; index += 1) {
    const radius = index % 2 === 0 ? outer : inner;
    const angle = (index / (spikes * 2)) * Math.PI * 2 - Math.PI / 2;
    const x = Math.cos(angle) * radius;
    const y = Math.sin(angle) * radius;
    if (index === 0) shape.moveTo(x, y);
    else shape.lineTo(x, y);
  }

  shape.closePath();
  return shape;
}

function Medal({ reduced }: { reduced: boolean }) {
  const group = useRef<THREE.Group>(null);
  const satellite = useRef<THREE.Group>(null);
  const { size, camera } = useThree();

  const starGeometry = useMemo(
    () =>
      new THREE.ExtrudeGeometry(createStarShape(), {
        depth: 0.055,
        bevelEnabled: true,
        bevelSize: 0.014,
        bevelThickness: 0.014,
        bevelSegments: 2,
        curveSegments: 8,
      }),
    [],
  );

  useEffect(() => {
    const perspective = camera as THREE.PerspectiveCamera;
    perspective.position.z = size.width < 640 ? 7.4 : 6.3;
    perspective.updateProjectionMatrix();
  }, [size.width, camera]);

  useFrame((state, delta) => {
    const t = state.clock.elapsedTime;
    if (group.current) {
      const targetY = reduced ? 0.35 : -0.32 + state.pointer.x * 0.5 + Math.sin(t * 0.35) * 0.12;
      const targetX = reduced ? 0.08 : 0.08 - state.pointer.y * 0.28;
      group.current.rotation.y = THREE.MathUtils.damp(group.current.rotation.y, targetY, 2.2, delta);
      group.current.rotation.x = THREE.MathUtils.damp(group.current.rotation.x, targetX, 2.2, delta);
    }
    if (satellite.current) {
      satellite.current.rotation.y = reduced ? 0 : t * 0.3;
    }
  });

  return (
    <group ref={group} rotation={[0.08, -0.32, 0]} scale={size.width < 640 ? 0.86 : 1}>
      <Float
        speed={reduced ? 0 : 1.1}
        rotationIntensity={reduced ? 0 : 0.2}
        floatIntensity={reduced ? 0 : 0.65}
      >
        <group rotation={[Math.PI / 2, 0, 0]}>
          <mesh>
            <cylinderGeometry args={[1.24, 1.24, 0.15, 96]} />
            <meshPhysicalMaterial
              color="#d9b25f"
              metalness={1}
              roughness={0.27}
              clearcoat={0.45}
              clearcoatRoughness={0.28}
              envMapIntensity={1.6}
            />
          </mesh>

          <mesh>
            <cylinderGeometry args={[1.02, 1.02, 0.18, 96]} />
            <meshPhysicalMaterial
              color="#e3bf72"
              metalness={1}
              roughness={0.24}
              clearcoat={0.5}
              clearcoatRoughness={0.24}
              envMapIntensity={1.65}
            />
          </mesh>

          <mesh rotation={[Math.PI / 2, 0, 0]}>
            <torusGeometry args={[1.22, 0.055, 24, 120]} />
            <meshPhysicalMaterial
              color="#f0d49a"
              metalness={1}
              roughness={0.18}
              envMapIntensity={1.8}
            />
          </mesh>

          <mesh position={[0, 0.09, 0]} rotation={[Math.PI / 2, 0, 0]}>
            <torusGeometry args={[0.84, 0.012, 16, 120]} />
            <meshPhysicalMaterial
              color="#b58d3f"
              metalness={1}
              roughness={0.4}
              envMapIntensity={1.2}
            />
          </mesh>

          <mesh position={[0, 0.095, 0]} rotation={[-Math.PI / 2, 0, 0]}>
            <primitive object={starGeometry} attach="geometry" />
            <meshPhysicalMaterial
              color="#b58d3f"
              metalness={1}
              roughness={0.36}
              envMapIntensity={1.35}
            />
          </mesh>
        </group>
      </Float>

      <group ref={satellite}>
        <Float
          speed={reduced ? 0 : 1.5}
          rotationIntensity={0}
          floatIntensity={reduced ? 0 : 1.2}
        >
          <mesh position={[1.75, 1.25, 0.7]} scale={0.2}>
            <sphereGeometry args={[1, 48, 48]} />
            <meshPhysicalMaterial
              color="#eef0f2"
              metalness={1}
              roughness={0.08}
              envMapIntensity={1.8}
            />
          </mesh>
        </Float>
        <Float
          speed={reduced ? 0 : 1.2}
          rotationIntensity={0}
          floatIntensity={reduced ? 0 : 1}
        >
          <mesh position={[-1.7, -1.15, 0.9]} scale={0.1}>
            <sphereGeometry args={[1, 32, 32]} />
            <meshPhysicalMaterial
              color="#f0d49a"
              metalness={1}
              roughness={0.14}
              envMapIntensity={1.6}
            />
          </mesh>
        </Float>
      </group>
    </group>
  );
}

export default function MedalCanvas() {
  const reduced = useReducedMotion();

  return (
    <Canvas
      dpr={[1, 1.75]}
      camera={{ position: [0, 0, 6.3], fov: 38 }}
      gl={{ antialias: true, alpha: true, powerPreference: "high-performance" }}
      onCreated={({ gl }) => {
        gl.toneMapping = THREE.ACESFilmicToneMapping;
        gl.toneMappingExposure = 1.18;
      }}
      className="touch-none"
      aria-label="Interactive 3D gold achievement medal"
      role="img"
    >
      <Suspense fallback={null}>
        <Medal reduced={reduced} />
        <ContactShadows
          position={[0, -2.2, 0]}
          opacity={0.4}
          scale={9}
          blur={2.6}
          far={4}
          color="#000000"
        />
        <Environment resolution={256}>
          <StudioBackdrop
            horizon="#e3c17e"
            floor="#171006"
          />
          <Lightformer
            form="rect"
            intensity={5}
            position={[0, 5, -7]}
            rotation-x={Math.PI / 2}
            scale={[12, 12, 1]}
            color="#fff7e6"
          />
          <Lightformer
            form="rect"
            intensity={4}
            position={[-5, 0, 2]}
            rotation-y={Math.PI / 2}
            scale={[6, 5, 1]}
            color="#f6cf8b"
          />
          <Lightformer
            form="rect"
            intensity={2.2}
            position={[5, 1, 2]}
            rotation-y={-Math.PI / 2}
            scale={[6, 4, 1]}
            color="#cadcf2"
          />
          <Lightformer
            form="ring"
            intensity={2.6}
            position={[2, 4, 4]}
            scale={2}
            color="#ffffff"
          />
          <Lightformer
            form="rect"
            intensity={0.9}
            position={[0, -4.5, 2]}
            rotation-x={-Math.PI / 2}
            scale={[8, 6, 1]}
            color="#4a3b22"
          />
        </Environment>
      </Suspense>
    </Canvas>
  );
}
