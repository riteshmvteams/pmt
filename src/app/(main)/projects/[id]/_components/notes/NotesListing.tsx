import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { formatDateWithWeekday } from "@/lib/helpers";
export default function NotesListing() {
  return (
    <div className="flex flex-col gap-4">
      {Array.from({ length: 5 })?.map((_, index) => {
        return (
          <Card className="rounded-md" key={index}>
            <CardHeader className="border-b px-4 py-2.5 bg-muted/50">
              <div className="flex items-center justify-between">
                <CardTitle className="text-base font-lexend font-normal tracking-tight flex flex-col gap-1">
                  {formatDateWithWeekday(new Date())}
                </CardTitle>
              </div>
            </CardHeader>
            <CardContent className="p-4 flex flex-col gap-4">
              <div>d</div>
            </CardContent>
          </Card>
        );
      })}
    </div>
  );
}
