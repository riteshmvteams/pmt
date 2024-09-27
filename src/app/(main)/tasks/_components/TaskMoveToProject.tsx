"use client";

import CustomInputField from "@/components/shared/CustomInputField";
import { AlertDialogCancel } from "@/components/ui/alert-dialog";
import { Button } from "@/components/ui/button";
import { Form } from "@/components/ui/form";
import { loginFormSchema, LoginInputType } from "@/lib/schemas/login.schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

export default function TaskMoveToProject() {
  const form = useForm<LoginInputType>({
    resolver: zodResolver(loginFormSchema),
  });

  function onSubmit(values: LoginInputType) {
    console.log(values, "values==>");
  }

  return (
    <div className="p-4">
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
          <CustomInputField
            form={form}
            type="select"
            label="Project"
            name="email"
            placeholder="Select Project..."
            className="space-y-1"
          />

          <div className="flex justify-center gap-4 items-center py-4">
            <AlertDialogCancel asChild>
              <Button variant="outline" className="px-10 font-lexend">
                Cancel
              </Button>
            </AlertDialogCancel>
            <Button type="submit" className="px-10 font-lexend">
              Add
            </Button>
          </div>
        </form>
      </Form>
    </div>
  );
}
