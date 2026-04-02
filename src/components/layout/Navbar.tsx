"use client";

import { useProjectStore } from "@/store/useProjectStore";
import { Category, CATEGORY_ICONS } from "@/types/project";

const CATEGORIES = Object.values(Category);

export default function Navbar() {
  const { activeCategory, setCategory, resetFilters, activeLanguages, searchQuery } = useProjectStore();

  const hasActiveFilters =
    activeCategory !== null || activeLanguages.length > 0 || searchQuery !== "";

  return (
    <nav
      style={{
        position: "sticky",
        top: 0,
        zIndex: 50,
        borderBottom: "1px solid #1a2332",
        background: "rgba(10,10,10,0.85)",
        backdropFilter: "blur(8px)",
      }}
    >
      <div
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
          padding: "0 1.5rem",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          height: "56px",
          gap: "1rem",
        }}
      >
        {/* Logo */}
        <button
          onClick={resetFilters}
          style={{
            fontFamily: '"Orbitron", sans-serif',
            fontSize: "1rem",
            fontWeight: 700,
            color: "#00ff41",
            textShadow: "0 0 10px #00ff41",
            letterSpacing: "0.15em",
            background: "none",
            border: "none",
            cursor: "pointer",
            whiteSpace: "nowrap",
          }}
        >
          &lt;PORTFOLIO /&gt;
        </button>

        {/* Filtres catégories */}
        <div style={{ display: "flex", gap: "0.5rem", flexWrap: "wrap" }}>
          {CATEGORIES.map((cat) => {
            const isActive = activeCategory === cat;
            return (
              <button
                key={cat}
                onClick={() => setCategory(isActive ? null : cat)}
                style={{
                  fontFamily: '"Share Tech Mono", monospace',
                  fontSize: "0.7rem",
                  letterSpacing: "0.05em",
                  padding: "0.25rem 0.6rem",
                  background: isActive ? "#00ff4122" : "transparent",
                  border: `1px solid ${isActive ? "#00ff41" : "#1a2332"}`,
                  color: isActive ? "#00ff41" : "#00ff4166",
                  cursor: "pointer",
                  transition: "all 0.15s ease",
                  display: "flex",
                  alignItems: "center",
                  gap: "0.3rem",
                }}
              >
                <span>{CATEGORY_ICONS[cat]}</span>
                <span>{cat}</span>
              </button>
            );
          })}
        </div>

        {/* Reset */}
        {hasActiveFilters && (
          <button
            onClick={resetFilters}
            style={{
              fontFamily: '"Share Tech Mono", monospace',
              fontSize: "0.7rem",
              color: "#ff0040",
              border: "1px solid #ff004066",
              padding: "0.25rem 0.6rem",
              background: "transparent",
              cursor: "pointer",
              whiteSpace: "nowrap",
            }}
          >
            ✕ reset
          </button>
        )}
      </div>
    </nav>
  );
}
