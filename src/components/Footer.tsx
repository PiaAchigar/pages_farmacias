import { Farmacia } from '@/types/farmacia'

interface FooterProps {
  farmacia: Farmacia
}

export function Footer({ farmacia }: FooterProps) {
  return (
    <footer className="bg-secondary w-full pt-16 pb-8">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-12 px-8 max-w-7xl mx-auto">
        <div className="md:col-span-1">
          <div className="flex items-center gap-2 mb-6">
            <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center">
              <span className="text-white text-xs font-bold">+</span>
            </div>
            <span className="text-2xl font-bold text-white block">Rodyna</span>
          </div>
          <p className="text-slate-300 font-body text-sm leading-relaxed mb-6">
            Liderazgo en atención farmacéutica y excelencia clínica. Cuidando cada paso de tu bienestar.
          </p>
          <div className="flex gap-4">
            <a
              href={farmacia.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-primary transition-all"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <path d="M10 0C4.5 0 0 4.5 0 10s4.5 10 10 10 10-4.5 10-10S15.5 0 10 0zm3.5 10c0 1.93-1.57 3.5-3.5 3.5S6.5 11.93 6.5 10 8.07 6.5 10 6.5s3.5 1.57 3.5 3.5z" />
              </svg>
            </a>
            <a
              href={farmacia.facebook}
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-primary transition-all"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <path d="M10 0C4.5 0 0 4.5 0 10s4.5 10 10 10 10-4.5 10-10S15.5 0 10 0zm2.5 10h-1.5v5.5H9.5V10h-1V8.5h1V7.5c0-1.1.4-2.5 2.5-2.5h1.5V7c-.3 0-.8 0-1.2 0-.6 0-.7.3-.7.8v.7h1.5l-.3 1.5z" />
              </svg>
            </a>
          </div>
        </div>
        <div>
          <h4 className="text-primary font-bold mb-6">Servicios</h4>
          <ul className="space-y-4 font-body text-sm">
            <li>
              <a href="#catalogo" className="text-slate-300 hover:text-white transition-colors">
                Venta Online
              </a>
            </li>
            <li>
              <a href="#contactos" className="text-slate-300 hover:text-white transition-colors">
                Envíos a Domicilio
              </a>
            </li>
            <li>
              <a href="#contactos" className="text-slate-300 hover:text-white transition-colors">
                Atención Farmacéutica
              </a>
            </li>
          </ul>
        </div>
        <div>
          <h4 className="text-primary font-bold mb-6">Empresa</h4>
          <ul className="space-y-4 font-body text-sm">
            <li>
              <a href="#nosotros" className="text-slate-300 hover:text-white transition-colors">
                Nosotros
              </a>
            </li>
            <li>
              <a href="#" className="text-slate-300 hover:text-white transition-colors">
                Trabajá con nosotros
              </a>
            </li>
          </ul>
        </div>
        <div>
          <h4 className="text-primary font-bold mb-6">Legal</h4>
          <ul className="space-y-4 font-body text-sm">
            <li>
              <a href="#" className="text-slate-300 hover:text-white transition-colors">
                Privacidad
              </a>
            </li>
            <li>
              <a href="#" className="text-slate-300 hover:text-white transition-colors">
                Términos
              </a>
            </li>
            <li>
              <a href="#" className="text-slate-300 hover:text-white transition-colors">
                Preguntas Frecuentes
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-8 mt-16 pt-8 border-t border-white/10 text-center">
        <p className="text-slate-400 text-xs font-body">
          © {new Date().getFullYear()} Rodyna Farmacias. Comunidad y Salud Integral.
        </p>
      </div>
    </footer>
  )
}
