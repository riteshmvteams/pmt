import TimeListTable from "@/components/shared/timelog/table";
import TimeLogListing from "@/components/shared/timelog/TimeLogListing";
import { timlogData } from "../../projects/[id]/_components/time/ProjectTimeLogs";

export default function page() {
  return (
    <>
      {/* <TimeListTable data={timlogData} /> */}
      <TimeLogListing data={timlogData} />
    </>
  );
}
