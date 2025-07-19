import Link from "next/link"
import Navbar from "@/components/navbar"
import TecnicaPageClient from "@/components/tecnica-page-client"
import { ArrowLeft } from "lucide-react"
import { Metadata } from "next"

export const metadata: Metadata = {
  title: 'Artículos Técnicos de Running | ENERGIA Bahía Blanca',
  description: 'Artículos técnicos especializados para mejorar tu rendimiento en running y entrenamiento funcional. Técnicas, consejos y ejercicios desarrollados por nuestros coaches profesionales.',
  keywords: [
    'técnica running',
    'mejora rendimiento',
    'cadencia running',
    'postura corporal',
    'respiración deportiva',
    'entrenamiento funcional',
    'pisada eficiente',
    'coaching técnico'
  ],
  openGraph: {
    title: 'Técnica de Running | ENERGIA',
    description: 'Mejora tu técnica de running con nuestros artículos especializados. Consejos profesionales para optimizar tu rendimiento.',
    images: ['/images/runner-track.webp'],
    url: 'https://energia-webapp.vercel.app/tecnica'
  },
  twitter: {
    title: 'Artículos Técnicos de Running | ENERGIA',
    description: 'Técnicas profesionales para mejorar tu running. Artículos especializados por coaches expertos.',
    images: ['/images/runner-track.webp']
  }
}

export default function TecnicaPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-team-blue/10 via-purple-team/5 to-team-orange/10">
      {/* Hero Section with Navbar */}
      <section className="relative bg-gradient-to-br from-team-blue via-team-blue-dark to-team-orange/60 pt-0 pb-24 min-h-[520px] flex flex-col overflow-hidden">
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
          {/* Nuevos círculos adicionales */}
          <div className="absolute top-8 left-48 w-16 h-16 bg-team-orange/16 rounded-full animate-pulse delay-1000"></div>
          <div className="absolute bottom-12 left-60 w-22 h-22 bg-white/14 rounded-full animate-bounce delay-500"></div>
          <div
            className="absolute top-52 left-4 w-14 h-14 bg-team-orange/12 rounded-full animate-spin"
            style={{ animationDuration: "26s" }}
          ></div>
          <div className="absolute bottom-56 left-28 w-30 h-30 bg-white/8 rounded-full animate-pulse delay-750"></div>
          <div className="absolute top-12 left-68 w-12 h-12 bg-team-orange/22 rounded-full animate-bounce delay-1400"></div>
          <div
            className="absolute bottom-16 left-52 w-26 h-26 bg-white/18 rounded-full animate-spin"
            style={{ animationDuration: "32s" }}
          ></div>
        </div>
        
        <Navbar />
        
        <div className="flex-1 flex items-center pt-4 max-w-6xl mx-auto px-4 w-full relative">
          <div className="w-full">
            <Link href="/" className="inline-flex items-center text-white hover:text-team-orange mb-8 transition-colors duration-200">
              <ArrowLeft className="w-5 h-5" />
            </Link>

            <div className="text-center text-white">
              <h1 className="text-4xl md:text-6xl font-bold mb-6">Técnica</h1>
              <p className="text-xl text-blue-100 max-w-3xl mx-auto leading-relaxed">
                Todos nuestros artículos técnicos para mejorar tu rendimiento en running y entrenamiento funcional
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Articles Section */}
      <TecnicaPageClient />
    </div>
  )
}
