import { timlogData } from "@/app/(main)/projects/[id]/_components/time/ProjectTimeLogs";
import TimeLogListing from "@/components/shared/timelog/TimeLogListing";
import TimeLogStats from "@/components/shared/timelog/TimeLogStats";
import React from "react";

export default function UserTimeLogs() {
  return (
    <div className="flex flex-col gap-4">
      <TimeLogStats />
      <TimeLogListing data={timlogData} />
    </div>
  );
}
