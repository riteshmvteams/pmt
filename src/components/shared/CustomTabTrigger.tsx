import { TabsList, TabsTrigger } from "@/components/ui/tabs";
import { cn } from "@/lib/utils";

type Props = {
  children: React.ReactNode;
  tabs: {
    id: number;
    title: string;
    target: string;
    count?: number;
  }[];
  className?: string;
};

export default function CustomTabTrigger({ children, tabs, className }: Props) {
  return (
    <TabsList className="flex justify-between bg-transparent">
      <div
        className={cn(
          "grid w-full grid-cols-2 max-w-[400px] bg-muted p-1 rounded-md",
          className
        )}
      >
        {tabs?.map((tab) => {
          return (
            <TabsTrigger
              key={tab?.id}
              value={tab?.target}
              className="data-[state=active]:text-primary"
            >
              {tab?.title} {tab?.count ? `(${tab?.count})` : ""}
            </TabsTrigger>
          );
        })}
      </div>
      <div className="flex items-center gap-3">{children}</div>
    </TabsList>
  );
}
