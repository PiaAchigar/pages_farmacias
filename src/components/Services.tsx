import { Farmacia } from '@/types/farmacia'

interface ServicesProps {
  farmacia: Farmacia
}

export function Services({ farmacia }: ServicesProps) {
  return (
    <section className="py-24 bg-surface" id="obras-sociales">
      <div className="max-w-7xl mx-auto px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-extrabold font-headline text-secondary mb-4">Obras Sociales</h2>
          <p className="text-xl text-secondary/70 max-w-2xl mx-auto font-medium">
            Trabajamos con una amplia cartilla de obras sociales y prepagas para tu mayor comodidad.
          </p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
          {farmacia.obrasSociales.map((obra) => (
            <div
              key={obra}
              className="bg-white h-32 rounded-3xl flex items-center justify-center p-6 grayscale hover:grayscale-0 transition-all cursor-default shadow-md border border-slate-100"
            >
              <span className="font-bold text-secondary text-lg text-center">{obra}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
