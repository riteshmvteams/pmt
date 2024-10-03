import React from "react";

import { CircleCheckBig, CircleX, Eye, Pencil, Trash2 } from "lucide-react";
import { formatDateWithWeekday, trimText } from "@/lib/helpers";
import Title from "../Title";
import { TTimeLog } from "@/app/(main)/projects/[id]/_components/time/ProjectTimeLogs";
import Text from "../Text";

export default function TimeLogListing({ data }: { data: TTimeLog[] }) {
  return (
    <div className="flex flex-col gap-10 min-w-[1200px] overflow-y-auto">
      {Array.from({ length: 3 })?.map((_, index) => {
        return (
          <div key={index} className="flex flex-col gap-2">
            <Title className="font-normal text-sm tracking-tight">
              {formatDateWithWeekday(new Date())}
            </Title>
            <ul className="border rounded-md">
              <li className="grid grid-cols-12">
                <Title className="bg-muted p-2.5 font-normal text-sm border-r">
                  User Name
                </Title>
                <Title className="bg-muted p-2.5 font-normal text-sm border-r col-span-3">
                  Task Description
                </Title>
                <Title className="bg-muted p-2.5 font-normal text-sm border-r col-span-3">
                  Task Name
                </Title>
                <Title className="bg-muted p-2.5 font-normal text-sm border-r">
                  Start Time
                </Title>
                <Title className="bg-muted p-2.5 font-normal text-sm border-r">
                  End Time
                </Title>
                <Title className="bg-muted p-2.5 font-normal text-sm border-r">
                  Spend Time
                </Title>
                <Title className="bg-muted p-2.5 font-normal text-sm border-r">
                  Billable
                </Title>
                <div className="p-2.5 bg-muted"></div>
              </li>
              {data?.map((logData, ind) => {
                return (
                  <li
                    key={ind}
                    className="grid grid-cols-12 border-b last:border-0 items-center"
                  >
                    <Text className="text-xs p-4 border-r">
                      {logData?.user_name}
                    </Text>
                    <Text className="text-xs p-4 border-r col-span-3">
                      {trimText(logData?.task_description, 60)}
                    </Text>
                    <Text className="text-xs p-4 border-r col-span-3">
                      {trimText(logData?.task_name, 60)}
                    </Text>
                    <Text className="text-xs p-4 border-r">
                      {logData?.start_time}
                    </Text>
                    <Text className="text-xs p-4 border-r">
                      {logData?.end_time}
                    </Text>
                    <Text className="text-xs p-4 border-r">
                      {logData?.spent_time}
                    </Text>
                    <Text className="text-xs p-4 border-r">
                      {logData?.billable ? (
                        <CircleCheckBig className="w-5 h-5 text-green-600" />
                      ) : (
                        <CircleX className="w-5 h-5 text-destructive" />
                      )}
                    </Text>
                    <div className="p-4 flex gap-4 items-center">
                      <button className="text-muted-foreground hover:text-foreground">
                        <Eye className="w-4 h-4" />
                      </button>
                      <button className="text-muted-foreground hover:text-foreground">
                        <Pencil className="w-4 h-4" />
                      </button>
                      <button className="text-muted-foreground hover:text-foreground">
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                  </li>
                );
              })}
            </ul>
          </div>
        );
      })}
    </div>
  );
}
