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
          borderBottom: "1px solid #1a2332",
          flexShrink: 0,
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
          <div style={{ display: "flex", gap: "0.3rem" }}>
            <span style={{ width: 8, height: 8, borderRadius: "50%", background: "#ff0040", display: "inline-block" }} />
            <span style={{ width: 8, height: 8, borderRadius: "50%", background: "#ffb300", display: "inline-block" }} />
            <span style={{ width: 8, height: 8, borderRadius: "50%", background: "#00ff41", display: "inline-block" }} />
          </div>
          <span style={{ fontFamily: '"Share Tech Mono", monospace', fontSize: "0.7rem", color: "#00ff4166" }}>
            {title}.exe
          </span>
        </div>

        <button
          onClick={runSimulation}
          disabled={running}
          style={{
            fontFamily: '"Share Tech Mono", monospace',
            fontSize: "0.65rem",
            color: running ? "#00ff4144" : "#00ff41",
            border: `1px solid ${running ? "#1a2332" : "#00ff4166"}`,
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
          background: "#0a0a0a",
          padding: "1rem",
          overflowY: "auto",
          minHeight: "400px",
          fontFamily: '"Share Tech Mono", monospace',
          fontSize: "0.82rem",
          lineHeight: 1.7,
        }}
      >
        {lines.length === 0 && !running ? (
          <div style={{ color: "#00ff4133", textAlign: "center", paddingTop: "4rem" }}>
            <div style={{ fontSize: "2rem", marginBottom: "1rem" }}>▶</div>
            <div>Appuie sur &quot;▶ exécuter&quot; pour lancer la simulation</div>
          </div>
        ) : (
          lines.map((line, i) => (
            <div key={i} style={{ display: "flex", gap: "0.5rem" }}>
              {line.input ? (
                <>
                  <span style={{ color: "#00ff4144", userSelect: "none" }}>$</span>
                  <span style={{ color: "#00ffff" }}>{line.text}</span>
                </>
              ) : (
                <span style={{ color: line.color ?? "#00ff41cc" }}>{line.text || "\u00A0"}</span>
              )}
            </div>
          ))
        )}

        {running && (
          <div style={{ display: "flex", gap: "0.5rem", marginTop: "0.25rem" }}>
            <span style={{ color: "#00ff4144" }}>$</span>
            <span style={{ color: "#00ff41", animation: "blink 1s step-end infinite" }}>▋</span>
          </div>
        )}

        <div ref={bottomRef} />
      </div>
    </div>
  );
}
