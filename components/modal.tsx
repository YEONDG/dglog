"use client";

import { X } from "lucide-react";
import { useRouter } from "next/navigation";
import { useEffect, type MouseEventHandler } from "react";

export function Modal({ children }: { children: React.ReactNode }) {
  const router = useRouter();

  useEffect(() => {
    const originalOverflow = window.getComputedStyle(document.body).overflow;
    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = originalOverflow;
    };
  }, []);

  const handleBackdropClick: MouseEventHandler<HTMLDivElement> = (e) => {
    if (e.target === e.currentTarget) {
      router.back();
    }
  };

  return (
    <div
      onClick={handleBackdropClick}
      className="fixed inset-0 z-50 flex items-center justify-center overflow-y-hidden bg-black/60 backdrop-blur-sm"
    >
      <div className="relative h-[90vh] w-full max-w-3xl overflow-y-scroll rounded-3xl bg-white shadow-xl dark:bg-gray-900">
        <div className="absolute right-0 top-0 w-full border-b border-black">
          <button
            onClick={() => router.back()}
            className="absolute right-0 top-0 flex h-12 w-12 items-center justify-center font-bold"
            aria-label="모달 닫기"
          >
            <X width={20} height={20} />
          </button>
        </div>
        {children}
      </div>
    </div>
  );
}
