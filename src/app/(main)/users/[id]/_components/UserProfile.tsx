import ConfirmationPopover from "@/components/shared/ConfirmationPopover";
import Text from "@/components/shared/Text";
import Title from "@/components/shared/Title";
import { getRoleBadge } from "@/components/shared/userTable/columns";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { PopoverClose } from "@/components/ui/popover";
import {
  Check,
  Globe,
  IdCard,
  LockKeyhole,
  Mail,
  ScanFace,
  Trash2,
  User,
  X,
} from "lucide-react";

export default function UserProfile() {
  return (
    <div className="w-1/3 border rounded-lg overflow-hidden">
      <div className="flex flex-col">
        <div className="flex justify-between bg-primary/5 items-start p-4 ">
          <div className="flex gap-4 items-start ">
            <Avatar className="h-20 w-20 ring ring-ring ring-offset-2 rounded-2xl">
              <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
            <div className="flex flex-col">
              <Title className="text-xl">John Doe</Title>
              <span className="font-light text-sm font-lexend text-muted-foreground pl-0.5">
                johndoe@gmail.com
              </span>
            </div>
          </div>
          <ConfirmationPopover
            trigger={
              <Button
                variant="outline"
                size="icon"
                className="bg-red-500 text-white border-red-500 active:translate-y-0.5"
              >
                <Trash2 className="h-4 w-4" />
              </Button>
            }
          >
            <div className="flex flex-col gap-2 items-center">
              <span className="flex bg-red-100 w-12 h-12 rounded-full items-center justify-center">
                <Trash2 className="h-5 w-5 text-red-600" />
              </span>
              <Title className="font-normal text-center">
                Are You sure, You want to Delete this User ?
              </Title>

              <div className="flex items-center gap-3">
                <Button
                  variant="outline"
                  className="bg-green-500 text-white w-12 hover:bg-green-400 hover:text-white"
                  size="icon"
                >
                  <Check className="h-5 w-5" strokeWidth={2} />
                </Button>{" "}
                <PopoverClose asChild>
                  <Button
                    variant="outline"
                    className="bg-red-500 text-white w-12 hover:bg-red-400 hover:text-white"
                    size="icon"
                  >
                    <X className="h-5 w-5" strokeWidth={2} />
                  </Button>
                </PopoverClose>
              </div>
            </div>
          </ConfirmationPopover>
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
              {getRoleBadge("Super-Admin")}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
