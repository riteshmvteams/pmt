"use client";

import React, { useState } from "react";
import {
  DndContext,
  closestCenter,
  MouseSensor,
  useSensor,
  useSensors,
} from "@dnd-kit/core";
import {
  arrayMove,
  SortableContext,
  useSortable,
  verticalListSortingStrategy,
} from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";
import {
  Cross1Icon,
  Cross2Icon,
  CubeIcon,
  DragHandleDots2Icon,
} from "@radix-ui/react-icons";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { routes } from "@/config/routes";
import { usePathname } from "next/navigation";

type Row = {
  id: number;
  name: string;
};

const DraggableRow = ({ id, name }: Row) => {
  const pathname = usePathname();
  const { attributes, listeners, setNodeRef, transform, transition } =
    useSortable({ id });

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
  };

  return (
    <div
      ref={setNodeRef}
      style={{
        ...style,
      }}
      {...attributes}
      className="flex items-center gap-1 group relative"
    >
      <span
        {...listeners}
        className="bg-primary/10 p-1 rounded-md group-hover:opacity-100 opacity-0 cursor-move"
      >
        <DragHandleDots2Icon className="text-muted-foreground" />
      </span>
      <Link
        href={routes.projectDetail(id)}
        className={cn(
          "flex items-center gap-2 rounded-lg py-2.5 text-muted-foreground transition-all group-hover:text-foreground flex-1 px-3",
          pathname?.startsWith(routes.projectDetail(id)) &&
            "bg-primary/10 text-foreground"
        )}
      >
        <CubeIcon className="h-[18px] w-[18px]" />
        {name}
      </Link>

      <button className="absolute right-2 opacity-0 group-hover:opacity-100">
        <Cross2Icon className="text-muted-foreground hover:text-foreground" />
      </button>
    </div>
  );
};

const RowDragAndDrop = () => {
  const [rows, setRows] = useState<Row[]>([
    { id: 1, name: "Project 1" },
    { id: 2, name: "Project 2" },
    { id: 3, name: "Project 3" },
    { id: 4, name: "Project 4" },
    { id: 5, name: "Project 5" },
  ]);

  const sensors = useSensors(useSensor(MouseSensor));

  const handleDragEnd = (event: any) => {
    const { active, over } = event;

    if (active.id !== over.id) {
      setRows((prevRows) => {
        const oldIndex = prevRows.findIndex((row) => row.id === active.id);
        const newIndex = prevRows.findIndex((row) => row.id === over.id);

        return arrayMove(prevRows, oldIndex, newIndex);
      });
    }
  };

  return (
    <DndContext
      sensors={sensors}
      collisionDetection={closestCenter}
      onDragEnd={handleDragEnd}
    >
      <SortableContext items={rows} strategy={verticalListSortingStrategy}>
        {rows.map((row) => (
          <DraggableRow key={row.id} id={row.id} name={row.name} />
        ))}
      </SortableContext>
    </DndContext>
  );
};

export default RowDragAndDrop;
