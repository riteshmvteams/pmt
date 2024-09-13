export const routes = {
  login: "/",
  dashboard: "/dashboard",
  projects: "/projects",
  showProjectUsers: (id: number) => `/projects/users?project=${id}`,
  projectDetail: (id: number) => `/projects/${id}`,
  notesDetail: (project: number, note: number) =>
    `/projects/${project}?note=${note}`,
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
    profile: "/personal-settings/profile",
    changePassword: "/personal-settings/change-password",
    timelogs: "/personal-settings/timelogs",
    notifications: "/personal-settings/email-notifications",
    emailReports: "/personal-settings/email-reports",
    announcements: "/personal-settings/announcements",
    signOut: "/sign-out",
  },

  companySettings: {
    myCompany: "company-settings/my-company",
    importsExports: "company-settings/imports-exports",
    taskType: "company-settings/task-type",
    takeBackup: "company-settings/take-backup",
  },
};
