import Link from "next/link"
import { Car, Heart, Home, Building2, Plane, PawPrint, ArrowRight } from "lucide-react"

const services = [
  {
    icon: Car,
    title: "Automóviles",
    description: "Coche, moto, camión, flotas y más. Protege tu movilidad.",
    href: "/seguros/automoviles"
  },
  {
    icon: Heart,
    title: "Vida",
    description: "Asegura el futuro de los tuyos con la protección adecuada.",
    href: "/seguros/vida"
  },
  {
    icon: Home,
    title: "Hogar",
    description: "Tu casa protegida con coberturas completas y asistencia 24h.",
    href: "/seguros/hogar"
  },
  {
    icon: Building2,
    title: "Negocios",
    description: "PYMES, comercios, oficinas y responsabilidad civil.",
    href: "/seguros/negocios"
  },
  {
    icon: Plane,
    title: "Viajes",
    description: "Viaja tranquilo con cobertura nacional e internacional.",
    href: "/seguros/viajes"
  },
  {
    icon: PawPrint,
    title: "Mascotas",
    description: "Protección veterinaria y RC para tu compañero.",
    href: "/seguros/mascotas"
  },
]

export function ServicesPreview() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-red-600 font-semibold text-sm uppercase tracking-wider">
            Nuestros seguros
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-3 mb-4">
            Soluciones para cada necesidad
          </h2>
          <p className="text-gray-600 text-lg">
            Te ofrecemos un amplio catálogo de seguros adaptados a tu situación personal, 
            familiar o empresarial.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <Link
              key={index}
              href={service.href}
              className="group bg-gray-50 hover:bg-gray-900 rounded-xl p-8 transition-all duration-300"
            >
              <div className="w-14 h-14 bg-red-100 group-hover:bg-red-600 rounded-lg flex items-center justify-center mb-6 transition-colors">
                <service.icon className="w-7 h-7 text-red-600 group-hover:text-white transition-colors" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 group-hover:text-white mb-3 transition-colors">
                {service.title}
              </h3>
              <p className="text-gray-600 group-hover:text-gray-300 mb-4 transition-colors">
                {service.description}
              </p>
              <span className="inline-flex items-center gap-2 text-red-600 group-hover:text-red-400 font-medium transition-colors">
                Ver más <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </span>
            </Link>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link
            href="/seguros"
            className="inline-flex items-center gap-2 px-8 py-4 bg-gray-900 hover:bg-gray-800 text-white font-semibold rounded-lg transition-colors"
          >
            Ver todos los seguros
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </div>
    </section>
  )
}
