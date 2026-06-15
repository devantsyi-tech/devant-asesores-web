import { Car, Heart, Bike, Flower2, Building2, PawPrint, PiggyBank, Plane, Home, Users, Stethoscope } from "lucide-react"

export interface Coverage {
  name: string
  detail: string
}

export interface Subcategory {
  name: string
  description: string
  image: string
  coverages: Coverage[]
}

export interface InsuranceCategory {
  id: string
  name: string
  icon: React.ComponentType<{ className?: string }>
  description: string
  image: string
  excerpt: string
  content: string
  subcategories: Subcategory[]
}

export const insuranceCategories: InsuranceCategory[] = [
  {
    id: "automoviles",
    name: "Automóviles y Movilidad",
    icon: Car,
    description: "Protege tu libertad de movimiento en cada trayecto",
    image: "/images/coche.jpg",
    excerpt: "Coche, moto, camion, flotas y embarcaciones. Soluciones personalizadas para cada vehiculo.",
    content: `En Devant Asesores sabemos que tu vehiculo es mucho mas que un medio de transporte: es tu herramienta de trabajo, tu via de escape en vacaciones o tu companero en el dia a dia. Te ofrecemos soluciones de aseguramiento personalizadas para que, sea cual sea el camino que elijas, lo hagas con la maxima tranquilidad.`,
    subcategories: [
      {
        name: "Seguros de Coche y Furgoneta",
        description: "Ofrecemos desde la proteccion basica obligatoria hasta coberturas a Todo Riesgo sin franquicia, adaptandonos a la antiguedad de tu vehiculo y a tu perfil como conductor.",
        image: "https://images.unsplash.com/photo-1494976388531-d1058494cdd8?w=600&h=400&fit=crop",
        coverages: [
          { name: "Asistencia en viaje", detail: "Ayuda en carretera desde el kilometro 0, las 24 horas." },
          { name: "Danos Propios", detail: "Cobertura total para tu vehiculo en caso de accidente." },
          { name: "Rotura de Lunas", detail: "Reparacion o sustitucion de cristales de forma agil." },
          { name: "Robo e Incendio", detail: "Proteccion ante sustraccion del vehiculo o danos por fuego." },
          { name: "Gestoria y Multas", detail: "Defensa juridica y avisos de sanciones de trafico." },
        ]
      },
      {
        name: "Especial Camper y Autocaravanas",
        description: "Si te apasiona la libertad de la carretera, nuestras polizas para Campers y Autocaravanas cuidan tanto de tu vehiculo como de tu equipaje y accesorios.",
        image: "https://images.unsplash.com/photo-1523987355523-c7b5b0dd90a7?w=600&h=400&fit=crop",
        coverages: [
          { name: "Responsabilidad Civil del Campista", detail: "Proteccion incluso cuando estas estacionado o acampado." },
          { name: "Equipaje y Objetos", detail: "Cobertura para tus bienes personales dentro de la furgoneta." },
          { name: "Asistencia 24h Especializada", detail: "Rescate y remolcaje adaptado a vehiculos de gran volumen." },
        ]
      },
      {
        name: "Seguros de Moto y Ciclomotor",
        description: "Disfruta de las dos ruedas con la proteccion que mereces.",
        image: "https://images.unsplash.com/photo-1558981403-c5f9899a28bc?w=600&h=400&fit=crop",
        coverages: [
          { name: "Equipacion cubierta", detail: "Proteccion para tu casco y vestuario en caso de siniestro." },
          { name: "Asistencia desde Km 0", detail: "No te quedes tirado en ninguna ruta." },
          { name: "Motos Electricas", detail: "Cobertura especifica para el robo del cable de carga y danos en la bateria." },
        ]
      },
      {
        name: "Embarcaciones de Recreo",
        description: "Navega con la seguridad de tenerlo todo bajo control.",
        image: "https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=600&h=400&fit=crop",
        coverages: [
          { name: "Remolque Maritimo", detail: "Reembolso de gastos en caso de averia en alta mar." },
          { name: "RC por Contaminacion", detail: "Proteccion ante posibles danos accidentales al medio marino." },
          { name: "Accidentes Ocupantes", detail: "Maxima seguridad para todos los que van a bordo." },
        ]
      }
    ]
  },
  {
    id: "vida",
    name: "Seguros de Vida",
    icon: Heart,
    description: "La tranquilidad de asegurar el futuro de los tuyos",
    image: "https://images.unsplash.com/photo-1491438590914-bc09fcaaf77a?w=800&h=600&fit=crop",
    excerpt: "Un seguro de vida es un acto de responsabilidad y carino hacia quienes mas te importan.",
    content: `Un seguro de vida no es solo un contrato; es un acto de responsabilidad y carino hacia quienes mas te importan. En Devant Asesores te ayudamos a disenar un colchon economico que garantice la estabilidad financiera de tu familia ante cualquier imprevisto, adaptando el capital y las coberturas a tu momento vital.`,
    subcategories: [
      {
        name: "Modalidades de Proteccion",
        description: "Diferentes opciones adaptadas a cada etapa de tu vida.",
        image: "https://images.unsplash.com/photo-1511895426328-dc8714191300?w=600&h=400&fit=crop",
        coverages: [
          { name: "Vida Temporal", detail: "El respaldo estandar frente a fallecimiento e invalidez con adelanto por enfermedad grave." },
          { name: "Vida Amortizacion", detail: "Disenado especificamente para cancelar tu hipoteca o prestamos en caso de falta de ingresos." },
          { name: "Vida Senior (+60)", detail: "Proteccion flexible para mayores de 60 anos, enfocada en la tranquilidad sucesoria y vital." },
        ]
      },
      {
        name: "Coberturas y Ventajas",
        description: "Servicios extra incluidos en nuestras polizas.",
        image: "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=600&h=400&fit=crop",
        coverages: [
          { name: "Fallecimiento", detail: "Capital garantizado para los beneficiarios designados." },
          { name: "Invalidez Permanente", detail: "Proteccion economica directa para el asegurado en caso de incapacidad." },
          { name: "Enfermedades Graves", detail: "Posibilidad de anticipar el capital para cubrir gastos medicos." },
          { name: "Servicios Extra", detail: "Testamento online, segunda opinion medica internacional y rehabilitacion cardiaca." },
        ]
      }
    ]
  },
  {
    id: "patinete",
    name: "Movilidad Personal (VMP)",
    icon: Bike,
    description: "Circula con tu patinete electrico cumpliendo la normativa",
    image: "https://images.unsplash.com/photo-1571068316344-75bc76f77890?w=800&h=600&fit=crop",
    excerpt: "Seguro para patinetes electricos. Cumple la normativa y viaja protegido.",
    content: `La forma de movernos por la ciudad ha cambiado, y la seguridad tambien debe hacerlo. Con nuestro seguro para Patinetes Electricos, te aseguras de cumplir con la normativa vigente y de estar protegido ante cualquier incidente mientras te desplazas de forma sostenible.`,
    subcategories: [
      {
        name: "Modalidades",
        description: "Cobertura para diferentes tipos de vehiculos de movilidad personal.",
        image: "https://images.unsplash.com/photo-1604537466573-5e94508fd243?w=600&h=400&fit=crop",
        coverages: [
          { name: "VMP (Vehiculos Personales Ligeros)", detail: "Patinetes estandar de uso urbano." },
          { name: "Vehiculos a Motor", detail: "Patinetes de mayor potencia que requieren especificaciones tecnicas concretas." },
        ]
      },
      {
        name: "Coberturas destacadas",
        description: "Proteccion completa para tu movilidad diaria.",
        image: "https://images.unsplash.com/photo-1622185135505-2d795003c5fa?w=600&h=400&fit=crop",
        coverages: [
          { name: "Responsabilidad Civil", detail: "Cubre los danos personales y materiales que puedas causar a terceros." },
          { name: "Defensa Juridica", detail: "Asesoramiento y reclamacion de danos en caso de conflicto tras un accidente." },
          { name: "Proteccion Integral", detail: "Capitales adaptados a la nueva Ley para circular con total legalidad." },
          { name: "Orientacion Medica 24h", detail: "Consultas telefonicas o videollamadas con profesionales de la salud." },
        ]
      }
    ]
  },
  {
    id: "decesos",
    name: "Seguro de Decesos",
    icon: Flower2,
    description: "El apoyo que tu familia necesita en los momentos mas delicados",
    image: "https://images.unsplash.com/photo-1490750967868-88aa4486c946?w=800&h=600&fit=crop",
    excerpt: "Servicio de acompanamiento integral para que tu familia no tenga que preocuparse.",
    content: `El seguro de decesos es, ante todo, un servicio de acompanamiento. En Devant Asesores nos encargamos de que, ante la perdida de un ser querido, la familia no tenga que preocuparse por gestiones burocraticas o costes imprevistos, permitiendoles centrarse en lo que realmente importa.`,
    subcategories: [
      {
        name: "Modalidades de Proteccion",
        description: "Opciones adaptadas a cada situacion familiar.",
        image: "https://images.unsplash.com/photo-1499892477393-f675706cbe6e?w=600&h=400&fit=crop",
        coverages: [
          { name: "Decesos Familiar", detail: "Proteccion integral para todos los miembros del hogar en una sola poliza." },
          { name: "Decesos Senior", detail: "Opcion de pago unico para mayores de 70 anos que desean dejarlo todo previsto." },
          { name: "Decesos Repatriacion", detail: "Especifico para extranjeros residentes que desean ser trasladados a su pais de origen." },
        ]
      },
      {
        name: "Coberturas y Servicios",
        description: "Gestion integral del servicio funerario.",
        image: "https://images.unsplash.com/photo-1518495973542-4542c06a5843?w=600&h=400&fit=crop",
        coverages: [
          { name: "Gestion Integral", detail: "Arca, tanatorio, flores y ceremonia segun tus deseos." },
          { name: "Traslado Nacional e Internacional", detail: "Traslado del fallecido desde cualquier lugar del mundo." },
          { name: "Gestoria por Fallecimiento", detail: "Tramitacion de pensiones de viudedad, orfandad y sucesiones." },
          { name: "Legado Digital", detail: "Borrado de presencia en redes sociales y cuentas profesionales." },
        ]
      }
    ]
  },
  {
    id: "negocios",
    name: "Seguros para Negocios",
    icon: Building2,
    description: "Soluciones estrategicas para el motor de tu economia",
    image: "https://images.unsplash.com/photo-1556761175-b413da4baf72?w=800&h=600&fit=crop",
    excerpt: "PYMES, comercios, oficinas y responsabilidad civil. Proteccion modular para tu empresa.",
    content: `En Devant Asesores entendemos que cada actividad empresarial tiene riesgos distintos. Por eso, no creemos en soluciones genericas. Analizamos tu sector, el tamano de tu empresa y tus responsabilidades para ofrecerte una proteccion modular que blinde tu patrimonio y garantice la continuidad de tu proyecto.`,
    subcategories: [
      {
        name: "Seguridad para PYMES",
        description: "Proteccion integral para pequenas y medianas empresas.",
        image: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=600&h=400&fit=crop",
        coverages: [
          { name: "Multirriesgo Industrial", detail: "Cobertura total de continente y contenido (maquinaria, existencias y mobiliario)." },
          { name: "Accidentes de Convenio", detail: "Proteccion obligatoria para tus empleados segun la normativa." },
          { name: "Perdida de Beneficios", detail: "Indemnizacion diaria en caso de paralizacion de la actividad." },
          { name: "Ciberriesgos", detail: "Proteccion avanzada ante ataques informaticos y robo de datos." },
        ]
      },
      {
        name: "Responsabilidad Civil",
        description: "Tu patrimonio a salvo ante posibles reclamaciones.",
        image: "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=600&h=400&fit=crop",
        coverages: [
          { name: "RC Profesional", detail: "Proteccion ante errores involuntarios en el ejercicio de tu profesion." },
          { name: "RC Explotacion y Patronal", detail: "Cobertura ante danos a terceros o accidentes de trabajadores." },
          { name: "Proteccion Juridica Total", detail: "Defensa penal, reclamacion de danos y cobertura de gastos judiciales." },
          { name: "RC Directivos (D&O)", detail: "Proteccion especifica para administradores frente a decisiones de gestion." },
        ]
      },
      {
        name: "Seguro de Comercios",
        description: "Tu local protegido frente a cualquier imprevisto.",
        image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=600&h=400&fit=crop",
        coverages: [
          { name: "Robo y Expoliacion", detail: "Cobertura del contenido, mercancias y transporte de fondos." },
          { name: "Danos por Agua y Electricos", detail: "Reparaciones urgentes para no perder ni un dia." },
          { name: "Cristales y Rotulos", detail: "Sustitucion rapida de escaparates y rotulos luminosos." },
          { name: "Asistencia 24h", detail: "Envio prioritario de profesionales especializados." },
        ]
      },
      {
        name: "Seguro de Oficinas",
        description: "Solucion flexible para despachos profesionales.",
        image: "https://images.unsplash.com/photo-1497366811353-6870744d04b2?w=600&h=400&fit=crop",
        coverages: [
          { name: "Equipos Electronicos", detail: "Cobertura para ordenadores, servidores y sistemas de comunicacion." },
          { name: "Danos Esteticos", detail: "Tu oficina recupera su aspecto original tras cualquier siniestro." },
          { name: "RC de la Oficina", detail: "Proteccion ante incidentes con clientes o visitas." },
          { name: "Restauracion de Documentos", detail: "Cobertura para recuperacion de archivos importantes." },
        ]
      }
    ]
  },
  {
    id: "mascotas",
    name: "Seguro de Mascotas",
    icon: PawPrint,
    description: "Cuidamos de quien siempre te acompana",
    image: "https://images.unsplash.com/photo-1587300003388-59208cc962cb?w=800&h=600&fit=crop",
    excerpt: "Proteccion veterinaria y responsabilidad civil para tu companero de vida.",
    content: `Para nosotros, tu perro o tu gato es un miembro mas de la familia. Con nuestro seguro de Mascotas, te ayudamos a afrontar los gastos veterinarios y te protegemos ante cualquier imprevisto o dano que tu fiel companero pueda causar a terceros.`,
    subcategories: [
      {
        name: "Coberturas incluidas",
        description: "Proteccion completa para tu mascota.",
        image: "https://images.unsplash.com/photo-1601758228041-f3b2795255f1?w=600&h=400&fit=crop",
        coverages: [
          { name: "Asistencia Veterinaria", detail: "Amplio cuadro medico con consulta gratuita anual y descuentos." },
          { name: "Responsabilidad Civil", detail: "Cubre reclamaciones por danos que tu mascota pueda causar." },
          { name: "Reembolso de Gastos", detail: "Devolucion de facturas veterinarias por enfermedad o accidente." },
          { name: "Extravio y Robo", detail: "Ayuda economica para localizacion en caso de perdida." },
          { name: "Estancia en Residencia", detail: "Cobertura de guarderia si tu sufres un accidente o enfermedad." },
        ]
      },
      {
        name: "Ventajas destacadas",
        description: "Servicios adicionales para tu tranquilidad.",
        image: "https://images.unsplash.com/photo-1548199973-03cce0bbc87b?w=600&h=400&fit=crop",
        coverages: [
          { name: "Sin distincion de razas", detail: "Protegemos a todo tipo de perros y gatos, incluyendo PPP." },
          { name: "Asistencia en Viaje", detail: "Tu mascota tambien viaja segura con cobertura nacional e internacional." },
          { name: "Servicio de Incineracion", detail: "Acompanamiento y gestion al final de la vida de tu companero." },
          { name: "Asesoramiento 24h", detail: "Consultas medicas y juridicas las 24 horas." },
        ]
      }
    ]
  },
  {
    id: "ahorro",
    name: "Seguros de Vida Ahorro",
    icon: PiggyBank,
    description: "Construye el capital necesario para alcanzar tus metas",
    image: "https://images.unsplash.com/photo-1579621970563-ebec7560ff3e?w=800&h=600&fit=crop",
    excerpt: "Planifica el futuro con seguros de ahorro personalizados.",
    content: `Los seguros de ahorro son la opcion ideal para planificar el futuro, permitiendote decidir en todo momento como quieres operar con tu dinero. En Devant Asesores te ayudamos a elegir la modalidad que mejor se adapte a tu perfil o al de tu empresa.`,
    subcategories: [
      {
        name: "Opciones de Seguro de Ahorro",
        description: "Modalidades adaptadas a cada necesidad.",
        image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=600&h=400&fit=crop",
        coverages: [
          { name: "Ahorro Colectivo", detail: "Disenado para empresas que desean construir un capital de jubilacion extra." },
          { name: "PPSE", detail: "Plan de Prevision Social Empresarial con rentabilidad garantizada." },
        ]
      },
      {
        name: "Por que confiarnos tu ahorro",
        description: "Ventajas de trabajar con nosotros.",
        image: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=600&h=400&fit=crop",
        coverages: [
          { name: "Atencion Personalizada", detail: "Respuesta individualizada adaptada a tu perfil de ahorrador." },
          { name: "Informacion Constante", detail: "Informacion periodica de profesionales especialistas." },
          { name: "Confianza y Solvencia", detail: "Soluciones solidas avaladas por miles de personas." },
        ]
      }
    ]
  },
  {
    id: "viajes",
    name: "Seguro de Viaje",
    icon: Plane,
    description: "Disfruta de cada destino con la proteccion mas completa",
    image: "https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=800&h=600&fit=crop",
    excerpt: "Viaja tranquilo con cobertura nacional e internacional.",
    content: `Ya sea por ocio, estudios o trabajo, nuestro seguro de viaje esta disenado para que te desplaces con total tranquilidad. Te ofrecemos una proteccion personalizada que se adapta a la duracion, el destino y las caracteristicas especificas de tu desplazamiento.`,
    subcategories: [
      {
        name: "Ventajas destacadas",
        description: "Beneficios exclusivos de nuestros seguros de viaje.",
        image: "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=600&h=400&fit=crop",
        coverages: [
          { name: "Seguro a Medida", detail: "Ajustamos la proteccion segun el tipo de viaje: negocios, vacaciones, estudios." },
          { name: "Cobertura Internacional", detail: "Tu eliges el ambito: Europa o el resto del mundo." },
          { name: "Flexibilidad Temporal", detail: "Viajes puntuales o modalidad multiviaje anual." },
          { name: "Cancelacion de Viaje", detail: "Reembolso de gastos si debes anular tu salida." },
        ]
      },
      {
        name: "Coberturas principales",
        description: "Todo lo que necesitas para viajar protegido.",
        image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&h=400&fit=crop",
        coverages: [
          { name: "Asistencia Personal", detail: "Ayuda ante cualquier imprevisto de salud o logistica." },
          { name: "Proteccion de Equipaje", detail: "Cobertura ante perdida, robo o danos de tus pertenencias." },
          { name: "Modalidad Cruceros", detail: "Coberturas especificas para la vida a bordo y escalas." },
          { name: "Deportes y Preexistencias", detail: "Coberturas complementarias para actividades deportivas." },
        ]
      }
    ]
  },
  {
    id: "hogar",
    name: "Seguros de Hogar",
    icon: Home,
    description: "Tu refugio, protegido con soluciones a medida",
    image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&h=600&fit=crop",
    excerpt: "Casas, pisos, segunda residencia y proteccion ante impago de alquiler.",
    content: `Tu casa es mucho mas que un inmueble; es donde proteges lo que mas quieres. En Devant Asesores te ofrecemos un seguro multirriesgo que no se limita a las paredes: te protege a ti, a tu familia e incluso a tus mascotas. Disfruta de una asistencia tecnica de urgencia 24/7.`,
    subcategories: [
      {
        name: "Casas y Chalets",
        description: "Proteccion completa para tu residencia principal.",
        image: "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=600&h=400&fit=crop",
        coverages: [
          { name: "Asistencia 24h", detail: "Cerrajeria, electricidad de emergencia y personal de seguridad." },
          { name: "Servicios Premium", detail: "Bricohogar, reparacion de calderas y asistencia informatica." },
          { name: "Proteccion Exterior", detail: "Cobertura ante danos por fenomenos atmosfericos." },
        ]
      },
      {
        name: "Pisos y Apartamentos",
        description: "Seguros optimizados para viviendas en altura.",
        image: "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=600&h=400&fit=crop",
        coverages: [
          { name: "Danos por Agua", detail: "Localizacion y reparacion de fugas, filtraciones o roturas." },
          { name: "Responsabilidad Civil", detail: "Cobertura ante danos accidentales causados a vecinos." },
          { name: "Atraco fuera de la vivienda", detail: "Proteccion para los miembros de la familia fuera de casa." },
        ]
      },
      {
        name: "Segunda Residencia",
        description: "Polizas especificas para viviendas de vacaciones.",
        image: "https://images.unsplash.com/photo-1499793983690-e29da59ef1c2?w=600&h=400&fit=crop",
        coverages: [
          { name: "Vigilancia por Desocupacion", detail: "Mayor proteccion durante los periodos vacios." },
          { name: "Asistencia en Viaje", detail: "Coberturas vinculadas para tu tranquilidad." },
          { name: "Flexibilidad", detail: "Ajustamos la prima segun ubicacion y caracteristicas." },
        ]
      },
      {
        name: "Proteccion ante Impago",
        description: "Garantia de tranquilidad para propietarios.",
        image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=600&h=400&fit=crop",
        coverages: [
          { name: "Garantia de Rentas", detail: "Cobro de mensualidades en caso de impago del inquilino." },
          { name: "Defensa Juridica", detail: "Asesoramiento legal y procesos de desahucio." },
          { name: "Actos Vandalicos", detail: "Cobertura de danos causados al inmueble por el inquilino." },
        ]
      }
    ]
  },
  {
    id: "comunidades",
    name: "Seguro de Comunidades",
    icon: Users,
    description: "La mejor proteccion para tu comunidad de vecinos",
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&h=600&fit=crop",
    excerpt: "Proteccion integral para el edificio con asistencia tecnica 24 horas.",
    content: `En Devant Asesores sabemos que la gestion de una comunidad de propietarios requiere soluciones rapidas y profesionales. Nuestro seguro de comunidades ofrece una proteccion integral para el edificio, garantizando asistencia tecnica las 24 horas.`,
    subcategories: [
      {
        name: "Ventajas destacadas",
        description: "Beneficios exclusivos para comunidades.",
        image: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=600&h=400&fit=crop",
        coverages: [
          { name: "Defensa frente a Morosidad", detail: "Reclamamos a propietarios por impago de recibos y derramas." },
          { name: "Desatasco Preventivo", detail: "Limpieza y revision anual con camara del sistema de evacuacion." },
          { name: "Control de Plagas", detail: "Servicio de desinsectacion y desratizacion." },
          { name: "Revalorizacion de Capitales", detail: "Actualizamos anualmente los capitales asegurados." },
        ]
      },
      {
        name: "Coberturas principales",
        description: "Proteccion completa para el edificio.",
        image: "https://images.unsplash.com/photo-1460317442991-0ec209397118?w=600&h=400&fit=crop",
        coverages: [
          { name: "Danos y Roturas", detail: "Cobertura de danos por agua, incendio, fenomenos atmosfericos." },
          { name: "Responsabilidad Civil", detail: "Proteccion ante danos a terceros o copropietarios." },
          { name: "Robo y Atraco", detail: "Cobertura por sustraccion de bienes comunes." },
          { name: "Averia de Maquinaria", detail: "Proteccion para ascensores, climatizacion y equipos comunes." },
        ]
      }
    ]
  },
  {
    id: "salud",
    name: "Seguros de Salud",
    icon: Stethoscope,
    description: "Tu bienestar y el de tu familia en las mejores manos",
    image: "https://images.unsplash.com/photo-1505751172876-fa1923c5c528?w=800&h=600&fit=crop",
    excerpt: "Medicina privada de calidad, sin listas de espera y con los mejores especialistas.",
    content: `En Devant Asesores ponemos a tu disposicion una medicina privada de calidad, sin listas de espera y con acceso a los mejores especialistas. Te ofrecemos diferentes modalidades de seguros de salud que incorporan centros especializados y servicios exclusivos.`,
    subcategories: [
      {
        name: "Modalidades de Seguro de Salud",
        description: "Opciones adaptadas a cada necesidad.",
        image: "https://images.unsplash.com/photo-1579684385127-1ef15d508118?w=600&h=400&fit=crop",
        coverages: [
          { name: "Salud Asistencia Sanitaria", detail: "Acceso a mas de 50.000 profesionales. Elige la opcion de copago que prefieras." },
          { name: "Salud Reembolso", detail: "Maxima libertad: te reintegramos los gastos medicos en cualquier centro." },
          { name: "Salud Bienestar", detail: "La opcion mas asequible con amplio cuadro medico a precios concertados." },
          { name: "Salud Bienestar Senior", detail: "Disenado para mayores. Incluye geriatria, dietetica y psicologia." },
          { name: "Subsidio por Hospitalizacion", detail: "Indemnizacion economica diaria en caso de ingreso hospitalario." },
        ]
      },
      {
        name: "Ventajas de nuestra cobertura",
        description: "Beneficios de trabajar con nosotros.",
        image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=600&h=400&fit=crop",
        coverages: [
          { name: "Atencion Personalizada", detail: "Te acompanamos ajustando los servicios a tus necesidades reales." },
          { name: "Gestion Digital", detail: "Acceso a servicios de salud digital y autorizaciones online." },
          { name: "Respaldo y Confianza", detail: "Soluciones solidas con mas de cien anos de actividad en salud." },
        ]
      }
    ]
  },
  {
    id: "otros",
    name: "Otros Seguros",
    icon: Heart,
    description: "Lo aseguramos todo, todo y todo",
    image: "/images/todotodoytodo.jpeg",
    excerpt: "Proteccion integral para todos los aspectos de tu vida y negocio. Consultanos cualquier necesidad.",
    content: `En Devant Asesores sabemos que cada persona y cada empresa tiene necesidades unicas. Por eso, ademas de nuestras categorias principales, ofrecemos soluciones a medida para cualquier riesgo que necesites cubrir. Consultanos sin compromiso y te ayudaremos a encontrar la proteccion perfecta.`,
    subcategories: [
      {
        name: "Seguros Especiales",
        description: "Coberturas para situaciones y necesidades especificas.",
        image: "/images/todotodoytodo.jpeg",
        coverages: [
          { name: "Seguros de Eventos", detail: "Proteccion para bodas, congresos y celebraciones especiales." },
          { name: "Seguros de Arte y Colecciones", detail: "Cobertura especializada para obras de arte y objetos de valor." },
          { name: "Seguros Deportivos", detail: "Proteccion para actividades deportivas y competiciones." },
          { name: "Seguros de Construccion", detail: "Cobertura integral para obras y reformas." },
        ]
      },
      {
        name: "Soluciones Personalizadas",
        description: "Adaptamos cualquier cobertura a tu situacion.",
        image: "https://images.unsplash.com/photo-1521791136064-7986c2920216?w=600&h=400&fit=crop",
        coverages: [
          { name: "Analisis de Riesgos", detail: "Evaluamos tu situacion para ofrecerte la mejor solucion." },
          { name: "Presupuesto Sin Compromiso", detail: "Te asesoramos sin ninguna obligacion." },
          { name: "Gestion Integral", detail: "Nos encargamos de todo el proceso de contratacion." },
        ]
      }
    ]
  }
]
