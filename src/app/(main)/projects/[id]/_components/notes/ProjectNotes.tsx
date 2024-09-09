"use client";

import { CalendarCheck } from "lucide-react";
import React, { useState } from "react";

import NoItems from "@/components/shared/NoItems";
import AddProjectNotes from "./AddProjectNotes";
import NotesListing from "./NotesListing";

export default function ProjectNotes() {
  const [task] = useState(true);

  return task ? (
    <div>
      <NotesListing />
    </div>
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
      <AddProjectNotes title="Add Notes" btnLabel="Add Note" />
    </NoItems>
  );
}
