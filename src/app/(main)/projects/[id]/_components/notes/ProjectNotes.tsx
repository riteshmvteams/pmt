"use client";

import { CalendarCheck } from "lucide-react";
import React, { useState } from "react";

import NoItems from "@/components/shared/NoItems";
import AddProjectNotes from "./AddProjectNotes";
import NotesListing from "./NotesListing";
import { useSearchParams } from "next/navigation";
import NotesDetail from "./NotesDetail";
import { Button } from "@/components/ui/button";
import { useDrawer } from "@/store/useDrawer";

export default function ProjectNotes() {
  const [task] = useState(true);
  const {
    setDrawerChildren,
    setDrawerClassName,
    setDrawerOpen,
    setDrawerTitle,
    setSide,
  } = useDrawer((state) => state);
  const searchParams = useSearchParams();
  const note = searchParams.get("note") || "";

  return task ? (
    <div>{note ? <NotesDetail /> : <NotesListing />}</div>
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
      <Button
        onClick={() => {
          setSide("right");
          setDrawerTitle("Add Notes");
          setDrawerChildren(<AddProjectNotes />);
          setDrawerOpen(true);
          setDrawerClassName("sm:max-w-[1000px]");
        }}
      >
        Add Note
      </Button>
    </NoItems>
  );
}
