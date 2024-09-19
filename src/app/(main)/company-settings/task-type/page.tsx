import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import AddIcon from "@/components/icons/AddIcon";
import Title from "@/components/shared/Title";

export default function TaskTypePage() {
  return (
    <div>
      <Card className="rounded-md">
        <CardHeader className="border-b px-4 py-2.5 bg-muted/50 flex-row justify-between items-center space-y-0">
          <CardTitle className="text-base font-lexend font-medium tracking-wide flex flex-col gap-1">
            Add / Remove Task Type
          </CardTitle>
          <Button className="flex gap-2 items-center mt-0" variant="outline">
            <AddIcon height="20px" width="20px" /> <Title>New Task Type</Title>
          </Button>
        </CardHeader>
        <CardContent className="grid grid-cols-2 gap-6 bg-muted/10 p-x-4 py-2.5">
          <div className="border rounded-md">
            <Title className="border-b p-3">Custom Task Type</Title>

            <div className="p-3">dd</div>
          </div>

          <div className="border rounded-md">
            <Title className="border-b p-3">Default Task Type</Title>

            <div className="p-3">dd</div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
