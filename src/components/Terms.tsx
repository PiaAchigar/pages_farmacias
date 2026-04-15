import Link from 'next/link'
import { Farmacia } from '@/types/farmacia'

interface TermsProps {
  farmacia: Farmacia
}

export function Terms({ farmacia }: TermsProps) {
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-4xl mx-auto px-4 md:px-8 py-12 md:py-20">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-primary font-semibold mb-10 hover:opacity-75 transition-opacity"
        >
          <span className="material-symbols-outlined text-xl">arrow_back</span>
          Volver al inicio
        </Link>

        <h1 className="text-3xl md:text-4xl font-bold text-on-surface mb-2">
          Términos y Condiciones
        </h1>
        <p className="text-slate-500 font-body text-sm mb-10">
          {farmacia.nombre} &mdash; Última actualización: enero 2026
        </p>

        <div className="space-y-8 font-body text-slate-700 text-sm md:text-base leading-relaxed">
          <section>
            <h2 className="text-lg md:text-xl font-bold text-on-surface mb-3">1. Aceptación de los términos</h2>
            <p>
              Al acceder y utilizar el sitio web de <strong>{farmacia.nombre}</strong> ({farmacia.dominio}), usted
              acepta quedar vinculado por los presentes Términos y Condiciones. Si no está de acuerdo con alguna
              de las disposiciones aquí establecidas, le solicitamos que se abstenga de utilizar este sitio.
            </p>
          </section>

          <section>
            <h2 className="text-lg md:text-xl font-bold text-on-surface mb-3">2. Información del establecimiento</h2>
            <p>
              <strong>{farmacia.nombre}</strong> es una farmacia habilitada conforme a la normativa vigente de la
              República Argentina. Nuestro domicilio comercial se encuentra en {farmacia.direccion}. Podés
              contactarnos al {farmacia.telefono} o por correo electrónico a {farmacia.mail}.
            </p>
          </section>

          <section>
            <h2 className="text-lg md:text-xl font-bold text-on-surface mb-3">3. Uso del sitio</h2>
            <p>
              Este sitio web tiene carácter informativo. La información publicada sobre medicamentos, productos y
              servicios no reemplaza la consulta con un profesional de la salud. {farmacia.nombre} no se
              responsabiliza por el uso inadecuado de la información aquí contenida.
            </p>
          </section>

          <section>
            <h2 className="text-lg md:text-xl font-bold text-on-surface mb-3">4. Venta de medicamentos</h2>
            <p>
              La venta de medicamentos bajo receta está sujeta a la presentación del recetario correspondiente,
              conforme a la Ley 17.132 y demás normativas aplicables. Nos reservamos el derecho de rechazar
              pedidos que no cumplan con los requisitos legales vigentes.
            </p>
          </section>

          <section>
            <h2 className="text-lg md:text-xl font-bold text-on-surface mb-3">5. Obras Sociales y coberturas</h2>
            <p>
              Las coberturas de obras sociales informadas en este sitio son orientativas y pueden estar sujetas
              a cambios sin previo aviso. Te recomendamos confirmar la cobertura vigente directamente en el
              local o comunicándote por WhatsApp antes de concurrir.
            </p>
          </section>

          <section>
            <h2 className="text-lg md:text-xl font-bold text-on-surface mb-3">6. Propiedad intelectual</h2>
            <p>
              Todos los contenidos de este sitio (textos, imágenes, logotipos, diseño) son propiedad de{' '}
              {farmacia.nombre} o de sus respectivos titulares, y están protegidos por las leyes de propiedad
              intelectual. Queda prohibida su reproducción total o parcial sin autorización expresa.
            </p>
          </section>

          <section>
            <h2 className="text-lg md:text-xl font-bold text-on-surface mb-3">7. Privacidad y datos personales</h2>
            <p>
              Los datos personales que el usuario proporcione a través del formulario de contacto serán
              utilizados exclusivamente para dar respuesta a su consulta, en cumplimiento de la Ley 25.326 de
              Protección de Datos Personales. No compartimos su información con terceros sin su consentimiento.
            </p>
          </section>

          <section>
            <h2 className="text-lg md:text-xl font-bold text-on-surface mb-3">8. Limitación de responsabilidad</h2>
            <p>
              {farmacia.nombre} no garantiza la disponibilidad ininterrumpida del sitio y no será responsable
              por daños directos o indirectos derivados del uso o la imposibilidad de uso del mismo. Los precios
              y la disponibilidad de productos pueden variar sin previo aviso.
            </p>
          </section>

          <section>
            <h2 className="text-lg md:text-xl font-bold text-on-surface mb-3">9. Modificaciones</h2>
            <p>
              Nos reservamos el derecho de actualizar estos Términos y Condiciones en cualquier momento. Los
              cambios entrarán en vigor desde su publicación en este sitio. Te recomendamos revisar esta página
              periódicamente.
            </p>
          </section>

          <section>
            <h2 className="text-lg md:text-xl font-bold text-on-surface mb-3">10. Jurisdicción y ley aplicable</h2>
            <p>
              Cualquier controversia derivada del uso de este sitio se regirá por las leyes de la República
              Argentina, sometiéndose las partes a la jurisdicción de los Tribunales Ordinarios de la Ciudad
              Autónoma de Buenos Aires o de la Provincia de Buenos Aires, según corresponda.
            </p>
          </section>
        </div>
      </div>
    </div>
  )
}
