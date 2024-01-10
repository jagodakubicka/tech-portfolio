'use client'

import { Header } from './components/Header'
import { Nav } from './components/Nav'
import {AnimatePresence, motion} from 'framer-motion';
import { usePathname } from 'next/navigation';
import { Transition } from './components/Transition';
export const Wrapper = ({children}) => {
 const pathname = usePathname()
 return (
  <AnimatePresence>
   <motion.div key={pathname} className=' h-screen p-4'>
        <Transition/>
        <Header/>
        {children}
        <Nav className='absolute'/>
  </motion.div>
  </AnimatePresence>
  
 )
}