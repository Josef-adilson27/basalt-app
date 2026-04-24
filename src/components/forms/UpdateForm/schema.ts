import { z } from "zod";

export const profileSchema = z.object({
  name: z.string()
    .min(2, "Имя должно содержать минимум 2 символа")
    .max(50, "Имя не должно превышать 50 символов")
    .regex(/^[a-zA-Zа-яА-ЯёЁ_]+$/, "Имя может содержать только буквы (латиница или кириллица), цифры и нижнее подчеркивание")
    .transform((str) => str.trim())
    .optional()
    .or(z.literal('')),
  
  telegram: z.string()
    .min(3, "Telegram username должен содержать минимум 3 символа")
    .max(32, "Telegram username не должен превышать 32 символа")
    .regex(/^[a-zA-Z0-9_]+$/, "Telegram username может содержать только буквы, цифры и нижнее подчеркивание")
    .optional()
    .or(z.literal('')),
  
  email: z.string()
    .email("Введите корректный email адрес")
    .min(5, "Email должен содержать минимум 5 символов")
    .optional()
    .or(z.literal('')),
  
  aboutMe: z.string()
    .max(500, "Описание не должно превышать 500 символов")
    .optional()
    .or(z.literal(''))
});

export type ProfileFormData = z.infer<typeof profileSchema>;