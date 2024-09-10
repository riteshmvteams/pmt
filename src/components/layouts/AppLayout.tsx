"use client";

import Sidebar from "@/components/sidebar/Sidebar";
import { cn } from "@/lib/utils";
import { useSidebarType } from "@/store/colorSetting";
import IconSidebar from "./IconSidebar";

export default function AppLayout({ children }: { children: React.ReactNode }) {
  const sidebarType = useSidebarType((state) => state?.sidebarType);
  return (
    <div
      className={cn(
        "grid min-h-screen w-full duration-300",
        sidebarType === "icon"
          ? "md:grid-cols-[80px_1fr] lg:grid-cols-[80px_1fr]"
          : "md:grid-cols-[220px_1fr] lg:grid-cols-[280px_1fr]"
      )}
    >
      {sidebarType === "icon" ? <IconSidebar /> : <Sidebar />}
      {children}
    </div>
  );
}
