import { UniqueIdentifier } from "@dnd-kit/core";
import { useSortable } from "@dnd-kit/sortable";
import React from "react";
import { CSS } from "@dnd-kit/utilities";
import clsx from "clsx";
import {
  DragHandleDots1Icon,
  DragHandleDots2Icon,
} from "@radix-ui/react-icons";
import { cn } from "@/lib/utils";

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
        "bg-muted w-full px-2 py-4 hover:ring rounded-lg",
        isDragging && "opacity-30"
      )}
      // className={clsx(
      //   "px-2 py-4 bg-white shadow-md rounded-xl w-full border border-transparent hover:border-gray-200 cursor-pointer",
      //   isDragging && "opacity-50"
      // )}
    >
      <div className="flex items-center justify-between">
        {title}
        <button
          className="p-1.5 rounded-md bg-background hover:cursor-move hover:bg-primary hover:text-primary-foreground duration-300"
          {...listeners}
        >
          <DragHandleDots2Icon />
        </button>
      </div>
    </div>
  );
};

export default Items;
