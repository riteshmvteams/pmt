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
import { Loader, Loader2 } from "lucide-react";

export default function LoginForm() {
  const [isLoading, setIsLoading] = useState(false);
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
    setIsLoading(true);
    login();
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
        <CustomInputField
          form={form}
          name="email"
          type="text"
          label="Email"
          placeholder="Enter your email"
        />
        <CustomInputField
          form={form}
          name="password"
          type="password"
          label="Password"
          placeholder="Enter your password"
        />
        <div className="flex justify-between">
          <CustomInputField
            form={form}
            name="remember"
            type="checkbox"
            label="Remember me"
          />
          <Link
            href="/forgot-password"
            className="ml-auto inline-block text-sm underline"
          >
            Forgot your password?
          </Link>
        </div>
        <Button
          type="submit"
          className="w-full tracking-wider"
          disabled={isLoading}
        >
          {isLoading ? (
            <Loader className="w-5 h-5 animate-spin text-primary-foreground" />
          ) : (
            "LOGIN"
          )}
        </Button>
      </form>
    </Form>
  );
}
