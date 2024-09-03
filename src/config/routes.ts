export const routes = {
  login: "/",
  dashboard: "/dashboard",
  projects: "/projects",
  projectDetail: (id: number) => `/projects/${id}`,
  users: "/users",
  userDetail: (id: number) => `/users/${id}`,
  tasks: "/tasks",
  taskDetail: (id: number) => `/tasks/${id}`,
  milestones: "/milestones",
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
