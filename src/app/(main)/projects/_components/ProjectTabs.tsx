"use client";

import { Suspense } from "react";
import { Tabs, TabsContent } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import ViewSetting from "@/components/shared/ViewSetting";
import CustomTabTrigger from "@/components/shared/CustomTabTrigger";
import Table from "./table";
import ProjectFilters from "./ProjectFilters";
import ProjectSort from "./ProjectSort";
import { AlarmClockPlus, FolderClosed } from "lucide-react";
import { useModal } from "@/store/useModal";
import { ModalTitle } from "@/components/sidebar/CreateNew";
import AddProjects from "@/components/shared/addThings/AddProjects";

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
  const { setChildren, setClassName, setOpen, setTitle } = useModal(
    (state) => state
  );

  return (
    <Tabs defaultValue="active" className="">
      <CustomTabTrigger tabs={tabList}>
        <Button
          className="font-lexend gap-1 active:scale-95"
          onClick={() => {
            setTitle(<ModalTitle Icon={FolderClosed} title="Create Project" />);
            setChildren(<AddProjects />);
            setClassName("max-w-[800px]");
            setOpen(true);
          }}
        >
          <AlarmClockPlus className="h-4 w-4 text-primary-foreground" /> Add
          Project
        </Button>
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
