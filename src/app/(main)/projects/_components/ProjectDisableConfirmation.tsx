import Title from "@/components/shared/Title";
import { AlertDialogCancel } from "@/components/ui/alert-dialog";
import { Button } from "@/components/ui/button";

const ProjectDisableConfirmation = () => {
  return (
    <div className="p-4 space-y-6">
      <Title className="font-semibold text-base text-center">
        <span className="font-normal text-sm">
          Are you Sure want to Disable the project
        </span>{" "}
        Project Title ?
      </Title>

      <div className="flex justify-center gap-4 items-center ">
        <AlertDialogCancel asChild>
          <Button variant="outline" className="px-10 font-lexend">
            Cancel
          </Button>
        </AlertDialogCancel>
        <Button type="submit" className="px-10 font-lexend">
          Disable
        </Button>
      </div>
    </div>
  );
};

export default ProjectDisableConfirmation;
