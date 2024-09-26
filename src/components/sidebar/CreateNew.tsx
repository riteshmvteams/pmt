"use client";

import {
  PlusCircle,
  FolderOpenDot,
  UserPlus,
  FileCheck2,
  Milestone,
  Timer,
  FolderClosed,
  Users,
  AlarmClockPlus,
} from "lucide-react";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import { useModal } from "@/store/useModal";
import AddProjects from "../shared/addThings/AddProjects";
import AddUsers from "../shared/addThings/AddUsers";
import AddTime from "../shared/addThings/AddTime";
import AddMilestones from "../shared/addThings/AddMilestones";
import AddTasks from "../shared/addThings/AddTasks";
import { useDrawer } from "@/store/useDrawer";

export default function CreateNew() {
  const { setTitle, setChildren, setClassName, setOpen } = useModal(
    (state) => state
  );
  const {
    setDrawerTitle,
    setDrawerChildren,
    setDrawerClassName,
    setDrawerOpen,
    setSide,
  } = useDrawer((state) => state);

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
          <DropdownMenuItem
            className="py-3 cursor-pointer text-muted-foreground"
            onClick={() => {
              setTitle(
                <ModalTitle Icon={FolderClosed} title="Create Project" />
              );
              setChildren(<AddProjects />);
              setClassName("max-w-[800px]");
              setOpen(true);
            }}
          >
            <FolderOpenDot className="mr-3 h-5 w-5" />
            <span>Project</span>
          </DropdownMenuItem>
          <DropdownMenuItem
            className="py-3 cursor-pointer text-muted-foreground"
            onClick={() => {
              setTitle(<ModalTitle Icon={Users} title="Invite New Users" />);
              setChildren(<AddUsers />);
              setClassName("max-w-[800px]");
              setOpen(true);
            }}
          >
            <UserPlus className="mr-3 h-5 w-5" />
            <span>Users</span>
          </DropdownMenuItem>
          <DropdownMenuItem
            className="py-3 cursor-pointer text-muted-foreground"
            onClick={() => {
              setDrawerTitle(
                <ModalTitle Icon={FileCheck2} title="Create Task" />
              );
              setDrawerChildren(<AddTasks />);
              setDrawerClassName("sm:max-w-[1000px]");
              setDrawerOpen(true);
              setSide("right");
            }}
          >
            <FileCheck2 className="mr-3 h-5 w-5" />
            <span>Tasks</span>
          </DropdownMenuItem>
          <DropdownMenuItem
            className="py-3 cursor-pointer text-muted-foreground"
            onClick={() => {
              setTitle(<ModalTitle Icon={Milestone} title="Add Milestones" />);
              setChildren(<AddMilestones />);
              setClassName("max-w-[800px]");
              setOpen(true);
            }}
          >
            <Milestone className="mr-3 h-5 w-5" />
            <span>Milestones</span>
          </DropdownMenuItem>
          <DropdownMenuItem
            className="py-3 cursor-pointer text-muted-foreground"
            onClick={() => {
              setTitle(
                <ModalTitle Icon={AlarmClockPlus} title="Log Your Time" />
              );
              setChildren(<AddTime />);
              setClassName("max-w-[1100px]");
              setOpen(true);
            }}
          >
            <Timer className="mr-3 h-5 w-5" />
            <span>Time</span>
          </DropdownMenuItem>
        </DropdownMenuGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}

export const ModalTitle = ({ Icon, title }: { Icon: any; title: string }) => {
  return (
    <div className="flex items-center gap-3">
      <Icon className="h-5 w-5" />
      {title}
    </div>
  );
};
