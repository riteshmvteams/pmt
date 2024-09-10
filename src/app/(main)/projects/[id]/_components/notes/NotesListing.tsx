import NotesFileIcon from "@/components/icons/NotesFileIcon";
import CustomDropDown from "@/components/shared/CustomDropDown";
import PrivateTag from "@/components/shared/PrivateTag";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { routes } from "@/config/routes";
import { formatDate, formatDateWithWeekday, trimText } from "@/lib/helpers";
import { cn } from "@/lib/utils";
import { useView } from "@/store/dataView";
import { Edit, History, RefreshCcw, Trash2 } from "lucide-react";
import Link from "next/link";
import { useParams } from "next/navigation";

const notesActions = [
  {
    title: "Edit",
    icon: Edit,
    target: "edit",
  },
  {
    title: "Edit Details",
    icon: RefreshCcw,
    target: "edit-details",
  },
  {
    title: "History",
    icon: History,
    target: "history",
  },
  {
    title: "Delete",
    icon: Trash2,
    target: "delete",
  },
];

export default function NotesListing() {
  const isGrid = useView((state) => state?.isGrid);
  const params = useParams();

  return (
    <div
      className={cn(
        "grid gap-x-4 gap-y-6",
        isGrid ? "grid-cols-2" : "grid-cols-1"
      )}
    >
      {Array.from({ length: 5 })?.map((_, index) => {
        return (
          <Card className="rounded-md" key={index}>
            <CardHeader className="border-b px-4 py-2.5 bg-muted/50">
              <div className="flex items-center justify-between">
                <CardTitle className="text-base font-lexend font-medium tracking-wide flex flex-col">
                  <Link
                    href={routes?.notesDetail(Number(params?.id), 1)}
                    className="hover:underline underline-offset-2"
                  >
                    {trimText("Title for the Notes", 25)}
                  </Link>

                  <span className="text-muted-foreground text-xs font-light">
                    <span className="font-normal">created on:</span>{" "}
                    {formatDateWithWeekday(new Date(), false)}
                  </span>
                </CardTitle>
                <div className="flex items-center gap-2">
                  <PrivateTag />
                  <CustomDropDown actions={notesActions} className="w-40" />
                </div>
              </div>
            </CardHeader>
            <CardContent className="p-4 flex flex-col gap-4">
              <div className="flex gap-6 items-start">
                <div className="p-3 border text-muted-foreground w-max bg-muted/60 rounded-lg h-max">
                  <NotesFileIcon width="40px" height="40px" />
                </div>

                <div className="grid sm:grid-cols-2 gap-x-8 gap-y-5">
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <span className="text-xs font-lexend">
                      <span className="font-semibold">Project:</span> Name of
                      the Project
                    </span>
                  </div>
                </div>
              </div>
            </CardContent>
            <CardFooter className="border-t px-4 py-2.5 bg-muted/60">
              <p className="text-xs text-muted-foreground">
                <span className="font-medium">Last Activity on:</span>{" "}
                {formatDate(new Date())}
              </p>
            </CardFooter>
          </Card>
        );
      })}
    </div>
  );
}
