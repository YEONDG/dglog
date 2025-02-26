'use client';

import { Button } from '@/components/ui/button';
import { Github, Linkedin, Mail } from 'lucide-react';

export const SocialButtons = () => {
  return (
    <div className='flex flex-wrap justify-center lg:justify-start gap-4'>
      <Button className='flex items-center gap-2'>
        <Mail size={16} />
        연락하기
      </Button>
      <Button variant='outline' className='flex items-center gap-2'>
        <Github size={16} />
        GitHub
      </Button>
      <Button variant='outline' className='flex items-center gap-2'>
        <Linkedin size={16} />
        LinkedIn
      </Button>
    </div>
  );
};
