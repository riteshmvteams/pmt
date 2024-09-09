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
import { useView } from "@/store/dataView";
import FilesGrid from "./FilesGrid";

const data = Array.from({ length: 5 })?.map((_, index) => {
  return {
    id: index,
    title: "abc.txt",
    link: "https://drive.google.com/uc?export=download&id=1i5jGy0jQf0K8b9KkT7z7rUx8bGjSx5Xj",
    uploadedBy: "Admin",
    uploadedAt: "2023-10-22T19:03:29.599Z",
    project: "Test Project",
    size: "1.5 MB",
  };
});

export default function FilesTable() {
  const isGrid = useView((state) => state?.isGrid);
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

  return (
    <div>
      {isGrid ? (
        <FilesGrid data={data} />
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
