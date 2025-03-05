import Link from 'next/link';
import React from 'react';
import { ThemeToggle } from './home/ui/theme-toggle';

export const NavBar = () => {
  return (
    <div className='flex justify-between w-full py-4  items-center'>
      <Link href='/' className='relative text-3xl font-bold'>
        DGlog<span className='absolute -right-1 -bottom-1 w-2 h-2 bg-orange-500 rounded-full'></span>
      </Link>
      <div className='flex justify-around '>
        {/* 테마 토글 버튼 */}
        <ThemeToggle />
        <Link href='/' className='py-2 px-4 '>
          Home
        </Link>
        <Link href='/posts' className='py-2 px-4 '>
          Posts
        </Link>
        <Link href='/about' className='py-2 px-4 '>
          About
        </Link>
        <Link href='/guest' className='py-2 px-4 '>
          Guest
        </Link>
      </div>
    </div>
  );
};
