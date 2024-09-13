import { getStatusBadge } from "@/components/shared/status-badge";
import { Badge } from "@/components/ui/badge";
import { AlarmClockCheck, Plug } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import PrivateTag from "@/components/shared/PrivateTag";
import { UserAvatar } from "@/app/(main)/projects/[id]/_components/overview/ProjectOverview";
import Title from "@/components/shared/Title";

const htmlString = `<p>This project is a good choice for beginners because it is relatively simple to implement, but it still requires you to learn some important web development concepts, such as HTML, CSS, and JavaScript.</p><br /><br /><p>To create a <b>quiz app</b>, you will need to:</p><br /><p>1. Design the quiz questions. This includes coming up with the questions themselves, as well as the possible answers for each question. You may also want to decide on a scoring system for the quiz.</br>`;

export default function BasicDetails() {
  return (
    <div>
      <div className="grid grid-cols-2 gap-4 p-6 rounded-lg bg-primary/5">
        <div className="flex gap-3 items-center rounded-lg">
          <div className="min-w-16 font-lexend text-sm text-muted-foreground">
            Status
          </div>
          {/* {getStatusBadge("Open")} */}
          <Badge
            className="rounded-md gap-1 py-1 bg-destructive text-destructive-foreground"
            variant="outline"
          >
            <AlarmClockCheck className="w-[14px] h-[14px]" strokeWidth={2} />{" "}
            Open
          </Badge>
        </div>
        <div className="flex gap-3 items-center rounded-lg">
          <div className="min-w-16 font-lexend text-sm text-muted-foreground">
            Priority
          </div>
          <Badge
            className="rounded-md gap-1 py-1 bg-amber-600 text-amber-50"
            variant="outline"
          >
            <AlarmClockCheck className="w-[14px] h-[14px]" strokeWidth={2} />{" "}
            Medium
          </Badge>
        </div>
        <div className="flex gap-3 items-center rounded-lg">
          <div className="min-w-16 font-lexend text-sm text-muted-foreground">
            Type
          </div>
          <div>
            <Badge
              className="rounded-md gap-1 py-1 bg-background"
              variant="outline"
            >
              <Plug className="w-[14px] h-[14px]" strokeWidth={2.5} />{" "}
              Development
            </Badge>
          </div>
        </div>
        <div className="flex gap-3 items-center rounded-lg">
          <div className="min-w-16 font-lexend text-sm text-muted-foreground">
            Type
          </div>
          <div>
            <Badge
              className="rounded-md gap-1 py-1 bg-background"
              variant="outline"
            >
              <Plug className="w-[14px] h-[14px]" strokeWidth={2.5} />{" "}
              Development
            </Badge>
          </div>
        </div>
        <div className="flex gap-3 items-center rounded-lg">
          <div className="min-w-16 font-lexend text-sm text-muted-foreground">
            Type
          </div>
          <div>
            <Badge
              className="rounded-md gap-1 py-1 bg-background"
              variant="outline"
            >
              <Plug className="w-[14px] h-[14px]" strokeWidth={2.5} />{" "}
              Development
            </Badge>
          </div>
        </div>
        <div className="flex gap-3 items-center rounded-lg">
          <div className="min-w-16 font-lexend text-sm text-muted-foreground">
            Type
          </div>
          <div>
            <Badge
              className="rounded-md gap-1 py-1 bg-background"
              variant="outline"
            >
              <Plug className="w-[14px] h-[14px]" strokeWidth={2.5} />{" "}
              Development
            </Badge>
          </div>
        </div>
      </div>

      <div className="py-10">
        <Title className="mb-2 text-base font-normal">Task Overview:</Title>
        <Card className="rounded-md">
          <CardHeader className="border-b px-4 py-2.5 bg-muted/50">
            <div className="flex items-center justify-between">
              <CardTitle className="text-base font-lexend font-medium tracking-wide flex flex-col gap-1">
                <UserAvatar />
              </CardTitle>
              <PrivateTag />
            </div>
          </CardHeader>
          <CardContent className="flex flex-col gap-4 bg-muted/10 p-x-4 py-2.5">
            <div
              className="text-sm ql-editor"
              dangerouslySetInnerHTML={{ __html: htmlString }}
            ></div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
