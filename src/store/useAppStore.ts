import { create } from "zustand";

interface AppState {
  isMobileMenuOpen: boolean;
  activeSection: string;
  toggleMobileMenu: () => void;
  closeMobileMenu: () => void;
  setActiveSection: (section: string) => void;
}

export const useAppStore = create<AppState>((set) => ({
  isMobileMenuOpen: false,
  activeSection: "home",
  toggleMobileMenu: () =>
    set((state) => ({ isMobileMenuOpen: !state.isMobileMenuOpen })),
  closeMobileMenu: () => set({ isMobileMenuOpen: false }),
  setActiveSection: (section) => set({ activeSection: section }),
}));
