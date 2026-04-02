import { create } from "zustand";
import { Category, Language, Project } from "@/types/project";

interface ModalState {
  isOpen: boolean;
  project: Project | null;
}

interface ProjectStore {
  // Filtres
  activeCategory: Category | null;
  activeLanguages: Language[];
  searchQuery: string;

  // Actions filtres
  setCategory: (cat: Category | null) => void;
  toggleLanguage: (lang: Language) => void;
  setSearchQuery: (q: string) => void;
  resetFilters: () => void;

  // Modal launcher
  modal: ModalState;
  openModal: (project: Project) => void;
  closeModal: () => void;
}

export const useProjectStore = create<ProjectStore>((set) => ({
  activeCategory: null,
  activeLanguages: [],
  searchQuery: "",

  setCategory: (cat) => set({ activeCategory: cat }),

  toggleLanguage: (lang) =>
    set((state) => ({
      activeLanguages: state.activeLanguages.includes(lang)
        ? state.activeLanguages.filter((l) => l !== lang)
        : [...state.activeLanguages, lang],
    })),

  setSearchQuery: (q) => set({ searchQuery: q }),

  resetFilters: () =>
    set({ activeCategory: null, activeLanguages: [], searchQuery: "" }),

  modal: { isOpen: false, project: null },
  openModal: (project) => set({ modal: { isOpen: true, project } }),
  closeModal: () => set({ modal: { isOpen: false, project: null } }),
}));
