import CustomUserAvatar from "@/components/shared/CustomUserAvatar";
import { getRoleBadge } from "@/components/shared/userTable/columns";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import React from "react";

export default function AddTasksInMilestone() {
  return (
    <div className="p-4">
      <div className="bg-background flex flex-col gap-3">
        <div className="flex items-center">
          <Input placeholder="Search Users..." />
        </div>

        <div className="flex flex-col border rounded-md scrollbar overflow-y-auto">
          {Array.from({ length: 10 }).map((_, i) => {
            return (
              <label
                tabIndex={0}
                key={i}
                className="px-4 py-3 hover:bg-primary/5 cursor-pointer border-b last:border-b-0 flex justify-between items-center"
              >
                <div className="flex items-center gap-2">
                  <Checkbox />
                  <CustomUserAvatar
                    title="Super Admin"
                    subTitle="super@admin.com"
                  />
                </div>
                <div>
                  {getRoleBadge(
                    i === 0 ? "owner" : i === 2 ? "super-admin" : "user"
                  )}
                </div>
              </label>
            );
          })}
        </div>

        <div className="flex justify-center gap-2 items-center"></div>
      </div>
    </div>
  );
}
