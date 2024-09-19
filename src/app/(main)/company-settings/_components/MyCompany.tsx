"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

import { user } from "@/config/site";
import { Form } from "@/components/ui/form";
import { Button } from "@/components/ui/button";
import { loginFormSchema, LoginInputType } from "@/lib/schemas/login.schema";
import CustomInputField from "@/components/shared/CustomInputField";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function MyCompany() {
  const form = useForm<LoginInputType>({
    resolver: zodResolver(loginFormSchema),
    defaultValues: {
      email: "MVT",
      password: user.password,
      remember: false,
    },
  });

  function onSubmit(values: LoginInputType) {
    console.log(values, "values==>");
  }
  return (
    <div className="w-1/2">
      <Card className="rounded-md">
        <CardHeader className="border-b px-4 py-2.5 bg-muted/50">
          <CardTitle className="text-base font-lexend font-medium tracking-wide flex flex-col gap-1">
            Company Name
          </CardTitle>
        </CardHeader>
        <CardContent className="flex flex-col gap-4 bg-muted/10 p-x-4 py-2.5">
          <Form {...form}>
            <form
              onSubmit={form.handleSubmit(onSubmit)}
              className="grid grid-cols-1 gap-4"
            >
              <CustomInputField
                form={form}
                name="email"
                type="text"
                label="Name"
                placeholder="Enter your Company Name"
              />
              <Button type="submit" className="w-full tracking-wider">
                Update
              </Button>
            </form>
          </Form>
        </CardContent>
      </Card>
    </div>
  );
}
