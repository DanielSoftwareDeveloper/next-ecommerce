import { z } from "zod";

export const SignInSchema = z.object({
  email: z.string().email().min(2, {
    message: "Please enter a valid email address.",
  }),
  password: z.string().min(2, {
    message: "Wrong password",
  }),
});

export const SignUpSchema = z
  .object({
    username: z.string().min(2, {
      message: "Username must contain at least 2 characters.",
    }),
    email: z.string().email().min(2, {
      message: "Username must be at least 2 characters.",
    }),
    password: z
      .string()
      .min(5, {
        message: "Password must contain at least 5 characters.",
      })
      .max(50, {
        message: "Password cannot exceed 50 characters",
      })
      .regex(/[a-zA-Z]/, {
        message: "Password must contain at least one letter",
      })
      .regex(/[0-9]/, {
        message: "Password must contain at least one number",
      })
      .regex(/[^a-zA-Z0-9]/, {
        message: "Password must contain at least one special character",
      }),
    confirmPassword: z.string().min(5, {
      message: "Password must contain at least 5 characters.",
    }),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords do not match",
    path: ["confirmPassword"], // Muestra el error en el campo correcto
  });
