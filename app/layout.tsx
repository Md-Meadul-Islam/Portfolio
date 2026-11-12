import type { Metadata, Viewport } from "next";
import { Inter, Instrument_Serif, JetBrains_Mono } from "next/font/google";
import { profile } from "@/lib/resume";
import { SiteNav } from "@/components/site-nav";
import { SiteFooter } from "@/components/site-footer";
import { RevealObserver } from "@/components/reveal-observer";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const instrument = Instrument_Serif({
  subsets: ["latin"],
  weight: "400",
  style: ["normal", "italic"],
  variable: "--font-instrument",
  display: "swap",
});

const mono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: `${profile.name} — Backend & AI Engineer`,
    template: `%s — ${profile.name}`,
  },
  description: profile.summary,
  keywords: [
    "Backend Engineer",
    "AI Engineer",
    "LLM",
    "RAG",
    "MCP",
    "Node.js",
    "Python",
    "MongoDB",
    "Vector Search",
    "Dhaka",
    "Bangladesh",
  ],
  authors: [{ name: profile.name }],
  creator: profile.name,
  openGraph: {
    type: "website",
    title: `${profile.name} — Backend & AI Engineer`,
    description: profile.summary,
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: `${profile.name} — Backend & AI Engineer`,
    description: profile.summary,
  },
};

export const viewport: Viewport = {
  themeColor: "#07080a",
  colorScheme: "dark",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${instrument.variable} ${mono.variable}`}>
      <body className="min-h-screen bg-ink font-sans text-cream antialiased">
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-full focus:bg-gold focus:px-4 focus:py-2 focus:font-mono focus:text-xs focus:text-ink"
        >
          Skip to content
        </a>
        <SiteNav />
        <main id="main">{children}</main>
        <SiteFooter />
        <div
          aria-hidden
          className="noise pointer-events-none fixed inset-0 z-[80] opacity-[0.032] mix-blend-soft-light"
        />
        <RevealObserver />
      </body>
    </html>
  );
}
