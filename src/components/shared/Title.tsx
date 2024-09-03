import { cn } from "@/lib/utils";

type Props = {
  children: React.ReactNode;
  className?: string;
};

export default function Title({ children, className }: Props) {
  return (
    <h4
      className={cn(
        "text-sm tracking-normal font-medium font-lexend",
        className
      )}
    >
      {children}
    </h4>
  );
}
