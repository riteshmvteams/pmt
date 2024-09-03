"use client";

import { useMemo } from "react";
import {
  getCoreRowModel,
  getPaginationRowModel,
  useReactTable,
} from "@tanstack/react-table";

import { DataTable } from "@/components/shared/DataTable/DataTable";
import { getColumns, TUser } from "./columns";

export default function UserTable({ data }: { data: TUser[] }) {
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
