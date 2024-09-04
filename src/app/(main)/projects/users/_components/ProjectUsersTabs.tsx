import { Suspense } from "react";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Table from "./table";
import { Button } from "@/components/ui/button";
import ViewSetting from "@/components/shared/ViewSetting";
import CustomTabTrigger from "@/components/shared/CustomTabTrigger";
import ProjectUserTable from "./table";
import { Users_DATA } from "@/lib/constants";

const tabList = [
  {
    id: 1,
    title: "Users",
    target: "users",
    count: 20,
  },
];

const ProjectUsersTabs = () => {
  return (
    <Tabs defaultValue="users">
      <CustomTabTrigger tabs={tabList} className="max-w-[200px] grid-cols-1">
        <ViewSetting />
      </CustomTabTrigger>
      <TabsContent value="users">
        <Suspense fallback="Loading...">
          <ProjectUserTable data={Users_DATA?.slice(0, 6)} />
        </Suspense>
      </TabsContent>
    </Tabs>
  );
};

export default ProjectUsersTabs;
