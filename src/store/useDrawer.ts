import { create } from "zustand";

type TDrawer = {
  isOpen: boolean;
  side: "left" | "right" | "top" | "bottom";
  children: React.ReactNode;
  title: React.ReactNode;
  className: string;
  setDrawerOpen: (open: boolean) => void;
  setDrawerChildren: (children: React.ReactNode) => void;
  setDrawerTitle: (title: React.ReactNode) => void;
  setDrawerClassName: (className: string) => void;
  setSide: (side: "left" | "right" | "top" | "bottom") => void;
};

export const useDrawer = create<TDrawer>((set) => ({
  isOpen: false,
  children: null,
  title: null,
  side: "right",
  className: "",
  setDrawerOpen: (open) => set({ isOpen: open }),
  setDrawerChildren: (child) => set({ children: child }),
  setDrawerTitle: (title) => set({ title: title }),
  setDrawerClassName: (className) => set({ className: className }),
  setSide: (side) => set({ side: side }),
}));
