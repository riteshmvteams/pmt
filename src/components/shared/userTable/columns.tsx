import { ColumnDef } from "@tanstack/react-table";
import {
  ArchiveRestore,
  CheckCheck,
  CircleCheckBig,
  EllipsisVertical,
  FolderGit2,
  OctagonX,
  RefreshCcwDot,
  Target,
  Trash2,
  Undo,
  User2Icon,
} from "lucide-react";

import Text from "@/components/shared/Text";
import { Badge } from "@/components/ui/badge";
import { routes } from "@/config/routes";
import { formatDate } from "@/lib/helpers";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import Title from "@/components/shared/Title";
import DataTableColumnHeader from "../DataTable/DataTableColumnHeader";
import { useModal } from "@/store/useModal";
import AssignProjectToUser from "./AssignProjectToUser";
import RemoveProjectFromUser from "./RemoveProjectFromUser";
import { AlertDialogCancel } from "@/components/ui/alert-dialog";

export type TUser = {
  id: number;
  name: string;
  username: string;
  email: string;
  role: string;
  projects: number;
  created_at: string;
  user_status: string;
};

export const userActions = [
  {
    title: "Assign Project",
    icon: CircleCheckBig,
  },
  {
    title: "Remove Project",
    icon: CheckCheck,
  },
  {
    title: "divider",
  },
  {
    title: "Disable",
    icon: RefreshCcwDot,
  },
  {
    title: "Enable",
    icon: Undo,
  },
  {
    title: "Edit User",
    icon: Target,
  },
  {
    title: "divider",
  },
  {
    title: "Grant HR Role",
    icon: ArchiveRestore,
  },
  {
    title: "Grant Super-admin Role",
    icon: Trash2,
  },
];

export const getRoleBadge = (status: string) => {
  switch (status?.toLowerCase()) {
    case "hr":
      return (
        <Badge
          variant="outline"
          className="font-normal rounded-md gap-2 bg-status-destructiveBg text-status-destructive"
        >
          <span className="h-1.5 w-1.5 rounded-full bg-status-destructive"></span>{" "}
          {status}
        </Badge>
      );
    case "super-admin":
      return (
        <Badge
          variant="outline"
          className="font-normal rounded-md gap-2 bg-status-pendingBg text-status-pending"
        >
          <span className="h-1.5 w-1.5 rounded-full bg-status-pending"></span>{" "}
          {status}
        </Badge>
      );
    case "user":
      return (
        <Badge
          variant="outline"
          className="font-normal rounded-md gap-2 bg-status-successBg text-status-success"
        >
          <span className="h-1.5 w-1.5 rounded-full bg-status-success"></span>{" "}
          {status}
        </Badge>
      );
    default:
      return <Badge variant="default">{status}</Badge>;
  }
};

export const getColumns = (): ColumnDef<TUser>[] => {
  return [
    {
      accessorKey: "username",
      header: ({ column }) => {
        return <DataTableColumnHeader column={column} title="User Name" />;
      },
      cell: ({ row }) => {
        return (
          <Text
            as="link"
            href={routes.userDetail(row.original.id)}
            className="block p-1.5"
          >
            {row.original.username}
          </Text>
        );
      },
    },
    {
      accessorKey: "role",
      header: () => {
        return <Title className="w-[120px]">Role</Title>;
      },
      cell: ({ row }) => getRoleBadge(row.original.role),
    },
    {
      accessorKey: "email",
      header: () => {
        return <Title className="w-[150px]">Email</Title>;
      },
      cell: ({ row }) => {
        return <Text className="text-[13px]">{row.original.email}</Text>;
      },
    },
    {
      accessorKey: "projects",
      header: () => {
        return <Title className="w-[120px]">Project Assigned</Title>;
      },
      cell: ({ row }) => {
        return (
          <Text
            className="text-[13px] flex items-center gap-2"
            as="link"
            href={routes.usersProjects(row.original.id)}
          >
            <FolderGit2 className="h-4 w-4" />
            {row.original.projects}
          </Text>
        );
      },
    },
    {
      accessorKey: "created_at",
      header: ({ column }) => {
        return (
          <DataTableColumnHeader
            column={column}
            title="Last Activity"
            className="w-[150px]"
          />
        );
      },
      cell: ({ row }) => {
        return (
          <Text className="text-[13px]">
            {formatDate(row.original.created_at, true)}
          </Text>
        );
      },
    },
    {
      accessorKey: "last_activity_at",
      header: ({ column }) => {
        return (
          <DataTableColumnHeader
            column={column}
            title="Created At"
            className="w-[150px]"
          />
        );
      },
      cell: ({ row }) => {
        return (
          <Text className="text-[13px]">
            {formatDate(row.original.created_at, true)}
          </Text>
        );
      },
    },
    {
      id: "actions",
      cell: () => {
        return (
          // <DropdownMenu>
          //   <DropdownMenuTrigger asChild>
          //     <Button variant="ghost" className="h-8 w-8 p-0">
          //       <span className="sr-only">Open menu</span>
          //       <EllipsisVertical className="h-4 w-4" />
          //     </Button>
          //   </DropdownMenuTrigger>
          //   <DropdownMenuContent align="start" side="left" className="w-56">
          //     {userActions?.map((action, index) => {
          //       return action.icon ? (
          //         <DropdownMenuItem
          //           key={index}
          //           className="py-1.5 cursor-pointer"
          //         >
          //           <action.icon className="mr-3 h-[14px] w-[14px]" />
          //           <span className="text-[13px]">{action.title}</span>
          //         </DropdownMenuItem>
          //       ) : (
          //         <DropdownMenuSeparator
          //           className="my-1 bg-primary/20"
          //           key={index}
          //         />
          //       );
          //     })}
          //   </DropdownMenuContent>
          // </DropdownMenu>

          <UserActions />
        );
      },
    },
  ];
};

const UserActions = () => {
  const { setChildren, setClassName, setOpen, setTitle } = useModal();

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" className="h-8 w-8 p-0">
          <span className="sr-only">Open menu</span>
          <EllipsisVertical className="h-4 w-4" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="start" side="left" className="w-56">
        <DropdownMenuItem
          className="py-1.5 cursor-pointer"
          onClick={() => {
            setOpen(true);
            setTitle("Assign Project > User Name");
            setClassName("max-w-[1000px]");
            setChildren(<AssignProjectToUser />);
          }}
        >
          <CircleCheckBig className="mr-3 h-[14px] w-[14px]" />
          <span className="text-[13px]">Assign Project</span>
        </DropdownMenuItem>
        <DropdownMenuItem
          className="py-1.5 cursor-pointer"
          onClick={() => {
            setOpen(true);
            setTitle("Remove Project > User Name");
            setClassName("max-w-[600px]");
            setChildren(<RemoveProjectFromUser />);
          }}
        >
          <CheckCheck className="mr-3 h-[14px] w-[14px]" />
          <span className="text-[13px]">Remove Project</span>
        </DropdownMenuItem>
        <DropdownMenuSeparator className="my-1 bg-primary/20" />
        <DropdownMenuItem
          className="py-1.5 cursor-pointer"
          onClick={() => {
            setOpen(true);
            setTitle("Confirmation");
            setClassName("max-w-[400px]");
            setChildren(
              <ConfirmationModal
                title="Are you Sure, You want to Disable the User"
                name="User Name"
              />
            );
          }}
        >
          <RefreshCcwDot className="mr-3 h-[14px] w-[14px]" />
          <span className="text-[13px]">Disable</span>
        </DropdownMenuItem>
        <DropdownMenuItem
          className="py-1.5 cursor-pointer"
          onClick={() => {
            setOpen(true);
            setTitle("Confirmation");
            setClassName("max-w-[400px]");
            setChildren(
              <ConfirmationModal
                title="Are you Sure, You want to Enable the User"
                name="User Name"
              />
            );
          }}
        >
          <Undo className="mr-3 h-[14px] w-[14px]" />
          <span className="text-[13px]">Enable</span>
        </DropdownMenuItem>
        <DropdownMenuSeparator className="my-1 bg-primary/20" />
        <DropdownMenuItem
          className="py-1.5 cursor-pointer"
          onClick={() => {
            setOpen(true);
            setTitle("Confirmation");
            setClassName("max-w-[400px]");
            setChildren(
              <ConfirmationModal
                title="Are you Sure, You want to Grant HR Role to the User"
                name="User Name"
              />
            );
          }}
        >
          <ArchiveRestore className="mr-3 h-[14px] w-[14px]" />
          <span className="text-[13px]">Grant HR Role</span>
        </DropdownMenuItem>
        <DropdownMenuItem
          className="py-1.5 cursor-pointer"
          onClick={() => {
            setOpen(true);
            setTitle("Confirmation");
            setClassName("max-w-[400px]");
            setChildren(
              <ConfirmationModal
                title="Are you Sure, You want to Grant Super-admin Role to the User"
                name="User Name"
              />
            );
          }}
        >
          <Trash2 className="mr-3 h-[14px] w-[14px]" />
          <span className="text-[13px]">Grant Super-admin Role</span>
        </DropdownMenuItem>
        <DropdownMenuItem
          className="py-1.5 cursor-pointer"
          onClick={() => {
            setOpen(true);
            setTitle("Confirmation");
            setClassName("max-w-[400px]");
            setChildren(
              <ConfirmationModal
                title="Are you Sure, You want to Revoke HR Role to the User"
                name="User Name"
              />
            );
          }}
        >
          <OctagonX className="mr-3 h-[14px] w-[14px]" />
          <span className="text-[13px]">Revoke HR Role</span>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

const ConfirmationModal = ({
  title,
  name,
}: {
  title: string;
  name: string;
}) => {
  return (
    <div className="p-4 space-y-6">
      <Title className="font-semibold text-base text-center">
        <span className="font-normal text-sm">{title}</span> {name} ?
      </Title>

      <div className="flex justify-center gap-4 items-center ">
        <AlertDialogCancel asChild>
          <Button variant="outline" className="px-10 font-lexend">
            Cancel
          </Button>
        </AlertDialogCancel>
        <Button type="submit" className="px-10 font-lexend">
          Yes
        </Button>
      </div>
    </div>
  );
};
