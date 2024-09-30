import Link from "next/link";
import { usePathname } from "next/navigation";
import { Bell } from "lucide-react";

import { cn } from "@/lib/utils";
import { NAVIGATION_MENUS } from "@/config/menu";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { Button } from "@/components/ui/button";
import NotificationDialog from "../sidebar/NotificationDialog";

const IconSidebar = () => {
  const pathname = usePathname();
  return (
    <div className="flex h-full max-h-screen flex-col gap-2">
      <div className="flex h-14 items-center justify-center border-b lg:h-[60px] px-4 font-semibold">
        Logo
      </div>
      <div className="flex-1 flex flex-col">
        <nav className="flex flex-col gap-0.5 items-center">
          {NAVIGATION_MENUS?.map((menu) => {
            return (
              menu?.href &&
              menu?.icon && (
                <TooltipProvider key={menu.id} delayDuration={0}>
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <Button
                        variant="ghost"
                        size="icon"
                        className={cn(
                          "rounded-lg h-12 w-12 text-muted-foreground hover:text-foreground",
                          pathname?.startsWith(menu.href) &&
                            "bg-primary/10 text-foreground"
                        )}
                        aria-label="Models"
                        asChild
                      >
                        <Link href={menu.href}>
                          <menu.icon className="size-6" />
                        </Link>
                      </Button>
                    </TooltipTrigger>
                    <TooltipContent
                      align="center"
                      side="right"
                      sideOffset={10}
                      className={cn("text-sm font-lexend font-normal")}
                    >
                      {menu?.title}
                    </TooltipContent>
                  </Tooltip>
                </TooltipProvider>
              )
            );
          })}
        </nav>

        <div className="mt-auto flex items-center justify-center py-6">
          <TooltipProvider delayDuration={0}>
            <Tooltip>
              <NotificationDialog align="start">
                <TooltipTrigger asChild>
                  <Button
                    variant="ghost"
                    size="icon"
                    className={cn(
                      "rounded-lg h-12 w-12 text-muted-foreground hover:text-foreground"
                    )}
                    aria-label="Models"
                  >
                    <Bell className="size-6" />
                  </Button>
                </TooltipTrigger>
              </NotificationDialog>
              <TooltipContent
                align="center"
                side="right"
                className={cn("text-xs font-lexend font-normal")}
              >
                Notifications
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
        </div>
      </div>
    </div>
  );
};

export default IconSidebar;
