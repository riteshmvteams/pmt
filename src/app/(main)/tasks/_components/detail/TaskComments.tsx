import { UserAvatar } from "@/app/(main)/projects/[id]/_components/overview/ProjectOverview";
import PrivateTag from "@/components/shared/PrivateTag";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
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
import CustomInputField from "@/components/shared/CustomInputField";
import QuillLoader from "@/components/shared/QuillLoader";
import Comment from "@/components/shared/Comment";

const QuillEditor = dynamic(() => import("@/components/shared/QuillEditor"), {
  ssr: false,
  loading: () => <QuillLoader className="col-span-full h-[143px]" />,
});

const quillFormSchema = z.object({
  overview: z.string(),
});

export default function TaskComments() {
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
    <div className="flex flex-col gap-6">
      <div className="flex flex-col gap-4 relative">
        {Array.from({ length: 5 }).map((_, i) => {
          return <Comment key={i} />;
        })}
      </div>

      <Card className="rounded-md">
        <CardHeader className="border-b px-4 py-2.5 bg-muted/50">
          <div className="flex items-center justify-between">
            <CardTitle className="text-base font-lexend font-medium tracking-wide flex flex-col gap-1">
              <UserAvatar />
            </CardTitle>
            <PrivateTag />
          </div>
        </CardHeader>
        <CardContent className="p-4 flex flex-col gap-4 bg-muted/10">
          <Form {...form}>
            <form
              onSubmit={form.handleSubmit(onSubmit)}
              className="space-y-4 rounded-lg "
            >
              <Controller
                control={form.control}
                name="overview"
                render={({ field: { onChange, value } }) => (
                  <QuillEditor
                    value={value}
                    onChange={onChange}
                    label=""
                    className="[&_.ql-editor]:min-h-[150px]"
                    labelClassName="font-medium mb-1.5"
                  />
                )}
              />
              <div className="flex flex-col">
                <Title className="mb-2">Visible To</Title>
                <div className="grid grid-cols-5 gap-y-2 bg-muted/50 p-6 rounded-md">
                  {Array.from({ length: 16 })?.map((_, index) => {
                    return (
                      <div className="flex items-center gap-1.5" key={index}>
                        <Checkbox id={`${index}`} />
                        <label
                          htmlFor={`${index}`}
                          className="text-sm font-lexend"
                        >
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
        </CardContent>
      </Card>
    </div>
  );
}
