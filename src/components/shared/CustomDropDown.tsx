import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import { EllipsisVertical } from "lucide-react";
import { cn } from "@/lib/utils";

interface Props {
  actions: {
    title: string;
    icon?: any;
    target?: string;
  }[];
  className?: string;
}

export default function CustomDropDown({ actions, className }: Props) {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" className="h-8 w-8 p-0">
          <span className="sr-only">Open menu</span>
          <EllipsisVertical className="h-4 w-4" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent
        align="start"
        side="left"
        className={cn("w-56", className)}
      >
        {actions?.map((action, index) => {
          return action.icon ? (
            <DropdownMenuItem key={index} className="py-1.5 cursor-pointer">
              <action.icon className="mr-3 h-[14px] w-[14px]" />
              <span className="text-[13px]">{action.title}</span>
            </DropdownMenuItem>
          ) : (
            <DropdownMenuSeparator className="my-1 bg-primary/20" key={index} />
          );
        })}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
