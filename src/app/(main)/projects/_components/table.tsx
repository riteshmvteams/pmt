"use client";

import { DataTable } from "@/components/shared/DataTable/DataTable";
import { getColumns } from "./columns";
import {
  getCoreRowModel,
  getPaginationRowModel,
  useReactTable,
} from "@tanstack/react-table";
import { useMemo } from "react";
import { useSearchParams } from "next/navigation";
import { useSetParams } from "@/hooks/useSetParams";
import { PROJECTS_DATA } from "@/lib/constants";

export default function Table() {
  const searchParams = useSearchParams();
  const { setParams } = useSetParams();
  const star = searchParams.get("star");

  const starredData = useMemo(() => {
    return PROJECTS_DATA.filter((project) => project.isStarred);
  }, []);

  // get the columns data
  const columns = useMemo(() => {
    return getColumns({ star, setParams });
  }, [star, setParams]);

  const table = useReactTable({
    data: star === "true" ? starredData : PROJECTS_DATA,
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
