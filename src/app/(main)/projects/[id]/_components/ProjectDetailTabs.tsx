import { Suspense } from "react";

import { Tabs, TabsContent } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
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
  return (
    <Tabs defaultValue={tab ? tab : "tasks"} className="flex flex-col gap-4">
      <CustomTabTrigger tabs={tabList} className="grid-cols-7 max-w-[800px]">
        <Button>Add Project</Button>
        <ViewSetting />
      </CustomTabTrigger>
      <TabsContent value="overview">
        <Suspense fallback="Loading...">
          <ProjectOverview />
        </Suspense>
      </TabsContent>
      <TabsContent value="tasks">
        <Suspense fallback="Loading...">
          <ProjectTasks />
        </Suspense>
      </TabsContent>
      <TabsContent value="files">
        <Suspense fallback="Loading...">
          <ProjectFiles />
        </Suspense>
      </TabsContent>
      <TabsContent value="notes">
        <Suspense fallback="Loading...">
          <ProjectNotes />
        </Suspense>
      </TabsContent>
      <TabsContent value="milestones">
        <Suspense fallback="Loading...">
          <ProjectMilestones />
        </Suspense>
      </TabsContent>
      <TabsContent value="users">
        <Suspense fallback="Loading...">
          <UserTable data={Users_DATA?.slice(0, 6)} />
        </Suspense>
      </TabsContent>
      <TabsContent value="time">
        <Suspense fallback="Loading...">
          <ProjectTimeLogs />
        </Suspense>
      </TabsContent>
    </Tabs>
  );
};

export default ProjectDetailTabs;
