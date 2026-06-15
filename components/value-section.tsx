import { Shield, Users, Heart, Clock } from "lucide-react"

const values = [
  {
    icon: Users,
    title: "Cercanía",
    description: "Nos tomamos el tiempo necesario para conocerte y entender tus necesidades reales."
  },
  {
    icon: Shield,
    title: "Confianza",
    description: "Más de 20 años de experiencia protegiendo a familias, autónomos y empresas."
  },
  {
    icon: Heart,
    title: "Compromiso",
    description: "No vendemos seguros estándar, diseñamos soluciones personalizadas para ti."
  },
  {
    icon: Clock,
    title: "Acompañamiento",
    description: "Estamos contigo en cada paso, especialmente cuando más nos necesitas."
  }
]

export function ValueSection() {
  return (
    <section className="py-20 bg-gray-100">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-red-600 font-semibold text-sm uppercase tracking-wider">
            Por qué elegirnos
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-3 mb-4">
            Porque tú eres lo que realmente importa
          </h2>
          <p className="text-gray-600 text-lg leading-relaxed">
            En Devant Asesores no somos una agencia más de gestión de patrimonio. 
            Creemos que cada persona, cada familia y cada empresa merece un asesoramiento a medida, 
            con profesionales que realmente escuchen y entiendan sus necesidades.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {values.map((value, index) => (
            <div
              key={index}
              className="bg-white rounded-xl p-8 shadow-sm hover:shadow-lg transition-all duration-300 group"
            >
              <div className="w-14 h-14 bg-red-50 rounded-lg flex items-center justify-center mb-6 group-hover:bg-red-600 transition-colors">
                <value.icon className="w-7 h-7 text-red-600 group-hover:text-white transition-colors" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                {value.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {value.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
