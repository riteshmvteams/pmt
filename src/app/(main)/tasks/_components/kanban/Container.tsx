import React, { useState } from "react";
import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";
import clsx from "clsx";
import { Button } from "@/components/ui/button";

import { UniqueIdentifier } from "@dnd-kit/core";
import { ChevronDown, Plus } from "lucide-react";
import CustomTooltip from "@/components/shared/CustomTooltip";
import { cn } from "@/lib/utils";

export interface ContainerProps {
  id: UniqueIdentifier;
  children: React.ReactNode;
  title?: string;
  description?: string;
  onAddItem?: () => void;
}

const Container = ({
  id,
  children,
  title,
  description,
  onAddItem,
}: ContainerProps) => {
  const [isOpen, setIsOpen] = useState(true);
  const {
    attributes,
    setNodeRef,
    listeners,
    transform,
    transition,
    isDragging,
  } = useSortable({
    id: id,
    data: {
      type: "container",
    },
  });
  return (
    <div
      {...attributes}
      ref={setNodeRef}
      style={{
        transition,
        transform: CSS.Translate.toString(transform),
      }}
      className={clsx(
        "w-full h-max py-4 px-3 flex flex-col gap-y-4 border bg-muted max-h-[650px] scrollbar overflow-y-auto",
        isDragging && "opacity-50"
      )}
    >
      <div className="flex items-center justify-between">
        <div className="flex flex-col gap-y-1 w-full">
          <div className="flex items-center justify-between w-full">
            <h1 className="text-md font-lexend">{title}</h1>
            <div className="flex gap-2">
              <CustomTooltip title="Toggle Column">
                <Button
                  variant="outline"
                  className="h-max px-2"
                  onClick={() => setIsOpen((prev) => !prev)}
                >
                  <ChevronDown className="h-4 w-4" />
                </Button>
              </CustomTooltip>
              {title?.toLowerCase() === "open" && (
                <CustomTooltip title="Add Task">
                  <Button
                    variant="outline"
                    className="h-max px-2"
                    onClick={onAddItem}
                  >
                    <Plus className="h-4 w-4" />
                  </Button>
                </CustomTooltip>
              )}
            </div>
          </div>
        </div>
      </div>

      <div className={cn(" flex-col gap-y-4", isOpen ? "flex" : "hidden")}>
        {children}
        {title?.toLowerCase() === "open" && (
          <CustomTooltip title="Add Task">
            <Button
              onClick={onAddItem}
              variant="outline"
              className="text-primary hover:bg-background w-full"
            >
              <Plus />
            </Button>
          </CustomTooltip>
        )}
      </div>
    </div>
  );
};

export default Container;
