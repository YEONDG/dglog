"use server";

import { prisma } from "@/prisma/db";
import { Guestbook } from "@prisma/client";
import { revalidatePath } from "next/cache";
import bcrypt from "bcrypt";

type GuestbookState = {
  success?: boolean;
  error?: string;
  entry?: Guestbook;
  id?: string;
};

const SALT_ROUNDS = parseInt(process.env.BCRYPT_SALT_ROUNDS || "10");
const PEPPER = process.env.PASSWORD_PEPPER;

if (!PEPPER) {
  console.error(
    "WARNING: PASSWORD_PEPPER is not set. Password security is compromised!",
  );
  // 개발 환경에서는 경고만 출력하고, 배포 환경에서는 에러를 던지는 방식도 가능
  if (process.env.NODE_ENV === "production") {
    throw new Error("PASSWORD_PEPPER must be set in production environment");
  }
}

async function hashPassword(password: string): Promise<string> {
  if (!PEPPER) {
    throw new Error("PASSWORD_PEPPER is not configured");
  }
  // password + PEPPER를 합쳐서 한 번만 해싱
  return bcrypt.hash(password + PEPPER, SALT_ROUNDS);
}

async function verifyPassword(
  inputPassword: string,
  hashedPassword: string,
): Promise<boolean> {
  if (!PEPPER) {
    throw new Error("PASSWORD_PEPPER is not configured");
  }
  // 입력 비밀번호 + PEPPER를 동일한 방식으로 비교
  return bcrypt.compare(inputPassword + PEPPER, hashedPassword);
}

export async function addGuestEntry(
  prevState: GuestbookState,
  formData: FormData,
): Promise<GuestbookState> {
  const name = formData.get("name") as string;
  const message = formData.get("message") as string;
  const password = formData.get("password") as string;
  const isPrivate = formData.get("isPrivate") === "true";

  if (!name || !message || !password) {
    return { success: false, error: "모든 필드를 입력해주세요." };
  }

  const hashedPassword = await hashPassword(password);

  try {
    const newEntry = await prisma.guestbook.create({
      data: { name, message, password: hashedPassword, isPrivate },
    });

    revalidatePath("/guestbook");

    return { ...prevState, success: true, entry: newEntry };
  } catch (error) {
    let errorMessage = "데이터 저장 중 알 수 없는 오류가 발생했습니다.";

    if (error instanceof Error) {
      if (error.message.includes("PASSWORD_PEPPER")) {
        errorMessage = "서버 설정 오류: 관리자에게 문의하세요";
      } else {
        errorMessage = error.message;
      }
    }

    return {
      ...prevState,
      success: false,
      error: errorMessage,
    };
  }
}

export async function deleteGuestEntry(
  prevState: GuestbookState,
  formData: FormData,
): Promise<GuestbookState> {
  const id = formData.get("id") as string;
  const password = formData.get("password") as string;

  try {
    const existing = await prisma.guestbook.findUnique({
      where: { id },
      select: { id: true, password: true },
    });

    if (!existing) {
      return {
        ...prevState,
        success: false,
        error: "해당 글이 존재하지 않습니다.",
      };
    }

    const passwordMatch = await verifyPassword(password, existing.password);
    if (!passwordMatch) {
      return { success: false, error: "비밀번호가 일치하지 않습니다." };
    }

    await prisma.guestbook.delete({
      where: { id },
    });

    revalidatePath("/guestbook");

    return { success: true, id };
  } catch (error) {
    let errorMessage = "삭제 중 알 수 없는 오류가 발생했습니다.";

    if (error instanceof Error) {
      if (error.message.includes("PASSWORD_PEPPER")) {
        errorMessage = "서버 설정 오류: 관리자에게 문의하세요";
      } else {
        errorMessage = error.message;
      }
    }

    return {
      ...prevState,
      success: false,
      error: errorMessage,
    };
  }
}

export async function getGuestEntries() {
  try {
    return await prisma.guestbook.findMany({
      orderBy: { createdAt: "desc" },
    });
  } catch (error) {
    console.error("❌ getGuestEntries Error:", error);

    return [];
  }
}

export async function verifyPrivateEntry(formData: FormData) {
  const id = formData.get("id") as string;
  const password = formData.get("password") as string;

  try {
    if (!id || !password) {
      return { success: false, error: "필수 정보가 누락되었습니다." };
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
      return { success: false, error: "해당 글을 찾을 수 없습니다." };
    }

    if (!entry.isPrivate) {
      return { success: true };
    }

    const passwordMatch = await verifyPassword(password, entry.password);

    if (!passwordMatch) {
      return { success: false, error: "비밀번호가 일치하지 않습니다." };
    }

    return { success: true };
  } catch (error) {
    let errorMessage = "비밀글 확인 중 오류가 발생했습니다.";

    if (error instanceof Error) {
      if (error.message.includes("PASSWORD_PEPPER")) {
        errorMessage = "서버 설정 오류: 관리자에게 문의하세요";
      } else {
        errorMessage = error.message;
      }
    }

    return {
      success: false,
      error: errorMessage,
    };
  }
}
