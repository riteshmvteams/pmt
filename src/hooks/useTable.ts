import { Table } from "@tanstack/react-table";

interface MyComponentProps<TData> {
  table: Table<TData>;
}
export const useTable = <TData>({ table }: MyComponentProps<TData>) => {
  const getRowId = () => {
    const selectedRows = table
      .getSelectedRowModel()
      .rows.map((row) => row.original);
    const ids = selectedRows.map((row: any) => row.id);
    return ids;
  };

  return { getRowId };
};
