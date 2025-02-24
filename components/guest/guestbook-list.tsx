// components/guest/GuestBookList.tsx
'use client';

import { Guestbook } from '@prisma/client';
import { GuestBookEntry } from './guestbook-entry';

interface GuestBookListProps {
  entries: Guestbook[];
  onDelete: (entry: Guestbook) => void;
}

export const GuestBookList = ({ entries, onDelete }: GuestBookListProps) => {
  return (
    <ul className='space-y-3'>
      {entries.map((entry) => (
        <GuestBookEntry key={entry.id} entry={entry} onDelete={onDelete} />
      ))}
    </ul>
  );
};
