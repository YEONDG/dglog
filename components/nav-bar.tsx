import Link from 'next/link';
import React from 'react';

export function NavBar() {
  return (
    <div className=' flex justify-around '>
      <Link href='/' className='py-2 px-4 text-white'>
        Home
      </Link>
      <Link href='/posts' className='py-2 px-4 text-white'>
        Posts
      </Link>
      <Link href='/about' className='py-2 px-4 text-white'>
        About
      </Link>
      <Link href='/guest' className='py-2 px-4 text-white'>
        Guest
      </Link>
    </div>
  );
}
