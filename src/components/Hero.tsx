import { Farmacia } from '@/types/farmacia'

interface HeroProps {
  farmacia: Farmacia
}

export function Hero({ farmacia }: HeroProps) {
  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-32 overflow-hidden" id="hero">
      <div className="max-w-7xl mx-auto px-8 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <div className="relative z-10">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-primary text-white text-sm font-bold mb-6 tracking-wide">
            TU FARMACIA DE CONFIANZA
          </div>
          <h1 className="text-5xl md:text-7xl font-extrabold font-headline text-secondary leading-[1.1] mb-6">
            {farmacia.nombre}
          </h1>
          <p className="text-xl md:text-2xl text-secondary/90 font-headline font-medium leading-relaxed mb-10 max-w-lg">
            Cuidamos lo más importante: Tu Salud.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="#catalogo"
              className="bg-primary text-white text-center px-8 py-4 rounded-xl font-bold text-lg hover:shadow-lg transition-all transform hover:-translate-y-1"
            >
              Ver Catálogo Online
            </a>
            <a
              href="#nosotros"
              className="bg-white text-secondary border-2 border-primary text-center px-8 py-4 rounded-xl font-bold text-lg hover:bg-slate-50 transition-all"
            >
              Conócenos
            </a>
          </div>
        </div>

        <div className="relative">
          <div className="absolute -top-20 -right-20 w-80 h-80 bg-primary opacity-10 rounded-full blur-3xl"></div>
          <div className="relative rounded-[2.5rem] overflow-hidden shadow-xl">
            <img
              alt="Farmacia"
              className="w-full h-[500px] object-cover"
              src="https://images.unsplash.com/photo-1631549916768-4873b231374c?w=600&h=500&fit=crop"
            />
            <div className="absolute bottom-8 left-8 right-8 bg-white/90 backdrop-blur-lg p-6 rounded-2xl shadow-xl border border-white/50">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center text-white">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M10.894 2.553a.5.5 0 00-.788 0l-7 7a.5.5 0 001.414.707L2 10.707v9.586a1 1 0 001 1h12a1 1 0 001-1v-9.586l-1.106 1.106a.5.5 0 11-.708-.707l-7-7z" />
                  </svg>
                </div>
                <div>
                  <p className="text-secondary font-bold text-lg">Confianza Total</p>
                  <p className="text-secondary/80 text-sm font-medium">Excelencia clínica en cada servicio</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
