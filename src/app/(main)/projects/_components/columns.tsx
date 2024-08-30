"use client";

import { ColumnDef } from "@tanstack/react-table";
import {
  Ban,
  Edit,
  EllipsisVertical,
  StarIcon,
  UserMinus,
  UserPlus,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { routes } from "@/config/routes";
import { formatDate } from "@/lib/helpers";

export type TProject = {
  id: number;
  isStarred: boolean;
  title: string;
  users: number;
  activity: Date;
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
          <div className="flex gap-6 items-center font-lexend">
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
            <Link
              href={routes.projectDetail(id)}
              className="text-sm tracking-wide font-lexend font-light hover:underline underline-offset-2"
            >
              {title}
            </Link>
          </div>
        );
      },
    },
    {
      accessorKey: "users",
      header: "No. of Users",
      cell: ({ row }) => {
        const { users } = row.original;
        return (
          <span className="text-sm tracking-wide font-lexend font-light">
            {users}
          </span>
        );
      },
    },
    {
      accessorKey: "activity",
      header: "Recent Activity",
      cell: ({ row }) => {
        const { activity } = row.original;
        return (
          <span className="text-sm tracking-wide font-lexend font-light">
            {formatDate(activity)}
          </span>
        );
      },
    },
    {
      id: "actions",
      cell: ({ row }) => {
        const project = row.original;
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
                    className="py-2 cursor-pointer"
                  >
                    <action.icon className="mr-3 h-[14px] w-[14px]" />
                    <span className="text-xs">{action.title}</span>
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
