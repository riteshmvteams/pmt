import CheckInButton from "@/components/shared/CheckInButton";
import CustomBreadcrumb from "@/components/shared/CustomBreadcrumb";
import { routes } from "@/config/routes";
import { PROJECTS_DATA } from "@/lib/constants";
import { House } from "lucide-react";
import ProjectDetailTabs from "./_components/ProjectDetailTabs";
import BackButton from "@/components/shared/BackButton";

export default function ProjectDetail({
  params,
  searchParams,
}: {
  params: { id: string };
  searchParams: { tab: string };
}) {
  const data = PROJECTS_DATA.filter(
    (project) => project.id === Number(params.id)
  );

  const path = [
    {
      id: 1,
      title: "Dashboard",
      href: routes.dashboard,
      icon: <House className="w-4 h-4" />,
    },
    {
      id: 2,
      title: "Projects",
      href: routes.projects,
    },
    {
      id: 3,
      title: data?.length ? data[0]?.title : params.id,
    },
  ];

  return (
    <>
      <div className="flex items-center justify-between">
        <CustomBreadcrumb paths={path} />
        <div className="flex gap-2 items-center">
          <BackButton />
          <CheckInButton />
        </div>
      </div>
      <ProjectDetailTabs tab={searchParams?.tab} />
    </>
  );
}
