import CheckInButton from "@/components/shared/CheckInButton";
import ProjectTabs from "./_components/ProjectTabs";
import CustomBreadcrumb from "@/components/shared/CustomBreadcrumb";
import { House } from "lucide-react";

const path = [
  {
    id: 1,
    title: "Dashboard",
    href: "/dashboard",
    icon: <House className="w-4 h-4" />,
  },
  {
    id: 2,
    title: "Projects",
  },
];

export default function Projects() {
  return (
    <main className="flex flex-1 flex-col gap-4 lg:gap-6 p-6">
      <div className="flex items-center justify-between">
        <CustomBreadcrumb paths={path} />
        <CheckInButton />
      </div>
      <ProjectTabs />
    </main>
  );
}
