import Image from "next/image"
import Link from "next/link"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { WhatsAppButton } from "@/components/whatsapp-button"
import { ArrowLeft, Check, Car, Shield, Wrench, FileText } from "lucide-react"

export const metadata = {
  title: "Renting para Particulares | Devant Asesores",
  description: "Estrena el coche que quieres con todo incluido y sin sorpresas. Cuota fija mensual con seguro, mantenimiento y más."
}

const benefits = [
  {
    icon: Shield,
    title: "Seguro a Todo Riesgo",
    description: "Con amplias coberturas y asistencia en viaje 24 h."
  },
  {
    icon: Wrench,
    title: "Mantenimiento incluido",
    description: "Revisiones oficiales y averías mecánicas cubiertas."
  },
  {
    icon: Car,
    title: "Vehículo de cortesía",
    description: "Para que nunca dejes de moverte mientras tu coche está en el taller."
  },
  {
    icon: FileText,
    title: "Impuestos incluidos",
    description: "Matriculación, circulación y gestión de multas."
  }
]

const advantages = [
  {
    title: "Sin inversión inicial",
    description: "No necesitas dar una entrada ni realizar un gran desembolso de capital."
  },
  {
    title: "Cuota fija mensual",
    description: "Un solo recibo al mes que incluye seguro, taller e impuestos. Adiós a los imprevistos."
  },
  {
    title: "Súper ahorro",
    description: "Una opción mucho más económica y rentable que la compra o la financiación tradicional."
  },
  {
    title: "Flexibilidad total",
    description: "Estrena coche nuevo cada 3, 4 o 5 años según el contrato que elijas."
  }
]

export default function RentingPage() {
  return (
    <main className="min-h-screen">
      <Header />
      
      {/* Hero */}
      <section className="pt-32 pb-20 bg-gray-900 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 right-0 w-96 h-96 bg-red-600 rounded-full translate-x-1/2 -translate-y-1/2" />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <Link
            href="/servicios"
            className="inline-flex items-center gap-2 text-gray-400 hover:text-white transition-colors mb-8"
          >
            <ArrowLeft className="w-4 h-4" />
            Volver a servicios
          </Link>
          <div className="max-w-3xl">
            <span className="text-red-500 font-semibold text-sm uppercase tracking-wider">
              Renting para particulares
            </span>
            <h1 className="text-4xl md:text-5xl font-bold text-white mt-3 mb-6">
              Estrena el coche que quieres con todo incluido
            </h1>
            <p className="text-gray-300 text-lg leading-relaxed">
              ¿Quieres disfrutar del vehículo que mejor se adapta a tu momento de vida 
              sin preocuparte por nada más? Con nuestro servicio de Renting para Particulares, 
              accedes a un coche de último modelo mediante una única cuota fija mensual.
            </p>
          </div>
        </div>
      </section>

      {/* What's included */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              ¿Qué significa todo incluido?
            </h2>
            <p className="text-gray-600 text-lg">
              Olvídate de las facturas inesperadas. Tu cuota mensual ya cubre todos estos conceptos:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className="bg-gray-50 rounded-xl p-8 text-center hover:shadow-lg transition-shadow"
              >
                <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <benefit.icon className="w-8 h-8 text-red-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {benefit.title}
                </h3>
                <p className="text-gray-600">
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-12 bg-gray-100 rounded-2xl p-8">
            <h3 className="text-xl font-semibold text-gray-900 mb-6">
              También incluido en tu cuota:
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {[
                "Cambio de neumáticos",
                "Impuesto de matriculación",
                "Impuesto de circulación (IVTM)",
                "Gestión de multas",
                "ITV",
                "Asistencia en carretera 24 h"
              ].map((item, index) => (
                <div key={index} className="flex items-center gap-3">
                  <div className="w-6 h-6 bg-red-600 rounded-full flex items-center justify-center flex-shrink-0">
                    <Check className="w-4 h-4 text-white" />
                  </div>
                  <span className="text-gray-700">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Advantages */}
      <section className="py-20 bg-gray-100">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Las 4 claves de nuestro Renting
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {advantages.map((advantage, index) => (
              <div
                key={index}
                className="bg-white rounded-xl p-8 shadow-sm"
              >
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-red-600 rounded-lg flex items-center justify-center flex-shrink-0 text-white font-bold">
                    {index + 1}
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">
                      {advantage.title}
                    </h3>
                    <p className="text-gray-600">
                      {advantage.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Comparison */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                ¿Es rentable el renting frente a la compra?
              </h2>
              <p className="text-gray-600 text-lg mb-6 leading-relaxed">
                Hoy en día, el renting es la opción más inteligente para evitar la devaluación 
                del vehículo y los costes de mantenimiento que aumentan con los años. Al sumar 
                el coste de financiación, el seguro anual, las revisiones y los impuestos de 
                un coche en propiedad, el importe total suele ser muy superior a nuestra cuota de renting.
              </p>
              <p className="text-gray-600 text-lg leading-relaxed">
                Con nosotros, la aprobación es rápida y la gestión sencilla, para que puedas 
                recoger tu coche nuevo cerca de tu domicilio en pocos días.
              </p>
            </div>
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden">
              <Image
                src="/images/coche.jpg"
                alt="Familia disfrutando de su coche de renting"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gray-800">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-8">
              Contáctanos y pregunta por nuestros modelos disponibles
            </h2>
            <Link
              href="/contacto"
              className="inline-flex items-center justify-center px-8 py-4 bg-red-600 hover:bg-red-700 text-white font-semibold rounded-lg transition-colors"
            >
              Contactar ahora
            </Link>
          </div>
        </div>
      </section>

      <Footer />
      <WhatsAppButton />
    </main>
  )
}
