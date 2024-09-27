"use client";

import { AlertDialogCancel } from "@/components/ui/alert-dialog";
import { Button } from "@/components/ui/button";

export default function TaskMoveToMilestone() {
  return (
    <div className="p-4">
      <div className="flex justify-center gap-4 items-center py-4">
        <Button type="submit" className="px-10 font-lexend">
          Move Task
        </Button>
        <AlertDialogCancel asChild>
          <Button variant="outline" className="px-10 font-lexend">
            Cancel
          </Button>
        </AlertDialogCancel>
      </div>
    </div>
  );
}
