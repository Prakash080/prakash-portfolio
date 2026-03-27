"use client";

import { useEffect } from "react";
import { useUIStore } from "@/store";
import { SectionId } from "@/types";

/**
 * Tracks which section is closest to the top of the viewport on scroll
 * and updates the Zustand store accordingly. More reliable than a
 * rootMargin-based IntersectionObserver for nav highlight purposes.
 */
export function useActiveSection(sectionIds: SectionId[]) {
  const setActiveSection = useUIStore((s) => s.setActiveSection);

  useEffect(() => {
    function getActiveId(): SectionId {
      const scrollY = window.scrollY;
      const viewportMid = scrollY + window.innerHeight / 3;

      let bestId: SectionId = sectionIds[0];
      let bestTop = -Infinity;

      for (const id of sectionIds) {
        const el = document.getElementById(id);
        if (!el) continue;
        const top = el.getBoundingClientRect().top + scrollY;
        if (top <= viewportMid && top > bestTop) {
          bestTop = top;
          bestId = id;
        }
      }

      return bestId;
    }

    function onScroll() {
      setActiveSection(getActiveId());
    }

    // Set initial value
    onScroll();

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  // sectionIds is defined as a module-level const — stable reference
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [setActiveSection]);
}
