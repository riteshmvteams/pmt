import Title from "@/components/shared/Title";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { formatDateWithWeekday, trimText } from "@/lib/helpers";
import { BriefcaseBusiness } from "lucide-react";

export default function RecentActivities({ title }: { title: string }) {
  return (
    <Card className="rounded-md">
      <CardHeader className="border-b px-4 py-2.5 bg-muted/50">
        <div className="flex items-center justify-between">
          <CardTitle className="text-base font-lexend font-medium tracking-wide flex flex-col gap-1">
            {title}
          </CardTitle>
        </div>
      </CardHeader>
      <CardContent className="p-4 flex flex-col gap-4 max-h-[380px] overflow-y-auto scrollbar">
        <ul className="flex flex-col">
          {Array.from({ length: 15 })?.map((_, ind) => {
            return (
              <li
                key={ind}
                className="p-2 hover:bg-muted cursor-pointer flex items-center gap-2.5 rounded-lg"
              >
                <span className="w-10 h-10 rounded-md bg-muted flex items-center justify-center">
                  <BriefcaseBusiness className="w-5 h-5 text-muted-foreground" />
                </span>
                <div className="flex flex-col">
                  <Title className="font-normal">
                    {trimText(
                      "Reminder: Daily Time Updates Required in PMT System",
                      30
                    )}
                  </Title>
                  <span className="text-[10px] text-muted-foreground">
                    {formatDateWithWeekday(new Date(), false)}
                  </span>
                </div>
              </li>
            );
          })}
        </ul>
      </CardContent>
    </Card>
  );
}
