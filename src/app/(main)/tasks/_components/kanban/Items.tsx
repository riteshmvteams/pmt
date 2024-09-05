import { UniqueIdentifier } from "@dnd-kit/core";
import { useSortable } from "@dnd-kit/sortable";
import React from "react";
import { CSS } from "@dnd-kit/utilities";
import { DragHandleDots2Icon } from "@radix-ui/react-icons";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { routes } from "@/config/routes";
import { taskActions } from "../columns";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import { EllipsisVertical, ShoppingBasket } from "lucide-react";
import CustomTooltip from "@/components/shared/CustomTooltip";

type ItemsType = {
  id: UniqueIdentifier;
  title: string;
};

const Items = ({ id, title }: ItemsType) => {
  const {
    attributes,
    listeners,
    setNodeRef,
    transform,
    transition,
    isDragging,
  } = useSortable({
    id: id,
    data: {
      type: "item",
    },
  });

  return (
    <div
      ref={setNodeRef}
      {...attributes}
      style={{
        transition,
        transform: CSS.Translate.toString(transform),
      }}
      className={cn(
        "bg-background w-full px-2 py-2 hover:ring-1 rounded-sm",
        isDragging && "opacity-30 bg-green-100"
      )}
    >
      <div className="flex justify-between w-full group h-full min-h-28">
        <div className="flex flex-col justify-between gap-2">
          <div className="flex flex-col gap-2">
            <Link href={routes.taskDetail(1)} className="font-lexend text-sm">
              {title}
            </Link>

            <h3 className="text-sm text-muted-foreground">Project Name Test</h3>
          </div>
          <CustomTooltip title="Assigned to Super Admin">
            <div className="flex items-center gap-2">
              <Avatar className="w-6 h-6">
                <AvatarImage src="https://github.com/shadcn.png" alt="Super" />
                <AvatarFallback className="text-[10px]">CN</AvatarFallback>
              </Avatar>
              <p className="text-[13px] font-lexend text-muted-foreground font-light">
                Super Admin
              </p>
            </div>
          </CustomTooltip>
        </div>
        <div className="flex flex-col justify-between">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button
                variant="ghost"
                className="h-8 w-8 p-0 opacity-0 group-hover:opacity-100"
              >
                <span className="sr-only">Open menu</span>
                <EllipsisVertical className="h-4 w-4" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="start" side="left" className="w-56">
              {taskActions?.map((action, index) => {
                return action.icon ? (
                  <DropdownMenuItem
                    key={index}
                    className="py-1.5 cursor-pointer"
                  >
                    <action.icon className="mr-3 h-[14px] w-[14px]" />
                    <span className="text-[13px]">{action.title}</span>
                  </DropdownMenuItem>
                ) : (
                  <DropdownMenuSeparator
                    className="my-1 bg-primary/20"
                    key={index}
                  />
                );
              })}
            </DropdownMenuContent>
          </DropdownMenu>
          <CustomTooltip title="Drag and Drop">
            <button
              className="p-1.5 rounded-md bg-muted hover:cursor-move hover:bg-primary hover:text-primary-foreground duration-300 w-max"
              {...listeners}
            >
              <DragHandleDots2Icon />
            </button>
          </CustomTooltip>
        </div>
      </div>
    </div>
  );
};

export default Items;

export const ItemNotAvailable = () => {
  return (
    <div className="bg-background min-h-32 text-muted-foreground flex flex-col gap-2 items-center justify-center text-sm font-lexend">
      <ShoppingBasket className="h-10 w-10" />
      <span>Item Not Available</span>
    </div>
  );
};
