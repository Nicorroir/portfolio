import { projects } from "@/data/projects";

export default function Footer() {
  const year = new Date().getFullYear();
  const total = projects.length;

  return (
    <footer
      style={{
        borderTop: "1px solid #21262d",
        padding: "1.5rem",
        textAlign: "center",
        fontFamily: '"Share Tech Mono", monospace',
        fontSize: "0.75rem",
        color: "#58a6ff88",
      }}
    >
      <div style={{ maxWidth: "1200px", margin: "0 auto", display: "flex", flexDirection: "column", gap: "0.4rem" }}>
        <div>
          <span style={{ color: "#58a6ff" }}>{total}</span> projets indexés
          &nbsp;|&nbsp;
          <span style={{ color: "#a371f7" }}>C#</span>
          &nbsp;·&nbsp;
          <span style={{ color: "#f85149" }}>C++</span>
          &nbsp;·&nbsp;
          <span style={{ color: "#79c0ff" }}>HTML/CSS</span>
          &nbsp;·&nbsp;
          <span style={{ color: "#f78166" }}>PHP</span>
          &nbsp;·&nbsp;
          <span style={{ color: "#a371f7" }}>SQL</span>
        </div>
        <div style={{ color: "#21262d" }}>
          ─────────────────────────────────────────
        </div>
        <div>
          © {year} &nbsp;
          <span style={{ color: "#58a6ff" }}>Nicolas Terroir</span>
          &nbsp;—&nbsp; Bachelier en Informatique
        </div>
      </div>
    </footer>
  );
}
