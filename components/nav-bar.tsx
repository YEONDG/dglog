'use client';

import Link from 'next/link';
import React, { useState, useEffect } from 'react';
import { ThemeToggle } from './home/ui/theme-toggle';
import { MenuIcon, X } from 'lucide-react';

export const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  // 모바일 메뉴가 열려있을 때 스크롤 방지
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }

    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [isOpen]);

  // 메뉴 닫기 함수
  const closeMenu = () => setIsOpen(false);

  return (
    <div className='flex justify-between w-full py-4 items-center relative'>
      <Link href='/' className='relative text-3xl font-bold'>
        DGlog<span className='absolute -right-1 -bottom-1 w-2 h-2 bg-orange-500 rounded-full'></span>
      </Link>

      <div className='sm:flex justify-around hidden'>
        <ThemeToggle />
        <Link href='/' className='py-2 px-4 hover:text-orange-500 transition-colors'>
          Home
        </Link>
        <Link href='/posts' className='py-2 px-4 hover:text-orange-500 transition-colors'>
          Posts
        </Link>
        <Link href='/about' className='py-2 px-4 hover:text-orange-500 transition-colors'>
          About
        </Link>
        <Link href='/guest' className='py-2 px-4 hover:text-orange-500 transition-colors'>
          Guest
        </Link>
      </div>

      <div className='sm:hidden flex justify-center items-center'>
        <button onClick={() => setIsOpen(!isOpen)} aria-label='Toggle menu' className='p-2'>
          {isOpen ? <X size={24} /> : <MenuIcon size={24} />}
        </button>
      </div>

      {/* 모바일 메뉴 오버레이 */}
      {isOpen && <div className='fixed inset-0 bg-black bg-opacity-50 z-40 sm:hidden' onClick={closeMenu}></div>}

      {/* 모바일 메뉴 패널 */}
      <div
        className={`fixed top-0 right-0 h-full w-64 bg-white dark:bg-gray-900 z-50 transform transition-transform duration-300 ease-in-out sm:hidden shadow-lg ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className='flex flex-col p-6'>
          <div className='flex justify-between items-center mb-8'>
            <Link href='/' className='text-2xl font-bold' onClick={closeMenu}>
              DGlog
            </Link>
            <div className='flex items-center '>
              <ThemeToggle />
            </div>
            <button onClick={closeMenu} aria-label='Close menu' className='p-2'>
              <X size={24} />
            </button>
          </div>

          <nav className='flex flex-col space-y-4'>
            <Link
              href='/'
              className='py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-md transition-colors'
              onClick={closeMenu}
            >
              Home
            </Link>
            <Link
              href='/posts'
              className='py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-md transition-colors'
              onClick={closeMenu}
            >
              Posts
            </Link>
            <Link
              href='/about'
              className='py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-md transition-colors'
              onClick={closeMenu}
            >
              About
            </Link>
            <Link
              href='/guest'
              className='py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-md transition-colors'
              onClick={closeMenu}
            >
              Guest
            </Link>
          </nav>
        </div>
      </div>
    </div>
  );
};
