"use client";

import { useEffect, useRef, useState } from "react";
import { terminalScripts, TerminalLine } from "@/lib/terminalScripts";

interface TerminalViewerProps {
  simulationKey: string;
  title: string;
}

interface DisplayLine {
  text: string;
  color?: string;
  input?: boolean;
}

export default function TerminalViewer({ simulationKey, title }: TerminalViewerProps) {
  const [lines, setLines] = useState<DisplayLine[]>([]);
  const [running, setRunning] = useState(false);
  const [done, setDone] = useState(false);
  const bottomRef = useRef<HTMLDivElement>(null);

  const script: TerminalLine[] = terminalScripts[simulationKey] ?? [
    { text: `// Simulation non disponible pour "${simulationKey}"` },
    { text: "// Consultez le code source sur GitHub." },
  ];

  const runSimulation = () => {
    setLines([]);
    setDone(false);
    setRunning(true);

    let cumDelay = 300;
    script.forEach((line, i) => {
      const delay = cumDelay + (line.delay ?? 80);
      cumDelay = delay;

      setTimeout(() => {
        setLines((prev) => [
          ...prev,
          { text: line.text, color: line.color, input: line.input },
        ]);
        if (i === script.length - 1) {
          setRunning(false);
          setDone(true);
        }
      }, delay);
    });
  };

  // Auto-scroll
  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [lines]);

  return (
    <div style={{ display: "flex", flexDirection: "column", height: "100%" }}>
      {/* Barre terminal */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "0.4rem 0.75rem",
          background: "#0d1117",
          borderBottom: "1px solid #21262d",
          flexShrink: 0,
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
          <div style={{ display: "flex", gap: "0.3rem" }}>
            <span style={{ width: 8, height: 8, borderRadius: "50%", background: "#f85149", display: "inline-block" }} />
            <span style={{ width: 8, height: 8, borderRadius: "50%", background: "#e3b341", display: "inline-block" }} />
            <span style={{ width: 8, height: 8, borderRadius: "50%", background: "#58a6ff", display: "inline-block" }} />
          </div>
          <span style={{ fontFamily: '"Share Tech Mono", monospace', fontSize: "0.7rem", color: "#58a6ff88" }}>
            {title}.exe
          </span>
        </div>

        <button
          onClick={runSimulation}
          disabled={running}
          style={{
            fontFamily: '"Share Tech Mono", monospace',
            fontSize: "0.65rem",
            color: running ? "#58a6ff55" : "#58a6ff",
            border: `1px solid ${running ? "#21262d" : "#58a6ff88"}`,
            padding: "0.15rem 0.5rem",
            background: "transparent",
            cursor: running ? "not-allowed" : "pointer",
            transition: "all 0.2s",
          }}
        >
          {running ? "▶ exécution..." : done ? "↺ rejouer" : "▶ exécuter"}
        </button>
      </div>

      {/* Zone terminal */}
      <div
        style={{
          flex: 1,
          background: "#0d1117",
          padding: "1rem",
          overflowY: "auto",
          minHeight: "400px",
          fontFamily: '"Share Tech Mono", monospace',
          fontSize: "0.82rem",
          lineHeight: 1.7,
        }}
      >
        {lines.length === 0 && !running ? (
          <div style={{ color: "#58a6ff33", textAlign: "center", paddingTop: "4rem" }}>
            <div style={{ fontSize: "2rem", marginBottom: "1rem" }}>▶</div>
            <div>Appuie sur &quot;▶ exécuter&quot; pour lancer la simulation</div>
          </div>
        ) : (
          lines.map((line, i) => (
            <div key={i} style={{ display: "flex", gap: "0.5rem" }}>
              {line.input ? (
                <>
                  <span style={{ color: "#58a6ff55", userSelect: "none" }}>$</span>
                  <span style={{ color: "#a371f7" }}>{line.text}</span>
                </>
              ) : (
                <span style={{ color: line.color ?? "#58a6ffcc" }}>{line.text || "\u00A0"}</span>
              )}
            </div>
          ))
        )}

        {running && (
          <div style={{ display: "flex", gap: "0.5rem", marginTop: "0.25rem" }}>
            <span style={{ color: "#58a6ff55" }}>$</span>
            <span style={{ color: "#58a6ff", animation: "blink 1s step-end infinite" }}>▋</span>
          </div>
        )}

        <div ref={bottomRef} />
      </div>
    </div>
  );
}
