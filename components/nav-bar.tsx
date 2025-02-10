import Link from 'next/link';
import React from 'react';

export function NavBar() {
  return (
    <div className=' flex justify-around '>
      <Link href='/' className='py-2 px-4'>
        Home
      </Link>
      <Link href='/posts' className='py-2 px-4'>
        Posts
      </Link>
      <Link href='/about' className='py-2 px-4'>
        About
      </Link>
      <Link href='/guest' className='py-2 px-4'>
        Guest
      </Link>
    </div>
  );
}
