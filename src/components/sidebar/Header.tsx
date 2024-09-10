import { Search } from "lucide-react";

import MobileMenu from "./MobileMenu";
import { Input } from "../ui/input";
import UserAccount from "./UserAccount";
import CreateNew from "./CreateNew";
import ThemeSettings from "./ThemeSettings";
import SidebarToogle from "./SidebarToogle";

export default function Header() {
  return (
    <header className="flex h-14 items-center gap-4 border-b bg-muted/40 px-4 lg:h-[60px] lg:px-6 sticky top-0 z-20">
      <MobileMenu />
      <div className="w-full flex-1 flex items-center gap-2">
        <SidebarToogle />
        <form className="flex-1">
          <div className="relative">
            <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
            <Input
              type="search"
              placeholder="Search Projects..."
              className="w-full appearance-none bg-background pl-8 shadow-none md:w-2/3 lg:w-1/3"
            />
          </div>
        </form>
      </div>
      <CreateNew />
      <ThemeSettings />
      <UserAccount />
    </header>
  );
}
