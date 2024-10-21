import { Suspense } from "react";

import { Tabs, TabsContent } from "@/components/ui/tabs";
import CustomTabTrigger from "@/components/shared/CustomTabTrigger";
import { Users_DATA } from "@/lib/constants";
import ViewSetting from "@/components/shared/ViewSetting";
import UsersSort from "./UsersSort";
import UserTable from "@/components/shared/userTable/table";
import InviteUsers from "./InviteUsers";

const activeUsers = Users_DATA.filter((user) => user.user_status === "active");
const invitedUsers = Users_DATA.filter(
  (user) => user.user_status === "invited"
);
const disabledUsers = Users_DATA.filter(
  (user) => user.user_status === "disabled"
);

const tabList = [
  {
    id: 1,
    title: "Active",
    target: "active",
    count: activeUsers?.length,
  },
  {
    id: 2,
    title: "Invited",
    target: "invited",
    count: invitedUsers?.length,
  },
  {
    id: 3,
    title: "Disabled",
    target: "disabled",
    count: disabledUsers?.length,
  },
];

const UserTabs = () => {
  return (
    <Tabs defaultValue="active">
      <CustomTabTrigger tabs={tabList} className="grid-cols-3 max-w-[500px]">
        <InviteUsers />
        <UsersSort />
        <ViewSetting />
      </CustomTabTrigger>
      <TabsContent value="active">
        <Suspense fallback="Loading...">
          <UserTable data={activeUsers} />
        </Suspense>
      </TabsContent>
      <TabsContent value="invited">
        <Suspense fallback="Loading...">
          <UserTable data={invitedUsers} />
        </Suspense>
      </TabsContent>
      <TabsContent value="disabled">
        <Suspense fallback="Loading...">
          <UserTable data={disabledUsers} />
        </Suspense>
      </TabsContent>
    </Tabs>
  );
};

export default UserTabs;
