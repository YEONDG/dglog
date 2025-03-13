'use client';

import { Guestbook } from '@prisma/client';
import { GuestBookEntry } from './guestbook-entry';
import { useState } from 'react';

interface GuestBookListProps {
  entries: Guestbook[];
  onDelete: (entry: Guestbook) => void;
  onViewPrivate: (entry: Guestbook) => Promise<boolean>;
}

export const GuestBookList = ({ entries, onDelete, onViewPrivate }: GuestBookListProps) => {
  const [unlockedEntries, setUnlockedEntries] = useState<Set<string>>(new Set());

  const handleViewPrivate = async (entry: Guestbook): Promise<boolean> => {
    const isPasswordCorrect = await onViewPrivate(entry);

    if (isPasswordCorrect) {
      setUnlockedEntries((prev) => {
        const newSet = new Set(prev);
        newSet.add(entry.id);
        return newSet;
      });
      return true;
    }

    return false;
  };

  return (
    <ul className='space-y-3'>
      {entries.map((entry) => (
        <GuestBookEntry
          key={entry.id}
          entry={entry}
          onDelete={onDelete}
          onViewPrivate={handleViewPrivate}
          isUnlocked={entry.isPrivate ? unlockedEntries.has(entry.id) : true}
        />
      ))}
    </ul>
  );
};
