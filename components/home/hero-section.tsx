import { ProfileImage } from './profile-image';
import { SocialButtons } from './social-buttons';
import { Badge } from '@/components/ui/badge';

interface ProfileData {
  name: string;
  title: string;
  description: string;
  image: string;
}

interface HeroSectionProps {
  profileData: ProfileData;
}

export const HeroSection = ({ profileData }: HeroSectionProps) => {
  return (
    <header className='container mx-auto px-4 py-8 md:py-16'>
      <div className='flex flex-col lg:flex-row items-center gap-8 md:gap-16'>
        {/* 프로필 이미지 */}
        <ProfileImage src={profileData.image} alt={`${profileData.name} 프로필 이미지`} />

        {/* 인트로 텍스트 */}
        <div className='text-center lg:text-left'>
          <Badge variant='outline' className='mb-4 px-3 py-1 text-sm'>
            {profileData.title}
          </Badge>

          <h1 className='text-4xl md:text-6xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600'>
            {profileData.name}
          </h1>

          <p className='text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-8'>{profileData.description}</p>

          {/* 소셜 버튼 영역 - 클라이언트 컴포넌트 */}
          <SocialButtons />
        </div>
      </div>
    </header>
  );
};
