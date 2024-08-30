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

const createOptions = [
  {
    title: "Project",
    target: "project",
    icon: FolderOpenDot,
  },
  {
    title: "Users",
    target: "users",
    icon: UserPlus,
  },
  {
    title: "Tasks",
    target: "tasks",
    icon: FileCheck2,
  },
  {
    title: "Milestones",
    target: "milestones",
    icon: Milestone,
  },
  {
    title: "Time",
    target: "time",
    icon: Timer,
  },
];

export default function CreateNew() {
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
