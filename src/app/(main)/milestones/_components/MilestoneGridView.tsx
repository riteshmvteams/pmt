import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  CalendarCheck,
  CalendarPlus2,
  CheckCheck,
  CircleCheckBig,
  Milestone,
} from "lucide-react";
import { formatDate, trimText } from "@/lib/helpers";
import Link from "next/link";
import { routes } from "@/config/routes";
import CustomDropDown from "@/components/shared/CustomDropDown";
import { milestonesActions, TMilestone } from "./columns";
import { getStatusBadge } from "../../tasks/_components/columns";

interface Props {
  data: TMilestone[];
}

export default function MilestoneGridView({ data }: Props) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-4 gap-y-6">
      {data?.slice(0, 13)?.map((milestone, ind) => {
        return (
          <Card key={ind} className="rounded-md hover:shadow-lg">
            <CardHeader className="border-b px-4 py-2.5 bg-muted/60">
              <div className="flex items-center justify-between">
                <CardTitle className="text-base font-lexend font-medium tracking-wide flex flex-col gap-1">
                  <div className="flex gap-3 items-center">
                    <Link
                      href={routes?.milestoneDetail(milestone?.id)}
                      className="hover:underline underline-offset-2"
                    >
                      {trimText(milestone?.title, 25)}
                    </Link>

                    {getStatusBadge(milestone?.status)}
                  </div>
                </CardTitle>
                <CustomDropDown actions={milestonesActions} className="w-44" />
              </div>
            </CardHeader>
            <CardContent className="p-4 flex flex-col gap-4">
              <div className="flex gap-6 items-start">
                <div className="p-3 border text-muted-foreground w-max bg-muted/60 rounded-lg h-max">
                  <Milestone className="h-10 w-10" />
                </div>

                <div className="grid gap-x-8 gap-y-3">
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <CalendarCheck className="w-4 h-4" />
                    <span className="text-xs">Open: 3 Tasks</span>
                  </div>
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <CheckCheck className="w-4 h-4" />
                    <span className="text-xs">Resolved: 7 Tasks</span>
                  </div>
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <CircleCheckBig className="w-4 h-4" />
                    <span className="text-xs">Closed: 6 Tasks</span>
                  </div>

                  <div className="flex items-center gap-2 text-muted-foreground">
                    <CalendarPlus2 className="w-4 h-4" />
                    <span className="text-xs">
                      Created by Super-admin on:{" "}
                      {formatDate(milestone?.created_at)}
                    </span>
                  </div>
                </div>
              </div>
            </CardContent>
            <CardFooter className="border-t px-4 py-2.5 bg-muted/60">
              <p className="text-xs text-muted-foreground">
                <span className="font-medium">Last Activity on:</span>{" "}
                {formatDate(milestone?.created_at)}
              </p>
            </CardFooter>
          </Card>
        );
      })}
    </div>
  );
}
