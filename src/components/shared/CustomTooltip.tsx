"use client";

import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { cn } from "@/lib/utils";

export default function CustomTooltip({
  children,
  title,
  align = "center",
  className,
}: {
  children: React.ReactNode;
  title: string;
  align?: "start" | "center" | "end";
  className?: string;
}) {
  return (
    <TooltipProvider delayDuration={0}>
      <Tooltip>
        <TooltipTrigger asChild>
          <div>{children}</div>
        </TooltipTrigger>
        <TooltipContent
          align={align}
          className={cn("text-xs font-lexend font-light", className)}
        >
          {title}
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
}
