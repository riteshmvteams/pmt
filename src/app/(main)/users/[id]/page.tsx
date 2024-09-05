import BackButton from "@/components/shared/BackButton";
import CustomBreadcrumb from "@/components/shared/CustomBreadcrumb";
import { routes } from "@/config/routes";
import { House } from "lucide-react";

export default function UserDetail({ params }: { params: { id: string } }) {
  const path = [
    {
      id: 1,
      title: "Dashboard",
      href: routes.dashboard,
      icon: <House className="w-4 h-4" />,
    },
    {
      id: 2,
      title: "Users",
      href: routes.users,
    },
    {
      id: 3,
      title: params?.id,
    },
  ];
  return (
    <main className="flex flex-1 flex-col gap-4 p-4 lg:gap-6 lg:p-6">
      <div className="flex items-center justify-between">
        <CustomBreadcrumb paths={path} />
        <div className="flex gap-2 items-center">
          <BackButton />
        </div>
      </div>
      <div
        className="flex flex-1 items-center justify-center rounded-lg border border-dashed shadow-sm"
        x-chunk="dashboard-02-chunk-1"
      >
        <div className="flex flex-col items-center gap-1 text-center"></div>
      </div>
    </main>
  );
}
