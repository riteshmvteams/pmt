"use client";

import React from "react";
import { Pencil } from "lucide-react";

import { Checkbox } from "@/components/ui/checkbox";
import { useModal } from "@/store/useModal";
import { AddTaskTypeForm } from "./AddTaskType";

type Props = {
  custom: {
    id: number;
    name: string;
    short_name: string;
    tasks: number;
  };
};

export default function TasktypeListing({ custom }: Props) {
  const { setChildren, setClassName, setOpen, setTitle } = useModal();
  return (
    <li className="flex items-center gap-2 group">
      <Checkbox id={`${custom?.name}${custom?.id}`} />
      <label
        htmlFor={`${custom?.name}${custom?.id}`}
        className="text-sm font-lexend text-muted-foreground select-none"
      >
        {custom?.name} ({custom?.short_name}) -{" "}
        <span className="text-primary">{custom?.tasks}</span>
      </label>
      <button
        className="text-muted-foreground hover:text-primary opacity-0 group-hover:opacity-100 duration-300"
        onClick={() => {
          setOpen(true);
          setTitle("New Task Type");
          setClassName("max-w-[600px]");
          setChildren(<AddTaskTypeForm />);
        }}
      >
        <Pencil className="w-[14px] h-[14px] " />
      </button>
    </li>
  );
}
