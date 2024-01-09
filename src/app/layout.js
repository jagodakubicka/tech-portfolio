import { Header } from './components/Header'
import { Inter } from 'next/font/google'
import './globals.css'
import { Nav } from './components/Nav'
import {Rubik_Mono_One} from"next/font/google"

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Technician portfolio',
  description: `John's laboratory`,
}
const RubikMonoOne = Rubik_Mono_One({
  style:["normal"],
  subsets:["latin"],
  weight:"400"
})
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={RubikMonoOne.className}>
        <div className='bg-primary h-screen bg-gradient-to-r from-primary/10 via-black/30 to-black/10 p-4'>
        <Header/>
        {children}
        <Nav className='absolute bg-white/10'/>

        </div>
      </body>
    </html>
  )
}
