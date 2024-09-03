"use client";

import { usePathname } from "next/navigation";
import { ListCollapse, Menu } from "lucide-react";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { NAVIGATION_MENUS } from "@/config/menu";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { NavigationLink } from "./DesktopMenu";

export default function MobileMenu() {
  const pathname = usePathname();
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="outline" size="icon" className="shrink-0 md:hidden">
          <Menu className="h-5 w-5" />
          <span className="sr-only">Toggle navigation menu</span>
        </Button>
      </SheetTrigger>
      <SheetContent side="left" className="flex flex-col">
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
                      "bg-muted"
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
      </SheetContent>
    </Sheet>
  );
}
