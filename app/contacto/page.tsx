import Link from "next/link"
import Navbar from "@/components/navbar"
import ContactoPageClient from "@/components/contacto-page-client"
import { ArrowLeft } from "lucide-react"
import { Metadata } from "next"

export const metadata: Metadata = {
  title: 'Contacto',
  description: 'Conectate con nuestro equipo de profesionales de ENERGIA. Entrenadores especializados en running y fitness funcional.',
}

export default function ContactoPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-team-blue/10 via-purple-team/5 to-team-orange/10">
      {/* Hero Section with Navbar */}
      <section className="relative bg-gradient-to-br from-team-blue via-team-blue-dark to-team-orange/60 pt-0 pb-24 min-h-[520px] flex flex-col overflow-hidden">
        {/* Animated Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-16 left-20 w-28 h-28 bg-team-orange/10 rounded-full animate-pulse"></div>
          <div className="absolute top-32 left-40 w-20 h-20 bg-white/15 rounded-full animate-bounce delay-500"></div>
          <div className="absolute bottom-40 left-16 w-16 h-16 bg-team-orange/20 rounded-full animate-pulse delay-700"></div>
          <div
            className="absolute top-20 left-60 w-36 h-36 bg-white/8 rounded-full animate-spin"
            style={{ animationDuration: "18s" }}
          ></div>
          <div className="absolute bottom-20 left-32 w-24 h-24 bg-team-orange/12 rounded-full animate-bounce delay-300"></div>
          <div
            className="absolute top-60 left-10 w-32 h-32 bg-white/10 rounded-full animate-spin"
            style={{ animationDuration: "22s" }}
          ></div>
          {/* Nuevos círculos adicionales */}
          <div className="absolute top-12 left-80 w-14 h-14 bg-team-orange/8 rounded-full animate-pulse delay-1000"></div>
          <div className="absolute bottom-60 left-48 w-18 h-18 bg-white/12 rounded-full animate-bounce delay-400"></div>
          <div
            className="absolute top-40 left-4 w-22 h-22 bg-team-orange/15 rounded-full animate-spin"
            style={{ animationDuration: "25s" }}
          ></div>
          <div className="absolute bottom-12 left-56 w-12 h-12 bg-white/18 rounded-full animate-pulse delay-800"></div>
          <div className="absolute top-72 left-24 w-26 h-26 bg-team-orange/6 rounded-full animate-bounce delay-1200"></div>
          <div
            className="absolute bottom-32 left-68 w-30 h-30 bg-white/5 rounded-full animate-spin"
            style={{ animationDuration: "30s" }}
          ></div>
        </div>
        
        <Navbar />
        
        <div className="flex-1 flex items-center pt-4 max-w-6xl mx-auto px-4 w-full relative">
          <div className="w-full">
            <Link href="/" className="inline-flex items-center text-white hover:text-team-orange mb-8 transition-colors duration-200">
              <ArrowLeft className="w-5 h-5" />
            </Link>

            <div className="text-center text-white">
              <h1 className="text-4xl md:text-6xl font-bold mb-6">Contacto</h1>
              <p className="text-xl text-blue-100 max-w-3xl mx-auto leading-relaxed">
                Conectate con nuestro equipo de profesionales especializados en running y fitness funcional
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <ContactoPageClient />
    </div>
  )
}
