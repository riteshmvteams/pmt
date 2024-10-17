"use client";

import {
  AlarmClockPlus,
  CircleX,
  Clock,
  Filter,
  ReceiptText,
} from "lucide-react";

import { ModalTitle } from "@/components/sidebar/CreateNew";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { useModal } from "@/store/useModal";
import { useDrawer } from "@/store/useDrawer";
import AddTime from "../addThings/AddTime";
import Text from "../Text";
import TimeFiltering from "./TimeFiltering";

export default function TimeLogStats() {
  return (
    <div className="flex justify-between items-center">
      <div className="flex items-center gap-[15px]">
        <Badge className="bg-muted hover:bg-muted gap-1 py-0.5">
          <Clock className="h-[14px] w-[14px] text-muted-foreground" />{" "}
          <Text className="text-xs text-muted-foreground font-normal">
            Logged: <span className="text-foreground">155 hrs.</span>
          </Text>
        </Badge>
        <Badge className="bg-muted hover:bg-muted gap-1 py-0.5">
          <ReceiptText className="h-[14px] w-[14px] text-muted-foreground" />{" "}
          <Text className="text-xs text-muted-foreground font-normal">
            Billable: <span className="text-foreground">110 hrs.</span>
          </Text>
        </Badge>
        <Badge className="bg-muted hover:bg-muted gap-1 py-0.5">
          <CircleX className="h-[14px] w-[14px] text-muted-foreground" />{" "}
          <Text className="text-xs text-muted-foreground font-normal">
            Non-Billable: <span className="text-foreground">45 hrs.</span>
          </Text>
        </Badge>
      </div>
    </div>
  );
}

export const TimeLogAddFilter = () => {
  const { setChildren, setClassName, setOpen, setTitle } = useModal();
  const {
    setDrawerChildren,
    setDrawerClassName,
    setDrawerOpen,
    setDrawerTitle,
    setSide,
  } = useDrawer();
  return (
    <div className="flex gap-2 items-center">
      <Button
        variant="outline"
        className="gap-2 font-lexend"
        onClick={() => {
          setDrawerTitle("Filter");
          setDrawerChildren(<TimeFiltering />);
          setDrawerOpen(true);
          setSide("right");
          setDrawerClassName("");
        }}
      >
        <Filter className="h-4 w-4 text-muted-foreground" /> Filter
      </Button>

      <Button
        className="font-lexend gap-1 active:scale-95"
        onClick={() => {
          setTitle(<ModalTitle Icon={AlarmClockPlus} title="Log Your Time" />);
          setChildren(<AddTime />);
          setClassName("max-w-[1100px]");
          setOpen(true);
        }}
      >
        <AlarmClockPlus className="h-4 w-4 text-primary-foreground" /> Add Time
      </Button>
    </div>
  );
};
