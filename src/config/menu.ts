import {
  ArchiveRestore,
  ChartNoAxesCombined,
  FileCheck2,
  FolderOpenDot,
  Home,
  Milestone,
  Star,
  Users,
} from "lucide-react";

export const NAVIGATION_MENUS = [
  {
    id: 1,
    title: "Dashboard",
    href: "/dashboard",
    icon: Home,
  },
  {
    id: 2,
    title: "Projects",
    href: "/projects",
    icon: FolderOpenDot,
  },
  {
    id: 3,
    title: "Users",
    href: "/users",
    icon: Users,
  },
  {
    id: 4,
    title: "Tasks",
    href: "/tasks",
    icon: FileCheck2,
    badge: 25,
  },
  {
    id: 5,
    title: "Milestones",
    href: "/milestones",
    icon: Milestone,
    badge: 11,
  },
  {
    id: 6,
    title: "More",
    children: [
      {
        id: 1,
        title: "Analytics",
        href: "/analytics",
        icon: ChartNoAxesCombined,
      },
      {
        id: 2,
        title: "Archives",
        href: "/archive",
        icon: ArchiveRestore,
      },
    ],
  },
  {
    id: 7,
    title: "Starred",
    href: "/projects?filter=starred",
    icon: Star,
  },
];

export const PERSONAL_SETTINGS = [
  {
    id: 1,
    title: "My Profile",
    href: "/users/profile",
  },
  {
    id: 2,
    title: "Timelogs",
    href: "/timelogs",
  },
  {
    id: 3,
    title: "Notifications",
    href: "/email-notifications",
  },
  {
    id: 4,
    title: "Email Reports",
    href: "/email-reports",
  },
  {
    id: 5,
    title: "Announcements",
    href: "/announcements",
  },
  {
    id: 6,
    title: "Sign Out",
  },
];

export const COMPANY_SETTINGS = [
  {
    id: 1,
    title: "My Company",
    href: "/my-company",
  },
  {
    id: 2,
    title: "Imports & Exports",
    href: "/imports-exports",
  },
  {
    id: 3,
    title: "Task Type",
    href: "/task-type",
  },
  {
    id: 4,
    title: "Take Backup",
    href: "/notes-backup",
  },
];
