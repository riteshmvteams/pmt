"use client";

import { ColumnDef } from "@tanstack/react-table";
import { Ban, Edit, UserMinus, UserPlus, UserRound } from "lucide-react";

import { routes } from "@/config/routes";
import { formatDate, trimText } from "@/lib/helpers";
import Text from "@/components/shared/Text";
import Title from "@/components/shared/Title";

export type TProject = {
  id: number;
  isStarred: boolean;
  title: string;
  users: number;
  activity: string;
};

export const getColumns = (): ColumnDef<TProject>[] => {
  return [
    {
      accessorKey: "title",
      header: () => {
        return <Title>Project Name</Title>;
      },
      cell: ({ row }) => {
        const { id, title } = row.original;
        return (
          <div className="flex items-center space-x-5 py-1.5">
            <Text as="link" href={routes.projectDetail(id)}>
              {trimText(title, 30)}
            </Text>
          </div>
        );
      },
    },
    {
      accessorKey: "users",
      header: () => <Title className="w-[150px]">No. of Users</Title>,
      cell: ({ row }) => {
        const { users } = row.original;
        return (
          <Text
            as="link"
            href={routes.showProjectUsers(row.original.id)}
            className="text-[13px] flex items-center gap-2"
          >
            <UserRound className="h-4 w-4" />
            {users}
          </Text>
        );
      },
    },
    {
      accessorKey: "activity",
      header: () => <Title className="w-[150px]">Recent Activity</Title>,
      cell: ({ row }) => {
        const { activity } = row.original;
        return <Text className="text-[13px]">{formatDate(activity)}</Text>;
      },
    },
  ];
};
