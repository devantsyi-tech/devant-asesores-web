import Link from "next/link"

export function CTASection() {
  return (
    <section className="py-20 bg-gray-800 relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-96 h-96 bg-red-600 rounded-full -translate-x-1/2 -translate-y-1/2" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-red-600 rounded-full translate-x-1/2 translate-y-1/2" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            ¿Tienes dudas sobre qué seguro necesitas?
          </h2>
          <p className="text-gray-300 text-lg mb-8 leading-relaxed">
            Analizamos tu situación sin compromiso. Te asesoramos sobre las mejores opciones del mercado adaptadas a tus necesidades reales.
          </p>
          <div className="flex justify-center">
            <Link
              href="/contacto"
              className="inline-flex items-center justify-center px-8 py-4 bg-red-600 hover:bg-red-700 text-white font-semibold rounded-lg transition-all duration-300 hover:scale-105"
            >
              Solicitar asesoramiento gratuito
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
