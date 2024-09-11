import { z } from "zod";

export const taskCreateSchema = z.object({
  email: z
    .string()
    .email({ message: "Please enter a valid email address" })
    .min(1, {
      message: "Please enter your email address",
    }),
  password: z.string().min(1, { message: "Please enter your password" }),
});

export type TaskCreateInputType = z.infer<typeof taskCreateSchema>;
