"use client";

import { Suspense, useEffect, useRef } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import {
  ContactShadows,
  Environment,
  Float,
  Lightformer,
  MeshDistortMaterial,
} from "@react-three/drei";
import * as THREE from "three";
import { useReducedMotion } from "@/components/use-reduced-motion";
import { StudioBackdrop } from "@/components/three/studio-backdrop";

function Sculpture({ reduced }: { reduced: boolean }) {
  const group = useRef<THREE.Group>(null);
  const ring = useRef<THREE.Group>(null);
  const satellite = useRef<THREE.Group>(null);
  const { size, camera } = useThree();

  useEffect(() => {
    const perspective = camera as THREE.PerspectiveCamera;
    perspective.position.z = size.width < 640 ? 8.8 : 7.3;
    perspective.updateProjectionMatrix();
  }, [size.width, camera]);

  useFrame((state, delta) => {
    const t = state.clock.elapsedTime;
    const px = state.pointer.x;
    const py = state.pointer.y;

    if (group.current) {
      const targetY = reduced ? 0.2 : px * 0.55 + t * 0.1;
      const targetX = reduced ? -0.06 : -py * 0.32;
      group.current.rotation.y = THREE.MathUtils.damp(
        group.current.rotation.y,
        targetY,
        2.2,
        delta,
      );
      group.current.rotation.x = THREE.MathUtils.damp(
        group.current.rotation.x,
        targetX,
        2.2,
        delta,
      );
    }

    if (ring.current) {
      ring.current.rotation.z = reduced ? 0.4 : 0.4 + t * 0.08;
      ring.current.rotation.y = reduced ? 0.3 : 0.3 + Math.sin(t * 0.35) * 0.14;
    }

    if (satellite.current) {
      satellite.current.rotation.y = reduced ? 0 : t * 0.22;
    }
  });

  return (
    <group ref={group} scale={size.width < 640 ? 0.82 : 1}>
      <Float
        speed={reduced ? 0 : 1.15}
        rotationIntensity={reduced ? 0 : 0.28}
        floatIntensity={reduced ? 0 : 0.75}
      >
        <mesh castShadow>
          <sphereGeometry args={[1.55, 128, 128]} />
          <MeshDistortMaterial
            color="#f2f1ec"
            distort={0.32}
            speed={1.15}
            metalness={1}
            roughness={0.1}
            envMapIntensity={2.1}
          />
        </mesh>
      </Float>

      <group ref={ring} rotation={[1.18, 0.3, 0.4]}>
        <mesh>
          <torusGeometry args={[2.2, 0.028, 32, 220]} />
          <meshPhysicalMaterial
            color="#e8c27a"
            metalness={1}
            roughness={0.18}
            envMapIntensity={2}
          />
        </mesh>
        <mesh rotation={[0, 0, Math.PI / 2]}>
          <torusGeometry args={[2.34, 0.008, 16, 220]} />
          <meshBasicMaterial color="#f0d49a" transparent opacity={0.32} />
        </mesh>
      </group>

      <group ref={satellite}>
        <Float
          speed={reduced ? 0 : 1.6}
          rotationIntensity={0}
          floatIntensity={reduced ? 0 : 1.4}
        >
          <mesh position={[1.95, 1.15, 0.55]} scale={0.19}>
            <sphereGeometry args={[1, 48, 48]} />
            <meshPhysicalMaterial
              color="#f0d49a"
              metalness={1}
              roughness={0.12}
              envMapIntensity={1.8}
            />
          </mesh>
        </Float>
        <Float
          speed={reduced ? 0 : 1.25}
          rotationIntensity={0}
          floatIntensity={reduced ? 0 : 1.1}
        >
          <mesh position={[-1.85, -1.25, 0.9]} scale={0.09}>
            <sphereGeometry args={[1, 32, 32]} />
            <meshPhysicalMaterial
              color="#c8d6e8"
              metalness={1}
              roughness={0.18}
              envMapIntensity={1.5}
            />
          </mesh>
        </Float>
      </group>
    </group>
  );
}

export default function HeroCanvas() {
  const reduced = useReducedMotion();

  return (
    <Canvas
      dpr={[1, 1.75]}
      camera={{ position: [0, 0, 7.3], fov: 36 }}
      gl={{
        antialias: true,
        alpha: true,
        powerPreference: "high-performance",
      }}
      onCreated={({ gl }) => {
        gl.toneMapping = THREE.ACESFilmicToneMapping;
        gl.toneMappingExposure = 1.22;
      }}
      className="touch-none"
      aria-label="Interactive 3D sculpture of liquid chrome with a gold orbit ring"
      role="img"
    >
      <Suspense fallback={null}>
        <Sculpture reduced={reduced} />
        <ContactShadows
          position={[0, -2.6, 0]}
          opacity={0.42}
          scale={11}
          blur={2.8}
          far={4.5}
          color="#000000"
        />
        <Environment resolution={256}>
          <StudioBackdrop horizon="#aab0b9" floor="#0a0b0e" />
          <Lightformer
            form="rect"
            intensity={2.8}
            position={[0, 1, 7.5]}
            rotation-y={Math.PI}
            scale={[18, 12, 1]}
            color="#fbf8f1"
          />
          <Lightformer
            form="rect"
            intensity={5}
            position={[0, 5, -8]}
            rotation-x={Math.PI / 2}
            scale={[12, 12, 1]}
            color="#fffaf0"
          />
          <Lightformer
            form="rect"
            intensity={4.5}
            position={[-5.5, 1, 1]}
            rotation-y={Math.PI / 2}
            scale={[7, 5, 1]}
            color="#f2c98b"
          />
          <Lightformer
            form="rect"
            intensity={2.6}
            position={[5.5, -0.5, 1.5]}
            rotation-y={-Math.PI / 2}
            scale={[7, 4, 1]}
            color="#c3d8f5"
          />
          <Lightformer
            form="rect"
            intensity={1.8}
            position={[-3, -1, 5]}
            rotation-y={Math.PI / 4}
            scale={[4, 7, 1]}
            color="#ffffff"
          />
          <Lightformer
            form="ring"
            intensity={2.8}
            position={[2.5, 4.5, 4]}
            scale={2.4}
            color="#ffffff"
          />
          <Lightformer
            form="rect"
            intensity={1.15}
            position={[0, 0, -7]}
            scale={[22, 16, 1]}
            color="#7c828d"
          />
          <Lightformer
            form="rect"
            intensity={0.9}
            position={[-8, 0.5, 0]}
            rotation-y={Math.PI / 2}
            scale={[12, 10, 1]}
            color="#5f6570"
          />
          <Lightformer
            form="rect"
            intensity={1.4}
            position={[0, -5, 2]}
            rotation-x={-Math.PI / 2}
            scale={[10, 6, 1]}
            color="#4a4f5a"
          />
        </Environment>
      </Suspense>
    </Canvas>
  );
}
