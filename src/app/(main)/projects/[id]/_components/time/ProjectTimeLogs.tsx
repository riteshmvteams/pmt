"use client";

import NoItems from "@/components/shared/NoItems";
import TimeLogListing from "@/components/shared/timelog/TimeLogListing";
import { CalendarCheck } from "lucide-react";
import React, { useState } from "react";

export default function ProjectTimeLogs() {
  const [task] = useState(true);
  return task ? (
    <div>
      <TimeLogListing />
    </div>
  ) : (
    <NoItems
      icon={
        <CalendarCheck
          strokeWidth={1.5}
          className="w-16 h-16 text-muted-foreground"
        />
      }
      title="Time Logs not Found in this project"
    ></NoItems>
  );
}
