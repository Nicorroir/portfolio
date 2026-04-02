import { useMemo } from "react";
import { useProjectStore } from "@/store/useProjectStore";
import { projects } from "@/data/projects";

export function useFilteredProjects() {
  const { activeCategory, activeLanguages, searchQuery } = useProjectStore();

  return useMemo(() => {
    return projects.filter((p) => {
      const matchCat =
        !activeCategory || p.category === activeCategory;

      const matchLang =
        activeLanguages.length === 0 ||
        activeLanguages.some((l) => p.languages.includes(l));

      const q = searchQuery.toLowerCase();
      const matchSearch =
        !q ||
        p.title.toLowerCase().includes(q) ||
        p.description.toLowerCase().includes(q) ||
        p.tags.some((t) => t.includes(q));

      return matchCat && matchLang && matchSearch;
    });
  }, [activeCategory, activeLanguages, searchQuery]);
}
