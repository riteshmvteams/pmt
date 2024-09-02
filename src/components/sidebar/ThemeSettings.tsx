"use client";

import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Settings } from "lucide-react";
import ThemeToggle from "../shared/ThemeToggle";
import ColorSettings from "./ColorSettings";

export default function ThemeSettings() {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="outline" className="px-2.5 text-muted-foreground">
          <Settings className="h-5 w-5" />
        </Button>
      </SheetTrigger>
      <SheetContent>
        <SheetHeader>
          <SheetTitle>Configure Theme</SheetTitle>
        </SheetHeader>
        <div className="grid gap-10 py-4">
          <ThemeToggle />
          <ColorSettings />
        </div>
      </SheetContent>
    </Sheet>
  );
}
