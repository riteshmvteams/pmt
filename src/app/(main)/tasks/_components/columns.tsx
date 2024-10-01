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
import Title from "@/components/shared/Title";
import CustomTooltip from "@/components/shared/CustomTooltip";
import { Checkbox } from "@/components/ui/checkbox";
import TaskDetailSidePanel from "./TaskDetailSidePanel";
import { useModal } from "@/store/useModal";
import TaskMoveToProject from "./TaskMoveToProject";
import TaskMoveToMilestone from "./TaskMoveToMilestone";
import ConfirmationModal from "@/components/shared/ConfirmationModal";

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
  created_at: string;
  updated_at: string;
  status: string;
  assign: User[];
  due_date: string;
};

export const taskActions = [
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
    case "closed":
    case "completed":
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
      header: ({ table }) => {
        return (
          <div className="flex items-center gap-2 w-[60px]">
            <Checkbox
              checked={
                table.getIsAllPageRowsSelected() ||
                (table.getIsSomePageRowsSelected() && "indeterminate")
              }
              onCheckedChange={(value) =>
                table.toggleAllPageRowsSelected(!!value)
              }
              aria-label="Select all"
            />
            <Title className="w-[50px]">Task</Title>
          </div>
        );
      },
      cell: ({ row }) => {
        return (
          <div className="flex items-center gap-2 w-[60px]">
            <Checkbox
              checked={row.getIsSelected()}
              onCheckedChange={(value) => row.toggleSelected(!!value)}
              aria-label="Select row"
            />
            <Text className="text-[13px]">{row.original.id}</Text>
          </div>
        );
      },
      enableSorting: false,
      enableHiding: false,
    },
    {
      accessorKey: "title",
      header: ({ column }) => {
        return (
          <DataTableColumnHeader
            column={column}
            title="Title"
            className="font-lexend w-[550px]"
          />
        );
      },
      cell: ({ row }) => {
        const { tag, title, created_at, updated_at, id } = row.original;
        return (
          <div className="flex items-center gap-1 py-1.5">
            <Badge variant="outline" className="rounded-sm">
              {tag}
            </Badge>
            <CustomTooltip title={title} align="start">
              <TaskDetailSidePanel>
                <div className="group">
                  <Text className="text-sm group-hover:underline cursor-pointer inline">
                    {trimText(title, 20)}{" "}
                  </Text>
                  <span className="text-xs text-muted-foreground no-underline">
                    {updated_at > created_at ? "updated" : "Created"} By Ritesh
                    on{" "}
                    {formatDate(
                      updated_at > created_at ? updated_at : created_at
                    )}
                  </span>
                </div>
              </TaskDetailSidePanel>
            </CustomTooltip>
          </div>
        );
      },
    },
    {
      accessorKey: "status",
      header: () => {
        return <Title className="w-[150px]">Status</Title>;
      },
      cell: ({ row }) => {
        return getStatusBadge(row.original.status);
      },
    },
    {
      accessorKey: "created_at",
      header: () => {
        return <Title className="w-[100px]">Created At</Title>;
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
        return <Title className="w-[100px]">Updated At</Title>;
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
        return <TasksTableActions />;
      },
    },
  ];
};

export const TasksTableActions = () => {
  const { setOpen, setTitle, setClassName, setChildren } = useModal();

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" className="h-8 w-8 p-0">
          <span className="sr-only">Open menu</span>
          <EllipsisVertical className="h-4 w-4" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="start" side="left" className="w-56">
        <DropdownMenuItem
          className="py-1.5 cursor-pointer"
          onClick={() => {
            setOpen(true);
            setTitle("Confirmation");
            setClassName("max-w-[500px]");
            setChildren(
              <ConfirmationModal
                title="Are you Sure, You want to Resolve this Task"
                name="Task Name"
              />
            );
          }}
        >
          <CircleCheckBig className="mr-3 h-[14px] w-[14px]" />
          <span className="text-[13px]">Resolve</span>
        </DropdownMenuItem>
        <DropdownMenuItem
          className="py-1.5 cursor-pointer"
          onClick={() => {
            setOpen(true);
            setTitle("Confirmation");
            setClassName("max-w-[500px]");
            setChildren(
              <ConfirmationModal
                title="Are you Sure, You want to Close this Task"
                name="Task Name"
              />
            );
          }}
        >
          <CheckCheck className="mr-3 h-[14px] w-[14px]" />
          <span className="text-[13px]">Close</span>
        </DropdownMenuItem>
        <DropdownMenuSeparator className="my-1 bg-primary/20" />
        <DropdownMenuItem className="py-1.5 cursor-pointer">
          <RefreshCcwDot className="mr-3 h-[14px] w-[14px]" />
          <span className="text-[13px]">Re-Open</span>
        </DropdownMenuItem>
        <DropdownMenuItem className="py-1.5 cursor-pointer">
          <Undo className="mr-3 h-[14px] w-[14px]" />
          <span className="text-[13px]">Reply</span>
        </DropdownMenuItem>
        <DropdownMenuItem className="py-1.5 cursor-pointer">
          <Edit className="mr-3 h-[14px] w-[14px]" />
          <span className="text-[13px]">Edit</span>
        </DropdownMenuItem>
        <DropdownMenuItem
          className="py-1.5 cursor-pointer"
          onClick={() => {
            setOpen(true);
            setTitle("Move To Project > Task Name");
            setClassName("max-w-[800px]");
            setChildren(<TaskMoveToProject />);
          }}
        >
          <FolderOpenDot className="mr-3 h-[14px] w-[14px]" />
          <span className="text-[13px]">Move To Project</span>
        </DropdownMenuItem>
        <DropdownMenuItem
          className="py-1.5 cursor-pointer"
          onClick={() => {
            setOpen(true);
            setTitle("Move To Project > Task Name");
            setClassName("max-w-[800px]");
            setChildren(<TaskMoveToMilestone />);
          }}
        >
          <Target className="mr-3 h-[14px] w-[14px]" />
          <span className="text-[13px]">Move To Milestone</span>
        </DropdownMenuItem>
        <DropdownMenuSeparator className="my-1 bg-primary/20" />
        <DropdownMenuItem
          className="py-1.5 cursor-pointer"
          onClick={() => {
            setOpen(true);
            setTitle("Confirmation");
            setClassName("max-w-[500px]");
            setChildren(
              <ConfirmationModal
                title="Are you Sure, You want to Archieve this Task"
                name="Task Name"
              />
            );
          }}
        >
          <ArchiveRestore className="mr-3 h-[14px] w-[14px]" />
          <span className="text-[13px]">Archieve</span>
        </DropdownMenuItem>
        <DropdownMenuItem
          className="py-1.5 cursor-pointer"
          onClick={() => {
            setOpen(true);
            setTitle("Confirmation");
            setClassName("max-w-[500px]");
            setChildren(
              <ConfirmationModal
                title="Are you Sure, You want to Delete this Task"
                name="Task Name"
              />
            );
          }}
        >
          <Trash2 className="mr-3 h-[14px] w-[14px]" />
          <span className="text-[13px]">Delete</span>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};
