'use client';

import { startTransition, useActionState, useEffect, useOptimistic } from 'react';
import { addGuestEntry, deleteGuestEntry } from '@/actions/guestbook';
import { Guestbook } from '@prisma/client';
import { toast } from 'sonner';
import { GuestBookList } from './guestbook-list';
import { GuestBookForm } from './guestbook-form';

interface GuestBookClientProps {
  initialEntries: Guestbook[];
}

export const GuestBookClient = ({ initialEntries }: GuestBookClientProps) => {
  const [optimisticList, addOptimisticEntry] = useOptimistic<Guestbook[], FormData>(
    initialEntries,
    (currentList, formData) => {
      const name = formData.get('name') as string;
      const message = formData.get('message') as string;
      const password = formData.get('password') as string;
      const isPrivate = formData.get('isPrivate') === 'true';

      const newEntry: Guestbook = {
        id: crypto.randomUUID(),
        name,
        message,
        password,
        isPrivate,
        createdAt: new Date(),
      };

      return [newEntry, ...currentList];
    }
  );

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
    const pw = prompt('비밀번호를 입력해주세요.');
    if (!pw) return;

    const formData = new FormData();
    formData.set('id', entry.id);
    formData.set('password', pw);

    startTransition(async () => {
      await deleteFormAction(formData);
    });
  };

  const handleViewPrivate = async (entry: Guestbook) => {
    const pw = prompt('비밀번호를 입력해주세요.');
    if (!pw) return false;

    return pw === entry.password;
  };

  useEffect(() => {
    if (addState.success) {
      toast.success('등록 완료');
    } else if (addState.error) {
      toast.error(addState.error ?? '글 등록에 실패했습니다.');
    }
  }, [addState.success, addState.error, addState.entry?.id]);

  useEffect(() => {
    if (deleteState.success) {
      toast.success('글이 삭제되었습니다!');
    } else if (deleteState.error) {
      toast.error(deleteState.error ?? '삭제 실패');
    }
  }, [deleteState.success, deleteState.error, deleteState.id]);

  return (
    <div className='flex flex-col gap-4 max-w-lg mx-auto p-4 shadow-lg rounded-lg mt-10 dark:bg-gray-700'>
      <h1 className='text-2xl font-bold text-center'>📖 Guestbook</h1>

      {/* 방명록 목록 */}
      <GuestBookList entries={optimisticList} onDelete={handleDelete} onViewPrivate={handleViewPrivate} />

      {/* 작성창 */}
      <GuestBookForm addFormAction={handleAdd} />
      {addState?.error && <p className='text-red-500'>{addState.error}</p>}
    </div>
  );
};
