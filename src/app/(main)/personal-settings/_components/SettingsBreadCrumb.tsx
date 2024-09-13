"use client";

import CustomBreadcrumb from "@/components/shared/CustomBreadcrumb";
import { capitalizeText } from "@/lib/helpers";
import { House } from "lucide-react";
import { usePathname } from "next/navigation";

let path = [
  {
    id: 1,
    title: "Dashboard",
    href: "/dashboard",
    icon: <House className="w-4 h-4" />,
  },
  {
    id: 2,
    title: "Personal Settings",
    href: "/personal-settings",
  },
  {
    id: 3,
    title: "Profile",
  },
];

export default function SettingsBreadCrumb() {
  const pathname = usePathname();
  const splittedPath = pathname?.split("/");
  const pathSegment = splittedPath?.at(-1);

  if (pathSegment !== "personal-settings") {
    path[2].title = pathSegment ? capitalizeText(pathSegment) : "";
  }

  return <CustomBreadcrumb paths={path} />;
}
