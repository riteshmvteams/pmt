import React from "react";

import { formatDateWithWeekday } from "@/lib/helpers";
import Title from "../Title";

export default function TimeLogListing() {
  return (
    <div className="flex flex-col gap-10">
      {Array.from({ length: 10 })?.map((_, ind) => {
        return (
          <div key={ind} className="flex flex-col gap-3">
            <Title className="text-base tracking-tight">
              {formatDateWithWeekday(new Date())}
            </Title>

            <div className="grid grid-cols-12 gap-x-1">
              <div className="flex flex-col">
                <div className="bg-primary/20 p-4 font-lexend text-sm font-semibold tracking-wide">
                  User Name
                </div>
                <div className="bg-primary/5 p-4 font-lexend text-sm font-light">
                  Test User
                </div>
              </div>
              <div className="flex flex-col col-span-3">
                <div className="bg-primary/20 p-4 font-lexend text-sm font-semibold tracking-wide">
                  User Name
                </div>
                <div className="bg-primary/5 p-4 font-lexend text-sm font-light">
                  Test User
                </div>
              </div>
              <div className="flex flex-col col-span-3">
                <div className="bg-primary/20 p-4 font-lexend text-sm font-semibold tracking-wide">
                  User Name
                </div>
                <div className="bg-primary/5 p-4 font-lexend text-sm font-light">
                  Test User
                </div>
              </div>
              <div className="flex flex-col">
                <div className="bg-primary/20 p-4 font-lexend text-sm font-semibold tracking-wide">
                  User Name
                </div>
                <div className="bg-primary/5 p-4 font-lexend text-sm font-light">
                  Test User
                </div>
              </div>
              <div className="flex flex-col">
                <div className="bg-primary/20 p-4 font-lexend text-sm font-semibold tracking-wide">
                  User Name
                </div>
                <div className="bg-primary/5 p-4 font-lexend text-sm font-light">
                  Test User
                </div>
              </div>
              <div className="flex flex-col">
                <div className="bg-primary/20 p-4 font-lexend text-sm font-semibold tracking-wide">
                  User Name
                </div>
                <div className="bg-primary/5 p-4 font-lexend text-sm font-light">
                  Test User
                </div>
              </div>
              <div className="flex flex-col">
                <div className="bg-primary/20 p-4 font-lexend text-sm font-semibold tracking-wide">
                  User Name
                </div>
                <div className="bg-primary/5 p-4 font-lexend text-sm font-light">
                  Test User
                </div>
              </div>
              <div className="flex flex-col">
                <div className="bg-primary/20 p-4 font-lexend text-sm font-semibold tracking-wide">
                  User Name
                </div>
                <div className="bg-primary/5 p-4 font-lexend text-sm font-light">
                  Test User
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
