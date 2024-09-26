"use client";

import {
  AlertDialog,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { Button } from "../ui/button";
import { X } from "lucide-react";
import { cn } from "@/lib/utils";
import { useModal } from "@/store/useModal";

export function CustomAlertDialog() {
  const { children, title, isOpen, setOpen, className } = useModal(
    (state) => state
  );

  return (
    <AlertDialog open={isOpen} onOpenChange={setOpen}>
      <AlertDialogTrigger asChild></AlertDialogTrigger>
      <AlertDialogContent
        className={cn(
          "p-0 max-w-[600px] gap-0 max-h-[90vh] overflow-x-hidden overflow-y-auto scrollbar",
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
        <AlertDialogDescription className="p-0"></AlertDialogDescription>
        {children}
      </AlertDialogContent>
    </AlertDialog>
  );
}
