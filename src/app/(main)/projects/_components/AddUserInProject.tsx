import { AddUserInProjectTabs } from "@/components/shared/addThings/AddProjects";
import CustomUserAvatar from "@/components/shared/CustomUserAvatar";
import Title from "@/components/shared/Title";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export default function AddUserInProject() {
  return (
    <div>
      <div className="grid grid-cols-5 gap-4 p-4">
        <div className="col-span-3 max-h-[400px] overflow-y-auto scrollbar min-h-[400px] overflow-x-hidden px-2">
          <AddUserInProjectTabs />
        </div>
        <div className="col-span-2 p-2 rounded-lg max-h-[400px] overflow-y-auto scrollbar">
          <div className="flex items-center">
            <Input placeholder="Search Users..." />
          </div>

          <ul>
            <Title className="bg-muted my-2 py-2 px-2">
              Users Added in this Project
            </Title>
            {Array.from({ length: 10 })?.map((_, ind) => {
              return (
                <li
                  key={ind}
                  className="p-2 border border-b-0 last:border-b cursor-pointer hover:bg-primary/10"
                >
                  <CustomUserAvatar
                    title="Super Admin"
                    subTitle="super@admin.com"
                  />
                </li>
              );
            })}
          </ul>
        </div>
      </div>

      <div className="flex justify-center gap-4 items-center py-4">
        <Button variant="outline" className="px-10 font-lexend">
          Cancel
        </Button>
        <Button type="submit" className="px-10 font-lexend">
          Add
        </Button>
      </div>
    </div>
  );
}
