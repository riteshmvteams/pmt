"use client";

import { CustomAlertDialog } from "@/components/shared/CustomAlertDialog";
import AddTime from "@/components/shared/timelog/AddTime";
import { Button } from "@/components/ui/button";
import { useAddThing } from "@/store/addThings";
import { AlarmClockPlus } from "lucide-react";

const AddProject = () => {
  const { open, setOpen, target, updateAddThing } = useAddThing(
    (state) => state
  );

  const handleAddProject = () => {
    updateAddThing("add_project", true);
  };

  return (
    <CustomAlertDialog
      trigger={
        <Button
          className="font-lexend gap-1 active:scale-95"
          onClick={handleAddProject}
        >
          <AlarmClockPlus className="h-4 w-4 text-primary-foreground" /> Add
          Project
        </Button>
      }
      title="Log Your Time"
      className="max-w-[1100px]"
      open={target === "add_project" ? open : false}
      setOpen={setOpen}
    >
      Project==
      <AddTime />
    </CustomAlertDialog>
  );
};

export default AddProject;
