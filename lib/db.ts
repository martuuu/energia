// lib/db.ts - Database configuration (ready for implementation)

export interface Exercise {
  id: string
  title: string
  description: string
  content?: string
  readTime: string
  date: string
  videoThumbnail: string
  videoUrl?: string
  tags: string[]
  featured: boolean
  published: boolean
  createdAt: Date
  updatedAt: Date
}

export interface Event {
  id: number
  title: string
  description?: string
  date: string
  location: string
  distances: string[]
  participants: string | null
  status: string | null
  image: string
  registrationUrl?: string
  price?: number
  maxParticipants?: number
  createdAt: Date
  updatedAt: Date
}

export interface Coach {
  id: string
  name: string
  specialty: string
  bio?: string
  image: string
  whatsapp: string
  instagram: string
  email?: string
  certifications?: string[]
  experience?: number
  createdAt: Date
  updatedAt: Date
}

export interface Schedule {
  id: string
  dayOfWeek: string
  time: string
  activity: string
  coachId: string
  location: string
  maxParticipants: number
  price: number
  active: boolean
  createdAt: Date
  updatedAt: Date
}

export interface Member {
  id: string
  email: string
  name: string
  phone?: string
  membershipType: 'basic' | 'premium' | 'unlimited'
  membershipExpiry: Date
  registrationDate: Date
  active: boolean
  createdAt: Date
  updatedAt: Date
}

export interface Booking {
  id: string
  memberId: string
  scheduleId: string
  date: string
  status: 'confirmed' | 'cancelled' | 'pending'
  paymentId?: string
  createdAt: Date
  updatedAt: Date
}

export interface Payment {
  id: string
  memberId: string
  amount: number
  currency: string
  status: 'pending' | 'completed' | 'failed'
  paymentMethod: 'mercadopago' | 'cash' | 'transfer'
  mercadopagoId?: string
  description: string
  createdAt: Date
  updatedAt: Date
}

// Future database functions (to be implemented)
export async function getExercises(): Promise<Exercise[]> {
  // Implementation with your preferred database (Prisma, Supabase, etc.)
  throw new Error('Database not implemented yet')
}

export async function getEvents(): Promise<Event[]> {
  // Implementation with your preferred database
  throw new Error('Database not implemented yet')
}

export async function getCoaches(): Promise<Coach[]> {
  // Implementation with your preferred database
  throw new Error('Database not implemented yet')
}

export async function getSchedules(): Promise<Schedule[]> {
  // Implementation with your preferred database
  throw new Error('Database not implemented yet')
}

// MercadoPago integration placeholder
export async function createPayment(amount: number, description: string) {
  // Implementation with MercadoPago SDK
  throw new Error('MercadoPago integration not implemented yet')
}
