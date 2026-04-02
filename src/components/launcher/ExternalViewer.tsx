import { ExternalLaunchConfig } from "@/types/project";

interface ExternalViewerProps {
  config: ExternalLaunchConfig;
  title: string;
}

export default function ExternalViewer({ config, title }: ExternalViewerProps) {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        gap: "2rem",
        padding: "3rem 2rem",
        minHeight: "300px",
        textAlign: "center",
      }}
    >
      <div
        style={{
          fontFamily: '"Orbitron", sans-serif',
          fontSize: "3rem",
          color: "#bf00ff",
          textShadow: "0 0 20px #bf00ff",
        }}
      >
        ↗
      </div>

      <div>
        <p
          style={{
            fontFamily: '"Share Tech Mono", monospace',
            fontSize: "0.8rem",
            color: "#00ff4166",
            marginBottom: "0.5rem",
          }}
        >
          Ce projet est disponible en externe
        </p>
        <p
          style={{
            fontFamily: '"Orbitron", sans-serif',
            fontSize: "0.9rem",
            color: "#00ff41",
          }}
        >
          {title}
        </p>
      </div>

      <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem", width: "100%", maxWidth: "320px" }}>
        {config.githubUrl ? (
          <a
            href={config.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: "0.5rem",
              fontFamily: '"Share Tech Mono", monospace',
              fontSize: "0.85rem",
              color: "#00ff41",
              border: "1px solid #00ff41",
              padding: "0.6rem 1.5rem",
              textDecoration: "none",
              transition: "all 0.2s",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = "#00ff4122";
              e.currentTarget.style.boxShadow = "0 0 12px #00ff4166";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = "transparent";
              e.currentTarget.style.boxShadow = "none";
            }}
          >
            ⌥ Voir sur GitHub
          </a>
        ) : (
          <div
            style={{
              fontFamily: '"Share Tech Mono", monospace',
              fontSize: "0.75rem",
              color: "#00ff4133",
              border: "1px solid #1a2332",
              padding: "0.6rem 1.5rem",
            }}
          >
            // lien GitHub à venir
          </div>
        )}

        {config.deployUrl && (
          <a
            href={config.deployUrl}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: "0.5rem",
              fontFamily: '"Share Tech Mono", monospace',
              fontSize: "0.85rem",
              color: "#00ffff",
              border: "1px solid #00ffff",
              padding: "0.6rem 1.5rem",
              textDecoration: "none",
              transition: "all 0.2s",
            }}
          >
            ◉ Voir le démo live
          </a>
        )}

        {config.demoVideoUrl && (
          <a
            href={config.demoVideoUrl}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: "0.5rem",
              fontFamily: '"Share Tech Mono", monospace',
              fontSize: "0.85rem",
              color: "#bf00ff",
              border: "1px solid #bf00ff",
              padding: "0.6rem 1.5rem",
              textDecoration: "none",
              transition: "all 0.2s",
            }}
          >
            ▶ Voir la démo vidéo
          </a>
        )}
      </div>
    </div>
  );
}
