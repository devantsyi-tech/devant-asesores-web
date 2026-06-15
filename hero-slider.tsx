"use client"

import Link from "next/link"

export function HeroSlider() {
  return (
    <section className="relative h-screen min-h-[600px] overflow-hidden">
      {/* Video Background */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
      >
        <source src="/videos/hero.mp4" type="video/mp4" />
      </video>

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/30" />

      {/* Content */}
      <div className="relative h-full container mx-auto px-4 flex items-center pt-28">
        <div className="max-w-2xl">
          <span className="inline-block px-4 py-1.5 bg-red-600/90 text-white text-sm font-medium rounded-full mb-6">
            Siempre un paso por delante
          </span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
            <span className="text-balance">Porque tú eres lo que realmente importa</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-200 mb-8 leading-relaxed">
            En Devant Asesores no somos una agencia más de gestión de patrimonio. Creemos que cada persona, cada familia y cada empresa merece un asesoramiento a medida, con profesionales que realmente escuchen y entiendan sus necesidades.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              href="/contacto"
              className="inline-flex items-center justify-center px-8 py-4 bg-red-600 hover:bg-red-700 text-white font-semibold rounded-lg transition-all duration-300 hover:scale-105"
            >
              Solicitar asesoramiento
            </Link>
            <Link
              href="/seguros"
              className="inline-flex items-center justify-center px-8 py-4 bg-white/10 hover:bg-white/20 text-white font-semibold rounded-lg backdrop-blur-sm border border-white/20 transition-all duration-300"
            >
              Nuestros seguros
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
