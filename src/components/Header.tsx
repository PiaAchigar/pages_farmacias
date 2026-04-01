'use client'

import Link from 'next/link'

export function Header() {
  return (
    <nav className="fixed top-0 w-full z-50 bg-white/90 backdrop-blur-md shadow-sm h-20">
      <div className="max-w-7xl mx-auto flex justify-between items-center px-8 h-full">
        <Link href="/" className="flex items-center gap-2">
          <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center">
            <span className="text-white font-bold text-lg">+</span>
          </div>
          <div className="text-2xl font-bold text-secondary font-headline tracking-tight">
            Rodyna
          </div>
        </Link>

        <div className="hidden md:flex items-center space-x-8 font-headline font-semibold tracking-tight">
          <a
            href="#hero"
            className="text-primary border-b-2 border-primary pb-1"
          >
            Inicio
          </a>
          <a
            href="#nosotros"
            className="text-secondary hover:text-primary transition-colors"
          >
            Nosotros
          </a>
          <a
            href="#obras-sociales"
            className="text-secondary hover:text-primary transition-colors"
          >
            Obras Sociales
          </a>
          <a
            href="#horarios"
            className="text-secondary hover:text-primary transition-colors"
          >
            Horarios
          </a>
          <a
            href="#catalogo"
            className="text-secondary hover:text-primary transition-colors"
          >
            Catálogo
          </a>
          <a
            href="#contactos"
            className="text-secondary hover:text-primary transition-colors"
          >
            Contactos
          </a>
          <button className="text-secondary hover:text-primary transition-colors">
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
          </button>
        </div>

        <div className="flex items-center space-x-4 md:hidden">
          <button className="text-secondary">
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
          </button>
        </div>
      </div>
    </nav>
  )
}
