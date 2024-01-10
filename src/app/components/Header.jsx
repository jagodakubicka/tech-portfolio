import React from 'react'
import Link from 'next/link';

export const Header = ()=> {
  return (
    <header className='absolute top-0 left-0 p-4 z-10'>
      <Link href={'/'}>
          <p><span className='text-bold'>3D</span>Creatives</p>
        </Link>
    </header>
  )
}
