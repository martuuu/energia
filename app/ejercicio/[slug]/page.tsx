"use client"

import Link from "next/link"
import Navbar from "@/components/navbar"
import { ArrowLeft, Clock, User, Share2, Facebook, Twitter, Linkedin } from "lucide-react"
import { useState } from "react"

const exerciseData: Record<string, any> = {
  "cadencia-running": {
    title: "Técnica de Cadencia",
    description: "Aprende a mantener una cadencia óptima de 180 pasos por minuto para mejorar tu eficiencia.",
    readTime: "5 min",
    author: "Coach María González",
    videoUrl: "https://www.youtube.com/embed/2yxJ60zNavI",
    content: `
# ¿Qué es la cadencia en running?

La cadencia se refiere al número de pasos que das por minuto mientras corres. La cadencia óptima para la mayoría de corredores está entre **170-180 pasos por minuto**.

## ¿Por qué es importante?

Una cadencia adecuada te ayuda a:

- **Reducir el riesgo de lesiones** al disminuir el impacto en cada pisada
- **Mejorar la eficiencia** energética de tu carrera
- **Mantener una forma más consistente** durante distancias largas
- **Aumentar la velocidad** sin incrementar el esfuerzo

## Cómo medir tu cadencia actual

1. **Cuenta tus pasos** durante 30 segundos y multiplica por 2
2. **Usa una app** como Strava o Garmin Connect
3. **Escucha el ritmo** de tus pies al tocar el suelo

## Ejercicios para mejorar la cadencia

### Ejercicio 1: Carrera en el lugar
- Corre en el mismo lugar durante 30 segundos
- Cuenta tus pasos y ajusta el ritmo
- Repite 5 veces con descansos de 30 segundos

### Ejercicio 2: Metrónomo
- Usa una app de metrónomo a 180 BPM
- Sincroniza tus pasos con el ritmo
- Comienza con intervalos cortos de 1-2 minutos

### Ejercicio 3: Pasos cortos y rápidos
- Reduce la longitud de tu zancada
- Aumenta la frecuencia de pasos
- Mantén el mismo esfuerzo percibido

## Progresión recomendada

**Semana 1-2:** Practica la medición y conciencia de tu cadencia actual

**Semana 3-4:** Introduce ejercicios específicos 2-3 veces por semana

**Semana 5-8:** Integra la nueva cadencia en carreras fáciles

**Semana 9+:** Aplica en entrenamientos de mayor intensidad

## Errores comunes

❌ **Forzar demasiado rápido el cambio** - puede causar fatiga excesiva

❌ **Ignorar la longitud de zancada** - debe acortarse naturalmente

❌ **Solo enfocarse en los números** - la comodidad es clave

✅ **Cambio gradual y progresivo**

✅ **Escuchar a tu cuerpo**

✅ **Practicar consistentemente**

## Conclusión

La cadencia óptima es una herramienta poderosa para mejorar tu running. Recuerda que cada corredor es único, y lo más importante es encontrar el ritmo que funcione mejor para ti mientras mantienes una forma eficiente y cómoda.

**¡Practica estos ejercicios y verás mejoras en pocas semanas!**
    `,
  },
  "postura-corporal": {
    title: "Postura Corporal Correcta",
    description: "Domina la postura ideal para correr: alineación, inclinación y posición de brazos.",
    readTime: "7 min",
    author: "Coach Carlos Ruiz",
    videoUrl: "https://www.youtube.com/embed/2yxJ60zNavI",
    content: `
# La Importancia de la Postura en el Running

Una postura correcta es fundamental para correr de manera eficiente y prevenir lesiones. Te enseñamos los elementos clave de una buena postura.

## Elementos de la postura correcta

### 1. Posición de la cabeza
- **Mirada al frente**, no hacia abajo
- **Barbilla paralela** al suelo
- **Cuello relajado** y alineado con la columna

### 2. Posición de los hombros
- **Relajados y bajos**, evita subirlos hacia las orejas
- **Ligeramente hacia atrás** para abrir el pecho
- **Movimiento natural** que acompañe el braceo

### 3. Posición del torso
- **Ligera inclinación hacia adelante** desde los tobillos
- **Core activado** para mantener estabilidad
- **Pecho abierto** para facilitar la respiración

## Ejercicios para mejorar la postura

### Ejercicio 1: Pared de alineación
- Párate contra una pared
- Toca con cabeza, hombros y glúteos
- Memoriza esta sensación
- Practica caminar manteniendo la alineación

### Ejercicio 2: Inclinación controlada
- Párate derecho con pies juntos
- Inclínate hacia adelante desde los tobillos
- Mantén el cuerpo como una línea recta
- Siente el peso en la parte delantera de los pies

### Ejercicio 3: Braceo estático
- Posición de carrera en el lugar
- Practica el movimiento de brazos
- Codos a 90 grados
- Movimiento hacia adelante y atrás, no cruzado

## Errores posturales comunes

❌ **Correr encorvado** - reduce la capacidad pulmonar

❌ **Inclinar demasiado hacia adelante** - sobrecarga las piernas

❌ **Tensión en hombros** - desperdicia energía

❌ **Mirar constantemente hacia abajo** - desalinea la columna

## Beneficios de una buena postura

✅ **Mayor eficiencia** respiratoria

✅ **Reducción del gasto** energético

✅ **Menor riesgo** de lesiones

✅ **Mejor rendimiento** general

## Cómo practicar

1. **Ejercicios de fortalecimiento** del core 3 veces por semana
2. **Estiramientos** de pecho y flexores de cadera
3. **Conciencia corporal** durante las carreras fáciles
4. **Video análisis** para revisar tu forma

La postura correcta se desarrolla con práctica constante. ¡Sé paciente y consistente!
    `,
  },
  "respiracion-ritmica": {
    title: "Respiración Rítmica",
    description: "Técnicas de respiración para mantener el oxígeno óptimo durante la carrera.",
    readTime: "4 min",
    author: "Coach Ana Martínez",
    videoUrl: "https://www.youtube.com/embed/2yxJ60zNavI",
    content: `
# Respiración Rítmica para Runners

La respiración correcta es fundamental para mantener el rendimiento durante la carrera. Aprende las técnicas más efectivas.

## Patrones de respiración básicos

### Respiración 3:2
- **3 pasos inspirando** - 2 pasos espirando
- Ideal para ritmos moderados
- Permite distribución equilibrada del impacto

### Respiración 2:1
- **2 pasos inspirando** - 1 paso espirando
- Para ritmos más intensos
- Aumenta la oxigenación

## Técnicas de práctica

### 1. Respiración diafragmática
- Coloca una mano en el pecho, otra en el abdomen
- El abdomen debe expandirse más que el pecho
- Practica en reposo antes de correr

### 2. Respiración nasal vs bucal
- **Nasal**: Filtra y calienta el aire
- **Bucal**: Mayor volumen de aire
- **Combinada**: Inspirar nasal, espirar bucal

### 3. Sincronización con pasos
- Cuenta tus pasos mentalmente
- Mantén el patrón constante
- Ajusta según la intensidad

## Beneficios de la respiración rítmica

✅ **Mejor oxigenación** muscular

✅ **Reducción de la fatiga** respiratoria

✅ **Mayor eficiencia** energética

✅ **Control del ritmo** cardíaco

## Errores comunes

❌ **Respiración superficial** - solo usando el pecho

❌ **Contener la respiración** - especialmente en subidas

❌ **Respiración irregular** - sin patrón establecido

❌ **Tensión en el cuello** - dificultando el flujo de aire

## Ejercicios de entrenamiento

### Ejercicio 1: Respiración en reposo
- 5 minutos de respiración diafragmática
- 4 segundos inspirando, 4 espirando
- Progresa a 6-8 segundos

### Ejercicio 2: Caminata rítmica
- Camina aplicando patrón 3:2
- Mantén por 10 minutos
- Aumenta la velocidad gradualmente

### Ejercicio 3: Intervalos de respiración
- Alterna entre respiración nasal y bucal
- 2 minutos cada una
- Durante carrera suave

La respiración eficiente se desarrolla con práctica constante. ¡Integra estos ejercicios en tu rutina!
    `,
  },
  "pisada-eficiente": {
    title: "Pisada Eficiente",
    description: "Cómo aterrizar correctamente para reducir el impacto y mejorar la propulsión.",
    readTime: "6 min",
    author: "Coach Roberto Silva",
    videoUrl: "https://www.youtube.com/embed/2yxJ60zNavI",
    content: `
# Pisada Eficiente en el Running

La forma en que tu pie toca el suelo determina la eficiencia de tu carrera y el riesgo de lesiones. Aprende la técnica correcta.

## Tipos de pisada

### Pisada de antepié
- **Contacto inicial** con la parte delantera del pie
- **Ventajas**: Mejor propulsión, menor impacto
- **Desventajas**: Mayor demanda en gemelos

### Pisada de mediopié
- **Contacto** con la parte media del pie
- **Equilibrio** entre impacto y propulsión
- **Recomendada** para la mayoría de corredores

### Pisada de talón
- **Contacto inicial** con el talón
- **Común** en corredores principiantes
- **Puede causar** mayor impacto articular

## Técnica de pisada correcta

### 1. Aterrizaje
- **Pie bajo el centro de gravedad**
- **Contacto suave** y controlado
- **Evitar** aterrizaje muy adelantado

### 2. Apoyo
- **Distribución uniforme** del peso
- **Activación** del arco plantar
- **Estabilización** del tobillo

### 3. Propulsión
- **Empuje** con el antepié
- **Extensión** completa del tobillo
- **Transición** fluida al siguiente paso

## Ejercicios para mejorar la pisada

### Ejercicio 1: Saltos en el lugar
- Saltos suaves sobre la punta de los pies
- 30 segundos x 3 series
- Enfócate en el aterrizaje silencioso

### Ejercicio 2: Carrera descalza
- Superficie suave (césped o arena)
- Distancias cortas (100-200m)
- Permite sentir la pisada natural

### Ejercicio 3: Drill de pisada
- Carrera en el lugar levantando rodillas
- Contacto con antepié
- 30 segundos x 5 series

## Señales de pisada ineficiente

❌ **Sonido fuerte** al aterrizar

❌ **Dolor en espinillas** o rodillas

❌ **Fatiga excesiva** en gemelos

❌ **Zancada muy larga** con aterrizaje adelantado

## Beneficios de la pisada eficiente

✅ **Menor impacto** articular

✅ **Mejor propulsión** y velocidad

✅ **Reducción** del riesgo de lesiones

✅ **Mayor eficiencia** energética

## Transición gradual

### Semana 1-2: Conciencia
- Observa tu pisada actual
- Practica ejercicios básicos
- Carrera suave en superficie blanda

### Semana 3-4: Práctica
- Integra ejercicios en el calentamiento
- Aplica técnica en distancias cortas
- Aumenta gradualmente

### Semana 5-8: Integración
- Técnica en carreras regulares
- Monitorea sensaciones
- Ajusta según necesidades

La pisada eficiente es clave para un running exitoso. ¡Practica con paciencia y constancia!
    `,
  },
  "calentamiento-dinamico": {
    title: "Calentamiento Dinámico",
    description: "Rutina de ejercicios de activación antes de cada entrenamiento o competencia.",
    readTime: "8 min",
    author: "Coach Laura Herrera",
    videoUrl: "https://www.youtube.com/embed/2yxJ60zNavI",
    content: `
# Calentamiento Dinámico para Runners

Un calentamiento adecuado prepara tu cuerpo para el ejercicio, reduce el riesgo de lesiones y mejora el rendimiento.

## Importancia del calentamiento

### Beneficios fisiológicos
- **Aumento** de la temperatura corporal
- **Mejora** de la circulación sanguínea
- **Preparación** del sistema nervioso
- **Activación** de la cadena cinética

### Beneficios para el rendimiento
- **Mayor rango** de movimiento
- **Mejor coordinación** neuromuscular
- **Preparación mental** para el ejercicio
- **Reducción** del tiempo de reacción

## Rutina de calentamiento completa

### Fase 1: Activación general (5 minutos)

#### Marcha activa
- **2 minutos** de caminar rápido
- Movimiento natural de brazos
- Aumenta gradualmente el ritmo

#### Trote suave
- **3 minutos** de trote muy suave
- Ritmo conversacional
- Enfócate en la técnica

### Fase 2: Movilidad articular (5 minutos)

#### Círculos de brazos
- **10 repeticiones** hacia adelante
- **10 repeticiones** hacia atrás
- Movimientos amplios y controlados

#### Rotaciones de cadera
- **10 repeticiones** cada dirección
- Manos en la cintura
- Movimientos amplios

#### Elevaciones de rodilla
- **10 repeticiones** cada pierna
- Rodilla al pecho
- Mantén el equilibrio

#### Talón al glúteo
- **10 repeticiones** cada pierna
- Contracción suave del cuádriceps
- Movimiento controlado

### Fase 3: Activación dinámica (5 minutos)

#### Zancadas dinámicas
- **10 pasos** hacia adelante
- Cambio de peso corporal
- Activación de glúteos

#### Saltos laterales
- **10 repeticiones** cada lado
- Aterrizaje suave
- Control del equilibrio

#### Skipping bajo
- **20 pasos** en el lugar
- Contacto rápido con el suelo
- Activación de gemelos

#### Carrera lateral
- **20 pasos** cada dirección
- Cruzar piernas alternadamente
- Mantén el torso erguido

### Fase 4: Preparación específica (5 minutos)

#### Aceleraciones progresivas
- **4 repeticiones** de 50 metros
- Aumenta la velocidad gradualmente
- Recuperación caminando

#### Sprints cortos
- **2 repeticiones** de 20 metros
- Velocidad submáxima (80%)
- Enfócate en la técnica

## Calentamiento según el tipo de entrenamiento

### Para carreras fáciles
- **10 minutos** de calentamiento básico
- Enfoque en movilidad articular
- Ritmo muy suave

### Para entrenamientos intensos
- **15-20 minutos** de calentamiento completo
- Incluye todas las fases
- Aceleraciones progresivas

### Para competencias
- **20-25 minutos** de calentamiento específico
- Incluye ritmos de competencia
- Finaliza 5-10 minutos antes del inicio

## Errores comunes

❌ **Saltarse el calentamiento** por falta de tiempo

❌ **Calentamiento demasiado intenso** que genera fatiga

❌ **Estiramientos estáticos** prolongados

❌ **No adaptar** el calentamiento al tipo de ejercicio

## Consejos adicionales

✅ **Adapta** la duración al clima (más largo en frío)

✅ **Personaliza** según tus necesidades

✅ **Mantén** la consistencia en tu rutina

✅ **Escucha** a tu cuerpo

Un buen calentamiento es la base de un entrenamiento exitoso. ¡Hazlo parte de tu rutina!
    `,
  },
  "fuerza-funcional": {
    title: "Fuerza Funcional para Runners",
    description: "Ejercicios específicos de fuerza que mejoran tu rendimiento en carrera.",
    readTime: "10 min",
    author: "Coach Miguel Torres",
    videoUrl: "https://www.youtube.com/embed/2yxJ60zNavI",
    content: `
# Fuerza Funcional para Runners

El entrenamiento de fuerza específico para corredores mejora el rendimiento, previene lesiones y aumenta la eficiencia de carrera.

## Importancia de la fuerza funcional

### Beneficios para el rendimiento
- **Mejora** de la potencia de carrera
- **Aumento** de la resistencia muscular
- **Optimización** de la técnica de carrera
- **Reducción** de la fatiga

### Prevención de lesiones
- **Fortalecimiento** de músculos estabilizadores
- **Mejor equilibrio** muscular
- **Protección** articular
- **Reducción** del riesgo de sobreuso

## Ejercicios fundamentales

### 1. Sentadillas (Squats)
**Músculos trabajados**: Cuádriceps, glúteos, core

**Ejecución**:
- Pies separados a la anchura de hombros
- Descender como si te sentaras en una silla
- Rodillas alineadas con los pies
- Subir empujando con los talones

**Progresión**:
- Principiante: 3 series de 10-15 repeticiones
- Intermedio: 3 series de 15-20 repeticiones
- Avanzado: Con peso o saltos

### 2. Estocadas (Lunges)
**Músculos trabajados**: Glúteos, cuádriceps, estabilizadores

**Ejecución**:
- Paso largo hacia adelante
- Descender hasta que ambas rodillas estén a 90°
- Rodilla trasera casi toca el suelo
- Regresar a la posición inicial

**Variaciones**:
- Estocadas hacia atrás
- Estocadas laterales
- Estocadas caminando

### 3. Plancha (Plank)
**Músculos trabajados**: Core, hombros, glúteos

**Ejecución**:
- Posición de flexión sobre antebrazos
- Cuerpo en línea recta
- Contraer abdominales
- Mantener la posición

**Progresión**:
- Principiante: 30 segundos
- Intermedio: 1 minuto
- Avanzado: 2 minutos o variaciones

### 4. Puente de glúteos (Glute Bridge)
**Músculos trabajados**: Glúteos, isquiotibiales

**Ejecución**:
- Acostado boca arriba, rodillas flexionadas
- Elevar la cadera contrayendo glúteos
- Formar línea recta desde rodillas hasta hombros
- Mantener 2 segundos arriba

**Variaciones**:
- Puente con una pierna
- Puente con banda elástica
- Puente en fitball

### 5. Peso muerto con una pierna
**Músculos trabajados**: Isquiotibiales, glúteos, core

**Ejecución**:
- Apoyo sobre una pierna
- Inclinar el torso hacia adelante
- Extender la pierna libre hacia atrás
- Mantener equilibrio y control

**Progresión**:
- Sin peso
- Con mancuernas
- Con elementos de inestabilidad

## Rutina de entrenamiento

### Rutina básica (2-3 veces por semana)

#### Calentamiento (5 minutos)
- Marcha en el lugar
- Círculos de brazos
- Rotaciones de cadera
- Elevaciones de rodilla

#### Circuito principal (20 minutos)
1. **Sentadillas**: 3 series de 15 repeticiones
2. **Estocadas**: 3 series de 10 por pierna
3. **Plancha**: 3 series de 30-60 segundos
4. **Puente de glúteos**: 3 series de 15 repeticiones
5. **Peso muerto una pierna**: 3 series de 8 por pierna

**Descanso**: 30-60 segundos entre series

#### Enfriamiento (5 minutos)
- Estiramientos suaves
- Respiración profunda
- Relajación muscular

### Rutina avanzada (3-4 veces por semana)

#### Añade estos ejercicios:
- **Sentadillas con salto**: 3 series de 10
- **Burpees**: 3 series de 8
- **Plancha lateral**: 3 series de 30 segundos cada lado
- **Zancadas con salto**: 3 series de 10 por pierna

## Integración con el entrenamiento de carrera

### Periodización semanal
- **Lunes**: Fuerza + Carrera fácil
- **Miércoles**: Fuerza + Entrenamiento de velocidad
- **Viernes**: Fuerza + Carrera fácil
- **Domingo**: Carrera larga

### Consideraciones importantes
- **Nunca** hacer fuerza intensa antes de entrenamientos clave
- **Priorizar** la recuperación entre sesiones
- **Adaptar** la intensidad según la fase de entrenamiento
- **Progresar** gradualmente en carga y complejidad

## Errores comunes

❌ **Técnica incorrecta** - priorizar siempre la forma

❌ **Demasiado peso** muy pronto

❌ **Ignorar** el entrenamiento de fuerza

❌ **No calentar** adecuadamente

## Consejos para el éxito

✅ **Consistencia** es clave - mínimo 2 veces por semana

✅ **Progresión gradual** - aumenta intensidad progresivamente

✅ **Técnica perfecta** - calidad sobre cantidad

✅ **Recuperación** adecuada entre sesiones

La fuerza funcional es el complemento perfecto para tu entrenamiento de carrera. ¡Integra estos ejercicios y verás mejoras significativas!
    `,
  },
}

interface PageProps {
  params: {
    slug: string
  }
}

function ShareButton({ exercise }: { exercise: any }) {
  const [showShare, setShowShare] = useState(false)

  if (typeof window === "undefined") return null

  const url = `${window.location.origin}/ejercicio/${exercise.id || "ejercicio"}`

  const shareLinks = {
    facebook: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`,
    twitter: `https://twitter.com/intent/tweet?url=${encodeURIComponent(url)}&text=${encodeURIComponent(exercise.title)}`,
    linkedin: `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}`,
  }

  return (
    <div className="relative">
      <button
        onClick={() => setShowShare(!showShare)}
        className="flex items-center space-x-2 bg-gray-100 text-gray-700 px-4 py-2 rounded-lg hover:bg-gray-200 transition-colors"
      >
        <Share2 className="w-4 h-4" />
        <span>Compartir</span>
      </button>

      {showShare && (
        <div className="absolute right-0 top-full mt-2 bg-white rounded-lg shadow-lg border p-3 flex space-x-3 z-10">
          <a
            href={shareLinks.facebook}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 text-blue-600 hover:bg-blue-50 rounded-lg transition-colors"
          >
            <Facebook className="w-5 h-5" />
          </a>
          <a
            href={shareLinks.twitter}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 text-blue-400 hover:bg-blue-50 rounded-lg transition-colors"
          >
            <Twitter className="w-5 h-5" />
          </a>
          <a
            href={shareLinks.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 text-blue-700 hover:bg-blue-50 rounded-lg transition-colors"
          >
            <Linkedin className="w-5 h-5" />
          </a>
        </div>
      )}
    </div>
  )
}

export default function ExercisePage({ params }: PageProps) {
  const exercise = exerciseData[params.slug]

  if (!exercise) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">Ejercicio no encontrado</h1>
          <Link href="/tecnica" className="text-blue-600 hover:underline">
            Volver a técnica
          </Link>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Fixed Video Section */}
      <div className="sticky top-0 z-10 bg-black">
        <div className="relative aspect-video max-h-[40vh]">
          <iframe
            src={exercise.videoUrl}
            title={exercise.title}
            className="w-full h-full"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </div>
      </div>

      {/* Scrollable Content */}
      <div className="bg-white">
        {/* Header */}
        <div className="max-w-4xl mx-auto px-4 py-6 border-b">
          <Link href="/tecnica" className="inline-flex items-center text-team-orange hover:text-team-blue mb-4">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Volver a técnica
          </Link>

          <div className="flex items-center justify-center mb-4">
            <img src="/images/logo-energia.png" alt="ENERGIA Logo" className="w-8 h-8 mr-2" />
            <h1 className="text-2xl md:text-3xl font-bold text-gray-900">{exercise.title}</h1>
          </div>

          <p className="text-gray-600 text-center mb-4 text-lg">{exercise.description}</p>

          <div className="flex items-center justify-between gap-6 text-sm text-gray-500">
            <div className="flex items-center gap-6">
              <div className="flex items-center">
                <Clock className="w-4 h-4 mr-1 text-team-orange" />
                <span>{exercise.readTime} de lectura</span>
              </div>
              <div className="flex items-center">
                <User className="w-4 h-4 mr-1 text-team-orange" />
                <span>{exercise.author}</span>
              </div>
            </div>
            <ShareButton exercise={exercise} />
          </div>
        </div>

        {/* Content */}
        <article className="max-w-4xl mx-auto px-4 py-8">
          <div className="prose prose-lg max-w-none">
            {exercise.content.split("\n").map((paragraph: string, index: number) => {
              if (paragraph.startsWith("# ")) {
                return (
                  <h1 key={index} className="text-2xl font-bold text-gray-900 mt-8 mb-4">
                    {paragraph.replace("# ", "")}
                  </h1>
                )
              }
              if (paragraph.startsWith("## ")) {
                return (
                  <h2 key={index} className="text-xl font-semibold text-gray-800 mt-6 mb-3">
                    {paragraph.replace("## ", "")}
                  </h2>
                )
              }
              if (paragraph.startsWith("### ")) {
                return (
                  <h3 key={index} className="text-lg font-semibold text-gray-800 mt-4 mb-2">
                    {paragraph.replace("### ", "")}
                  </h3>
                )
              }
              if (paragraph.startsWith("- ")) {
                return (
                  <li key={index} className="text-gray-700 mb-1 ml-4">
                    {paragraph.replace("- ", "")}
                  </li>
                )
              }
              if (paragraph.startsWith("❌ ")) {
                return (
                  <p key={index} className="text-red-600 mb-2">
                    {paragraph}
                  </p>
                )
              }
              if (paragraph.startsWith("✅ ")) {
                return (
                  <p key={index} className="text-green-600 mb-2">
                    {paragraph}
                  </p>
                )
              }
              if (paragraph.includes("**") && paragraph.trim() !== "") {
                const formattedText = paragraph.replace(/\*\*(.*?)\*\*/g, "<strong>$1</strong>")
                return (
                  <p
                    key={index}
                    className="text-gray-700 mb-4 leading-relaxed"
                    dangerouslySetInnerHTML={{ __html: formattedText }}
                  />
                )
              }
              if (paragraph.trim() !== "") {
                return (
                  <p key={index} className="text-gray-700 mb-4 leading-relaxed">
                    {paragraph}
                  </p>
                )
              }
              return null
            })}
          </div>
        </article>

        {/* Navigation */}
        <div className="max-w-4xl mx-auto px-4 py-8 border-t">
          <Link
            href="/tecnica"
            className="inline-flex items-center justify-center w-full bg-team-orange text-white py-3 px-6 rounded-lg hover:bg-team-blue transition-colors font-medium shadow-lg"
          >
            Ver más ejercicios
          </Link>
        </div>
      </div>
    </div>
  )
}
