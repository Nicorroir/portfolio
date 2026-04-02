"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useFilteredProjects } from "@/hooks/useFilteredProjects";
import ProjectCard from "./ProjectCard";
import ProjectFilter from "./ProjectFilter";

export default function ProjectGallery() {
  const filtered = useFilteredProjects();

  return (
    <section style={{ maxWidth: "1200px", margin: "0 auto", padding: "0 1.5rem 4rem" }}>

      {/* Titre section */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: "1rem",
          marginBottom: "0.5rem",
          paddingBottom: "1rem",
          borderBottom: "1px solid #1a2332",
        }}
      >
        <h2
          style={{
            fontFamily: '"Orbitron", sans-serif',
            fontSize: "1rem",
            fontWeight: 700,
            color: "#00ff41",
            margin: 0,
            letterSpacing: "0.2em",
          }}
        >
          // PROJETS
        </h2>
        <div style={{ flex: 1, height: "1px", background: "#1a2332" }} />
      </div>

      {/* Filtres */}
      <div style={{ margin: "0 -1.5rem" }}>
        <ProjectFilter />
      </div>

      {/* Grille animée */}
      <motion.div
        layout
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))",
          gap: "1rem",
        }}
      >
        <AnimatePresence mode="popLayout">
          {filtered.length > 0 ? (
            filtered.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))
          ) : (
            <motion.div
              key="empty"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              style={{
                gridColumn: "1 / -1",
                textAlign: "center",
                padding: "4rem 1rem",
                fontFamily: '"Share Tech Mono", monospace',
                color: "#00ff4144",
                fontSize: "0.875rem",
              }}
            >
              <div style={{ fontSize: "2rem", marginBottom: "1rem" }}>◈</div>
              <div>aucun projet trouvé</div>
              <div style={{ fontSize: "0.75rem", marginTop: "0.5rem" }}>
                essaie un autre filtre ou{" "}
                <button
                  onClick={() => window.location.reload()}
                  style={{
                    color: "#00ff41",
                    background: "none",
                    border: "none",
                    cursor: "pointer",
                    fontFamily: '"Share Tech Mono", monospace',
                    fontSize: "0.75rem",
                    textDecoration: "underline",
                  }}
                >
                  réinitialise
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </section>
  );
}
