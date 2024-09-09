import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { fileActions, TFiles } from "./columns";
import Link from "next/link";
import { formatDate, trimText } from "@/lib/helpers";
import XMLIcon from "@/components/icons/XMLIcon";
import CustomDropDown from "@/components/shared/CustomDropDown";

type Props = {
  data: TFiles[];
};

export default function FilesGrid({ data }: Props) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-4 gap-y-6">
      {data?.slice(0, 13)?.map((project, ind) => {
        return (
          <Card key={ind} className="rounded-md hover:shadow-lg">
            <CardHeader className="border-b px-4 py-2.5 bg-muted/60">
              <div className="flex items-center justify-between">
                <CardTitle className="text-base font-lexend font-medium tracking-wide hover:underline underline-offset-2">
                  <Link href={"/"}>{trimText(project?.title, 25)}</Link>
                </CardTitle>
                <CustomDropDown actions={fileActions} className="w-[100px]" />
              </div>
            </CardHeader>
            <CardContent className="p-4 flex flex-col gap-4">
              <div className="flex gap-6 items-start">
                <div className="p-3 border text-muted-foreground w-max bg-muted/60 rounded-lg h-max">
                  <XMLIcon height="40px" width="40px" />
                </div>

                <div className="grid gap-x-8 gap-y-1">
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <span className="text-xs">Project:</span>
                    <span className="text-xs">Test Project</span>
                  </div>
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <span className="text-xs">Size:</span>
                    <span className="text-xs">1.5 MB</span>
                  </div>
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <span className="text-xs">Uploaded By:</span>
                    <span className="text-xs">Super Admin</span>
                  </div>
                </div>
              </div>
            </CardContent>
            <CardFooter className="border-t px-4 py-2.5 bg-muted/60">
              <p className="text-xs text-muted-foreground">
                <span className="font-medium">Last Activity on:</span>{" "}
                {formatDate(project?.uploadedAt)}
              </p>
            </CardFooter>
          </Card>
        );
      })}
    </div>
  );
}
