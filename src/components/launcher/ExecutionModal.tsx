"use client";

import { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useProjectStore } from "@/store/useProjectStore";
import { LaunchMode } from "@/types/project";
import { LanguageBadge, CategoryBadge } from "@/components/ui/ProjectBadge";
import { getDifficultyLabel, getDifficultyColor } from "@/lib/utils";
import IframeViewer from "./IframeViewer";
import TerminalViewer from "./TerminalViewer";
import ExternalViewer from "./ExternalViewer";

export default function ExecutionModal() {
  const { modal, closeModal } = useProjectStore();
  const { isOpen, project } = modal;

  // Fermer avec Échap
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeModal();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [closeModal]);

  // Bloquer le scroll du body quand ouvert
  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [isOpen]);

  return (
    <AnimatePresence>
      {isOpen && project && (
        <>
          {/* Overlay */}
          <motion.div
            key="overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeModal}
            style={{
              position: "fixed",
              inset: 0,
              background: "rgba(0,0,0,0.85)",
              zIndex: 100,
              backdropFilter: "blur(4px)",
            }}
          />

          {/* Modal */}
          <motion.div
            key="modal"
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ duration: 0.2 }}
            style={{
              position: "fixed",
              inset: "1rem",
              zIndex: 101,
              background: "#0d1117",
              border: "1px solid #1a2332",
              boxShadow: "0 0 40px #00ff4122",
              display: "flex",
              flexDirection: "column",
              maxWidth: "960px",
              maxHeight: "90vh",
              margin: "auto",
              overflow: "hidden",
            }}
          >
            {/* Header modal */}
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                padding: "0.75rem 1rem",
                borderBottom: "1px solid #1a2332",
                background: "#0a0a0a",
                flexShrink: 0,
                gap: "0.75rem",
              }}
            >
              <div style={{ display: "flex", alignItems: "center", gap: "0.75rem", flexWrap: "wrap", flex: 1 }}>
                <CategoryBadge category={project.category} />
                <h2
                  style={{
                    fontFamily: '"Orbitron", sans-serif',
                    fontSize: "0.9rem",
                    fontWeight: 700,
                    color: "#00ff41",
                    margin: 0,
                  }}
                >
                  {project.title}
                </h2>
                <div style={{ display: "flex", gap: "0.3rem", flexWrap: "wrap" }}>
                  {project.languages.map((lang) => (
                    <LanguageBadge key={lang} language={lang} />
                  ))}
                </div>
                <span
                  style={{
                    fontFamily: '"Share Tech Mono", monospace',
                    fontSize: "0.65rem",
                    color: getDifficultyColor(project.difficulty),
                  }}
                >
                  {getDifficultyLabel(project.difficulty)}
                </span>
              </div>

              <button
                onClick={closeModal}
                style={{
                  fontFamily: '"Share Tech Mono", monospace',
                  fontSize: "1rem",
                  color: "#ff0040",
                  border: "1px solid #ff004066",
                  padding: "0.15rem 0.6rem",
                  background: "transparent",
                  cursor: "pointer",
                  flexShrink: 0,
                  lineHeight: 1,
                  transition: "all 0.15s",
                }}
                onMouseEnter={(e) => { e.currentTarget.style.background = "#ff004022"; }}
                onMouseLeave={(e) => { e.currentTarget.style.background = "transparent"; }}
                title="Fermer (Échap)"
              >
                ✕
              </button>
            </div>

            {/* Description */}
            <div
              style={{
                padding: "0.6rem 1rem",
                borderBottom: "1px solid #1a2332",
                fontFamily: '"Share Tech Mono", monospace',
                fontSize: "0.75rem",
                color: "#00ff4199",
                flexShrink: 0,
              }}
            >
              {project.longDescription ?? project.description}
            </div>

            {/* Contenu selon le mode */}
            <div style={{ flex: 1, overflow: "auto" }}>
              {project.launch.mode === LaunchMode.IFRAME && (
                <IframeViewer config={project.launch} title={project.title} />
              )}
              {project.launch.mode === LaunchMode.TERMINAL && (
                <TerminalViewer
                  simulationKey={project.launch.simulationKey}
                  title={project.title}
                />
              )}
              {project.launch.mode === LaunchMode.EXTERNAL && (
                <ExternalViewer config={project.launch} title={project.title} />
              )}
            </div>

            {/* Footer modal */}
            <div
              style={{
                padding: "0.4rem 1rem",
                borderTop: "1px solid #1a2332",
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                flexShrink: 0,
              }}
            >
              <span style={{ fontFamily: '"Share Tech Mono", monospace', fontSize: "0.65rem", color: "#00ff4133" }}>
                {project.sourceFolder}
              </span>
              <span style={{ fontFamily: '"Share Tech Mono", monospace', fontSize: "0.65rem", color: "#00ff4133" }}>
                ESC pour fermer
              </span>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
