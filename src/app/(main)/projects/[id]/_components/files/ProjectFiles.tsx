"use client";

import NoItems from "@/components/shared/NoItems";
import { FileCheck } from "lucide-react";
import React, { useState } from "react";
import FilesTable from "./FilesTable";

export default function ProjectFiles() {
  const [task] = useState(true);
  return task ? (
    <FilesTable />
  ) : (
    <NoItems
      icon={
        <FileCheck
          strokeWidth={1.5}
          className="w-16 h-16 text-muted-foreground"
        />
      }
      title="No Files Added to this project"
    ></NoItems>
  );
}
