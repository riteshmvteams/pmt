import { AlertDialogCancel } from "../ui/alert-dialog";
import { Button } from "../ui/button";
import Title from "./Title";

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
export default ConfirmationModal;
