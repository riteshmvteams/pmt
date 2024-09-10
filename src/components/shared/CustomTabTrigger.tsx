"use client";

import { TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useSetParams } from "@/hooks/useSetParams";
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
  const { setParams, getParams } = useSetParams();
  const note = getParams("note");

  const onTabClick = (target: string) => {
    if (note) {
      setParams("note", "delete");
      return;
    }
    setParams("tab", target);
  };

  return (
    <TabsList className="flex justify-between bg-transparent">
      <div
        className={cn(
          "grid w-full grid-cols-2 max-w-[400px] p-1 rounded-md bg-muted",
          className
        )}
      >
        {tabs?.map((tab) => {
          return (
            <TabsTrigger
              key={tab?.id}
              value={tab?.target}
              className="data-[state=active]:text-primary"
              onClick={() => onTabClick(tab?.target)}
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
