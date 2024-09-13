"use client";

import { useSidebarType } from "@/store/colorSetting";
import { Button } from "../ui/button";
import { MenuIcon } from "lucide-react";

export default function SidebarToogle() {
  const { sidebarType, updateSidebarType } = useSidebarType((state) => state);

  return (
    <div className="hidden md:block relative">
      <Button
        onClick={() => {
          updateSidebarType(sidebarType === "default" ? "icon" : "default");
        }}
        variant="outline"
        className="px-2.5 text-muted-foreground"
      >
        <MenuIcon className="h-5 w-5" />
      </Button>
    </div>
  );
}
