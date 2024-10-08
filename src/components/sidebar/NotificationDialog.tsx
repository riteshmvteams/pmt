"use client";

import React, { useState } from "react";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import Title from "../shared/Title";
import Text from "../shared/Text";
import {
  AlarmClockCheck,
  BellOff,
  BellRing,
  BriefcaseBusiness,
  LayoutList,
  Megaphone,
  MegaphoneOff,
  PackageCheck,
} from "lucide-react";
import { formatDateWithWeekday, trimText } from "@/lib/helpers";
import { Switch } from "../ui/switch";

const notifications = [
  {
    id: 1,
    icon: AlarmClockCheck,
    title: "Resolve the Drop down issue",
    href: "/",
  },
  {
    id: 2,
    icon: PackageCheck,
    title: "Join in the Cafeteria for the React session",
    href: "/",
  },
  {
    id: 3,
    icon: LayoutList,
    title: "You have been assigned a New project",
    href: "/",
  },
];

export default function NotificationDialog({
  children,
  align = "start",
}: {
  children: React.ReactNode;
  align?: "start" | "center" | "end";
}) {
  const [isAnnouncement, setIsAnnouncement] = useState(false);
  const [isNotification, setIsNotification] = useState(true);

  return (
    <Popover>
      <PopoverTrigger asChild>{children}</PopoverTrigger>
      <PopoverContent className="w-96 p-0" align={align}>
        <div className="flex flex-col max-h-[400px] overflow-y-auto scrollbar">
          <div className="border-t p-4 flex flex-col gap-2">
            <div className="flex justify-between items-center">
              <Title className="text-foreground/80 tracking-wide font-normal flex items-center gap-1.5">
                <BellRing className="w-4 h-4" /> Notifications:
              </Title>
              <Switch
                className="scale-75"
                id="airplane-mode"
                checked={isNotification}
                onCheckedChange={setIsNotification}
              />
            </div>
            {isNotification ? (
              <ul className="flex flex-col">
                {notifications?.map((notify, ind) => {
                  return (
                    <li
                      key={ind}
                      className="p-2 hover:bg-muted cursor-pointer flex items-center gap-2.5 rounded-lg"
                    >
                      <span className="w-10 h-10 rounded-md bg-muted flex items-center justify-center">
                        {
                          <notify.icon className="w-5 h-5 text-muted-foreground" />
                        }
                      </span>
                      <div className="flex flex-col">
                        <Title className="font-normal">
                          {trimText(
                            notify?.title ||
                              "You have been assigned a New project",
                            30
                          )}
                        </Title>
                        <span className="text-[10px] text-muted-foreground">
                          {formatDateWithWeekday(new Date(), false)}
                        </span>
                      </div>
                    </li>
                  );
                })}
              </ul>
            ) : (
              <div className="border border-dashed p-2 rounded-lg min-h-20 flex items-center justify-center">
                <Text className="text-muted-foreground flex items-center gap-2">
                  <BellOff className="w-5 h-5" /> No new Notifications
                </Text>
              </div>
            )}
          </div>
          <div className="p-4 flex flex-col gap-2">
            <div className="flex justify-between items-center">
              <Title className="text-foreground/80 tracking-wide font-normal flex items-center gap-1.5">
                <Megaphone className="w-4 h-4" /> Announcements:
              </Title>
              <Switch
                className="scale-75"
                id="airplane-mode"
                checked={isAnnouncement}
                onCheckedChange={setIsAnnouncement}
              />
            </div>
            {isAnnouncement ? (
              <ul className="flex flex-col">
                {Array.from({ length: 5 })?.map((_, ind) => {
                  return (
                    <li
                      key={ind}
                      className="p-2 hover:bg-muted cursor-pointer flex items-center gap-2.5 rounded-lg"
                    >
                      <span className="w-10 h-10 rounded-md bg-muted flex items-center justify-center">
                        <BriefcaseBusiness className="w-5 h-5 text-muted-foreground" />
                      </span>
                      <div className="flex flex-col">
                        <Title className="font-normal">
                          {trimText(
                            "Reminder: Daily Time Updates Required in PMT System",
                            30
                          )}
                        </Title>
                        <span className="text-[10px] text-muted-foreground">
                          {formatDateWithWeekday(new Date(), false)}
                        </span>
                      </div>
                    </li>
                  );
                })}
              </ul>
            ) : (
              <div className="border border-dashed p-2 rounded-lg min-h-20 flex items-center justify-center">
                <Text className="text-muted-foreground flex items-center gap-2">
                  <MegaphoneOff className="w-5 h-5" /> No new Announcements
                </Text>
              </div>
            )}
          </div>
        </div>
      </PopoverContent>
    </Popover>
  );
}
