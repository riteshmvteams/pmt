"use client";

import dynamic from "next/dynamic";
import { useState } from "react";
import { z } from "zod";
import {
  Activity,
  Aperture,
  Delete,
  Edit,
  File,
  Paperclip,
  RefreshCcwDot,
  ShipWheel,
  Trash2,
  UserRound,
} from "lucide-react";
import { zodResolver } from "@hookform/resolvers/zod";
import { Controller, useForm } from "react-hook-form";

import NoItems from "@/components/shared/NoItems";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { formatDateWithWeekday } from "@/lib/helpers";
import { Button } from "@/components/ui/button";
import { Form } from "@/components/ui/form";
import { getStatusBadge } from "@/app/(main)/tasks/_components/columns";
import QuillLoader from "./QuillLoader";
import CustomAvatar from "@/components/shared/CustomAvatar";
import Title from "@/components/shared/Title";
import CustomTooltip from "@/components/shared/CustomTooltip";

const QuillEditor = dynamic(() => import("@/components/shared/QuillEditor"), {
  ssr: false,
  loading: () => <QuillLoader className="col-span-full h-[143px]" />,
});

const quillFormSchema = z.object({
  overview: z.string(),
});

const htmlString = `<p>This project is a good choice for beginners because it is relatively simple to implement, but it still requires you to learn some important web development concepts, such as HTML, CSS, and JavaScript.</p><br /><br /><p>To create a <b>quiz app</b>, you will need to:</p><br /><p>1. Design the quiz questions. This includes coming up with the questions themselves, as well as the possible answers for each question. You may also want to decide on a scoring system for the quiz.</br>`;

export default function ProjectOverview() {
  const [overview] = useState(true);
  const [editorHtml, setEditorHtml] = useState(htmlString);

  const form = useForm<z.infer<typeof quillFormSchema>>({
    resolver: zodResolver(quillFormSchema),
    defaultValues: {
      overview: "",
    },
  });

  function onSubmit(values: z.infer<typeof quillFormSchema>) {
    console.log(values, "values==>");

    setEditorHtml(values?.overview);
  }

  return overview ? (
    <div className="grid grid-cols-12 gap-x-10 pb-32">
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
              </div>
            </CardHeader>
            <CardContent className="p-4 flex flex-col gap-4">
              <div
                className="text-sm ql-editor"
                dangerouslySetInnerHTML={{ __html: editorHtml }}
              ></div>
            </CardContent>
          </Card>
        </div>

        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
            <Controller
              control={form.control}
              name="overview"
              render={({ field: { onChange, value } }) => (
                <QuillEditor
                  value={value}
                  onChange={onChange}
                  label="Description*"
                  className="[&_.ql-editor]:min-h-[150px]"
                  labelClassName="font-medium mb-1.5"
                />
              )}
            />
            <div className="flex justify-end">
              <Button>Submit</Button>
            </div>
          </form>
        </Form>

        {/* comments listing */}
        <div className="py-10 flex flex-col gap-4">
          {Array.from({ length: 10 }).map((_, i) => {
            return (
              <div
                key={i}
                className="flex items-start gap-4 bg-muted/50 p-4 rounded-lg border"
              >
                <CustomAvatar />
                <div className="flex flex-col w-full gap-2">
                  <div className="flex justify-between w-full items-center">
                    <div>
                      <Title className="text-sm font-normal mt-1">
                        Ritesh Kumar
                      </Title>
                      <span className="text-xs font-light block">
                        {formatDateWithWeekday(new Date())}
                      </span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Button size={"icon"} variant={"outline"}>
                        <Edit className="w-4 h-4" />
                      </Button>
                      <Button size={"icon"} variant={"outline"}>
                        <Trash2 className="w-4 h-4" />
                      </Button>
                    </div>
                  </div>

                  <div className="text-sm text-muted-foreground font-light">
                    Hard Drive Compatibility: Its possible that your laptops
                    hard drive may not be fully compatible with Ubuntu. Check
                    the Ubuntu community forums or Dell support forums to see if
                    others with the same laptop model have encountered similar
                    issues and if there are specific solutions or workarounds.
                  </div>
                </div>
              </div>
            );
          })}
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
      Add Overview
    </NoItems>
  );
}

const UserAvatar = () => {
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
