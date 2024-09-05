"use client";

import { Suspense } from "react";

import { Tabs, TabsContent } from "@/components/ui/tabs";
import CustomTabTrigger from "@/components/shared/CustomTabTrigger";
import { Button } from "@/components/ui/button";
import TaskTable from "./table";
import TaskKanban from "./kanban";
import { useTaskView } from "@/store/dataView";
import TaskViewOptions from "./TaskViewOptions";

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
  const taskView = useTaskView((state) => state?.taskView);

  return (
    <Tabs defaultValue="tasks" className="">
      <CustomTabTrigger tabs={tabList}>
        <Button>Add Task</Button>
        <TaskViewOptions />
      </CustomTabTrigger>
      <TabsContent value="overview">Overview</TabsContent>
      <TabsContent value="tasks">
        <Suspense fallback="Loading...">
          {taskView === "table" ? <TaskTable /> : <TaskKanban />}
        </Suspense>
      </TabsContent>
    </Tabs>
  );
};

export default TaskTabs;
