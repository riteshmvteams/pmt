"use client";

import { ColumnDef } from "@tanstack/react-table";
import {
  Ban,
  Edit,
  EllipsisVertical,
  StarIcon,
  UserMinus,
  UserPlus,
  UserRound,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { cn } from "@/lib/utils";
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

const tableActions = [
  {
    title: "Add User",
    target: "add-user",
    icon: UserPlus,
  },
  {
    title: "Remove User",
    target: "remove-user",
    icon: UserMinus,
  },
  {
    title: "Edit",
    target: "edit",
    icon: Edit,
  },
  {
    title: "Disable",
    target: "disable",
    icon: Ban,
  },
];

export const getColumns = ({
  star,
  setParams,
}: {
  star: string | null;
  setParams: any;
}): ColumnDef<TProject>[] => {
  return [
    {
      accessorKey: "title",
      header: () => {
        return (
          <div className="flex gap-6 items-center font-lexend w-[400px]">
            <button
              className={cn("font-bold", star === "true" ? "" : "text-primary")}
              onClick={() => setParams("star", "delete")}
            >
              All (30)
            </button>
            <button
              className={cn(
                "flex gap-1 items-center",
                star === "true" ? "text-primary" : ""
              )}
              onClick={() => setParams("star", "true")}
            >
              <StarIcon className={cn("h-5 w-5 fill-primary text-primary")} />
              <span>Starred (2)</span>
            </button>
          </div>
        );
      },
      cell: ({ row }) => {
        const { id, isStarred, title } = row.original;
        return (
          <div className="flex items-center space-x-5 py-1.5">
            <button className="hover:text-primary">
              <StarIcon
                className={cn(
                  "h-5 w-5",
                  isStarred ? "fill-primary text-primary" : ""
                )}
              />
            </button>
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
            <DropdownMenuContent align="start" side="left" className="w-36">
              {tableActions?.map((action) => {
                return (
                  <DropdownMenuItem
                    key={action.target}
                    className="py-1.5 cursor-pointer"
                  >
                    <action.icon className="mr-3 h-[14px] w-[14px]" />
                    <span className="text-[13px]">{action.title}</span>
                  </DropdownMenuItem>
                );
              })}
            </DropdownMenuContent>
          </DropdownMenu>
        );
      },
    },
  ];
};
