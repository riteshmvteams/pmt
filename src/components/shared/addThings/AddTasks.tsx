"use client";

import dynamic from "next/dynamic";
import { Controller, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import {
  TaskCreateInputType,
  taskCreateSchema,
} from "@/lib/schemas/task.schema";
import CustomComboBox from "@/components/shared/CustomComboBox";
import CustomInputField from "@/components/shared/CustomInputField";
import CustomRadio from "@/components/shared/CustomRadio";
import { CustomSheet } from "@/components/shared/CustomSheet";
import QuillLoader from "@/components/shared/QuillLoader";
import FileUpload from "@/components/shared/upload/FileUpload";
import { Button } from "@/components/ui/button";
import { Form } from "@/components/ui/form";
import { SheetClose } from "@/components/ui/sheet";
import CustomCalenderField from "@/components/shared/CustomCalenderField";
import Title from "@/components/shared/Title";
import { Checkbox } from "@/components/ui/checkbox";
const QuillEditor = dynamic(() => import("@/components/shared/QuillEditor"), {
  ssr: false,
  loading: () => <QuillLoader className="col-span-full h-[143px]" />,
});

const projectOptions = [
  {
    label: "Project 1",
    value: "project-1",
  },
  {
    label: "Project 2",
    value: "project-2",
  },
  {
    label: "Project 3",
    value: "project-3",
  },
];

const priorities = [
  { label: "Low", value: "low" },
  { label: "Medium", value: "medium" },
  { label: "High", value: "high" },
];

export default function AddTasks() {
  const form = useForm<TaskCreateInputType>({
    resolver: zodResolver(taskCreateSchema),
    defaultValues: {
      task_title: "",
      priority: "medium",
      task_detail: "",
      project: "",
    },
  });

  function onSubmit(values: TaskCreateInputType) {
    console.log(values, "values==>");
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6 mt-10">
        <CustomInputField
          form={form}
          name="task_title"
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
            name="project"
            options={projectOptions}
          />
          <CustomComboBox
            form={form}
            className="w-[465px]"
            label="Assign to"
            name="assign_to"
          />
          <CustomComboBox
            form={form}
            className="w-[465px]"
            label="Notify via mail"
            name="notify_via_mail"
          />

          <CustomCalenderField form={form} />

          <CustomComboBox
            form={form}
            className="w-[465px]"
            label="Task Type"
            name="task_type"
          />
          <CustomComboBox
            form={form}
            className="w-[465px]"
            label="Milestone"
            name="milestone"
          />
        </div>

        <CustomRadio
          form={form}
          name="priority"
          options={priorities}
          label="Select Priority of Task"
        />

        <Controller
          control={form.control}
          name="task_detail"
          render={({ field: { onChange, value } }) => (
            <QuillEditor
              value={value}
              onChange={onChange}
              label="Add Comment"
              className="[&_.ql-editor]:min-h-[150px]"
              labelClassName="font-medium mb-1.5"
              error={form.formState.errors.task_detail?.message}
            />
          )}
        />

        <div className="grid grid-cols-2 gap-4">
          <CustomInputField
            form={form}
            name="task_title"
            placeholder="Enter Estimated Hours..."
            label="Estimated Hours"
            type="text"
            labelClassName=""
            className="space-y-1"
          />
          <CustomInputField
            form={form}
            name="task_title"
            placeholder="Enter Hour Spent..."
            label="Hour Spent"
            type="text"
            labelClassName=""
            className="space-y-1"
          />
        </div>

        <FileUpload />

        <div className="flex flex-col">
          <Title className="mb-2">Visible To</Title>
          <div className="grid grid-cols-5 gap-y-2 bg-muted/50 p-6 rounded-md">
            {Array.from({ length: 16 })?.map((_, index) => {
              return (
                <div className="flex items-center gap-1.5" key={index}>
                  <Checkbox id={`${index}`} />
                  <label htmlFor={`${index}`} className="text-sm font-lexend">
                    Admin
                  </label>
                </div>
              );
            })}
          </div>
        </div>
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
  );
}
