"use client";

import CustomComboBox from "@/components/shared/CustomComboBox";
import CustomInputField from "@/components/shared/CustomInputField";
import CustomRadio from "@/components/shared/CustomRadio";
import { CustomSheet } from "@/components/shared/CustomSheet";
import QuillLoader from "@/components/shared/QuillLoader";
import FileUpload from "@/components/shared/upload/FileUpload";
import { Button } from "@/components/ui/button";
import { Form } from "@/components/ui/form";
import { SheetClose } from "@/components/ui/sheet";
import {
  TaskCreateInputType,
  taskCreateSchema,
} from "@/lib/schemas/task.schema";
import { zodResolver } from "@hookform/resolvers/zod";
import dynamic from "next/dynamic";
import { Controller, useForm } from "react-hook-form";
const QuillEditor = dynamic(() => import("@/components/shared/QuillEditor"), {
  ssr: false,
  loading: () => <QuillLoader className="col-span-full h-[143px]" />,
});

export default function TaskCreate() {
  const form = useForm<TaskCreateInputType>({
    resolver: zodResolver(taskCreateSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  function onSubmit(values: TaskCreateInputType) {
    console.log(values, "values==>");
  }

  return (
    <CustomSheet
      title="Create Task"
      btnLabel="Add Task"
      side="right"
      className="sm:max-w-[1000px]"
    >
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="space-y-6 mt-10"
        >
          <CustomInputField
            form={form}
            name="email"
            placeholder="Enter Task Title..."
            label="Task Title"
            type="text"
            labelClassName=""
            className="space-y-1"
          />

          <div className="grid grid-cols-2 gap-4">
            <CustomComboBox
              form={form}
              className="w-[465px]"
              label="Select a Project"
            />
            <CustomComboBox
              form={form}
              className="w-[465px]"
              label="Assign to"
            />
            <CustomComboBox
              form={form}
              className="w-[465px]"
              label="Notify via mail"
            />
            <CustomComboBox
              form={form}
              className="w-[465px]"
              label="Due Date"
            />
            <CustomComboBox
              form={form}
              className="w-[465px]"
              label="Task Type"
            />
            <CustomComboBox
              form={form}
              className="w-[465px]"
              label="Milestone"
            />
          </div>

          <CustomRadio form={form} />

          <Controller
            control={form.control}
            name="password"
            render={({ field: { onChange, value } }) => (
              <QuillEditor
                value={value}
                onChange={onChange}
                label="Add Comment"
                className="[&_.ql-editor]:min-h-[150px]"
                labelClassName="font-medium mb-1.5"
              />
            )}
          />

          <FileUpload />
          <div className="flex gap-2 justify-end">
            <SheetClose asChild>
              <Button variant={"outline"} className="px-10">
                Cancel
              </Button>
            </SheetClose>
            <Button className="px-10">Create</Button>
          </div>
        </form>
      </Form>
    </CustomSheet>
  );
}
