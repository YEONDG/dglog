import Image from "next/image";

interface ProfileImageProps {
  src: string;
  alt: string;
}

export function ProfileImage({ src, alt }: ProfileImageProps) {
  return (
    <div className="relative h-60 w-48 overflow-hidden rounded-2xl border-4 border-white shadow-xl dark:border-gray-800">
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
