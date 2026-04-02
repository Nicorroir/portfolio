import { Language, Category, LANGUAGE_COLORS, CATEGORY_ICONS } from "@/types/project";

interface LanguageBadgeProps {
  language: Language;
  size?: "sm" | "md";
}

export function LanguageBadge({ language, size = "sm" }: LanguageBadgeProps) {
  const color = LANGUAGE_COLORS[language];
  const padding = size === "sm" ? "0.15rem 0.5rem" : "0.25rem 0.75rem";
  const fontSize = size === "sm" ? "0.7rem" : "0.8rem";

  return (
    <span
      style={{
        border: `1px solid ${color}`,
        color,
        padding,
        fontSize,
        fontFamily: '"Share Tech Mono", monospace',
        letterSpacing: "0.05em",
        display: "inline-block",
        lineHeight: 1.4,
      }}
    >
      {language}
    </span>
  );
}

interface CategoryBadgeProps {
  category: Category;
}

const CATEGORY_COLORS: Record<Category, string> = {
  [Category.ALGORITHMIQUE]: "#58a6ff",
  [Category.MATHEMATIQUES]: "#a371f7",
  [Category.POO]:           "#f85149",
  [Category.WEB]:           "#79c0ff",
  [Category.BASE_DONNEES]:  "#f78166",
};

export function CategoryBadge({ category }: CategoryBadgeProps) {
  const color = CATEGORY_COLORS[category];
  const icon  = CATEGORY_ICONS[category];

  return (
    <span
      style={{
        border: `1px solid ${color}`,
        color,
        padding: "0.2rem 0.6rem",
        fontSize: "0.75rem",
        fontFamily: '"Share Tech Mono", monospace',
        letterSpacing: "0.05em",
        display: "inline-flex",
        alignItems: "center",
        gap: "0.3rem",
      }}
    >
      <span>{icon}</span>
      <span>{category}</span>
    </span>
  );
}
