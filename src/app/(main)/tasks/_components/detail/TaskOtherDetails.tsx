import Title from "@/components/shared/Title";
import { Paperclip } from "lucide-react";

export default function TaskOtherDetails() {
  return (
    <div className="grid grid-cols-2 gap-4">
      <div className="bg-muted/20 border p-4 rounded-md flex flex-col gap-2">
        <div className="flex items-center gap-2">
          <Paperclip className="w-5 h-5" />
          <Title>Assigned Users</Title>
        </div>
      </div>
      <div className="bg-muted/20 border p-4 rounded-md flex flex-col gap-2">
        <div className="flex items-center gap-2">
          <Paperclip className="w-5 h-5" />
          <Title>Due Date</Title>
        </div>
      </div>
      <div className="bg-muted/20 border p-4 rounded-md flex flex-col gap-2">
        <div className="flex items-center gap-2">
          <Paperclip className="w-5 h-5" />
          <Title>Attached Files In Task</Title>
        </div>
      </div>
      <div className="bg-muted/20 border p-4 rounded-md flex flex-col gap-2">
        <div className="flex items-center gap-2">
          <Paperclip className="w-5 h-5" />
          <Title>Activities</Title>
        </div>
      </div>
      <div className="bg-muted/20 border p-4 rounded-md flex flex-col gap-2">
        <div className="flex items-center gap-2">
          <Paperclip className="w-5 h-5" />
          <Title>People Involved</Title>
        </div>
      </div>
    </div>
  );
}
