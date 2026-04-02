import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { projects } from "@/data/projects";
import { CATEGORY_ICONS, LANGUAGE_COLORS, LaunchMode } from "@/types/project";
import { getDifficultyLabel, getDifficultyColor, formatDate } from "@/lib/utils";
import { LanguageBadge, CategoryBadge } from "@/components/ui/ProjectBadge";
import BackButton from "./BackButton";
import LaunchButton from "./LaunchButton";

// ===== SSG : génère toutes les pages au build =====
export async function generateStaticParams() {
  return projects.map((p) => ({ slug: p.id }));
}

// ===== SEO par projet =====
export async function generateMetadata(
  { params }: { params: Promise<{ slug: string }> }
): Promise<Metadata> {
  const { slug } = await params;
  const project = projects.find((p) => p.id === slug);
  if (!project) return { title: "Projet introuvable" };

  return {
    title: `${project.title} — Portfolio Nicolas Terroir`,
    description: project.description,
    openGraph: {
      title: project.title,
      description: project.description,
      type: "article",
    },
  };
}

// ===== Page =====
export default async function ProjectPage(
  { params }: { params: Promise<{ slug: string }> }
) {
  const { slug } = await params;
  const project = projects.find((p) => p.id === slug);
  if (!project) notFound();

  const diffColor = getDifficultyColor(project.difficulty);

  const LAUNCH_MODE_LABEL: Record<LaunchMode, string> = {
    [LaunchMode.IFRAME]:    "▶ Projet Web — lançable en iframe",
    [LaunchMode.TERMINAL]:  "▶ Application console — simulation terminal",
    [LaunchMode.EXTERNAL]:  "↗ Projet externe — GitHub / démo",
  };

  const LAUNCH_MODE_COLOR: Record<LaunchMode, string> = {
    [LaunchMode.IFRAME]:    "#79c0ff",
    [LaunchMode.TERMINAL]:  "#a371f7",
    [LaunchMode.EXTERNAL]:  "#f78166",
  };

  return (
    <div style={{ maxWidth: "860px", margin: "0 auto", padding: "2rem 1.5rem 4rem" }}>

      {/* Retour */}
      <BackButton />

      {/* En-tête */}
      <div style={{ display: "flex", flexDirection: "column", gap: "1rem", marginBottom: "2rem" }}>

        {/* Catégorie + date */}
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", flexWrap: "wrap", gap: "0.5rem" }}>
          <CategoryBadge category={project.category} />
          <span style={{ fontFamily: '"Share Tech Mono", monospace', fontSize: "0.7rem", color: "#58a6ff55" }}>
            {formatDate(project.date)}
          </span>
        </div>

        {/* Titre */}
        <h1
          style={{
            fontFamily: '"Orbitron", sans-serif',
            fontSize: "clamp(1.5rem, 4vw, 2.5rem)",
            fontWeight: 900,
            color: "#58a6ff",
            textShadow: "0 0 20px #58a6ff88",
            margin: 0,
            lineHeight: 1.2,
          }}
        >
          {CATEGORY_ICONS[project.category]} {project.title}
        </h1>

        {/* Langages */}
        <div style={{ display: "flex", gap: "0.4rem", flexWrap: "wrap" }}>
          {project.languages.map((lang) => (
            <LanguageBadge key={lang} language={lang} size="md" />
          ))}
        </div>

        {/* Difficulté + mode */}
        <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap", alignItems: "center" }}>
          <span style={{ fontFamily: '"Share Tech Mono", monospace', fontSize: "0.75rem", color: diffColor }}>
            {getDifficultyLabel(project.difficulty)}
          </span>
          <span style={{
            fontFamily: '"Share Tech Mono", monospace',
            fontSize: "0.7rem",
            color: LAUNCH_MODE_COLOR[project.launch.mode],
            border: `1px solid ${LAUNCH_MODE_COLOR[project.launch.mode]}44`,
            padding: "0.15rem 0.5rem",
          }}>
            {LAUNCH_MODE_LABEL[project.launch.mode]}
          </span>
        </div>
      </div>

      {/* Séparateur */}
      <div style={{ height: "1px", background: "#21262d", marginBottom: "2rem" }} />

      {/* Description */}
      <div
        style={{
          background: "rgba(22,27,34,0.8)",
          border: "1px solid #21262d",
          padding: "1.5rem",
          marginBottom: "2rem",
        }}
      >
        <div style={{ fontFamily: '"Share Tech Mono", monospace', fontSize: "0.7rem", color: "#58a6ff55", marginBottom: "0.75rem", letterSpacing: "0.15em" }}>
          // DESCRIPTION
        </div>
        <p style={{ fontFamily: '"Share Tech Mono", monospace', fontSize: "0.875rem", color: "#58a6ffcc", lineHeight: 1.8, margin: 0 }}>
          {project.longDescription ?? project.description}
        </p>
      </div>

      {/* Tags */}
      <div style={{ marginBottom: "2rem" }}>
        <div style={{ fontFamily: '"Share Tech Mono", monospace', fontSize: "0.7rem", color: "#58a6ff55", marginBottom: "0.75rem", letterSpacing: "0.15em" }}>
          // TAGS
        </div>
        <div style={{ display: "flex", gap: "0.4rem", flexWrap: "wrap" }}>
          {project.tags.map((tag) => (
            <span
              key={tag}
              style={{
                fontFamily: '"Share Tech Mono", monospace',
                fontSize: "0.7rem",
                color: "#58a6ff88",
                border: "1px solid #21262d",
                padding: "0.15rem 0.5rem",
              }}
            >
              #{tag}
            </span>
          ))}
        </div>
      </div>

      {/* Langages détail */}
      <div style={{ marginBottom: "2rem" }}>
        <div style={{ fontFamily: '"Share Tech Mono", monospace', fontSize: "0.7rem", color: "#58a6ff55", marginBottom: "0.75rem", letterSpacing: "0.15em" }}>
          // TECHNOLOGIES
        </div>
        <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap" }}>
          {project.languages.map((lang) => (
            <div key={lang} style={{ display: "flex", alignItems: "center", gap: "0.4rem" }}>
              <span style={{ width: 8, height: 8, background: LANGUAGE_COLORS[lang], display: "inline-block", boxShadow: `0 0 6px ${LANGUAGE_COLORS[lang]}` }} />
              <span style={{ fontFamily: '"Share Tech Mono", monospace', fontSize: "0.8rem", color: LANGUAGE_COLORS[lang] }}>
                {lang}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Source */}
      <div style={{ marginBottom: "2.5rem" }}>
        <div style={{ fontFamily: '"Share Tech Mono", monospace', fontSize: "0.7rem", color: "#58a6ff55", marginBottom: "0.5rem", letterSpacing: "0.15em" }}>
          // SOURCE
        </div>
        <code style={{ fontFamily: '"Share Tech Mono", monospace', fontSize: "0.75rem", color: "#58a6ff88" }}>
          📁 {project.sourceFolder}
        </code>
      </div>

      {/* Bouton lancer */}
      <LaunchButton project={project} />

    </div>
  );
}
