import {
  ArchiveRestore,
  CheckCheck,
  CircleCheckBig,
  EllipsisVertical,
  OctagonX,
  RefreshCcwDot,
  Trash2,
  Undo,
} from "lucide-react";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import Title from "@/components/shared/Title";
import { useModal } from "@/store/useModal";
import AssignProjectToUser from "./AssignProjectToUser";
import RemoveProjectFromUser from "./RemoveProjectFromUser";
import { AlertDialogCancel } from "@/components/ui/alert-dialog";

const UserActions = () => {
  const { setChildren, setClassName, setOpen, setTitle } = useModal();

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" className="h-8 w-8 p-0">
          <span className="sr-only">Open menu</span>
          <EllipsisVertical className="h-4 w-4" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="start" side="left" className="w-56">
        <DropdownMenuItem
          className="py-1.5 cursor-pointer"
          onClick={() => {
            setOpen(true);
            setTitle("Assign Project > User Name");
            setClassName("max-w-[1000px]");
            setChildren(<AssignProjectToUser />);
          }}
        >
          <CircleCheckBig className="mr-3 h-[14px] w-[14px]" />
          <span className="text-[13px]">Assign Project</span>
        </DropdownMenuItem>
        <DropdownMenuItem
          className="py-1.5 cursor-pointer"
          onClick={() => {
            setOpen(true);
            setTitle("Remove Project > User Name");
            setClassName("max-w-[600px]");
            setChildren(<RemoveProjectFromUser />);
          }}
        >
          <CheckCheck className="mr-3 h-[14px] w-[14px]" />
          <span className="text-[13px]">Remove Project</span>
        </DropdownMenuItem>
        <DropdownMenuSeparator className="my-1 bg-primary/20" />
        <DropdownMenuItem
          className="py-1.5 cursor-pointer"
          onClick={() => {
            setOpen(true);
            setTitle("Confirmation");
            setClassName("max-w-[400px]");
            setChildren(
              <ConfirmationModal
                title="Are you Sure, You want to Disable the User"
                name="User Name"
              />
            );
          }}
        >
          <RefreshCcwDot className="mr-3 h-[14px] w-[14px]" />
          <span className="text-[13px]">Disable</span>
        </DropdownMenuItem>
        <DropdownMenuItem
          className="py-1.5 cursor-pointer"
          onClick={() => {
            setOpen(true);
            setTitle("Confirmation");
            setClassName("max-w-[400px]");
            setChildren(
              <ConfirmationModal
                title="Are you Sure, You want to Enable the User"
                name="User Name"
              />
            );
          }}
        >
          <Undo className="mr-3 h-[14px] w-[14px]" />
          <span className="text-[13px]">Enable</span>
        </DropdownMenuItem>
        <DropdownMenuSeparator className="my-1 bg-primary/20" />
        <DropdownMenuItem
          className="py-1.5 cursor-pointer"
          onClick={() => {
            setOpen(true);
            setTitle("Confirmation");
            setClassName("max-w-[400px]");
            setChildren(
              <ConfirmationModal
                title="Are you Sure, You want to Grant HR Role to the User"
                name="User Name"
              />
            );
          }}
        >
          <ArchiveRestore className="mr-3 h-[14px] w-[14px]" />
          <span className="text-[13px]">Grant HR Role</span>
        </DropdownMenuItem>
        <DropdownMenuItem
          className="py-1.5 cursor-pointer"
          onClick={() => {
            setOpen(true);
            setTitle("Confirmation");
            setClassName("max-w-[400px]");
            setChildren(
              <ConfirmationModal
                title="Are you Sure, You want to Grant Super-admin Role to the User"
                name="User Name"
              />
            );
          }}
        >
          <Trash2 className="mr-3 h-[14px] w-[14px]" />
          <span className="text-[13px]">Grant Super-admin Role</span>
        </DropdownMenuItem>
        <DropdownMenuItem
          className="py-1.5 cursor-pointer"
          onClick={() => {
            setOpen(true);
            setTitle("Confirmation");
            setClassName("max-w-[400px]");
            setChildren(
              <ConfirmationModal
                title="Are you Sure, You want to Revoke HR Role to the User"
                name="User Name"
              />
            );
          }}
        >
          <OctagonX className="mr-3 h-[14px] w-[14px]" />
          <span className="text-[13px]">Revoke HR Role</span>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

const ConfirmationModal = ({
  title,
  name,
}: {
  title: string;
  name: string;
}) => {
  return (
    <div className="p-4 space-y-6">
      <Title className="font-semibold text-base text-center">
        <span className="font-normal text-sm">{title}</span> {name} ?
      </Title>

      <div className="flex justify-center gap-4 items-center ">
        <AlertDialogCancel asChild>
          <Button variant="outline" className="px-10 font-lexend">
            Cancel
          </Button>
        </AlertDialogCancel>
        <Button type="submit" className="px-10 font-lexend">
          Yes
        </Button>
      </div>
    </div>
  );
};

export default UserActions;
