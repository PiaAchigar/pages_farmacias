import type { Metadata } from 'next'
import { headers } from 'next/headers'
import './globals.css'
import { getFarmaciaByKey } from '@/data/farmacias'
import { FarmaciaKey } from '@/types/farmacia'

export async function generateMetadata(): Promise<Metadata> {
  const headersList = await headers()
  const key = (headersList.get('x-farmacia-key') || 'hunko') as FarmaciaKey
  const farmacia = getFarmaciaByKey(key)

  return {
    title: `${farmacia.nombre} | Farmacias Online`,
    description:
      'Farmacias online con envío rápido y precios competitivos. Cuidamos lo más importante: Tu Salud.',
    metadataBase: new URL(`https://${farmacia.dominio}`),
    openGraph: {
      title: farmacia.nombre,
      description:
        'Farmacias online con envío rápido y precios competitivos. Cuidamos lo más importante: Tu Salud.',
      url: `https://${farmacia.dominio}`,
      siteName: 'Rodyna Farmacias',
      images: [
        {
          url: '/og-image.svg',
          width: 1200,
          height: 630,
          alt: farmacia.nombre,
        },
      ],
      type: 'website',
    },
    icons: {
      icon: '/favicon.ico',
    },
  }
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="es" className="scroll-smooth">
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800&family=Manrope:wght@400;500;600;700&display=swap"
          rel="preload"
          as="style"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800&family=Manrope:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="bg-white font-body text-on-surface">{children}</body>
    </html>
  )
}
