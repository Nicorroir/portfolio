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
  green:  { border: "#58a6ff", shadow: "0 0 8px #58a6ff, 0 0 16px #58a6ff88" },
  cyan:   { border: "#a371f7", shadow: "0 0 8px #a371f7, 0 0 16px #a371f766" },
  purple: { border: "#f78166", shadow: "0 0 8px #f78166, 0 0 16px #f7816666" },
  amber:  { border: "#e3b341", shadow: "0 0 8px #e3b341, 0 0 16px #e3b34166" },
  red:    { border: "#f85149", shadow: "0 0 8px #f85149, 0 0 16px #f8514966" },
  blue:   { border: "#79c0ff", shadow: "0 0 8px #79c0ff, 0 0 16px #79c0ff66" },
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
