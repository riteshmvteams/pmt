"use client";

import { FramerLayout } from "@/components/shared/tabs/framer-layout";
import { routes } from "@/config/routes";
import { useTabs } from "@/hooks/useTabs";
import {
  BellRing,
  Drum,
  LockKeyhole,
  MailPlus,
  Timer,
  UserPen,
} from "lucide-react";
import { useState } from "react";

export default function PersonalSettingsTabs() {
  const [hookProps] = useState({
    tabs: [
      {
        label: "Profile",
        icon: <UserPen className="h-4 w-4 mr-1.5" />,
        id: "Profile",
        href: routes?.personalSettings?.profile,
      },
      {
        label: "Change Password",
        icon: <LockKeyhole className="h-4 w-4 mr-1.5" />,
        id: "Password",
        href: routes?.personalSettings?.changePassword,
      },
      {
        label: "Time Logs",
        icon: <Timer className="h-4 w-4 mr-1.5" />,
        id: "Logs",
        href: routes?.personalSettings?.timelogs,
      },
      {
        label: "Notifications",
        icon: <BellRing className="h-4 w-4 mr-1.5" />,
        id: "Notifications",
        href: routes?.personalSettings?.notifications,
      },
      {
        label: "Email Reports",
        icon: <MailPlus className="h-4 w-4 mr-1.5" />,
        id: "Email",
        href: routes?.personalSettings?.emailReports,
      },
      {
        label: "Announcements",
        icon: <Drum className="h-4 w-4 mr-1.5" />,
        id: "Announcements",
        href: routes?.personalSettings?.announcements,
      },
    ],
    initialTabId: "Profile",
  });
  const framer = useTabs(hookProps);

  return (
    <div className="flex-1 border-b">
      <FramerLayout.Tabs {...framer.tabProps} className="justify-start" />
    </div>
  );
}
