import Link from "next/link"
import Navbar from "@/components/navbar"
import TecnicaPageClient from "@/components/tecnica-page-client"
import { ArrowLeft } from "lucide-react"
import { Metadata } from "next"

export const metadata: Metadata = {
  title: 'Técnica',
  description: 'Artículos técnicos especializados para mejorar tu rendimiento en running y entrenamiento funcional.',
}

export default function TecnicaPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-team-blue/10 via-purple-team/5 to-team-orange/10">
      {/* Hero Section with Navbar */}
      <section className="relative bg-gradient-to-br from-team-blue via-team-blue-dark to-team-orange/60 pt-0 pb-20">
        <Navbar />
        
        <div className="pt-16 max-w-6xl mx-auto px-4">
          <Link href="/eventos" className="inline-flex items-center text-white hover:text-team-orange mb-8 transition-colors duration-200">
            <ArrowLeft className="w-5 h-5" />
          </Link>

          <div className="text-center text-white">
            <h1 className="text-4xl md:text-6xl font-bold mb-4">Técnica</h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              Todos nuestros artículos técnicos para mejorar tu rendimiento en running y entrenamiento funcional
            </p>
          </div>
        </div>
      </section>

      {/* Articles Section */}
      <TecnicaPageClient />
    </div>
  )
}
