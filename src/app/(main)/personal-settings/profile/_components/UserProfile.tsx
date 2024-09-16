"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { useState } from "react";
import { Edit } from "lucide-react";

import { login } from "@/actions/login";
import { user } from "@/config/site";
import { Form } from "@/components/ui/form";
import { Button } from "@/components/ui/button";
import { loginFormSchema, LoginInputType } from "@/lib/schemas/login.schema";
import CustomInputField from "@/components/shared/CustomInputField";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import CustomTooltip from "@/components/shared/CustomTooltip";

export default function UserProfile() {
  const [edit, setEdit] = useState(false);

  const form = useForm<LoginInputType>({
    resolver: zodResolver(loginFormSchema),
    defaultValues: {
      email: user.email,
      password: user.password,
      remember: false,
    },
  });

  function onSubmit(values: LoginInputType) {
    console.log(values, "values==>");
    login();
  }
  return edit ? (
    <div className="w-1/2">
      <Card className="rounded-md">
        <CardHeader className="border-b px-4 py-2.5 bg-muted/50">
          <CardTitle className="text-base font-lexend font-medium tracking-wide flex flex-col gap-1">
            Profile Details
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
                label="First Name"
                placeholder="Enter your First Name"
              />
              <CustomInputField
                form={form}
                name="password"
                type="text"
                label="Last Name"
                placeholder="Enter your Last Name"
              />
              <CustomInputField
                form={form}
                name="password"
                type="text"
                label="Short Name"
                placeholder="Enter your Short Name"
              />
              <CustomInputField
                form={form}
                name="email"
                type="text"
                label="Email"
                placeholder="Enter your Email"
              />

              <div className="flex gap-4">
                <Button
                  type="button"
                  className="w-full tracking-wider"
                  onClick={() => setEdit(false)}
                  variant={"outline"}
                >
                  Cancel
                </Button>
                <Button type="submit" className="w-full tracking-wider">
                  Update
                </Button>
              </div>
            </form>
          </Form>
        </CardContent>
      </Card>
    </div>
  ) : (
    <div className="w-1/2">
      <Card className="rounded-md">
        <CardHeader className="border-b px-4 py-2.5 bg-muted/50">
          <div className="flex items-center justify-between">
            <CardTitle className="text-base font-lexend font-medium tracking-wide flex flex-col gap-1">
              Profile Details
            </CardTitle>
            <CustomTooltip title="Edit">
              <Button
                size={"icon"}
                variant={"outline"}
                onClick={() => setEdit(true)}
              >
                <Edit className="w-4 h-4" />
              </Button>
            </CustomTooltip>
          </div>
        </CardHeader>
        <CardContent className="flex flex-col gap-4 bg-muted/10 p-x-4 py-2.5">
          <div className="flex gap-4">
            <h4>First Name</h4>
            <p>Ritesh</p>
          </div>
          <div className="flex gap-4">
            <h4>Last Name</h4>
            <p>Kumar</p>
          </div>
          <div className="flex gap-4">
            <h4>Short Name</h4>
            <p>RK</p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
