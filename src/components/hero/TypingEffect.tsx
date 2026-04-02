"use client";

import { useEffect, useState } from "react";

interface TypingEffectProps {
  lines: string[];
  speed?: number;       // ms par caractère
  pauseBetween?: number; // ms entre les lignes
  color?: string;
  className?: string;
}

export default function TypingEffect({
  lines,
  speed = 40,
  pauseBetween = 600,
  color = "#58a6ffbb",
  className = "",
}: TypingEffectProps) {
  const [displayed, setDisplayed] = useState<string[]>([]);
  const [currentLine, setCurrentLine] = useState(0);
  const [currentChar, setCurrentChar] = useState(0);
  const [showCursor, setShowCursor] = useState(true);

  // Curseur clignotant
  useEffect(() => {
    const blink = setInterval(() => setShowCursor((v) => !v), 500);
    return () => clearInterval(blink);
  }, []);

  // Frappe caractère par caractère
  useEffect(() => {
    if (currentLine >= lines.length) return;

    const line = lines[currentLine];

    if (currentChar < line.length) {
      const t = setTimeout(() => {
        setDisplayed((prev) => {
          const next = [...prev];
          next[currentLine] = (next[currentLine] ?? "") + line[currentChar];
          return next;
        });
        setCurrentChar((c) => c + 1);
      }, speed);
      return () => clearTimeout(t);
    } else {
      const t = setTimeout(() => {
        setCurrentLine((l) => l + 1);
        setCurrentChar(0);
      }, pauseBetween);
      return () => clearTimeout(t);
    }
  }, [currentLine, currentChar, lines, speed, pauseBetween]);

  return (
    <div
      className={className}
      style={{
        fontFamily: '"Share Tech Mono", monospace',
        fontSize: "0.875rem",
        color,
        lineHeight: 1.8,
      }}
    >
      {lines.map((_, i) => (
        <div key={i}>
          <span style={{ color: "#58a6ff55" }}>$ </span>
          <span>{displayed[i] ?? ""}</span>
          {i === currentLine && (
            <span style={{ opacity: showCursor ? 1 : 0, color: "#58a6ff" }}>▋</span>
          )}
        </div>
      ))}
    </div>
  );
}
