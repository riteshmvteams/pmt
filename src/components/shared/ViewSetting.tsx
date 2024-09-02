import { LayoutGrid, List } from "lucide-react";

export default function ViewSetting() {
  return (
    <div className="flex text-muted-foreground border rounded-md">
      <button className="px-3 h-10 rounded-md">
        <LayoutGrid className="h-5 w-5" />
      </button>
      <button className="px-3 h-10 rounded-md text-primary-foreground bg-primary">
        <List className="h-5 w-5" />
      </button>
    </div>
  );
}
