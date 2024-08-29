"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import { Badge } from "@/components/ui/badge";
import { NAVIGATION_MENUS } from "@/config/menu";
import { cn } from "@/lib/utils";

export default function DesktopMenu() {
  const pathname = usePathname();

  return (
    <div className="flex-1">
      <nav className="grid items-start px-2 text-sm font-medium lg:px-4">
        {NAVIGATION_MENUS?.map((menu) => {
          return (
            <Link
              key={menu.id}
              href={menu.href}
              className={cn(
                "flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary",
                pathname === menu.href && "bg-muted"
              )}
            >
              <menu.icon className="h-4 w-4" />
              {menu.title}
              {menu?.badge && (
                <Badge className="ml-auto flex h-6 w-6 shrink-0 items-center justify-center rounded-full">
                  {menu?.badge}
                </Badge>
              )}
            </Link>
          );
        })}
      </nav>
    </div>
  );
}
