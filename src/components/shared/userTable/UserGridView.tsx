import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { CalendarPlus2, FolderOpenDot, IdCard } from "lucide-react";
import { formatDate, trimText } from "@/lib/helpers";
import Link from "next/link";
import { routes } from "@/config/routes";
import { getRoleBadge, TUser } from "./columns";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import UserActions from "./UserActions";

interface Props {
  data: TUser[];
}

export default function UsersGridView({ data }: Props) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-4 gap-y-6">
      {data?.slice(0, 13)?.map((user, ind) => {
        return (
          <Card key={ind} className="rounded-md hover:shadow-lg">
            <CardHeader className="border-b px-4 py-2.5 bg-muted/60">
              <div className="flex items-center justify-between">
                <CardTitle className="text-base font-lexend font-medium tracking-wide flex flex-col gap-1">
                  <div className="flex gap-3 items-center">
                    <Link
                      href={routes?.userDetail(user?.id)}
                      className="hover:underline underline-offset-2"
                    >
                      {trimText(user?.username, 25)}
                    </Link>

                    {getRoleBadge(user?.role)}
                  </div>

                  <span className="text-muted-foreground text-xs font-normal">
                    {user?.email}
                  </span>
                </CardTitle>
                <UserActions />
              </div>
            </CardHeader>
            <CardContent className="p-4 flex flex-col gap-4">
              <div className="flex gap-6 items-start">
                <Avatar className="w-16 h-16 border">
                  <AvatarImage
                    src={`https://robohash.org/cat${user?.id}.png`}
                    alt="@shadcn"
                  />
                  <AvatarFallback>CN</AvatarFallback>
                </Avatar>

                <div className="grid gap-x-8 gap-y-3">
                  <Link
                    href={routes?.userDetail(user?.id)}
                    className="flex items-center gap-2 text-muted-foreground hover:underline underline-offset-2 hover:text-primary"
                  >
                    <IdCard className="w-4 h-4" />
                    <span className="text-xs">Name: {user?.name}</span>
                  </Link>
                  <Link
                    href={routes?.usersProjects(user?.id)}
                    className="flex items-center gap-2 text-muted-foreground hover:underline underline-offset-2 hover:text-primary"
                  >
                    <FolderOpenDot className="w-4 h-4" />
                    <span className="text-xs">12 Projects</span>
                  </Link>

                  <div className="flex items-center gap-2 text-muted-foreground">
                    <CalendarPlus2 className="w-4 h-4" />
                    <span className="text-xs">
                      Created on: {formatDate(user?.created_at)}
                    </span>
                  </div>
                </div>
              </div>
            </CardContent>
            <CardFooter className="border-t px-4 py-2.5 bg-muted/60">
              <p className="text-xs text-muted-foreground">
                <span className="font-medium">Last Activity on:</span>{" "}
                {formatDate(user?.created_at)}
              </p>
            </CardFooter>
          </Card>
        );
      })}
    </div>
  );
}
