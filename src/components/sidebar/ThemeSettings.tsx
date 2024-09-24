"use client";

import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Settings } from "lucide-react";
import ThemeToggle from "../shared/ThemeToggle";
import ColorSettings from "./ColorSettings";
import LayoutSettings from "./LayoutSettings";

export default function ThemeSettings() {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="outline" className="px-2.5 text-muted-foreground">
          <Settings className="h-5 w-5" />
        </Button>
      </SheetTrigger>
      <SheetContent className="overflow-y-auto scrollbar">
        <SheetHeader>
          <SheetTitle>Configure Theme</SheetTitle>
        </SheetHeader>
        <SheetDescription></SheetDescription>
        <div className="grid gap-10 py-4">
          <ThemeToggle />
          <ColorSettings />
          <LayoutSettings />
        </div>
      </SheetContent>
    </Sheet>
  );
}
