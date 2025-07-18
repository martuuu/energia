import Link from "next/link"

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="text-center">
        <h1 className="text-3xl font-bold text-gray-900 mb-4">Ejercicio no encontrado</h1>
        <p className="text-gray-600 mb-6">El ejercicio que buscas no existe o ha sido movido.</p>
        <Link
          href="/"
          className="inline-flex items-center justify-center bg-team-orange text-white py-3 px-6 rounded-lg hover:bg-team-blue transition-colors font-medium shadow-lg"
        >
          Volver al inicio
        </Link>
      </div>
    </div>
  )
}
