"use client"

import { Star } from "lucide-react"

const reviews = [
  {
    name: "María García",
    rating: 5,
    comment: "Excelente atención personalizada. Me ayudaron a encontrar el seguro perfecto para mi familia. Muy profesionales y cercanos.",
    date: "Hace 2 semanas"
  },
  {
    name: "Carlos Rodríguez",
    rating: 5,
    comment: "Llevamos años con ellos y siempre nos han asesorado de manera impecable. Cuando tuvimos un siniestro, estuvieron a nuestro lado en todo momento.",
    date: "Hace 1 mes"
  },
  {
    name: "Ana Martínez",
    rating: 5,
    comment: "Gracias al equipo de Devant Asesores por su paciencia y profesionalidad. Encontraron una póliza que se ajustaba perfectamente a mi presupuesto.",
    date: "Hace 1 mes"
  },
  {
    name: "Roberto López",
    rating: 5,
    comment: "Como empresario, valoro mucho el asesoramiento que me dan. Siempre están al día con las novedades y me proponen mejoras constantemente.",
    date: "Hace 2 meses"
  }
]

export function ReviewsSection() {
  return (
    <section className="py-20 bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-red-500 font-semibold text-sm uppercase tracking-wider">
            Testimonios
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-white mt-3 mb-4">
            Lo que dicen nuestros clientes
          </h2>
          <div className="flex items-center justify-center gap-2 mb-4">
            <div className="flex">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-6 h-6 fill-yellow-400 text-yellow-400" />
              ))}
            </div>
            <span className="text-white font-semibold">5.0</span>
            <span className="text-gray-400">en Google</span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {reviews.map((review, index) => (
            <div
              key={index}
              className="bg-gray-800 rounded-xl p-6 hover:bg-gray-750 transition-colors"
            >
              <div className="flex mb-4">
                {[...Array(review.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <p className="text-gray-300 mb-4 leading-relaxed text-sm">
                {'"'}{review.comment}{'"'}
              </p>
              <div className="flex items-center justify-between">
                <span className="font-semibold text-white">{review.name}</span>
                <span className="text-gray-500 text-sm">{review.date}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
