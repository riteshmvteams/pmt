import React from "react";
import { Controller, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import dynamic from "next/dynamic";
import { z } from "zod";

import { CustomSheet } from "@/components/shared/CustomSheet";
import { Form } from "@/components/ui/form";
import FileUpload from "@/components/shared/upload/FileUpload";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import Title from "@/components/shared/Title";
import QuillLoader from "./QuillLoader";
import CustomInputField from "@/components/shared/CustomInputField";

const QuillEditor = dynamic(() => import("@/components/shared/QuillEditor"), {
  ssr: false,
  loading: () => <QuillLoader className="col-span-full h-[143px]" />,
});

const quillFormSchema = z.object({
  overview: z.string(),
});

type Props = {
  title: string;
  btnLabel?: string;
};

export default function AddProjectDetails({ title, btnLabel }: Props) {
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
    <CustomSheet
      className="sm:max-w-[900px] flex flex-col gap-10"
      title={title}
      btnLabel={btnLabel}
    >
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
          <CustomInputField
            form={form}
            name="overview"
            type="text"
            label="Project Title"
            placeholder="Enter Project Title"
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
          <div className="flex justify-end my-auto">
            <Button className="px-10 font-lexend">Submit</Button>
          </div>
        </form>
      </Form>
    </CustomSheet>
  );
}
