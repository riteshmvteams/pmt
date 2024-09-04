import CheckInButton from "@/components/shared/CheckInButton";
import CustomBreadcrumb from "@/components/shared/CustomBreadcrumb";
import { routes } from "@/config/routes";
import { PROJECTS_DATA } from "@/lib/constants";
import { House } from "lucide-react";
import ProjectDetailTabs from "./_components/ProjectDetailTabs";

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
    <main className="flex flex-1 flex-col gap-4 p-4 lg:gap-6 lg:p-6">
      <div className="flex items-center justify-between">
        <CustomBreadcrumb paths={path} />
        <CheckInButton />
      </div>
      <ProjectDetailTabs tab={searchParams?.tab} />
      {/* <div
        className="flex flex-1 items-center justify-center rounded-lg border border-dashed shadow-sm"
        x-chunk="dashboard-02-chunk-1"
      >
        <div className="flex flex-col items-center gap-1 text-center"></div>
      </div> */}
    </main>
  );
}
