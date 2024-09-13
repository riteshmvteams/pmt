"use client";

import { Suspense, useState } from "react";
import {
  Activity,
  CircleCheckBig,
  File,
  Milestone,
  NotebookPen,
  TableOfContents,
  Timer,
  UserRoundCheck,
} from "lucide-react";

import { useTabs } from "@/hooks/useTabs";
import { Users_DATA } from "@/lib/constants";
import ViewSetting from "@/components/shared/ViewSetting";
import UserTable from "@/components/shared/userTable/table";
import { FramerLayout } from "@/components/shared/tabs/framer-layout";
import ProjectOverview from "./overview/ProjectOverview";
import ProjectTasks from "./tasks/ProjectTasks";
import ProjectFiles from "./files/ProjectFiles";
import ProjectNotes from "./notes/ProjectNotes";
import ProjectMilestones from "./milestones/ProjectMilestones";
import ProjectTimeLogs from "./time/ProjectTimeLogs";
import ProjectActivities from "./activities/ProjectActivities";

const ProjectDetailTabs = ({ tab }: { tab: string }) => {
  const [hookProps] = useState({
    tabs: [
      {
        label: "Overview",
        icon: <TableOfContents className="h-4 w-4 mr-1.5" />,
        children: <ProjectOverview />,
        id: "Overview",
      },
      {
        label: "Tasks",
        icon: <CircleCheckBig className="h-4 w-4 mr-1.5" />,
        children: <ProjectTasks />,
        id: "Tasks",
      },
      {
        label: "Files",
        icon: <File className="h-4 w-4 mr-1.5" />,
        children: <ProjectFiles />,
        id: "Files",
      },
      {
        label: "Notes",
        icon: <NotebookPen className="h-4 w-4 mr-1.5" />,
        children: <ProjectNotes />,
        id: "Notes",
      },
      {
        label: "Milestones",
        icon: <Milestone className="h-4 w-4 mr-1.5" />,
        children: <ProjectMilestones />,
        id: "Milestones",
      },
      {
        label: "Users",
        icon: <UserRoundCheck className="h-4 w-4 mr-1.5" />,
        children: (
          <Suspense fallback="Loading...">
            <UserTable data={Users_DATA?.slice(0, 6)} />
          </Suspense>
        ),
        id: "Users",
      },
      {
        label: "Time",
        icon: <Timer className="h-4 w-4 mr-1.5" />,
        children: (
          <Suspense fallback="Loading...">
            <ProjectTimeLogs />
          </Suspense>
        ),
        id: "Time",
      },
      {
        label: "Activity",
        icon: <Activity className="h-4 w-4 mr-1.5" />,
        children: (
          <Suspense fallback="Loading...">
            <ProjectActivities />
          </Suspense>
        ),
        id: "Activity",
      },
    ],
    initialTabId: "Tasks",
  });
  const framer = useTabs(hookProps);

  return (
    <div className="space-y-6">
      <div className="border-b flex justify-between">
        <FramerLayout.Tabs {...framer.tabProps} className="justify-start" />
        <ViewSetting />
      </div>
      <FramerLayout.Content {...framer.contentProps} className="">
        {framer.selectedTab.children}
      </FramerLayout.Content>
    </div>
  );
};

export default ProjectDetailTabs;
