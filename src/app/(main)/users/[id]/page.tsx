import BackButton from "@/components/shared/BackButton";
import CustomBreadcrumb from "@/components/shared/CustomBreadcrumb";
import { routes } from "@/config/routes";
import { House } from "lucide-react";
import UserDetailTabs from "./_components/UserDetailTabs";

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
    <>
      <div className="flex items-center justify-between">
        <CustomBreadcrumb paths={path} />
        <div className="flex gap-2 items-center">
          <BackButton />
        </div>
      </div>
      <UserDetailTabs />
    </>
  );
}
