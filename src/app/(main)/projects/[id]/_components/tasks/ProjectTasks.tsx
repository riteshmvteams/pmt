"use client";

import TaskTable from "@/app/(main)/tasks/_components/table";
import NoItems from "@/components/shared/NoItems";
import { CalendarCheck } from "lucide-react";
import React, { useState } from "react";

export default function ProjectTasks() {
  const [task] = useState(true);
  return task ? (
    <TaskTable />
  ) : (
    <NoItems
      icon={
        <CalendarCheck
          strokeWidth={1.5}
          className="w-16 h-16 text-muted-foreground"
        />
      }
      title="No Tasks Added to this project"
    >
      Add Task
    </NoItems>
  );
}
