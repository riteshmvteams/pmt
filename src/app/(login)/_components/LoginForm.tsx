"use client";

import Link from "next/link";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

import { login } from "@/actions/login";
import { user } from "@/config/site";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import { loginFormSchema, LoginInputType } from "@/lib/schemas/login.schema";

export default function LoginForm() {
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
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email</FormLabel>
              <FormControl>
                <Input placeholder="Enter your email" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="password"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                Password
              </FormLabel>
              <FormControl>
                <Input
                  placeholder="Enter your password"
                  type="password"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <div className="flex justify-between">
          <FormField
            control={form.control}
            name="remember"
            render={({ field }) => (
              <FormItem>
                <div className="flex gap-1.5 items-center">
                  <FormControl>
                    <Checkbox
                      checked={field.value}
                      onCheckedChange={field.onChange}
                    />
                  </FormControl>
                  <FormLabel className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                    Remember me
                  </FormLabel>
                </div>
                <FormMessage />
              </FormItem>
            )}
          />
          <Link
            href="/forgot-password"
            className="ml-auto inline-block text-sm underline"
          >
            Forgot your password?
          </Link>
        </div>
        <Button type="submit" className="w-full tracking-wider">
          LOGIN
        </Button>
      </form>
    </Form>
  );
}
