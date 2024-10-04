"use client";

import React from "react";
import { Button } from "../ui/button";
import { ChevronLeft } from "lucide-react";
import { useRouter } from "next/navigation";

export default function BackButton({
  variant = "outline",
}: {
  variant?: "default" | "outline" | "ghost" | "icon";
}) {
  const { back } = useRouter();

  return variant === "icon" ? (
    <button
      className="text-foreground h-8 w-8 rounded-md flex items-center justify-center hover:bg-muted"
      onClick={() => back()}
    >
      <ChevronLeft className="h-5 w-5" strokeWidth={2.5} />
    </button>
  ) : (
    <Button
      className="flex items-center text-muted-foreground gap-1"
      onClick={() => back()}
      variant={variant}
    >
      <ChevronLeft className="h-4 w-4" />
      <span className="font-lexend text-sm font-medium">Back</span>
    </Button>
  );
}
