'use client';

import { useActionState, useState } from 'react';
import { addGuestEntry } from '@/actions/guestbook';
import { SubmitButton } from '@/components/guest/submit-btn';
import { Guestbook } from '@prisma/client';

interface GuestBookClientProps {
  initialEntries: Guestbook[];
}

export function GuestBookClient({ initialEntries }: GuestBookClientProps) {
  const [list, setList] = useState<Guestbook[]>(initialEntries);

  const [state, formAction] = useActionState(addGuestEntry, { success: false, error: undefined, entry: undefined });

  if (state.success && state.entry) {
    if (!list.some((item) => item.id === state.entry?.id)) {
      setList((prev) => [state.entry!, ...prev]);
    }
  }

  return (
    <div className='max-w-lg mx-auto p-6 bg-white shadow-lg rounded-lg mt-10'>
      <h1 className='text-2xl font-bold mb-4 text-center'>📖 Guestbook</h1>

      {/* 작성창 */}
      <form action={formAction} className='mb-6'>
        <input type='text' name='name' className='w-full p-2 border rounded-md mb-2' placeholder='이름' required />
        <textarea
          name='message'
          className='w-full p-2 border rounded-md'
          placeholder='메시지를 입력하세요...'
          required
        />
        <SubmitButton />
      </form>

      {state?.error && <p className='text-red-500'>{state.error}</p>}

      {/* 방명록 목록 */}
      <ul className='space-y-3'>
        {list.map((entry) => (
          <li key={entry.id} className='p-3 border rounded-md shadow-sm bg-gray-50'>
            <p className='font-semibold'>{entry.name}</p>
            <p className='text-gray-700'>{entry.message}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
