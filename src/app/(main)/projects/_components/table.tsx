"use client";

import { DataTable } from "@/components/shared/DataTable/DataTable";
import { Payment, columns } from "./columns";
import {
  getCoreRowModel,
  getPaginationRowModel,
  useReactTable,
} from "@tanstack/react-table";

const data: Payment[] = [
  {
    id: "728ed52f",
    amount: 100,
    status: "pending",
    email: "m@example.com",
  },
  {
    id: "72dd8ed52f",
    amount: 1005,
    status: "pending",
    email: "m1@example.com",
  },
  {
    id: "72dd8ed52f",
    amount: 1005,
    status: "pending",
    email: "m1@example.com",
  },
  {
    id: "72dd8ed52f",
    amount: 1005,
    status: "pending",
    email: "m1@example.com",
  },
  {
    id: "72dd8ed52f",
    amount: 1005,
    status: "pending",
    email: "m1@example.com",
  },
  {
    id: "72dd8ed52f",
    amount: 1005,
    status: "pending",
    email: "m1@example.com",
  },
  {
    id: "72dd8ed52f",
    amount: 1005,
    status: "pending",
    email: "m1@example.com",
  },
  {
    id: "72dd8ed52f",
    amount: 1005,
    status: "pending",
    email: "m1@example.com",
  },
  {
    id: "72dd8ed52f",
    amount: 1005,
    status: "pending",
    email: "m1@example.com",
  },
  {
    id: "72dd8ed52f",
    amount: 1005,
    status: "pending",
    email: "m1@example.com",
  },
  {
    id: "72dd8ed52f",
    amount: 1005,
    status: "pending",
    email: "m1@example.com",
  },
  {
    id: "72dd8ed52f",
    amount: 1005,
    status: "pending",
    email: "m1@example.com",
  },
  {
    id: "72dd8ed52f",
    amount: 1005,
    status: "pending",
    email: "m1@example.com",
  },
  {
    id: "72dd8ed52f",
    amount: 1005,
    status: "pending",
    email: "m1@example.com",
  },
];

export default function Table() {
  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
  });

  return (
    <div>
      <DataTable columns={columns} data={data} table={table} />
    </div>
  );
}
