"use client";

import { useAddThing } from "@/store/addThings";
import { CustomAlertDialog } from "../CustomAlertDialog";
import AddProjects from "./AddProjects";
import AddUsers from "./AddUsers";
import AddTasks from "./AddTasks";
import AddMilestones from "./AddMilestones";
import AddTime from "./AddTime";

const AddModalsSheet = () => {
  const { open, setOpen, target } = useAddThing((state) => state);

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
        <CustomAlertDialog
          trigger={""}
          title="Add Tasks"
          className="max-w-[1100px]"
          open={open}
          setOpen={setOpen}
        >
          <AddTasks />
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
          <AddMilestones />
        </CustomAlertDialog>
      );
    default:
      return null;
  }
};

export default AddModalsSheet;
