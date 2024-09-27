"use client";

import { useState } from "react";

import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import { AlertDialogCancel } from "@/components/ui/alert-dialog";
import { Button } from "@/components/ui/button";
import Title from "../Title";

export default function RemoveProjectFromUser() {
  const [selectProject, setSelectedProjects] = useState<string[] | []>([]);

  const onSelectProject = (title: string) => {
    if (selectProject?.length && selectProject?.includes(title as never)) {
      setSelectedProjects((prev) => prev.filter((item) => item !== title));
      return;
    }

    setSelectedProjects((prev) => [...prev, title]);
  };

  return (
    <div className="p-4 space-y-4">
      <div className="flex items-center mb-2">
        <Input placeholder="Search Projects..." />
      </div>

      <ul className="max-h-[400px] overflow-y-auto scrollbar">
        <li className="p-2.5 border border-b-0 last:border-b grid grid-cols-2 items-center bg-muted">
          <div className="flex items-center gap-5 cursor-pointer">
            <Checkbox />
            <Title className="justify-self-center font-normal">
              Project Name
            </Title>
          </div>
          <Title className="justify-self-end font-normal">Short Name</Title>
        </li>
        {Array.from({ length: 15 })?.map((_, ind) => {
          return (
            <li
              key={ind}
              className="p-2.5 border border-b-0 last:border-b hover:bg-primary/5 grid grid-cols-2 items-center"
            >
              <label className="flex items-center gap-5 cursor-pointer">
                <Checkbox
                  onCheckedChange={() =>
                    onSelectProject(`Project Title ${ind + 1}`)
                  }
                  checked={selectProject?.includes(
                    `Project Title ${ind + 1}` as never
                  )}
                />
                <Title className="font-normal text-xs">
                  Project Title {ind + 1}
                </Title>
              </label>
              <Title className="justify-self-end font-normal text-xs">
                SH{ind + 1}
              </Title>
            </li>
          );
        })}
      </ul>

      <div className="flex justify-center gap-4 items-center pt-4">
        <Button type="submit" className="px-10 font-lexend">
          Remove
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
