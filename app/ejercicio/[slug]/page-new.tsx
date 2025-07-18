import Link from "next/link"
import Navbar from "@/components/navbar"
import { ArrowLeft, Clock, User, Share2, Facebook, Twitter, Linkedin } from "lucide-react"
import { useState } from "react"
import { Metadata } from "next"

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
    videoUrl: "https://www.youtube.com/embed/9L2b2khySLE",
    content: `
# La Importancia de la Postura en el Running

Una postura correcta es fundamental para correr de manera eficiente y prevenir lesiones. Te enseñamos los elementos clave de una buena postura.

## Elementos de la postura correcta

### 1. Posición de la cabeza
- **Mirada al frente**, no hacia abajo
- **Barbilla paralela** al suelo
- **Cuello relajado** y alineado con la columna

### 2. Posición de los hombros
- **Relajados y bajos**, no hacia las orejas
- **Ligeramente hacia atrás** para abrir el pecho
- **Movimiento natural** con el balanceo de brazos

### 3. Posición del torso
- **Erguido pero relajado**
- **Ligera inclinación** hacia adelante desde los tobillos
- **Core activado** para mantener estabilidad

### 4. Posición de los brazos
- **Codos flexionados** a 90 grados aproximadamente
- **Movimiento hacia adelante y atrás**, no cruzando el cuerpo
- **Manos relajadas**, sin cerrar puños

### 5. Posición de las piernas
- **Rodillas elevadas** moderadamente
- **Pie aterriza** bajo el centro de gravedad
- **Zancada natural**, no excesivamente larga

## Ejercicios para mejorar la postura

### Ejercicio 1: Pared de postura
- Párate contra una pared
- Talones a 2-3 cm de la pared
- Toca pared con cabeza, hombros y glúteos
- Mantén 30 segundos

### Ejercicio 2: Carrera consciente
- Corre 5 minutos enfocándote en cada elemento
- Revisa postura cada 30 segundos
- Corrige gradualmente

### Ejercicio 3: Ejercicios de core
- Plancha: 30 segundos x 3 series
- Puente: 15 repeticiones x 3 series
- Fortalece músculos estabilizadores

## Errores comunes

❌ **Mirar hacia abajo** constantemente

❌ **Hombros tensos** hacia las orejas

❌ **Inclinación excesiva** hacia adelante

❌ **Brazos cruzando** el cuerpo

❌ **Zancada muy larga** con aterrizaje adelantado

## Beneficios de la postura correcta

✅ **Mejor eficiencia** energética

✅ **Reducción** del riesgo de lesiones

✅ **Mejor respiración** y oxigenación

✅ **Mayor velocidad** con menos esfuerzo

✅ **Menos fatiga** muscular

La postura correcta se desarrolla con práctica consciente. ¡Integra estos ejercicios en tu rutina!
    `,
  },
  "respiracion-ritmica": {
    title: "Respiración Rítmica",
    description: "Técnicas de respiración para optimizar el rendimiento y controlar el esfuerzo.",
    readTime: "6 min",
    author: "Coach Ana Martínez",
    videoUrl: "https://www.youtube.com/embed/3h2WBkZcFnY",
    content: `
# Respiración Rítmica en el Running

La respiración eficiente es clave para mantener el rendimiento y controlar el esfuerzo durante la carrera.

## Fundamentos de la respiración rítmica

### Respiración diafragmática
- **Usar el diafragma** como músculo principal
- **Expansión del abdomen** al inhalar
- **Contracción controlada** al exhalar
- **Evitar respiración torácica** superficial

### Patrones de respiración
- **3:2** - 3 pasos inhalar, 2 pasos exhalar (ritmo moderado)
- **2:1** - 2 pasos inhalar, 1 paso exhalar (ritmo intenso)
- **4:4** - 4 pasos inhalar, 4 pasos exhalar (ritmo suave)

## Técnicas específicas

### 1. Respiración nasal vs bucal
- **Nasal**: Mejor para ritmos suaves, filtra y calienta aire
- **Bucal**: Necesaria para ritmos intensos, mayor volumen
- **Mixta**: Inhalar por nariz, exhalar por boca

### 2. Respiración bilateral
- **Alterna el pie** con el que exhalas
- **Previene desequilibrios** musculares
- **Mantiene simetría** en la carrera

### 3. Respiración en subidas
- **Acorta el patrón** (2:1 o 1:1)
- **Aumenta la frecuencia** respiratoria
- **Mantén el ritmo** constante

## Ejercicios de entrenamiento

### Ejercicio 1: Respiración en reposo
- Acuéstate boca arriba
- Mano en pecho, otra en abdomen
- Respira profundamente
- El abdomen debe elevarse más que el pecho

### Ejercicio 2: Caminar con patrón
- Camina aplicando patrón 4:4
- Aumenta gradualmente la velocidad
- Mantén el patrón constante

### Ejercicio 3: Carrera con ritmo
- Corre 10 minutos con patrón 3:2
- Mantén ritmo conversacional
- Ajusta según sensaciones

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

La respiración eficiente se desarrolla con práctica constante. ¡Integra estos ejercicios en tu rutina!
    `,
  },
  "pisada-eficiente": {
    title: "Pisada Eficiente",
    description: "Cómo aterrizar correctamente para reducir el impacto y mejorar la propulsión.",
    readTime: "6 min",
    author: "Coach Roberto Silva",
    videoUrl: "https://www.youtube.com/embed/zSIDRHUWlVo",
    content: `
# Pisada Eficiente en el Running

La forma en que tu pie toca el suelo determina la eficiencia de tu carrera y el riesgo de lesiones.

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

## Beneficios de la pisada eficiente

✅ **Menor impacto** articular

✅ **Mejor propulsión** y velocidad

✅ **Reducción** del riesgo de lesiones

✅ **Mayor eficiencia** energética

La pisada eficiente es clave para un running exitoso. ¡Practica con paciencia y constancia!
    `,
  },
  "calentamiento-dinamico": {
    title: "Calentamiento Dinámico",
    description: "Rutina de ejercicios de activación antes de cada entrenamiento o competencia.",
    readTime: "8 min",
    author: "Coach Laura Herrera",
    videoUrl: "https://www.youtube.com/embed/2wFrBPzRgJg",
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
- **Marcha activa**: 2 minutos de caminar rápido
- **Trote suave**: 3 minutos de trote muy suave

### Fase 2: Movilidad articular (5 minutos)
- **Círculos de brazos**: 10 repeticiones cada dirección
- **Rotaciones de cadera**: 10 repeticiones cada dirección
- **Elevaciones de rodilla**: 10 repeticiones cada pierna
- **Talón al glúteo**: 10 repeticiones cada pierna

### Fase 3: Activación dinámica (5 minutos)
- **Zancadas dinámicas**: 10 pasos hacia adelante
- **Saltos laterales**: 10 repeticiones cada lado
- **Skipping bajo**: 20 pasos en el lugar
- **Carrera lateral**: 20 pasos cada dirección

### Fase 4: Preparación específica (5 minutos)
- **Aceleraciones progresivas**: 4 repeticiones de 50 metros
- **Sprints cortos**: 2 repeticiones de 20 metros

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
    videoUrl: "https://www.youtube.com/embed/QeKTTnhKi_Y",
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

### 2. Estocadas (Lunges)
**Músculos trabajados**: Glúteos, cuádriceps, estabilizadores

**Ejecución**:
- Paso largo hacia adelante
- Descender hasta que ambas rodillas estén a 90°
- Rodilla trasera casi toca el suelo
- Regresar a la posición inicial

### 3. Plancha (Plank)
**Músculos trabajados**: Core, hombros, glúteos

**Ejecución**:
- Posición de flexión sobre antebrazos
- Cuerpo en línea recta
- Contraer abdominales
- Mantener la posición

### 4. Puente de glúteos (Glute Bridge)
**Músculos trabajados**: Glúteos, isquiotibiales

**Ejecución**:
- Acostado boca arriba, rodillas flexionadas
- Elevar la cadera contrayendo glúteos
- Formar línea recta desde rodillas hasta hombros
- Mantener 2 segundos arriba

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

**Descanso**: 30-60 segundos entre series

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

// Generate metadata
export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const exercise = exerciseData[params.slug]
  
  if (!exercise) {
    return {
      title: 'Ejercicio no encontrado',
      description: 'El ejercicio solicitado no se encuentra disponible.'
    }
  }

  return {
    title: exercise.title,
    description: exercise.description,
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
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-team-blue/10 via-purple-team/5 to-team-orange/10">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">Ejercicio no encontrado</h1>
          <Link href="/tecnica" className="text-team-orange hover:text-team-blue transition-colors">
            Volver a técnica
          </Link>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-team-blue/10 via-purple-team/5 to-team-orange/10">
      {/* Hero Section with Navbar */}
      <section className="relative bg-gradient-to-br from-team-blue via-team-blue-dark to-team-orange/60 pt-0 pb-24 min-h-[520px] flex flex-col">
        <Navbar />
        
        <div className="flex-1 flex items-center pt-16 max-w-6xl mx-auto px-4 w-full">
          <div className="w-full">
            <Link href="/tecnica" className="inline-flex items-center text-white hover:text-team-orange mb-8 transition-colors duration-200">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Volver a técnica
            </Link>

            <div className="text-center text-white">
              <h1 className="text-4xl md:text-6xl font-bold mb-6">{exercise.title}</h1>
              <p className="text-xl text-blue-100 max-w-3xl mx-auto leading-relaxed">
                {exercise.description}
              </p>
              <div className="flex items-center justify-center space-x-6 mt-6 text-blue-100">
                <div className="flex items-center space-x-2">
                  <Clock className="w-4 h-4" />
                  <span>{exercise.readTime}</span>
                </div>
                <div className="flex items-center space-x-2">
                  <User className="w-4 h-4" />
                  <span>{exercise.author}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Video Section */}
      <section className="py-12">
        <div className="max-w-4xl mx-auto px-4">
          <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
            <div className="relative aspect-video">
              <iframe
                src={exercise.videoUrl}
                title={exercise.title}
                className="w-full h-full"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
            
            {/* Video Header */}
            <div className="p-6 border-b border-gray-100">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <img src="/images/logo-energia.png" alt="ENERGIA" className="w-8 h-8" />
                  <div>
                    <h2 className="text-xl font-bold text-gray-900">{exercise.title}</h2>
                    <div className="flex items-center space-x-4 text-sm text-gray-600 mt-1">
                      <div className="flex items-center space-x-1">
                        <Clock className="w-4 h-4" />
                        <span>{exercise.readTime}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <User className="w-4 h-4" />
                        <span>{exercise.author}</span>
                      </div>
                    </div>
                  </div>
                </div>
                
                <ShareButton exercise={{ ...exercise, id: params.slug }} />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="pb-20">
        <div className="max-w-4xl mx-auto px-4">
          <div className="bg-white rounded-2xl shadow-xl p-8">
            <article className="prose prose-lg max-w-none">
              {exercise.content.split("\n").map((line: string, index: number) => {
                // Headers
                if (line.startsWith("# ")) {
                  return (
                    <h1 key={index} className="text-3xl font-bold text-gray-900 mb-6 mt-8">
                      {line.substring(2)}
                    </h1>
                  )
                }
                if (line.startsWith("## ")) {
                  return (
                    <h2 key={index} className="text-2xl font-bold text-gray-900 mb-4 mt-6">
                      {line.substring(3)}
                    </h2>
                  )
                }
                if (line.startsWith("### ")) {
                  return (
                    <h3 key={index} className="text-xl font-semibold text-gray-900 mb-3 mt-4">
                      {line.substring(4)}
                    </h3>
                  )
                }

                // Lists
                if (line.startsWith("- ")) {
                  return (
                    <li key={index} className="text-gray-700 mb-2 ml-4">
                      {line.substring(2).replace(/\*\*(.*?)\*\*/g, "<strong>$1</strong>") ? (
                        <span dangerouslySetInnerHTML={{ __html: line.substring(2).replace(/\*\*(.*?)\*\*/g, "<strong>$1</strong>") }} />
                      ) : (
                        line.substring(2)
                      )}
                    </li>
                  )
                }

                // Special formatting
                if (line.startsWith("❌ ")) {
                  return (
                    <p key={index} className="text-red-600 mb-2">
                      {line}
                    </p>
                  )
                }
                if (line.startsWith("✅ ")) {
                  return (
                    <p key={index} className="text-green-600 mb-2">
                      {line}
                    </p>
                  )
                }
                if (line.includes("**") && line.trim() !== "") {
                  const formattedText = line.replace(/\*\*(.*?)\*\*/g, "<strong>$1</strong>")
                  return (
                    <p
                      key={index}
                      className="text-gray-700 mb-4 leading-relaxed"
                      dangerouslySetInnerHTML={{ __html: formattedText }}
                    />
                  )
                }
                if (line.trim() !== "") {
                  return (
                    <p key={index} className="text-gray-700 mb-4 leading-relaxed">
                      {line}
                    </p>
                  )
                }
                return null
              })}
            </article>

            {/* Navigation */}
            <div className="mt-12 pt-8 border-t border-gray-100">
              <Link
                href="/tecnica"
                className="inline-flex items-center justify-center w-full bg-team-orange text-white py-4 px-6 rounded-lg hover:bg-team-blue transition-colors font-medium shadow-lg"
              >
                Ver más ejercicios
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
