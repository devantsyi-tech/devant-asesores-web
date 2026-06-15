import Image from "next/image"
import Link from "next/link"
import { notFound } from "next/navigation"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { WhatsAppButton } from "@/components/whatsapp-button"
import { insuranceCategories } from "@/lib/insurance-data"
import { ArrowLeft, Check, ArrowRight } from "lucide-react"

interface PageProps {
  params: Promise<{ id: string }>
}

export async function generateStaticParams() {
  return insuranceCategories.map((category) => ({
    id: category.id,
  }))
}

export async function generateMetadata({ params }: PageProps) {
  const { id } = await params
  const category = insuranceCategories.find((c) => c.id === id)
  
  if (!category) {
    return { title: "Seguro no encontrado" }
  }
  
  return {
    title: `${category.name} | Devant Asesores`,
    description: category.description,
  }
}

export default async function InsuranceDetailPage({ params }: PageProps) {
  const { id } = await params
  const category = insuranceCategories.find((c) => c.id === id)
  
  if (!category) {
    notFound()
  }

  const otherCategories = insuranceCategories.filter((c) => c.id !== id).slice(0, 3)

  return (
    <main className="min-h-screen">
      <Header />
      
      {/* Hero */}
      <section className="pt-32 pb-20 bg-gray-900 relative overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src={category.image}
            alt={category.name}
            fill
            className="object-cover opacity-20"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-gray-900 via-gray-900/95 to-gray-900/80" />
        <div className="container mx-auto px-4 relative z-10">
          <Link
            href="/seguros"
            className="inline-flex items-center gap-2 text-gray-400 hover:text-white transition-colors mb-8"
          >
            <ArrowLeft className="w-4 h-4" />
            Volver a seguros
          </Link>
          <div className="max-w-3xl">
            <div className="w-16 h-16 bg-red-600 rounded-xl flex items-center justify-center mb-6">
              <category.icon className="w-8 h-8 text-white" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              {category.name}
            </h1>
            <p className="text-xl text-red-400 font-medium mb-6">
              {category.description}
            </p>
            <p className="text-gray-300 text-lg leading-relaxed">
              {category.content}
            </p>
          </div>
        </div>
      </section>

      {/* Subcategories Grid */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Nuestras Coberturas
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Descubre todas las modalidades y protecciones incluidas en este seguro
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {category.subcategories.map((subcategory, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 group"
              >
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={subcategory.image}
                    alt={subcategory.name}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <h3 className="absolute bottom-4 left-4 right-4 text-xl font-bold text-white">
                    {subcategory.name}
                  </h3>
                </div>
                <div className="p-6">
                  <p className="text-gray-600 text-sm mb-4">
                    {subcategory.description}
                  </p>
                  <ul className="space-y-2">
                    {subcategory.coverages.slice(0, 3).map((coverage, coverageIndex) => (
                      <li key={coverageIndex} className="flex items-start gap-2 text-sm">
                        <Check className="w-4 h-4 text-red-600 flex-shrink-0 mt-0.5" />
                        <span className="text-gray-700">{coverage.name}</span>
                      </li>
                    ))}
                    {subcategory.coverages.length > 3 && (
                      <li className="text-sm text-gray-500 pl-6">
                        +{subcategory.coverages.length - 3} coberturas mas
                      </li>
                    )}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Detailed Coverages */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="space-y-20">
            {category.subcategories.map((subcategory, index) => (
              <div 
                key={index}
                className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${
                  index % 2 === 1 ? '' : ''
                }`}
              >
                <div className={index % 2 === 1 ? 'lg:order-2' : ''}>
                  <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-lg">
                    <Image
                      src={subcategory.image}
                      alt={subcategory.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>
                <div className={index % 2 === 1 ? 'lg:order-1' : ''}>
                  <span className="inline-block px-3 py-1 bg-red-100 text-red-700 text-sm font-medium rounded-full mb-4">
                    {category.name}
                  </span>
                  <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                    {subcategory.name}
                  </h2>
                  <p className="text-gray-600 text-lg mb-8">
                    {subcategory.description}
                  </p>
                  <div className="space-y-4">
                    {subcategory.coverages.map((coverage, coverageIndex) => (
                      <div
                        key={coverageIndex}
                        className="bg-gray-50 rounded-xl p-5 hover:bg-gray-100 transition-colors"
                      >
                        <div className="flex items-start gap-4">
                          <div className="w-10 h-10 bg-red-600 rounded-lg flex items-center justify-center flex-shrink-0">
                            <Check className="w-5 h-5 text-white" />
                          </div>
                          <div>
                            <h3 className="font-semibold text-gray-900 mb-1">
                              {coverage.name}
                            </h3>
                            <p className="text-gray-600 text-sm">
                              {coverage.detail}
                            </p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              ¿Te interesa este seguro?
            </h2>
            <p className="text-gray-300 text-lg mb-8">
              Analizamos tu situacion de forma gratuita y te ofrecemos 
              las mejores opciones del mercado adaptadas a tus necesidades.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contacto"
                className="inline-flex items-center justify-center px-8 py-4 bg-red-600 hover:bg-red-700 text-white font-semibold rounded-lg transition-all"
              >
                Solicitar informacion
              </Link>
              <a
                href="https://wa.me/34600000000"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-8 py-4 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-gray-900 transition-all"
              >
                WhatsApp
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Other Insurances */}
      <section className="py-20 bg-gray-100">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-8">
            Otros seguros que pueden interesarte
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {otherCategories.map((otherCategory) => (
              <Link
                key={otherCategory.id}
                href={`/seguros/${otherCategory.id}`}
                className="group bg-white rounded-xl overflow-hidden hover:shadow-lg transition-all"
              >
                <div className="relative h-40 overflow-hidden">
                  <Image
                    src={otherCategory.image}
                    alt={otherCategory.name}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-black/40 group-hover:bg-black/30 transition-colors" />
                  <div className="absolute top-4 left-4 w-12 h-12 bg-white rounded-lg flex items-center justify-center">
                    <otherCategory.icon className="w-6 h-6 text-red-600" />
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="font-semibold text-gray-900 mb-2 group-hover:text-red-600 transition-colors">
                    {otherCategory.name}
                  </h3>
                  <p className="text-gray-600 text-sm mb-4">
                    {otherCategory.excerpt}
                  </p>
                  <span className="inline-flex items-center gap-2 text-red-600 font-medium text-sm group-hover:gap-3 transition-all">
                    Ver mas <ArrowRight className="w-4 h-4" />
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
