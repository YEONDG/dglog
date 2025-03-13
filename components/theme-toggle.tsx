'use client';

import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
// import { Moon, Sun, TreePine, Waves } from 'lucide-react';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import Image from 'next/image';

const THEME_CONFIG = {
  light: {
    icon: '/icons/sun-of-may.png',
    alt: 'Light mode',
    className: 'bg-white text-black',
  },
  dark: {
    icon: '/icons/night-mode.png',
    alt: 'Dark mode',
    className: 'bg-black text-white',
  },
  forest: {
    icon: '/icons/forest.png',
    alt: 'Forest theme',
    className: 'bg-green-200 text-black',
  },
  ocean: {
    icon: '/icons/sea.png',
    alt: 'Ocean theme',
    className: 'bg-blue-200 text-black',
  },
};

type Theme = keyof typeof THEME_CONFIG;

export function ThemeToggle() {
  const [theme, setTheme] = useState<Theme>('light');

  const updateDocumentClass = (newTheme: Theme) => {
    if (typeof document !== 'undefined' && document.documentElement) {
      try {
        document.documentElement.classList.remove('light');
        document.documentElement.classList.remove('dark');
        document.documentElement.classList.remove('forest');
        document.documentElement.classList.remove('ocean');
        document.documentElement.classList.add(newTheme);
      } catch (error) {
        console.error('테마 클래스 업데이트 중 오류:', error);
      }
    }
  };

  // 페이지 로드 시 저장된 테마가 있으면 적용
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const savedTheme = localStorage.getItem('theme') as Theme;
      if (savedTheme) {
        setTheme(savedTheme);
        updateDocumentClass(savedTheme);
      }
    }
  }, []);

  // 테마 변경 함수
  const changeTheme = (newTheme: Theme) => {
    setTheme(newTheme);
    updateDocumentClass(newTheme);
    if (typeof window !== 'undefined') {
      localStorage.setItem('theme', newTheme);
    }
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant='outline' size='icon' className='flex rounded-full'>
          {/* {theme === 'light' && <Sun className='h-5 w-5' />}
          {theme === 'dark' && <Moon className='h-5 w-5' />}
          {theme === 'forest' && <TreePine className='h-5 w-5' />}
          {theme === 'ocean' && <Waves className='h-5 w-5' />} */}
          <Image src={THEME_CONFIG[theme].icon} alt={THEME_CONFIG[theme].alt} width={20} height={20} />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align='end'>
        <DropdownMenuItem
          onClick={() => changeTheme('light')}
          data-testid='theme-option-light'
          className='bg-white text-black'
        >
          {/* <Sun className='mr-2 h-4 w-4' /> */}
          <Image src='/icons/sun-of-may.png' alt='light' width={20} height={20} />
          <span>Light</span>
        </DropdownMenuItem>
        <DropdownMenuItem
          onClick={() => changeTheme('dark')}
          data-testid='theme-option-dark'
          className='bg-black text-white'
        >
          {/* <Moon className='mr-2 h-4 w-4' /> */}
          <Image src='/icons/night-mode.png' alt='dark' width={20} height={20} />
          <span>Dark</span>
        </DropdownMenuItem>
        <DropdownMenuItem
          onClick={() => changeTheme('forest')}
          data-testid='theme-option-forest'
          className='bg-green-200 text-black'
        >
          {/* <TreePine className='mr-2 h-4 w-4' /> */}
          <Image src='/icons/forest.png' alt='forest' width={20} height={20} />
          <span>Forest</span>
        </DropdownMenuItem>
        <DropdownMenuItem
          onClick={() => changeTheme('ocean')}
          data-testid='theme-option-ocean'
          className='bg-blue-200 text-black'
        >
          {/* <Waves className='mr-2 h-4 w-4' /> */}
          <Image src='/icons/sea.png' alt='ocean' width={20} height={20} />
          <span>Ocean</span>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
