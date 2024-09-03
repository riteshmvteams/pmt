import { cn } from "@/lib/utils";
import Link from "next/link";

type Props = {
  children: React.ReactNode;
  as?: "link";
  href?: string;
  className?: string;
  variant?: "title";
};

export default function Text({
  children,
  as,
  href,
  className,
  variant,
}: Props) {
  if (as === "link") {
    return (
      <Link
        href={href!}
        className={cn(
          "text-sm tracking-wide hover:underline underline-offset-2",
          variant === "title" ? "font-semibold" : "font-normal",
          className
        )}
      >
        {children}
      </Link>
    );
  }

  return (
    <p
      className={cn(
        "text-sm tracking-normal",
        variant === "title" ? "font-semibold" : "font-normal",
        className
      )}
    >
      {children}
    </p>
  );
}
