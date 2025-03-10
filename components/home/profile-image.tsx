import Image from 'next/image';

interface ProfileImageProps {
  src: string;
  alt: string;
}

export function ProfileImage({ src, alt }: ProfileImageProps) {
  return (
    <div className='relative w-48 h-60 rounded-2xl overflow-hidden shadow-xl border-4 border-white dark:border-gray-800'>
      <Image
        src={src}
        alt={alt}
        fill
        sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'
        style={{ objectFit: 'cover' }}
        priority
        className='transition-transform duration-300 hover:scale-105'
      />
    </div>
  );
}
