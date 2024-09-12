import { z } from "zod";

export const taskCreateSchema = z.object({
  task_title: z.string().min(1, { message: "Task Title is required" }),
  priority: z.string().min(1, { message: "Please enter your Task priority" }),
  task_detail: z.string().optional(),
  project: z.string().min(1, { message: "Please select a project" }),
});

export type TaskCreateInputType = z.infer<typeof taskCreateSchema>;
