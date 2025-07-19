import Link from "next/link"
import Navbar from "@/components/navbar"
import EventosPageClient from "@/components/eventos-page-client"
import { ArrowLeft } from "lucide-react"
import { Metadata } from "next"

export const metadata: Metadata = {
  title: 'Eventos',
  description: 'Próximos eventos de running y entrenamientos. Únete a nuestras carreras y competencias en Buenos Aires.',
}

export default function EventosPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-team-blue/10 via-purple-team/5 to-team-orange/10">
      {/* Hero Section with Navbar */}
      <section className="relative bg-gradient-to-br from-team-blue via-team-blue-dark to-team-orange/60 pt-0 pb-24 min-h-[520px] flex flex-col overflow-hidden">
        {/* Animated Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-24 right-16 w-32 h-32 bg-team-orange/10 rounded-full animate-pulse delay-200"></div>
          <div className="absolute top-40 right-32 w-24 h-24 bg-white/15 rounded-full animate-bounce delay-800"></div>
          <div className="absolute bottom-32 right-20 w-20 h-20 bg-team-orange/20 rounded-full animate-pulse delay-400"></div>
          <div
            className="absolute top-12 right-48 w-40 h-40 bg-white/8 rounded-full animate-spin"
            style={{ animationDuration: "20s" }}
          ></div>
          <div className="absolute bottom-16 right-40 w-28 h-28 bg-team-orange/12 rounded-full animate-bounce delay-600"></div>
          <div
            className="absolute top-56 right-8 w-16 h-16 bg-white/10 rounded-full animate-spin"
            style={{ animationDuration: "16s" }}
          ></div>
          {/* Nuevos círculos adicionales */}
          <div className="absolute top-8 right-60 w-18 h-18 bg-team-orange/14 rounded-full animate-pulse delay-900"></div>
          <div className="absolute bottom-48 right-12 w-14 h-14 bg-white/20 rounded-full animate-bounce delay-350"></div>
          <div
            className="absolute top-64 right-36 w-26 h-26 bg-team-orange/8 rounded-full animate-spin"
            style={{ animationDuration: "28s" }}
          ></div>
          <div className="absolute bottom-8 right-56 w-22 h-22 bg-white/6 rounded-full animate-pulse delay-1100"></div>
          <div className="absolute top-36 right-4 w-12 h-12 bg-team-orange/18 rounded-full animate-bounce delay-1300"></div>
          <div
            className="absolute bottom-60 right-28 w-34 h-34 bg-white/12 rounded-full animate-spin"
            style={{ animationDuration: "24s" }}
          ></div>
        </div>
        
        <Navbar />
        
        <div className="flex-1 flex items-center pt-4 max-w-6xl mx-auto px-4 w-full relative">
          <div className="w-full">
            <Link href="/" className="inline-flex items-center text-white hover:text-team-orange mb-8 transition-colors duration-200">
              <ArrowLeft className="w-5 h-5" />
            </Link>

            <div className="text-center text-white">
              <h1 className="text-4xl md:text-6xl font-bold mb-6">Eventos</h1>
              <p className="text-xl text-blue-100 max-w-3xl mx-auto leading-relaxed">
                Próximos eventos de running y entrenamientos. Únete a nuestras carreras y competencias
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Events Section */}
      <EventosPageClient />
    </div>
  )
}
