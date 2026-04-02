import { Language, Difficulty, LANGUAGE_COLORS, DIFFICULTY_LABELS } from "@/types/project";

/** Convertit un titre en slug kebab-case */
export function slugify(text: string): string {
  return text
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

/** Retourne la couleur hex associée à un langage */
export function getLangColor(lang: Language): string {
  return LANGUAGE_COLORS[lang] ?? "#00ff41";
}

/** Retourne le label de difficulté formaté */
export function getDifficultyLabel(d: Difficulty): string {
  return DIFFICULTY_LABELS[d] ?? "[ LVL ? ]";
}

/** Retourne la couleur de difficulté */
export function getDifficultyColor(d: Difficulty): string {
  switch (d) {
    case Difficulty.DEBUTANT:      return "#00ff41";
    case Difficulty.INTERMEDIAIRE: return "#ffb300";
    case Difficulty.AVANCE:        return "#ff0040";
  }
}

/** Formate une date YYYY-MM en français */
export function formatDate(date: string): string {
  const [year, month] = date.split("-");
  const months = [
    "Jan", "Fév", "Mar", "Avr", "Mai", "Jun",
    "Jul", "Aoû", "Sep", "Oct", "Nov", "Déc",
  ];
  return `${months[parseInt(month) - 1]} ${year}`;
}
