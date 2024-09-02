import CheckInButton from "@/components/shared/CheckInButton";
import ProjectTabs from "./_components/ProjectTabs";

export default function Projects() {
  return (
    <main className="flex flex-1 flex-col gap-4 lg:gap-6 p-6">
      <div className="flex items-center justify-between">
        <h1 className="text-lg font-semibold md:text-2xl">Projects</h1>
        <CheckInButton />
      </div>
      <ProjectTabs />
    </main>
  );
}
