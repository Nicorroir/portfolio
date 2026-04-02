// ===== ENUMS =====

export enum Language {
  CSHARP     = "C#",
  CPP        = "C++",
  HTML_CSS   = "HTML/CSS",
  JAVASCRIPT = "JavaScript",
  PHP        = "PHP",
  SQL        = "SQL",
  TYPESCRIPT = "TypeScript",
}

export enum Category {
  ALGORITHMIQUE = "Algorithmique",
  MATHEMATIQUES = "Mathématiques",
  POO           = "POO",
  WEB           = "Web",
  BASE_DONNEES  = "Base de données",
}

export enum LaunchMode {
  IFRAME   = "iframe",    // Projet Web : rendu dans iframe sandboxée
  TERMINAL = "terminal",  // Projet console : simulation Xterm.js
  EXTERNAL = "external",  // Trop lourd : GitHub + vidéo démo
}

export enum Difficulty {
  DEBUTANT      = 1,
  INTERMEDIAIRE = 2,
  AVANCE        = 3,
}

// ===== CONFIGS DE LANCEMENT =====

export interface IframeLaunchConfig {
  mode: LaunchMode.IFRAME;
  iframeSrc: string;           // ex: "/projects/mon-site-web-v2/index.html"
  sandboxPermissions?: string; // ex: "allow-scripts allow-same-origin"
}

export interface TerminalLaunchConfig {
  mode: LaunchMode.TERMINAL;
  simulationKey: string;       // clé dans terminalScripts.ts
}

export interface ExternalLaunchConfig {
  mode: LaunchMode.EXTERNAL;
  githubUrl?: string;
  demoVideoUrl?: string;
  deployUrl?: string;
}

export type LaunchConfig =
  | IframeLaunchConfig
  | TerminalLaunchConfig
  | ExternalLaunchConfig;

// ===== OBJET PROJECT =====

export interface Project {
  id: string;               // slug kebab-case unique : "calcul-romain"
  title: string;
  description: string;      // Courte (2-3 phrases)
  longDescription?: string; // Pour la page /projects/[slug]
  category: Category;
  languages: Language[];
  tags: string[];
  difficulty: Difficulty;
  thumbnail: string;        // "/thumbnails/calcul-romain.webp"
  launch: LaunchConfig;
  featured: boolean;
  date: string;             // "YYYY-MM"
  sourceFolder: string;     // Chemin d'origine (documentation)
}

// ===== HELPERS =====

export const LANGUAGE_COLORS: Record<Language, string> = {
  [Language.CSHARP]:     "#00ff41", // vert matrix
  [Language.CPP]:        "#ff0040", // rouge
  [Language.HTML_CSS]:   "#0080ff", // bleu
  [Language.JAVASCRIPT]: "#ffb300", // amber
  [Language.PHP]:        "#bf00ff", // purple
  [Language.SQL]:        "#00ffff", // cyan
  [Language.TYPESCRIPT]: "#0080ff", // bleu
};

export const CATEGORY_ICONS: Record<Category, string> = {
  [Category.ALGORITHMIQUE]: "⚡",
  [Category.MATHEMATIQUES]: "∑",
  [Category.POO]:           "◈",
  [Category.WEB]:           "◉",
  [Category.BASE_DONNEES]:  "▣",
};

export const DIFFICULTY_LABELS: Record<Difficulty, string> = {
  [Difficulty.DEBUTANT]:      "[ LVL 1 ]",
  [Difficulty.INTERMEDIAIRE]: "[ LVL 2 ]",
  [Difficulty.AVANCE]:        "[ LVL 3 ]",
};
