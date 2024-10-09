"use client";

import { DataTable } from "@/components/shared/DataTable/DataTable";
import {
  getCoreRowModel,
  getPaginationRowModel,
  useReactTable,
} from "@tanstack/react-table";
import { useMemo } from "react";
import { useSearchParams } from "next/navigation";
import { useSetParams } from "@/hooks/useSetParams";
import { PROJECTS_DATA } from "@/lib/constants";
import { useView } from "@/store/dataView";

import { getColumns } from "./columns";
import ProjectGridView from "./ProjectGridView";

export default function ProjectsTable() {
  const isGrid = useView((state) => state?.isGrid);

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
      {isGrid ? (
        <ProjectGridView data={PROJECTS_DATA} />
      ) : (
        <DataTable
          columns={columns}
          data={PROJECTS_DATA}
          table={table}
          viewOptions={false}
        />
      )}
    </div>
  );
}
