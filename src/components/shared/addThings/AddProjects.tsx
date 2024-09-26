"use client";

import { useTabs } from "@/hooks/useTabs";
import { UserPen } from "lucide-react";
import { useState } from "react";
import { FramerLayout } from "../tabs/framer-layout";
import { Input } from "@/components/ui/input";
import CustomUserAvatar from "../CustomUserAvatar";
import { Checkbox } from "@/components/ui/checkbox";
import { Button } from "@/components/ui/button";
import { Form } from "@/components/ui/form";
import { useForm } from "react-hook-form";
import { loginFormSchema, LoginInputType } from "@/lib/schemas/login.schema";
import { zodResolver } from "@hookform/resolvers/zod";
import CustomInputField from "../CustomInputField";
import { Textarea } from "@/components/ui/textarea";
import { getRoleBadge } from "../userTable/columns";

export default function AddProjects() {
  const form = useForm<LoginInputType>({
    resolver: zodResolver(loginFormSchema),
  });

  function onSubmit(data: LoginInputType) {
    console.log(data, "data==>");
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)}>
        <div className="p-4">
          <div className="mb-6 flex flex-col gap-4">
            <CustomInputField
              form={form}
              name="name"
              label="Project Name"
              type="text"
              placeholder="Enter Project Name.."
              className="space-y-0.5"
            />
            <CustomInputField
              form={form}
              name="name"
              label="Short Name"
              type="text"
              placeholder="Enter Short Name.."
              className="space-y-0.5"
            />
          </div>

          <AddUserInProjectTabs />

          <div className="flex justify-center gap-3 items-center mt-6">
            <Button
              variant="outline"
              type="button"
              className="px-10 font-lexend"
            >
              Cancel
            </Button>
            <Button type="submit" className="px-10 font-lexend">
              Create
            </Button>
          </div>
        </div>
      </form>
    </Form>
  );
}

export const AddUserInProjectTabs = () => {
  const [hookProps] = useState({
    tabs: [
      {
        label: "Existing Users",
        icon: <UserPen className="h-4 w-4 mr-1.5" />,
        id: "Existing",
        children: <ExistingUsers />,
      },
      {
        label: "New Users",
        icon: <UserPen className="h-4 w-4 mr-1.5" />,
        id: "New",
        children: <NewUsers />,
      },
    ],
    initialTabId: "Profile",
  });
  const framer = useTabs(hookProps);
  return (
    <>
      <div className="flex-1 border-b">
        <FramerLayout.Tabs {...framer.tabProps} className="justify-start" />
      </div>
      <div className="flex-1 mt-4">
        <FramerLayout.Content {...framer.contentProps}>
          {framer.selectedTab.children}
        </FramerLayout.Content>
      </div>
    </>
  );
};

export const ExistingUsers = () => {
  return (
    <div className="">
      <div className="bg-background flex flex-col gap-3">
        <div className="flex items-center">
          <Input placeholder="Search Users..." />
        </div>

        <div className="flex flex-col border rounded-md scrollbar overflow-y-auto">
          {Array.from({ length: 10 }).map((_, i) => {
            return (
              <label
                tabIndex={0}
                key={i}
                className="px-4 py-3 hover:bg-primary/5 cursor-pointer border-b last:border-b-0 flex justify-between items-center"
              >
                <div className="flex items-center gap-2">
                  <Checkbox />
                  <CustomUserAvatar
                    title="Super Admin"
                    subTitle="super@admin.com"
                  />
                </div>
                <div>
                  {getRoleBadge(
                    i === 0 ? "owner" : i === 2 ? "super-admin" : "user"
                  )}
                </div>
              </label>
            );
          })}
        </div>
      </div>
    </div>
  );
};

const NewUsers = () => {
  return (
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
  );
};
