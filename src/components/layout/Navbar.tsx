"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const LINKS = [
  { href: "/",         label: "Accueil",  icon: "◈" },
  { href: "/projects", label: "Projets",  icon: "⚡" },
  { href: "/contact",  label: "Contact",  icon: "◉" },
];

export default function Navbar() {
  const pathname = usePathname();

  return (
    <nav
      style={{
        position: "sticky",
        top: 0,
        zIndex: 50,
        borderBottom: "1px solid #21262d",
        background: "rgba(22,27,34,0.85)",
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
        }}
      >
        {/* Logo */}
        <Link
          href="/"
          style={{
            fontFamily: '"Orbitron", sans-serif',
            fontSize: "1rem",
            fontWeight: 700,
            color: "#58a6ff",
            textShadow: "0 0 10px #58a6ff",
            letterSpacing: "0.15em",
            textDecoration: "none",
            whiteSpace: "nowrap",
          }}
        >
          &lt;PORTFOLIO /&gt;
        </Link>

        {/* Liens */}
        <div style={{ display: "flex", gap: "0.25rem" }}>
          {LINKS.map(({ href, label, icon }) => {
            const isActive = pathname === href;
            return (
              <Link
                key={href}
                href={href}
                style={{
                  fontFamily: '"Share Tech Mono", monospace',
                  fontSize: "0.8rem",
                  letterSpacing: "0.08em",
                  padding: "0.35rem 0.9rem",
                  background: isActive ? "#58a6ff22" : "transparent",
                  border: `1px solid ${isActive ? "#58a6ff" : "transparent"}`,
                  color: isActive ? "#58a6ff" : "#58a6ff99",
                  textDecoration: "none",
                  display: "flex",
                  alignItems: "center",
                  gap: "0.35rem",
                  transition: "all 0.15s ease",
                }}
                onMouseEnter={(e) => {
                  if (!isActive) {
                    e.currentTarget.style.color = "#58a6ff";
                    e.currentTarget.style.borderColor = "#58a6ff55";
                  }
                }}
                onMouseLeave={(e) => {
                  if (!isActive) {
                    e.currentTarget.style.color = "#58a6ff99";
                    e.currentTarget.style.borderColor = "transparent";
                  }
                }}
              >
                <span>{icon}</span>
                <span>{label}</span>
              </Link>
            );
          })}
        </div>
      </div>
    </nav>
  );
}
