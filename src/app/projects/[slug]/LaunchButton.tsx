"use client";

import { Project, LaunchMode } from "@/types/project";
import { useProjectStore } from "@/store/useProjectStore";

interface LaunchButtonProps {
  project: Project;
}

const LABELS: Record<LaunchMode, string> = {
  [LaunchMode.IFRAME]:   "▶ LANCER LE PROJET",
  [LaunchMode.TERMINAL]: "▶ OUVRIR LE TERMINAL",
  [LaunchMode.EXTERNAL]: "↗ VOIR SUR GITHUB",
};

const COLORS: Record<LaunchMode, string> = {
  [LaunchMode.IFRAME]:   "#58a6ff",
  [LaunchMode.TERMINAL]: "#a371f7",
  [LaunchMode.EXTERNAL]: "#f78166",
};

export default function LaunchButton({ project }: LaunchButtonProps) {
  const { openModal } = useProjectStore();
  const color = COLORS[project.launch.mode];

  return (
    <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap" }}>
      <button
        onClick={() => openModal(project)}
        style={{
          fontFamily: '"Orbitron", sans-serif',
          fontSize: "0.8rem",
          fontWeight: 700,
          letterSpacing: "0.15em",
          color,
          border: `1px solid ${color}`,
          boxShadow: `0 0 10px ${color}66`,
          padding: "0.75rem 2rem",
          background: "transparent",
          cursor: "pointer",
          transition: "all 0.2s",
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.background = `${color}22`;
          e.currentTarget.style.boxShadow = `0 0 20px ${color}88`;
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.background = "transparent";
          e.currentTarget.style.boxShadow = `0 0 10px ${color}66`;
        }}
      >
        {LABELS[project.launch.mode]}
      </button>
    </div>
  );
}
