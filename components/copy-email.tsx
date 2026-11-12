"use client";

import { useState } from "react";
import { profile } from "@/lib/resume";
import { Check, Copy } from "@/components/icons";

export function CopyEmail() {
  const [copied, setCopied] = useState(false);

  const copy = async () => {
    const markCopied = () => {
      setCopied(true);
      window.setTimeout(() => setCopied(false), 2200);
    };

    try {
      await navigator.clipboard.writeText(profile.email);
      markCopied();
    } catch {
      const field = document.createElement("textarea");
      field.value = profile.email;
      field.setAttribute("readonly", "");
      field.style.position = "fixed";
      field.style.opacity = "0";
      document.body.appendChild(field);
      field.select();
      const copied = document.execCommand("copy");
      field.remove();
      if (copied) markCopied();
      else window.location.href = `mailto:${profile.email}`;
    }
  };

  return (
    <button
      type="button"
      onClick={copy}
      className="group inline-flex items-center gap-3 rounded-full border border-cream/15 bg-cream/[0.03] py-2.5 pl-2.5 pr-5 text-left transition-colors hover:border-gold/50"
      aria-label={`Copy email address ${profile.email}`}
    >
      <span className="flex h-8 w-8 items-center justify-center rounded-full bg-gold/15 text-gold-bright">
        {copied ? <Check className="h-4 w-4" /> : <Copy className="h-4 w-4" />}
      </span>
      <span>
        <span className="block font-mono text-[8px] uppercase tracking-[0.18em] text-muted">
          {copied ? "Copied to clipboard" : "Copy email"}
        </span>
        <span className="mt-0.5 block text-[13px] text-cream/85">
          {profile.email}
        </span>
      </span>
    </button>
  );
}
