import { NextRequest, NextResponse } from 'next/server';

export function middleware(request: NextRequest) {
  const hostname = request.headers.get('host') || '';

  // Localhost - serve direct routes
  if (hostname.includes('localhost')) {
    return NextResponse.next();
  }

  // Main domain - serve main landing page
  if (hostname === 'gymleadhub.co.uk' || hostname === 'www.gymleadhub.co.uk' || hostname === 'gym-lead-hub.vercel.app') {
    return NextResponse.next();
  }

  // Extract subdomain (everything before the first dot)
  const subdomain = hostname.split('.')[0];

  // Subdomain detected - rewrite to gym-specific page
  if (subdomain && subdomain !== 'www') {
    const url = request.nextUrl.clone();
    url.pathname = `/gyms/${subdomain}${request.nextUrl.pathname === '/' ? '' : request.nextUrl.pathname}`;
    return NextResponse.rewrite(url);
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     * - public files (images, etc.)
     */
    '/((?!api|_next/static|_next/image|favicon.ico|.*\\.(?:png|jpg|jpeg|gif|svg|webp|ico)).*)',
  ],
};
