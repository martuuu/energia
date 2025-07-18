"use client"

import { useState } from "react"
import { Phone, Instagram, Youtube, Mail } from "lucide-react"

// WhatsApp Icon component
const WhatsAppIcon = ({ className }: { className?: string }) => (
  <svg
    viewBox="0 0 24 24"
    className={className}
    fill="currentColor"
  >
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"/>
  </svg>
)

const coaches = [
  {
    name: "Tomas",
    specialty: "Entrenamiento Funcional",
    image: "/images/tom.png",
    whatsapp: "+54 9 11 1234-5678",
    instagram: "@tomas_energia",
  },
  {
    name: "Natalia",
    specialty: "Técnica de Running",
    image: "/images/nate.png",
    whatsapp: "+54 9 11 2345-6789",
    instagram: "@natalia_running",
  },
  {
    name: "Agustin",
    specialty: "Preparación Física",
    image: "/images/agus.png",
    whatsapp: "+54 9 11 3456-7890",
    instagram: "@agustin_fitness",
  },
]

export default function ContactoPageClient() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Aquí iría la lógica para enviar el formulario
    console.log('Form submitted:', formData)
    // Reset form
    setFormData({ name: '', email: '', message: '' })
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }))
  }

  return (
    <section className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        {/* Coaches Section */}
        <div className="mb-20">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Nuestro Equipo</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Conocé a nuestros profesionales especializados en running y fitness funcional
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {coaches.map((coach, index) => (
              <div
                key={coach.name}
                className="bg-white rounded-xl p-6 text-center shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100"
                style={{
                  animationDelay: `${index * 150}ms`
                }}
              >
                <div className="relative mb-6">
                  <img
                    src={coach.image || "/placeholder.svg"}
                    alt={coach.name}
                    className="w-32 h-32 rounded-full mx-auto object-cover shadow-md"
                  />
                </div>
                
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{coach.name}</h3>
                <p className="text-team-orange font-medium mb-6">{coach.specialty}</p>

                <div className="flex justify-center space-x-4">
                  <a
                    href={`https://wa.me/${coach.whatsapp.replace(/\s/g, "")}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group bg-green-500 text-white p-3 rounded-full hover:bg-green-600 transition-all duration-300 shadow-md hover:shadow-lg hover:scale-110"
                  >
                    <WhatsAppIcon className="w-5 h-5 group-hover:scale-110 transition-transform" />
                  </a>
                  <a
                    href={`https://instagram.com/${coach.instagram.replace("@", "")}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group bg-gradient-to-r from-purple-500 to-pink-500 text-white p-3 rounded-full hover:from-purple-600 hover:to-pink-600 transition-all duration-300 shadow-md hover:shadow-lg hover:scale-110"
                  >
                    <Instagram className="w-5 h-5 group-hover:scale-110 transition-transform" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Contact Form Section */}
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Form */}
          <div className="bg-white rounded-xl p-8 shadow-lg border border-gray-100">
            <h3 className="text-2xl font-semibold text-gray-900 mb-6">Envianos un mensaje</h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                    Nombre
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-team-orange focus:border-transparent transition-all duration-300"
                    placeholder="Tu nombre"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-team-orange focus:border-transparent transition-all duration-300"
                    placeholder="tu@email.com"
                  />
                </div>
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                  Mensaje
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-team-orange focus:border-transparent transition-all duration-300"
                  placeholder="Contanos en qué podemos ayudarte..."
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-team-orange text-white py-3 px-6 rounded-lg hover:bg-team-orange-light transition-all duration-300 font-medium shadow-md hover:shadow-lg hover:scale-105"
              >
                Enviar mensaje
              </button>
            </form>
          </div>

          {/* Contact Info & Social */}
          <div className="space-y-8">
            {/* Contact Info */}
            <div className="bg-gradient-to-br from-team-blue via-team-blue-dark to-team-orange/60 rounded-xl p-8 text-white">
              <h3 className="text-2xl font-semibold mb-6">Información de contacto</h3>
              <div className="space-y-4">
                <div className="flex items-center">
                  <Phone className="w-5 h-5 mr-3 text-team-orange" />
                  <span>+54 9 11 1234-5678</span>
                </div>
                <div className="flex items-center">
                  <Mail className="w-5 h-5 mr-3 text-team-orange" />
                  <span>info@energia.com</span>
                </div>
              </div>
            </div>

            {/* Social Media */}
            <div className="bg-white rounded-xl p-8 shadow-lg border border-gray-100">
              <h3 className="text-xl font-semibold text-gray-900 mb-6">Seguinos en nuestras redes</h3>
              <div className="flex space-x-4">
                <a
                  href="https://youtube.com/@energia"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 bg-red-600 text-white p-4 rounded-lg hover:bg-red-700 transition-all duration-300 text-center shadow-md hover:shadow-lg hover:scale-105"
                >
                  <Youtube className="w-6 h-6 mx-auto mb-2" />
                  <span className="text-sm font-medium">YouTube</span>
                </a>
                <a
                  href="https://instagram.com/energia"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 bg-gradient-to-r from-purple-500 to-pink-500 text-white p-4 rounded-lg hover:from-purple-600 hover:to-pink-600 transition-all duration-300 text-center shadow-md hover:shadow-lg hover:scale-105"
                >
                  <Instagram className="w-6 h-6 mx-auto mb-2" />
                  <span className="text-sm font-medium">Instagram</span>
                </a>
              </div>
            </div>

            {/* CTA */}
            <div className="bg-gradient-to-r from-team-orange to-team-blue rounded-xl p-8 text-white text-center">
              <h3 className="text-xl font-semibold mb-3">¿Listo para empezar?</h3>
              <p className="text-blue-100 mb-4">
                Únete a nuestra comunidad de atletas y transforma tu vida
              </p>
              <div className="flex space-x-3">
                <a
                  href="https://wa.me/5491112345678"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 bg-white text-team-orange py-2 px-4 rounded-lg hover:bg-gray-100 transition-all duration-300 font-medium shadow-md hover:shadow-lg"
                >
                  Consultar
                </a>
                <a
                  href="#"
                  className="flex-1 bg-white/20 text-white py-2 px-4 rounded-lg hover:bg-white/30 transition-all duration-300 font-medium border border-white/30"
                >
                  Ver horarios
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
