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
import { getColumns } from "./columns";
import { useView } from "@/store/dataView";
import Title from "../Title";
import { formatDateWithWeekday } from "@/lib/helpers";
import { TTimeLog } from "@/app/(main)/projects/[id]/_components/time/ProjectTimeLogs";

export default function TimeListTable({ data }: { data: TTimeLog[] }) {
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
    <div className="flex flex-col gap-10">
      {Array.from({ length: 10 })?.map((_, ind) => {
        return (
          <div key={ind}>
            <Title className="tracking-tight mb-1">
              {formatDateWithWeekday(
                `2024-07-2${2 + ind}T16:23:04.462Z`,
                false
              )}
            </Title>
            <DataTable
              columns={columns}
              data={data}
              table={table}
              viewOptions={false}
              isPaginationVisible={false}
            />
          </div>
        );
      })}
    </div>
  );
}
