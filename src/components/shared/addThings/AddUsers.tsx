"use client";

import { Form } from "@/components/ui/form";
import { useForm } from "react-hook-form";
import { loginFormSchema, LoginInputType } from "@/lib/schemas/login.schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { Textarea } from "@/components/ui/textarea";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import CustomUserAvatar from "../CustomUserAvatar";
import { getRoleBadge } from "../userTable/columns";
import Title from "../Title";

export default function AddUsers() {
  const form = useForm<LoginInputType>({
    resolver: zodResolver(loginFormSchema),
  });

  function onSubmit(data: LoginInputType) {
    console.log(data, "data==>");
  }
  return (
    <div className="p-4">
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-10">
          <div>
            <label
              htmlFor="message"
              className="mb-1 inline-block font-lexend text-sm"
            >
              Emails
            </label>
            <Textarea placeholder="Enter Email Ids..." id="message" />
            <span className="text-xs tracking-wide font-medium">
              (Use comma to separate multiple email ids)
            </span>
          </div>

          <div className="bg-background flex flex-col gap-3">
            <div className="flex flex-col gap-1">
              <Title>Project to be assigned:</Title>
              <Input placeholder="Search Users..." className="mr-2" />
            </div>

            <div className="flex flex-col border rounded-md scrollbar overflow-y-auto">
              {Array.from({ length: 10 }).map((_, i) => {
                return (
                  <label
                    tabIndex={0}
                    key={i}
                    className="px-4 py-3 hover:bg-primary/10 cursor-pointer border-b last:border-b-0 flex justify-between items-center"
                  >
                    <div className="flex items-center gap-4">
                      <Checkbox />
                      <Title className="text-[13px] font-medium font-sans">
                        New Project Add {i + 1}
                      </Title>
                    </div>
                  </label>
                );
              })}
            </div>
          </div>
        </form>
      </Form>
    </div>
  );
}
