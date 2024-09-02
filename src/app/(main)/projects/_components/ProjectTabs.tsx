import { Suspense } from "react";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Table from "./table";
import { Button } from "@/components/ui/button";
import ProjectFilters from "./ProjectFilters";
import ProjectSort from "./ProjectSort";
import ViewSetting from "@/components/shared/ViewSetting";

const ProjectTabs = () => {
  return (
    <Tabs defaultValue="active" className="">
      <TabsList className="flex justify-between bg-transparent">
        <div className="grid w-full grid-cols-2 max-w-[400px] bg-muted p-1 rounded-md">
          <TabsTrigger
            value="active"
            className="data-[state=active]:text-primary"
          >
            Active (20)
          </TabsTrigger>
          <TabsTrigger
            value="inactive"
            className="data-[state=active]:text-primary"
          >
            Inactive (5)
          </TabsTrigger>
        </div>
        <div className="flex items-center gap-3">
          <Button>Add Project</Button>
          <ProjectSort />
          <ProjectFilters />
          <ViewSetting />
        </div>
      </TabsList>
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
