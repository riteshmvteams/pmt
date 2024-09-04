import { Suspense } from "react";

import { Tabs, TabsContent } from "@/components/ui/tabs";
import ViewSetting from "@/components/shared/ViewSetting";
import CustomTabTrigger from "@/components/shared/CustomTabTrigger";
import UsersProjectsTable from "./table";

const tabList = [
  {
    id: 1,
    title: "Projects",
    target: "project",
  },
];

const UsersProjectTabs = () => {
  return (
    <Tabs defaultValue="project" className="">
      <CustomTabTrigger tabs={tabList} className="grid-cols-1 max-w-[200px]">
        <ViewSetting />
      </CustomTabTrigger>
      <TabsContent value="project">
        <Suspense fallback="Loading...">
          <UsersProjectsTable />
        </Suspense>
      </TabsContent>
    </Tabs>
  );
};

export default UsersProjectTabs;
