import React from "react";
import CustomAvatar from "./CustomAvatar";
import Title from "./Title";
import { formatDateWithWeekday } from "@/lib/helpers";
import PrivateTag from "./PrivateTag";
import CustomTooltip from "./CustomTooltip";
import { Button } from "../ui/button";
import { Edit, Trash2 } from "lucide-react";

export default function Comment() {
  return (
    <div className="flex items-start gap-4 bg-muted/30 p-4 rounded-lg border">
      <CustomAvatar />
      <div className="flex flex-col w-full gap-3">
        <div className="flex justify-between w-full items-center">
          <div>
            <Title className="text-sm font-normal mt-1">Ritesh Kumar</Title>
            <span className="text-xs font-light block">
              {formatDateWithWeekday(new Date())}
            </span>
          </div>
          <div className="flex items-center gap-2">
            <PrivateTag />
            <CustomTooltip title="Edit">
              <Button size={"icon"} variant={"outline"}>
                <Edit className="w-[14px] h-[14px]" />
              </Button>
            </CustomTooltip>
            <CustomTooltip title="Delete">
              <Button size={"icon"} variant={"outline"}>
                <Trash2 className="w-[14px] h-[14px]" />
              </Button>
            </CustomTooltip>
          </div>
        </div>

        <div className="text-[13px] font-lexend text-muted-foreground">
          Hard Drive Compatibility: Its possible that your laptops hard drive
          may not be fully compatible with Ubuntu. Check the Ubuntu community
          forums or Dell support forums to see if others with the same laptop
          model have encountered similar issues and if there are specific
          solutions or workarounds. Hard Drive Compatibility:
          <br />
          <br />
          Its possible that your laptops hard drive may not be fully compatible
          with Ubuntu. Check the Ubuntu community forums or Dell support forums
          to see if others with the same laptop model have encountered similar
          issues and if there are specific solutions or workarounds.
        </div>
      </div>
    </div>
  );
}
