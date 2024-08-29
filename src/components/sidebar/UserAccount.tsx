import {
  CircleUser,
  Cloud,
  CreditCard,
  Github,
  Keyboard,
  LifeBuoy,
  LogOut,
  Mail,
  MessageSquare,
  Plus,
  PlusCircle,
  Settings,
  User,
  UserPlus,
  Users,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { COMPANY_SETTINGS, PERSONAL_SETTINGS } from "@/config/menu";
import Link from "next/link";
import SignOut from "./SignOut";

export default function UserAccount() {
  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button variant="secondary" size="icon" className="rounded-full">
          <CircleUser className="h-5 w-5" />
          <span className="sr-only">Toggle user menu</span>
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-[600px]">
        <div className="border-b pb-6">
          <h3 className="text-lg font-semibold">My Account</h3>
        </div>
        <div className="grid grid-cols-2">
          <div>
            <h4 className="py-4">Personal Settings</h4>

            <div className="flex flex-col items-start">
              {PERSONAL_SETTINGS?.map((menu) => {
                return menu?.href ? (
                  <Link
                    key={menu?.id}
                    href={menu?.href}
                    className="py-2 px-4 rounded-md text-muted-foreground hover:bg-muted hover:text-primary text-sm tracking-wide"
                  >
                    {menu.title}
                  </Link>
                ) : (
                  <SignOut key={menu?.id} title={menu.title} />
                );
              })}
            </div>
          </div>
          <div>
            <h4 className="py-4">Company Settings</h4>

            <div className="flex flex-col items-start">
              {COMPANY_SETTINGS?.map((menu) => {
                return menu?.href ? (
                  <Link
                    key={menu?.id}
                    href={menu?.href}
                    className="py-2 px-4 rounded-md text-muted-foreground hover:bg-muted hover:text-primary text-sm tracking-wide"
                  >
                    {menu.title}
                  </Link>
                ) : (
                  <button
                    key={menu?.id}
                    className="py-2 px-4 rounded-md text-muted-foreground hover:bg-muted hover:text-primary text-sm tracking-wide"
                  >
                    {menu.title}
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      </PopoverContent>
    </Popover>
  );
}
