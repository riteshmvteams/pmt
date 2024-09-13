"use client";

import Link from "next/link";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

import { login } from "@/actions/login";
import { user } from "@/config/site";
import { Form } from "@/components/ui/form";
import { Button } from "@/components/ui/button";
import { loginFormSchema, LoginInputType } from "@/lib/schemas/login.schema";
import CustomInputField from "@/components/shared/CustomInputField";
import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import CustomTooltip from "@/components/shared/CustomTooltip";
import { Edit } from "lucide-react";

export default function ChangePassword() {
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
  return (
    <div className="w-1/2">
      <Card className="rounded-md">
        <CardHeader className="border-b px-4 py-2.5 bg-muted/50">
          <CardTitle className="text-base font-lexend font-medium tracking-wide flex flex-col gap-1">
            Change Password
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
                name="password"
                type="password"
                label="Old Password"
                placeholder="Enter your Old Password"
              />
              <CustomInputField
                form={form}
                name="password"
                type="password"
                label="New Password"
                placeholder="Enter your new Password"
              />
              <CustomInputField
                form={form}
                name="password"
                type="password"
                label="Re-enter New password"
                placeholder="Re-enter the new Password"
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
