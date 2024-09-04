import { Suspense } from "react";

import { Tabs, TabsContent } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import ViewSetting from "@/components/shared/ViewSetting";
import CustomTabTrigger from "@/components/shared/CustomTabTrigger";
import { Users_DATA } from "@/lib/constants";
import UserTable from "@/components/shared/userTable/table";

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
    <Tabs defaultValue={tab ? tab : "tasks"} className="">
      <CustomTabTrigger tabs={tabList} className="grid-cols-7 max-w-[800px]">
        <Button>Add Project</Button>
        <ViewSetting />
      </CustomTabTrigger>
      <TabsContent value="overview">
        <Suspense fallback="Loading...">
          <h2>Overview</h2>
        </Suspense>
      </TabsContent>
      <TabsContent value="tasks">
        <Suspense fallback="Loading...">
          <h2>Tasks</h2>
        </Suspense>
      </TabsContent>
      <TabsContent value="files">
        <Suspense fallback="Loading...">
          <h2>Files</h2>
        </Suspense>
      </TabsContent>
      <TabsContent value="notes">
        <Suspense fallback="Loading...">
          <h2>Notes</h2>
        </Suspense>
      </TabsContent>
      <TabsContent value="milestones">
        <Suspense fallback="Loading...">
          <h2>milestones</h2>
        </Suspense>
      </TabsContent>
      <TabsContent value="users">
        <Suspense fallback="Loading...">
          <UserTable data={Users_DATA?.slice(0, 6)} />
        </Suspense>
      </TabsContent>
      <TabsContent value="time">
        <Suspense fallback="Loading...">
          <h2>Time</h2>
        </Suspense>
      </TabsContent>
    </Tabs>
  );
};

export default ProjectDetailTabs;
