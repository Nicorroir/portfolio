"use client";

import { ButtonHTMLAttributes, ReactNode } from "react";

interface CyberButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  variant?: "primary" | "ghost" | "danger";
  size?: "sm" | "md" | "lg";
}

const VARIANTS = {
  primary: {
    border: "#00ff41",
    color:  "#00ff41",
    shadow: "0 0 8px #00ff41, 0 0 16px #00ff4166",
    hover:  "rgba(0,255,65,0.1)",
  },
  ghost: {
    border: "#1a2332",
    color:  "#00ff4199",
    shadow: "none",
    hover:  "rgba(0,255,65,0.05)",
  },
  danger: {
    border: "#ff0040",
    color:  "#ff0040",
    shadow: "0 0 8px #ff0040, 0 0 16px #ff004066",
    hover:  "rgba(255,0,64,0.1)",
  },
};

const SIZES = {
  sm: { padding: "0.25rem 0.75rem", fontSize: "0.75rem" },
  md: { padding: "0.5rem 1.25rem",  fontSize: "0.875rem" },
  lg: { padding: "0.75rem 1.75rem", fontSize: "1rem" },
};

export default function CyberButton({
  children,
  variant = "primary",
  size = "md",
  style,
  ...props
}: CyberButtonProps) {
  const v = VARIANTS[variant];
  const s = SIZES[size];

  return (
    <button
      style={{
        border: `1px solid ${v.border}`,
        color: v.color,
        boxShadow: v.shadow,
        padding: s.padding,
        fontSize: s.fontSize,
        background: "transparent",
        fontFamily: '"Share Tech Mono", monospace',
        letterSpacing: "0.1em",
        textTransform: "uppercase",
        cursor: "pointer",
        transition: "all 0.2s ease",
        position: "relative",
        overflow: "hidden",
        ...style,
      }}
      onMouseEnter={(e) => {
        (e.currentTarget as HTMLButtonElement).style.background = v.hover;
        if (v.shadow !== "none") {
          (e.currentTarget as HTMLButtonElement).style.boxShadow =
            v.shadow.replace("8px", "14px").replace("16px", "28px");
        }
      }}
      onMouseLeave={(e) => {
        (e.currentTarget as HTMLButtonElement).style.background = "transparent";
        (e.currentTarget as HTMLButtonElement).style.boxShadow = v.shadow;
      }}
      {...props}
    >
      {children}
    </button>
  );
}
