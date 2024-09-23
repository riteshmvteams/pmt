"use client";

import { ColumnDef, flexRender, Table } from "@tanstack/react-table";
import {
  Table as ReactTable,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { DataTablePagination } from "./DataTablePagination";
import { DataTableViewOptions } from "./DataTableViewOptions";
import { cn } from "@/lib/utils";
interface DataTableProps<TData, TValue> {
  columns: ColumnDef<TData, TValue>[];
  data: TData[];
  table: Table<TData>;
  viewOptions?: boolean;
  isPaginationVisible?: boolean;
}

// w-[calc(100vw-48px)] md:w-[calc(100vw-280px)] lg:w-[calc(100vw-340px)]

export function DataTable<TData, TValue>({
  columns,
  data,
  table,
  viewOptions = true,
  isPaginationVisible = true,
}: DataTableProps<TData, TValue>) {
  return (
    <div>
      {viewOptions && <DataTableViewOptions table={table} />}
      <div className="rounded-md border  scrollbar">
        <ReactTable>
          <TableHeader className="bg-muted">
            {table.getHeaderGroups().map((headerGroup) => (
              <TableRow key={headerGroup.id}>
                {headerGroup.headers.map((header) => {
                  return (
                    <TableHead key={header.id}>
                      {header.isPlaceholder
                        ? null
                        : flexRender(
                            header.column.columnDef.header,
                            header.getContext()
                          )}
                    </TableHead>
                  );
                })}
              </TableRow>
            ))}
          </TableHeader>
          <TableBody>
            {table.getRowModel().rows?.length ? (
              table.getRowModel().rows.map((row) => (
                <TableRow
                  key={row.id}
                  data-state={row.getIsSelected() && "selected"}
                >
                  {row.getVisibleCells().map((cell) => {
                    return (
                      <TableCell key={cell.id} className={cn("py-1")}>
                        {flexRender(
                          cell.column.columnDef.cell,
                          cell.getContext()
                        )}
                      </TableCell>
                    );
                  })}
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell
                  colSpan={columns.length}
                  className="h-24 text-center"
                >
                  No results.
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </ReactTable>
      </div>
      {isPaginationVisible ? <DataTablePagination table={table} /> : null}
    </div>
  );
}
