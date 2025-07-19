import Navbar from "@/components/navbar"
import Link from "next/link"
import { ArrowLeft, Clock, MapPin } from "lucide-react"
import { Metadata } from "next"

export const metadata: Metadata = {
  title: 'Horarios',
  description: 'Horarios de clases de running y entrenamiento funcional en Buenos Aires. Encuentra el horario perfecto para entrenar.',
}

const horarios = [
  {
    dia: "Lunes",
    clases: [
      { hora: "07:00", actividad: "Running Técnico", instructor: "Natalia", lugar: "Parque Centenario" },
      { hora: "19:00", actividad: "Funcional", instructor: "Tomas", lugar: "Gimnasio ENERGIA" },
    ],
  },
  {
    dia: "Martes",
    clases: [
      { hora: "07:30", actividad: "Entrenamiento Funcional", instructor: "Agustin", lugar: "Gimnasio ENERGIA" },
      { hora: "18:30", actividad: "Running Grupal", instructor: "Natalia", lugar: "Costanera Sur" },
    ],
  },
  {
    dia: "Miércoles",
    clases: [
      { hora: "07:00", actividad: "Running Técnico", instructor: "Natalia", lugar: "Parque Centenario" },
      { hora: "19:00", actividad: "Funcional Avanzado", instructor: "Tomas", lugar: "Gimnasio ENERGIA" },
    ],
  },
  {
    dia: "Jueves",
    clases: [
      { hora: "07:30", actividad: "Fuerza Funcional", instructor: "Agustin", lugar: "Gimnasio ENERGIA" },
      { hora: "18:30", actividad: "Running Intervalos", instructor: "Natalia", lugar: "Pista Atletismo" },
    ],
  },
  {
    dia: "Viernes",
    clases: [
      { hora: "07:00", actividad: "Running Técnico", instructor: "Natalia", lugar: "Parque Centenario" },
      { hora: "19:00", actividad: "Funcional", instructor: "Tomas", lugar: "Gimnasio ENERGIA" },
    ],
  },
  {
    dia: "Sábado",
    clases: [
      { hora: "08:00", actividad: "Running Largo", instructor: "Natalia", lugar: "Costanera Norte" },
      { hora: "10:00", actividad: "Funcional Grupal", instructor: "Agustin", lugar: "Parque Tres de Febrero" },
    ],
  },
  {
    dia: "Domingo",
    clases: [{ hora: "09:00", actividad: "Recuperación Activa", instructor: "Tomas", lugar: "Parque Centenario" }],
  },
]

export default function HorariosPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-team-blue/10 via-purple-team/5 to-team-orange/10">
      {/* Hero Section with Navbar */}
      <section className="relative bg-gradient-to-br from-team-blue via-team-blue-dark to-team-orange/60 pt-0 pb-24 min-h-[520px] flex flex-col overflow-hidden">
        {/* Animated Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-28 right-24 w-30 h-30 bg-team-orange/10 rounded-full animate-pulse delay-300"></div>
          <div className="absolute top-16 right-48 w-22 h-22 bg-white/15 rounded-full animate-bounce delay-1000"></div>
          <div className="absolute bottom-36 right-32 w-26 h-26 bg-team-orange/20 rounded-full animate-pulse delay-500"></div>
          <div
            className="absolute top-44 right-12 w-34 h-34 bg-white/8 rounded-full animate-spin"
            style={{ animationDuration: "19s" }}
          ></div>
          <div className="absolute bottom-20 right-52 w-18 h-18 bg-team-orange/12 rounded-full animate-bounce delay-700"></div>
          <div
            className="absolute top-60 right-28 w-40 h-40 bg-white/10 rounded-full animate-spin"
            style={{ animationDuration: "17s" }}
          ></div>
          {/* Nuevos círculos adicionales */}
          <div className="absolute top-8 right-64 w-16 h-16 bg-team-orange/14 rounded-full animate-pulse delay-850"></div>
          <div className="absolute bottom-52 right-16 w-24 h-24 bg-white/12 rounded-full animate-bounce delay-450"></div>
          <div
            className="absolute top-52 right-44 w-20 h-20 bg-team-orange/8 rounded-full animate-spin"
            style={{ animationDuration: "27s" }}
          ></div>
          <div className="absolute bottom-8 right-36 w-14 h-14 bg-white/16 rounded-full animate-pulse delay-1150"></div>
          <div className="absolute top-24 right-8 w-28 h-28 bg-team-orange/18 rounded-full animate-bounce delay-1350"></div>
          <div
            className="absolute bottom-44 right-60 w-32 h-32 bg-white/6 rounded-full animate-spin"
            style={{ animationDuration: "23s" }}
          ></div>
        </div>
        
        <Navbar />
        
        <div className="flex-1 flex items-center pt-4 max-w-6xl mx-auto px-4 w-full relative">
          <div className="w-full">
            <Link href="/" className="inline-flex items-center text-white hover:text-team-orange mb-8 transition-colors duration-200">
              <ArrowLeft className="w-5 h-5" />
            </Link>

            <div className="text-center text-white">
              <h1 className="text-4xl md:text-6xl font-bold mb-6">Horarios</h1>
              <p className="text-xl text-blue-100 max-w-3xl mx-auto leading-relaxed">
                Encontrá el horario perfecto para entrenar con nosotros
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Schedule Table */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-4">
          <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
            {/* Header */}
            <div className="bg-team-blue p-6">
              <h2 className="text-2xl font-bold text-white text-center">Cronograma Semanal</h2>
            </div>

            {/* Schedule Grid */}
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="bg-gray-50">
                    <th className="px-6 py-4 text-left font-semibold text-gray-900 border-b">Día</th>
                    <th className="px-6 py-4 text-left font-semibold text-gray-900 border-b">Horario</th>
                    <th className="px-6 py-4 text-left font-semibold text-gray-900 border-b">Actividad</th>
                    <th className="px-6 py-4 text-left font-semibold text-gray-900 border-b">Instructor</th>
                    <th className="px-6 py-4 text-left font-semibold text-gray-900 border-b">Lugar</th>
                  </tr>
                </thead>
                <tbody>
                  {horarios.map((dia, diaIndex) =>
                    dia.clases.map((clase, claseIndex) => (
                      <tr
                        key={`${diaIndex}-${claseIndex}`}
                        className={`hover:bg-gray-50 transition-colors ${
                          diaIndex % 2 === 0 ? "bg-white" : "bg-gray-25"
                        }`}
                      >
                        <td className="px-6 py-4 border-b">
                          {claseIndex === 0 && <div className="font-semibold text-team-blue text-lg">{dia.dia}</div>}
                        </td>
                        <td className="px-6 py-4 border-b">
                          <div className="flex items-center text-gray-700">
                            <Clock className="w-4 h-4 mr-2 text-team-orange" />
                            <span className="font-medium">{clase.hora}</span>
                          </div>
                        </td>
                        <td className="px-6 py-4 border-b">
                          <div className="font-medium text-gray-900">{clase.actividad}</div>
                        </td>
                        <td className="px-6 py-4 border-b">
                          <div className="text-team-orange font-medium">{clase.instructor}</div>
                        </td>
                        <td className="px-6 py-4 border-b">
                          <div className="flex items-center text-gray-600">
                            <MapPin className="w-4 h-4 mr-2 text-team-orange" />
                            <span className="text-sm">{clase.lugar}</span>
                          </div>
                        </td>
                      </tr>
                    )),
                  )}
                </tbody>
              </table>
            </div>

            {/* Footer */}
            <div className="bg-gray-50 p-6">
              <div className="text-center">
                <p className="text-gray-600 mb-4">¿Tenés dudas sobre los horarios o querés reservar tu lugar?</p>
                <Link
                  href="/#contacto"
                  className="inline-flex items-center bg-team-orange text-white px-6 py-3 rounded-lg hover:bg-team-orange-light transition-colors font-medium"
                >
                  Contactanos
                </Link>
              </div>
            </div>
          </div>

          {/* Additional Info */}
          <div className="grid md:grid-cols-3 gap-6 mt-12">
            <div className="bg-white rounded-xl p-6 shadow-md text-center">
              <div className="w-12 h-12 bg-team-blue/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Clock className="w-6 h-6 text-team-blue" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Puntualidad</h3>
              <p className="text-gray-600 text-sm">Te recomendamos llegar 10 minutos antes para prepararte adecuadamente</p>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-md text-center">
              <div className="w-12 h-12 bg-team-orange/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <MapPin className="w-6 h-6 text-team-orange" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Ubicaciones</h3>
              <p className="text-gray-600 text-sm">
                Entrenamos en los mejores espacios de Bahia Blanca para tu comodidad
              </p>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-md text-center">
              <div className="w-12 h-12 bg-purple-team/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-purple-team font-bold text-xl">👥</span>
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Grupos Reducidos</h3>
              <p className="text-gray-600 text-sm">Máximo 20 personas por clase para atención personalizada</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
