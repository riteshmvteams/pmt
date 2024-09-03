import { CaretSortIcon } from "@radix-ui/react-icons";
import { CreditCard, User } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export default function MilestoneFilter() {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" className="gap-2">
          Filters <CaretSortIcon />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56">
        <DropdownMenuGroup>
          <DropdownMenuItem className="cursor-pointer py-2">
            <User className="mr-2 h-4 w-4" />
            <span>Active</span>
          </DropdownMenuItem>
          <DropdownMenuItem className="cursor-pointer py-2">
            <CreditCard className="mr-2 h-4 w-4" />
            <span>Completed</span>
          </DropdownMenuItem>
        </DropdownMenuGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
