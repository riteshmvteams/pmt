"use client";

import React from "react";

import { CircleCheckBig, CircleX, Eye, Pencil, Trash2 } from "lucide-react";
import { formatDateWithWeekday, trimText } from "@/lib/helpers";
import { useModal } from "@/store/useModal";
import Text from "../Text";
import Title from "../Title";
import ConfirmationModal from "../ConfirmationModal";

import { TTimeLog } from "@/app/(main)/projects/[id]/_components/time/ProjectTimeLogs";
import TimeLogDetail from "./TimeLogDetail";
import EditTimeLog from "./EditTimeLog";

export default function TimeLogListing({ data }: { data: TTimeLog[] }) {
  const { setChildren, setClassName, setOpen, setTitle } = useModal(
    (state) => state
  );

  return (
    <div className="flex flex-col gap-10 min-w-[1200px] overflow-y-auto">
      {Array.from({ length: 5 })?.map((_, index) => {
        return (
          <div key={index} className="flex flex-col gap-2">
            <Title className="font-medium tracking-tight font-sans text-base">
              {index === 0
                ? "Today"
                : index === 1
                ? "Yesterday"
                : formatDateWithWeekday(new Date())}
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
                      <button
                        className="text-muted-foreground hover:text-foreground"
                        onClick={() => {
                          setTitle("Complete Log Details");
                          setOpen(true);
                          setClassName("max-w-[1000px]");
                          setChildren(<TimeLogDetail />);
                        }}
                      >
                        <Eye className="w-4 h-4" />
                      </button>
                      <button
                        className="text-muted-foreground hover:text-foreground"
                        onClick={() => {
                          setTitle("Edit Log");
                          setOpen(true);
                          setClassName("max-w-[800px]");
                          setChildren(<EditTimeLog />);
                        }}
                      >
                        <Pencil className="w-4 h-4" />
                      </button>
                      <button
                        className="text-muted-foreground hover:text-foreground"
                        onClick={() => {
                          setTitle("Confirmation");
                          setOpen(true);
                          setClassName("max-w-[400px]");
                          setChildren(
                            <ConfirmationModal
                              name=""
                              title="Are you sure, you want to delete this log"
                            />
                          );
                        }}
                      >
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
