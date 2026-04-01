import { NextRequest, NextResponse } from 'next/server'
import { Resend } from 'resend'

interface ContactRequest {
  nombre: string
  email: string
  mensaje: string
  farmaciaKey: string
  farmaciaName: string
}

export async function POST(request: NextRequest) {
  try {
    const resend = new Resend(process.env.RESEND_API_KEY)
    const body: ContactRequest = await request.json()

    const { nombre, email, mensaje, farmaciaName } = body

    // Validación básica
    if (!nombre || !email || !mensaje) {
      return NextResponse.json(
        { error: 'Faltan campos requeridos' },
        { status: 400 }
      )
    }

    // Enviar email con Resend
    const data = await resend.emails.send({
      from: 'Rodyna Farmacias <noreply@rodynafarmacias.com.ar>',
      to: 'administracion@rodynafarmacias.com.ar',
      replyTo: email,
      subject: `[${farmaciaName}] Consulta de ${nombre}`,
      html: `
        <h2>Nueva consulta de ${farmaciaName}</h2>
        <p><strong>Nombre:</strong> ${nombre}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Mensaje:</strong></p>
        <p>${mensaje.replace(/\n/g, '<br>')}</p>
      `,
    })

    return NextResponse.json({ success: true, data }, { status: 200 })
  } catch (error) {
    console.error('Error sending email:', error)
    return NextResponse.json(
      { error: 'Error al enviar el email' },
      { status: 500 }
    )
  }
}
