"use client";

import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

export default function CustomTooltip({
  children,
  title,
  align = "center",
}: {
  children: React.ReactNode;
  title: string;
  align?: "start" | "center" | "end";
}) {
  return (
    <TooltipProvider delayDuration={0}>
      <Tooltip>
        <TooltipTrigger asChild>
          <div>{children}</div>
        </TooltipTrigger>
        <TooltipContent align={align}>{title}</TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
}
