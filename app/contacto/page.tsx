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
      <section className="relative bg-gradient-to-br from-team-blue via-team-blue-dark to-team-orange/60 pt-0 pb-24 min-h-[520px] flex flex-col">
        <Navbar />
        
        <div className="flex-1 flex items-center pt-16 max-w-6xl mx-auto px-4 w-full">
          <div className="w-full">
            <Link href="/" className="inline-flex items-center text-white hover:text-team-orange mb-8 transition-colors duration-200">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Volver al inicio
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
