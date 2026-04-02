import Link from "next/link";

const PARCOURS = [
  {
    periode: "En cours",
    titre: "Bachelier en Informatique — 2ème année",
    soustitre: "IPAMC — Écaussinnes",
    lien: "https://www.etudierenhainaut.be/ipamc/pages/formations/6242-bac-en-informatique-nouvelle-formule-2.html",
    desc: "2ème année du bachelier en informatique. Approfondissement de la programmation orientée objet (C++, C#), mathématiques appliquées, développement web full-stack (PHP/MySQL) et bases de données.",
    note: "1ère année : module E-business à repasser",
    noteColor: "#ffb300",
    tags: ["C#", "C++", "PHP", "MySQL", "HTML/CSS", "Algorithmique"],
    color: "#00ff41",
    statut: "EN COURS",
  },
  {
    periode: "En cours",
    titre: "Technicien en Bureautique",
    soustitre: "IPAMC — Écaussinnes",
    lien: "https://www.etudierenhainaut.be/ipamc/pages/formations/6233-technicien-en-bureautique-2.html",
    desc: "Formation en bureautique couvrant la gestion administrative, les outils Office, la comptabilité de base et la communication professionnelle.",
    note: "3 modules à repasser · Stage · TFE restants",
    noteColor: "#ffb300",
    tags: ["Bureautique", "Office", "Administration", "Comptabilité"],
    color: "#00ffff",
    statut: "EN COURS",
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
              <div style={{ background: "rgba(13,17,23,0.6)", border: `1px solid ${item.color}33`, padding: "1rem 1.25rem" }}>

                {/* Titre + statut */}
                <div style={{ display: "flex", alignItems: "flex-start", justifyContent: "space-between", gap: "0.5rem", marginBottom: "0.25rem" }}>
                  <h3 style={{ fontFamily: '"Orbitron", sans-serif', fontSize: "0.85rem", color: item.color, margin: 0, fontWeight: 700 }}>
                    {item.titre}
                  </h3>
                  <span style={{ fontFamily: '"Share Tech Mono", monospace', fontSize: "0.6rem", color: item.color, border: `1px solid ${item.color}66`, padding: "0.1rem 0.4rem", whiteSpace: "nowrap", flexShrink: 0 }}>
                    {item.statut}
                  </span>
                </div>

                {/* Sous-titre avec lien */}
                <a
                  href={item.lien}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ fontFamily: '"Share Tech Mono", monospace', fontSize: "0.7rem", color: `${item.color}88`, textDecoration: "none", display: "inline-block", marginBottom: "0.75rem" }}
                >
                  ↗ {item.soustitre}
                </a>

                {/* Description */}
                <p style={{ fontFamily: '"Share Tech Mono", monospace', fontSize: "0.78rem", color: "#00ff4199", lineHeight: 1.7, margin: "0 0 0.75rem" }}>
                  {item.desc}
                </p>

                {/* Note (modules ratés, stage, etc.) */}
                <div style={{ fontFamily: '"Share Tech Mono", monospace', fontSize: "0.7rem", color: item.noteColor, border: `1px solid ${item.noteColor}44`, padding: "0.3rem 0.6rem", marginBottom: "0.75rem", display: "inline-block" }}>
                  ⚠ {item.note}
                </div>

                {/* Tags */}
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
