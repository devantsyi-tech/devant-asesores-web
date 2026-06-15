import Image from "next/image"
import Link from "next/link"
import { notFound } from "next/navigation"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { WhatsAppButton } from "@/components/whatsapp-button"
import { teamMembers } from "@/lib/team-data"
import { ArrowLeft, User } from "lucide-react"

interface PageProps {
  params: Promise<{ id: string }>
}

export async function generateStaticParams() {
  return teamMembers.map((member) => ({
    id: member.id,
  }))
}

export async function generateMetadata({ params }: PageProps) {
  const { id } = await params
  const member = teamMembers.find((m) => m.id === id)
  
  if (!member) {
    return { title: "Miembro no encontrado" }
  }
  
  return {
    title: `${member.name} - ${member.role} | Devant Asesores`,
    description: member.excerpt,
  }
}

export default async function TeamMemberPage({ params }: PageProps) {
  const { id } = await params
  const member = teamMembers.find((m) => m.id === id)
  
  if (!member) {
    notFound()
  }

  return (
    <main className="min-h-screen">
      <Header />
      
      {/* Hero */}
      <section className="pt-32 pb-12 bg-gray-900">
        <div className="container mx-auto px-4">
          <Link
            href="/equipo"
            className="inline-flex items-center gap-2 text-gray-400 hover:text-white transition-colors mb-8"
          >
            <ArrowLeft className="w-4 h-4" />
            Volver al equipo
          </Link>
        </div>
      </section>

      {/* Profile */}
      <section className="bg-gray-100 pb-20">
        <div className="container mx-auto px-4">
          <div className="bg-white rounded-2xl shadow-xl overflow-hidden -mt-8">
            <div className="grid grid-cols-1 lg:grid-cols-3">
              {/* Image */}
              <div className="lg:col-span-1">
                <div className="aspect-[3/4] relative bg-gray-200">
                  {member.image ? (
                    <Image
                      src={member.image}
                      alt={member.name}
                      fill
                      className="object-cover"
                      priority
                    />
                  ) : (
                    <div className="absolute inset-0 flex flex-col items-center justify-center bg-gray-300">
                      <User className="w-24 h-24 text-gray-400" />
                      <span className="text-gray-500 mt-3">Foto próximamente</span>
                    </div>
                  )}
                </div>
              </div>

              {/* Content */}
              <div className="lg:col-span-2 p-8 lg:p-12">
                <span className="inline-block px-4 py-1.5 bg-red-100 text-red-600 text-sm font-medium rounded-full mb-4">
                  {member.role}
                </span>
                <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                  {member.name}
                </h1>
                
                <div className="prose prose-lg max-w-none">
                  {member.fullBio.split('\n\n').map((paragraph, index) => (
                    <p key={index} className="text-gray-600 leading-relaxed mb-4">
                      {paragraph}
                    </p>
                  ))}
                </div>

                
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Other Team Members */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold text-gray-900 mb-8">
            Otros miembros del equipo
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {teamMembers
              .filter((m) => m.id !== member.id)
              .map((otherMember) => (
                <Link
                  key={otherMember.id}
                  href={`/equipo/${otherMember.id}`}
                  className="group"
                >
                  <div className="bg-gray-50 rounded-xl overflow-hidden hover:shadow-lg transition-all duration-300">
                    <div className="aspect-square relative bg-gray-200">
                      {otherMember.image ? (
                        <Image
                          src={otherMember.image}
                          alt={otherMember.name}
                          fill
                          className="object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
                        />
                      ) : (
                        <div className="absolute inset-0 flex items-center justify-center bg-gray-300">
                          <User className="w-12 h-12 text-gray-400" />
                        </div>
                      )}
                    </div>
                    <div className="p-4">
                      <h3 className="font-semibold text-gray-900 group-hover:text-red-600 transition-colors">
                        {otherMember.name}
                      </h3>
                      <p className="text-gray-500 text-sm">{otherMember.role}</p>
                    </div>
                  </div>
                </Link>
              ))}
          </div>
        </div>
      </section>

      <Footer />
      <WhatsAppButton />
    </main>
  )
}
