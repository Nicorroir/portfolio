import { ReactNode, CSSProperties } from "react";

type NeonColor = "green" | "cyan" | "purple" | "amber" | "red" | "blue";

interface NeonBorderProps {
  children: ReactNode;
  color?: NeonColor;
  animate?: boolean;
  className?: string;
  style?: CSSProperties;
}

const COLORS: Record<NeonColor, { border: string; shadow: string }> = {
  green:  { border: "#00ff41", shadow: "0 0 8px #00ff41, 0 0 16px #00ff4166" },
  cyan:   { border: "#00ffff", shadow: "0 0 8px #00ffff, 0 0 16px #00ffff66" },
  purple: { border: "#bf00ff", shadow: "0 0 8px #bf00ff, 0 0 16px #bf00ff66" },
  amber:  { border: "#ffb300", shadow: "0 0 8px #ffb300, 0 0 16px #ffb30066" },
  red:    { border: "#ff0040", shadow: "0 0 8px #ff0040, 0 0 16px #ff004066" },
  blue:   { border: "#0080ff", shadow: "0 0 8px #0080ff, 0 0 16px #0080ff66" },
};

export default function NeonBorder({
  children,
  color = "green",
  animate = false,
  className = "",
  style,
}: NeonBorderProps) {
  const c = COLORS[color];

  return (
    <div
      className={className}
      style={{
        border: `1px solid ${c.border}`,
        boxShadow: c.shadow,
        animation: animate ? "pulse-neon 2s ease-in-out infinite" : undefined,
        ...style,
      }}
    >
      {children}
    </div>
  );
}
