"use client";

import { DataTable } from "@/components/shared/DataTable/DataTable";
import { PROJECTS_DATA } from "@/lib/constants";
import {
  getCoreRowModel,
  getPaginationRowModel,
  useReactTable,
} from "@tanstack/react-table";
import React, { useMemo } from "react";
import { getColumns } from "./columns";

export default function MileStoneTable() {
  // get the columns data
  const columns = useMemo(() => {
    return getColumns();
  }, []);

  const table = useReactTable({
    data: PROJECTS_DATA,
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
      <DataTable
        columns={columns}
        data={PROJECTS_DATA}
        table={table}
        viewOptions={false}
      />
    </div>
  );
}
