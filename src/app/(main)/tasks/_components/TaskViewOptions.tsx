"use client";

import { cn } from "@/lib/utils";
import { Columns3, LayoutGrid, List, SquareDashedKanban } from "lucide-react";
import { useTaskView } from "@/store/dataView";
import CustomTooltip from "@/components/shared/CustomTooltip";

export default function TaskViewOptions() {
  const { taskView, updateTaskView } = useTaskView((state) => state);

  return (
    <div className="flex text-muted-foreground border rounded-md h-8">
      <CustomTooltip title="Kanban View">
        <button
          className={cn(
            "h-8 w-8 flex items-center justify-center rounded-md",
            taskView === "kanban" ? "text-primary-foreground bg-primary" : ""
          )}
          onClick={() => updateTaskView("kanban")}
        >
          <Columns3 className="h-4 w-4" />
        </button>
      </CustomTooltip>
      <CustomTooltip title="Table View">
        <button
          className={cn(
            "h-8 w-8 flex items-center justify-center rounded-md",
            taskView === "kanban" ? "" : "text-primary-foreground bg-primary"
          )}
          onClick={() => updateTaskView("table")}
        >
          <List className="h-4 w-4" />
        </button>
      </CustomTooltip>
    </div>
  );
}
