"use client";

import dynamic from "next/dynamic";

const MedalCanvas = dynamic(() => import("@/components/three/medal-canvas"), {
  ssr: false,
  loading: () => (
    <div className="flex h-full w-full items-center justify-center">
      <div className="h-[44%] w-[44%] animate-pulse-soft rounded-full bg-[radial-gradient(circle_at_32%_26%,#fff4d6,#d9b25f_35%,#7c5c25_68%,#1b160c)] opacity-80 blur-[1px]" />
    </div>
  ),
});

export function MedalScene() {
  return (
    <div className="h-full w-full">
      <MedalCanvas />
    </div>
  );
}
