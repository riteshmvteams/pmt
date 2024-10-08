import { ColumnDef } from "@tanstack/react-table";
import {
  ArchiveRestore,
  CheckCheck,
  CircleCheckBig,
  FolderGit2,
  RefreshCcwDot,
  Target,
  Trash2,
  Undo,
} from "lucide-react";

import Text from "@/components/shared/Text";
import { Badge } from "@/components/ui/badge";
import { routes } from "@/config/routes";
import { formatDate } from "@/lib/helpers";
import Title from "@/components/shared/Title";
import DataTableColumnHeader from "../DataTable/DataTableColumnHeader";
import UserActions from "./UserActions";

export type TUser = {
  id: number;
  name: string;
  username: string;
  email: string;
  role: string;
  projects: number;
  created_at: string;
  user_status: string;
};

export const userActions = [
  {
    title: "Assign Project",
    icon: CircleCheckBig,
  },
  {
    title: "Remove Project",
    icon: CheckCheck,
  },
  {
    title: "divider",
  },
  {
    title: "Disable",
    icon: RefreshCcwDot,
  },
  {
    title: "Enable",
    icon: Undo,
  },
  {
    title: "Edit User",
    icon: Target,
  },
  {
    title: "divider",
  },
  {
    title: "Grant HR Role",
    icon: ArchiveRestore,
  },
  {
    title: "Grant Super-admin Role",
    icon: Trash2,
  },
];

export const getRoleBadge = (status: string) => {
  switch (status?.toLowerCase()) {
    case "hr":
      return (
        <Badge
          variant="outline"
          className="font-normal rounded-md gap-2 bg-status-destructiveBg text-status-destructive"
        >
          <span className="h-1.5 w-1.5 rounded-full bg-status-destructive"></span>{" "}
          {status}
        </Badge>
      );
    case "super-admin":
      return (
        <Badge
          variant="outline"
          className="font-normal rounded-md gap-2 bg-status-pendingBg text-status-pending"
        >
          <span className="h-1.5 w-1.5 rounded-full bg-status-pending"></span>{" "}
          {status}
        </Badge>
      );
    case "user":
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

export const getColumns = (): ColumnDef<TUser>[] => {
  return [
    {
      accessorKey: "username",
      header: ({ column }) => {
        return <DataTableColumnHeader column={column} title="User Name" />;
      },
      cell: ({ row }) => {
        return (
          <Text
            as="link"
            href={routes.userDetail(row.original.id)}
            className="block p-1.5"
          >
            {row.original.username}
          </Text>
        );
      },
    },
    {
      accessorKey: "role",
      header: () => {
        return <Title className="w-[120px]">Role</Title>;
      },
      cell: ({ row }) => getRoleBadge(row.original.role),
    },
    {
      accessorKey: "email",
      header: () => {
        return <Title className="w-[150px]">Email</Title>;
      },
      cell: ({ row }) => {
        return <Text className="text-[13px]">{row.original.email}</Text>;
      },
    },
    {
      accessorKey: "projects",
      header: () => {
        return <Title className="w-[120px]">Project Assigned</Title>;
      },
      cell: ({ row }) => {
        return (
          <Text
            className="text-[13px] flex items-center gap-2"
            as="link"
            href={routes.usersProjects(row.original.id)}
          >
            <FolderGit2 className="h-4 w-4" />
            {row.original.projects}
          </Text>
        );
      },
    },
    {
      accessorKey: "created_at",
      header: ({ column }) => {
        return (
          <DataTableColumnHeader
            column={column}
            title="Last Activity"
            className="w-[150px]"
          />
        );
      },
      cell: ({ row }) => {
        return (
          <Text className="text-[13px]">
            {formatDate(row.original.created_at, true)}
          </Text>
        );
      },
    },
    {
      accessorKey: "last_activity_at",
      header: ({ column }) => {
        return (
          <DataTableColumnHeader
            column={column}
            title="Created At"
            className="w-[150px]"
          />
        );
      },
      cell: ({ row }) => {
        return (
          <Text className="text-[13px]">
            {formatDate(row.original.created_at, true)}
          </Text>
        );
      },
    },
    {
      id: "actions",
      cell: () => {
        return <UserActions />;
      },
    },
  ];
};
