import { create } from "zustand";
import { SectionId } from "@/types";

interface UIState {
  // Loading
  isLoading: boolean;
  setIsLoading: (v: boolean) => void;

  // Active section for nav highlight
  activeSection: SectionId;
  setActiveSection: (section: SectionId) => void;

  // Command palette
  commandPaletteOpen: boolean;
  setCommandPaletteOpen: (v: boolean) => void;
  toggleCommandPalette: () => void;

  // Selected project modal
  selectedProjectId: string | null;
  setSelectedProjectId: (id: string | null) => void;

  // Mobile nav
  mobileNavOpen: boolean;
  setMobileNavOpen: (v: boolean) => void;
  toggleMobileNav: () => void;
}

export const useUIStore = create<UIState>((set) => ({
  isLoading: true,
  setIsLoading: (v) => set({ isLoading: v }),

  activeSection: "hero",
  setActiveSection: (section) => set({ activeSection: section }),

  commandPaletteOpen: false,
  setCommandPaletteOpen: (v) => set({ commandPaletteOpen: v }),
  toggleCommandPalette: () =>
    set((state) => ({ commandPaletteOpen: !state.commandPaletteOpen })),

  selectedProjectId: null,
  setSelectedProjectId: (id) => set({ selectedProjectId: id }),

  mobileNavOpen: false,
  setMobileNavOpen: (v) => set({ mobileNavOpen: v }),
  toggleMobileNav: () => set((state) => ({ mobileNavOpen: !state.mobileNavOpen })),
}));
