"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Clock, Play, Share2, Facebook, Twitter, Linkedin } from "lucide-react"

const allExercises = [
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
  {
    id: "nutricion-deportiva",
    title: "Nutrición para Runners",
    description: "Guía completa de alimentación antes, durante y después del entrenamiento.",
    readTime: "12 min",
    date: "2024-01-01",
    videoThumbnail: "/images/woman-sunset.webp",
  },
  {
    id: "recuperacion-activa",
    title: "Recuperación Activa",
    description: "Técnicas de recuperación para optimizar tu rendimiento y prevenir lesiones.",
    readTime: "9 min",
    date: "2023-12-28",
    videoThumbnail: "/images/runner-road.webp",
  },
  {
    id: "entrenamiento-intervalos",
    title: "Entrenamiento por Intervalos",
    description: "Mejora tu velocidad y resistencia con entrenamientos de alta intensidad.",
    readTime: "11 min",
    date: "2023-12-25",
    videoThumbnail: "/images/sunrise-feet.webp",
  },
  {
    id: "mental-running",
    title: "Preparación Mental",
    description: "Desarrolla la fortaleza mental necesaria para superar tus límites.",
    readTime: "8 min",
    date: "2023-12-22",
    videoThumbnail: "/images/yellow-runner.webp",
  },
].sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())

function formatDate(dateString: string) {
  const date = new Date(dateString)
  return date.toLocaleDateString("es-AR", {
    year: "numeric",
    month: "long",
    day: "numeric",
  })
}

function ShareButton({ exercise }: { exercise: any }) {
  const [showShare, setShowShare] = useState(false)
  const [url, setUrl] = useState("")

  useEffect(() => {
    if (typeof window !== 'undefined') {
      setUrl(`${window.location.origin}/tecnica/${exercise.id}`)
    }
  }, [exercise.id])

  const shareLinks = {
    facebook: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`,
    twitter: `https://twitter.com/intent/tweet?url=${encodeURIComponent(url)}&text=${encodeURIComponent(exercise.title)}`,
    linkedin: `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}`,
  }

  return (
    <div className="relative">
      <button
        onClick={() => setShowShare(!showShare)}
        className="p-2 text-gray-500 hover:text-team-orange transition-colors"
      >
        <Share2 className="w-4 h-4" />
      </button>

      {showShare && (
        <div className="absolute right-0 top-full mt-2 bg-white rounded-lg shadow-lg border p-2 flex space-x-2 z-10">
          <a
            href={shareLinks.facebook}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 text-blue-600 hover:bg-blue-50 rounded"
          >
            <Facebook className="w-4 h-4" />
          </a>
          <a
            href={shareLinks.twitter}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 text-blue-400 hover:bg-blue-50 rounded"
          >
            <Twitter className="w-4 h-4" />
          </a>
          <a
            href={shareLinks.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 text-blue-700 hover:bg-blue-50 rounded"
          >
            <Linkedin className="w-4 h-4" />
          </a>
        </div>
      )}
    </div>
  )
}

export default function TecnicaPageClient() {
  const [currentPage, setCurrentPage] = useState(1)
  const exercisesPerPage = 10
  const totalPages = Math.ceil(allExercises.length / exercisesPerPage)

  const startIndex = (currentPage - 1) * exercisesPerPage
  const currentExercises = allExercises.slice(startIndex, startIndex + exercisesPerPage)

  return (
    <section className="py-20">
      <div className="max-w-6xl mx-auto px-4">
        {/* Articles Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {currentExercises.map((exercise) => (
            <div
              key={exercise.id}
              className="bg-white rounded-xl shadow-md hover:shadow-lg transition-all duration-300 overflow-hidden"
            >
              <Link href={`/tecnica/${exercise.id}`}>
                <div className="relative">
                  <img
                    src={exercise.videoThumbnail || "/placeholder.svg"}
                    alt={exercise.title}
                    className="w-full h-48 object-cover"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-20 hover:bg-opacity-10 transition-all duration-300 flex items-center justify-center">
                    <div className="bg-white bg-opacity-95 rounded-full p-3 hover:scale-110 transition-transform duration-300 shadow-lg">
                      <Play className="w-6 h-6 text-team-orange" />
                    </div>
                  </div>
                </div>
              </Link>

              <div className="p-6">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm text-team-orange font-medium">{formatDate(exercise.date)}</span>
                  <div className="flex items-center space-x-2">
                    <div className="flex items-center text-gray-500 text-sm">
                      <Clock className="w-4 h-4 mr-1" />
                      <span>{exercise.readTime}</span>
                    </div>
                    <ShareButton exercise={exercise} />
                  </div>
                </div>
                <Link href={`/tecnica/${exercise.id}`}>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2 hover:text-team-orange transition-colors">
                    {exercise.title}
                  </h3>
                </Link>
                <p className="text-gray-600 text-sm leading-relaxed">{exercise.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Pagination */}
        {totalPages > 1 && (
          <div className="flex justify-center space-x-2">
            <button
              onClick={() => setCurrentPage(Math.max(1, currentPage - 1))}
              disabled={currentPage === 1}
              className="px-4 py-2 border border-gray-300 rounded-lg disabled:opacity-50 disabled:cursor-not-allowed hover:bg-gray-50"
            >
              Anterior
            </button>

            {[...Array(totalPages)].map((_, index) => (
              <button
                key={index + 1}
                onClick={() => setCurrentPage(index + 1)}
                className={`px-4 py-2 rounded-lg ${
                  currentPage === index + 1 ? "bg-team-orange text-white" : "border border-gray-300 hover:bg-gray-50"
                }`}
              >
                {index + 1}
              </button>
            ))}

            <button
              onClick={() => setCurrentPage(Math.min(totalPages, currentPage + 1))}
              disabled={currentPage === totalPages}
              className="px-4 py-2 border border-gray-300 rounded-lg disabled:opacity-50 disabled:cursor-not-allowed hover:bg-gray-50"
            >
              Siguiente
            </button>
          </div>
        )}
      </div>
    </section>
  )
}
