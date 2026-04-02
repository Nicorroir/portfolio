"use client";

import { useState } from "react";

export default function ContactPage() {
  const [form, setForm] = useState({ nom: "", email: "", message: "" });
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Ouvre le client mail avec les données pré-remplies
    const subject = encodeURIComponent(`Portfolio — Message de ${form.nom}`);
    const body = encodeURIComponent(`Nom : ${form.nom}\nEmail : ${form.email}\n\n${form.message}`);
    window.location.href = `mailto:nicolas.terroir@hainaut-ea.be?subject=${subject}&body=${body}`;
    setSent(true);
  };

  return (
    <div style={{ maxWidth: "700px", margin: "0 auto", padding: "2rem 1.5rem 5rem" }}>

      {/* Titre */}
      <div style={{ marginBottom: "2.5rem" }}>
        <h1
          style={{
            fontFamily: '"Orbitron", sans-serif',
            fontSize: "clamp(1.2rem, 3vw, 1.8rem)",
            fontWeight: 900,
            color: "#00ff41",
            textShadow: "0 0 15px #00ff4166",
            margin: "0 0 0.5rem",
            letterSpacing: "0.15em",
          }}
        >
          ◉ CONTACT
        </h1>
        <p style={{ fontFamily: '"Share Tech Mono", monospace', fontSize: "0.8rem", color: "#00ff4166", margin: 0 }}>
          Une question, une opportunité, une collaboration ?
        </p>
      </div>

      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1.5rem", marginBottom: "2.5rem" }}>

        {/* Infos */}
        <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
          <div style={{ fontFamily: '"Share Tech Mono", monospace', fontSize: "0.7rem", color: "#00ff4144", letterSpacing: "0.15em", marginBottom: "0.25rem" }}>
            // INFORMATIONS
          </div>

          {[
            { label: "Étudiant", value: "Bachelier en Informatique", color: "#00ff41" },
            { label: "École", value: "IPAMC — Écaussinnes", color: "#00ffff" },
            { label: "Email école", value: "nicolas.terroir@hainaut-ea.be", color: "#00ff41", isEmail: true },
            { label: "Email perso", value: "Primo-nt@hotmail.com", color: "#00ff41", isEmail: true },
            { label: "Email perso 2", value: "nterroir@gmail.com", color: "#00ff41", isEmail: true },
            { label: "GitHub", value: "github.com/Nicorroir", color: "#bf00ff", isLink: "https://github.com/Nicorroir" },
          ].map(({ label, value, color, isEmail, isLink }) => (
            <div key={label} style={{ borderLeft: `2px solid ${color}44`, paddingLeft: "0.75rem" }}>
              <div style={{ fontFamily: '"Share Tech Mono", monospace', fontSize: "0.65rem", color: "#00ff4144" }}>{label}</div>
              {isEmail ? (
                <a href={`mailto:${value}`} style={{ fontFamily: '"Share Tech Mono", monospace', fontSize: "0.78rem", color, textDecoration: "none" }}>{value}</a>
              ) : isLink ? (
                <a href={isLink} target="_blank" rel="noopener noreferrer" style={{ fontFamily: '"Share Tech Mono", monospace', fontSize: "0.78rem", color, textDecoration: "none" }}>{value}</a>
              ) : (
                <div style={{ fontFamily: '"Share Tech Mono", monospace', fontSize: "0.78rem", color }}>{value}</div>
              )}
            </div>
          ))}
        </div>

        {/* Disponibilité */}
        <div style={{ background: "rgba(13,17,23,0.8)", border: "1px solid #1a2332", padding: "1.25rem", display: "flex", flexDirection: "column", gap: "0.75rem" }}>
          <div style={{ fontFamily: '"Share Tech Mono", monospace', fontSize: "0.7rem", color: "#00ff4144", letterSpacing: "0.15em" }}>
            // STATUT
          </div>
          <div style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
            <span style={{ width: 8, height: 8, background: "#00ff41", borderRadius: "50%", display: "inline-block", boxShadow: "0 0 6px #00ff41", animation: "pulse-neon 2s ease-in-out infinite" }} />
            <span style={{ fontFamily: '"Share Tech Mono", monospace', fontSize: "0.8rem", color: "#00ff41" }}>
              Disponible
            </span>
          </div>
          <p style={{ fontFamily: '"Share Tech Mono", monospace', fontSize: "0.75rem", color: "#00ff4199", lineHeight: 1.7, margin: 0 }}>
            Étudiant en bachelier informatique à l&apos;IPAMC (Écaussinnes), ouvert aux stages, projets collaboratifs et opportunités professionnelles.
          </p>
          <div style={{ marginTop: "auto" }}>
            {["Stage", "Projet collaboratif", "Freelance"].map((tag) => (
              <span key={tag} style={{ fontFamily: '"Share Tech Mono", monospace', fontSize: "0.65rem", color: "#00ff41", border: "1px solid #00ff4144", padding: "0.1rem 0.4rem", marginRight: "0.3rem", display: "inline-block", marginBottom: "0.3rem" }}>
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Formulaire */}
      <div>
        <div style={{ fontFamily: '"Share Tech Mono", monospace', fontSize: "0.7rem", color: "#00ff4144", letterSpacing: "0.15em", marginBottom: "1rem" }}>
          // ENVOYER UN MESSAGE
        </div>

        {sent ? (
          <div style={{ background: "rgba(0,255,65,0.05)", border: "1px solid #00ff41", padding: "2rem", textAlign: "center" }}>
            <div style={{ fontFamily: '"Orbitron", sans-serif', fontSize: "1.5rem", color: "#00ff41", marginBottom: "0.5rem" }}>✓</div>
            <div style={{ fontFamily: '"Share Tech Mono", monospace', fontSize: "0.85rem", color: "#00ff41" }}>
              Client mail ouvert avec ton message !
            </div>
          </div>
        ) : (
          <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
            {/* Nom + Email */}
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1rem" }}>
              {[
                { id: "nom",   label: "Nom",   placeholder: "Ton nom",   type: "text" },
                { id: "email", label: "Email", placeholder: "ton@email.com", type: "email" },
              ].map(({ id, label, placeholder, type }) => (
                <div key={id} style={{ display: "flex", flexDirection: "column", gap: "0.3rem" }}>
                  <label style={{ fontFamily: '"Share Tech Mono", monospace', fontSize: "0.7rem", color: "#00ff4166" }}>
                    {label} <span style={{ color: "#ff0040" }}>*</span>
                  </label>
                  <input
                    type={type}
                    required
                    placeholder={placeholder}
                    value={form[id as "nom" | "email"]}
                    onChange={(e) => setForm((f) => ({ ...f, [id]: e.target.value }))}
                    style={{
                      background: "rgba(13,17,23,0.8)",
                      border: "1px solid #1a2332",
                      color: "#00ff41",
                      fontFamily: '"Share Tech Mono", monospace',
                      fontSize: "0.82rem",
                      padding: "0.5rem 0.75rem",
                      outline: "none",
                    }}
                    onFocus={(e) => (e.target.style.borderColor = "#00ff41")}
                    onBlur={(e) => (e.target.style.borderColor = "#1a2332")}
                  />
                </div>
              ))}
            </div>

            {/* Message */}
            <div style={{ display: "flex", flexDirection: "column", gap: "0.3rem" }}>
              <label style={{ fontFamily: '"Share Tech Mono", monospace', fontSize: "0.7rem", color: "#00ff4166" }}>
                Message <span style={{ color: "#ff0040" }}>*</span>
              </label>
              <textarea
                required
                rows={5}
                placeholder="Ton message..."
                value={form.message}
                onChange={(e) => setForm((f) => ({ ...f, message: e.target.value }))}
                style={{
                  background: "rgba(13,17,23,0.8)",
                  border: "1px solid #1a2332",
                  color: "#00ff41",
                  fontFamily: '"Share Tech Mono", monospace',
                  fontSize: "0.82rem",
                  padding: "0.5rem 0.75rem",
                  outline: "none",
                  resize: "vertical",
                }}
                onFocus={(e) => (e.target.style.borderColor = "#00ff41")}
                onBlur={(e) => (e.target.style.borderColor = "#1a2332")}
              />
            </div>

            {/* Submit */}
            <button
              type="submit"
              style={{
                fontFamily: '"Orbitron", sans-serif',
                fontSize: "0.8rem",
                fontWeight: 700,
                letterSpacing: "0.15em",
                color: "#00ff41",
                border: "1px solid #00ff41",
                boxShadow: "0 0 10px #00ff4166",
                padding: "0.75rem 2rem",
                background: "transparent",
                cursor: "pointer",
                transition: "all 0.2s",
                alignSelf: "flex-start",
              }}
              onMouseEnter={(e) => { e.currentTarget.style.background = "#00ff4122"; e.currentTarget.style.boxShadow = "0 0 20px #00ff4188"; }}
              onMouseLeave={(e) => { e.currentTarget.style.background = "transparent"; e.currentTarget.style.boxShadow = "0 0 10px #00ff4166"; }}
            >
              ◉ ENVOYER
            </button>
          </form>
        )}
      </div>
    </div>
  );
}
