"use client";

import { CaretSortIcon, CheckIcon } from "@radix-ui/react-icons";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command";
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
  useFormField,
} from "@/components/ui/form";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import React from "react";

const languages = [
  { label: "English", value: "en" },
  { label: "French", value: "fr" },
  { label: "German", value: "de" },
  { label: "Spanish", value: "es" },
  { label: "Portuguese", value: "pt" },
  { label: "Russian", value: "ru" },
  { label: "Japanese", value: "ja" },
  { label: "Korean", value: "ko" },
  { label: "Chinese", value: "zh" },
];

type Props = {
  className?: string;
  form: any;
  label?: string;
  labelClassName?: string;
  name?: string;
  options?: {
    label: string;
    value: string;
  }[];
};

export default function CustomMultiSelect({
  className,
  form,
  label,
  labelClassName,
  name = "language",
  options = languages,
}: Props) {
  return (
    <FormField
      control={form.control}
      name={name}
      render={({ field }) => (
        <FormItem className="flex flex-col relative">
          <FormLabel className={cn("font-lexend", labelClassName)}>
            {label}
          </FormLabel>
          <div className="relative">
            <Popover>
              <PopoverTrigger asChild>
                <FormControl>
                  <div>
                    <SelectTrigger field={field}>
                      {field.value
                        ? options.find((option) => option.value === field.value)
                            ?.label
                        : "Select ..."}
                      <CaretSortIcon className="ml-2 h-4 w-4 shrink-0" />
                    </SelectTrigger>
                  </div>
                </FormControl>
              </PopoverTrigger>
              <PopoverContent className={cn("w-[200px] p-0", className)}>
                <Command>
                  <CommandInput placeholder="Search ..." className="h-9" />
                  <CommandList>
                    <CommandEmpty>No data found.</CommandEmpty>
                    <CommandGroup>
                      {options.map((option) => (
                        <CommandItem
                          value={option.label}
                          key={option.value}
                          onSelect={() => {
                            form.setValue(name, option.value);
                          }}
                        >
                          {option.label}
                          <CheckIcon
                            className={cn(
                              "ml-auto h-4 w-4",
                              option.value === field.value
                                ? "opacity-100"
                                : "opacity-0"
                            )}
                          />
                        </CommandItem>
                      ))}
                    </CommandGroup>
                  </CommandList>
                </Command>
              </PopoverContent>
            </Popover>
          </div>
          <FormMessage />
        </FormItem>
      )}
    />
  );
}

function SelectTrigger({
  field,
  children,
}: {
  field: any;
  children: React.ReactNode;
}) {
  const { error } = useFormField();
  return (
    <Button
      variant="outline"
      role="combobox"
      className={cn(
        "w-full justify-between",
        !field.value && "text-muted-foreground",
        error ? "focus-visible:ring-destructive" : ""
      )}
      type="button"
    >
      {children}
    </Button>
  );
}
