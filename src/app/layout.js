import { Header } from './components/Header'
import { Inter } from 'next/font/google'
import './globals.css'
import { Nav } from './components/Nav'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Technician portfolio',
  description: `John's laboratory`,
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className='bg-primary h-screen bg-gradient-to-r from-primary/10 via-black/30 to-black/10'>
        <Header/>
        {children}
        <Nav className='absolute bg-white/10'/>

        </div>
      </body>
    </html>
  )
}
