import { cookies } from 'next/headers'
import type { NextRequest } from 'next/server'
import { NextResponse } from 'next/server'

export async function middleware(request: NextRequest) {
  const cookieStore = await cookies()
  const session = cookieStore.get('appwrite-session')
  const isAuthenticated = session && session.value
  const { pathname } = request.nextUrl
  const publicRoutes = ['/login', '/sign-up', '/forgot-password']

  if (!isAuthenticated && !publicRoutes.includes(pathname)) {
    return NextResponse.redirect(new URL('/login', request.url))
  }

  if (isAuthenticated && pathname === '/login') {
    return NextResponse.redirect(new URL('/', request.url))
  }

  return NextResponse.next()
}

export const config = {
  matcher: [
    '/((?!api|_next/static|_next/image|favicon.ico|sitemap.xml|robots.txt).*)',
    '/sign-up',
    '/forgot-password',
  ],
}
