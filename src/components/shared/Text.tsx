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
          "text-sm tracking-wide font-lexend font-light hover:underline underline-offset-2",
          variant === "title" ? "font-semibold" : "font-light",
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
        "text-sm tracking-normal font-lexend",
        variant === "title" ? "font-semibold" : "font-light",
        className
      )}
    >
      {children}
    </p>
  );
}
