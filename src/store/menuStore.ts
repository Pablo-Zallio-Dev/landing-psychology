import { create } from "zustand";

interface MenuMobile {
  isOpen: boolean;
  changeState: () => void
  closeMenu: () => void
}

export const useMenuMobile = create<MenuMobile>((set) => ({
  isOpen: false,
  changeState: () => {
    set((state) => ({
        isOpen: !state.isOpen
    }))
  },
  closeMenu: () => set({ isOpen: false }),
}));
