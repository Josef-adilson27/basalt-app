import { z } from 'zod';

export const sendFormSchema = z.object({
  github: z.string().min(1, 'Обязательное поле').url('Некорректная ссылка'),
  demo: z.string().url('Некорректная ссылка').optional().or(z.literal(''))
});


export type SendFormData = z.infer<typeof sendFormSchema>;
