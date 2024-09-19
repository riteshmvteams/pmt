"use client";

import { FramerLayout } from "@/components/shared/tabs/framer-layout";
import { routes } from "@/config/routes";
import { useTabs } from "@/hooks/useTabs";
import { BookCheck, Building2, ImageUp, MailPlus } from "lucide-react";
import { useState } from "react";

export default function CompanySettingsTabs() {
  const [hookProps] = useState({
    tabs: [
      {
        label: "My Company",
        icon: <Building2 className="h-4 w-4 mr-1.5" />,
        id: "Company",
        href: routes?.companySettings?.myCompany,
      },
      {
        label: "Daily Catch-Up",
        icon: <MailPlus className="h-4 w-4 mr-1.5" />,
        id: "Catch-Up",
        href: routes?.companySettings?.catchUp,
      },
      {
        label: "Imports & Exports",
        icon: <ImageUp className="h-4 w-4 mr-1.5" />,
        id: "ImportsExports",
        href: routes?.companySettings?.importsExports,
      },
      {
        label: "Task Type",
        icon: <BookCheck className="h-4 w-4 mr-1.5" />,
        id: "Task-Type",
        href: routes?.companySettings?.taskType,
      },
      {
        label: "Take Backup",
        icon: <BookCheck className="h-4 w-4 mr-1.5" />,
        id: "Take-Backup",
        href: routes?.companySettings?.takeBackup,
      },
    ],
    initialTabId: "Company",
  });
  const framer = useTabs(hookProps);

  return (
    <div className="flex-1 border-b">
      <FramerLayout.Tabs {...framer.tabProps} className="justify-start" />
    </div>
  );
}
