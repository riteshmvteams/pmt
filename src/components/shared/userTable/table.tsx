"use client";

import React, { useMemo } from "react";
import {
  getCoreRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  SortingState,
  useReactTable,
} from "@tanstack/react-table";

import { DataTable } from "@/components/shared/DataTable/DataTable";
import { getColumns, TUser } from "./columns";
import { useView } from "@/store/dataView";
import UsersGridView from "./UserGridView";

export default function UserTable({ data }: { data: TUser[] }) {
  const isGrid = useView((state) => state.isGrid);
  const [sorting, setSorting] = React.useState<SortingState>([]);
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
    state: {
      sorting,
    },
  });

  return (
    <div>
      {isGrid ? (
        <UsersGridView data={data} />
      ) : (
        <DataTable
          columns={columns}
          data={data}
          table={table}
          viewOptions={false}
        />
      )}
    </div>
  );
}
