import { Metadata } from 'next'
import Hero from "@/components/hero"
import Link from "next/link"
import { Clock, Play, Calendar, MapPin, Users, Phone, Instagram, Youtube, Mail } from "lucide-react"

export const metadata: Metadata = {
  title: 'Grupo de Running y Funcional en Bahía Blanca | ENERGIA',
  description: 'Únete al grupo ENERGIA en Bahía Blanca. Entrenamientos de running y funcional al aire libre, seguimiento personalizado presencial y remoto. Comunidad de corredores apasionados.',
  keywords: [
    'grupo running Bahía Blanca',
    'entrenamiento funcional outdoor',
    'running club Buenos Aires',
    'coaching personalizado',
    'entrenamiento remoto',
    'comunidad runners Argentina',
    'preparación maratón',
    'running técnico'
  ],
  openGraph: {
    title: 'ENERGIA - Tu Grupo de Running en Bahía Blanca',
    description: 'Entrenamientos de running y funcional al aire libre. Seguimiento personalizado presencial y remoto. Únete a nuestra comunidad en Bahía Blanca.',
    images: ['/images/logo-energia.png'],
    url: 'https://energia-webapp.vercel.app'
  },
  twitter: {
    title: 'ENERGIA - Grupo de Running y Funcional | Bahía Blanca',
    description: 'Entrenamientos al aire libre, seguimiento personalizado, comunidad apasionada. Únete a ENERGIA en Bahía Blanca.',
    images: ['/images/logo-energia.png']
  }
}

// WhatsApp Icon component
const WhatsAppIcon = ({ className }: { className?: string }) => (
  <svg
    viewBox="0 0 24 24"
    className={className}
    fill="currentColor"
  >
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"/>
  </svg>
)

const exercises = [
  {
    id: "cadencia-running",
    title: "Técnica de Cadencia",
    description: "Aprende a mantener una cadencia óptima de 180 pasos por minuto para mejorar tu eficiencia.",
    readTime: "5 min",
    date: "2024-01-15",
    videoThumbnail: "/images/runner-track.webp",
  },
  {
    id: "postura-corporal",
    title: "Postura Corporal Correcta",
    description: "Domina la postura ideal para correr: alineación, inclinación y posición de brazos.",
    readTime: "7 min",
    date: "2024-01-12",
    videoThumbnail: "/images/woman-sunset.webp",
  },
  {
    id: "respiracion-ritmica",
    title: "Respiración Rítmica",
    description: "Técnicas de respiración para mantener el oxígeno óptimo durante la carrera.",
    readTime: "4 min",
    date: "2024-01-10",
    videoThumbnail: "/images/runner-road.webp",
  },
  {
    id: "pisada-eficiente",
    title: "Pisada Eficiente",
    description: "Cómo aterrizar correctamente para reducir el impacto y mejorar la propulsión.",
    readTime: "6 min",
    date: "2024-01-08",
    videoThumbnail: "/images/sunrise-feet.webp",
  },
  {
    id: "calentamiento-dinamico",
    title: "Calentamiento Dinámico",
    description: "Rutina de ejercicios de activación antes de cada entrenamiento o competencia.",
    readTime: "8 min",
    date: "2024-01-05",
    videoThumbnail: "/images/yellow-runner.webp",
  },
  {
    id: "fuerza-funcional",
    title: "Fuerza Funcional para Runners",
    description: "Ejercicios específicos de fuerza que mejoran tu rendimiento en carrera.",
    readTime: "10 min",
    date: "2024-01-03",
    videoThumbnail: "/images/runner-track.webp",
  },
].sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())

const events = [
  {
    id: 1,
    title: "Maratón de Mar Del Plata",
    date: "2024-03-15",
    location: "Mar del Plata",
    distances: ["42K", "21K", "10K"],
    participants: "15,000+",
    status: "Inscripciones abiertas",
    image: "/images/mardel.png",
  },
  {
    id: 2,
    title: "Carrera Reyes 2026",
    date: "2026-01-05",
    location: "Costanera Sur",
    distances: ["10K", "5K"],
    participants: "3,000+",
    status: "Finalizada inscripción",
    image: "/images/reyes.png",
  },
  {
    id: 3,
    title: "Trail Running Tandil",
    date: "2024-02-20",
    location: "Tandil, Buenos Aires",
    distances: ["15K"],
    participants: "800+",
    status: "Próximamente",
    image: "/images/trail.png",
  },
  {
    id: 4,
    title: "Triatlon Puan",
    date: "2024-02-10",
    location: "Puan, Buenos Aires",
    distances: ["5K"],
    participants: "2,000+",
    status: "Inscripciones abiertas",
    image: "/images/tria.png",
  },
  {
    id: 5,
    title: "Media Maratón La Plata",
    date: "2024-04-05",
    location: "Rosario, Santa Fe",
    distances: ["21K", "10K"],
    participants: "8,000+",
    status: "Próximamente",
    image: "/images/la-plata.png",
  },
  {
    id: 6,
    title: "Fin de año - Quinta",
    date: "2025-12-20",
    location: "Bahia Blanca",
    distances: ["Todo el dia"],
    participants: null,
    status: "Próximamente",
    image: "/images/quinta.png",
  },
]

const coaches = [
  {
    name: "Tomas",
    specialty: "Entrenamiento Funcional",
    image: "/images/tom.png",
    whatsapp: "+54 9 11 1234-5678",
    instagram: "@tomas_energia",
  },
  {
    name: "Natalia",
    specialty: "Técnica de Running",
    image: "/images/nate.png",
    whatsapp: "+54 9 11 2345-6789",
    instagram: "@natalia_running",
  },
  {
    name: "Agustin",
    specialty: "Preparación Física",
    image: "/images/agus.png",
    whatsapp: "+54 9 11 3456-7890",
    instagram: "@agustin_fitness",
  },
]

function formatDate(dateString: string) {
  const date = new Date(dateString)
  return date.toLocaleDateString("es-AR", {
    year: "numeric",
    month: "long",
    day: "numeric",
  })
}

export default function HomePage() {
  return (
    <div className="min-h-screen bg-white">
      <Hero />

      {/* Técnica Section */}
      <section id="tecnica" className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Técnica</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Mejorá tu rendimiento con nuestros videos técnicos especializados
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {exercises.map((exercise) => (
              <Link
                key={exercise.id}
                href={`/tecnica/${exercise.id}`}
                className="group bg-white rounded-xl shadow-md hover:shadow-lg transition-all duration-300 overflow-hidden"
              >
                <div className="relative">
                  <img
                    src={exercise.videoThumbnail || "/placeholder.svg"}
                    alt={exercise.title}
                    className="w-full h-48 object-cover"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-20 group-hover:bg-opacity-10 transition-all duration-300 flex items-center justify-center">
                    <div className="bg-white bg-opacity-95 rounded-full p-3 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                      <Play className="w-6 h-6 text-team-orange" />
                    </div>
                  </div>
                </div>

                <div className="p-6">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm text-team-orange font-medium">{formatDate(exercise.date)}</span>
                    <div className="flex items-center text-gray-500 text-sm">
                      <Clock className="w-4 h-4 mr-1" />
                      <span>{exercise.readTime}</span>
                    </div>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2 group-hover:text-team-orange transition-colors">
                    {exercise.title}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{exercise.description}</p>
                </div>
              </Link>
            ))}
          </div>
          {/* Al final de la sección Técnica, después del grid de ejercicios */}
          <div className="text-center mt-12">
            <Link
              href="/tecnica"
              className="inline-flex items-center bg-team-orange text-white px-8 py-3 rounded-lg hover:bg-team-orange-light transition-colors font-medium shadow-lg"
            >
              Ver más artículos
            </Link>
          </div>
        </div>
      </section>

      {/* Eventos Section */}
      <section id="eventos" className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Próximos Eventos</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Estos son los próximos eventos en donde vamos a estar corriendo
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {events.map((event) => (
              <div
                key={event.id}
                className="relative bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-shadow"
              >
                {/* Background Image */}
                <div className="relative h-32 overflow-hidden">
                  <img
                    src={event.image || "/placeholder.svg"}
                    alt={event.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-40"></div>

                  {/* Distance badges on image */}
                  <div className="absolute top-3 left-3 flex flex-wrap gap-1">
                    {event.distances.map((distance, index) => (
                      <div key={index} className="bg-team-blue text-white px-2 py-1 rounded-full text-xs font-medium">
                        {distance}
                      </div>
                    ))}
                  </div>

                  {/* Status badge on image */}
                  <div className="absolute top-3 right-3">
                    <span
                      className={`px-2 py-1 rounded-full text-xs font-medium ${
                        event.status === "Próximamente"
                          ? "bg-yellow-500 text-white"
                          : event.status === "Finalizada inscripción"
                            ? "bg-red-500 text-white"
                            : event.status === "Inscripciones abiertas"
                              ? "bg-green-500 text-white"
                              : "bg-gray-500 text-white"
                      }`}
                    >
                      {event.status || "No disponible"}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-4">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">{event.title}</h3>

                  <div className="space-y-1 mb-3">
                    <div className="flex items-center text-gray-600">
                      <Calendar className="w-4 h-4 mr-2 text-team-orange" />
                      <span className="text-sm">{formatDate(event.date)}</span>
                    </div>
                    <div className="flex items-center text-gray-600">
                      <MapPin className="w-4 h-4 mr-2 text-team-orange" />
                      <span className="text-sm">{event.location}</span>
                    </div>
                    {event.participants && (
                      <div className="flex items-center text-gray-600">
                        <Users className="w-4 h-4 mr-2 text-team-orange" />
                        <span className="text-sm">{event.participants} participantes</span>
                      </div>
                    )}
                  </div>

                  <button className="w-full bg-team-orange text-white py-2 px-4 rounded-lg hover:bg-team-orange-light transition-colors font-medium text-sm">
                    Más información
                  </button>
                </div>
              </div>
            ))}
          </div>
          {/* Al final de la sección Eventos, después del grid */}
          <div className="text-center mt-12">
            <Link
              href="/eventos"
              className="inline-flex items-center bg-team-orange text-white px-8 py-3 rounded-lg hover:bg-team-orange-light transition-colors font-medium shadow-lg"
            >
              Ver más eventos
            </Link>
          </div>
        </div>
      </section>

      {/* Contacto Section */}
      <section id="contacto" className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Contacto</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">Conectate con nuestro equipo de profesionales</p>
          </div>

          {/* Coaches */}
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {coaches.map((coach) => (
              <div
                key={coach.name}
                className="bg-white rounded-xl p-6 text-center shadow-md hover:shadow-lg transition-shadow"
              >
                <img
                  src={coach.image || "/placeholder.svg"}
                  alt={coach.name}
                  className="w-32 h-32 rounded-full mx-auto mb-4 object-cover"
                />
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{coach.name}</h3>
                <p className="text-team-orange font-medium mb-4">{coach.specialty}</p>

                <div className="flex justify-center space-x-4">
                  <a
                    href={`https://wa.me/${coach.whatsapp.replace(/\s/g, "")}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-green-500 text-white p-2 rounded-full hover:bg-green-600 transition-colors"
                  >
                    <WhatsAppIcon className="w-5 h-5" />
                  </a>
                  <a
                    href={`https://instagram.com/${coach.instagram.replace("@", "")}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-gradient-to-r from-purple-500 to-pink-500 text-white p-2 rounded-full hover:from-purple-600 hover:to-pink-600 transition-colors"
                  >
                    <Instagram className="w-5 h-5" />
                  </a>
                </div>
              </div>
            ))}
          </div>

          {/* Contact Form */}
          <div className="max-w-2xl mx-auto bg-white rounded-xl p-8 shadow-md">
            <h3 className="text-2xl font-semibold text-gray-900 mb-6 text-center">Envianos un mensaje</h3>
            <form className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                    Nombre
                  </label>
                  <input
                    type="text"
                    id="name"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-team-orange focus:border-transparent"
                    placeholder="Tu nombre"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-team-orange focus:border-transparent"
                    placeholder="tu@email.com"
                  />
                </div>
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                  Mensaje
                </label>
                <textarea
                  id="message"
                  rows={4}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-team-orange focus:border-transparent"
                  placeholder="Contanos en qué podemos ayudarte..."
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-team-orange text-white py-3 px-6 rounded-lg hover:bg-team-orange-light transition-colors font-medium"
              >
                Enviar mensaje
              </button>
            </form>
          </div>

          {/* Social Media */}
          <div className="text-center mt-16">
            <h3 className="text-xl font-semibold text-gray-900 mb-6">Seguinos en nuestras redes</h3>
            <div className="flex justify-center space-x-6">
              <a
                href="https://youtube.com/@energia"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-red-600 text-white p-3 rounded-full hover:bg-red-700 transition-colors"
              >
                <Youtube className="w-6 h-6" />
              </a>
              <a
                href="https://instagram.com/energia"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gradient-to-r from-purple-500 to-pink-500 text-white p-3 rounded-full hover:from-purple-600 hover:to-pink-600 transition-colors"
              >
                <Instagram className="w-6 h-6" />
              </a>
              <a
                href="mailto:info@energia.com"
                className="bg-blue-600 text-white p-3 rounded-full hover:bg-blue-700 transition-colors"
              >
                <Mail className="w-6 h-6" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Características Futuras */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Próximamente</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Nuevas características que llevarán tu experiencia con ENERGIA al siguiente nivel
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Pagos Online */}
            <div className="text-center p-6 bg-gradient-to-br from-green-50 to-emerald-50 rounded-xl">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">💳</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Pagos Online</h3>
              <p className="text-gray-600 text-sm">
                Pagá tus clases y membresías con MercadoPago de forma segura
              </p>
            </div>

            {/* Sistema de Turnos */}
            <div className="text-center p-6 bg-gradient-to-br from-blue-50 to-sky-50 rounded-xl">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">📅</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Sistema de Turnos</h3>
              <p className="text-gray-600 text-sm">
                Reservá tu lugar en las clases desde la app
              </p>
            </div>

            {/* Área de Socios */}
            <div className="text-center p-6 bg-gradient-to-br from-purple-50 to-violet-50 rounded-xl">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">👥</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Área de Socios</h3>
              <p className="text-gray-600 text-sm">
                Acceso exclusivo a contenido premium y beneficios
              </p>
            </div>

            {/* Energia Kids */}
            <div className="text-center p-6 bg-gradient-to-br from-orange-50 to-amber-50 rounded-xl">
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🧒</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Energia Kids</h3>
              <p className="text-gray-600 text-sm">
                Entrenamientos y actividades especializadas para niños
              </p>
            </div>

            {/* Galería de Carreras */}
            <div className="text-center p-6 bg-gradient-to-br from-pink-50 to-rose-50 rounded-xl">
              <div className="w-16 h-16 bg-pink-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">📸</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Galería de Carreras</h3>
              <p className="text-gray-600 text-sm">
                Fotos y videos de todos los eventos del equipo
              </p>
            </div>

            {/* Sponsors */}
            <div className="text-center p-6 bg-gradient-to-br from-indigo-50 to-blue-50 rounded-xl">
              <div className="w-16 h-16 bg-indigo-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🤝</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Sponsors</h3>
              <p className="text-gray-600 text-sm">
                Descuentos en marcas deportivas y sponsors oficiales
              </p>
            </div>

            {/* Seguimiento de Progreso */}
            <div className="text-center p-6 bg-gradient-to-br from-teal-50 to-cyan-50 rounded-xl">
              <div className="w-16 h-16 bg-teal-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">📊</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Seguimiento de Progreso</h3>
              <p className="text-gray-600 text-sm">
                Trackea tu rendimiento y mejoras con métricas personalizadas
              </p>
            </div>

            {/* Marketplace */}
            <div className="text-center p-6 bg-gradient-to-br from-red-50 to-pink-50 rounded-xl">
              <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🛒</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Marketplace</h3>
              <p className="text-gray-600 text-sm">
                Compra y vende equipamiento deportivo entre la comunidad
              </p>
            </div>
          </div>

          {/* Call to Action */}
          {/* <div className="text-center mt-12 p-8 bg-gradient-to-r from-team-blue to-team-orange rounded-xl">
            <h3 className="text-2xl font-bold text-white mb-4">¡Únete a la revolución del fitness!</h3>
            <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
              Sé parte de los primeros 300 socios fundadores y obtené acceso anticipado a todas estas características
            </p>
            <Link
              href="#contacto"
              className="inline-flex items-center bg-white text-team-blue px-8 py-3 rounded-lg hover:bg-gray-100 transition-colors font-medium shadow-lg"
            >
              Quiero ser socio fundador
            </Link>
          </div> */}
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-team-blue text-white py-12">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <div className="mb-6">
            <div className="text-3xl font-bold mb-2">ENERGIA</div>
            <div className="text-team-orange font-medium">Funcional & Running</div>
          </div>
          <p className="text-blue-100">© 2025 ENERGIA - Potenciando atletas</p>
        </div>
      </footer>
    </div>
  )
}
