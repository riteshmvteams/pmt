import React from "react";
import { Controller, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import dynamic from "next/dynamic";
import { z } from "zod";

import { Form } from "@/components/ui/form";
import FileUpload from "@/components/shared/upload/FileUpload";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import Title from "@/components/shared/Title";
import CustomInputField from "@/components/shared/CustomInputField";
import QuillLoader from "@/components/shared/QuillLoader";

const QuillEditor = dynamic(() => import("@/components/shared/QuillEditor"), {
  ssr: false,
  loading: () => <QuillLoader className="col-span-full h-[143px]" />,
});

const quillFormSchema = z.object({
  overview: z.string(),
});

export default function AddProjectNotes() {
  const form = useForm<z.infer<typeof quillFormSchema>>({
    resolver: zodResolver(quillFormSchema),
    defaultValues: {
      overview: "",
    },
  });

  function onSubmit(values: z.infer<typeof quillFormSchema>) {
    console.log(values, "values==>");
  }
  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
        <CustomInputField
          form={form}
          name="overview"
          type="text"
          label="Note Title"
          placeholder="Enter Note Title"
        />
        <Controller
          control={form.control}
          name="overview"
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
        <div className="flex flex-col">
          <Title className="mb-2">Privacy</Title>
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

        <div className="flex flex-col">
          <Title className="mb-2">
            Notify Via mail -
            <span className="text-xs text-muted-foreground font-light">
              {" "}
              (Notification will only be sent to selected private users if notes
              privacy is selected)
            </span>
          </Title>
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
        <div className="flex justify-end my-auto">
          <Button className="px-10 font-lexend">Submit</Button>
        </div>
      </form>
    </Form>
  );
}
