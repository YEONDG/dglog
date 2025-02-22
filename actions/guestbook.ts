'use server';

import { prisma } from '@/prisma/db';
import { Guestbook } from '@prisma/client';
import { revalidatePath } from 'next/cache';

type GuestbookState = {
  success?: boolean;
  error?: string;
  entry?: Guestbook;
  id?: string;
};

export async function addGuestEntry(prevState: GuestbookState, formData: FormData): Promise<GuestbookState> {
  const name = formData.get('name') as string;
  const message = formData.get('message') as string;
  const password = formData.get('password') as string;

  if (!name.trim() || !message.trim()) {
    return { error: '이름과 메시지를 입력하세요.' };
  }

  try {
    const newEntry = await prisma.guestbook.create({
      data: { name, message, password },
    });

    revalidatePath('/guestbook');

    return { ...prevState, success: true, entry: newEntry };
  } catch (error) {
    return { ...prevState, error: '데이터 저장 중 오류가 발생했습니다.' };
  }
}

export async function deleteGuestEntry(prevState: GuestbookState, formData: FormData): Promise<GuestbookState> {
  const id = formData.get('id') as string;
  const password = formData.get('password') as string;

  const existing = await prisma.guestbook.findUnique({
    where: { id },
    select: { id: true, password: true },
  });

  if (!existing) {
    return { ...prevState, success: false, error: '해당 글이 존재하지 않습니다.' };
  }

  if (existing.password !== password) {
    return { ...prevState, success: false, error: '비밀번호가 올바르지 않습니다.' };
  }

  await prisma.guestbook.delete({
    where: { id },
  });

  revalidatePath('/guestbook');
  return { success: true, id };
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
