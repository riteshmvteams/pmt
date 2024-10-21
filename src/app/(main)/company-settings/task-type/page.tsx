import React from "react";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Title from "@/components/shared/Title";
import AddTaskType from "./_components/AddTaskType";
import { Checkbox } from "@/components/ui/checkbox";
import { Pencil } from "lucide-react";
import { Button } from "@/components/ui/button";

const custom_task_types = [
  {
    id: 1,
    name: "Regression Testing",
    short_name: "RT",
    tasks: 2,
  },
  {
    id: 2,
    name: "Styling",
    short_name: "STL",
    tasks: 1,
  },
  {
    id: 3,
    name: "Designing",
    short_name: "DSG",
    tasks: 3,
  },
  {
    id: 4,
    name: "Check",
    short_name: "CH",
    tasks: 1,
  },
  {
    id: 5,
    name: "Frontend",
    short_name: "FRT",
    tasks: 5,
  },
  {
    id: 6,
    name: "Backend",
    short_name: "BND",
    tasks: 3,
  },
  {
    id: 7,
    name: "Other",
    short_name: "OT",
    tasks: 7,
  },
];

export default function TaskTypePage() {
  return (
    <div>
      <div className="flex justify-end gap-2 mb-2">
        <AddTaskType />
        <Button>Save</Button>
      </div>
      <div className="flex flex-col gap-4">
        <Card className="rounded-md">
          <CardHeader className="border-b px-4 py-2.5 bg-muted/50 flex-row justify-between items-center space-y-0">
            <CardTitle className="text-base font-lexend font-medium tracking-wide flex flex-col gap-1">
              Custom Task Type
            </CardTitle>
          </CardHeader>
          <CardContent className="grid grid-cols-1 gap-6 bg-muted/10 p-x-4 py-2.5">
            <ul className="grid grid-cols-3 gap-y-1.5">
              {custom_task_types?.map((custom, ind) => {
                return (
                  <li
                    key={custom?.id}
                    className="flex items-center gap-2 group"
                  >
                    <Checkbox id={`${custom?.id}`} />
                    <label
                      htmlFor={`${custom?.id}`}
                      className="text-sm font-lexend text-muted-foreground select-none"
                    >
                      {custom?.name} ({custom?.short_name}) -{" "}
                      <span className="text-primary">{custom?.tasks}</span>
                    </label>
                    <button className="text-muted-foreground hover:text-primary opacity-0 group-hover:opacity-100 duration-300">
                      <Pencil className="w-[14px] h-[14px] " />
                    </button>
                  </li>
                );
              })}
            </ul>
          </CardContent>
        </Card>

        <Card className="rounded-md">
          <CardHeader className="border-b px-4 py-2.5 bg-muted/50 flex-row justify-between items-center space-y-0">
            <CardTitle className="text-base font-lexend font-medium tracking-wide flex flex-col gap-1">
              Default Task Type
            </CardTitle>
          </CardHeader>
          <CardContent className="grid grid-cols-1 gap-6 bg-muted/10 p-x-4 py-2.5">
            <ul className="grid grid-cols-3 gap-y-1.5">
              {custom_task_types?.map((custom, ind) => {
                return (
                  <li key={custom?.id} className="flex items-center gap-2">
                    <Checkbox id={`${custom?.id}`} />
                    <label
                      htmlFor={`${custom?.id}`}
                      className="text-sm font-lexend text-muted-foreground select-none"
                    >
                      {custom?.name} ({custom?.short_name}) -{" "}
                      <span className="text-primary">{custom?.tasks}</span>
                    </label>
                  </li>
                );
              })}
            </ul>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
