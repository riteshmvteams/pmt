import { baseColors } from "@/config/baseColors";
import { getLocalStorageValue } from "@/lib/helpers";
import { create } from "zustand";

const variables = [
  "background",
  "foreground",
  "card",
  "card-foreground",
  "popover",
  "popover-foreground",
  "primary",
  "primary-foreground",
  "secondary",
  "secondary-foreground",
  "muted",
  "muted-foreground",
  "accent",
  "accent-foreground",
  "destructive",
  "destructive-foreground",
  "border",
  "input",
  "ring",
  "chart-1",
  "chart-2",
  "chart-3",
  "chart-4",
  "chart-5",
];

type TColorSetting = {
  color: string;
  updateColor: (variable: { name: string; theme: string | undefined }) => void;
};

export const useColorSetting = create<TColorSetting>((set) => ({
  color: getLocalStorageValue("color") || "blue",
  updateColor: (payload) => {
    const colorObj: any = baseColors?.filter(
      (color) => color?.name === payload?.name
    )[0];

    variables?.forEach((varName) => {
      document.documentElement.style.setProperty(
        `--${varName}`,
        payload.theme === "light"
          ? colorObj?.cssVars?.light[varName]
          : colorObj?.cssVars?.dark[varName]
      );
    });

    localStorage.setItem("color", payload?.name);
    return set({ color: payload?.name });
  },
}));

// sidebar layout
type TSidebar = {
  sidebarType: "default" | "icon";
  updateSidebarType: (variable: TSidebar["sidebarType"]) => void;
};
export const useSidebarType = create<TSidebar>((set) => ({
  sidebarType: "default",
  updateSidebarType: (payload) => {
    return set({ sidebarType: payload });
  },
}));
