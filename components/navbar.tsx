"use client"

import { useState } from "react"
import Link from "next/link"
import { Menu, X } from "lucide-react"

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="relative z-50">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex justify-center items-center py-2">
          {/* Desktop Menu (right side) */}
          <div className="hidden md:flex space-x-8">
            <Link href="/" className="nav-link text-white hover:text-team-orange transition-all duration-200 font-bold text-lg font-sans tracking-wide">
              Inicio
            </Link>
            <Link href="/tecnica" className="nav-link text-white hover:text-team-orange transition-all duration-200 font-bold text-lg font-sans tracking-wide">
              Técnica
            </Link>
            <Link href="/eventos" className="nav-link text-white hover:text-team-orange transition-all duration-200 font-bold text-lg font-sans tracking-wide">
              Eventos
            </Link>
            <Link href="/horarios" className="nav-link text-white hover:text-team-orange transition-all duration-200 font-bold text-lg font-sans tracking-wide">
              Horarios
            </Link>
            <Link href="/contacto" className="nav-link text-white hover:text-team-orange transition-all duration-200 font-bold text-lg font-sans tracking-wide">
              Contacto
            </Link>
          </div>

          {/* Mobile menu button (right side) */}
          <div className="md:hidden">
            <button 
              onClick={() => setIsOpen(!isOpen)} 
              className="text-white hover:text-team-orange transition-colors duration-200 p-2"
              aria-label="Toggle menu"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div className={`md:hidden overflow-hidden transition-all duration-500 ease-out ${
          isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        }`}>
          <div className="flex flex-col space-y-3 items-center py-4">
              <Link
                href="/"
                className="nav-link text-white hover:text-team-orange transition-colors duration-200 font-bold text-lg font-sans tracking-wide py-2 px-4 rounded-lg"
                onClick={() => setIsOpen(false)}
              >
                Inicio
              </Link>
              <Link
                href="/tecnica"
                className="nav-link text-white hover:text-team-orange transition-colors duration-200 font-bold text-lg font-sans tracking-wide py-2 px-4 rounded-lg"
                onClick={() => setIsOpen(false)}
              >
                Técnica
              </Link>
              <Link
                href="/horarios"
                className="nav-link text-white hover:text-team-orange transition-colors duration-200 font-bold text-lg font-sans tracking-wide py-2 px-4 rounded-lg"
                onClick={() => setIsOpen(false)}
              >
                Horarios
              </Link>
              <Link
                href="/eventos"
                className="nav-link text-white hover:text-team-orange transition-colors duration-200 font-bold text-lg font-sans tracking-wide py-2 px-4 rounded-lg"
                onClick={() => setIsOpen(false)}
              >
                Eventos
              </Link>
              <Link
                href="/contacto"
                className="nav-link text-white hover:text-team-orange transition-colors duration-200 font-bold text-lg font-sans tracking-wide py-2 px-4 rounded-lg"
                onClick={() => setIsOpen(false)}
              >
                Contacto
              </Link>
            </div>
        </div>
      </div>
    </nav>
  )
}
