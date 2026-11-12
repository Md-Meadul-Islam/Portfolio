import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement>;

const base = {
  width: 18,
  height: 18,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.6,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
  "aria-hidden": true,
};

export function ArrowUpRight(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="M7 17 17 7M8 7h9v9" />
    </svg>
  );
}

export function ArrowRight(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="M4 12h16M14 6l6 6-6 6" />
    </svg>
  );
}

export function ArrowDown(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="M12 4v16M6 14l6 6 6-6" />
    </svg>
  );
}

export function Download(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="M12 3v12M7 10l5 5 5-5M4 20h16" />
    </svg>
  );
}

export function Mail(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <path d="m3 7 9 6 9-6" />
    </svg>
  );
}

export function Phone(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="M6.5 3h2.2l1.5 4-2 1.4a14 14 0 0 0 6.9 6.9l1.4-2 4 1.5v2.2A2.5 2.5 0 0 1 18 19.5C10.5 19.5 4.5 13.5 4.5 6A2.5 2.5 0 0 1 6.5 3Z" />
    </svg>
  );
}

export function MapPin(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="M12 21s7-5.4 7-11a7 7 0 1 0-14 0c0 5.6 7 11 7 11Z" />
      <circle cx="12" cy="10" r="2.6" />
    </svg>
  );
}

export function Github(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="M9 19c-4.3 1.4-4.3-2.5-6-3m12 5v-3.5c0-1 .1-1.4-.5-2 2.8-.3 5.5-1.4 5.5-6a4.6 4.6 0 0 0-1.3-3.2 4.2 4.2 0 0 0-.1-3.2s-1.1-.3-3.5 1.3a12 12 0 0 0-6.2 0C6.5 3.8 5.4 4.1 5.4 4.1a4.2 4.2 0 0 0-.1 3.2A4.6 4.6 0 0 0 4 10.5c0 4.6 2.7 5.7 5.5 6-.6.6-.6 1.2-.5 2V21" />
    </svg>
  );
}

export function Linkedin(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <rect x="3" y="3" width="18" height="18" rx="3" />
      <path d="M8 10v7M8 7v.01M12 17v-4a2.5 2.5 0 0 1 5 0v4M12 10v2" />
    </svg>
  );
}

export function Code(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="m8 7-5 5 5 5M16 7l5 5-5 5M13.5 4l-3 16" />
    </svg>
  );
}

export function Terminal(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <rect x="3" y="4" width="18" height="16" rx="2" />
      <path d="m7 9 3 3-3 3M13 15h4" />
    </svg>
  );
}

export function Menu(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="M4 8h16M4 16h16" />
    </svg>
  );
}

export function Close(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="M6 6l12 12M18 6 6 18" />
    </svg>
  );
}

export function Print(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="M7 8V3h10v5M7 17H5a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2" />
      <rect x="7" y="14" width="10" height="7" rx="1" />
    </svg>
  );
}

export function Sparkle(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="M12 3v4M12 17v4M3 12h4M17 12h4M6 6l2.5 2.5M15.5 15.5 18 18M18 6l-2.5 2.5M8.5 15.5 6 18" />
    </svg>
  );
}

export function Trophy(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="M8 4h8v5a4 4 0 0 1-8 0V4Z" />
      <path d="M8 5H5v2a3 3 0 0 0 3 3M16 5h3v2a3 3 0 0 1-3 3M12 13v4M8 21h8M10 17h4v4h-4z" />
    </svg>
  );
}

export function Check(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="m5 12 4.5 4.5L19 7" />
    </svg>
  );
}

export function Copy(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <rect x="9" y="9" width="11" height="11" rx="2" />
      <path d="M5 15V6a2 2 0 0 1 2-2h9" />
    </svg>
  );
}

export function Graduation(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="m2 9 10-5 10 5-10 5L2 9Z" />
      <path d="M6 11.5V17c0 1.5 2.7 3 6 3s6-1.5 6-3v-5.5M22 9v6" />
    </svg>
  );
}
