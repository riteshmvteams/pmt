import DataTableColumnHeader from "@/components/shared/DataTable/DataTableColumnHeader";
import Text from "@/components/shared/Text";
import { Badge } from "@/components/ui/badge";
import { formatDate, trimText } from "@/lib/helpers";
import { ColumnDef } from "@tanstack/react-table";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import {
  ArchiveRestore,
  CheckCheck,
  CircleCheckBig,
  Edit,
  EllipsisVertical,
  FolderOpenDot,
  RefreshCcwDot,
  Target,
  Trash2,
  Undo,
} from "lucide-react";

type User = {
  id: number;
  profile: string;
  name: string;
};

export type TTask = {
  id: number;
  tag: string;
  title: string;
  project_name: string;
  created_at: Date;
  updated_at: Date;
  status: string;
  assign: User[];
  due_date: Date;
};

const tableActions = [
  {
    title: "Resolve",
    icon: CircleCheckBig,
  },
  {
    title: "Close",
    icon: CheckCheck,
  },
  {
    title: "divider",
  },
  {
    title: "Re-open",
    icon: RefreshCcwDot,
  },
  {
    title: "Reply",
    icon: Undo,
  },
  {
    title: "Edit",
    icon: Edit,
  },
  {
    title: "Move to project",
    icon: FolderOpenDot,
  },
  {
    title: "Move to Milestone",
    icon: Target,
  },
  {
    target: "divider",
  },
  {
    title: "Archieve",
    icon: ArchiveRestore,
  },
  {
    title: "Delete",
    icon: Trash2,
  },
];

export const getStatusBadge = (status: string) => {
  switch (status?.toLowerCase()) {
    case "open":
      return (
        <Badge
          variant="outline"
          className="font-normal rounded-md gap-2 bg-status-destructiveBg text-status-destructive"
        >
          <span className="h-1.5 w-1.5 rounded-full bg-status-destructive"></span>{" "}
          {status}
        </Badge>
      );
    case "in progress":
      return (
        <Badge
          variant="outline"
          className="font-normal rounded-md gap-2 bg-status-pendingBg text-status-pending"
        >
          <span className="h-1.5 w-1.5 rounded-full bg-status-pending"></span>{" "}
          {status}
        </Badge>
      );
    case "resolved":
      return (
        <Badge
          variant="outline"
          className="font-normal rounded-md gap-2 bg-status-successBg text-status-success"
        >
          <span className="h-1.5 w-1.5 rounded-full bg-status-success"></span>{" "}
          {status}
        </Badge>
      );
    default:
      return <Badge variant="default">{status}</Badge>;
  }
};

export const getColumns = (): ColumnDef<TTask>[] => {
  return [
    {
      accessorKey: "id",
      header: () => {
        return (
          <Text variant="title" className="text-xs w-[50px]">
            Task
          </Text>
        );
      },
      cell: ({ row }) => {
        return <Text>{row.original.id}</Text>;
      },
    },
    {
      accessorKey: "title",
      header: ({ column }) => {
        return (
          <DataTableColumnHeader
            column={column}
            title="Title"
            className="font-lexend text-xs w-[500px]"
          />
        );
      },
      cell: ({ row }) => {
        const { tag, title } = row.original;
        return (
          <div className="flex items-center gap-1 p-1">
            <Badge variant="outline" className="rounded-sm font-normal">
              {tag}
            </Badge>
            <Text className="text-[13px]">{trimText(title, 30)}</Text>
          </div>
        );
      },
    },
    {
      accessorKey: "status",
      header: () => {
        return (
          <Text variant="title" className="text-xs w-[150px]">
            Status
          </Text>
        );
      },
      cell: ({ row }) => {
        return getStatusBadge(row.original.status);
      },
    },
    {
      accessorKey: "created_at",
      header: () => {
        return (
          <Text variant="title" className="text-xs w-[100px]">
            Created At
          </Text>
        );
      },
      cell: ({ row }) => {
        return (
          <Text className="text-xs">
            {formatDate(row.original.created_at, false)}
          </Text>
        );
      },
    },
    {
      accessorKey: "updated_at",
      header: () => {
        return (
          <Text variant="title" className="text-xs w-[100px]">
            Updated At
          </Text>
        );
      },
      cell: ({ row }) => {
        return (
          <Text className="text-xs">
            {formatDate(row.original.updated_at, false)}
          </Text>
        );
      },
    },
    {
      id: "actions",
      cell: () => {
        return (
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" className="h-8 w-8 p-0">
                <span className="sr-only">Open menu</span>
                <EllipsisVertical className="h-4 w-4" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="start" side="left" className="w-56">
              {tableActions?.map((action, index) => {
                return action.icon ? (
                  <DropdownMenuItem key={index} className="py-2 cursor-pointer">
                    <action.icon className="mr-3 h-[14px] w-[14px]" />
                    <span className="text-xs">{action.title}</span>
                  </DropdownMenuItem>
                ) : (
                  <DropdownMenuSeparator
                    className="my-1 bg-primary/20"
                    key={index}
                  />
                );
              })}
            </DropdownMenuContent>
          </DropdownMenu>
        );
      },
    },
  ];
};
