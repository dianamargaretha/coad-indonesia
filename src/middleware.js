import { NextResponse } from 'next/server'
 
export function middleware(request) {
	const { pathname } = request.nextUrl
	const array = pathname.split('/')
	  if ( array.includes('blog')) {
		const newLang = array[1]
		const newCategory = array[3]
		const newSlug = array[4]
			if (newLang !== 'id' ) {
				 return NextResponse.redirect(new URL(`/id/blog/${newCategory}/${newSlug}`, request.url), {
   					 status: 303
				 })
			}
		}
	}
export const config = {
	matcher: [
		  '/((?!dashboard|admin|_next/static|_next/image|favicon.ico|assets).*)'
	]
}