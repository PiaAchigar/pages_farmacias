'use client'

import { useState } from 'react'
import { Farmacia } from '@/types/farmacia'

interface ContactProps {
  farmacia: Farmacia
}

export function Contact({ farmacia }: ContactProps) {
  const [isLoading, setIsLoading] = useState(false)
  const [successMessage, setSuccessMessage] = useState('')
  const [errorMessage, setErrorMessage] = useState('')

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsLoading(true)
    setSuccessMessage('')
    setErrorMessage('')

    const formData = new FormData(e.currentTarget)
    const nombre = formData.get('nombre') as string
    const email = formData.get('email') as string
    const mensaje = formData.get('mensaje') as string

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          nombre,
          email,
          mensaje,
          farmaciaKey: farmacia.key,
          farmaciaName: farmacia.nombre,
        }),
      })

      if (!res.ok) throw new Error('Error al enviar')

      setSuccessMessage('¡Mensaje enviado! Nos pondremos en contacto pronto.')
      ;(e.target as HTMLFormElement).reset()
    } catch (error) {
      setErrorMessage('Hubo un error al enviar el mensaje. Intenta de nuevo.')
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <section className="py-24 md:py-32 bg-white" id="contactos">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          <div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold font-headline text-secondary mb-6">
              Contactanos
            </h2>
            <p className="text-base sm:text-lg md:text-lg text-secondary/70 mb-2 font-medium">
              ¿Tenés alguna consulta o pedido especial?
            </p>
            <p className="text-base sm:text-lg md:text-lg text-secondary/70 mb-10 font-medium">Nuestro equipo está listo para ayudarte.</p>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-xs md:text-sm font-bold text-secondary mb-2 md:mb-3">
                  Nombre Completo
                </label>
                <input
                  required
                  name="nombre"
                  type="text"
                  placeholder="Juan Pérez"
                  className="w-full bg-slate-50 border-0 rounded-xl md:rounded-2xl px-4 md:px-6 py-3 md:py-4 focus:ring-2 focus:ring-primary transition-all text-sm md:text-base"
                />
              </div>
              <div>
                <label className="block text-xs md:text-sm font-bold text-secondary mb-2 md:mb-3">
                  Correo Electrónico
                </label>
                <input
                  required
                  name="email"
                  type="email"
                  placeholder="juan@ejemplo.com"
                  className="w-full bg-slate-50 border-0 rounded-xl md:rounded-2xl px-4 md:px-6 py-3 md:py-4 focus:ring-2 focus:ring-primary transition-all text-sm md:text-base"
                />
              </div>
              <div>
                <label className="block text-xs md:text-sm font-bold text-secondary mb-2 md:mb-3">
                  Mensaje
                </label>
                <textarea
                  required
                  name="mensaje"
                  placeholder="Escribí tu consulta aquí..."
                  rows={4}
                  className="w-full bg-slate-50 border-0 rounded-xl md:rounded-2xl px-4 md:px-6 py-3 md:py-4 focus:ring-2 focus:ring-primary transition-all text-sm md:text-base"
                />
              </div>
              {successMessage && (
                <div className="bg-green-50 border border-green-200 text-green-700 px-4 py-3 rounded-lg text-xs md:text-sm">
                  {successMessage}
                </div>
              )}
              {errorMessage && (
                <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-lg text-xs md:text-sm">
                  {errorMessage}
                </div>
              )}
              <button
                type="submit"
                disabled={isLoading}
                className="bg-primary text-white w-full py-3 md:py-5 rounded-xl md:rounded-2xl font-bold text-sm md:text-lg hover:brightness-105 transition-all shadow-lg disabled:opacity-70"
              >
                {isLoading ? 'Enviando...' : 'Enviar Mensaje'}
              </button>
            </form>
          </div>

          <div className="space-y-8">
            <div className="rounded-2xl md:rounded-[2.5rem] overflow-hidden botanical-shadow h-64 md:h-80 lg:h-[400px] bg-slate-100 relative">
              <div
                dangerouslySetInnerHTML={{ __html: farmacia.googleMapsEmbed }}
                className="w-full h-full"
              />
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="bg-slate-50 p-5 md:p-6 lg:p-8 rounded-xl md:rounded-2xl flex items-start sm:items-center gap-3 md:gap-4 border border-slate-100">
                <span className="material-symbols-outlined text-primary text-3xl md:text-4xl flex-shrink-0">call</span>
                <div className="min-w-0">
                  <p className="text-xs text-secondary/60 font-bold uppercase tracking-wider">
                    Teléfono
                  </p>
                  <p className="text-secondary font-bold text-xs md:text-xs break-words">{farmacia.telefono}</p>
                </div>
              </div>
              <div className="bg-slate-50 p-5 md:p-6 lg:p-8 rounded-xl md:rounded-2xl flex items-start sm:items-center gap-3 md:gap-4 border border-slate-100">
                <span className="material-symbols-outlined text-primary text-3xl md:text-4xl flex-shrink-0">mail</span>
                <div className="min-w-0">
                  <p className="text-xs text-secondary/60 font-bold uppercase tracking-wider">
                    Email
                  </p>
                  <p className="text-secondary font-bold text-xs md:text-xs break-words">{farmacia.mail}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
