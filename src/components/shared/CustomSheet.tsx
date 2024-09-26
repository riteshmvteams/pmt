"use client";

import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { cn } from "@/lib/utils";
import { useDrawer } from "@/store/useDrawer";

export function CustomSheet() {
  const { children, className, isOpen, setDrawerOpen, title, side } = useDrawer(
    (state) => state
  );

  return (
    <Sheet open={isOpen} onOpenChange={setDrawerOpen}>
      <SheetTrigger asChild></SheetTrigger>
      <SheetContent
        side={side}
        className={cn("sm:max-w-[600px] overflow-y-auto scrollbar", className)}
      >
        <SheetHeader>
          <SheetTitle className="font-lexend text-xl lg:text-2xl">
            {title}
          </SheetTitle>
        </SheetHeader>
        {children}
      </SheetContent>
    </Sheet>
  );
}
