import { Eye, Trash2 } from "lucide-react";
import { ColumnDef } from "@tanstack/react-table";

import Text from "@/components/shared/Text";
import Title from "@/components/shared/Title";
import XMLIcon from "@/components/icons/XMLIcon";
import CustomDropDown from "@/components/shared/CustomDropDown";
import { formatDate, formatDateWithWeekday } from "@/lib/helpers";

export type TFiles = {
  id: number;
  title: string;
  link: string;
  uploadedBy: string;
  uploadedAt: string;
  project: string;
  size: string;
};

export const fileActions = [
  {
    title: "View",
    icon: Eye,
  },
  {
    title: "Delete",
    icon: Trash2,
  },
];

export const getColumns = (): ColumnDef<TFiles>[] => {
  return [
    {
      accessorKey: "id",
      header: ({ table }) => {
        return (
          <div className="flex items-center gap-2 w-[60px]">
            <Title className="w-[50px]">File ID</Title>
          </div>
        );
      },
      cell: ({ row }) => {
        return (
          <div className="flex items-center gap-2 w-[60px]">
            <Text className="text-[13px]">{row.original.id}</Text>
          </div>
        );
      },
      enableSorting: false,
      enableHiding: false,
    },
    {
      accessorKey: "title",
      header: () => {
        return <Title className="w-[100px]">Title</Title>;
      },
      cell: ({ row }) => {
        return <FileDetail />;
      },
    },
    {
      accessorKey: "project",
      header: () => {
        return <Title className="w-[100px]">Project</Title>;
      },
      cell: ({ row }) => {
        return <Text className="text-[13px]">{row.original.project}</Text>;
      },
    },
    {
      accessorKey: "size",
      header: () => {
        return <Title className="w-[100px]">Size</Title>;
      },
      cell: ({ row }) => {
        return <Text className="text-[13px]">{row.original.size}</Text>;
      },
    },
    {
      accessorKey: "uploadedAt",
      header: () => {
        return <Title className="w-[100px]">uploaded At</Title>;
      },
      cell: ({ row }) => {
        return (
          <Text className="text-xs">{formatDate(row.original.uploadedAt)}</Text>
        );
      },
    },
    {
      id: "actions",
      cell: () => {
        return <CustomDropDown actions={fileActions} className="w-[100px]" />;
      },
    },
  ];
};

const FileDetail = () => {
  return (
    <div className="flex items-center gap-3 py-2">
      <XMLIcon height="32px" width="32px" />
      <div className="flex flex-col gap-0.5">
        <Text as="link" href="#" className="text-xs font-lexend">
          Timelog_filter_data.xml
        </Text>
        <span className="text-xs font-light text-muted-foreground">
          Uploaded by{" "}
          <span className="text-foreground font-normal">Super Admin</span> on{" "}
          {formatDateWithWeekday(new Date(), false)}
        </span>
      </div>
    </div>
  );
};
