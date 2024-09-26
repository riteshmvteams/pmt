import CustomUserAvatar from "@/components/shared/CustomUserAvatar";
import Title from "@/components/shared/Title";
import { getRoleBadge } from "@/components/shared/userTable/columns";
import { AlertDialogCancel } from "@/components/ui/alert-dialog";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import React from "react";

export default function RemoveUserFromProject() {
  return (
    <div className="p-4 space-y-4">
      <div className="flex items-center mb-2">
        <Input placeholder="Search Users..." />
      </div>

      <div className="max-h-[400px] overflow-y-auto scrollbar px-1">
        <ul>
          <li className="p-2 border border-b-0 last:border-b grid grid-cols-3 items-center bg-muted">
            <Title className="font-normal">User Name</Title>
            <Title className="justify-self-center font-normal">
              Short Name
            </Title>
            <Title className="justify-self-end font-normal">SRK</Title>
          </li>
          {Array.from({ length: 10 })?.map((_, ind) => {
            return (
              <li
                key={ind}
                className="p-2 border border-b-0 last:border-b hover:bg-primary/5 grid grid-cols-3 items-center"
              >
                <label className="flex items-center gap-2 cursor-pointer">
                  <Checkbox />
                  <CustomUserAvatar
                    title="Super Admin"
                    subTitle="super@admin.com"
                  />
                </label>
                <Title className="justify-self-center font-normal text-xs">
                  SRK
                </Title>
                <div className="justify-self-end">
                  {getRoleBadge(
                    ind === 0 ? "owner" : ind === 2 ? "super-admin" : "user"
                  )}
                </div>
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
          Remove
        </Button>
      </div>
    </div>
  );
}
