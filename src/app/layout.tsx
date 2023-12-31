'use client'
import { AuthProvider } from '@/context/AuthProvider'
import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { usePathname } from 'next/navigation';
import { checkIsPublicRoute } from '@/functions/check-is-public-route'
import PrivateRoute from '@/app/app/components/PrivateRoute'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {

  const pathname = usePathname();

  const isPublicPage = checkIsPublicRoute(pathname!);

  console.log(isPublicPage);

  return (
    <html lang="en">
      <AuthProvider>
        <body className={inter.className}>

          {isPublicPage && children}

          {!isPublicPage && (
            <>
              <PrivateRoute>{children}</PrivateRoute>
            </>
          )}
        </body>
      </AuthProvider>
    </html>
  )
}
