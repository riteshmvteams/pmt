import { cn } from "@/lib/utils";
import { Button } from "../ui/button";

export default function CheckInButton({
  variant = "simple",
  className,
}: {
  className?: string;
  variant?: "outline" | "simple";
}) {
  const classes = {
    outline:
      "bg-primary-foreground text-primary border border-primary hover:bg-primary hover:text-primary-foreground",
    simple: "",
  };

  return (
    <Button
      className={cn(
        "",
        variant === "outline" ? classes.outline : classes.simple,
        className
      )}
    >
      Check In
    </Button>
  );
}
