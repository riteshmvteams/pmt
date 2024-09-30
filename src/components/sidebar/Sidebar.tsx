import { Bell } from "lucide-react";

import Logo from "../shared/Logo";
import { Button } from "../ui/button";
import DesktopMenu from "./DesktopMenu";
import { routes } from "@/config/routes";
import NotificationDialog from "./NotificationDialog";

export default function Sidebar() {
  return (
    <div className="flex h-full max-h-screen flex-col gap-2">
      <div className="flex h-14 items-center border-b px-4 lg:h-[60px] lg:px-6">
        <Logo url={routes.projects} />
        <NotificationDialog>
          <Button variant="outline" size="icon" className="ml-auto h-8 w-8">
            <Bell className="h-4 w-4" />
            <span className="sr-only">Toggle notifications</span>
          </Button>
        </NotificationDialog>
      </div>
      <DesktopMenu />
    </div>
  );
}
