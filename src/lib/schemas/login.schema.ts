import { z } from "zod";

export const loginFormSchema = z.object({
  email: z
    .string()
    .email({ message: "Please enter a valid email address" })
    .min(1, {
      message: "Please enter your email address",
    }),
  password: z.string().min(1, { message: "Please enter your password" }),
  remember: z.boolean().default(false).optional(),
});

export type LoginInputType = z.infer<typeof loginFormSchema>;
