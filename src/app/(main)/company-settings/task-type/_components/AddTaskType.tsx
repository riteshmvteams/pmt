"use client";

import { useForm } from "react-hook-form";

import { Button } from "@/components/ui/button";
import AddIcon from "@/components/icons/AddIcon";
import Title from "@/components/shared/Title";
import CustomInputField from "@/components/shared/CustomInputField";
import { Form } from "@/components/ui/form";

import { useModal } from "@/store/useModal";
import { loginFormSchema, LoginInputType } from "@/lib/schemas/login.schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { AlertDialogCancel } from "@/components/ui/alert-dialog";

export default function AddTaskType() {
  const { setChildren, setClassName, setOpen, setTitle } = useModal();
  return (
    <>
      <Button
        className="flex gap-2 items-center mt-0"
        variant="outline"
        onClick={() => {
          setOpen(true);
          setTitle("New Task Type");
          setClassName("max-w-[600px]");
          setChildren(<AddTaskTypeForm />);
        }}
      >
        <AddIcon height="20px" width="20px" /> <Title>New Task Type</Title>
      </Button>
    </>
  );
}

export const AddTaskTypeForm = () => {
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
            name="email"
            type="text"
            label="Name"
            placeholder="Design"
            className="space-y-0.5"
          />
          <CustomInputField
            form={form}
            name="email"
            type="text"
            label="Short Name"
            placeholder="DSG"
            className="space-y-0.5"
          />
          <div className="flex gap-2 items-center">
            <Button type="submit" className="w-full tracking-wider">
              Add
            </Button>
            <AlertDialogCancel asChild>
              <Button
                type="button"
                className="w-full tracking-wider"
                variant="outline"
              >
                Cancel
              </Button>
            </AlertDialogCancel>
          </div>
        </form>
      </Form>
    </div>
  );
};
