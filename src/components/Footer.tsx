import { Farmacia } from '@/types/farmacia'

interface FooterProps {
  farmacia: Farmacia
}

export function Footer({ farmacia }: FooterProps) {
  return (
    <footer className="bg-secondary w-full pt-16 md:pt-20 pb-8">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 lg:gap-16 px-4 md:px-8 max-w-7xl mx-auto">
        <div className="sm:col-span-2 md:col-span-1">
          <div className="flex items-center gap-2 mb-6 md:mb-8">
            <div className="w-8 md:w-10 h-8 md:h-10 bg-primary rounded-full flex items-center justify-center">
              <span className="material-symbols-outlined text-white text-base md:text-xl font-bold">medical_services</span>
            </div>
            <span className="text-xl md:text-2xl font-bold text-white block">{farmacia.nombre}</span>
          </div>
          <p className="text-slate-300 font-body text-xs md:text-sm leading-relaxed mb-6 md:mb-8">
            Liderazgo en atención farmacéutica y excelencia clínica. Cuidando cada paso de tu bienestar.
          </p>
          <div className="flex gap-3 md:gap-4">
            <a
              href={farmacia.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="w-9 md:w-10 h-9 md:h-10 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-primary transition-all"
            >
              <span className="material-symbols-outlined text-base md:text-lg">share</span>
            </a>
            <a
              href={farmacia.facebook}
              target="_blank"
              rel="noopener noreferrer"
              className="w-9 md:w-10 h-9 md:h-10 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-primary transition-all"
            >
              <span className="material-symbols-outlined text-base md:text-lg">public</span>
            </a>
          </div>
        </div>
        <div>
          <h4 className="text-primary font-bold mb-5 md:mb-8 text-sm md:text-base">Servicios</h4>
          <ul className="space-y-3 md:space-y-5 font-body text-xs md:text-sm">
            <li>
              <a href="#catalogo" className="text-slate-300 hover:text-white transition-transform hover:translate-x-1 block">
                Venta Online
              </a>
            </li>
            <li>
              <a href="#contactos" className="text-slate-300 hover:text-white transition-transform hover:translate-x-1 block">
                Envíos a Domicilio
              </a>
            </li>
            <li>
              <a href="#contactos" className="text-slate-300 hover:text-white transition-transform hover:translate-x-1 block">
                Atención Farmacéutica
              </a>
            </li>
          </ul>
        </div>
        <div>
          <h4 className="text-primary font-bold mb-5 md:mb-8 text-sm md:text-base">Empresa</h4>
          <ul className="space-y-3 md:space-y-5 font-body text-xs md:text-sm">
            <li>
              <a href="#nosotros" className="text-slate-300 hover:text-white transition-transform hover:translate-x-1 block">
                Nosotros
              </a>
            </li>
            <li>
              <a href="#" className="text-slate-300 hover:text-white transition-transform hover:translate-x-1 block">
                Trabajá con nosotros
              </a>
            </li>
          </ul>
        </div>
        <div>
          <h4 className="text-primary font-bold mb-5 md:mb-8 text-sm md:text-base">Legal</h4>
          <ul className="space-y-3 md:space-y-5 font-body text-xs md:text-sm">
            <li>
              <a href="#" className="text-slate-300 hover:text-white transition-transform hover:translate-x-1 block">
                Privacidad
              </a>
            </li>
            <li>
              <a href="/terminos" className="text-slate-300 hover:text-white transition-transform hover:translate-x-1 block">
                Términos
              </a>
            </li>
            <li>
              <a href="#" className="text-slate-300 hover:text-white transition-transform hover:translate-x-1 block">
                Preguntas Frecuentes
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-4 md:px-8 mt-16 pt-8 border-t border-white/10 text-center">
        <p className="text-slate-400 text-xs font-body">
                   <a href="www.complexa.cloud" target="_blank">
                © {new Date().getFullYear()} Complexa IA. Software & Automation.
              </a>
          
        </p>
      </div>
    </footer>
  )
}
