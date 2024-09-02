import { Tabs, TabsContent } from "@/components/ui/tabs";
import { Suspense } from "react";
import Table from "./table";
import CustomTabTrigger from "@/components/shared/CustomTabTrigger";
import { Button } from "@/components/ui/button";

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
    count: 50,
  },
];

const TaskTabs = () => {
  return (
    <Tabs defaultValue="tasks" className="">
      <CustomTabTrigger tabs={tabList}>
        <Button>Add Task</Button>
      </CustomTabTrigger>
      <TabsContent value="overview">Overview</TabsContent>
      <TabsContent value="tasks">
        <Suspense fallback="Loading...">
          <Table />
        </Suspense>
      </TabsContent>
    </Tabs>
  );
};

export default TaskTabs;
