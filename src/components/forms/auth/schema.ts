import { z } from 'zod';

export const loginSchema = z.object({
  email: z.string().min(1, 'Введите логин или email'),
  password: z.string().min(1, 'Введите пароль'),
  saveSession: z.boolean().optional()
});

export type LoginFormData = z.infer<typeof loginSchema>;
