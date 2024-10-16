"use client";

import { ColumnDef } from "@tanstack/react-table";
import { EllipsisVertical, RotateCcw, Trash2 } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Checkbox } from "@/components/ui/checkbox";
import Title from "@/components/shared/Title";
import Text from "@/components/shared/Text";
import { getStatusBadge } from "@/components/shared/status-badge";
import { useModal } from "@/store/useModal";
import ConfirmationModal from "@/components/shared/ConfirmationModal";

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
      accessorKey: "id",
      header: ({ table }) => {
        return (
          <div className="flex items-center gap-10 w-[100px]">
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
          <div className="flex items-center gap-10 w-[100px]">
            <Checkbox
              checked={row.getIsSelected()}
              onCheckedChange={(value) => row.toggleSelected(!!value)}
              aria-label="Select row"
            />
            <Text className="text-[13px]">{row.original.id}</Text>
          </div>
        );
      },
    },
    {
      id: "title",
      header: () => {
        return <Title className="w-[400px]">Title</Title>;
      },
      cell: () => {
        return (
          <div className="flex flex-col py-0.5">
            <Text>Title of the Task</Text>
            <span className="text-xs text-muted-foreground">
              Archived by SP Today 9:36 am
            </span>
          </div>
        );
      },
    },
    {
      id: "users",
      header: () => {
        return <Title className="w-[100px]">Status</Title>;
      },
      cell: () => {
        return getStatusBadge("Completed");
      },
    },
    {
      id: "activity",
      header: () => {
        return <Title className="w-[100px]">Project</Title>;
      },
      cell: () => {
        return <Text>Project Title</Text>;
      },
    },
    {
      id: "actions",
      cell: () => {
        return <ProjectActionDropDowns />;
      },
    },
  ];
};

export const ProjectActionDropDowns = () => {
  const { setChildren, setClassName, setOpen, setTitle } = useModal();

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" className="h-8 w-8 p-0">
          <span className="sr-only">Open menu</span>
          <EllipsisVertical className="h-4 w-4" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="start" side="left" className="w-36">
        <DropdownMenuItem
          className="py-1.5 cursor-pointer"
          onClick={() => {
            setOpen(true);
            setTitle("Restore > Project Title");
            setClassName("max-w-[600px]");
            setChildren(
              <ConfirmationModal
                title="Are you Sure? You want to Restore the Task"
                name="Task Name"
              />
            );
          }}
        >
          <RotateCcw className="mr-3 h-[14px] w-[14px]" />
          <span className="text-[13px]">Restore</span>
        </DropdownMenuItem>
        <DropdownMenuItem
          className="py-1.5 cursor-pointer"
          onClick={() => {
            setOpen(true);
            setTitle("Delete > Project Title");
            setClassName("max-w-[600px]");
            setChildren(
              <ConfirmationModal
                title="Are you Sure? You want to Remove the Task from Archeive List"
                name="Task Name"
              />
            );
          }}
        >
          <Trash2 className="mr-3 h-[14px] w-[14px]" />
          <span className="text-[13px]">Remove</span>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};
