import { create } from "zustand";

type State = {
  isGrid: false | true;
};

type Action = {
  updateView: (firstName: State["isGrid"]) => void;
};

export const useView = create<State & Action>((set) => ({
  isGrid: false,
  updateView: (newView) => set({ isGrid: newView }),
}));
