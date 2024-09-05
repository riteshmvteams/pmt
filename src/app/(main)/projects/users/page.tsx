import { House } from "lucide-react";

import { routes } from "@/config/routes";
import CheckInButton from "@/components/shared/CheckInButton";
import CustomBreadcrumb from "@/components/shared/CustomBreadcrumb";
import ProjectUsersTabs from "./_components/ProjectUsersTabs";
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
    title: "Projects",
    href: routes?.projects,
  },
  {
    id: 3,
    title: "Users",
  },
];

export default function ProjectUsers() {
  return (
    <main className="flex flex-1 flex-col gap-4 lg:gap-6 p-6">
      <div className="flex items-center justify-between">
        <CustomBreadcrumb paths={path} />
        <div className="flex items-center gap-2">
          <CheckInButton />
          <BackButton variant="outline" />
        </div>
      </div>
      <ProjectUsersTabs />
    </main>
  );
}
