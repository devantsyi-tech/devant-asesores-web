import Link from "next/link"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { WhatsAppButton } from "@/components/whatsapp-button"
import { ArrowLeft, FileText, Car, Globe, MoreHorizontal } from "lucide-react"

export const metadata = {
  title: "Gestoría | Devant Asesores",
  description: "Servicios de gestoría: Declaración de la renta, cambio de nombre de vehículos, extranjería y otros trámites administrativos."
}

const services = [
  {
    icon: FileText,
    title: "Declaración de la Renta",
    description: "Te ayudamos con tu declaración de la renta de forma profesional y optimizada.",
    details: [
      "Revisión de borradores",
      "Optimización fiscal",
      "Desgravaciones aplicables",
      "Presentación telemática"
    ]
  },
  {
    icon: Car,
    title: "Cambio de Nombre de Vehículos",
    description: "Gestionamos la transferencia de titularidad de tu vehículo de forma rápida y segura.",
    details: [
      "Transferencias entre particulares",
      "Compraventa de vehículos",
      "Gestión de documentación DGT",
      "Impuesto de transmisiones"
    ]
  },
  {
    icon: Globe,
    title: "Extranjería",
    description: "Asesoramiento y gestión de trámites relacionados con extranjería y residencia.",
    details: [
      "Permisos de residencia",
      "Reagrupación familiar",
      "NIE y tarjetas de residencia",
      "Renovaciones"
    ]
  },
  {
    icon: MoreHorizontal,
    title: "Otros trámites",
    description: "Nos encargamos de cualquier gestión administrativa que necesites.",
    details: [
      "Certificados",
      "Instancias y recursos",
      "Gestiones con administraciones",
      "Consulta sin compromiso"
    ]
  }
]

export default function GestoriaPage() {
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
              Gestoría
            </span>
            <h1 className="text-4xl md:text-5xl font-bold text-white mt-3 mb-6">
              Tramitaciones y gestiones administrativas
            </h1>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-20 bg-gray-100">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-lg transition-shadow"
              >
                <div className="w-14 h-14 bg-red-100 rounded-xl flex items-center justify-center mb-6">
                  <service.icon className="w-7 h-7 text-red-600" />
                </div>
                <h2 className="text-2xl font-bold text-gray-900 mb-3">
                  {service.title}
                </h2>
                <p className="text-gray-600 mb-6">
                  {service.description}
                </p>
                <ul className="space-y-3">
                  {service.details.map((detail, detailIndex) => (
                    <li key={detailIndex} className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-red-600 rounded-full" />
                      <span className="text-gray-700">{detail}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
      <WhatsAppButton />
    </main>
  )
}
