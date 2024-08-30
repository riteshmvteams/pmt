import { ColumnDef } from "@tanstack/react-table";

export type TTask = {
  id: number;
};

export const getColumns = (): ColumnDef<TTask>[] => {
  return [
    {
      accessorKey: "id",
      header: "ID",
    },
  ];
};
