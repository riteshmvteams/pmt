"use client";

import { useTheme } from "next-themes";

import { baseColors } from "@/config/baseColors";
import { cn } from "@/lib/utils";
import { useColorSetting } from "@/store/colorSetting";
import { Button } from "../ui/button";

export default function ColorSettings() {
  const { theme } = useTheme();
  const { color: activeColor, updateColor } = useColorSetting((state) => state);

  return (
    <div className="grid grid-cols-3 gap-3">
      {baseColors?.map((color) => {
        return (
          <Button
            key={color?.name}
            variant="outline"
            onClick={() => updateColor({ name: color?.name, theme })}
            className={cn(
              "flex gap-2 items-center ",
              activeColor === color?.name ? "ring-1 ring-ring" : ""
            )}
          >
            <span
              className="h-4 w-4 rounded-full"
              style={{
                background:
                  theme === "light"
                    ? `hsl(${color.activeColor.light})`
                    : `hsl(${color.activeColor.dark})`,
              }}
            ></span>{" "}
            <span className="flex-1 text-xs font-lexend font-light">
              {color?.label}
            </span>
          </Button>
        );
      })}
    </div>
  );
}
