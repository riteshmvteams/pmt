"use client";

import { useSidebarType } from "@/store/colorSetting";
import { cn } from "@/lib/utils";

import { Button } from "../ui/button";
import Title from "../shared/Title";

export default function LayoutSettings() {
  const { updateSidebarType, sidebarType } = useSidebarType((state) => state);

  return (
    <div className="flex flex-col gap-4">
      <Title>Sidebar Type</Title>
      <div className="grid grid-cols-2 gap-3">
        <Button
          variant="outline"
          onClick={() => updateSidebarType("icon")}
          className={cn(
            "flex gap-2 items-center ",
            sidebarType === "icon" ? "ring-1 ring-ring" : ""
          )}
        >
          <span className="flex-1 text-sm font-lexend font-base">Icon</span>
        </Button>
        <Button
          variant="outline"
          onClick={() => updateSidebarType("default")}
          className={cn(
            "flex gap-2 items-center ",
            sidebarType === "default" ? "ring-1 ring-ring" : ""
          )}
        >
          <span className="flex-1 text-sm font-lexend font-base">Default</span>
        </Button>
      </div>
    </div>
  );
}
