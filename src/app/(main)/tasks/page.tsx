import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Suspense } from "react";
import Table from "./_components/table";

export default function Tasks() {
  return (
    <main className="flex flex-1 flex-col gap-4 p-4 lg:gap-6 lg:p-6">
      <div className="flex items-center">
        <h1 className="text-lg font-semibold md:text-2xl">Tasks</h1>
      </div>
      {/* <div
        className="flex flex-1 items-center justify-center rounded-lg border border-dashed shadow-sm"
        x-chunk="dashboard-02-chunk-1"
      >
        <div className="flex flex-col items-center gap-1 text-center">
          <h3 className="text-2xl font-bold tracking-tight">No Tasks</h3>
        </div>
      </div> */}
      <TaskTabs />
    </main>
  );
}

const TaskTabs = () => {
  return (
    <Tabs defaultValue="tasks" className="">
      <TabsList className="grid w-full grid-cols-2 max-w-[400px]">
        <TabsTrigger
          value="overview"
          className="data-[state=active]:text-primary"
        >
          Overview
        </TabsTrigger>
        <TabsTrigger value="tasks" className="data-[state=active]:text-primary">
          Tasks (50)
        </TabsTrigger>
      </TabsList>
      <TabsContent value="overview">Overview</TabsContent>
      <TabsContent value="tasks">
        <Suspense fallback="Loading...">
          <Table />
        </Suspense>
      </TabsContent>
    </Tabs>
  );
};
