"use client";

import { useAddThing } from "@/store/addThings";
import { CustomAlertDialog } from "../CustomAlertDialog";
import AddProjects from "./AddProjects";
import AddUsers from "./AddUsers";
import AddTasks from "./AddTasks";
import AddMilestones from "./AddMilestones";
import AddTime from "./AddTime";
import { CustomSheet } from "../CustomSheet";

const AddModalsSheet = () => {
  const { open, setOpen, target } = useAddThing((state) => state);

  switch (target) {
    case "add_project":
      return (
        <CustomAlertDialog
          trigger={""}
          title="Add Project"
          className="max-w-[800px]"
          open={open}
          setOpen={setOpen}
        >
          <AddProjects />
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
          <AddUsers />
        </CustomAlertDialog>
      );
    case "add_tasks":
      return (
        <CustomSheet
          title="Create Task"
          btnLabel="Add Task"
          side="right"
          className="sm:max-w-[1000px]"
          open={open}
          setOpen={setOpen}
          trigger={"<div></div>"}
        >
          <AddTasks />
        </CustomSheet>
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
          <AddMilestones />
        </CustomAlertDialog>
      );
    default:
      return null;
  }
};

export default AddModalsSheet;
