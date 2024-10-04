import CheckInButton from "@/components/shared/CheckInButton";
import CustomBreadcrumb from "@/components/shared/CustomBreadcrumb";
import { routes } from "@/config/routes";
import { PROJECTS_DATA } from "@/lib/constants";
import { FolderOpenDot, House } from "lucide-react";
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
      title: "Projects",
      href: routes.projects,
      icon: <FolderOpenDot className="w-4 h-4" />,
    },
    {
      id: 2,
      title: data?.length ? data[0]?.title : params.id,
    },
  ];

  return (
    <>
      <div className="flex items-center justify-between">
        <div className="flex flex-col gap-2">
          <h1 className="text-lg font-semibold md:text-2xl">Projects</h1>
          <CustomBreadcrumb paths={path} />
        </div>
        <div className="flex gap-2 items-center">
          <CheckInButton variant="outline" />
        </div>
      </div>
      <ProjectDetailTabs tab={searchParams?.tab} />
    </>
  );
}
