"use client";

import MobileMenu from "./MobileMenu";
import UserAccount from "./UserAccount";
import CreateNew from "./CreateNew";
import ThemeSettings from "./ThemeSettings";
import SidebarToogle from "./SidebarToogle";
import { CommandDialogMenu } from "../shared/CommandDialogMenu";
import { CustomAlertDialog } from "../shared/CustomAlertDialog";
import AddTime from "../shared/timelog/AddTime";
import { useAddThing } from "@/store/addThings";
import { Button } from "../ui/button";
import { AlarmClockPlus } from "lucide-react";

export default function Header() {
  return (
    <header className="flex h-14 items-center gap-4 border-b bg-muted/40 px-4 lg:h-[60px] lg:px-6 sticky top-0 z-20">
      <MobileMenu />
      <div className="w-full flex-1 flex items-center gap-2">
        <SidebarToogle />
        <CommandDialogMenu />
      </div>
      <CreateNew />
      <ThemeSettings />
      <UserAccount />
      <AddModalsSheet />
    </header>
  );
}

const AddModalsSheet = () => {
  const { open, setOpen, target, updateAddThing } = useAddThing(
    (state) => state
  );

  switch (target) {
    case "add_project":
      return (
        <CustomAlertDialog
          trigger={""}
          title="Add Project"
          className="max-w-[1100px]"
          open={open}
          setOpen={setOpen}
        >
          Add Projects here
          {/* <AddTime /> */}
        </CustomAlertDialog>
      );
    case "add_time":
      return (
        <CustomAlertDialog
          trigger={""}
          title="Log Your Time"
          className="max-w-[1100px]"
          open={open}
          setOpen={setOpen}
        >
          <AddTime />
        </CustomAlertDialog>
      );
    case "add_users":
      return (
        <CustomAlertDialog
          trigger={""}
          title="Add Users"
          className="max-w-[1100px]"
          open={open}
          setOpen={setOpen}
        >
          Add Users here
          {/* <AddTime /> */}
        </CustomAlertDialog>
      );
    case "add_tasks":
      return (
        <CustomAlertDialog
          trigger={""}
          title="Add Tasks"
          className="max-w-[1100px]"
          open={open}
          setOpen={setOpen}
        >
          Add Tasks here
          {/* <AddTime /> */}
        </CustomAlertDialog>
      );
    case "add_milestones":
      return (
        <CustomAlertDialog
          trigger={""}
          title="Add MileStones"
          className="max-w-[1100px]"
          open={open}
          setOpen={setOpen}
        >
          Add Milestones here
          {/* <AddTime /> */}
        </CustomAlertDialog>
      );
    default:
      return null;
  }
};
