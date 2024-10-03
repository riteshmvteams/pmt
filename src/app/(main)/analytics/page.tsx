import { ExpandableCardDemo } from "@/components/shared/animated/ExpandableCardDemo";
import YoptaEditor from "@/components/shared/YoptaEditor";
import { Button } from "@/components/ui/button";

export default function Analytics() {
  return (
    <>
      <div className="flex items-center">
        <h1 className="text-lg font-semibold md:text-2xl">Analytics</h1>
      </div>
      <div
        className="flex flex-1 items-center justify-center rounded-lg border border-dashed shadow-sm"
        x-chunk="dashboard-02-chunk-1"
      >
        <div className="flex flex-col items-center gap-1 text-center">
          <ExpandableCardDemo />

          <YoptaEditor />
        </div>
      </div>
    </>
  );
}
