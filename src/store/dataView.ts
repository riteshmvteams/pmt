import { create } from "zustand";

// ======== Global View Settings
type GlobalState = {
  isGrid: false | true;
};

type GlobalAction = {
  updateView: (variable: GlobalState["isGrid"]) => void;
};

export const useView = create<GlobalState & GlobalAction>((set) => ({
  isGrid: false,
  updateView: (newView) => set({ isGrid: newView }),
}));

// ========= Task View Settings

type TaskView = {
  taskView: "table" | "kanban";
  updateTaskView: (variable: TaskView["taskView"]) => void;
};

export const useTaskView = create<TaskView>((set) => ({
  taskView: "table",
  updateTaskView: (newView) => set({ taskView: newView }),
}));
