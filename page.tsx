import Image from "next/image"
import Link from "next/link"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { WhatsAppButton } from "@/components/whatsapp-button"
import { teamMembers } from "@/lib/team-data"
import { ArrowRight, User } from "lucide-react"

export const metadata = {
  title: "Nuestro Equipo | Devant Asesores",
  description: "Conoce al equipo de profesionales de Devant Asesores. Más de 20 años de experiencia protegiendo a familias y empresas."
}

export default function EquipoPage() {
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
              Nuestro equipo
            </span>
            <h1 className="text-4xl md:text-5xl font-bold text-white mt-3 mb-6">
              Profesionales dedicados a protegerte
            </h1>
            <p className="text-gray-300 text-lg leading-relaxed">
              En Devant Asesores contamos con un equipo consolidado de profesionales 
              dedicados a particulares, familias y empresas. Nuestra misión es ofrecer 
              un asesoramiento cercano, personalizado y eficaz, siempre defendiendo tus intereses.
            </p>
          </div>
        </div>
      </section>

      {/* Team Photo */}
      <section className="py-16 bg-gray-100">
        <div className="container mx-auto px-4">
          <div className="relative aspect-[16/9] md:aspect-[21/9] rounded-2xl overflow-hidden shadow-2xl">
            <Image
              src="/images/equipo.png"
              alt="Equipo de Devant Asesores"
              fill
              className="object-cover object-top"
              priority
            />
          </div>
        </div>
      </section>

      {/* Team Members */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-red-600 font-semibold text-sm uppercase tracking-wider">
              Conoce al equipo
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-3 mb-4">
              Las personas que te acompañarán
            </h2>
            <p className="text-gray-600 text-lg">
              Haz clic en cada perfil para conocer más sobre nuestros profesionales.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member) => (
              <Link
                key={member.id}
                href={`/equipo/${member.id}`}
                className="group"
              >
                <div className="bg-gray-50 rounded-2xl overflow-hidden hover:shadow-xl transition-all duration-300">
                  <div className="aspect-[3/4] relative bg-gray-200">
                    {member.image ? (
                      <Image
                        src={member.image}
                        alt={member.name}
                        fill
                        className="object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
                      />
                    ) : (
                      <div className="absolute inset-0 flex flex-col items-center justify-center bg-gray-300">
                        <User className="w-20 h-20 text-gray-400" />
                        <span className="text-gray-500 text-sm mt-2">Foto próximamente</span>
                      </div>
                    )}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-semibold text-gray-900 mb-1">
                      {member.name}
                    </h3>
                    <p className="text-red-600 font-medium mb-3">
                      {member.role}
                    </p>
                    <p className="text-gray-600 text-sm line-clamp-3 mb-4">
                      {member.excerpt}
                    </p>
                    <span className="inline-flex items-center gap-2 text-gray-900 font-medium group-hover:text-red-600 transition-colors">
                      Ver perfil completo
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gray-800">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            ¿Quieres conocernos mejor?
          </h2>
          <p className="text-gray-300 text-lg mb-8 max-w-2xl mx-auto">
            Ven a visitarnos a nuestra oficina o contáctanos para agendar una cita. 
            Estaremos encantados de atenderte.
          </p>
          <Link
            href="/contacto"
            className="inline-flex items-center justify-center px-8 py-4 bg-red-600 hover:bg-red-700 text-white font-semibold rounded-lg transition-all duration-300 hover:scale-105"
          >
            Contactar con nosotros
          </Link>
        </div>
      </section>

      <Footer />
      <WhatsAppButton />
    </main>
  )
}
