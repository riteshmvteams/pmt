"use client";

import AddTime from "@/components/shared/addThings/AddTime";
import NoItems from "@/components/shared/NoItems";
import TimeListTable from "@/components/shared/timelog/table";
import TimeLogListing from "@/components/shared/timelog/TimeLogListing";
import Title from "@/components/shared/Title";
import { ModalTitle } from "@/components/sidebar/CreateNew";
import { Button } from "@/components/ui/button";
import { useDrawer } from "@/store/useDrawer";
import { useModal } from "@/store/useModal";
import {
  AlarmClockPlus,
  Ban,
  CalendarCheck,
  DollarSign,
  Filter,
  Timer,
} from "lucide-react";
import React, { useState } from "react";

export type TTimeLog = {
  id: number;
  user_name: string;
  task_name: string;
  task_description: string;
  start_time: string;
  end_time: string;
  spent_time: string;
  billable: boolean;
  date: string;
};

export const timlogData = [
  {
    id: 1,
    user_name: "Ritesh Kumar",
    task_name: "Short Task Name",
    task_description: `Today's Update:
    1. Created Home Page Design
     - Banner section
     - About Section
     - Hero Section
    2. Contact Us Page
     - Contect Form
     - Footer`,
    start_time: "09:00 AM",
    end_time: "06:00 PM",
    spent_time: "9",
    billable: true,
    date: "2022-01-01",
  },
  {
    id: 2,
    user_name: "John Doe",
    task_name: "Short Task Name",
    task_description: `Today's Update:
1. Created Home Page Design
 - Banner section
 - About Section
 - Hero Section
2. Contact Us Page
 - Contect Form
 - Footer`,
    start_time: "09:00 AM",
    end_time: "06:00 PM",
    spent_time: "9",
    billable: false,
    date: "2022-01-01",
  },
  {
    id: 3,
    user_name: "Yash Kumar",
    task_name: "Short Task Name",
    task_description: `Today's Update:
1. Created Home Page Design
 - Banner section
 - About Section
 - Hero Section
2. Contact Us Page
 - Contect Form
 - Footer`,
    start_time: "09:00 AM",
    end_time: "06:00 PM",
    spent_time: "9",
    billable: true,
    date: "2022-01-01",
  },
  {
    id: 4,
    user_name: "Alex Roy",
    task_name: "short Task Name",
    task_description: `Today's Update:
1. Created Home Page Design
 - Banner section
 - About Section
 - Hero Section
2. Contact Us Page
 - Contect Form
 - Footer`,
    start_time: "09:00 AM",
    end_time: "06:00 PM",
    spent_time: "9",
    billable: false,
    date: "2022-01-01",
  },
];

export default function ProjectTimeLogs() {
  const [task] = useState(true);

  const {
    setDrawerChildren,
    setDrawerClassName,
    setDrawerOpen,
    setDrawerTitle,
    setSide,
  } = useDrawer((state) => state);
  const { setChildren, setClassName, setOpen, setTitle } = useModal();

  return task ? (
    <div className="flex flex-col gap-4">
      <div className="px-4 py-2 rounded-md bg-muted/50 flex justify-between items-center border">
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-1">
            <Timer className="h-4 w-4" />{" "}
            <Title className="text-xs">
              Logged: <span className="text-muted-foreground">155 hrs.</span>
            </Title>
          </div>
          <div className="flex items-center gap-1">
            <DollarSign className="h-4 w-4" />{" "}
            <Title className="text-xs">
              Billable: <span className="text-muted-foreground">110 hrs.</span>
            </Title>
          </div>
          <div className="flex items-center gap-1">
            <Ban className="h-4 w-4" />{" "}
            <Title className="text-xs">
              Non-Billable:{" "}
              <span className="text-muted-foreground">45 hrs.</span>
            </Title>
          </div>
        </div>
        <div className="flex gap-2 items-center">
          <Button
            variant="outline"
            className="gap-2 font-lexend"
            onClick={() => {
              setDrawerTitle("Filter");
              setDrawerChildren("Filter Here...F");
              setDrawerOpen(true);
              setSide("right");
              setDrawerClassName("");
            }}
          >
            <Filter className="h-4 w-4 text-muted-foreground" /> Filter
          </Button>

          <Button
            className="font-lexend gap-1 active:scale-95"
            onClick={() => {
              setTitle(
                <ModalTitle Icon={AlarmClockPlus} title="Log Your Time" />
              );
              setChildren(<AddTime />);
              setClassName("max-w-[1100px]");
              setOpen(true);
            }}
          >
            <AlarmClockPlus className="h-4 w-4 text-primary-foreground" /> Add
            Time
          </Button>
        </div>
      </div>
      <TimeListTable data={timlogData} />
      <TimeLogListing />
    </div>
  ) : (
    <NoItems
      icon={
        <CalendarCheck
          strokeWidth={1.5}
          className="w-16 h-16 text-muted-foreground"
        />
      }
      title="Time Logs not Found in this project"
    ></NoItems>
  );
}
