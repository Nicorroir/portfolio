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
          color: "#00ff4166",
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
            color: "#00ff4166",
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
            color: "#00ff41",
            textShadow: "0 0 20px #00ff41, 0 0 40px #00ff4166",
            letterSpacing: "0.1em",
            lineHeight: 1.1,
            margin: 0,
          }}
        >
          NICOLAS
          <br />
          <span style={{ color: "#00ffff", textShadow: "0 0 20px #00ffff" }}>
            TERROIR
          </span>
        </h1>

        <div
          style={{
            fontFamily: '"Share Tech Mono", monospace',
            fontSize: "0.85rem",
            color: "#00ff4199",
            letterSpacing: "0.2em",
          }}
        >
          C# &nbsp;·&nbsp; C++ &nbsp;·&nbsp; PHP &nbsp;·&nbsp; HTML/CSS &nbsp;·&nbsp; SQL
        </div>
      </div>

      {/* Terminal animé */}
      <div
        style={{
          border: "1px solid #1a2332",
          background: "rgba(13,17,23,0.8)",
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
            borderBottom: "1px solid #1a2332",
            paddingBottom: "0.5rem",
          }}
        >
          <span style={{ width: 10, height: 10, borderRadius: "50%", background: "#ff0040", display: "inline-block" }} />
          <span style={{ width: 10, height: 10, borderRadius: "50%", background: "#ffb300", display: "inline-block" }} />
          <span style={{ width: 10, height: 10, borderRadius: "50%", background: "#00ff41", display: "inline-block" }} />
          <span style={{ fontFamily: '"Share Tech Mono", monospace', fontSize: "0.65rem", color: "#1a2332", marginLeft: "0.5rem" }}>
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
        <Counter target={nbProjects}   label="Projets"     color="#00ff41" />
        <Counter target={nbCategories} label="Catégories"  color="#00ffff" />
        <Counter target={nbLanguages}  label="Langages"    color="#bf00ff" />
      </div>

      {/* Flèche scroll */}
      <div
        style={{
          fontFamily: '"Share Tech Mono", monospace',
          fontSize: "0.75rem",
          color: "#00ff4144",
          animation: "pulse-neon 2s ease-in-out infinite",
          letterSpacing: "0.2em",
        }}
      >
        ↓ SCROLL ↓
      </div>
    </section>
  );
}
