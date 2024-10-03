import ChatYoptaEditor from "@/components/shared/yoptaEditor/ChatEditor";

export default function Archive() {
  return (
    <>
      <div className="flex items-center">
        <h1 className="text-lg font-semibold md:text-2xl">Archive</h1>
      </div>
      <div
        className="flex flex-1 items-center justify-center rounded-lg border border-dashed shadow-sm"
        x-chunk="dashboard-02-chunk-1"
      >
        <div className="flex flex-col items-center gap-1 text-center">
          <ChatYoptaEditor />
          {/* <ExpandableCardDemo /> */}
        </div>
      </div>
    </>
  );
}
