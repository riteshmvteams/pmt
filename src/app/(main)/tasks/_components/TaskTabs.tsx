"use client";

import { Suspense } from "react";

import { Tabs, TabsContent } from "@/components/ui/tabs";
import CustomTabTrigger from "@/components/shared/CustomTabTrigger";
import { Button } from "@/components/ui/button";
import { useTaskView } from "@/store/dataView";

import TaskTable from "./table";
import TaskKanban from "./kanban";
import TaskViewOptions from "./TaskViewOptions";
import { useDrawer } from "@/store/useDrawer";
import AddTasks from "@/components/shared/addThings/AddTasks";
import { FileCheck2 } from "lucide-react";
import { ModalTitle } from "@/components/sidebar/CreateNew";

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
  const {
    setDrawerChildren,
    setDrawerClassName,
    setDrawerOpen,
    setDrawerTitle,
    setSide,
  } = useDrawer((state) => state);

  return (
    <Tabs defaultValue="tasks" className="">
      <CustomTabTrigger tabs={tabList}>
        <Button
          onClick={() => {
            setDrawerTitle(
              <ModalTitle Icon={FileCheck2} title="Create Task" />
            );
            setDrawerChildren(<AddTasks />);
            setDrawerClassName("sm:max-w-[1000px]");
            setDrawerOpen(true);
            setSide("right");
          }}
        >
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
