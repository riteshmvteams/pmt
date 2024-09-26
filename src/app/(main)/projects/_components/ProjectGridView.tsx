import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { ProjectActionDropDowns, projectActions, TProject } from "./columns";
import {
  DatabaseZap,
  FolderOpenDot,
  Hourglass,
  ListTodo,
  StarIcon,
  UserCheck,
} from "lucide-react";
import { formatDate, trimText } from "@/lib/helpers";
import Link from "next/link";
import { routes } from "@/config/routes";
import CustomDropDown from "@/components/shared/CustomDropDown";
import { cn } from "@/lib/utils";
import FolderIcon from "@/components/icons/FolderIcon";

interface Props {
  data: TProject[];
}

export default function ProjectGridView({ data }: Props) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-4 gap-y-6">
      {data?.slice(0, 13)?.map((project, ind) => {
        return (
          <Card key={ind} className="rounded-md hover:shadow-lg">
            <CardHeader className="border-b px-4 py-2.5 bg-muted/60">
              <div className="flex items-center justify-between">
                <CardTitle className="text-base font-lexend font-medium tracking-wide hover:underline underline-offset-2">
                  <Link href={routes?.projectDetail(project?.id)}>
                    {trimText(project?.title, 25)}
                  </Link>
                </CardTitle>
                <ProjectActionDropDowns />
              </div>
            </CardHeader>
            <CardContent className="p-4 flex flex-col gap-4">
              <div className="flex items-center gap-3">
                <button className="hover:text-primary">
                  <StarIcon
                    className={cn(
                      "h-5 w-5",
                      project?.isStarred ? "fill-primary text-primary" : ""
                    )}
                  />
                </button>
                <span className="font-lexend text-sm">
                  {project?.title?.toUpperCase()?.slice(0, 5)}
                </span>
              </div>

              <div className="flex gap-6 items-start">
                <div className="p-3 border text-muted-foreground w-max bg-muted/60 rounded-lg h-max">
                  <FolderIcon width="40px" height="40px" />
                </div>

                <div className="grid sm:grid-cols-2 gap-x-8 gap-y-5">
                  <Link
                    href={routes?.showProjectUsers(project?.id)}
                    className="flex items-center gap-2 text-muted-foreground hover:underline underline-offset-2 hover:text-primary"
                  >
                    <UserCheck className="w-4 h-4" />
                    <span className="text-xs">12 users</span>
                  </Link>
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <ListTodo className="w-4 h-4" />
                    <span className="text-xs">10 Tasks</span>
                  </div>
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <Hourglass className="w-4 h-4" />
                    <span className="text-xs">24 hours spent</span>
                  </div>
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <DatabaseZap className="w-4 h-4" />
                    <span className="text-xs">1.83 MB storage</span>
                  </div>
                </div>
              </div>
            </CardContent>
            <CardFooter className="border-t px-4 py-2.5 bg-muted/60">
              <p className="text-xs text-muted-foreground">
                <span className="font-medium">Last Activity on:</span>{" "}
                {formatDate(project?.activity)}
              </p>
            </CardFooter>
          </Card>
        );
      })}
    </div>
  );
}
