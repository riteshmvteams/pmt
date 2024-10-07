import Text from "@/components/shared/Text";
import Title from "@/components/shared/Title";

export default function UserProfile() {
  return (
    <div className="grid grid-cols-2 gap-y-10 w-1/2 border p-4 rounded-lg">
      <div className="flex items-center gap-2">
        <Title className="min-w-[100px]">Name:</Title>
        <Text>demo user</Text>
      </div>
      <div className="flex items-center gap-2 row-span-2">
        <Title className="min-w-[100px]">Profile Image:</Title>
        <div className="border w-full h-full"></div>
      </div>
      <div className="flex items-center gap-2">
        <Title className="min-w-[100px]">Short Name:</Title>
        <Text>demo user</Text>
      </div>
      <div className="flex items-center gap-2">
        <Title className="min-w-[100px]">Email:</Title>
        <Text>demo user</Text>
      </div>
      <div className="flex items-center gap-2">
        <Title className="min-w-[100px]">Last Login:</Title>
        <Text>demo user</Text>
      </div>
      <div className="flex items-center gap-2">
        <Title className="min-w-[100px]">Time Zone:</Title>
        <Text>demo user</Text>
      </div>
      <div className="flex items-center gap-2">
        <Title className="min-w-[100px]">Role:</Title>
        <Text>demo user</Text>
      </div>
    </div>
  );
}
