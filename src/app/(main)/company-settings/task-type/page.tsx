import React from "react";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

import TasktypeListing from "./_components/TasktypeListing";
import AddTaskType from "./_components/AddTaskType";

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

const default_task_types = [
  {
    id: 1,
    name: "Development ",
    short_name: "DEV",
    tasks: 69,
  },
  {
    id: 2,
    name: "Bug Fixing",
    short_name: "BUG",
    tasks: 11,
  },
  {
    id: 3,
    name: "Update",
    short_name: "UPD",
    tasks: 3,
  },
  {
    id: 4,
    name: "Change Request",
    short_name: "CR",
    tasks: 42,
  },
  {
    id: 5,
    name: "Idea",
    short_name: "IDEA",
    tasks: 5,
  },
  {
    id: 6,
    name: "Enhancement",
    short_name: "ENH",
    tasks: 3,
  },
  {
    id: 7,
    name: "Research & Development",
    short_name: "R & D",
    tasks: 7,
  },
  {
    id: 8,
    name: "Maintenance",
    short_name: "MNT",
    tasks: 12,
  },
  {
    id: 9,
    name: "Unit Testing",
    short_name: "UT",
    tasks: 3,
  },
  {
    id: 10,
    name: "Quality Assurance",
    short_name: "QA",
    tasks: 22,
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
                return <TasktypeListing key={custom?.id} custom={custom} />;
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
              {default_task_types?.map((custom, ind) => {
                return <TasktypeListing key={custom?.id} custom={custom} />;
              })}
            </ul>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
