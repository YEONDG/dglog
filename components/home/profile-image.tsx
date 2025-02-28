import Image from 'next/image';

interface ProfileImageProps {
  src: string;
  alt: string;
}

export function ProfileImage({ src, alt }: ProfileImageProps) {
  return (
    <div className='relative w-64 h-80 rounded-2xl overflow-hidden shadow-xl border-4 border-white dark:border-gray-800'>
      <Image
        src={src}
        alt={alt}
        fill
        sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'
        style={{ objectFit: 'cover' }}
        priority
        className='transition-transform duration-500 hover:scale-110'
      />
      <div className='absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300'></div>
    </div>
  );
}
