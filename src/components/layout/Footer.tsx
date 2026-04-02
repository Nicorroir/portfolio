import { projects } from "@/data/projects";

export default function Footer() {
  const year = new Date().getFullYear();
  const total = projects.length;

  return (
    <footer
      style={{
        borderTop: "1px solid #1a2332",
        padding: "1.5rem",
        textAlign: "center",
        fontFamily: '"Share Tech Mono", monospace',
        fontSize: "0.75rem",
        color: "#00ff4166",
      }}
    >
      <div style={{ maxWidth: "1200px", margin: "0 auto", display: "flex", flexDirection: "column", gap: "0.4rem" }}>
        <div>
          <span style={{ color: "#00ff41" }}>{total}</span> projets indexés
          &nbsp;|&nbsp;
          <span style={{ color: "#00ffff" }}>C#</span>
          &nbsp;·&nbsp;
          <span style={{ color: "#ff0040" }}>C++</span>
          &nbsp;·&nbsp;
          <span style={{ color: "#0080ff" }}>HTML/CSS</span>
          &nbsp;·&nbsp;
          <span style={{ color: "#bf00ff" }}>PHP</span>
          &nbsp;·&nbsp;
          <span style={{ color: "#00ffff" }}>SQL</span>
        </div>
        <div style={{ color: "#1a2332" }}>
          ─────────────────────────────────────────
        </div>
        <div>
          © {year} &nbsp;
          <span style={{ color: "#00ff41" }}>Nicolas Terroir</span>
          &nbsp;—&nbsp; Bachelier en Informatique
        </div>
      </div>
    </footer>
  );
}
