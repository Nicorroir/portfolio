"use client";

import { motion } from "framer-motion";
import { useRouter } from "next/navigation";
import { Project, LaunchMode, Difficulty, LANGUAGE_COLORS, CATEGORY_ICONS } from "@/types/project";
import { useProjectStore } from "@/store/useProjectStore";
import { getDifficultyLabel, getDifficultyColor, formatDate } from "@/lib/utils";
import { LanguageBadge, CategoryBadge } from "@/components/ui/ProjectBadge";

const LAUNCH_LABELS: Record<LaunchMode, string> = {
  [LaunchMode.IFRAME]:    "▶ LANCER",
  [LaunchMode.TERMINAL]:  "▶ TERMINAL",
  [LaunchMode.EXTERNAL]:  "↗ VOIR",
};

const LAUNCH_COLORS: Record<LaunchMode, string> = {
  [LaunchMode.IFRAME]:    "#00ff41",
  [LaunchMode.TERMINAL]:  "#00ffff",
  [LaunchMode.EXTERNAL]:  "#bf00ff",
};

interface ProjectCardProps {
  project: Project;
}

export default function ProjectCard({ project }: ProjectCardProps) {
  const { openModal } = useProjectStore();
  const router = useRouter();
  const launchColor = LAUNCH_COLORS[project.launch.mode];
  const diffColor   = getDifficultyColor(project.difficulty);

  return (
    <motion.div
      layout
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.9 }}
      transition={{ duration: 0.2 }}
      whileHover={{ y: -4 }}
      style={{
        background: "rgba(13,17,23,0.85)",
        border: "1px solid #1a2332",
        display: "flex",
        flexDirection: "column",
        cursor: "pointer",
        transition: "border-color 0.2s, box-shadow 0.2s",
        position: "relative",
        overflow: "hidden",
      }}
      onHoverStart={(e) => {
        (e.target as HTMLElement).closest?.("[data-card]") &&
          ((e.target as HTMLElement).style.borderColor = "#00ff4166");
      }}
      onClick={() => router.push(`/projects/${project.id}`)}
      data-card
    >
      {/* Badge featured */}
      {project.featured && (
        <div
          style={{
            position: "absolute",
            top: "0.6rem",
            right: "0.6rem",
            fontFamily: '"Share Tech Mono", monospace',
            fontSize: "0.6rem",
            color: "#ffb300",
            border: "1px solid #ffb30066",
            padding: "0.1rem 0.4rem",
            background: "rgba(10,10,10,0.9)",
            zIndex: 1,
          }}
        >
          ★ FEATURED
        </div>
      )}

      {/* Thumbnail placeholder */}
      <div
        style={{
          height: "140px",
          background: `linear-gradient(135deg, #0d1117 0%, ${LANGUAGE_COLORS[project.languages[0]]}11 100%)`,
          borderBottom: "1px solid #1a2332",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          fontSize: "3rem",
          flexShrink: 0,
        }}
      >
        {CATEGORY_ICONS[project.category]}
      </div>

      {/* Contenu */}
      <div style={{ padding: "1rem", display: "flex", flexDirection: "column", gap: "0.6rem", flex: 1 }}>

        {/* Catégorie + date */}
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <CategoryBadge category={project.category} />
          <span style={{ fontFamily: '"Share Tech Mono", monospace', fontSize: "0.65rem", color: "#00ff4144" }}>
            {formatDate(project.date)}
          </span>
        </div>

        {/* Titre */}
        <h3
          style={{
            fontFamily: '"Orbitron", sans-serif',
            fontSize: "0.9rem",
            fontWeight: 700,
            color: "#00ff41",
            margin: 0,
            lineHeight: 1.3,
          }}
        >
          {project.title}
        </h3>

        {/* Description */}
        <p
          style={{
            fontFamily: '"Share Tech Mono", monospace',
            fontSize: "0.75rem",
            color: "#00ff4199",
            margin: 0,
            lineHeight: 1.6,
            flex: 1,
            display: "-webkit-box",
            WebkitLineClamp: 3,
            WebkitBoxOrient: "vertical",
            overflow: "hidden",
          }}
        >
          {project.description}
        </p>

        {/* Langages */}
        <div style={{ display: "flex", gap: "0.3rem", flexWrap: "wrap" }}>
          {project.languages.map((lang) => (
            <LanguageBadge key={lang} language={lang} />
          ))}
        </div>

        {/* Footer carte */}
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            borderTop: "1px solid #1a2332",
            paddingTop: "0.6rem",
            marginTop: "0.2rem",
          }}
        >
          <span
            style={{
              fontFamily: '"Share Tech Mono", monospace',
              fontSize: "0.65rem",
              color: diffColor,
            }}
          >
            {getDifficultyLabel(project.difficulty)}
          </span>

          <button
            onClick={(e) => { e.stopPropagation(); openModal(project); }}
            style={{
              fontFamily: '"Share Tech Mono", monospace',
              fontSize: "0.7rem",
              color: launchColor,
              border: `1px solid ${launchColor}66`,
              padding: "0.2rem 0.6rem",
              background: "transparent",
              cursor: "pointer",
              letterSpacing: "0.05em",
              transition: "all 0.15s",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = `${launchColor}22`;
              e.currentTarget.style.boxShadow = `0 0 8px ${launchColor}66`;
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = "transparent";
              e.currentTarget.style.boxShadow = "none";
            }}
          >
            {LAUNCH_LABELS[project.launch.mode]}
          </button>
        </div>
      </div>
    </motion.div>
  );
}
