"use client";

import { useSidebarType } from "@/store/colorSetting";
import { Button } from "../ui/button";
import { MenuIcon } from "lucide-react";

export default function SidebarToogle() {
  const { sidebarType, updateSidebarType } = useSidebarType((state) => state);

  return (
    <div className="hidden md:block">
      <Button
        className="h-10 w-12"
        variant="outline"
        size="icon"
        onClick={() => {
          updateSidebarType(sidebarType === "default" ? "icon" : "default");
        }}
      >
        <MenuIcon className="h-5 w-5" />
      </Button>
    </div>
  );
}
