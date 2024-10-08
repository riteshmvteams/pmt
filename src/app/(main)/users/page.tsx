import { House } from "lucide-react";

import UserTabs from "./_components/UserTabs";
import CustomBreadcrumb from "@/components/shared/CustomBreadcrumb";

const path = [
  {
    id: 1,
    title: "Dashboard",
    href: "/dashboard",
    icon: <House className="w-4 h-4" />,
  },
  {
    id: 2,
    title: "Users",
  },
];

export default function Users() {
  return (
    <>
      <div className="flex items-center">
        <CustomBreadcrumb paths={path} />
      </div>
      <UserTabs />
    </>
  );
}
