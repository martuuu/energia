"use client"

import { ArrowDown } from "lucide-react"
import Navbar from "./navbar"

export default function Hero() {
  return (
    <section className="relative min-h-screen bg-gradient-to-br from-team-blue via-team-blue-dark to-team-orange/60 overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        {/* Círculos originales mejorados */}
        <div className="absolute top-20 right-32 w-32 h-32 bg-team-orange/10 rounded-full animate-pulse"></div>
        <div className="absolute top-40 right-20 w-24 h-24 bg-white/15 rounded-full animate-bounce delay-1000"></div>
        <div className="absolute bottom-32 right-1/4 w-16 h-16 bg-team-orange/20 rounded-full animate-pulse delay-500"></div>

        {/* Nuevos círculos */}
        <div
          className="absolute top-60 right-10 w-40 h-40 bg-white/8 rounded-full animate-spin"
          style={{ animationDuration: "20s" }}
        ></div>
        <div className="absolute top-80 right-40 w-20 h-20 bg-team-orange/12 rounded-full animate-bounce delay-700"></div>
        <div
          className="absolute bottom-20 right-16 w-28 h-28 bg-white/10 rounded-full animate-spin"
          style={{ animationDuration: "15s" }}
        ></div>
        <div className="absolute top-32 right-60 w-12 h-12 bg-team-orange/15 rounded-full animate-pulse delay-300"></div>
        <div
          className="absolute bottom-40 right-8 w-36 h-36 bg-white/6 rounded-full animate-spin"
          style={{ animationDuration: "25s" }}
        ></div>
        {/* Círculos adicionales nuevos */}
        <div className="absolute top-12 right-44 w-18 h-18 bg-team-orange/8 rounded-full animate-pulse delay-1200"></div>
        <div className="absolute bottom-60 right-36 w-22 h-22 bg-white/12 rounded-full animate-bounce delay-400"></div>
        <div
          className="absolute top-72 right-24 w-14 h-14 bg-team-orange/18 rounded-full animate-spin"
          style={{ animationDuration: "30s" }}
        ></div>
        <div className="absolute bottom-12 right-52 w-26 h-26 bg-white/14 rounded-full animate-pulse delay-900"></div>
        <div className="absolute top-48 right-4 w-30 h-30 bg-team-orange/6 rounded-full animate-bounce delay-1400"></div>
        <div
          className="absolute bottom-76 right-28 w-34 h-34 bg-white/4 rounded-full animate-spin"
          style={{ animationDuration: "35s" }}
        ></div>
      </div>

      <Navbar />
      
      <div className="relative max-w-6xl mx-auto px-4 py-20 flex items-center min-h-screen">
        <div className="grid md:grid-cols-2 gap-12 items-center w-full">
          {/* Left Content */}
          <div className="text-center md:text-left">
            <h1 className="text-6xl md:text-8xl font-bold text-white mb-4 tracking-tight">ENERGIA</h1>
            <p className="text-2xl md:text-3xl text-team-orange font-medium mb-8">Funcional & Running</p>
            <p className="text-xl text-blue-100 mb-8 leading-relaxed">
              Potenciá tu rendimiento con entrenamientos funcionales y técnicas de running profesionales
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <button className="bg-team-orange text-white px-8 py-4 rounded-lg font-semibold hover:bg-team-orange-light transition-colors shadow-lg">
                Comenzar Entrenamiento
              </button>
              <button className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-team-blue transition-colors">
                Ver Técnicas
              </button>
            </div>
          </div>

          {/* Right Content - Simplified */}
          <div className="relative">
            {/* Floating Elements */}
            <div className="absolute top-8 right-8 w-12 h-12 bg-white/15 rounded-full animate-pulse"></div>
            <div className="absolute bottom-8 left-8 w-8 h-8 bg-team-orange/20 rounded-full animate-bounce delay-700"></div>
            <div
              className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-20 h-20 bg-white/10 rounded-full animate-spin"
              style={{ animationDuration: "12s" }}
            ></div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ArrowDown className="w-6 h-6 text-white" />
      </div>
    </section>
  )
}
