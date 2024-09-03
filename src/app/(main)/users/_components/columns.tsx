import Text from "@/components/shared/Text";
import { Badge } from "@/components/ui/badge";
import { routes } from "@/config/routes";
import { formatDate } from "@/lib/helpers";
import { ColumnDef } from "@tanstack/react-table";

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
      header: () => {
        return (
          <Text variant="title" className="text-xs">
            Users Name
          </Text>
        );
      },
      cell: ({ row }) => {
        return (
          <Text
            as="link"
            href={routes.userDetail(row.original.id)}
            className="block p-1.5 text-[13px]"
          >
            {row.original.username}
          </Text>
        );
      },
    },
    {
      accessorKey: "role",
      header: () => {
        return (
          <Text variant="title" className="text-xs">
            Role
          </Text>
        );
      },
      cell: ({ row }) => getRoleBadge(row.original.role),
    },
    {
      accessorKey: "email",
      header: () => {
        return (
          <Text variant="title" className="text-xs">
            Email
          </Text>
        );
      },
      cell: ({ row }) => {
        return <Text className="text-[13px]">{row.original.email}</Text>;
      },
    },
    {
      accessorKey: "projects",
      header: () => {
        return (
          <Text variant="title" className="text-xs">
            Project Assigned
          </Text>
        );
      },
      cell: ({ row }) => {
        return <Text className="text-[13px]">{row.original.projects}</Text>;
      },
    },
    {
      accessorKey: "created_at",
      header: () => {
        return (
          <Text variant="title" className="text-xs">
            Last Activity
          </Text>
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
  ];
};
