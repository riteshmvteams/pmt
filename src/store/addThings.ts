import { create } from "zustand";

type TAddThings = {
  target: string | null;
  open: boolean;
  updateAddThing: (target: string | null, open: boolean) => void;
  setOpen: (open: boolean) => void;
};

export const useAddThing = create<TAddThings>((set) => ({
  target: null,
  open: false,
  updateAddThing: (target: string | null, open: boolean) => {
    return set({ target, open });
  },
  setOpen: (open: boolean) => set({ open: open }),
}));
