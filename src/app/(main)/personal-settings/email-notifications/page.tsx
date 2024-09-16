"use client";

import CustomRadio from "@/components/shared/CustomRadio";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Form } from "@/components/ui/form";
import {
  EmailNotificationInputType,
  emailNotificationSchema,
} from "@/lib/schemas/emailNotification.schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

const options = [
  {
    label: "Yes",
    value: "yes",
  },
  {
    label: "No",
    value: "no",
  },
];

export default function EmailNotifications() {
  const form = useForm<EmailNotificationInputType>({
    resolver: zodResolver(emailNotificationSchema),
    defaultValues: {
      new_task: "yes",
      task_reply: "yes",
      task_status: "yes",
    },
  });

  function onSubmit(values: EmailNotificationInputType) {
    console.log(values, "values==>");
  }
  return (
    <div className="w-1/2">
      <Card className="rounded-md">
        <CardHeader className="border-b px-4 py-2.5 bg-muted/50">
          <CardTitle className="text-base font-lexend font-medium tracking-wide flex flex-col gap-1">
            Send me Email Notification
          </CardTitle>
        </CardHeader>
        <CardContent className="flex flex-col gap-4 bg-muted/10 p-x-4 py-2.5">
          <Form {...form}>
            <form
              onSubmit={form.handleSubmit(onSubmit)}
              className="grid grid-cols-1 gap-4"
            >
              <CustomRadio
                form={form}
                name="new_task"
                options={options}
                label="All New Task"
              />
              <CustomRadio
                form={form}
                name="task_reply"
                options={options}
                label="All Task Reply & Comment"
              />
              <CustomRadio
                form={form}
                name="task_status"
                options={options}
                label="All Task Status Change"
              />
              <div className="mt-6">
                <Button type="submit" className="w-full tracking-wider">
                  Update
                </Button>
              </div>
            </form>
          </Form>
        </CardContent>
      </Card>
    </div>
  );
}
