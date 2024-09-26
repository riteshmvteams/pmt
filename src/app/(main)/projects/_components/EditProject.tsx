import CustomInputField from "@/components/shared/CustomInputField";
import Title from "@/components/shared/Title";
import { getRoleBadge } from "@/components/shared/userTable/columns";
import { AlertDialogCancel } from "@/components/ui/alert-dialog";
import { Button } from "@/components/ui/button";
import { Form } from "@/components/ui/form";
import { formatDate } from "@/lib/helpers";
import { loginFormSchema, LoginInputType } from "@/lib/schemas/login.schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

export default function EditProject() {
  const form = useForm<LoginInputType>({
    resolver: zodResolver(loginFormSchema),
  });

  function onSubmit(values: LoginInputType) {
    console.log(values, "values==>");
  }
  return (
    <div className="p-4">
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
          <CustomInputField
            form={form}
            type="text"
            label="Project Name"
            name="email"
            className="space-y-0.5"
            placeholder="Enter Project Name"
          />
          <CustomInputField
            form={form}
            type="text"
            label="Project Short Name"
            name="email"
            className="space-y-0.5"
            placeholder="Enter Project Short Name"
          />
          <CustomInputField
            form={form}
            type="select"
            label="Assign To:"
            name="email"
            className="space-y-0.5"
            placeholder="Select"
          />

          <div className="flex items-center gap-2">
            <Title>Created by</Title>
            {getRoleBadge("Super-Admin")}
            <Title className="text-muted-foreground font-normal">
              on {formatDate(new Date())}
            </Title>
          </div>

          <div className="flex justify-center gap-4 items-center py-2">
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
