"use client";

import { DataTable } from "@/components/shared/DataTable/DataTable";
import React, { useMemo } from "react";
import { getColumns } from "./columns";
import {
  getCoreRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  SortingState,
  useReactTable,
} from "@tanstack/react-table";
import { TASKS_DATA as data } from "@/lib/constants";
import { useTable } from "@/hooks/useTable";

export default function TaskTable() {
  const [sorting, setSorting] = React.useState<SortingState>([]);
  const [rowSelection, setRowSelection] = React.useState({});

  // get the columns data
  const columns = useMemo(() => {
    return getColumns();
  }, []);

  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    onSortingChange: setSorting,
    getSortedRowModel: getSortedRowModel(),
    onRowSelectionChange: setRowSelection,
    state: {
      sorting,
      rowSelection,
    },
  });
  const { getRowId } = useTable({ table });

  return (
    <div>
      <DataTable
        columns={columns}
        data={data}
        table={table}
        viewOptions={false}
      />
      {Object.keys(rowSelection).length ? <div>Update</div> : null}
    </div>
  );
}
