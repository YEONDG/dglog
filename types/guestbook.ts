import { Guestbook } from "@prisma/client";

export type GuestbookState = {
  success?: boolean;
  error?: string;
  entry?: Guestbook;
  id?: string;
};
