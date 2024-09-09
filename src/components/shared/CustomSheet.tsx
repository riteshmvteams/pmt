import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { cn } from "@/lib/utils";

type Props = {
  children?: React.ReactNode;
  side?: "left" | "right" | "top" | "bottom";
  className?: string;
  btnLabel?: string;
  title: string;
};

export function CustomSheet({
  children,
  side = "right",
  className,
  btnLabel = "Add Project Details",
  title,
}: Props) {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button className="font-lexend">{btnLabel}</Button>
      </SheetTrigger>
      <SheetContent
        side={side}
        className={cn("sm:max-w-[600px] overflow-y-auto scrollbar", className)}
      >
        <SheetHeader>
          <SheetTitle className="font-lexend text-xl lg:text-2xl">
            {title}
          </SheetTitle>
        </SheetHeader>
        {children}
      </SheetContent>
    </Sheet>
  );
}
