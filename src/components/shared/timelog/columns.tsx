import { ColumnDef } from "@tanstack/react-table";

import Text from "@/components/shared/Text";
import { routes } from "@/config/routes";
import DataTableColumnHeader from "../DataTable/DataTableColumnHeader";
import { TTimeLog } from "@/app/(main)/projects/[id]/_components/time/ProjectTimeLogs";
import { Badge } from "@/components/ui/badge";
import Title from "../Title";
import { Button } from "@/components/ui/button";
import CustomTooltip from "../CustomTooltip";
import { Edit, Trash2 } from "lucide-react";

export const getBillableBadge = (status: true | false) => {
  switch (status) {
    case false:
      return (
        <Badge
          variant="outline"
          className="font-normal gap-2 bg-red-50 text-red-500 rounded-full h-8 w-8 p-0 flex items-center justify-center border-red-500"
        >
          <svg
            width="20px"
            height="20px"
            version="1.1"
            id="Layer_1"
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
            viewBox="0 0 512 512"
            xmlSpace="preserve"
          >
            <ellipse
              style={{ fill: "#E21B1B" }}
              cx="256"
              cy="256"
              rx="256"
              ry="255.832"
            />
            <g>
              <rect
                x="228.021"
                y="113.143"
                transform="matrix(0.7071 -0.7071 0.7071 0.7071 -106.0178 256.0051)"
                style={{ fill: "#FFFFFF" }}
                width="55.991"
                height="285.669"
              />
              <rect
                x="113.164"
                y="227.968"
                transform="matrix(0.7071 -0.7071 0.7071 0.7071 -106.0134 255.9885)"
                style={{ fill: "#FFFFFF" }}
                width="285.669"
                height="55.991"
              />
            </g>
          </svg>
        </Badge>
      );
    case true:
      return (
        <Badge
          variant="outline"
          className="font-normal gap-2 bg-green-50 text-green-500 rounded-full h-8 w-8 p-0 flex items-center justify-center border-green-500"
        >
          <svg
            width="20px"
            height="20px"
            viewBox="0 0 60 60"
            xmlns="http://www.w3.org/2000/svg"
          >
            <defs>
              <style>
                {`.cls-1 {
        fill: #22c55e;
        fill-rule: evenodd;
      }`}
              </style>
            </defs>
            <path
              className="cls-1"
              d="M800,510a30,30,0,1,1,30-30A30,30,0,0,1,800,510Zm-16.986-23.235a3.484,3.484,0,0,1,0-4.9l1.766-1.756a3.185,3.185,0,0,1,4.574.051l3.12,3.237a1.592,1.592,0,0,0,2.311,0l15.9-16.39a3.187,3.187,0,0,1,4.6-.027L817,468.714a3.482,3.482,0,0,1,0,4.846l-21.109,21.451a3.185,3.185,0,0,1-4.552.03Z"
              transform="translate(-770 -450)"
              id="check"
            />
          </svg>
        </Badge>
      );
    default:
      return <Badge variant="default">{status}</Badge>;
  }
};

export const getColumns = (): ColumnDef<TTimeLog>[] => {
  return [
    {
      accessorKey: "user_name",
      header: ({ column }) => {
        return (
          <DataTableColumnHeader
            column={column}
            title="User Name"
            className="text-foreground"
          />
        );
      },
      cell: ({ row }) => {
        return (
          <Text className="block p-1.5 text-muted-foreground font-medium">
            {row.original.user_name}
          </Text>
        );
      },
    },
    {
      accessorKey: "task_description",
      header: ({ column }) => {
        return (
          <DataTableColumnHeader
            column={column}
            title="Task Description"
            className="text-foreground"
          />
        );
      },
      cell: ({ row }) => {
        return (
          <Text className="block p-1.5 text-muted-foreground w-[350px] whitespace-pre-line">
            {row.original.task_description}
          </Text>
        );
      },
    },
    {
      accessorKey: "task_name",
      header: ({ column }) => {
        return (
          <DataTableColumnHeader
            column={column}
            title="Task Name"
            className="text-foreground"
          />
        );
      },
      cell: ({ row }) => {
        return (
          <Text className="block p-1.5 text-muted-foreground w-[350px]">
            {row.original.task_name}
          </Text>
        );
      },
    },
    {
      accessorKey: "start_time",
      header: ({ column }) => {
        return (
          <DataTableColumnHeader
            column={column}
            title="Start Time"
            className="text-foreground"
          />
        );
      },
      cell: ({ row }) => {
        return (
          <Text className="block p-1.5 text-muted-foreground">
            {row.original.start_time}
          </Text>
        );
      },
    },
    {
      accessorKey: "end_time",
      header: ({ column }) => {
        return (
          <DataTableColumnHeader
            column={column}
            title="End Time"
            className="text-foreground"
          />
        );
      },
      cell: ({ row }) => {
        return (
          <Text className="block p-1.5 text-muted-foreground">
            {row.original.end_time}
          </Text>
        );
      },
    },
    {
      accessorKey: "spent_time",
      header: ({ column }) => {
        return (
          <DataTableColumnHeader
            column={column}
            title="Spent Time"
            className="text-foreground"
          />
        );
      },
      cell: ({ row }) => {
        return (
          <Text className="block p-1.5 text-muted-foreground">
            {row.original.spent_time} hrs.
          </Text>
        );
      },
    },
    {
      accessorKey: "billable",
      header: ({ column }) => {
        return <Title className="text-foreground">Billable</Title>;
      },
      cell: ({ row }) => {
        return getBillableBadge(row.original.billable);
      },
    },
    {
      id: "actions",
      cell: ({ row }) => {
        return (
          <div className="flex gap-2 items-center">
            <CustomTooltip title="Edit">
              <Button size={"icon"} variant={"outline"}>
                <Edit className="w-4 h-4" />
              </Button>
            </CustomTooltip>
            <CustomTooltip title="Delete">
              <Button size={"icon"} variant={"outline"}>
                <Trash2 className="w-4 h-4" />
              </Button>
            </CustomTooltip>
          </div>
        );
      },
    },
  ];
};
