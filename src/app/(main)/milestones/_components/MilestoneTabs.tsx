import { Suspense } from "react";

import { Tabs, TabsContent } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import ViewSetting from "@/components/shared/ViewSetting";
import CustomTabTrigger from "@/components/shared/CustomTabTrigger";
import MilestoneFilter from "./MilestoneFilter";
import MileStoneTable from "./table";

const tabList = [
  {
    id: 1,
    title: "Overview",
    target: "overview",
  },
  {
    id: 2,
    title: "Milestones",
    target: "milestones",
    count: 5,
  },
];

const MilestoneTabs = () => {
  return (
    <Tabs defaultValue="milestones" className="">
      <CustomTabTrigger tabs={tabList}>
        <Button className="font-lexend text-sm">Create Milestone</Button>
        <MilestoneFilter />
        <ViewSetting />
      </CustomTabTrigger>
      <TabsContent value="overview">
        <Suspense fallback="Loading...">Overview...</Suspense>
      </TabsContent>
      <TabsContent value="milestones">
        <Suspense fallback="Loading...">
          <MileStoneTable />
        </Suspense>
      </TabsContent>
    </Tabs>
  );
};

export default MilestoneTabs;
