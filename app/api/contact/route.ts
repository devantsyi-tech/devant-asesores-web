import { NextRequest, NextResponse } from "next/server"

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { name, email, phone, subject, message } = body

    // Validate required fields
    if (!name || !email || !phone || !message) {
      return NextResponse.json(
        { error: "Todos los campos obligatorios deben estar completos" },
        { status: 400 }
      )
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: "El formato del email no es válido" },
        { status: 400 }
      )
    }

    // Map subject to Spanish
    const subjectMap: Record<string, string> = {
      automoviles: "Automóviles",
      hogar: "Hogar",
      vida: "Vida",
      salud: "Salud",
      negocios: "Negocios",
      otros: "Otros",
      "": "No especificado"
    }

    const subjectText = subjectMap[subject] || subject || "No especificado"

    // Build email content
    const emailContent = `
Nuevo mensaje de contacto desde la web de Devant Asesores

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

DATOS DEL CONTACTO:

• Nombre completo: ${name}
• Teléfono: ${phone}
• Email: ${email}
• Tipo de seguro: ${subjectText}

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

MENSAJE:

${message}

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Este mensaje fue enviado desde el formulario de contacto de www.devantasesores.com
    `.trim()

    // Send email using Resend API (recommended for Vercel)
    // You'll need to set RESEND_API_KEY in your environment variables
    const resendApiKey = process.env.RESEND_API_KEY

    if (resendApiKey) {
      const response = await fetch("https://api.resend.com/emails", {
        method: "POST",
        headers: {
          "Authorization": `Bearer ${resendApiKey}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          from: "Devant Asesores Web <onboarding@resend.dev>",
          to: ["info@devantasesores.com"],
          subject: `Nuevo contacto web: ${name} - ${subjectText}`,
          text: emailContent,
          reply_to: email,
        }),
      })

      if (!response.ok) {
        const errorData = await response.json()
        console.error("[v0] Resend API error:", errorData)
        throw new Error("Error al enviar el email")
      }

      return NextResponse.json({ 
        success: true, 
        message: "Tu mensaje ha sido enviado correctamente, nos pondremos en contacto contigo pronto." 
      })
    }

    // Fallback: If no email service is configured, log the message
    // In production, you should configure RESEND_API_KEY
    console.log("[v0] Contact form submission (no email service configured):")
    console.log(emailContent)

    // For demo purposes, return success
    return NextResponse.json({ 
      success: true, 
      message: "Tu mensaje ha sido enviado correctamente, nos pondremos en contacto contigo pronto." 
    })

  } catch (error) {
    console.error("[v0] Contact form error:", error)
    return NextResponse.json(
      { error: "Hubo un problema al enviar tu mensaje, por favor inténtalo de nuevo más tarde." },
      { status: 500 }
    )
  }
}
