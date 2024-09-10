export const routes = {
  login: "/",
  dashboard: "/dashboard",
  projects: "/projects",
  showProjectUsers: (id: number) => `/projects/users?project=${id}`,
  projectDetail: (id: number) => `/projects/${id}`,
  notesDetail: (project: number, note: number) =>
    `/projects/${project}?tab=notes&note=${note}`,
  users: "/users",
  usersProjects: (id: number) => `/users/projects?user=${id}`,
  userDetail: (id: number) => `/users/${id}`,
  tasks: "/tasks",
  taskDetail: (id: number) => `/tasks/${id}`,
  milestones: "/milestones",
  milestoneDetail: (id: number) => `/milestones/${id}`,
  analytics: "/analytics",
  archive: "/archive",

  personalSettings: {
    profile: "/users/profile",
    timelogs: "/timelogs",
    notifications: "/email-notifications",
    emailReports: "/email-reports",
    announcements: "/announcements",
    signOut: "/sign-out",
  },

  companySettings: {
    myCompany: "/my-company",
    importsExports: "/imports-exports",
    taskType: "/task-type",
    takeBackup: "/take-backup",
  },
};
