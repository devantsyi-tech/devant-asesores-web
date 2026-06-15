import Link from "next/link"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { WhatsAppButton } from "@/components/whatsapp-button"
import { Car, FileText, ArrowRight } from "lucide-react"

export const metadata = {
  title: "Servicios | Devant Asesores",
  description: "Servicios adicionales: Renting de vehículos y gestoría. Soluciones integrales para tu comodidad."
}

const services = [
  {
    id: "renting",
    name: "Renting para Particulares",
    icon: Car,
    description: "Estrena el coche que quieres con todo incluido y sin sorpresas",
    excerpt: "Accede a un coche de último modelo mediante una única cuota fija mensual. Sin inversión inicial, sin imprevistos.",
    href: "/servicios/renting"
  },
  {
    id: "gestoria",
    name: "Gestoría",
    icon: FileText,
    description: "Tramitaciones y gestiones administrativas",
    excerpt: "Renta, cambio de nombre de vehículos, extranjería y otros trámites. Nos encargamos de todo el papeleo.",
    href: "/servicios/gestoria"
  }
]

export default function ServiciosPage() {
  return (
    <main className="min-h-screen">
      <Header />
      
      {/* Hero */}
      <section className="pt-32 pb-20 bg-gray-900 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 right-0 w-96 h-96 bg-red-600 rounded-full translate-x-1/2 -translate-y-1/2" />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl">
            <span className="text-red-500 font-semibold text-sm uppercase tracking-wider">
              Nuestros servicios
            </span>
            <h1 className="text-4xl md:text-5xl font-bold text-white mt-3 mb-6">
              Servicios adicionales para tu comodidad
            </h1>
            <p className="text-gray-300 text-lg leading-relaxed">
              Además de nuestra actividad principal como correduría de seguros, 
              ofrecemos servicios complementarios que pueden facilitarte la vida.
            </p>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-20 bg-gray-100">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service) => (
              <Link
                key={service.id}
                href={service.href}
                className="group bg-white rounded-2xl p-8 shadow-sm hover:shadow-xl transition-all duration-300"
              >
                <div className="w-16 h-16 bg-red-100 rounded-xl flex items-center justify-center mb-6 group-hover:bg-red-600 transition-colors">
                  <service.icon className="w-8 h-8 text-red-600 group-hover:text-white transition-colors" />
                </div>
                <h2 className="text-2xl font-bold text-gray-900 mb-3">
                  {service.name}
                </h2>
                <p className="text-red-600 font-medium mb-4">
                  {service.description}
                </p>
                <p className="text-gray-600 mb-6">
                  {service.excerpt}
                </p>
                <span className="inline-flex items-center gap-2 text-gray-900 font-medium group-hover:text-red-600 transition-colors">
                  Ver más información
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gray-800">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            ¿Necesitas más información?
          </h2>
          <p className="text-gray-300 text-lg mb-8 max-w-2xl mx-auto">
            Contacta con nosotros y te explicaremos en detalle cómo podemos ayudarte.
          </p>
          <Link
            href="/contacto"
            className="inline-flex items-center justify-center px-8 py-4 bg-red-600 hover:bg-red-700 text-white font-semibold rounded-lg transition-all duration-300 hover:scale-105"
          >
            Contactar
          </Link>
        </div>
      </section>

      <Footer />
      <WhatsAppButton />
    </main>
  )
}
