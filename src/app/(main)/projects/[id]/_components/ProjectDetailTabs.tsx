"use client";

import { Suspense, useState } from "react";

import { Tabs, TabsContent } from "@/components/ui/tabs";
import ViewSetting from "@/components/shared/ViewSetting";
import CustomTabTrigger from "@/components/shared/CustomTabTrigger";
import { Users_DATA } from "@/lib/constants";
import UserTable from "@/components/shared/userTable/table";
import ProjectOverview from "./overview/ProjectOverview";
import ProjectTasks from "./tasks/ProjectTasks";
import ProjectFiles from "./files/ProjectFiles";
import ProjectNotes from "./notes/ProjectNotes";
import ProjectMilestones from "./milestones/ProjectMilestones";
import ProjectTimeLogs from "./time/ProjectTimeLogs";
import BasicDetails from "@/app/(main)/tasks/_components/detail/BasicDetails";
import TaskComments from "@/app/(main)/tasks/_components/detail/TaskComments";
import TaskOtherDetails from "@/app/(main)/tasks/_components/detail/TaskOtherDetails";
import { useTabs } from "@/hooks/useTabs";
import { FramerLayout } from "@/components/shared/tabs/framer-layout";
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
import ProjectActivities from "./activities/ProjectActivities";

const tabList = [
  {
    id: 1,
    title: "Overview",
    target: "overview",
  },
  {
    id: 2,
    title: "Tasks",
    target: "tasks",
  },
  {
    id: 3,
    title: "Files",
    target: "files",
  },
  {
    id: 4,
    title: "Notes",
    target: "notes",
  },
  {
    id: 5,
    title: "Milestones",
    target: "milestones",
  },
  {
    id: 6,
    title: "Users",
    target: "users",
  },
  {
    id: 7,
    title: "Time",
    target: "time",
  },
];

const ProjectDetailTabs = ({ tab }: { tab: string }) => {
  const [hookProps] = useState({
    tabs: [
      {
        label: "Overview",
        icon: <TableOfContents className="h-[14px] w-[14px] mr-1.5" />,
        children: <ProjectOverview />,
        id: "Overview",
      },
      {
        label: "Tasks",
        icon: <CircleCheckBig className="h-[14px] w-[14px] mr-1.5" />,
        children: <ProjectTasks />,
        id: "Tasks",
      },
      {
        label: "Files",
        icon: <File className="h-[14px] w-[14px] mr-1.5" />,
        children: <ProjectFiles />,
        id: "Files",
      },
      {
        label: "Notes",
        icon: <NotebookPen className="h-[14px] w-[14px] mr-1.5" />,
        children: <ProjectNotes />,
        id: "Notes",
      },
      {
        label: "Milestones",
        icon: <Milestone className="h-[14px] w-[14px] mr-1.5" />,
        children: <ProjectMilestones />,
        id: "Milestones",
      },
      {
        label: "Users",
        icon: <UserRoundCheck className="h-[14px] w-[14px] mr-1.5" />,
        children: (
          <Suspense fallback="Loading...">
            <UserTable data={Users_DATA?.slice(0, 6)} />
          </Suspense>
        ),
        id: "Users",
      },
      {
        label: "Time",
        icon: <Timer className="h-[14px] w-[14px] mr-1.5" />,
        children: (
          <Suspense fallback="Loading...">
            <ProjectTimeLogs />
          </Suspense>
        ),
        id: "Time",
      },
      {
        label: "Activity",
        icon: <Activity className="h-[14px] w-[14px] mr-1.5" />,
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
    // <Tabs defaultValue={tab ? tab : "tasks"} className="flex flex-col gap-4">
    //   <CustomTabTrigger tabs={tabList} className="grid-cols-7 max-w-[800px]">
    //     <ViewSetting />
    //   </CustomTabTrigger>
    //   <TabsContent value="overview">
    //     <Suspense fallback="Loading...">
    //       <ProjectOverview />
    //     </Suspense>
    //   </TabsContent>
    //   <TabsContent value="tasks">
    //     <Suspense fallback="Loading...">
    //       <ProjectTasks />
    //     </Suspense>
    //   </TabsContent>
    //   <TabsContent value="files">
    //     <Suspense fallback="Loading...">
    //       <ProjectFiles />
    //     </Suspense>
    //   </TabsContent>
    //   <TabsContent value="notes">
    //     <Suspense fallback="Loading...">
    //       <ProjectNotes />
    //     </Suspense>
    //   </TabsContent>
    //   <TabsContent value="milestones">
    //     <Suspense fallback="Loading...">
    //       <ProjectMilestones />
    //     </Suspense>
    //   </TabsContent>
    //   <TabsContent value="users">
    //     <Suspense fallback="Loading...">
    //       <UserTable data={Users_DATA?.slice(0, 6)} />
    //     </Suspense>
    //   </TabsContent>
    //   <TabsContent value="time">
    //     <Suspense fallback="Loading...">
    //       <ProjectTimeLogs />
    //     </Suspense>
    //   </TabsContent>
    // </Tabs>
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
