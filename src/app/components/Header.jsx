import React from 'react'
import Image from 'next/image';
import Link from 'next/link';

export const Header = ()=> {
  return (
    <header className='absolute top-0 left-0 p-4 z-10'>
      <Link href={'/'}>
          <Image 
          src={'/logo.png'} 
          width={120} 
          height={120} 
          alt='' 
          priority={true}
          />
        </Link>
    </header>
  )
}
