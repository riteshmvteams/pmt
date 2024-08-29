import {
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
    href: "/projects/manage",
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
    title: "Starred",
    href: "/projects/manage?filter=starred",
    icon: Star,
  },
];
