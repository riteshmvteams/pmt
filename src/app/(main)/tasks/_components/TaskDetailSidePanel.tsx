"use client";

import { FramerLayout } from "@/components/shared/tabs/framer-layout";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { useTabs } from "@/hooks/useTabs";
import { cn } from "@/lib/utils";
import { useState } from "react";
import BasicDetails from "./detail/BasicDetails";
import TaskComments from "./detail/TaskComments";
import TaskOtherDetails from "./detail/TaskOtherDetails";
import { getStatusBadge } from "@/components/shared/status-badge";
import Text from "@/components/shared/Text";
import { formatDate, formatDateWithWeekday } from "@/lib/helpers";
import { Button } from "@/components/ui/button";
import { ChevronLeft } from "lucide-react";

export default function TaskDetailSidePanel({
  children,
}: {
  children: React.ReactNode;
}) {
  const [hookProps] = useState({
    tabs: [
      {
        label: "Basic",
        children: <BasicDetails />,
        id: "Basic",
      },
      {
        label: "Comments",
        children: <TaskComments />,
        id: "Comments",
      },
      {
        label: "Other",
        children: <TaskOtherDetails />,
        id: "Other",
      },
    ],
    initialTabId: "Basic",
  });
  const framer = useTabs(hookProps);

  console.log(framer, "framer==>");

  return (
    <Sheet>
      <SheetTrigger asChild>{children}</SheetTrigger>
      <SheetContent
        side="right"
        className={cn("sm:max-w-[1200px] overflow-y-auto scrollbar p-0")}
      >
        <SheetHeader className="px-6 pt-4 bg-muted border-b sticky top-0 z-20">
          <div className="flex gap-4 items-center">
            {/* <SheetClose asChild>
              <Button className="" variant="outline" size="icon">
                <ChevronLeft className="w-4 h-4" />
              </Button>
            </SheetClose> */}
            <div className="flex flex-col gap-0.5">
              <SheetTitle className="font-lexend text-xl lg:text-2xl flex items-center gap-4">
                #45: Fix the Dropdown issue {getStatusBadge("Open")}
              </SheetTitle>
              <Text className="text-[13px] text-muted-foreground">
                Last updated by{" "}
                <span className="font-medium text-foreground">Admin</span> on{" "}
                <span className="font-medium text-foreground">
                  {formatDateWithWeekday(new Date())}
                </span>
              </Text>
            </div>
          </div>
          <FramerLayout.Tabs {...framer.tabProps} className="justify-start" />
        </SheetHeader>
        <div className="px-6 py-4">
          <FramerLayout.Content {...framer.contentProps} className="">
            {framer.selectedTab.children}
          </FramerLayout.Content>
        </div>
      </SheetContent>
    </Sheet>
  );
}
