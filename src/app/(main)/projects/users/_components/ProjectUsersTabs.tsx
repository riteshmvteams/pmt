import { Suspense } from "react";

import { Tabs, TabsContent } from "@/components/ui/tabs";
import ViewSetting from "@/components/shared/ViewSetting";
import CustomTabTrigger from "@/components/shared/CustomTabTrigger";
import { Users_DATA } from "@/lib/constants";
import UserTable from "@/components/shared/userTable/table";

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
          <UserTable data={Users_DATA?.slice(0, 6)} />
        </Suspense>
      </TabsContent>
    </Tabs>
  );
};

export default ProjectUsersTabs;
