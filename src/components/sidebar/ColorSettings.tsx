"use client";

import { colors } from "@/config/color";
import { useTheme } from "next-themes";
import { Button } from "../ui/button";

export default function ColorSettings() {
  const { theme } = useTheme();
  const changeColor = (color: string) => {
    document.documentElement.style.setProperty("--primary", color);
  };
  return (
    <div className="grid grid-cols-3 gap-3">
      {colors?.map((color) => {
        return (
          <Button
            key={color?.name}
            variant="outline"
            onClick={() =>
              changeColor(
                theme === "light" ? color.primary.light : color.primary.dark
              )
            }
            className="flex gap-2 items-center"
          >
            <span
              className="h-4 w-4 rounded-full"
              style={{
                background:
                  theme === "light"
                    ? `hsl(${color.primary.light})`
                    : `hsl(${color.primary.dark})`,
              }}
            ></span>{" "}
            <span className="flex-1 text-xs font-lexend font-light">
              {color?.name}
            </span>
          </Button>
        );
      })}
    </div>
  );
}
