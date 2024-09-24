"use client";

import { Suspense } from "react";

import { Tabs, TabsContent } from "@/components/ui/tabs";
import CustomTabTrigger from "@/components/shared/CustomTabTrigger";
import { Button } from "@/components/ui/button";
import { useTaskView } from "@/store/dataView";

import TaskTable from "./table";
import TaskKanban from "./kanban";
import TaskViewOptions from "./TaskViewOptions";
import { useAddThing } from "@/store/addThings";

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
  const { updateAddThing } = useAddThing((state) => state);

  return (
    <Tabs defaultValue="tasks" className="">
      <CustomTabTrigger tabs={tabList}>
        <Button onClick={() => updateAddThing("add_tasks", true)}>
          Create Task
        </Button>
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
