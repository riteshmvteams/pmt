"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import { NAVIGATION_MENUS } from "@/config/menu";
import { cn } from "@/lib/utils";
import { Badge } from "@/components/ui/badge";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { ListCollapse } from "lucide-react";

interface MenuObject {
  id: number;
  title: string;
  href: string;
  icon: any;
  badge?: number;
}

export default function DesktopMenu() {
  const pathname = usePathname();

  return (
    <div className="flex-1">
      <nav className="grid items-start px-2 text-sm font-medium lg:px-4">
        {NAVIGATION_MENUS?.map((menu) => {
          return menu.href ? (
            <NavigationLink key={menu.id} menu={menu} isChild={false} />
          ) : (
            <Accordion
              type="single"
              collapsible
              className="w-full"
              key={menu.id}
            >
              <AccordionItem value="item-1" className="border-b-0 ">
                <AccordionTrigger
                  className={cn(
                    "flex items-center gap-3 rounded-lg px-3 py-2.5 text-muted-foreground transition-all hover:text-primary hover:no-underline",
                    (pathname === "/analytics" || pathname === "/archive") &&
                      "bg-primary/10 text-foreground"
                  )}
                >
                  <div className="flex gap-3 items-center">
                    <ListCollapse className="h-[18px] w-[18px]" />
                    {menu.title}
                  </div>
                </AccordionTrigger>
                <AccordionContent className="pb-0">
                  {menu.children?.map((child) => (
                    <NavigationLink
                      key={child.id}
                      menu={child}
                      isChild={true}
                    />
                  ))}
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          );
        })}
      </nav>
    </div>
  );
}

export const NavigationLink = ({
  menu,
  isChild,
}: {
  menu: MenuObject;
  isChild: boolean;
}) => {
  const pathname = usePathname();
  return (
    <Link
      href={menu.href}
      className={cn(
        "flex items-center gap-3 rounded-lg px-3 py-2.5 text-muted-foreground transition-all hover:text-foreground",
        pathname?.startsWith(menu.href) && "bg-primary/10 text-foreground",
        isChild && "pl-8",
        isChild &&
          pathname?.startsWith(menu.href) &&
          "text-primary bg-transparent"
      )}
    >
      <menu.icon className="h-[18px] w-[18px]" />
      {menu.title}
      {menu?.badge && (
        <Badge className="ml-auto flex h-6 w-6 shrink-0 items-center justify-center rounded-full font-lexend font-normal">
          {menu?.badge}
        </Badge>
      )}
    </Link>
  );
};
