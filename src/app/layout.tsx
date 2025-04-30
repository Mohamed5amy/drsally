import type { Metadata } from 'next'
import { Public_Sans } from 'next/font/google'
import './globals.css'
import './classes.css'
import ClientAOS from "@/hooks/ClientAOS";
import { ToastContainer } from 'react-toastify';
import CustomCursor from '@/components/CustomCursor';
import Nav from '@/components/custom/Nav';
import Footer from '@/components/custom/Footer';

const publicSans = Public_Sans({
  subsets: ['latin'],
  weight: ['400', '500', '600' , '700'], // Add any weights you use
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Dr Sally Mounir',
  description: "Tailored therapeutic support to help you navigate life's challenges and discover your path to well-being.",
  icons: {
    icon: '/icon.svg',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode,
}>) {
  return (
    <html lang='en'>
      <body className={`${publicSans.className} antialiased`}>
        <Nav />
        <ClientAOS />
        <CustomCursor />
        {children}
        <ToastContainer position='bottom-right' />
        <Footer />
      </body>
    </html>
  )
}
