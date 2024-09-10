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
    <>
      <div className="flex items-center justify-between">
        <CustomBreadcrumb paths={path} />
        <CheckInButton />
      </div>
      <ProjectTabs />
    </>
  );
}
