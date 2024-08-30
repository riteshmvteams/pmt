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
import { routes } from "./routes";

export const NAVIGATION_MENUS = [
  {
    id: 1,
    title: "Dashboard",
    href: routes.dashboard,
    icon: Home,
  },
  {
    id: 2,
    title: "Projects",
    href: routes.projects,
    icon: FolderOpenDot,
  },
  {
    id: 3,
    title: "Users",
    href: routes.users,
    icon: Users,
  },
  {
    id: 4,
    title: "Tasks",
    href: routes.tasks,
    icon: FileCheck2,
    badge: 25,
  },
  {
    id: 5,
    title: "Milestones",
    href: routes.milestones,
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
        href: routes.analytics,
        icon: ChartNoAxesCombined,
      },
      {
        id: 2,
        title: "Archives",
        href: routes.archive,
        icon: ArchiveRestore,
      },
    ],
  },
  {
    id: 7,
    title: "Starred",
    href: `${routes.projects}?filter=starred`,
    icon: Star,
  },
];

export const PERSONAL_SETTINGS = [
  {
    id: 1,
    title: "My Profile",
    href: routes.personalSettings.profile,
  },
  {
    id: 2,
    title: "Timelogs",
    href: routes.personalSettings.timelogs,
  },
  {
    id: 3,
    title: "Notifications",
    href: routes.personalSettings.notifications,
  },
  {
    id: 4,
    title: "Email Reports",
    href: routes.personalSettings.emailReports,
  },
  {
    id: 5,
    title: "Announcements",
    href: routes.personalSettings.announcements,
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
    href: routes.companySettings.myCompany,
  },
  {
    id: 2,
    title: "Imports & Exports",
    href: routes.companySettings.importsExports,
  },
  {
    id: 3,
    title: "Task Type",
    href: routes.companySettings.taskType,
  },
  {
    id: 4,
    title: "Take Backup",
    href: routes.companySettings.takeBackup,
  },
];
