import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import ExcelIcon from "@/components/icons/ExcelIcon";
import Title from "@/components/shared/Title";

export default function page() {
  return (
    <div>
      <Card className="rounded-md">
        <CardHeader className="border-b px-4 py-2.5 bg-muted/50 flex-row justify-between items-center space-y-0">
          <CardTitle className="text-base font-lexend font-medium tracking-wide flex flex-col gap-1">
            Import Task
          </CardTitle>
          <Button className="flex gap-2 items-center" variant="outline">
            <ExcelIcon height="20px" width="20px" /> <Title>Export Task</Title>
          </Button>
        </CardHeader>
        <CardContent className="flex flex-col gap-4 bg-muted/10 p-x-4 py-2.5">
          j
        </CardContent>
      </Card>
    </div>
  );
}
