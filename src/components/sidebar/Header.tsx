import MobileMenu from "./MobileMenu";
import UserAccount from "./UserAccount";
import CreateNew from "./CreateNew";
import ThemeSettings from "./ThemeSettings";
import SidebarToogle from "./SidebarToogle";
import { CommandDialogMenu } from "../shared/CommandDialogMenu";

export default function Header() {
  return (
    <header className="flex h-14 items-center gap-4 border-b bg-muted/40 px-4 lg:h-[60px] lg:px-6 sticky top-0 z-20">
      <MobileMenu />
      <div className="w-full flex-1 flex items-center gap-2">
        <SidebarToogle />

        <CommandDialogMenu />
      </div>
      <CreateNew />
      <ThemeSettings />
      <UserAccount />
    </header>
  );
}
