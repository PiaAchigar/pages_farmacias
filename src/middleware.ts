import { NextRequest, NextResponse } from 'next/server'
import { FarmaciaKey } from '@/data/farmacias'

const dominioToKey: Record<string, FarmaciaKey> = {
  'farmaciahunko.com.ar': 'hunko',
  'farmaciasocialhunko.com.ar': 'social',
  'farmaciario1.com.ar': 'rio1',
  'farmacianuevapale.com.ar': 'palermo',
  'localhost:3000': 'hunko',
  'localhost': 'hunko',
}

export async function middleware(request: NextRequest) {
  const host = request.headers.get('host') || ''
  const key = dominioToKey[host] || 'hunko'

  // Redirige /catalog a la URL externa
  if (request.nextUrl.pathname === '/catalog') {
    return NextResponse.redirect('https://www.rodynafarmacias.com.ar/catalogo', 302)
  }

  const requestHeaders = new Headers(request.headers)
  requestHeaders.set('x-farmacia-key', key)

  return NextResponse.next({
    request: {
      headers: requestHeaders,
    },
  })
}

export const config = {
  matcher: ['/((?!_next|_vercel|favicon.ico).*)'],
}
