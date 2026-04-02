"use client";

import { useState } from "react";
import { IframeLaunchConfig } from "@/types/project";
import LoadingSpinner from "@/components/ui/LoadingSpinner";

interface IframeViewerProps {
  config: IframeLaunchConfig;
  title: string;
}

export default function IframeViewer({ config, title }: IframeViewerProps) {
  const [loaded, setLoaded] = useState(false);

  return (
    <div style={{ display: "flex", flexDirection: "column", height: "100%" }}>
      {/* Barre URL simulée */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: "0.5rem",
          padding: "0.4rem 0.75rem",
          background: "#0d1117",
          borderBottom: "1px solid #21262d",
          flexShrink: 0,
        }}
      >
        <div style={{ display: "flex", gap: "0.3rem" }}>
          <span style={{ width: 8, height: 8, borderRadius: "50%", background: "#f85149", display: "inline-block" }} />
          <span style={{ width: 8, height: 8, borderRadius: "50%", background: "#e3b341", display: "inline-block" }} />
          <span style={{ width: 8, height: 8, borderRadius: "50%", background: "#58a6ff", display: "inline-block" }} />
        </div>
        <div
          style={{
            flex: 1,
            fontFamily: '"Share Tech Mono", monospace',
            fontSize: "0.7rem",
            color: "#58a6ff88",
            background: "#0d1117",
            border: "1px solid #21262d",
            padding: "0.15rem 0.5rem",
            overflow: "hidden",
            textOverflow: "ellipsis",
            whiteSpace: "nowrap",
          }}
        >
          {config.iframeSrc.startsWith("http") ? config.iframeSrc : `localhost:3000${config.iframeSrc}`}
        </div>
        {!loaded && <LoadingSpinner size={6} />}
      </div>

      {/* iframe */}
      <div style={{ flex: 1, position: "relative", minHeight: "400px" }}>
        {!loaded && (
          <div
            style={{
              position: "absolute",
              inset: 0,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              gap: "1rem",
              background: "#0d1117",
              fontFamily: '"Share Tech Mono", monospace',
              fontSize: "0.8rem",
              color: "#58a6ff88",
            }}
          >
            <LoadingSpinner size={12} />
            <span>chargement de {title}...</span>
          </div>
        )}
        <iframe
          src={config.iframeSrc}
          sandbox={config.sandboxPermissions ?? "allow-scripts allow-same-origin"}
          onLoad={() => setLoaded(true)}
          style={{
            width: "100%",
            height: "100%",
            border: "none",
            minHeight: "500px",
            opacity: loaded ? 1 : 0,
            transition: "opacity 0.3s",
          }}
          title={title}
        />
      </div>
    </div>
  );
}
