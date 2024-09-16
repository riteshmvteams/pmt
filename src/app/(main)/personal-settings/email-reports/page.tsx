"use client";

import CustomRadio from "@/components/shared/CustomRadio";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Form } from "@/components/ui/form";
import {
  EmailReportsInputType,
  emailReportsSchema,
} from "@/lib/schemas/emailReports.schema";
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
const taskStatus = [
  {
    label: "Daily",
    value: "daily",
  },
  {
    label: "Weekly",
    value: "weekly",
  },
  {
    label: "Monthly",
    value: "monthly",
  },
  {
    label: "None",
    value: "none",
  },
];

export default function EmailReports() {
  const form = useForm<EmailReportsInputType>({
    resolver: zodResolver(emailReportsSchema),
    defaultValues: {
      weekly_usage: "yes",
      task_status: "daily",
      task_due: "yes",
      daily_update: "no",
    },
  });

  function onSubmit(values: EmailReportsInputType) {
    console.log(values, "values==>");
  }
  return (
    <div className="w-1/2">
      <Card className="rounded-md">
        <CardHeader className="border-b px-4 py-2.5 bg-muted/50">
          <CardTitle className="text-base font-lexend font-medium tracking-wide flex flex-col gap-1">
            Send me Email Reports
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
                name="weekly_usage"
                options={options}
                label="Weekly Usage"
              />
              <CustomRadio
                form={form}
                name="task_status"
                options={taskStatus}
                label="Task Status"
                className="grid-cols-4"
              />
              <CustomRadio
                form={form}
                name="task_due"
                options={options}
                label="Task Due (daily)"
              />
              <CustomRadio
                form={form}
                name="daily_update"
                options={options}
                label="Daily Update Report (send Email)"
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
