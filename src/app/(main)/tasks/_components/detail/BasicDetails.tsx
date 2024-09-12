import { getStatusBadge } from "@/components/shared/status-badge";
import { Badge } from "@/components/ui/badge";
import { Wrench } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import PrivateTag from "@/components/shared/PrivateTag";
import { UserAvatar } from "@/app/(main)/projects/[id]/_components/overview/ProjectOverview";
import Title from "@/components/shared/Title";

const htmlString = `<p>This project is a good choice for beginners because it is relatively simple to implement, but it still requires you to learn some important web development concepts, such as HTML, CSS, and JavaScript.</p><br /><br /><p>To create a <b>quiz app</b>, you will need to:</p><br /><p>1. Design the quiz questions. This includes coming up with the questions themselves, as well as the possible answers for each question. You may also want to decide on a scoring system for the quiz.</br>`;

export default function BasicDetails() {
  return (
    <div>
      <div className="grid grid-cols-3 gap-4">
        {Array.from({ length: 12 })?.map((_, ind) => {
          return (
            <div
              key={ind}
              className="flex gap-3 items-center bg-primary/5 px-4 py-2 rounded-lg"
            >
              <div className="min-w-20 font-lexend text-sm">Type:</div>
              <div>
                <Badge
                  className="rounded-md py-1 gap-2 text-muted-foreground"
                  variant="outline"
                >
                  <Wrench className="w-[14px] h-[14px]" /> Development
                </Badge>
              </div>
            </div>
          );
        })}
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
          <CardContent className="flex flex-col gap-4 bg-muted/10 p-0">
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
