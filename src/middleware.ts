import { NextRequest, NextResponse } from 'next/server';

export function middleware(request: NextRequest) {
  const hostname = request.headers.get('host') || '';
  const url = request.nextUrl;

  // Main domain - serve main landing page
  if (hostname === 'gymleadhub.co.uk' || hostname === 'www.gymleadhub.co.uk' || hostname === 'gym-lead-hub.vercel.app') {
    return NextResponse.next();
  }

  // Extract subdomain (everything before the first dot)
  const subdomain = hostname.split('.')[0];

  // Localhost - serve direct routes
  if (hostname.includes('localhost')) {
    return NextResponse.next();
  }

  // Subdomain detected - rewrite to gym-specific page
  if (subdomain && subdomain !== 'www') {
    // Rewrite to /gyms/[subdomain] path
    url.pathname = `/gyms/${subdomain}${url.pathname === '/' ? '' : url.pathname}`;
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
     */
    '/((?!api|_next/static|_next/image|favicon.ico).*)',
  ],
};
