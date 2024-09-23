"use client";

import Sidebar from "@/components/sidebar/Sidebar";
import { cn } from "@/lib/utils";
import { useSidebarType } from "@/store/colorSetting";
import IconSidebar from "./IconSidebar";

export default function AppLayout({ children }: { children: React.ReactNode }) {
  const sidebarType = useSidebarType((state) => state?.sidebarType);
  return (
    <div className={cn("flex min-h-screen w-full duration-300")}>
      <div
        className={cn(
          "hidden border-r bg-muted/40 md:block sticky top-0 h-screen duration-500",
          sidebarType === "icon" ? "w-[80px]" : "w-[250px]"
        )}
      >
        {sidebarType === "icon" ? <IconSidebar /> : <Sidebar />}
      </div>
      {children}
    </div>
  );
}
