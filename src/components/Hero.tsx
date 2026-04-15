import { Farmacia } from '@/types/farmacia'

interface HeroProps {
  farmacia: Farmacia
}

export function Hero({ farmacia }: HeroProps) {
  return (
    <section className="relative py-12 md:py-20 overflow-hidden" id="hero">
      <div className="max-w-7xl mx-auto px-4 md:px-10 grid grid-cols-1 justify-items-center lg:grid-cols-2 lg:justify-items-start gap-16 lg:gap-20 items-center">
        <div className="relative z-10">
          <div className="inline-flex items-center px-3 md:px-4 py-2 rounded-full bg-primary text-white text-xs md:text-sm font-bold mb-6 tracking-wide">
            TU FARMACIA DE CONFIANZA
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-extrabold font-headline text-secondary leading-[1.1] mb-6">
            {farmacia.nombre}
          </h1>
          <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-secondary/90 font-headline font-medium leading-relaxed mb-10 max-w-lg">
            Cuidamos lo más importante: Tu Salud.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 md:gap-6">
            <a
              href="#catalogo"
              className="bg-primary text-white text-center px-6 sm:px-8 md:px-10 py-3 md:py-5 rounded-2xl font-bold text-sm md:text-lg hover:shadow-lg transition-all transform hover:-translate-y-1"
            >
              Ver Catálogo Online
            </a>
            <a
              href="#nosotros"
              className="bg-white text-secondary border-2 border-primary text-center px-6 sm:px-8 md:px-10 py-3 md:py-5 rounded-2xl font-bold text-sm md:text-lg hover:bg-slate-50 transition-all"
            >
              Conócenos
            </a>
          </div>
        </div>

        <div className="relative mt-8 md:mt-0">
          
          <div className="relative rounded-2xl w-86 md:w-120 md:rounded-[2.5rem] overflow-hidden shadow-xl botanical-shadow bg-surface">
            <img
              alt="Farmacia"
              className="w-64 h-64 md:h-94 md:w-full md:h-120 object-fit"
              src="/pildora.webp"
            />
            <div className="absolute bottom-4 md:bottom-8 left-4 md:left-8 right-4 md:right-8 glass-card p-4 md:p-6 rounded-xl md:rounded-2xl border border-white/20">
              <div className="flex items-center gap-3 md:gap-4">
                <div className="w-10 md:w-12 h-10 md:h-12 bg-primary rounded-full flex items-center justify-center text-white flex-shrink-0">
                  <span className="material-symbols-outlined text-xl md:text-2xl">verified_user</span>
                </div>
                <div>
                  <p className="text-secondary font-bold text-sm md:text-lg">Confianza Total</p>
                  <p className="text-secondary/80 text-xs md:text-sm font-medium">Excelencia clínica en cada servicio</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
