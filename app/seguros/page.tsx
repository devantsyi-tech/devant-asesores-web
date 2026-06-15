import Image from "next/image"
import Link from "next/link"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { WhatsAppButton } from "@/components/whatsapp-button"
import { insuranceCategories } from "@/lib/insurance-data"
import { ArrowRight } from "lucide-react"

export const metadata = {
  title: "Seguros | Devant Asesores",
  description: "Descubre todos nuestros seguros: automóviles, vida, hogar, salud, negocios y más. Soluciones personalizadas para cada necesidad."
}

export default function SegurosPage() {
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
              Nuestros seguros
            </span>
            <h1 className="text-4xl md:text-5xl font-bold text-white mt-3 mb-6">
              Soluciones de protección para cada momento de tu vida
            </h1>
            <p className="text-gray-300 text-lg leading-relaxed">
              En Devant Asesores no vendemos seguros estándar. Analizamos tu situación 
              y diseñamos la protección que realmente necesitas. Explora nuestras 
              categorías y descubre cómo podemos ayudarte.
            </p>
          </div>
        </div>
      </section>

      {/* Insurance Categories */}
      <section className="py-20 bg-gray-100">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {insuranceCategories.map((category) => (
              <Link
                key={category.id}
                href={category.id === "otros" ? "/contacto" : `/seguros/${category.id}`}
                className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300"
              >
                <div className="aspect-[4/3] relative">
                  <Image
                    src={category.image}
                    alt={category.name}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <div className="absolute bottom-4 left-4 right-4">
                    <div className="w-12 h-12 bg-red-600 rounded-lg flex items-center justify-center mb-3">
                      <category.icon className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-xl font-semibold text-white">
                      {category.name}
                    </h3>
                  </div>
                </div>
                <div className="p-6">
                  <p className="text-gray-600 mb-4">
                    {category.excerpt}
                  </p>
                  <span className="inline-flex items-center gap-2 text-red-600 font-medium group-hover:gap-3 transition-all">
                    {category.id === "otros" ? "Contactar" : "Ver detalles"} <ArrowRight className="w-4 h-4" />
                  </span>
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
