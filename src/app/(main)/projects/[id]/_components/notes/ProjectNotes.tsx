"use client";

import NoItems from "@/components/shared/NoItems";
import { CalendarCheck } from "lucide-react";
import React, { useState } from "react";

export default function ProjectNotes() {
  const [task] = useState(true);
  return task ? (
    <div>Notes</div>
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
      Add Notes
    </NoItems>
  );
}
