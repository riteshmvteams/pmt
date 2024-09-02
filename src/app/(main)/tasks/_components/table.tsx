"use client";

import { DataTable } from "@/components/shared/DataTable/DataTable";
import { useMemo } from "react";
import { getColumns } from "./columns";
import {
  getCoreRowModel,
  getPaginationRowModel,
  useReactTable,
} from "@tanstack/react-table";
import { TASKS_DATA as data } from "@/lib/constants";

export default function Table() {
  // get the columns data
  const columns = useMemo(() => {
    return getColumns();
  }, []);

  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
  });

  return (
    <div>
      <DataTable
        columns={columns}
        data={data}
        table={table}
        viewOptions={false}
      />
    </div>
  );
}
