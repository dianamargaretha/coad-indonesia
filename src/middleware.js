import { NextResponse } from 'next/server'

export function middleware(request) {
	if (request.nextUrl.pathname.startsWith('/wordpress/wp-admin')) {
		return NextResponse.rewrite(new URL('/wordpress/wp-admin', request.url))
	}
	if (request.nextUrl.pathname.startsWith('/wordpress/tag')) {
		return NextResponse.rewrite(new URL('/'))
	}
}