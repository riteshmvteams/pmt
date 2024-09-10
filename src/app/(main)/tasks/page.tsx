import { House } from "lucide-react";
import TaskTabs from "./_components/TaskTabs";
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
    title: "Tasks",
  },
];

export default function Tasks() {
  return (
    <>
      <div className="flex items-center">
        <CustomBreadcrumb paths={path} />
      </div>
      <TaskTabs />
    </>
  );
}
