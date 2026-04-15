'use client'
import { useState } from 'react'
import { Farmacia } from '@/types/farmacia'
import Link from 'next/link'

interface HeroProps {
  farmacia: Farmacia
}

const links = [
  { href: '#hero', label: 'Inicio' },
  { href: '#nosotros', label: 'Nosotros' },
  { href: '#catalogo', label: 'Catálogo' },
  { href: '#obras-sociales', label: 'Obras Sociales' },
  { href: '#horarios', label: 'Horarios' },
  { href: '#contactos', label: 'Contactos' },
]

export function Header({ farmacia }: HeroProps) {
  const [menuOpen, setMenuOpen] = useState(false)
  const [activeLink, setActiveLink] = useState('#hero')

  return (
    <nav className="fixed top-0 w-full z-50 bg-white/90 backdrop-blur-md shadow-sm">
      <div className="max-w-7xl mx-auto flex justify-between items-center px-4 md:px-8 h-16 md:h-20">

        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 flex-shrink-0">
          <div className="w-8 md:w-10 h-8 md:h-10 bg-primary rounded-full flex items-center justify-center">
            <span className="material-symbols-outlined text-white font-bold text-lg md:text-2xl">medical_services</span>
          </div>
          <div className="text-lg md:text-2xl font-bold text-secondary font-headline tracking-tight">
            {farmacia.nombre}
          </div>
        </Link>

        {/* Links — solo visibles en lg+ */}
        <div className="hidden lg:flex items-center gap-10 font-headline font-semibold tracking-tight">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setActiveLink(link.href)}
              className={`py-2 text-base transition-colors border-b-2 ${
                activeLink === link.href
                  ? 'text-primary border-primary'
                  : 'text-secondary border-transparent hover:text-primary'
              }`}
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* Hamburger — visible en mobile y md */}
        <button
          className="lg:hidden text-secondary hover:text-primary transition-colors p-2"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Abrir menú"
        >
          <span className="material-symbols-outlined text-2xl">
            {menuOpen ? 'close' : 'menu'}
          </span>
        </button>
      </div>

      {/* Menú desplegable mobile/md */}
      {menuOpen && (
        <div className="lg:hidden bg-white/95 backdrop-blur-md border-t border-gray-100 shadow-lg">
          <div className="max-w-7xl mx-auto px-4 md:px-8 py-4 flex flex-col gap-1">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => { setActiveLink(link.href); setMenuOpen(false) }}
                className={`py-3 px-2 text-base font-headline font-semibold border-b border-gray-100 last:border-0 transition-colors ${
                  activeLink === link.href ? 'text-primary' : 'text-secondary hover:text-primary'
                }`}
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  )
}
