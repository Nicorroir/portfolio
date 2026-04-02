import Link from "next/link";

const PARCOURS = [
  {
    periode: "2023 — 2024",
    titre: "Découverte de la programmation",
    desc: "Premiers pas en C# avec l'algorithmique procédurale (PAP). Apprentissage des bases : variables, conditions, boucles, fonctions, tableaux.",
    tags: ["C#", "Algorithmique", "Console"],
    color: "#00ff41",
  },
  {
    periode: "2024 — 2025",
    titre: "Programmation Orientée Objet",
    desc: "Transition vers le C++ et les concepts avancés : classes, héritage, polymorphisme, encapsulation. Projets de simulation et de gestion.",
    tags: ["C++", "C#", "POO", "Héritage"],
    color: "#00ffff",
  },
  {
    periode: "2024 — 2025",
    titre: "Mathématiques & Algorithmique avancée",
    desc: "Algèbre linéaire, matrices, systèmes d'équations. Implémentation de l'algorithme hongrois pour l'optimisation combinatoire.",
    tags: ["C#", "Matrices", "LUP", "Optimisation"],
    color: "#bf00ff",
  },
  {
    periode: "2025",
    titre: "Développement Web Full-Stack",
    desc: "HTML, CSS, JavaScript côté frontend. PHP et MySQL côté backend. Création de sites dynamiques avec formulaires et bases de données.",
    tags: ["HTML/CSS", "JavaScript", "PHP", "MySQL"],
    color: "#0080ff",
  },
];

export default function AboutSection() {
  return (
    <section style={{ maxWidth: "1200px", margin: "0 auto", padding: "0 1.5rem 5rem" }}>

      {/* Présentation du site */}
      <div style={{ marginBottom: "4rem" }}>
        <div style={{ display: "flex", alignItems: "center", gap: "1rem", marginBottom: "1.5rem" }}>
          <h2 style={{ fontFamily: '"Orbitron", sans-serif', fontSize: "1rem", fontWeight: 700, color: "#00ff41", margin: 0, letterSpacing: "0.2em" }}>
            // À PROPOS DU SITE
          </h2>
          <div style={{ flex: 1, height: "1px", background: "#1a2332" }} />
        </div>

        <div
          style={{
            background: "rgba(13,17,23,0.8)",
            border: "1px solid #1a2332",
            padding: "1.5rem 2rem",
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
            gap: "1.5rem",
          }}
        >
          {[
            { icon: "⚡", titre: "Projets interactifs", desc: "Chaque projet peut être lancé directement depuis le site — simulation terminal pour les applications console, iframe pour les projets web." },
            { icon: "◈", titre: "Filtrage par technologie", desc: "Navigue par catégorie (Algorithmique, POO, Web…) ou filtre par langage (C#, C++, PHP…) pour retrouver rapidement ce qui t'intéresse." },
            { icon: "∑", titre: "Progression visible", desc: "Les projets sont datés et classés par difficulté, reflétant la progression réelle tout au long du bachelier en informatique." },
          ].map(({ icon, titre, desc }) => (
            <div key={titre} style={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}>
              <div style={{ fontFamily: '"Orbitron", sans-serif', fontSize: "1.2rem", color: "#00ff41" }}>{icon}</div>
              <div style={{ fontFamily: '"Orbitron", sans-serif', fontSize: "0.8rem", color: "#00ff41", fontWeight: 700 }}>{titre}</div>
              <p style={{ fontFamily: '"Share Tech Mono", monospace', fontSize: "0.78rem", color: "#00ff4199", lineHeight: 1.7, margin: 0 }}>{desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Parcours */}
      <div>
        <div style={{ display: "flex", alignItems: "center", gap: "1rem", marginBottom: "2rem" }}>
          <h2 style={{ fontFamily: '"Orbitron", sans-serif', fontSize: "1rem", fontWeight: 700, color: "#00ff41", margin: 0, letterSpacing: "0.2em" }}>
            // MON PARCOURS
          </h2>
          <div style={{ flex: 1, height: "1px", background: "#1a2332" }} />
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: "0" }}>
          {PARCOURS.map((item, i) => (
            <div
              key={i}
              style={{
                display: "grid",
                gridTemplateColumns: "160px 1px 1fr",
                gap: "0 1.5rem",
                paddingBottom: "2rem",
              }}
            >
              {/* Date */}
              <div style={{ textAlign: "right", paddingTop: "0.2rem" }}>
                <span style={{ fontFamily: '"Share Tech Mono", monospace', fontSize: "0.7rem", color: item.color }}>
                  {item.periode}
                </span>
              </div>

              {/* Timeline */}
              <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
                <div style={{ width: 10, height: 10, background: item.color, boxShadow: `0 0 8px ${item.color}`, flexShrink: 0 }} />
                {i < PARCOURS.length - 1 && (
                  <div style={{ width: 1, flex: 1, background: "#1a2332", marginTop: 4 }} />
                )}
              </div>

              {/* Contenu */}
              <div style={{ background: "rgba(13,17,23,0.6)", border: `1px solid ${item.color}33`, padding: "1rem 1.25rem", marginBottom: i < PARCOURS.length - 1 ? "0" : "0" }}>
                <h3 style={{ fontFamily: '"Orbitron", sans-serif', fontSize: "0.85rem", color: item.color, margin: "0 0 0.5rem", fontWeight: 700 }}>
                  {item.titre}
                </h3>
                <p style={{ fontFamily: '"Share Tech Mono", monospace', fontSize: "0.78rem", color: "#00ff4199", lineHeight: 1.7, margin: "0 0 0.75rem" }}>
                  {item.desc}
                </p>
                <div style={{ display: "flex", gap: "0.3rem", flexWrap: "wrap" }}>
                  {item.tags.map((tag) => (
                    <span key={tag} style={{ fontFamily: '"Share Tech Mono", monospace', fontSize: "0.65rem", color: item.color, border: `1px solid ${item.color}44`, padding: "0.1rem 0.4rem" }}>
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* CTA */}
      <div style={{ textAlign: "center", marginTop: "1rem" }}>
        <Link
          href="/projects"
          style={{
            fontFamily: '"Orbitron", sans-serif',
            fontSize: "0.85rem",
            fontWeight: 700,
            letterSpacing: "0.15em",
            color: "#00ff41",
            border: "1px solid #00ff41",
            boxShadow: "0 0 10px #00ff4166",
            padding: "0.75rem 2.5rem",
            textDecoration: "none",
            display: "inline-block",
            transition: "all 0.2s",
          }}
        >
          ⚡ VOIR TOUS LES PROJETS
        </Link>
      </div>

    </section>
  );
}
