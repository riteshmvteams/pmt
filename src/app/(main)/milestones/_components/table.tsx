"use client";

import { DataTable } from "@/components/shared/DataTable/DataTable";
import { MILESTONES_DATA, PROJECTS_DATA } from "@/lib/constants";
import {
  getCoreRowModel,
  getPaginationRowModel,
  useReactTable,
} from "@tanstack/react-table";
import React, { useMemo } from "react";
import { getColumns } from "./columns";
import { useView } from "@/store/dataView";
import MilestoneGridView from "./MilestoneGridView";

export default function MileStoneTable() {
  const isGrid = useView((state) => state?.isGrid);

  // get the columns data
  const columns = useMemo(() => {
    return getColumns();
  }, []);

  const table = useReactTable({
    data: MILESTONES_DATA,
    columns,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
  });

  // Get the selected rows
  const selectedRows = table
    .getSelectedRowModel()
    .rows.map((row) => row.original);
  console.log(selectedRows, "Selected Rows");

  return (
    <div>
      {isGrid ? (
        <MilestoneGridView data={MILESTONES_DATA} />
      ) : (
        <DataTable
          columns={columns}
          data={MILESTONES_DATA}
          table={table}
          viewOptions={false}
        />
      )}
    </div>
  );
}
