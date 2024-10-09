"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { useState } from "react";
import {
  Edit,
  Globe,
  IdCard,
  LockKeyhole,
  Mail,
  ScanFace,
  User,
} from "lucide-react";

import { login } from "@/actions/login";
import { user } from "@/config/site";
import { Form } from "@/components/ui/form";
import { Button } from "@/components/ui/button";
import { loginFormSchema, LoginInputType } from "@/lib/schemas/login.schema";
import CustomInputField from "@/components/shared/CustomInputField";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Title from "@/components/shared/Title";
import Text from "@/components/shared/Text";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { getRoleBadge } from "@/components/shared/userTable/columns";

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

              <div className="flex gap-4 items-start">
                <Title className="w-28 text-muted-foreground">
                  Profile Image:
                </Title>
                <div>
                  <Avatar className="w-20 h-20">
                    <AvatarImage
                      src="https://github.com/shadcn.png"
                      alt="@shadcn"
                    />
                    <AvatarFallback>CN</AvatarFallback>
                  </Avatar>
                </div>
              </div>

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
    <div className="w-1/3 border rounded-lg overflow-hidden">
      <div className="flex flex-col">
        <div className="flex p-4 gap-4 items-start bg-primary/5 relative">
          <Avatar className="h-20 w-20 ring ring-ring ring-offset-2 rounded-2xl">
            <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
          <div className="flex flex-col">
            <Title className="text-xl">John Doe</Title>
            <span className="text-sm font-lexend text-muted-foreground pl-0.5">
              johndoe@gmail.com
            </span>
          </div>

          <Button
            variant="outline"
            size="icon"
            className="absolute top-2 right-2 active:translate-y-0.5"
            onClick={() => setEdit(true)}
          >
            <Edit className="h-4 w-4" />
          </Button>
        </div>

        <div className="p-4 flex flex-col gap-4">
          <Title>User Details:</Title>

          <div className="grid gap-2.5">
            <div className="flex items-center gap-2">
              <div className="flex items-center gap-1 min-w-[100px] text-muted-foreground">
                <User className="h-[14px] w-[14px]" />
                <Title className="text-[13px] font-normal">Name:</Title>
              </div>
              <Text className="text-[13px]">John Doe</Text>
            </div>
            <div className="flex items-center gap-2">
              <div className="flex items-center gap-1 min-w-[100px] text-muted-foreground">
                <IdCard className="h-[14px] w-[14px]" />
                <Title className="text-[13px] font-normal">Short Name:</Title>
              </div>
              <Text className="text-[13px]">John</Text>
            </div>
            <div className="flex items-center gap-2">
              <div className="flex items-center gap-1 min-w-[100px] text-muted-foreground">
                <Mail className="h-[14px] w-[14px]" />
                <Title className="text-[13px] font-normal">Email:</Title>
              </div>
              <Text className="text-[13px]">johndoe@gmail.com</Text>
            </div>
            <div className="flex items-center gap-2">
              <div className="flex items-center gap-1 min-w-[100px] text-muted-foreground">
                <Globe className="h-[14px] w-[14px]" />
                <Title className="text-[13px] font-normal">Time Zone:</Title>
              </div>
              <Text className="text-[13px]">
                Chennai, Kolkata, Mumbai, New Delhi
              </Text>
            </div>
            <div className="flex items-center gap-2">
              <div className="flex items-center gap-1 min-w-[100px] text-muted-foreground">
                <LockKeyhole className="h-[14px] w-[14px]" />
                <Title className="text-[13px] font-normal">Last Login:</Title>
              </div>
              <Text className="text-[13px]">Apr 03, Wed 12:42 pm</Text>
            </div>
            <div className="flex items-center gap-2">
              <div className="flex items-center gap-1 min-w-[100px] text-muted-foreground">
                <ScanFace className="h-[14px] w-[14px]" />
                <Title className="text-[13px] font-normal">Role:</Title>
              </div>
              {getRoleBadge("Owner")}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
