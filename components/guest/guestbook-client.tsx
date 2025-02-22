'use client';

import { startTransition, useActionState, useEffect, useOptimistic } from 'react';
import { addGuestEntry, deleteGuestEntry } from '@/actions/guestbook';
import { SubmitButton } from '@/components/guest/submit-btn';
import { Guestbook } from '@prisma/client';
import { X } from 'lucide-react';
import { toast } from 'sonner';

interface GuestBookClientProps {
  initialEntries: Guestbook[];
}

export function GuestBookClient({ initialEntries }: GuestBookClientProps) {
  const [optimisticList, addOptimisticEntry] = useOptimistic<Guestbook[], FormData>(
    initialEntries,
    (currentList, formData) => {
      const name = formData.get('name') as string;
      const message = formData.get('message') as string;
      const password = formData.get('password') as string;

      const newEntry: Guestbook = {
        id: crypto.randomUUID(),
        name,
        message,
        password,
        createdAt: new Date(),
      };

      return [newEntry, ...currentList];
    }
  );
  console.log('리렌더링');

  const [addState, addFormAction] = useActionState(addGuestEntry, {
    success: false,
    error: undefined as string | undefined,
    entry: undefined as Guestbook | undefined,
  });

  const [deleteState, deleteFormAction] = useActionState(deleteGuestEntry, {
    success: false,
    error: undefined as string | undefined,
  });

  async function handleAdd(formData: FormData) {
    startTransition(async () => {
      addOptimisticEntry(formData);
      await addFormAction(formData);
    });
  }

  async function handleDelete(entry: Guestbook) {
    // 사용자에게 비밀번호 입력받기 (간단히 prompt 예시)
    const pw = prompt('비밀번호를 입력해주세요.');
    if (!pw) return;

    // 폼 데이터 구성
    const formData = new FormData();
    formData.set('id', entry.id);
    formData.set('password', pw);

    // 서버 액션 호출 (일반 방식)
    startTransition(async () => {
      await deleteFormAction(formData);
    });
  }

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
    <div className='max-w-lg mx-auto p-4 bg-white shadow-lg rounded-lg mt-10'>
      <h1 className='text-2xl font-bold mb-2 text-center'>📖 Guestbook</h1>

      {/* 작성창 */}
      <form action={handleAdd} className='mb-6'>
        <div className='flex gap-2'>
          <input type='text' name='name' className='w-full p-2 border rounded-md mb-2' placeholder='이름' required />
          <input
            type='password'
            name='password'
            className='w-full p-2 border rounded-md mb-2'
            placeholder='비밀번호'
            required
          />
        </div>
        <textarea
          name='message'
          className='w-full p-2 border rounded-md'
          placeholder='메시지를 입력하세요...'
          required
        />
        <SubmitButton />
      </form>

      {addState?.error && <p className='text-red-500'>{addState.error}</p>}

      {/* 방명록 목록 */}
      <ul className='space-y-3'>
        {optimisticList.map((entry) => (
          <li key={entry.id} className='flex justify-between items-center p-3 border rounded-md shadow-sm bg-gray-50'>
            <div>
              <p className='font-semibold'>{entry.name}</p>
              <p className='text-gray-700'>{entry.message}</p>
            </div>
            <div>
              <X className='transition-transform hover:scale-125 cursor-pointer' onClick={() => handleDelete(entry)} />
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
