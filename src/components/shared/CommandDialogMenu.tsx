"use client";

import * as React from "react";
import {
  CalendarIcon,
  FaceIcon,
  FilePlusIcon,
  GearIcon,
  RocketIcon,
} from "@radix-ui/react-icons";

import {
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
} from "@/components/ui/command";
import { Search } from "lucide-react";
import { Input } from "../ui/input";
import Link from "next/link";
import { routes } from "@/config/routes";
import { useRouter } from "next/navigation";
import { DialogTitle } from "../ui/dialog";

export function CommandDialogMenu() {
  const [open, setOpen] = React.useState(false);
  const { push } = useRouter();

  React.useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if (e.key === "j" && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        setOpen((open) => !open);
      }
    };

    document.addEventListener("keydown", down);
    return () => document.removeEventListener("keydown", down);
  }, []);

  return (
    <>
      <form className="flex-1">
        <div className="relative w-full md:w-2/3 lg:w-1/3">
          <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
          <Input
            type="search"
            placeholder="Search Projects..."
            className="w-full appearance-none bg-background pl-8 shadow-none"
            onFocus={() => setOpen(true)}
          />
          <div className="absolute right-2 top-1/2 -translate-y-1/2">
            <p className="text-xs font-medium text-muted-foreground">
              Press{" "}
              <kbd className="pointer-events-none inline-flex h-5 select-none items-center gap-1 rounded border bg-muted px-1.5 font-mono text-[10px] font-medium text-muted-foreground opacity-100">
                <span className="text-xs">⌘</span>J
              </kbd>
            </p>
          </div>
        </div>
      </form>

      <CommandDialog open={open} onOpenChange={setOpen}>
        <CommandInput placeholder="Type to search..." />
        <CommandList className="max-h-[400px] scrollbar">
          <CommandEmpty>No results found.</CommandEmpty>
          <DialogTitle></DialogTitle>
          <CommandGroup heading="Recent Projects">
            {Array.from({ length: 4 }).map((_, i) => (
              <CommandItem
                key={i}
                onSelect={() => {
                  setOpen(false);
                  push(routes?.projectDetail(1));
                }}
                asChild
                className="cursor-pointer data-[selected='true']:bg-primary/10 dark:data-[selected='true']:bg-accent"
              >
                <Link href={routes?.projectDetail(1)}>
                  <FilePlusIcon className="mr-2 h-4 w-4" />
                  <span className="text-sm">Test Project {i + 1}</span>
                </Link>
              </CommandItem>
            ))}
          </CommandGroup>
          <CommandSeparator />
          <CommandGroup heading="Suggestions">
            <CommandItem
              onSelect={() => setOpen(false)}
              className="data-[selected='true']:bg-primary/10 dark:data-[selected='true']:bg-accent"
            >
              <CalendarIcon className="mr-2 h-4 w-4" />
              <span>Calendar</span>
            </CommandItem>
            <CommandItem
              onSelect={() => setOpen(false)}
              className="data-[selected='true']:bg-primary/10 dark:data-[selected='true']:bg-accent"
            >
              <FaceIcon className="mr-2 h-4 w-4" />
              <span>Search Emoji</span>
            </CommandItem>
            <CommandItem
              onSelect={() => setOpen(false)}
              className="data-[selected='true']:bg-primary/10 dark:data-[selected='true']:bg-accent"
            >
              <RocketIcon className="mr-2 h-4 w-4" />
              <span>Launch</span>
            </CommandItem>
          </CommandGroup>
          <CommandSeparator />
          <CommandGroup heading="Settings">
            <CommandItem
              onSelect={() => {
                push(routes?.personalSettings?.profile);
                setOpen(false);
              }}
              className="cursor-pointer data-[selected='true']:bg-primary/10 dark:data-[selected='true']:bg-accent"
              asChild
            >
              <Link href={routes?.personalSettings?.profile}>
                <GearIcon className="mr-2 h-4 w-4" />
                <span>Personal Settings</span>
              </Link>
            </CommandItem>
            <CommandItem
              onSelect={() => {
                push(routes?.companySettings?.myCompany);
                setOpen(false);
              }}
              className="cursor-pointer data-[selected='true']:bg-primary/10 dark:data-[selected='true']:bg-accent"
              asChild
            >
              <Link href={routes?.companySettings?.myCompany}>
                <GearIcon className="mr-2 h-4 w-4" />
                <span>Company Settings</span>
              </Link>
            </CommandItem>
          </CommandGroup>
        </CommandList>
      </CommandDialog>
    </>
  );
}
