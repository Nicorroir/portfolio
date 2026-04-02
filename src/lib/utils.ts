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
  return LANGUAGE_COLORS[lang] ?? "#58a6ff";
}

/** Retourne le label de difficulté formaté */
export function getDifficultyLabel(d: Difficulty): string {
  return DIFFICULTY_LABELS[d] ?? "[ LVL ? ]";
}

/** Retourne la couleur de difficulté */
export function getDifficultyColor(d: Difficulty): string {
  switch (d) {
    case Difficulty.DEBUTANT:      return "#58a6ff";
    case Difficulty.INTERMEDIAIRE: return "#e3b341";
    case Difficulty.AVANCE:        return "#f85149";
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
