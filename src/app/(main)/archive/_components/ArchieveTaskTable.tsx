"use client";

import { DataTable } from "@/components/shared/DataTable/DataTable";
import {
  getCoreRowModel,
  getPaginationRowModel,
  useReactTable,
} from "@tanstack/react-table";
import { useMemo } from "react";
import { PROJECTS_DATA } from "@/lib/constants";
import { getColumns } from "./columns";
import { useTable } from "@/hooks/useTable";
import Text from "@/components/shared/Text";
import { Button } from "@/components/ui/button";
import { RotateCcw, Trash2 } from "lucide-react";
import CustomTooltip from "@/components/shared/CustomTooltip";

export default function ArchieveTaskTable() {
  // get the columns data
  const columns = useMemo(() => {
    return getColumns();
  }, []);

  const table = useReactTable({
    data: PROJECTS_DATA,
    columns,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
  });

  const { getRowId } = useTable({ table });

  return (
    <div className="flex flex-col gap-2">
      {getRowId()?.length ? (
        <div className="bg-muted/50 px-4 py-2 rounded-md border flex justify-between items-center top-0 left-0 w-full">
          <div className="flex items-center gap-2">
            <CustomTooltip title="Restore Tasks">
              <Button className="" variant="outline" size="icon">
                <RotateCcw className="h-[14px] w-[14px]" />
              </Button>
            </CustomTooltip>
            <CustomTooltip title="Delete Tasks">
              <Button className="" variant="outline" size="icon">
                <Trash2 className="h-[14px] w-[14px]" />
              </Button>
            </CustomTooltip>
          </div>
        </div>
      ) : null}
      <DataTable
        columns={columns}
        data={PROJECTS_DATA}
        table={table}
        viewOptions={false}
      />
    </div>
  );
}
