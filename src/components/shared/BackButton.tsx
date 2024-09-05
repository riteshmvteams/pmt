"use client";

import React from "react";
import { Button } from "../ui/button";
import { ChevronLeft } from "lucide-react";
import { useRouter } from "next/navigation";

export default function BackButton({
  variant = "outline",
}: {
  variant?: "default" | "outline" | "ghost";
}) {
  const { back } = useRouter();

  return (
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
