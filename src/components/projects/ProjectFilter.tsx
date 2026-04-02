"use client";

import { useProjectStore } from "@/store/useProjectStore";
import { Language, LANGUAGE_COLORS } from "@/types/project";
import { useFilteredProjects } from "@/hooks/useFilteredProjects";

const LANGUAGES = Object.values(Language);

export default function ProjectFilter() {
  const { activeLanguages, toggleLanguage, searchQuery, setSearchQuery } =
    useProjectStore();
  const filtered = useFilteredProjects();

  return (
    <div
      style={{
        maxWidth: "1200px",
        margin: "0 auto",
        padding: "1.5rem",
        display: "flex",
        flexDirection: "column",
        gap: "1rem",
      }}
    >
      {/* Barre de recherche */}
      <div style={{ position: "relative" }}>
        <span
          style={{
            position: "absolute",
            left: "0.75rem",
            top: "50%",
            transform: "translateY(-50%)",
            fontFamily: '"Share Tech Mono", monospace',
            color: "#00ff4166",
            fontSize: "0.85rem",
            pointerEvents: "none",
          }}
        >
          &gt;_
        </span>
        <input
          type="text"
          placeholder="rechercher un projet, tag, langage..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          style={{
            width: "100%",
            background: "rgba(13,17,23,0.8)",
            border: "1px solid #1a2332",
            color: "#00ff41",
            fontFamily: '"Share Tech Mono", monospace',
            fontSize: "0.85rem",
            padding: "0.6rem 0.75rem 0.6rem 2.5rem",
            outline: "none",
            transition: "border-color 0.2s",
          }}
          onFocus={(e) =>
            (e.target.style.borderColor = "#00ff41")
          }
          onBlur={(e) =>
            (e.target.style.borderColor = "#1a2332")
          }
        />
      </div>

      {/* Filtres langages + compteur */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          flexWrap: "wrap",
          gap: "0.5rem",
        }}
      >
        <span
          style={{
            fontFamily: '"Share Tech Mono", monospace',
            fontSize: "0.7rem",
            color: "#00ff4144",
            marginRight: "0.25rem",
          }}
        >
          LANG:
        </span>

        {LANGUAGES.map((lang) => {
          const isActive = activeLanguages.includes(lang);
          const color = LANGUAGE_COLORS[lang];
          return (
            <button
              key={lang}
              onClick={() => toggleLanguage(lang)}
              style={{
                fontFamily: '"Share Tech Mono", monospace',
                fontSize: "0.7rem",
                padding: "0.2rem 0.6rem",
                background: isActive ? `${color}22` : "transparent",
                border: `1px solid ${isActive ? color : "#1a2332"}`,
                color: isActive ? color : "#00ff4144",
                cursor: "pointer",
                transition: "all 0.15s ease",
              }}
            >
              {lang}
            </button>
          );
        })}

        {/* Compteur résultats */}
        <span
          style={{
            marginLeft: "auto",
            fontFamily: '"Share Tech Mono", monospace',
            fontSize: "0.7rem",
            color: "#00ff4166",
          }}
        >
          <span style={{ color: "#00ff41" }}>{filtered.length}</span> résultat
          {filtered.length !== 1 ? "s" : ""}
        </span>
      </div>
    </div>
  );
}
