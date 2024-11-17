import '@/styles/index.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { ThemeProvider } from 'next-themes'
import { cn } from '@/utils/cn'

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Expense Tracker',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang='en' suppressHydrationWarning>
      <body
        className={cn(
          'bg-gray-50 bg-white text-sm text-gray-900 antialiased dark:bg-gray-900 dark:text-gray-50',
          inter.className,
        )}
      >
        <ThemeProvider attribute='class'>{children}</ThemeProvider>
      </body>
    </html>
  )
}
