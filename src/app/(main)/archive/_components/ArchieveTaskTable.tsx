"use client";

import { DataTable } from "@/components/shared/DataTable/DataTable";
import {
  getCoreRowModel,
  getPaginationRowModel,
  useReactTable,
} from "@tanstack/react-table";
import { useMemo } from "react";
import { PROJECTS_DATA } from "@/lib/constants";
import { getColumns } from "./columns";

export default function ArchieveTaskTable() {
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
