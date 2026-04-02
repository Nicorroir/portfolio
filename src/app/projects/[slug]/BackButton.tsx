"use client";

import { useRouter } from "next/navigation";

export default function BackButton() {
  const router = useRouter();

  return (
    <button
      onClick={() => router.push("/")}
      style={{
        fontFamily: '"Share Tech Mono", monospace',
        fontSize: "0.75rem",
        color: "#00ff4166",
        background: "none",
        border: "none",
        cursor: "pointer",
        padding: "0",
        marginBottom: "1.5rem",
        display: "flex",
        alignItems: "center",
        gap: "0.4rem",
        transition: "color 0.2s",
      }}
      onMouseEnter={(e) => (e.currentTarget.style.color = "#00ff41")}
      onMouseLeave={(e) => (e.currentTarget.style.color = "#00ff4166")}
    >
      ← retour aux projets
    </button>
  );
}
