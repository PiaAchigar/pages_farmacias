import { Farmacia } from '@/types/farmacia'

interface HeroProps {
  farmacia: Farmacia
}

export function About({ farmacia }: HeroProps) {
  return (
    <section className="py-24 md:py-32 bg-slate-50" id="nosotros">
      <div className="max-w-4xl mx-auto px-4 md:px-8 text-center">
        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold font-headline text-secondary mb-8">
          Cuidamos lo más importante: Tu Salud
        </h2>
        <p className="text-base sm:text-lg md:text-xl text-secondary/80 leading-relaxed mb-12 font-medium">
          En {farmacia.nombre}, nuestra vocación es el bienestar integral. Somos más que una farmacia;
          somos un centro de cuidado donde la atención personalizada y la calidad clínica se encuentran.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          <div className="p-8 bg-white rounded-2xl md:rounded-3xl botanical-shadow">
            <div className="w-14 md:w-16 h-14 md:h-16 rounded-full bg-primary/10 flex items-center justify-center text-primary mx-auto mb-6">
              <span className="material-symbols-outlined text-3xl md:text-4xl">health_and_safety</span>
            </div>
            <h4 className="text-xl md:text-2xl font-bold text-secondary mb-3">Calidad Certificada</h4>
            <p className="text-sm md:text-base text-secondary/70 font-medium">
              Productos seleccionados bajo los más altos estándares farmacéuticos.
            </p>
          </div>
          <div className="p-8 bg-white rounded-2xl md:rounded-3xl botanical-shadow">
            <div className="w-14 md:w-16 h-14 md:h-16 rounded-full bg-primary/10 flex items-center justify-center text-primary mx-auto mb-6">
              <span className="material-symbols-outlined text-3xl md:text-4xl">diversity_1</span>
            </div>
            <h4 className="text-xl md:text-2xl font-bold text-secondary mb-3">Atención Humana</h4>
            <p className="text-sm md:text-base text-secondary/70 font-medium">
              Nuestro equipo de profesionales está siempre dispuesto a asesorarte con calidez.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
