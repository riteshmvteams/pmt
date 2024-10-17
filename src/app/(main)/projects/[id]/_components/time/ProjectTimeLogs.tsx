"use client";

import React, { useState } from "react";
import { CalendarCheck } from "lucide-react";

import NoItems from "@/components/shared/NoItems";
import TimeLogListing from "@/components/shared/timelog/TimeLogListing";
import TimeLogStats from "@/components/shared/timelog/TimeLogStats";

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

  return task ? (
    <div className="flex flex-col gap-4">
      <TimeLogStats />
      <TimeLogListing data={timlogData} />
      {/* <TimeListTable data={timlogData} /> */}
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
