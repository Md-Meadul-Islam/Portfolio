"use client";

import { useMemo } from "react";
import * as THREE from "three";

export function StudioBackdrop({
  top = "#ffffff",
  horizon = "#9aa0aa",
  floor = "#08090b",
}: {
  top?: string;
  horizon?: string;
  floor?: string;
}) {
  const texture = useMemo(() => {
    const canvas = document.createElement("canvas");
    canvas.width = 8;
    canvas.height = 256;
    const context = canvas.getContext("2d");
    if (!context) return null;

    const gradient = context.createLinearGradient(0, 0, 0, 256);
    gradient.addColorStop(0, top);
    gradient.addColorStop(0.4, horizon);
    gradient.addColorStop(0.55, "#2c3037");
    gradient.addColorStop(1, floor);
    context.fillStyle = gradient;
    context.fillRect(0, 0, 8, 256);

    const map = new THREE.CanvasTexture(canvas);
    map.colorSpace = THREE.SRGBColorSpace;
    return map;
  }, [top, horizon, floor]);

  if (!texture) return null;

  return (
    <mesh>
      <sphereGeometry args={[50, 32, 32]} />
      <meshBasicMaterial map={texture} side={THREE.BackSide} toneMapped={false} />
    </mesh>
  );
}
