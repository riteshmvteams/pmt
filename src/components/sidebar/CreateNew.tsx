"use client";

import {
  PlusCircle,
  FolderOpenDot,
  UserPlus,
  FileCheck2,
  Milestone,
  Timer,
} from "lucide-react";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import { useAddThing } from "@/store/addThings";

const createOptions = [
  {
    title: "Project",
    target: "add_project",
    icon: FolderOpenDot,
  },
  {
    title: "Users",
    target: "add_users",
    icon: UserPlus,
  },
  {
    title: "Tasks",
    target: "add_tasks",
    icon: FileCheck2,
  },
  {
    title: "Milestones",
    target: "add_milestones",
    icon: Milestone,
  },
  {
    title: "Time",
    target: "add_time",
    icon: Timer,
  },
];

export default function CreateNew() {
  const { updateAddThing, target } = useAddThing((state) => state);
  const handleClick = (target: string) => {
    updateAddThing(target, true);
  };

  console.log(target, "target===");

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          className="flex gap-2 text-muted-foreground"
          variant={"outline"}
        >
          <PlusCircle />
          <span>New</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56">
        <DropdownMenuGroup>
          {createOptions?.map((option) => {
            return (
              <DropdownMenuItem
                key={option?.target}
                className="py-3 cursor-pointer text-muted-foreground"
                onClick={() => handleClick(option?.target)}
              >
                <option.icon className="mr-3 h-5 w-5" />
                <span>{option?.title}</span>
              </DropdownMenuItem>
            );
          })}
        </DropdownMenuGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
