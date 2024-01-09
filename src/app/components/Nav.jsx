"use client"
import React from 'react'
import Link from 'next/link'
import {usePathname} from 'next/navigation'

export const NavData = [
  {
    name: "Home",
    path: "/",
    icon:''
  },
  {
    name: "About",
    path: "/about",
    icon:''
  },
  {
    name: "Projects",
    path: "/projects",
    icon:''
  },
  {
    name: "Testimonials",
    path: "/testimonials",
    icon:''
  },
  {
    name: "Contact",
    path: "/contact",
    icon:''
  },
]

export const Nav =() => {
  const pathname = usePathname();

  return (
    <div className='flex gap-x-2'>
     {NavData.map((link, index)=> {
      return(
        <Link 
        className={`${link.path === pathname && 'text-red-400'}`}
        key={index} 
        href={link.path}>
          {link.name}
        </Link>
      )
     })}
    </div>
  )
}

