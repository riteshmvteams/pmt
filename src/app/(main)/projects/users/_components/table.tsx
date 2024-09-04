"use client";

import { useMemo } from "react";
import {
  getCoreRowModel,
  getPaginationRowModel,
  useReactTable,
} from "@tanstack/react-table";

import { DataTable } from "@/components/shared/DataTable/DataTable";
import { getColumns, TUser } from "./columns";
import Title from "@/components/shared/Title";

export default function ProjectUserTable({ data }: { data: TUser[] }) {
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
