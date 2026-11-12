"use client";

import { Print } from "@/components/icons";

export function PrintButton() {
  return (
    <button
      type="button"
      onClick={() => window.print()}
      className="btn-gold group"
    >
      <Print className="h-4 w-4" />
      Print / save PDF
    </button>
  );
}
