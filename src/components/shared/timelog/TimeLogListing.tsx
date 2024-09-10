import React from "react";

import { formatDateWithWeekday } from "@/lib/helpers";
import Title from "../Title";

import Image from "next/image";
import Link from "next/link";
import {
  Edit,
  File,
  Home,
  LineChart,
  ListFilter,
  MoreHorizontal,
  Package,
  Package2,
  PanelLeft,
  PlusCircle,
  RefreshCcwDot,
  Search,
  Settings,
  ShoppingCart,
  Trash2,
  Users2,
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Input } from "@/components/ui/input";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import CustomTooltip from "../CustomTooltip";
export const description =
  "An products dashboard with a sidebar navigation. The sidebar has icon navigation. The content area has a breadcrumb and search in the header. It displays a list of products in a table with actions.";

export default function TimeLogListing() {
  return (
    <div className="flex flex-col gap-10 min-w-[1200px] overflow-y-auto">
      {Array.from({ length: 10 })?.map((_, ind) => {
        return (
          <div key={ind} className="flex flex-col gap-3">
            <Title className="text-base tracking-tight">
              {formatDateWithWeekday(new Date())}
            </Title>

            <div className="grid grid-cols-12 gap-x-1">
              <div className="flex flex-col bg-primary/5">
                <div className="bg-primary/20 p-4 font-lexend text-sm font-semibold tracking-wide">
                  User Name
                </div>
                <div className=" p-4 font-lexend text-sm font-light">
                  Super Admin
                </div>
              </div>
              <div className="flex flex-col bg-primary/5 col-span-3">
                <div className="bg-primary/20 p-4 font-lexend text-sm font-semibold tracking-wide">
                  Task Description
                </div>
                <div className=" p-4 font-lexend text-sm font-light">
                  Testing time log
                </div>
              </div>
              <div className="flex flex-col bg-primary/5 col-span-3">
                <div className="bg-primary/20 p-4 font-lexend text-sm font-semibold tracking-wide">
                  Task Name
                </div>
                <div className=" p-4 font-lexend text-sm font-light">N/A</div>
              </div>
              <div className="flex flex-col bg-primary/5">
                <div className="bg-primary/20 p-4 font-lexend text-sm font-semibold tracking-wide">
                  Start Time
                </div>
                <div className=" p-4 font-lexend text-sm font-light">
                  09:00 AM
                </div>
              </div>
              <div className="flex flex-col bg-primary/5">
                <div className="bg-primary/20 p-4 font-lexend text-sm font-semibold tracking-wide">
                  End Time
                </div>
                <div className=" p-4 font-lexend text-sm font-light">
                  06:00 PM
                </div>
              </div>
              <div className="flex flex-col bg-primary/5">
                <div className="bg-primary/20 p-4 font-lexend text-sm font-semibold tracking-wide">
                  Spent Time
                </div>
                <div className=" p-4 font-lexend text-sm font-light">
                  09 hrs
                </div>
              </div>
              <div className="flex flex-col bg-primary/5">
                <div className="bg-primary/20 p-4 font-lexend text-sm font-semibold tracking-wide">
                  Billable
                </div>
                <div className=" p-4 font-lexend text-sm font-light">Yes</div>
              </div>
              <div className="flex flex-col bg-primary/5">
                <div className="bg-primary/20 p-4 font-lexend text-sm font-semibold tracking-wide">
                  Actions
                </div>
                <div className=" p-4 font-lexend text-sm font-light">
                  <div className="flex items-center gap-2">
                    <CustomTooltip title="Edit">
                      <Button
                        size={"icon"}
                        variant={"outline"}
                        className="h-6 w-6"
                      >
                        <Edit className="w-[14px] h-[14px]" />
                      </Button>
                    </CustomTooltip>
                    <CustomTooltip title="Delete">
                      <Button
                        size={"icon"}
                        variant={"outline"}
                        className="h-6 w-6"
                      >
                        <Trash2 className="w-[14px] h-[14px]" />
                      </Button>
                    </CustomTooltip>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
