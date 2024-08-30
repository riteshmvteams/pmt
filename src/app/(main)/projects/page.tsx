import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Table from "./_components/table";
import { Suspense } from "react";

export default function Projects() {
  return (
    <main className="flex flex-1 flex-col gap-4 lg:gap-6 p-6">
      <div className="flex items-center">
        <h1 className="text-lg font-semibold md:text-2xl">Projects</h1>
      </div>
      <ProjectTabs />
      {/* <div className="flex flex-1 items-center justify-center rounded-lg border border-dashed shadow-sm">
        <div className="flex flex-col items-center gap-1 text-center">
          <h3 className="text-2xl font-bold tracking-tight">No projects</h3>
          <Button className="mt-4">Add Project</Button>
        </div>
      </div> */}
    </main>
  );
}

const ProjectTabs = () => {
  return (
    <Tabs defaultValue="account" className="">
      <TabsList className="grid w-full grid-cols-2 max-w-[400px]">
        <TabsTrigger
          value="account"
          className="data-[state=active]:text-primary"
        >
          Active (20)
        </TabsTrigger>
        <TabsTrigger
          value="password"
          className="data-[state=active]:text-primary"
        >
          Inactive (5)
        </TabsTrigger>
      </TabsList>
      <TabsContent value="account">
        <Suspense fallback="Loading...">
          <Table />
        </Suspense>
      </TabsContent>
      <TabsContent value="password">
        <Suspense fallback="Loading...">
          <Table />
        </Suspense>
      </TabsContent>
    </Tabs>
  );
};
