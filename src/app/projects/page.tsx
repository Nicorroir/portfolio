import ProjectGallery from "@/components/projects/ProjectGallery";
import { projects } from "@/data/projects";

export const metadata = {
  title: "Projets — Portfolio Nicolas Terroir",
  description: "Tous les projets de Nicolas Terroir : C#, C++, PHP, HTML/CSS, SQL.",
};

export default function ProjectsPage() {
  return (
    <div style={{ paddingTop: "2rem" }}>

      {/* En-tête page */}
      <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "0 1.5rem 1.5rem" }}>
        <h1
          style={{
            fontFamily: '"Orbitron", sans-serif',
            fontSize: "clamp(1.2rem, 3vw, 1.8rem)",
            fontWeight: 900,
            color: "#00ff41",
            textShadow: "0 0 15px #00ff4166",
            margin: "0 0 0.5rem",
            letterSpacing: "0.15em",
          }}
        >
          ⚡ PROJETS
        </h1>
        <p style={{
          fontFamily: '"Share Tech Mono", monospace',
          fontSize: "0.8rem",
          color: "#00ff4166",
          margin: 0,
        }}>
          {projects.length} projets réalisés durant le bachelier en informatique
        </p>
      </div>

      <ProjectGallery />
    </div>
  );
}
