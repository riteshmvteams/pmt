import {
  AlertDialog,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { Button } from "../ui/button";
import { X } from "lucide-react";
import { cn } from "@/lib/utils";

type Props = {
  trigger: React.ReactNode;
  children?: React.ReactNode;
  title?: string;
  className?: string;
};

export function CustomAlertDialog({
  trigger,
  children,
  title,
  className,
}: Props) {
  return (
    <AlertDialog>
      <AlertDialogTrigger asChild>{trigger}</AlertDialogTrigger>
      <AlertDialogContent
        className={cn(
          "p-0 max-w-[600px] gap-0 max-h-[90vh] overflow-auto scrollbar",
          className
        )}
      >
        <AlertDialogHeader className="px-4 py-3 flex justify-between flex-row items-center space-y-0 bg-primary/10">
          <AlertDialogTitle className="font-lexend text-lg">
            {title ? title : ""}
          </AlertDialogTitle>
          <AlertDialogCancel asChild>
            <Button
              variant="outline"
              size="icon"
              className="text-foreground h-6 w-6 p-0"
            >
              <X className="w-4 h-4" />
            </Button>
          </AlertDialogCancel>
        </AlertDialogHeader>
        {children}
      </AlertDialogContent>
    </AlertDialog>
  );
}
