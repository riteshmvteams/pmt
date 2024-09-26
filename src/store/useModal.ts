import { create } from "zustand";

type TModal = {
  isOpen: boolean;
  children: React.ReactNode;
  title: React.ReactNode;
  className: string;
  setOpen: (open: boolean) => void;
  setChildren: (children: React.ReactNode) => void;
  setTitle: (title: React.ReactNode) => void;
  setClassName: (className: string) => void;
};

export const useModal = create<TModal>((set) => ({
  isOpen: false,
  children: null,
  title: null,
  className: "",
  setOpen: (open) => set({ isOpen: open }),
  setChildren: (child) => set({ children: child }),
  setTitle: (title) => set({ title: title }),
  setClassName: (className) => set({ className: className }),
}));
