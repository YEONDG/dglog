import { cn } from "@/lib/utils";
import Image from "next/image";

interface ProfileImageProps {
  src: string;
  alt: string;
  className?: string;
}

export function ProfileImage({ src, alt, className }: ProfileImageProps) {
  return (
    <div
      className={cn(
        "relative h-60 w-48 overflow-hidden rounded-2xl border-4 shadow-xl ring-2 dark:border-gray-800",
        className,
      )}
    >
      <Image
        src={src}
        alt={alt}
        fill
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        style={{ objectFit: "cover" }}
        priority
        className="transition-transform duration-300 hover:scale-105"
      />
    </div>
  );
}
