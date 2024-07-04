import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export function middleware(request: NextRequest) {
	return NextResponse.next()
}

// export const config = {
// 	matcher: ['/((?!api|_next/static|_next/image|images|favicon.ico).*)'],
// }

export const config = {
	matcher: ['/((?!api|_next/static|_next/image|.*\\..*|.*\\.png$|.*\\.jpg$).*)', '/uploads/:path*'],
}
