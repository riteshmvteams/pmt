import { Suspense } from "react";

import { Tabs, TabsContent } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import ViewSetting from "@/components/shared/ViewSetting";
import CustomTabTrigger from "@/components/shared/CustomTabTrigger";
import Table from "./table";
import ProjectFilters from "./ProjectFilters";
import ProjectSort from "./ProjectSort";

const tabList = [
  {
    id: 1,
    title: "Active",
    target: "active",
    count: 20,
  },
  {
    id: 2,
    title: "In Active",
    target: "inactive",
    count: 5,
  },
];

const ProjectTabs = () => {
  return (
    <Tabs defaultValue="active" className="">
      <CustomTabTrigger tabs={tabList}>
        <Button>Add Project</Button>
        <ProjectSort />
        <ProjectFilters />
        <ViewSetting />
      </CustomTabTrigger>
      <TabsContent value="active">
        <Suspense fallback="Loading...">
          <Table />
        </Suspense>
      </TabsContent>
      <TabsContent value="inactive">
        <Suspense fallback="Loading...">
          <Table />
        </Suspense>
      </TabsContent>
    </Tabs>
  );
};

export default ProjectTabs;
