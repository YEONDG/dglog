import { z } from 'zod';

export const guestbookSchema = z.object({
  name: z.string().min(1, '이름은 필수입니다.').max(10, '이름은 10자 이하여야 합니다.'),
  message: z.string().min(1, '메시지는 필수입니다.').max(30, '메시지는 30자 이하여야 합니다.'),
  password: z.string().min(1, '비밀번호는 필수입니다.').max(10, '비밀번호는 10자 이하여야 합니다.'),
  isPrivate: z.boolean().default(false),
});

export type GuestbookSchema = z.infer<typeof guestbookSchema>;
