import { Farmacia } from '@/types/farmacia'

interface ServicesProps {
  farmacia: Farmacia
}

export function Services({ farmacia }: ServicesProps) {
  return (
    <section className="py-24 md:py-32 bg-slate-50" id="obras-sociales">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="text-center mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold font-headline text-secondary mb-4">Obras Sociales</h2>
          <p className="text-base sm:text-lg md:text-xl text-secondary/70 max-w-2xl mx-auto font-medium px-2">
            Trabajamos con una amplia cartilla de obras sociales y prepagas para tu mayor comodidad.
          </p>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6 md:gap-8">
          {farmacia.obrasSociales.map((obra) => (
            <div
              key={obra}
              className="group bg-white h-32 rounded-2xl md:rounded-3xl flex items-center justify-center p-6 transition-all duration-300 cursor-default botanical-shadow border border-slate-100 hover:bg-primary hover:-translate-y-2 hover:shadow-xl"
            >
              <span className="font-bold text-secondary group-hover:text-white text-center text-xs sm:text-sm md:text-base transition-colors duration-300">{obra}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
