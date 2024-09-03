"use client";

import { cn } from "@/lib/utils";
import { LayoutGrid, List } from "lucide-react";
import CustomTooltip from "./CustomTooltip";
import { useView } from "@/store/dataView";

export default function ViewSetting() {
  const { isGrid, updateView } = useView((state) => state);

  return (
    <div className="flex text-muted-foreground border rounded-md">
      <CustomTooltip title="Grid View">
        <button
          className={cn(
            "px-3 h-10 rounded-md",
            isGrid ? "text-primary-foreground bg-primary" : ""
          )}
          onClick={() => updateView(true)}
        >
          <LayoutGrid className="h-5 w-5" />
        </button>
      </CustomTooltip>
      <CustomTooltip title="Table View">
        <button
          className={cn(
            "px-3 h-10 rounded-md",
            isGrid ? "" : "text-primary-foreground bg-primary"
          )}
          onClick={() => updateView(false)}
        >
          <List className="h-5 w-5" />
        </button>
      </CustomTooltip>
    </div>
  );
}
