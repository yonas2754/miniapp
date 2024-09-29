import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import { getSession, updateSession } from './utils/session';

export async function middleware(request: NextRequest) {
  const protectedRoutes = ['/protected', '/bank', '/friends', '/earn'];

  // Check if the request is for a protected route
  if (protectedRoutes.some((route) => request.nextUrl.pathname.startsWith(route))) {
    const session = await getSession();
    console.log("Session: ", session);

    if (!session) {
      return NextResponse.redirect(new URL('/', request.url));
    }
  }

  // Continue to update session for all other routes or API calls
  return updateSession(request);
}

export const config = {
  matcher: ['/protected/:path*', '/bank/:path*', '/friends/:path*', '/earn/:path*', '/api/:path*'],
};
