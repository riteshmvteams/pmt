import Text from "../Text";
import Title from "../Title";

const timeData = [
  {
    id: 1,
    user_name: "John Doe",
    task_name: "Fix the dropdown issue",
    task_description: `Today's Update:
        1. Created Home Page Design
        2. Created Home Page Design
        3. Created Home Page Design`,
    time_from: "09:00 AM",
    time_to: "02:00 PM",
  },
  {
    id: 2,
    user_name: "John Doe",
    task_name: "Fix the About section in small devices",
    task_description: `Today's Update:
        1. Created Home Page Design
        2. Created Home Page Design
        3. Created Home Page Design`,
    time_from: "02:00 PM",
    time_to: "06:00 PM",
  },
];

export default function TimeLogDetail() {
  return (
    <div className="px-4 py-2">
      <ul className="border rounded-md">
        <li className="grid grid-cols-12">
          <Title className="bg-muted p-2.5 font-normal text-sm border-r col-span-2">
            User Name
          </Title>
          <Title className="bg-muted p-2.5 font-normal text-sm border-r col-span-3">
            Task Name
          </Title>
          <Title className="bg-muted p-2.5 font-normal text-sm border-r col-span-5">
            Task Description
          </Title>
          <Title className="bg-muted p-2.5 font-normal text-sm col-span-2">
            Time
          </Title>
        </li>
        {timeData?.map((data) => {
          return (
            <li
              key={data?.id}
              className="grid grid-cols-12 border-b last:border-0"
            >
              <Text className="p-2 text-[13px] border-r col-span-2 text-muted-foreground">
                {data?.user_name}
              </Text>
              <Text className="p-2 text-[13px] border-r col-span-3 text-muted-foreground">
                {data?.task_name}
              </Text>
              <Text className="p-2 text-[13px] border-r col-span-5 whitespace-pre-line text-muted-foreground">
                {data?.task_description}
              </Text>
              <Text className="p-2 text-[13px] col-span-2 text-muted-foreground">
                {data?.time_from} - {data?.time_to}
              </Text>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
