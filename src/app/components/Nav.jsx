import React from 'react'
import Link from 'next/link'

export const Nav =() => {
  return (
    <div className='flex gap-x-2'>
     <Link href='/'>Home</Link>
     <Link href='/about'>about</Link>
     <Link href='/projects'>projects</Link>
     <Link href='/testimonials'>testimonials</Link>
     <Link href='/contact'>contact</Link>
    </div>
  )
}

