"use client";

import { useEffect, useState } from "react";
import TypingEffect from "./TypingEffect";
import { projects } from "@/data/projects";
import { Category, Language } from "@/types/project";

const TERMINAL_LINES = [
  "initialisation du portfolio...",
  "chargement des projets...",
  "compilation des compétences...",
  "système prêt.",
];

function Counter({ target, label, color }: { target: number; label: string; color: string }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const step = Math.ceil(target / 30);
    const interval = setInterval(() => {
      start += step;
      if (start >= target) {
        setCount(target);
        clearInterval(interval);
      } else {
        setCount(start);
      }
    }, 40);
    return () => clearInterval(interval);
  }, [target]);

  return (
    <div style={{ textAlign: "center" }}>
      <div
        style={{
          fontFamily: '"Orbitron", sans-serif',
          fontSize: "2rem",
          fontWeight: 700,
          color,
          textShadow: `0 0 10px ${color}`,
        }}
      >
        {count}
      </div>
      <div
        style={{
          fontFamily: '"Share Tech Mono", monospace',
          fontSize: "0.7rem",
          color: "#58a6ff88",
          letterSpacing: "0.1em",
          textTransform: "uppercase",
        }}
      >
        {label}
      </div>
    </div>
  );
}

export default function HeroSection() {
  const nbProjects   = projects.length;
  const nbCategories = Object.values(Category).length;
  const nbLanguages  = Object.values(Language).length;

  return (
    <section
      style={{
        minHeight: "80vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        padding: "4rem 1.5rem 3rem",
        textAlign: "center",
        gap: "2.5rem",
      }}
    >
      {/* Titre principal */}
      <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem" }}>
        <div
          style={{
            fontFamily: '"Share Tech Mono", monospace',
            fontSize: "0.8rem",
            color: "#58a6ff88",
            letterSpacing: "0.3em",
            textTransform: "uppercase",
          }}
        >
          &gt; BACHELIER EN INFORMATIQUE
        </div>

        <h1
          style={{
            fontFamily: '"Orbitron", sans-serif',
            fontSize: "clamp(2rem, 6vw, 4rem)",
            fontWeight: 900,
            color: "#58a6ff",
            textShadow: "0 0 20px #58a6ff, 0 0 40px #58a6ff88",
            letterSpacing: "0.1em",
            lineHeight: 1.1,
            margin: 0,
          }}
        >
          NICOLAS
          <br />
          <span style={{ color: "#a371f7", textShadow: "0 0 20px #a371f7" }}>
            TERROIR
          </span>
        </h1>

        <div
          style={{
            fontFamily: '"Share Tech Mono", monospace',
            fontSize: "0.85rem",
            color: "#58a6ffbb",
            letterSpacing: "0.2em",
          }}
        >
          C# &nbsp;·&nbsp; C++ &nbsp;·&nbsp; PHP &nbsp;·&nbsp; HTML/CSS &nbsp;·&nbsp; SQL
        </div>
      </div>

      {/* Terminal animé */}
      <div
        style={{
          border: "1px solid #21262d",
          background: "rgba(22,27,34,0.8)",
          padding: "1rem 1.5rem",
          maxWidth: "480px",
          width: "100%",
          textAlign: "left",
        }}
      >
        <div
          style={{
            display: "flex",
            gap: "0.4rem",
            marginBottom: "0.75rem",
            borderBottom: "1px solid #21262d",
            paddingBottom: "0.5rem",
          }}
        >
          <span style={{ width: 10, height: 10, borderRadius: "50%", background: "#f85149", display: "inline-block" }} />
          <span style={{ width: 10, height: 10, borderRadius: "50%", background: "#e3b341", display: "inline-block" }} />
          <span style={{ width: 10, height: 10, borderRadius: "50%", background: "#58a6ff", display: "inline-block" }} />
          <span style={{ fontFamily: '"Share Tech Mono", monospace', fontSize: "0.65rem", color: "#21262d", marginLeft: "0.5rem" }}>
            portfolio.exe
          </span>
        </div>
        <TypingEffect lines={TERMINAL_LINES} />
      </div>

      {/* Compteurs */}
      <div
        style={{
          display: "flex",
          gap: "3rem",
          flexWrap: "wrap",
          justifyContent: "center",
        }}
      >
        <Counter target={nbProjects}   label="Projets"     color="#58a6ff" />
        <Counter target={nbCategories} label="Catégories"  color="#a371f7" />
        <Counter target={nbLanguages}  label="Langages"    color="#f78166" />
      </div>

      {/* Flèche scroll */}
      <div
        style={{
          fontFamily: '"Share Tech Mono", monospace',
          fontSize: "0.75rem",
          color: "#58a6ff55",
          animation: "pulse-neon 2s ease-in-out infinite",
          letterSpacing: "0.2em",
        }}
      >
        ↓ SCROLL ↓
      </div>
    </section>
  );
}
