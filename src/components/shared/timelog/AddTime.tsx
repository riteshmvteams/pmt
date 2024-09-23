import { Form } from "@/components/ui/form";
import { loginFormSchema, LoginInputType } from "@/lib/schemas/login.schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import CustomInputField from "../CustomInputField";
import { Button } from "@/components/ui/button";
import { AlertDialogCancel } from "@/components/ui/alert-dialog";

const AddTime = () => {
  const form = useForm<LoginInputType>({
    resolver: zodResolver(loginFormSchema),
  });

  function onSubmit(data: LoginInputType) {
    console.log(data, "data==>");
  }

  return (
    <div className="p-4">
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
          <div className="grid grid-cols-7 gap-3">
            <CustomInputField
              form={form}
              label="Who"
              name="l"
              type="select"
              placeholder="Task"
              className="col-span-2 space-y-0.5"
            />
            <CustomInputField
              form={form}
              label="Select Project"
              name="l"
              type="select"
              placeholder="Task"
              className="space-y-0.5"
            />
            <CustomInputField
              form={form}
              label="Select Project"
              name="l"
              type="select"
              placeholder="Task"
              className="space-y-0.5"
            />
            <CustomInputField
              form={form}
              label="Select Project"
              name="l"
              type="select"
              placeholder="Task"
              className="space-y-0.5"
            />
            <CustomInputField
              form={form}
              label="Select Project"
              name="l"
              type="select"
              placeholder="Task"
              className="space-y-0.5"
            />
            <CustomInputField
              form={form}
              label="Billable"
              name="l"
              type="toggle"
              className="space-y-0.5"
            />
          </div>
          <div className="flex flex-col gap-4">
            <CustomInputField
              form={form}
              label="Select Task"
              name="l"
              type="select"
              placeholder="Task"
              className="space-y-0.5"
            />
            <CustomInputField
              form={form}
              label="Select Project"
              name="l"
              type="select"
              placeholder="Task"
              className="space-y-0.5"
            />
            <CustomInputField
              form={form}
              label=""
              name="l"
              type="textarea"
              placeholder="Task Descrition"
            />

            <div className="flex justify-center gap-2 mt-6">
              <AlertDialogCancel asChild>
                <Button type="button" variant="outline" className="px-10">
                  Cancel
                </Button>
              </AlertDialogCancel>
              <Button type="submit" className="px-10">
                Submit
              </Button>
            </div>
          </div>
        </form>
      </Form>
    </div>
  );
};

export default AddTime;
