"use client";

import { Form } from "@/components/ui/form";
import { loginFormSchema, LoginInputType } from "@/lib/schemas/login.schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import CustomInputField from "../CustomInputField";
import { Button } from "@/components/ui/button";

export default function AddMilestones() {
  const form = useForm<LoginInputType>({
    resolver: zodResolver(loginFormSchema),
  });

  function onSubmit(data: LoginInputType) {
    console.log(data, "data==>");
  }
  return (
    <div className="p-4">
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-3">
          <CustomInputField
            form={form}
            label="Project"
            name="email"
            type="select"
            className="space-y-0.5"
            placeholder="Select Project"
          />
          <CustomInputField
            form={form}
            label="Title"
            name="email"
            type="text"
            className="space-y-0.5"
            placeholder="Select Project"
          />
          <CustomInputField
            form={form}
            label="Description"
            name="email"
            type="textarea"
            className="space-y-0.5"
            placeholder="Select Project"
          />
          <CustomInputField
            form={form}
            label="Start Date"
            name="email"
            type="text"
            className="space-y-0.5"
            placeholder="Select Project"
          />
          <CustomInputField
            form={form}
            label="End Date"
            name="email"
            type="text"
            className="space-y-0.5"
            placeholder="Select Project"
          />

          <div className="flex justify-center gap-2 pt-6">
            <Button
              className="px-10 font-lexend"
              type="button"
              variant="outline"
            >
              Cancel
            </Button>
            <Button className="px-10 font-lexend" type="submit">
              Submit
            </Button>
          </div>
        </form>
      </Form>
    </div>
  );
}
