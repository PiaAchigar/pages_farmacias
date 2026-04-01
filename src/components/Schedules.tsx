import { Farmacia } from '@/types/farmacia'

interface SchedulesProps {
  farmacia: Farmacia
}

export function Schedules({ farmacia }: SchedulesProps) {
  return (
    <section className="py-24 bg-secondary text-white" id="horarios">
      <div className="max-w-3xl mx-auto px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-extrabold font-headline mb-4">Horarios de Atención</h2>
          <p className="text-xl text-white/70 font-medium">Consultá nuestros horarios para visitarnos.</p>
        </div>
        <div className="bg-white/5 rounded-[2.5rem] p-8 md:p-12 backdrop-blur-md border border-white/10">
          <div className="flex items-center justify-center gap-4 mb-10">
            <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center text-white">
              <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v2H4a2 2 0 00-2 2v2h16V7a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v2H7V3a1 1 0 00-1-1zm0 5a2 2 0 002 2h8a2 2 0 002-2H6zM4 15a2 2 0 002 2h8a2 2 0 002-2H4z" clipRule="evenodd" />
              </svg>
            </div>
          </div>
          <ul className="space-y-6">
            <li className="flex flex-col sm:flex-row justify-between items-center pb-6 border-b border-white/10 gap-4">
              <span className="text-2xl font-bold">Lunes a Viernes</span>
              <span className="bg-primary text-white px-6 py-2 rounded-full text-lg font-extrabold">
                {farmacia.horarioSemana}
              </span>
            </li>
            <li className="flex flex-col sm:flex-row justify-between items-center pb-6 border-b border-white/10 gap-4">
              <span className="text-2xl font-bold">Sábados</span>
              <span className="bg-primary text-white px-6 py-2 rounded-full text-lg font-extrabold">
                {farmacia.horarioSabado}
              </span>
            </li>
            <li className="flex flex-col sm:flex-row justify-between items-center gap-4">
              <span className="text-2xl font-bold">Domingos y Feriados</span>
              <div className="flex items-center gap-2 text-white/80">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                </svg>
                <span className="text-lg italic font-medium">Consultar Guardias</span>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </section>
  )
}
