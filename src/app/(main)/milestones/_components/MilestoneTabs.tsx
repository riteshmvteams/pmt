"use client";

import { Suspense } from "react";

import { Tabs, TabsContent } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import ViewSetting from "@/components/shared/ViewSetting";
import CustomTabTrigger from "@/components/shared/CustomTabTrigger";
import MilestoneFilter from "./MilestoneFilter";
import MileStoneTable from "./table";
import { useModal } from "@/store/useModal";
import { ModalTitle } from "@/components/sidebar/CreateNew";
import { FolderClosed } from "lucide-react";
import AddMilestones from "@/components/shared/addThings/AddMilestones";

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
  const { setChildren, setClassName, setOpen, setTitle } = useModal(
    (state) => state
  );

  return (
    <Tabs defaultValue="milestones" className="">
      <CustomTabTrigger tabs={tabList}>
        <Button
          className="font-lexend text-sm"
          onClick={() => {
            setTitle(
              <ModalTitle Icon={FolderClosed} title="Create Milestone" />
            );
            setChildren(<AddMilestones />);
            setOpen(true);
            setClassName("max-w-[800px]");
          }}
        >
          Create Milestone
        </Button>
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
