"use client";

import { ColumnDef } from "@tanstack/react-table";
import { Ban, Edit, EllipsisVertical, UserMinus, UserPlus } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { routes } from "@/config/routes";
import Text from "@/components/shared/Text";
import Title from "@/components/shared/Title";
import React from "react";
import { Checkbox } from "@/components/ui/checkbox";

export type TProject = {
  id: number;
  isStarred: boolean;
  title: string;
  users: number;
  activity: string;
};

const tableActions = [
  {
    title: "Create New Task",
    target: "create-task",
    icon: UserPlus,
  },
  {
    title: "Add Task",
    target: "add-task",
    icon: UserMinus,
  },
  {
    title: "Edit",
    target: "edit",
    icon: Edit,
  },
  {
    title: "Delete",
    target: "delete",
    icon: Ban,
  },
  {
    title: "Complete",
    target: "complete",
    icon: Ban,
  },
];

export const getColumns = (): ColumnDef<TProject>[] => {
  return [
    {
      accessorKey: "id",
      header: ({ table }) => {
        return (
          <div className="flex items-center gap-3 w-[50px]">
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
            <Title>ID</Title>
          </div>
        );
      },
      cell: ({ row }) => {
        return (
          <div className="flex items-center gap-3 w-[50px]">
            <Checkbox
              checked={row.getIsSelected()}
              onCheckedChange={(value) => row.toggleSelected(!!value)}
              aria-label="Select row"
            />
            <Text>{row.original.id}</Text>
          </div>
        );
      },
      enableSorting: false,
      enableHiding: false,
    },
    {
      accessorKey: "title",
      header: () => {
        return <Title className="w-[200px]">Milestone Title</Title>;
      },
      cell: ({ row }) => {
        return (
          <Text
            as="link"
            href={routes.milestoneDetail(row.original.id)}
            className="block p-1.5"
          >
            {row.original.title}
          </Text>
        );
      },
    },
    {
      accessorKey: "users",
      header: () => {
        return <Title className="w-[100px]">Taks Count</Title>;
      },
      cell: ({ row }) => {
        return <Text className="p-1.5">{row.original.users}</Text>;
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
            <DropdownMenuContent align="start" side="left" className="w-48">
              {tableActions?.map((action, index) => {
                return action.icon ? (
                  <DropdownMenuItem
                    key={index}
                    className="py-1.5 cursor-pointer"
                  >
                    <action.icon className="mr-3 h-[14px] w-[14px]" />
                    <span className="text-[13px]">{action.title}</span>
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
