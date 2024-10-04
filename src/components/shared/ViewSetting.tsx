"use client";

import { cn } from "@/lib/utils";
import { LayoutGrid, List } from "lucide-react";
import CustomTooltip from "./CustomTooltip";
import { useView } from "@/store/dataView";

export default function ViewSetting() {
  const { isGrid, updateView } = useView((state) => state);

  return (
    <div className="flex text-muted-foreground border rounded-md h-8">
      <CustomTooltip title="Grid View">
        <button
          className={cn(
            "flex items-center justify-center h-8 w-8 rounded-md ",
            isGrid ? "text-primary-foreground bg-primary" : ""
          )}
          onClick={() => updateView(true)}
        >
          <LayoutGrid className="h-4 w-4" />
        </button>
      </CustomTooltip>
      <CustomTooltip title="Table View">
        <button
          className={cn(
            "flex items-center justify-center h-8 w-8 rounded-md",
            isGrid ? "" : "text-primary-foreground bg-primary"
          )}
          onClick={() => updateView(false)}
        >
          <List className="h-4 w-4" />
        </button>
      </CustomTooltip>
    </div>
  );
}
