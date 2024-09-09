"use client";

import { useTheme } from "next-themes";
import { Button } from "../ui/button";
import { baseColors } from "@/config/baseColors";
import { useState } from "react";
import { cn } from "@/lib/utils";

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

export default function ColorSettings() {
  const { theme } = useTheme();
  const [activeColor, setActiveColor] = useState("zinc");

  const changeColor = (colorIndex: number) => {
    const colorObj: any = baseColors[colorIndex];
    setActiveColor(colorObj?.name);

    variables?.forEach((varName) => {
      document.documentElement.style.setProperty(
        `--${varName}`,
        theme === "light"
          ? colorObj?.cssVars?.light[varName]
          : colorObj?.cssVars?.dark[varName]
      );
    });
  };

  return (
    <div className="grid grid-cols-3 gap-3">
      {baseColors?.map((color, index) => {
        return (
          <Button
            key={color?.name}
            variant="outline"
            onClick={() => changeColor(index)}
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
