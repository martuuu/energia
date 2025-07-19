import Link from "next/link"
import { ArrowLeft } from "lucide-react"

export default function NotFound() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-team-blue/10 via-purple-team/5 to-team-orange/10 flex items-center justify-center">
      <div className="text-center max-w-md mx-auto px-4">
        <div className="mb-8">
          <img 
            src="/images/logo-energia.png" 
            alt="ENERGIA Logo" 
            className="w-16 h-16 mx-auto mb-4"
          />
        </div>
        
        <h1 className="text-3xl font-bold text-gray-900 mb-4">
          Artículo no encontrado
        </h1>
        
        <p className="text-gray-600 mb-8">
          Lo sentimos, el artículo técnico que buscas no existe o ha sido movido.
        </p>
        
        <div className="space-y-4">
          <Link 
            href="/tecnica" 
            className="inline-flex items-center justify-center w-full bg-team-orange text-white py-3 px-6 rounded-lg hover:bg-team-blue transition-colors font-medium shadow-lg"
          >
            <ArrowLeft className="w-5 h-5 mr-2" />
            Ver todos los artículos técnicos
          </Link>
          
          <Link 
            href="/" 
            className="inline-flex items-center justify-center w-full bg-white text-team-blue border border-team-blue py-3 px-6 rounded-lg hover:bg-team-blue hover:text-white transition-colors font-medium"
          >
            Volver al inicio
          </Link>
        </div>
      </div>
    </div>
  )
}
