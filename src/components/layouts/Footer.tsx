import Title from "../shared/Title";

export default function Footer() {
  return (
    <footer className="bg-muted/40 border-t px-4 py-2.5 lg:px-8 flex justify-between items-center">
      <div>
        <span className="font-sans font-normal text-xs">
          Using 1,304.07 Mb of storage | Hours Spent: 10.0
        </span>
      </div>
      <div>
        <span className="font-sans font-normal text-xs">MVT 2024</span>
      </div>
      <div>
        <Title className="text-xs">
          <span className="font-sans font-normal">Last Activity |</span> Sep 27,
          Fri 6:11 pm
        </Title>
      </div>
    </footer>
  );
}
