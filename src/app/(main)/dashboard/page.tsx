import BarChartUI from "@/components/shared/chart/BarChart";
import PieChartUI from "@/components/shared/chart/PieChart";
import RadicalChartUI from "@/components/shared/chart/RadicalChart";
import CheckInButton from "@/components/shared/CheckInButton";

export default function Dashboard() {
  return (
    <>
      <div className="flex items-center justify-between">
        <h1 className="text-lg font-semibold md:text-2xl">Dashboard</h1>
        <CheckInButton />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        <BarChartUI className="sm:col-span-2 lg:col-span-3" />
        <PieChartUI />
        <RadicalChartUI />
        <PieChartUI />
        <PieChartUI />
        <RadicalChartUI />
        <PieChartUI />
        <RadicalChartUI />
        <PieChartUI />
        <PieChartUI />
        <RadicalChartUI />
      </div>
    </>
  );
}
