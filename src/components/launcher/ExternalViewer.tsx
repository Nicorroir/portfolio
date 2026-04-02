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
          color: "#f78166",
          textShadow: "0 0 20px #f78166",
        }}
      >
        ↗
      </div>

      <div>
        <p
          style={{
            fontFamily: '"Share Tech Mono", monospace',
            fontSize: "0.8rem",
            color: "#58a6ff88",
            marginBottom: "0.5rem",
          }}
        >
          Ce projet est disponible en externe
        </p>
        <p
          style={{
            fontFamily: '"Orbitron", sans-serif',
            fontSize: "0.9rem",
            color: "#58a6ff",
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
              color: "#58a6ff",
              border: "1px solid #58a6ff",
              padding: "0.6rem 1.5rem",
              textDecoration: "none",
              transition: "all 0.2s",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = "#58a6ff22";
              e.currentTarget.style.boxShadow = "0 0 12px #58a6ff88";
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
              color: "#58a6ff33",
              border: "1px solid #21262d",
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
              color: "#a371f7",
              border: "1px solid #a371f7",
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
              color: "#f78166",
              border: "1px solid #f78166",
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
