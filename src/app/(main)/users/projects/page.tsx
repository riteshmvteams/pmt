import { House } from "lucide-react";

import CheckInButton from "@/components/shared/CheckInButton";
import CustomBreadcrumb from "@/components/shared/CustomBreadcrumb";
import { routes } from "@/config/routes";
import UsersProjectTabs from "./_components/UsersProjectTabs";
import BackButton from "@/components/shared/BackButton";

const path = [
  {
    id: 1,
    title: "Dashboard",
    href: routes?.dashboard,
    icon: <House className="w-4 h-4" />,
  },
  {
    id: 2,
    title: "Users",
    href: routes?.users,
  },
  {
    id: 3,
    title: "Projects",
  },
];

export default function Projects() {
  return (
    <>
      <div className="flex items-center justify-between">
        <CustomBreadcrumb paths={path} />
        <div className="flex items-center gap-2">
          <BackButton />
          <CheckInButton />
        </div>
      </div>
      <UsersProjectTabs />
    </>
  );
}
