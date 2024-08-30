export const routes = {
  login: "/",
  dashboard: "/dashboard",
  projects: "/projects",
  projectDetail: (id: number) => `/projects/${id}`,
  users: "/users",
  tasks: "/tasks",
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
