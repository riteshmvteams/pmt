import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Title from "@/components/shared/Title";
import { Button } from "@/components/ui/button";

export default function TakeBackupPage() {
  return (
    <div>
      <Card className="rounded-md">
        <CardHeader className="border-b px-4 py-2.5 bg-muted/50 flex-row justify-between items-center space-y-0">
          <CardTitle className="text-base font-lexend font-medium tracking-wide flex flex-col gap-1">
            PMT Backup
          </CardTitle>
        </CardHeader>
        <CardContent className="grid grid-cols-2 gap-4 bg-muted/10 p-x-4 py-5">
          <div className="border px-4 py-2.5 rounded-md flex justify-between items-center">
            <Title className="text-base">
              Click on the button to backup all the notes till date
            </Title>
            <Button>Take Backup</Button>
          </div>
          <div className="border px-4 py-2.5 rounded-md flex justify-between items-center">
            <Title className="text-base">
              Click on the button to backup all the notes till date
            </Title>
            <Button>Take Backup</Button>
          </div>
          <div className="border px-4 py-2.5 rounded-md flex justify-between items-center">
            <Title className="text-base">
              Click on the button to backup all the notes till date
            </Title>
            <Button>Take Backup</Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
