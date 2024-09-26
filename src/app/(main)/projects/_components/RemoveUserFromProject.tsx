import CustomUserAvatar from "@/components/shared/CustomUserAvatar";
import { AlertDialogCancel } from "@/components/ui/alert-dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import React from "react";

export default function RemoveUserFromProject() {
  return (
    <div className="p-4 space-y-4">
      <div className="flex items-center mb-2">
        <Input placeholder="Search Users..." />
      </div>

      <div className="max-h-[400px] overflow-y-auto scrollbar">
        <ul>
          {Array.from({ length: 10 })?.map((_, ind) => {
            return (
              <li
                key={ind}
                className="p-2 border border-b-0 last:border-b cursor-pointer hover:bg-primary/10"
              >
                <CustomUserAvatar
                  title="Super Admin"
                  subTitle="super@admin.com"
                />
              </li>
            );
          })}
        </ul>
      </div>

      <div className="flex justify-center gap-4 items-center py-4">
        <AlertDialogCancel asChild>
          <Button variant="outline" className="px-10 font-lexend">
            Cancel
          </Button>
        </AlertDialogCancel>
        <Button type="submit" className="px-10 font-lexend">
          Add
        </Button>
      </div>
    </div>
  );
}
