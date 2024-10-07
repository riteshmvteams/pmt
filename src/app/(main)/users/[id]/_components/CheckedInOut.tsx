"use client";

import Text from "@/components/shared/Text";
import Title from "@/components/shared/Title";
import { formatDateWithWeekday } from "@/lib/helpers";
import { useModal } from "@/store/useModal";
import { Pencil } from "lucide-react";
import React from "react";
import EditCheckedInOutTime from "./EditCheckedInOutTime";

export default function CheckedInOut() {
  const { setChildren, setClassName, setOpen, setTitle } = useModal();

  return (
    <div>
      <ul className="border rounded-md">
        <li className="grid grid-cols-5">
          <Title className="bg-muted p-2.5 font-normal text-sm border-r">
            Date
          </Title>
          <Title className="bg-muted p-2.5 font-normal text-sm border-r">
            Checked In
          </Title>
          <Title className="bg-muted p-2.5 font-normal text-sm border-r">
            Checked Out
          </Title>
          <Title className="bg-muted p-2.5 font-normal text-sm border-r">
            Total Hours
          </Title>
          <Title className="bg-muted p-2.5 font-normal text-sm border-r">
            Action
          </Title>
        </li>
        {Array.from({ length: 5 })?.map((_, ind) => {
          return (
            <li
              key={ind}
              className="grid grid-cols-5 border-b last:border-0 items-center"
            >
              <Text className="text-[13px] px-4 py-2 border-r">
                {formatDateWithWeekday(new Date(), false)}
              </Text>
              <Text className="text-[13px] px-4 py-2 border-r">09:12 AM</Text>
              <Text className="text-[13px] px-4 py-2 border-r">06:15 PM</Text>
              <Text className="text-[13px] px-4 py-2 border-r">
                09 hrs 03 minutes
              </Text>
              <div className="px-4 py-2 border-r">
                <button
                  className="text-muted-foreground hover:text-foreground px-2"
                  onClick={() => {
                    setOpen(true);
                    setTitle("Time Log");
                    setClassName("max-w-[800px]");
                    setChildren(<EditCheckedInOutTime />);
                  }}
                >
                  <Pencil className="w-4 h-4" />
                </button>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
