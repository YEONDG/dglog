'use client';

import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Moon, Sun, TreePine, Waves } from 'lucide-react';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';

type Theme = 'light' | 'dark' | 'forest' | 'ocean';

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
          {theme === 'light' && <Sun className='h-5 w-5' />}
          {theme === 'dark' && <Moon className='h-5 w-5' />}
          {theme === 'forest' && <TreePine className='h-5 w-5' />}
          {theme === 'ocean' && <Waves className='h-5 w-5' />}
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align='end'>
        <DropdownMenuItem onClick={() => changeTheme('light')} data-testid='theme-option-light'>
          <Sun className='mr-2 h-4 w-4' />
          <span>Light</span>
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => changeTheme('dark')} data-testid='theme-option-dark'>
          <Moon className='mr-2 h-4 w-4' />
          <span>Dark</span>
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => changeTheme('forest')} data-testid='theme-option-forest'>
          <TreePine className='mr-2 h-4 w-4' />
          <span>Forest</span>
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => changeTheme('ocean')} data-testid='theme-option-ocean'>
          <Waves className='mr-2 h-4 w-4' />
          <span>Ocean</span>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
