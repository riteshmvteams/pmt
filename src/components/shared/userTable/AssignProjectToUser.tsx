"use client";

import { Trash2 } from "lucide-react";
import { Cross2Icon } from "@radix-ui/react-icons";
import { Input } from "@/components/ui/input";
import Title from "../Title";
import { Checkbox } from "@/components/ui/checkbox";
import { AlertDialogCancel } from "@/components/ui/alert-dialog";
import { Button } from "@/components/ui/button";
import { getStatusBadge } from "../status-badge";
import CustomTooltip from "../CustomTooltip";
import { Badge } from "@/components/ui/badge";
import { useState } from "react";
import {
  Popover,
  PopoverClose,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import Text from "../Text";

export default function AssignProjectToUser() {
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
      {selectProject?.length ? (
        <div className="flex flex-wrap gap-1 max-h-[100px] overflow-y-auto scrollbar">
          {selectProject?.map((title, ind) => {
            return (
              <Badge
                key={title}
                variant="outline"
                className="gap-1 bg-primary/5 text-primary items-center"
              >
                <span>{title}</span>
                <button
                  className="h-5 w-5 rounded-full flex items-center justify-center hover:bg-primary/50"
                  onClick={() => onSelectProject(title)}
                >
                  <Cross2Icon className="text-muted-foreground h-3" />
                </button>
              </Badge>
            );
          })}
        </div>
      ) : null}

      <div className="flex items-center mb-2">
        <Input placeholder="Search Projects..." />
      </div>

      <div className="grid grid-cols-5 gap-4">
        <ul className="col-span-3 max-h-[400px] overflow-y-auto scrollbar">
          <li className="p-2.5 border border-b-0 last:border-b grid grid-cols-2 items-center bg-muted">
            <div className="flex items-center gap-2 cursor-pointer">
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
                <label className="flex items-center gap-2 cursor-pointer">
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

        <div className="col-span-2 max-h-[400px] overflow-y-auto scrollbar">
          <Title className="bg-muted mb-2 py-2 px-2 rounded-md text-base">
            Assigned Projects
          </Title>

          <ul>
            {Array.from({ length: 10 })?.map((_, ind) => {
              return (
                <li
                  key={ind}
                  className="p-2 border border-b-0 last:border-b cursor-pointer hover:bg-primary/5 flex justify-between items-center group"
                >
                  <Title className="font-normal text-xs">
                    Project Name Title {ind + 1}
                  </Title>
                  <div className="flex gap-2 items-center">
                    {getStatusBadge(
                      ind === 0 ? "Inactive" : ind === 2 ? "Inactive" : "Active"
                    )}

                    <Popover>
                      <CustomTooltip title="Remove From Project" align="end">
                        <PopoverTrigger asChild>
                          <Button
                            className="w-8 h-8 opacity-0 group-hover:opacity-100"
                            variant="outline"
                            size="icon"
                          >
                            <Trash2 className="w-4 h-4" />
                          </Button>
                        </PopoverTrigger>
                      </CustomTooltip>
                      <PopoverContent>
                        <Text className="font-lexend text-center text-sm">
                          Are You Sure, You Want to Remove the User from this
                          Project?
                        </Text>

                        <div className="flex justify-center gap-1 mt-2">
                          <PopoverClose asChild>
                            <Button
                              className="px-4 w-auto text-xs"
                              variant="outline"
                              size="icon"
                            >
                              No
                            </Button>
                          </PopoverClose>
                          <Button className="px-4 w-auto text-xs" size="icon">
                            Yes
                          </Button>
                        </div>
                      </PopoverContent>
                    </Popover>
                  </div>
                </li>
              );
            })}
          </ul>
        </div>
      </div>

      <div className="flex justify-center gap-4 items-center py-4">
        <Button type="submit" className="px-10 font-lexend">
          Assign
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
