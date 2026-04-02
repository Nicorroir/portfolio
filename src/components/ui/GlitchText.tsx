"use client";

import { ReactNode } from "react";

interface GlitchTextProps {
  children: ReactNode;
  as?: "h1" | "h2" | "h3" | "span" | "p";
  className?: string;
  color?: string;
}

export default function GlitchText({
  children,
  as: Tag = "span",
  className = "",
  color = "#58a6ff",
}: GlitchTextProps) {
  const text = typeof children === "string" ? children : "";

  return (
    <>
      <style>{`
        .glitch-wrapper {
          position: relative;
          display: inline-block;
          color: ${color};
        }
        .glitch-wrapper::before,
        .glitch-wrapper::after {
          content: attr(data-text);
          position: absolute;
          inset: 0;
          background: transparent;
        }
        .glitch-wrapper::before {
          color: #a371f7;
          clip-path: inset(20% 0 60% 0);
          transform: translate(-2px, 0);
          animation: glitch-before 3s infinite linear;
        }
        .glitch-wrapper::after {
          color: #f85149;
          clip-path: inset(60% 0 20% 0);
          transform: translate(2px, 0);
          animation: glitch-after 3s infinite linear;
        }
        @keyframes glitch-before {
          0%, 90%, 100% { transform: translate(0); clip-path: inset(20% 0 60% 0); }
          92%           { transform: translate(-3px, 1px); clip-path: inset(10% 0 70% 0); }
          94%           { transform: translate(2px, -1px); clip-path: inset(30% 0 50% 0); }
          96%           { transform: translate(-1px, 2px); clip-path: inset(50% 0 30% 0); }
        }
        @keyframes glitch-after {
          0%, 90%, 100% { transform: translate(0); clip-path: inset(60% 0 20% 0); }
          92%           { transform: translate(3px, -1px); clip-path: inset(70% 0 10% 0); }
          94%           { transform: translate(-2px, 1px); clip-path: inset(50% 0 30% 0); }
          96%           { transform: translate(1px, -2px); clip-path: inset(80% 0 5% 0); }
        }
      `}</style>
      <Tag
        className={`glitch-wrapper ${className}`}
        data-text={text}
      >
        {children}
      </Tag>
    </>
  );
}
