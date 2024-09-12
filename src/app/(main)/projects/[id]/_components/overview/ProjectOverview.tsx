"use client";

import { useState } from "react";
import {
  Activity,
  Aperture,
  Edit,
  Lock,
  Paperclip,
  RefreshCcwDot,
  ShipWheel,
  Trash2,
  UserRound,
} from "lucide-react";

import NoItems from "@/components/shared/NoItems";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { formatDateWithWeekday } from "@/lib/helpers";
import { Button } from "@/components/ui/button";
import { getStatusBadge } from "@/app/(main)/tasks/_components/columns";
import CustomAvatar from "@/components/shared/CustomAvatar";
import Title from "@/components/shared/Title";
import CustomTooltip from "@/components/shared/CustomTooltip";
import AddProjectDetails from "./AddProjectDetails";
import PrivateTag from "@/components/shared/PrivateTag";
import Comment from "@/components/shared/Comment";

const htmlString = `<p>This project is a good choice for beginners because it is relatively simple to implement, but it still requires you to learn some important web development concepts, such as HTML, CSS, and JavaScript.</p><br /><br /><p>To create a <b>quiz app</b>, you will need to:</p><br /><p>1. Design the quiz questions. This includes coming up with the questions themselves, as well as the possible answers for each question. You may also want to decide on a scoring system for the quiz.</br>`;

export default function ProjectOverview() {
  const [overview] = useState(true);

  return overview ? (
    <div className="grid grid-cols-12 gap-x-10">
      <div className="col-span-8">
        <div className="font-lexend bg-muted/50 p-4 rounded-md border flex flex-col gap-1">
          <div className="flex items-center gap-3">
            <h2 className="text-xl font-medium">
              Project Title - Carrer Planning
            </h2>
            {getStatusBadge("Open")}
          </div>
          <p className="text-xs font-light">
            Last updated by <span className="font-normal">Super Admin</span> on{" "}
            <span className="font-normal">
              {formatDateWithWeekday(new Date())}
            </span>
          </p>
        </div>

        <div className="py-10">
          <Card className="rounded-md">
            <CardHeader className="border-b px-4 py-2.5 bg-muted/50">
              <div className="flex items-center justify-between">
                <CardTitle className="text-base font-lexend font-medium tracking-wide flex flex-col gap-1">
                  <UserAvatar />
                </CardTitle>
                <PrivateTag />
              </div>
            </CardHeader>
            <CardContent className="p-4 flex flex-col gap-4">
              <div
                className="text-sm ql-editor"
                dangerouslySetInnerHTML={{ __html: htmlString }}
              ></div>
            </CardContent>
          </Card>
          <div className="flex justify-end my-2">
            <AddProjectDetails title="Add Project Details" />
          </div>
        </div>

        {/* comments listing */}
        <div className="border-t pt-10">
          <Title className="mb-2 text-lg">Comments</Title>
          <div className="flex flex-col gap-4">
            {Array.from({ length: 5 }).map((_, i) => {
              return <Comment key={i} />;
            })}
          </div>
        </div>
      </div>
      <div className="col-span-4 flex flex-col gap-3">
        <div className="bg-muted/20 border p-4 rounded-md flex flex-col gap-4">
          <div className="flex items-center gap-2">
            <Aperture className="w-5 h-5" />
            <Title>Action Buttons</Title>
          </div>

          <div className="flex items-center gap-2">
            <CustomTooltip title="Edit Project">
              <Button size={"icon"} variant={"outline"}>
                <Edit className="w-4 h-4" />
              </Button>
            </CustomTooltip>
            <CustomTooltip title="Delete Project">
              <Button size={"icon"} variant={"outline"}>
                <Trash2 className="w-4 h-4" />
              </Button>
            </CustomTooltip>
            <CustomTooltip title="Reload Project">
              <Button size={"icon"} variant={"outline"}>
                <RefreshCcwDot className="w-4 h-4" />
              </Button>
            </CustomTooltip>
          </div>
        </div>
        <div className="bg-muted/20 border p-4 rounded-md flex flex-col gap-2">
          <div className="flex items-center gap-2">
            <Paperclip className="w-5 h-5" />
            <Title>Attached Files</Title>
          </div>
        </div>
        <div className="bg-muted/20 border p-4 rounded-md flex flex-col gap-2">
          <div className="flex items-center gap-2">
            <Activity className="w-4 h-4" />
            <Title>Activities</Title>
          </div>
        </div>
        <div className="bg-muted/20 border p-4 rounded-md flex flex-col gap-4">
          <div className="flex items-center gap-2">
            <UserRound className="w-4 h-4" />
            <Title>People involved</Title>
          </div>
          <div className="flex items-center flex-wrap gap-1">
            {Array.from({ length: 6 }).map((_, index) => {
              return <CustomAvatar key={index} className="w-8 h-8" />;
            })}
          </div>
        </div>
      </div>
    </div>
  ) : (
    <NoItems
      title="No Overview Yet"
      icon={
        <ShipWheel
          strokeWidth={1.5}
          className="w-16 h-16 text-muted-foreground"
        />
      }
    >
      <AddProjectDetails title="Add Project Overview" btnLabel="Add Overview" />
    </NoItems>
  );
}

export const UserAvatar = () => {
  return (
    <div className="flex items-center gap-3">
      <Avatar className="w-10 h-10">
        <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
        <AvatarFallback>CN</AvatarFallback>
      </Avatar>
      <div className="flex flex-col">
        <h4 className="text-xs font-lexend font-normal">Super Admin</h4>
        <span className="text-xs font-light">
          {formatDateWithWeekday(new Date(), false)}
        </span>
      </div>
    </div>
  );
};
