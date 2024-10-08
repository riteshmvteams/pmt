import { House } from "lucide-react";

import CheckInButton from "@/components/shared/CheckInButton";
import CustomBreadcrumb from "@/components/shared/CustomBreadcrumb";
import MilestoneTabs from "./_components/MilestoneTabs";

const path = [
  {
    id: 1,
    title: "Dashboard",
    href: "/dashboard",
    icon: <House className="w-4 h-4" />,
  },
  {
    id: 2,
    title: "Milestones",
  },
];

export default function Milestones() {
  return (
    <>
      <div className="flex items-center justify-between">
        <CustomBreadcrumb paths={path} />
        <CheckInButton />
      </div>
      <MilestoneTabs />
    </>
  );
}
