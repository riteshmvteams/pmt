import CustomInputField from "@/components/shared/CustomInputField";
import Title from "@/components/shared/Title";
import { AlertDialogCancel } from "@/components/ui/alert-dialog";
import { Button } from "@/components/ui/button";
import { Form } from "@/components/ui/form";
import { formatDateWithWeekday } from "@/lib/helpers";
import { loginFormSchema, LoginInputType } from "@/lib/schemas/login.schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

export default function EditCheckedInOutTime() {
  const form = useForm<LoginInputType>({
    resolver: zodResolver(loginFormSchema),
  });

  function onSubmit(values: LoginInputType) {
    console.log(values, "values==>");
  }
  return (
    <div className="p-4 flex flex-col gap-6">
      <Title className="text-base">{formatDateWithWeekday(new Date())}</Title>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
          <div className="grid grid-cols-2 gap-4">
            <CustomInputField
              form={form}
              label="Time In"
              name="email"
              type="text"
              placeholder="Enter Time In"
              className="space-y-0.5"
            />
            <CustomInputField
              form={form}
              label="Time In"
              name="email"
              type="text"
              placeholder="Enter Time In"
              className="space-y-0.5"
            />
          </div>
          <div className="flex justify-center gap-2 items-center">
            <Button className="px-10 font-lexend">Submit</Button>
            <AlertDialogCancel asChild>
              <Button variant="outline" className="px-10 font-lexend">
                Close
              </Button>
            </AlertDialogCancel>
          </div>
        </form>
      </Form>
    </div>
  );
}
