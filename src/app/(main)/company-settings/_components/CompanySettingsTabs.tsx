"use client";

import { FramerLayout } from "@/components/shared/tabs/framer-layout";
import { routes } from "@/config/routes";
import { useTabs } from "@/hooks/useTabs";
import { Building2, ImageUp } from "lucide-react";
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
        label: "Imports & Exports",
        icon: <ImageUp className="h-4 w-4 mr-1.5" />,
        id: "ImportsExports",
        href: routes?.companySettings?.importsExports,
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
