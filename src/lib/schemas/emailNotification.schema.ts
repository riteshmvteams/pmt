import { z } from "zod";

export const emailNotificationSchema = z.object({
  new_task: z.string().min(1, { message: "Required" }),
  task_reply: z.string().min(1, { message: "Required" }),
  task_status: z.string().min(1, { message: "Required" }),
});

export type EmailNotificationInputType = z.infer<
  typeof emailNotificationSchema
>;
