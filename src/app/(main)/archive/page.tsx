import ArchieveTaskTable from "./_components/ArchieveTaskTable";

export default function Archive() {
  return (
    <>
      <div className="flex items-center">
        <h1 className="text-lg font-semibold md:text-2xl">Archive</h1>
      </div>
      <ArchieveTaskTable />
    </>
  );
}
