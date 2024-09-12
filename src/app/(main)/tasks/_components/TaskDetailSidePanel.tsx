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
import { ChevronLeft, EllipsisVertical, X } from "lucide-react";
import { taskActions } from "./columns";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

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

  return (
    <Sheet>
      <SheetTrigger asChild>{children}</SheetTrigger>
      <SheetContent
        side="right"
        className={cn("sm:max-w-[1200px] overflow-y-auto scrollbar p-0")}
      >
        <SheetHeader className="px-6 pt-4 bg-muted border-b sticky top-0 z-20">
          <div className="flex gap-4 items-start justify-between">
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

            <div className="flex items-center gap-1">
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button
                    variant="outline"
                    size="icon"
                    className="text-muted-foreground"
                  >
                    <span className="sr-only">Open menu</span>
                    <EllipsisVertical className="h-4 w-4" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="start" side="left" className="w-56">
                  {taskActions?.map((action, index) => {
                    return action.icon ? (
                      <DropdownMenuItem
                        key={index}
                        className="py-1.5 cursor-pointer"
                      >
                        <action.icon className="mr-3 h-[14px] w-[14px]" />
                        <span className="text-[13px]">{action.title}</span>
                      </DropdownMenuItem>
                    ) : (
                      <DropdownMenuSeparator
                        className="my-1 bg-primary/20"
                        key={index}
                      />
                    );
                  })}
                </DropdownMenuContent>
              </DropdownMenu>
              <SheetClose asChild>
                <Button
                  size="icon"
                  variant="outline"
                  className="text-muted-foreground"
                >
                  <X className="w-4 h-4" />
                </Button>
              </SheetClose>
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
