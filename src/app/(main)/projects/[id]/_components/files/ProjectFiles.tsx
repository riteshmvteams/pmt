"use client";

import NoItems from "@/components/shared/NoItems";
import { FileCheck } from "lucide-react";
import React, { useState } from "react";

export default function ProjectFiles() {
  const [task] = useState(false);
  return task ? (
    <div>ProjectTasks</div>
  ) : (
    <NoItems
      icon={
        <FileCheck
          strokeWidth={1.5}
          className="w-16 h-16 text-muted-foreground"
        />
      }
      title="No Files Added to this project"
    >
      Add Files
    </NoItems>
  );
}
