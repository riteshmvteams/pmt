"use client";

import { ColumnDef } from "@tanstack/react-table";
import {
  AlarmClockCheck,
  Ban,
  CircleCheckBig,
  ClipboardList,
  Edit,
  EllipsisVertical,
  Pencil,
  Trash2,
  UserMinus,
  UserPlus,
} from "lucide-react";

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
import { TTask } from "../../tasks/_components/columns";
import { useModal } from "@/store/useModal";
import ConfirmationModal from "@/components/shared/ConfirmationModal";
import AddTasksInMilestone from "./AddTasksInMilestone";

export type TMilestone = {
  id: number;
  title: string;
  status: "Open" | "Completed" | "Closed";
  created_at: string;
  tasks: TTask[];
};

export const milestonesActions = [
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

export const getColumns = (): ColumnDef<TMilestone>[] => {
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
      accessorKey: "tasks",
      header: () => {
        return <Title className="w-[100px]">Taks Count</Title>;
      },
      cell: ({ row }) => {
        return <Text className="p-1.5">{row.original.tasks?.length}</Text>;
      },
    },
    {
      id: "actions",
      cell: () => {
        return <MileStoneTableActions />;
      },
    },
  ];
};

const MileStoneTableActions = () => {
  const { setChildren, setClassName, setOpen, setTitle } = useModal();

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" className="h-8 w-8 p-0">
          <span className="sr-only">Open menu</span>
          <EllipsisVertical className="h-4 w-4" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="start" side="left" className="w-48">
        <DropdownMenuItem className="py-1.5 cursor-pointer">
          <ClipboardList className="mr-3 h-[14px] w-[14px]" />
          <span className="text-[13px]">Create New Task</span>
        </DropdownMenuItem>
        <DropdownMenuItem
          className="py-1.5 cursor-pointer"
          onClick={() => {
            setOpen(true);
            setTitle("Add Task");
            setClassName("max-w-[800px]");
            setChildren(<AddTasksInMilestone />);
          }}
        >
          <AlarmClockCheck className="mr-3 h-[14px] w-[14px]" />
          <span className="text-[13px]">Add Task</span>
        </DropdownMenuItem>
        <DropdownMenuItem className="py-1.5 cursor-pointer">
          <Pencil className="mr-3 h-[14px] w-[14px]" />
          <span className="text-[13px]">Edit</span>
        </DropdownMenuItem>
        <DropdownMenuItem
          className="py-1.5 cursor-pointer"
          onClick={() => {
            setOpen(true);
            setTitle("Confirmation");
            setClassName("max-w-[500px]");
            setChildren(
              <ConfirmationModal
                title="Are you Sure, You want to Delete this MileStone"
                name="Milestone Name"
              />
            );
          }}
        >
          <Trash2 className="mr-3 h-[14px] w-[14px]" />
          <span className="text-[13px]">Delete</span>
        </DropdownMenuItem>
        <DropdownMenuItem
          className="py-1.5 cursor-pointer"
          onClick={() => {
            setOpen(true);
            setTitle("Confirmation");
            setClassName("max-w-[500px]");
            setChildren(
              <ConfirmationModal
                title="Are you Sure, You want to Complete this MileStone"
                name="Milestone Name"
              />
            );
          }}
        >
          <CircleCheckBig className="mr-3 h-[14px] w-[14px]" />
          <span className="text-[13px]">Complete</span>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};
