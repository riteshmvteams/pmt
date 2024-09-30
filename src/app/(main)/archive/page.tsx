import { ArrowBigDown } from "lucide-react";

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
          <h3 className="text-2xl font-bold tracking-tight">No Archive</h3>

          <div className="w-[500px] h-[500px] bg-black flex items-center justify-center">
            <button className="w-10 h-10 border-2 border-white rounded-full flex items-center justify-center hover:w-14 hover:h-14 duration-500 hover:border-white/0 group">
              <span className="absolute w-3 h-3 rounded-full flex items-center justify-center group-hover:bg-white/50 duration-500 group-hover:h-11 group-hover:w-11"></span>
              <ArrowBigDown className="text-white" />
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
