import type { Metadata } from 'next'
import { Noto_Sans_Arabic, Public_Sans } from 'next/font/google'
import './globals.css'
import './classes.css'
import ClientAOS from "@/hooks/ClientAOS";
import { ToastContainer } from 'react-toastify';
import CustomCursor from '@/components/CustomCursor';
import Nav from '@/components/custom/Nav';
import Footer from '@/components/custom/Footer';
import AuthContextProvider from '@/providers/auth-providers';
import { hasLocale, NextIntlClientProvider } from 'next-intl';
import { routing } from '@/i18n/routing';
import { notFound } from 'next/navigation';

const publicSans = Public_Sans({
  variable: '--font-public-sans',
  weight: ['400', '500', '600' , '700'], // Add any weights you use
  display: 'swap',
  subsets : ['latin']
})

const notoSansArabic = Noto_Sans_Arabic({
  variable: '--font-noto-sans-arabic',
  weight: ['400', '500', '600' , '700'], // Add any weights you use
  display: 'swap',
  subsets : ['arabic']
})

export const metadata: Metadata = {
  title: 'Dr Sally Mounir',
  description: "Tailored therapeutic support to help you navigate life's challenges and discover your path to well-being.",
  icons: {
    icon: '/icon.svg',
  },
}

export default async function RootLayout({
  children,
  params
}: Readonly<{
  children: React.ReactNode;
  params: Promise<{locale: string}>;
}>) {

  // Ensure that the incoming `locale` is valid
  const {locale} = await params;
  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }
  
  return (
    <html lang={locale} dir={locale === "ar" ? "rtl" : "ltr"}>
      <body className={`${locale === "ar" ? notoSansArabic.variable + " font-noto-sans-arabic" : publicSans.variable + " font-public-sans"} antialiased`}>
      <NextIntlClientProvider locale={locale}>
        <AuthContextProvider>
          <Nav />
          <ClientAOS />
          <CustomCursor />
          {children}
          <ToastContainer position='bottom-right' />
          <Footer />
        </AuthContextProvider>
      </NextIntlClientProvider>
      </body>
    </html>
  )
}
