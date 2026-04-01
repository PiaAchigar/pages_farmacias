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
    <section className="py-24 bg-white" id="contactos">
      <div className="max-w-7xl mx-auto px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          <div>
            <h2 className="text-4xl font-extrabold font-headline text-secondary mb-6">
              Contactanos
            </h2>
            <p className="text-lg text-secondary/70 mb-10 font-medium">
              ¿Tenés alguna consulta o pedido especial? Nuestro equipo está listo para ayudarte.
            </p>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-sm font-bold text-secondary mb-2">
                  Nombre Completo
                </label>
                <input
                  required
                  name="nombre"
                  type="text"
                  placeholder="Juan Pérez"
                  className="w-full bg-surface border-0 rounded-2xl px-6 py-4 focus:ring-2 focus:ring-primary transition-all"
                />
              </div>
              <div>
                <label className="block text-sm font-bold text-secondary mb-2">
                  Correo Electrónico
                </label>
                <input
                  required
                  name="email"
                  type="email"
                  placeholder="juan@ejemplo.com"
                  className="w-full bg-surface border-0 rounded-2xl px-6 py-4 focus:ring-2 focus:ring-primary transition-all"
                />
              </div>
              <div>
                <label className="block text-sm font-bold text-secondary mb-2">
                  Mensaje
                </label>
                <textarea
                  required
                  name="mensaje"
                  placeholder="Escribí tu consulta aquí..."
                  rows={4}
                  className="w-full bg-surface border-0 rounded-2xl px-6 py-4 focus:ring-2 focus:ring-primary transition-all"
                />
              </div>
              {successMessage && (
                <div className="bg-green-50 border border-green-200 text-green-700 px-4 py-3 rounded-lg text-sm">
                  {successMessage}
                </div>
              )}
              {errorMessage && (
                <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-lg text-sm">
                  {errorMessage}
                </div>
              )}
              <button
                type="submit"
                disabled={isLoading}
                className="bg-primary text-white w-full py-5 rounded-2xl font-bold text-lg hover:brightness-105 transition-all shadow-lg disabled:opacity-70"
              >
                {isLoading ? 'Enviando...' : 'Enviar Mensaje'}
              </button>
            </form>
          </div>

          <div className="space-y-8">
            <div className="rounded-[2.5rem] overflow-hidden shadow-lg h-[400px] bg-slate-100 relative">
              <div
                dangerouslySetInnerHTML={{ __html: farmacia.googleMapsEmbed }}
                className="w-full h-full"
              />
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="bg-surface p-6 rounded-2xl flex items-center gap-4 border border-slate-100">
                <svg className="w-8 h-8 text-primary flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773c.418 1.455 1.457 2.98 2.816 4.333 1.359 1.352 2.894 2.389 4.35 2.8l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                </svg>
                <div>
                  <p className="text-xs text-secondary/60 font-bold uppercase tracking-wider">
                    Teléfono
                  </p>
                  <p className="text-secondary font-bold">{farmacia.telefono}</p>
                </div>
              </div>
              <div className="bg-surface p-6 rounded-2xl flex items-center gap-4 border border-slate-100">
                <svg className="w-8 h-8 text-primary flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                  <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                </svg>
                <div>
                  <p className="text-xs text-secondary/60 font-bold uppercase tracking-wider">
                    Email
                  </p>
                  <p className="text-secondary font-bold">administracion@rodynafarmacias.com.ar</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
