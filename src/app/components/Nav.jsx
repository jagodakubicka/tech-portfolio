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
    <nav className='flex flex-col items-center xl:justify-center gap-y-4 fixed h-max bottom-0 mt-auto xl:right-[2%] z-50 top-0 w-full xl:w-16 xl:max-w-md xl:h-screen'>
     {NavData.map((link, index)=> {
      return(
        <Link 
        className={`${link.path === pathname && 'text-accent'} relative flex items-center group hover:text-accent transition-all duration-300`}
        key={index} 
        href={link.path}>
          {link.name}
        </Link>
      )
     })}
    </nav>
  )
}

