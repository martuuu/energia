"use client"

import { useState, useTransition } from "react"
import Link from "next/link"
import { Calendar, MapPin, Users } from "lucide-react"

const allEvents = [
  {
    id: 1,
    title: "Maratón de Buenos Aires",
    date: "2024-03-15",
    location: "Puerto Madero, CABA",
    distances: ["42K", "21K", "10K"],
    participants: "15,000+",
    status: "Inscripciones abiertas",
    image: "/images/mardel.png",
    description: "El evento más importante del running argentino. Corré por las calles más emblemáticas de Buenos Aires.",
    registrationUrl: "https://maratonba.com",
    price: "$12,000",
  },
  {
    id: 2,
    title: "10K Costanera Sur",
    date: "2024-02-28",
    location: "Costanera Sur",
    distances: ["10K", "5K"],
    participants: "3,000+",
    status: "Finalizada inscripción",
    image: "/images/runner-road.webp",
    description: "Una carrera técnica por la costanera con las mejores vistas de la ciudad.",
    registrationUrl: "https://10kcostanera.com",
    price: "$8,000",
  },
  {
    id: 3,
    title: "Trail Running Tigre",
    date: "2024-02-20",
    location: "Delta del Tigre",
    distances: ["15K"],
    participants: "800+",
    status: "Próximamente",
    image: "/images/trail.png",
    description: "Aventura en el delta del Tigre. Trail running en contacto con la naturaleza.",
    registrationUrl: "https://trailtigre.com",
    price: "$10,000",
  },
  {
    id: 4,
    title: "5K Nocturna Palermo",
    date: "2024-02-10",
    location: "Parque Tres de Febrero",
    distances: ["5K"],
    participants: "2,000+",
    status: "Inscripciones abiertas",
    image: "/images/woman-sunset.webp",
    description: "Carrera nocturna en los bosques de Palermo. Perfecta para principiantes.",
    registrationUrl: "https://nocturnapalermo.com",
    price: "$6,000",
  },
  {
    id: 5,
    title: "Media Maratón Rosario",
    date: "2024-04-05",
    location: "Rosario, Santa Fe",
    distances: ["21K", "10K"],
    participants: "8,000+",
    status: "Próximamente",
    image: "/images/runner-track.webp",
    description: "Media maratón en la bella ciudad de Rosario. Recorrido por el centro histórico.",
    registrationUrl: "https://mediamaratonrosario.com",
    price: "$9,500",
  },
  {
    id: 6,
    title: "Cross Country La Plata",
    date: "2024-03-25",
    location: "Bosque de La Plata",
    distances: ["12K", "8K"],
    participants: "1,200+",
    status: "Próximamente",
    image: "/images/sunrise-feet.webp",
    description: "Cross country por los senderos del bosque platense. Terreno mixto y desafiante.",
    registrationUrl: "https://crosslaplata.com",
    price: "$7,500",
  },
  {
    id: 7,
    title: "Maratón de las Flores",
    date: "2024-05-15",
    location: "Escobar, Buenos Aires",
    distances: ["42K", "21K", "10K"],
    participants: "5,000+",
    status: "Inscripciones abiertas",
    image: "/images/yellow-runner.webp",
    description: "Maratón primaveral entre jardines y quintas de Escobar. Paisajes únicos.",
    registrationUrl: "https://maratonflores.com",
    price: "$11,000",
  },
  {
    id: 8,
    title: "10K Ciudad Universitaria",
    date: "2024-06-20",
    location: "Ciudad Universitaria",
    distances: ["10K", "5K"],
    participants: "2,500+",
    status: "Próximamente",
    image: "/images/runner-road.webp",
    description: "Carrera universitaria por el campus de la UBA. Apoyo estudiantil garantizado.",
    registrationUrl: "https://10kciu.com",
    price: "$7,000",
  },
].sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime())

function formatDate(dateString: string) {
  const date = new Date(dateString)
  return date.toLocaleDateString("es-AR", {
    year: "numeric",
    month: "long",
    day: "numeric",
  })
}

export default function EventosPageClient() {
  const [currentPage, setCurrentPage] = useState(1)
  const [selectedStatus, setSelectedStatus] = useState("all")
  const [isPending, startTransition] = useTransition()
  const eventsPerPage = 6

  // Filter events by status
  const filteredEvents = selectedStatus === "all" 
    ? allEvents 
    : allEvents.filter(event => event.status === selectedStatus)

  const totalPages = Math.ceil(filteredEvents.length / eventsPerPage)
  const startIndex = (currentPage - 1) * eventsPerPage
  const currentEvents = filteredEvents.slice(startIndex, startIndex + eventsPerPage)

  const statusOptions = [
    { value: "all", label: "Todos los eventos" },
    { value: "Inscripciones abiertas", label: "Inscripciones abiertas" },
    { value: "Próximamente", label: "Próximamente" },
    { value: "Finalizada inscripción", label: "Inscripción cerrada" },
  ]

  const handleStatusChange = (status: string) => {
    startTransition(() => {
      setSelectedStatus(status)
      setCurrentPage(1)
    })
  }

  const handlePageChange = (page: number) => {
    startTransition(() => {
      setCurrentPage(page)
    })
  }

  return (
    <section className="py-20">
      <div className="max-w-6xl mx-auto px-4">
        {/* Filter Section */}
        <div className="mb-8">
          <div className="flex flex-wrap gap-2 justify-center">
            {statusOptions.map((option) => (
              <button
                key={option.value}
                onClick={() => handleStatusChange(option.value)}
                disabled={isPending}
                className={`px-4 py-2 rounded-lg font-medium transition-all duration-300 ${
                  selectedStatus === option.value
                    ? "bg-team-orange text-white shadow-lg scale-105"
                    : "bg-white text-gray-700 border border-gray-200 hover:bg-team-orange hover:text-white hover:scale-105"
                } ${isPending ? "opacity-50 cursor-not-allowed" : "hover:shadow-md"}`}
              >
                {option.label}
              </button>
            ))}
          </div>
        </div>

        {/* Events Grid */}
        <div className={`transition-all duration-500 ${isPending ? "opacity-50 scale-95" : "opacity-100 scale-100"}`}>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {currentEvents.map((event, index) => (
              <div
                key={event.id}
                className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 group animate-fadeInUp"
                style={{
                  animationDelay: `${index * 100}ms`,
                  animationFillMode: 'both'
                }}
              >
              {/* Background Image */}
              <div className="relative h-48 overflow-hidden">
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

                {/* Price badge */}
                <div className="absolute bottom-3 left-3">
                  <span className="bg-team-orange text-white px-2 py-1 rounded-full text-xs font-medium">
                    {event.price}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{event.title}</h3>
                
                <p className="text-gray-600 text-sm mb-4 leading-relaxed">{event.description}</p>

                <div className="space-y-2 mb-4">
                  <div className="flex items-center text-gray-600">
                    <Calendar className="w-4 h-4 mr-2 text-team-orange" />
                    <span className="text-sm">{formatDate(event.date)}</span>
                  </div>
                  <div className="flex items-center text-gray-600">
                    <MapPin className="w-4 h-4 mr-2 text-team-orange" />
                    <span className="text-sm">{event.location}</span>
                  </div>
                  <div className="flex items-center text-gray-600">
                    <Users className="w-4 h-4 mr-2 text-team-orange" />
                    <span className="text-sm">{event.participants} participantes</span>
                  </div>
                </div>

                <div className="flex gap-2">
                  <button className="flex-1 bg-team-orange text-white py-2 px-4 rounded-lg hover:bg-team-orange-light transition-colors font-medium text-sm">
                    Más información
                  </button>
                  {event.status === "Inscripciones abiertas" && (
                    <a
                      href={event.registrationUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 bg-team-blue text-white py-2 px-4 rounded-lg hover:bg-team-blue-dark transition-colors font-medium text-sm text-center"
                    >
                      Inscribirse
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* No results message */}
        {filteredEvents.length === 0 && (
          <div className="text-center py-12 animate-fadeIn">
            <div className="text-gray-500 text-lg mb-4">No hay eventos disponibles con este filtro</div>
            <button
              onClick={() => handleStatusChange("all")}
              className="bg-team-orange text-white px-6 py-2 rounded-lg hover:bg-team-orange-light transition-all duration-300 shadow-md hover:shadow-lg hover:scale-105"
            >
              Ver todos los eventos
            </button>
          </div>
        )}
        </div>

        {/* Pagination */}
        {totalPages > 1 && (
          <div className="flex justify-center space-x-2 mt-12">
            <button
              onClick={() => handlePageChange(Math.max(1, currentPage - 1))}
              disabled={currentPage === 1 || isPending}
              className="px-4 py-2 border border-gray-300 rounded-lg disabled:opacity-50 disabled:cursor-not-allowed hover:bg-gray-50 transition-all duration-300"
            >
              Anterior
            </button>

            {[...Array(totalPages)].map((_, index) => (
              <button
                key={index + 1}
                onClick={() => handlePageChange(index + 1)}
                disabled={isPending}
                className={`px-4 py-2 rounded-lg transition-all duration-300 ${
                  currentPage === index + 1 
                    ? "bg-team-orange text-white shadow-lg scale-105" 
                    : "border border-gray-300 hover:bg-gray-50 hover:scale-105"
                } ${isPending ? "opacity-50 cursor-not-allowed" : ""}`}
              >
                {index + 1}
              </button>
            ))}

            <button
              onClick={() => handlePageChange(Math.min(totalPages, currentPage + 1))}
              disabled={currentPage === totalPages || isPending}
              className="px-4 py-2 border border-gray-300 rounded-lg disabled:opacity-50 disabled:cursor-not-allowed hover:bg-gray-50 transition-all duration-300"
            >
              Siguiente
            </button>
          </div>
        )}
      </div>
    </section>
  )
}
