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
        <Header>{children}
        <Nav/>
        </Header>
      </body>
    </html>
  )
}
