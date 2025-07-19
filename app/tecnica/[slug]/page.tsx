"use client"

import Link from "next/link"
import Navbar from "@/components/navbar"
import { ArrowLeft, Clock, User, Share2, Facebook, Twitter, Linkedin, ChevronDown, ChevronUp } from "lucide-react"
import { useState } from "react"

const exerciseData: Record<string, any> = {
  "cadencia-running": {
    title: "Técnica de Cadencia",
    description: "Aprende a mantener una cadencia óptima de 180 pasos por minuto para mejorar tu eficiencia.",
    readTime: "5 min",
    author: "Coach María González",
    date: "2024-01-15",
    videoUrl: "https://www.youtube.com/embed/2yxJ60zNavI",
    heroImage: "/images/runner-track.webp",
    sections: [
      {
        type: "intro",
        title: "¿Qué es la cadencia en running?",
        content: "La cadencia se refiere al número de pasos que das por minuto mientras corres. La cadencia óptima para la mayoría de corredores está entre **170-180 pasos por minuto**.",
        image: "/images/runner-road.webp"
      },
      {
        type: "benefits",
        title: "¿Por qué es importante?",
        content: "Una cadencia adecuada te ayuda a reducir el riesgo de lesiones, mejorar la eficiencia energética, mantener una forma más consistente durante distancias largas y aumentar la velocidad sin incrementar el esfuerzo.",
        items: [
          "Reducir el riesgo de lesiones al disminuir el impacto en cada pisada",
          "Mejorar la eficiencia energética de tu carrera",
          "Mantener una forma más consistente durante distancias largas",
          "Aumentar la velocidad sin incrementar el esfuerzo"
        ]
      },
      {
        type: "multi-item",
        title: "Ejercicios para mejorar la cadencia",
        items: [
          {
            title: "Carrera en el lugar",
            description: "Corre en el mismo lugar durante 30 segundos, cuenta tus pasos y ajusta el ritmo. Repite 5 veces con descansos de 30 segundos.",
            image: "/images/runner-track.webp"
          },
          {
            title: "Metrónomo",
            description: "Usa una app de metrónomo a 180 BPM, sincroniza tus pasos con el ritmo. Comienza con intervalos cortos de 1-2 minutos.",
            image: "/images/woman-sunset.webp"
          },
          {
            title: "Pasos cortos y rápidos",
            description: "Reduce la longitud de tu zancada, aumenta la frecuencia de pasos, mantén el mismo esfuerzo percibido.",
            image: "/images/yellow-runner.webp"
          }
        ]
      },
      {
        type: "text-image",
        title: "Progresión recomendada",
        content: "El cambio gradual es clave para adoptar una nueva cadencia sin lesionarte. Comienza con sesiones cortas y aumenta progresivamente la duración.",
        image: "/images/sunrise-feet.webp",
        timeline: [
          { period: "Semana 1-2", action: "Practica la medición y conciencia de tu cadencia actual" },
          { period: "Semana 3-4", action: "Introduce ejercicios específicos 2-3 veces por semana" },
          { period: "Semana 5-8", action: "Integra la nueva cadencia en carreras fáciles" },
          { period: "Semana 9+", action: "Aplica en entrenamientos de mayor intensidad" }
        ]
      }
    ]
  },
  "postura-corporal": {
    title: "Postura Corporal Correcta",
    description: "Domina la postura ideal para correr: alineación, inclinación y posición de brazos.",
    readTime: "7 min",
    author: "Coach Carlos Ruiz",
    date: "2024-01-12",
    videoUrl: "https://www.youtube.com/embed/2yxJ60zNavI",
    heroImage: "/images/woman-sunset.webp",
    sections: [
      {
        type: "intro",
        title: "La Importancia de la Postura en el Running",
        content: "Una postura correcta es fundamental para correr de manera eficiente y prevenir lesiones. Te enseñamos los elementos clave de una **buena postura deportiva**.",
        image: "/images/runner-road.webp"
      },
      {
        type: "multi-item",
        title: "Elementos de la postura correcta",
        items: [
          {
            title: "Posición de la cabeza",
            description: "Mirada al frente, no hacia abajo. Barbilla paralela al suelo. Cuello relajado y alineado con la columna.",
            image: "/images/woman-sunset.webp"
          },
          {
            title: "Posición de los hombros",
            description: "Relajados y bajos, evita subirlos hacia las orejas. Ligeramente hacia atrás para abrir el pecho.",
            image: "/images/runner-track.webp"
          },
          {
            title: "Posición del torso",
            description: "Ligera inclinación hacia adelante desde los tobillos. Core activado para mantener estabilidad.",
            image: "/images/yellow-runner.webp"
          }
        ]
      },
      {
        type: "benefits",
        title: "Beneficios de una buena postura",
        content: "Una postura correcta no solo mejora tu rendimiento, sino que también previene lesiones y optimiza tu gasto energético.",
        items: [
          "Mayor eficiencia respiratoria y mejor oxigenación",
          "Reducción significativa del gasto energético",
          "Menor riesgo de lesiones en espalda y cuello",
          "Mejor rendimiento general y mayor velocidad"
        ]
      },
      {
        type: "text-image",
        title: "Cómo mejorar tu postura",
        content: "La mejora de la postura requiere práctica constante y conciencia corporal. Desarrolla estos hábitos progresivamente.",
        image: "/images/sunrise-feet.webp",
        timeline: [
          { period: "Diario", action: "Ejercicios de fortalecimiento del core 10-15 minutos" },
          { period: "3x semana", action: "Estiramientos de pecho y flexores de cadera" },
          { period: "Carreras", action: "Conciencia corporal durante entrenamientos fáciles" },
          { period: "Mensual", action: "Video análisis para revisar tu forma de correr" }
        ]
      }
    ]
  }
}

interface PageProps {
  params: {
    slug: string
  }
}

function ShareButton({ exercise }: { exercise: any }) {
  const [showShare, setShowShare] = useState(false)

  if (typeof window === "undefined") return null

  const url = `${window.location.origin}/tecnica/${exercise.id || "ejercicio"}`

  const shareLinks = {
    facebook: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`,
    twitter: `https://twitter.com/intent/tweet?url=${encodeURIComponent(url)}&text=${encodeURIComponent(exercise.title)}`,
    linkedin: `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}`,
  }

  return (
    <div className="relative">
      <button
        onClick={() => setShowShare(!showShare)}
        className="flex items-center space-x-2 bg-gray-100 text-gray-700 px-4 py-2 rounded-lg hover:bg-gray-200 transition-colors"
      >
        <Share2 className="w-4 h-4" />
        <span>Compartir</span>
      </button>

      {showShare && (
        <div className="absolute right-0 top-full mt-2 bg-white rounded-lg shadow-lg border p-3 flex space-x-3 z-10">
          <a
            href={shareLinks.facebook}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 text-blue-600 hover:bg-blue-50 rounded-lg transition-colors"
          >
            <Facebook className="w-5 h-5" />
          </a>
          <a
            href={shareLinks.twitter}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 text-blue-400 hover:bg-blue-50 rounded-lg transition-colors"
          >
            <Twitter className="w-5 h-5" />
          </a>
          <a
            href={shareLinks.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 text-blue-700 hover:bg-blue-50 rounded-lg transition-colors"
          >
            <Linkedin className="w-5 h-5" />
          </a>
        </div>
      )}
    </div>
  )
}

function MultiItemSection({ section }: { section: any }) {
  const [activeItem, setActiveItem] = useState(0)

  return (
    <div className="grid lg:grid-cols-2 gap-12 items-start">
      {/* Left side - Accordion */}
      <div className="space-y-4">
        <h2 className="text-3xl font-bold text-gray-900 mb-8">{section.title}</h2>
        {section.items.map((item: any, index: number) => (
          <div key={index} className="border border-gray-200 rounded-lg overflow-hidden">
            <button
              onClick={() => setActiveItem(activeItem === index ? -1 : index)}
              className={`w-full px-6 py-4 text-left flex items-center justify-between transition-colors ${
                activeItem === index 
                  ? 'bg-team-orange text-white' 
                  : 'bg-gray-50 hover:bg-gray-100 text-gray-900'
              }`}
            >
              <span className="font-semibold">{item.title}</span>
              {activeItem === index ? (
                <ChevronUp className="w-5 h-5" />
              ) : (
                <ChevronDown className="w-5 h-5" />
              )}
            </button>
            {activeItem === index && (
              <div className="px-6 py-4 bg-white border-t">
                <p className="text-gray-700 leading-relaxed">{item.description}</p>
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Right side - Image */}
      <div className="lg:sticky lg:top-24">
        <div className="aspect-square rounded-xl overflow-hidden shadow-lg">
          <img
            src={section.items[activeItem]?.image || section.items[0]?.image || "/images/placeholder.jpg"}
            alt={section.items[activeItem]?.title || section.title}
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </div>
  )
}

function TextImageSection({ section }: { section: any }) {
  return (
    <div className="grid lg:grid-cols-2 gap-12 items-center">
      <div>
        <h2 className="text-3xl font-bold text-gray-900 mb-6">{section.title}</h2>
        <p className="text-gray-700 text-lg leading-relaxed mb-8">{section.content}</p>
        
        {section.timeline && (
          <div className="space-y-4">
            {section.timeline.map((item: any, index: number) => (
              <div key={index} className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-20 h-20 bg-team-orange rounded-full flex items-center justify-center">
                  <span className="text-white font-bold text-sm text-center leading-tight">{item.period}</span>
                </div>
                <div className="pt-3">
                  <p className="text-gray-700">{item.action}</p>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
      
      <div className="order-first lg:order-last">
        <div className="aspect-square rounded-xl overflow-hidden shadow-lg">
          <img
            src={section.image || "/images/placeholder.jpg"}
            alt={section.title}
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </div>
  )
}

function BenefitsSection({ section }: { section: any }) {
  return (
    <div className="text-center max-w-4xl mx-auto">
      <h2 className="text-3xl font-bold text-gray-900 mb-6">{section.title}</h2>
      <p className="text-gray-700 text-lg leading-relaxed mb-12">{section.content}</p>
      
      <div className="grid md:grid-cols-2 gap-6">
        {section.items.map((item: string, index: number) => (
          <div key={index} className="bg-gradient-to-br from-team-blue/5 to-team-orange/5 p-6 rounded-xl">
            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0 w-8 h-8 bg-team-orange rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-sm">{index + 1}</span>
              </div>
              <p className="text-gray-700 text-left">{item}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

function IntroSection({ section }: { section: any }) {
  return (
    <div className="grid lg:grid-cols-2 gap-12 items-center">
      <div>
        <h2 className="text-3xl font-bold text-gray-900 mb-6">{section.title}</h2>
        <div 
          className="text-gray-700 text-lg leading-relaxed prose prose-lg max-w-none"
          dangerouslySetInnerHTML={{ 
            __html: section.content.replace(/\*\*(.*?)\*\*/g, '<strong class="text-team-orange">$1</strong>') 
          }}
        />
      </div>
      
      <div>
        <div className="aspect-video rounded-xl overflow-hidden shadow-lg">
          <img
            src={section.image || "/images/placeholder.jpg"}
            alt={section.title}
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </div>
  )
}

export default async function ExercisePage({ params }: PageProps) {
  const { slug } = await params
  const exercise = exerciseData[slug]

  if (!exercise) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">Artículo no encontrado</h1>
          <Link href="/tecnica" className="text-blue-600 hover:underline">
            Volver a técnica
          </Link>
        </div>
      </div>
    )
  }

  const formatDate = (dateString: string) => {
    const date = new Date(dateString)
    return date.toLocaleDateString("es-AR", {
      year: "numeric",
      month: "long", 
      day: "numeric",
    })
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-team-blue/10 via-purple-team/5 to-team-orange/10">
      {/* Hero Section with Navbar */}
      <section className="relative bg-gradient-to-br from-team-blue via-team-blue-dark to-team-orange/60 pt-0 pb-24 min-h-[600px] flex flex-col overflow-hidden">
        {/* Animated Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-20 left-24 w-24 h-24 bg-team-orange/10 rounded-full animate-pulse delay-100"></div>
          <div className="absolute top-48 left-16 w-32 h-32 bg-white/15 rounded-full animate-bounce delay-900"></div>
          <div className="absolute bottom-28 left-40 w-18 h-18 bg-team-orange/20 rounded-full animate-pulse delay-600"></div>
          <div
            className="absolute top-32 left-56 w-28 h-28 bg-white/8 rounded-full animate-spin"
            style={{ animationDuration: "24s" }}
          ></div>
          <div className="absolute bottom-40 left-12 w-20 h-20 bg-team-orange/12 rounded-full animate-bounce delay-400"></div>
          <div
            className="absolute top-64 left-32 w-36 h-36 bg-white/10 rounded-full animate-spin"
            style={{ animationDuration: "14s" }}
          ></div>
        </div>
        
        <Navbar />
        
        <div className="flex-1 flex items-center pt-4 max-w-6xl mx-auto px-4 w-full relative">
          <div className="w-full">
            <Link href="/tecnica" className="inline-flex items-center text-white hover:text-team-orange mb-8 transition-colors duration-200">
              <ArrowLeft className="w-5 h-5" />
            </Link>

            <div className="text-center text-white">
              <h1 className="text-4xl md:text-6xl font-bold mb-6">{exercise.title}</h1>
              <p className="text-xl text-blue-100 max-w-3xl mx-auto leading-relaxed mb-8">
                {exercise.description}
              </p>
              
              {/* Article Info */}
              <div className="flex items-center justify-center gap-8 text-blue-100">
                <div className="flex items-center">
                  <Clock className="w-5 h-5 mr-2 text-team-orange" />
                  <span>{exercise.readTime} de lectura</span>
                </div>
                <div className="flex items-center">
                  <User className="w-5 h-5 mr-2 text-team-orange" />
                  <span>{exercise.author}</span>
                </div>
                <div className="flex items-center">
                  <span className="text-team-orange mr-2">📅</span>
                  <span>{formatDate(exercise.date)}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Content Sections */}
      <div className="max-w-6xl mx-auto px-4 py-16">
        {exercise.sections?.map((section: any, index: number) => {
          const isSecondSection = index === 1;
          return (
            <div key={index}>
              <div className="mb-20">
                {section.type === 'intro' && <IntroSection section={section} />}
                {section.type === 'benefits' && <BenefitsSection section={section} />}
                {section.type === 'multi-item' && <MultiItemSection section={section} />}
                {section.type === 'text-image' && <TextImageSection section={section} />}
              </div>
              
              {/* Video after second section */}
              {isSecondSection && exercise.videoUrl && (
                <div className="mb-20 -mx-4 lg:-mx-[calc((100vw-1200px)/2)]">
                  <div className="bg-gradient-to-r from-blue-50 to-orange-50 py-16 px-4">
                    <div className="max-w-6xl mx-auto">
                      <div className="text-center mb-8">
                        <h2 className="text-3xl font-bold text-team-blue mb-4">Video Tutorial</h2>
                        <p className="text-gray-600">Observa la demostración práctica de esta técnica</p>
                      </div>
                      
                      <div className="relative aspect-video max-w-4xl mx-auto rounded-xl overflow-hidden shadow-lg">
                        <iframe
                          src={exercise.videoUrl}
                          title={exercise.title}
                          className="w-full h-full"
                          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                          allowFullScreen
                        />
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          );
        })}
      </div>

      {/* Navigation Footer */}
      <section className="bg-white py-16">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">¿Te ha sido útil este artículo?</h3>
          <p className="text-gray-600 mb-8">Compártelo con otros runners y sigue aprendiendo con más técnicas</p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <ShareButton exercise={{ ...exercise, id: slug }} />
            
            <Link
              href="/tecnica"
              className="inline-flex items-center justify-center bg-team-orange text-white py-3 px-8 rounded-lg hover:bg-team-blue transition-colors font-medium shadow-lg"
            >
              Ver más artículos técnicos
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
