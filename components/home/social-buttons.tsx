'use client';

import { Button } from '@/components/ui/button';
import { Github, Mail, Copy } from 'lucide-react';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { toast } from 'sonner';

export const SocialButtons = () => {
  const contactInfo = {
    phone: '010-3404-4104',
    email: 'zzmn1234@naver.com',
  };

  const handleCopy = (text: string, type: '전화번호' | '이메일') => {
    navigator.clipboard.writeText(text);
    toast.success(`${type}가 복사되었습니다!`);
  };

  return (
    <div className='flex flex-wrap justify-center lg:justify-start gap-4'>
      <Dialog>
        <DialogTrigger asChild>
          <Button className='flex items-center gap-2'>
            <Mail size={16} />
            연락하기
          </Button>
        </DialogTrigger>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>연락처 정보</DialogTitle>
          </DialogHeader>
          <div className='space-y-4'>
            <div className='flex items-center justify-between'>
              <span>전화번호: {contactInfo.phone}</span>
              <Button variant='ghost' size='sm' onClick={() => handleCopy(contactInfo.phone, '전화번호')}>
                <Copy size={16} />
              </Button>
            </div>
            <div className='flex items-center justify-between'>
              <span>이메일: {contactInfo.email}</span>
              <Button variant='ghost' size='sm' onClick={() => handleCopy(contactInfo.email, '이메일')}>
                <Copy size={16} />
              </Button>
            </div>
          </div>
        </DialogContent>
      </Dialog>

      <Button
        variant='outline'
        className='flex items-center gap-2'
        onClick={() => window.open('https://github.com/YEONDG', '_blank')}
      >
        <Github size={16} />
        GitHub
      </Button>
    </div>
  );
};
