'use client';

import { X } from 'lucide-react';
import { Guestbook } from '@prisma/client';

interface GuestBookEntryProps {
  entry: Guestbook;
  onDelete: (entry: Guestbook) => void;
}

export const GuestBookEntry = ({ entry, onDelete }: GuestBookEntryProps) => {
  return (
    <li className='flex justify-between items-center p-2 border rounded-md shadow-sm '>
      <div>
        <p className='font-semibold'>{entry.name}</p>
        <p className=''>{entry.message}</p>
      </div>
      <div>
        <X className='transition-transform hover:scale-125 cursor-pointer' onClick={() => onDelete(entry)} />
      </div>
    </li>
  );
};
