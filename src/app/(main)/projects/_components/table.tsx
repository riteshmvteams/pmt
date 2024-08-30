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

const projectData = [
  {
    id: 1,
    isStarred: false,
    title: "All Test",
    users: 12,
    activity: new Date(Date.now()),
  },
  {
    id: 2,
    isStarred: false,
    title: "Carrer Planning ",
    users: 12,
    activity: new Date(Date.now()),
  },
  {
    id: 3,
    isStarred: false,
    title: "Human Capital Management ",
    users: 12,
    activity: new Date(Date.now()),
  },
  {
    id: 4,
    isStarred: false,
    title: "PMT Staging Testing ",
    users: 12,
    activity: new Date(Date.now()),
  },
  {
    id: 5,
    isStarred: true,
    title: "PMT Staging Testing ",
    users: 12,
    activity: new Date(Date.now()),
  },

  {
    id: 6,
    isStarred: false,
    title: "Human Capital Management",
    users: 12,
    activity: new Date(Date.now()),
  },
  {
    id: 7,
    isStarred: false,
    title: "Human Capital Management",
    users: 12,
    activity: new Date(Date.now()),
  },
  {
    id: 8,
    isStarred: true,
    title: "Pmt Staging Testing",
    users: 12,
    activity: new Date(Date.now()),
  },
  {
    id: 9,
    isStarred: false,
    title: "Project Management",
    users: 12,
    activity: new Date(Date.now()),
  },
  {
    id: 10,
    isStarred: false,
    title: "Testing Project Management",
    users: 12,
    activity: new Date(Date.now()),
  },
  {
    id: 11,
    isStarred: false,
    title: "Testing Project Management Tool",
    users: 12,
    activity: new Date(Date.now()),
  },
  {
    id: 9,
    isStarred: false,
    title: "Project Management",
    users: 12,
    activity: new Date(Date.now()),
  },
  {
    id: 10,
    isStarred: false,
    title: "Testing Project Management",
    users: 12,
    activity: new Date(Date.now()),
  },
  {
    id: 11,
    isStarred: false,
    title: "Testing Project Management Tool",
    users: 12,
    activity: new Date(Date.now()),
  },
  {
    id: 9,
    isStarred: false,
    title: "Project Management",
    users: 12,
    activity: new Date(Date.now()),
  },
  {
    id: 10,
    isStarred: false,
    title: "Testing Project Management",
    users: 12,
    activity: new Date(Date.now()),
  },
  {
    id: 11,
    isStarred: false,
    title: "Testing Project Management Tool",
    users: 12,
    activity: new Date(Date.now()),
  },
  {
    id: 9,
    isStarred: false,
    title: "Project Management",
    users: 12,
    activity: new Date(Date.now()),
  },
  {
    id: 10,
    isStarred: false,
    title: "Testing Project Management",
    users: 12,
    activity: new Date(Date.now()),
  },
  {
    id: 11,
    isStarred: false,
    title: "Testing Project Management Tool",
    users: 12,
    activity: new Date(Date.now()),
  },
  {
    id: 9,
    isStarred: false,
    title: "Project Management",
    users: 12,
    activity: new Date(Date.now()),
  },
  {
    id: 10,
    isStarred: false,
    title: "Testing Project Management",
    users: 12,
    activity: new Date(Date.now()),
  },
  {
    id: 11,
    isStarred: false,
    title: "Testing Project Management Tool",
    users: 12,
    activity: new Date(Date.now()),
  },
  {
    id: 9,
    isStarred: false,
    title: "Project Management",
    users: 12,
    activity: new Date(Date.now()),
  },
  {
    id: 10,
    isStarred: false,
    title: "Testing Project Management",
    users: 12,
    activity: new Date(Date.now()),
  },
  {
    id: 11,
    isStarred: false,
    title: "Testing Project Management Tool",
    users: 12,
    activity: new Date(Date.now()),
  },
  {
    id: 9,
    isStarred: false,
    title: "Project Management",
    users: 12,
    activity: new Date(Date.now()),
  },
  {
    id: 10,
    isStarred: false,
    title: "Testing Project Management",
    users: 12,
    activity: new Date(Date.now()),
  },
  {
    id: 11,
    isStarred: false,
    title: "Testing Project Management Tool",
    users: 12,
    activity: new Date(Date.now()),
  },

  {
    id: 9,
    isStarred: false,
    title: "Project Management",
    users: 12,
    activity: new Date(Date.now()),
  },
  {
    id: 10,
    isStarred: false,
    title: "Testing Project Management",
    users: 12,
    activity: new Date(Date.now()),
  },
  {
    id: 11,
    isStarred: false,
    title: "Testing Project Management Tool",
    users: 12,
    activity: new Date(Date.now()),
  },
  {
    id: 9,
    isStarred: false,
    title: "Project Management",
    users: 12,
    activity: new Date(Date.now()),
  },
  {
    id: 10,
    isStarred: false,
    title: "Testing Project Management",
    users: 12,
    activity: new Date(Date.now()),
  },
  {
    id: 11,
    isStarred: false,
    title: "Testing Project Management Tool",
    users: 12,
    activity: new Date(Date.now()),
  },
];

export default function Table() {
  const searchParams = useSearchParams();
  const { setParams } = useSetParams();
  const star = searchParams.get("star");

  const columns = useMemo(() => {
    return getColumns({ star, setParams });
  }, [star, setParams]);

  const table = useReactTable({
    data: projectData,
    columns,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
  });

  return (
    <div>
      <DataTable
        columns={columns}
        data={projectData}
        table={table}
        viewOptions={false}
      />
    </div>
  );
}
