import { Farmacia } from '@/types/farmacia'

interface SchedulesProps {
  farmacia: Farmacia
}

export function Schedules({ farmacia }: SchedulesProps) {
  return (
    <section className="py-24 md:py-32 bg-secondary text-white" id="horarios">
      <div className="max-w-3xl mx-auto px-4 md:px-8">
        <div className="text-center mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold font-headline mb-4">Horarios de Atención</h2>
          <p className="text-base sm:text-lg md:text-xl text-white/70 font-medium">Consultá nuestros horarios para visitarnos.</p>
        </div>
        <div className="bg-white/5 rounded-2xl md:rounded-[2.5rem] p-8 md:p-12 backdrop-blur-md border border-white/10">
          <div className="flex items-center justify-center gap-4 mb-10">
            <div className="w-14 md:w-16 h-14 md:h-16 bg-primary rounded-full flex items-center justify-center text-white">
              <span className="material-symbols-outlined text-2xl md:text-3xl">schedule</span>
            </div>
          </div>
          <ul className="space-y-6">
            <li className="flex flex-col sm:flex-row justify-between items-start sm:items-center pb-6 border-b border-white/10 gap-4">
              <span className="text-lg sm:text-xl md:text-2xl font-bold">Lunes a Viernes</span>
              <span className="bg-primary text-white px-5 md:px-8 py-2 md:py-3 rounded-full text-sm md:text-lg font-extrabold whitespace-nowrap">
                {farmacia.horarioSemana}
              </span>
            </li>
            <li className="flex flex-col sm:flex-row justify-between items-start sm:items-center pb-6 border-b border-white/10 gap-4">
              <span className="text-lg sm:text-xl md:text-2xl font-bold">Sábados</span>
              <span className="bg-primary text-white px-5 md:px-8 py-2 md:py-3 rounded-full text-sm md:text-lg font-extrabold whitespace-nowrap">
                {farmacia.horarioSabado}
              </span>
            </li>
            <li className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
              <span className="text-lg sm:text-xl md:text-2xl font-bold">Domingos y Feriados</span>
              <div className="flex items-center gap-2 text-white/80 whitespace-nowrap">
                <span className="material-symbols-outlined text-xl">notification_important</span>
                <span className="text-sm md:text-lg italic font-medium">Consultar Guardias</span>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </section>
  )
}
