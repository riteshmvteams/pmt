import { z } from "zod";

export const emailReportsSchema = z.object({
  weekly_usage: z.string().min(1, { message: "Required" }),
  task_status: z.string().min(1, { message: "Required" }),
  task_due: z.string().min(1, { message: "Required" }),
  daily_update: z.string().min(1, { message: "Required" }),
});

export type EmailReportsInputType = z.infer<typeof emailReportsSchema>;
