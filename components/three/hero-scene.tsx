"use client";

import dynamic from "next/dynamic";

const HeroCanvas = dynamic(() => import("@/components/three/hero-canvas"), {
  ssr: false,
  loading: () => (
    <div className="flex h-full w-full items-center justify-center">
      <div className="h-[46%] w-[46%] animate-pulse-soft rounded-full bg-[radial-gradient(circle_at_32%_26%,#ffffff,#c9ccd3_24%,#5c616c_52%,#181a20_76%)] opacity-60 blur-[2px]" />
    </div>
  ),
});

export function HeroScene() {
  return (
    <div className="h-full w-full">
      <HeroCanvas />
    </div>
  );
}
