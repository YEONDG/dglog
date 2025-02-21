'use server';

import { prisma } from '@/prisma/db';
import { Guestbook } from '@prisma/client';

type GuestbookState = {
  success?: boolean;
  error?: string;
  entry?: Guestbook;
};

export async function addGuestEntry(prevState: GuestbookState, formData: FormData): Promise<GuestbookState> {
  const name = formData.get('name') as string;
  const message = formData.get('message') as string;

  if (!name.trim() || !message.trim()) {
    return { error: '이름과 메시지를 입력하세요.' };
  }

  try {
    const newEntry = await prisma.guestbook.create({
      data: { name, message },
    });

    return { success: true, entry: newEntry };
  } catch (error) {
    return { error: '데이터 저장 중 오류가 발생했습니다.' };
  }
}

export async function getGuestEntries() {
  try {
    return await prisma.guestbook.findMany({
      orderBy: { createdAt: 'desc' },
    });
  } catch (error) {
    return [];
  }
}
