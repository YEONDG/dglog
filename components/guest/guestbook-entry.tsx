import { useState } from "react";
import { Guestbook } from "@prisma/client";
import { X, Lock, Unlock } from "lucide-react";

interface GuestBookEntryProps {
  entry: Guestbook;
  onDelete: (entry: Guestbook) => void;
  onViewPrivate?: (entry: Guestbook) => Promise<boolean>;
  isUnlocked?: boolean;
}

export const GuestBookEntry = ({
  entry,
  onDelete,
  onViewPrivate,
  isUnlocked = true,
}: GuestBookEntryProps) => {
  const [isVerifying, setIsVerifying] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const isPrivate = Boolean(entry.isPrivate);
  const isLocked = isPrivate && !isUnlocked;

  const handleUnlock = async () => {
    if (!onViewPrivate) return;

    setIsVerifying(true);
    setError(null);

    try {
      const result = await onViewPrivate(entry);
      if (!result) {
        setError("비밀번호가 일치하지 않습니다.");
      }
    } catch (err) {
      console.error(err);
      setError("오류가 발생했습니다.");
    } finally {
      setIsVerifying(false);
    }
  };

  return (
    <li className="flex items-start justify-between rounded-md border p-3 shadow-sm">
      <div className="flex-1">
        <div className="mb-1 flex items-center gap-2">
          <p className="font-semibold">{entry.name}</p>
          {isPrivate && (
            <span>
              {isLocked ? (
                <Lock size={14} className="text-gray-500" />
              ) : (
                <Unlock size={14} className="text-green-500" />
              )}
            </span>
          )}
        </div>

        {isLocked ? (
          <div className="py-1">
            <p className="text-sm text-gray-500">🔒 비밀글입니다</p>
            <button
              onClick={handleUnlock}
              disabled={isVerifying}
              className="mt-1 text-xs text-blue-500 hover:text-blue-700"
            >
              {isVerifying ? "확인 중..." : "비밀번호 입력하기"}
            </button>
            {error && <p className="mt-1 text-xs text-red-500">{error}</p>}
          </div>
        ) : (
          <p className="text-sm">{entry.message}</p>
        )}
      </div>

      <div>
        <X
          size={18}
          className="cursor-pointer transition-transform hover:scale-125"
          onClick={() => onDelete(entry)}
        />
      </div>
    </li>
  );
};
