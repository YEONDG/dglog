"use client";

import {
  startTransition,
  use,
  useActionState,
  useEffect,
  useOptimistic,
} from "react";
import {
  addGuestEntry,
  deleteGuestEntry,
  verifyPrivateEntry,
} from "@/actions/guestbook";
import { Guestbook } from "@prisma/client";
import { GuestBookList } from "@/components/guest/guestbook-list";
import { GuestBookForm } from "@/components/guest/guestbook-form";

import { nanoid } from "nanoid";
import { toast } from "sonner";

interface GuestBookClientProps {
  initialEntries: Promise<Guestbook[]>;
}

export const GuestBookClient = ({ initialEntries }: GuestBookClientProps) => {
  const initialList: Guestbook[] = use(initialEntries);

  const [optimisticList, addOptimisticEntry] = useOptimistic<
    Guestbook[],
    FormData
  >(initialList, (currentList, formData) => {
    const name = formData.get("name") as string;
    const message = formData.get("message") as string;
    const password = formData.get("password") as string;
    const isPrivate = formData.get("isPrivate") === "true";

    const newEntry: Guestbook = {
      id: nanoid(),
      name,
      message,
      password,
      isPrivate,
      createdAt: new Date(),
    };

    return [newEntry, ...currentList];
  });

  const [addState, addFormAction] = useActionState(addGuestEntry, {
    success: false,
    error: undefined as string | undefined,
    entry: undefined as Guestbook | undefined,
  });

  const [deleteState, deleteFormAction] = useActionState(deleteGuestEntry, {
    success: false,
    error: undefined as string | undefined,
  });

  const handleAdd = async (formData: FormData) => {
    startTransition(async () => {
      addOptimisticEntry(formData);
      await addFormAction(formData);
    });
  };

  const handleDelete = async (entry: Guestbook) => {
    const pw = prompt("비밀번호를 입력해주세요.");
    if (!pw) return;

    const formData = new FormData();
    formData.set("id", entry.id);
    formData.set("password", pw);

    startTransition(async () => {
      await deleteFormAction(formData);
    });
  };

  const handleViewPrivate = async (entry: Guestbook) => {
    const pw = prompt("비밀번호를 입력해주세요.");
    if (!pw) return false;

    const formData = new FormData();
    formData.set("id", entry.id);
    formData.set("password", pw);

    const result = await verifyPrivateEntry(formData);
    if (result.success) {
      toast.success("비밀글이 해제되었습니다!");
    } else {
      toast.error(result.error ?? "비밀글 해제에 실패했습니다.");
    }

    return result.success;
  };

  useEffect(() => {
    if (addState.success) {
      toast.success("등록 완료");
    } else if (addState.error) {
      toast.error(addState.error ?? "글 등록에 실패했습니다.");
    }
  }, [addState.success, addState.error, addState.entry?.id]);

  useEffect(() => {
    if (deleteState.success) {
      toast.success("글이 삭제되었습니다!");
    } else if (deleteState.error) {
      toast.error(deleteState.error ?? "삭제 실패");
    }
  }, [deleteState.success, deleteState.error, deleteState.id]);

  return (
    <div className="mx-auto mt-6 flex max-w-lg flex-col gap-4 rounded-lg p-4 shadow-lg ring-2 dark:bg-gray-700">
      <h2 className="text-center text-2xl font-bold">📖 Guestbook</h2>

      {/* 방명록 목록 */}
      <GuestBookList
        entries={optimisticList}
        onDelete={handleDelete}
        onViewPrivate={handleViewPrivate}
      />

      {/* 작성창 */}
      <GuestBookForm addFormAction={handleAdd} />
      {addState?.error && <p className="text-red-500">{addState.error}</p>}
    </div>
  );
};
