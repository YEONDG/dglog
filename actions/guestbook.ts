'use server';

import { prisma } from '@/prisma/db';
import { Guestbook } from '@prisma/client';
import { revalidatePath } from 'next/cache';
import bcrypt from 'bcrypt';

type GuestbookState = {
  success?: boolean;
  error?: string;
  entry?: Guestbook;
  id?: string;
};

const SALT_ROUNDS = parseInt(process.env.BCRYPT_SALT_ROUNDS || '10');

export async function addGuestEntry(prevState: GuestbookState, formData: FormData): Promise<GuestbookState> {
  const name = formData.get('name') as string;
  const message = formData.get('message') as string;
  const password = formData.get('password') as string;
  const isPrivate = formData.get('isPrivate') === 'true';

  if (!name || !message || !password) {
    return { success: false, error: '모든 필드를 입력해주세요.' };
  }

  const hashedPassword = await bcrypt.hash(password, SALT_ROUNDS);

  try {
    const newEntry = await prisma.guestbook.create({
      data: { name, message, password: hashedPassword, isPrivate },
    });

    revalidatePath('/guestbook');

    return { ...prevState, success: true, entry: newEntry };
  } catch (error) {
    return {
      ...prevState,
      error: error instanceof Error ? error.message : '데이터 저장 중 알 수 없는 오류가 발생했습니다.',
    };
  }
}

export async function deleteGuestEntry(prevState: GuestbookState, formData: FormData): Promise<GuestbookState> {
  const id = formData.get('id') as string;
  const password = formData.get('password') as string;

  try {
    const existing = await prisma.guestbook.findUnique({
      where: { id },
      select: { id: true, password: true },
    });

    if (!existing) {
      return { ...prevState, success: false, error: '해당 글이 존재하지 않습니다.' };
    }

    const passwordMatch = await bcrypt.compare(password, existing?.password || '');
    if (!passwordMatch) {
      return { success: false, error: '비밀번호가 일치하지 않습니다.' };
    }

    await prisma.guestbook.delete({
      where: { id },
    });

    revalidatePath('/guestbook');

    return { success: true, id };
  } catch (error) {
    return {
      ...prevState,
      success: false,
      error: error instanceof Error ? error.message : '삭제 중 알 수 없는 오류가 발생했습니다.',
    };
  }
}

export async function getGuestEntries() {
  try {
    return await prisma.guestbook.findMany({
      orderBy: { createdAt: 'desc' },
    });
  } catch (error) {
    console.error('❌ getGuestEntries Error:', error);

    return [];
  }
}

export async function verifyPrivateEntry(formData: FormData) {
  const id = formData.get('id') as string;
  const password = formData.get('password') as string;

  try {
    if (!id || !password) {
      return { success: false, error: '필수 정보가 누락되었습니다.' };
    }

    const entry = await prisma.guestbook.findUnique({
      where: { id },
      select: {
        id: true,
        password: true,
        isPrivate: true,
      },
    });

    if (!entry) {
      return { success: false, error: '해당 글을 찾을 수 없습니다.' };
    }

    if (!entry.isPrivate) {
      return { success: true };
    }

    const passwordMatch = await bcrypt.compare(password, entry.password);

    if (!passwordMatch) {
      return { success: false, error: '비밀번호가 일치하지 않습니다.' };
    }

    return { success: true };
  } catch (error) {
    console.error('비밀글 확인 중 오류:', error);
    return {
      success: false,
      error: error instanceof Error ? error.message : '비밀글 확인 중 오류가 발생했습니다.',
    };
  }
}
