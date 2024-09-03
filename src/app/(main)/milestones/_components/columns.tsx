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
import { routes } from "@/config/routes";
import { formatDate } from "@/lib/helpers";
import Text from "@/components/shared/Text";

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

export const getColumns = (): ColumnDef<TProject>[] => {
  return [
    {
      accessorKey: "id",
      header: () => {
        return (
          <Text variant="title" className="text-xs">
            ID
          </Text>
        );
      },
      cell: ({ row }) => {
        return <Text>{row.original.id}</Text>;
      },
    },
    {
      accessorKey: "title",
      header: () => {
        return (
          <Text variant="title" className="text-xs">
            Milestone Title
          </Text>
        );
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
      accessorKey: "title",
      header: () => {
        return (
          <Text variant="title" className="text-xs">
            Taks Count
          </Text>
        );
      },
      cell: ({ row }) => {
        return <Text className="p-1.5">{row.original.id}</Text>;
      },
    },
  ];
};
