"use client";

import { useState } from "react";
import {
  BellRing,
  CalendarCheck2,
  ClipboardList,
  Clock,
  FolderOpenDot,
  SquareUser,
} from "lucide-react";

import { useTabs } from "@/hooks/useTabs";
import ViewSetting from "@/components/shared/ViewSetting";
import { FramerLayout } from "@/components/shared/tabs/framer-layout";
import UserProfile from "./UserProfile";
import UserNotifications from "./UserNotifications";
import CheckedInOut from "./CheckedInOut";
import UserTimeLogs from "./UserTimeLogs";
import UserProjects from "./UserProjects";
import UserTasks from "./UserTasks";

const UserDetailTabs = () => {
  const [hookProps] = useState({
    tabs: [
      {
        label: "Profile",
        icon: <SquareUser className="h-4 w-4 mr-1.5" />,
        children: <UserProfile />,
        id: "Profile",
      },
      {
        label: "Projects",
        icon: <FolderOpenDot className="h-4 w-4 mr-1.5" />,
        children: <UserProjects />,
        id: "Projects",
      },
      {
        label: "Tasks",
        icon: <ClipboardList className="h-4 w-4 mr-1.5" />,
        children: <UserTasks />,
        id: "Tasks",
      },
      {
        label: "Time",
        icon: <Clock className="h-4 w-4 mr-1.5" />,
        children: <UserTimeLogs />,
        id: "Time",
      },
      {
        label: "Checked In / Out",
        icon: <CalendarCheck2 className="h-4 w-4 mr-1.5" />,
        children: <CheckedInOut />,
        id: "CheckInOut",
      },
      {
        label: "Notifications",
        icon: <BellRing className="h-4 w-4 mr-1.5" />,
        children: <UserNotifications />,
        id: "Notifications",
      },
    ],
    initialTabId: "Projects",
  });
  const framer = useTabs(hookProps);

  return (
    <div className="space-y-3">
      <div className="border-b flex justify-between items-center">
        <FramerLayout.Tabs {...framer.tabProps} className="justify-start" />
        <ViewSetting />
      </div>

      <FramerLayout.Content {...framer.contentProps}>
        {framer.selectedTab.children}
      </FramerLayout.Content>
    </div>
  );
};

export default UserDetailTabs;
