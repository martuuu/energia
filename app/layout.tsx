import type { Metadata } from 'next'
import './globals.css'
import PageTransition from '@/components/page-transition'

export const metadata: Metadata = {
  title: {
    default: 'ENERGIA - Funcional & Running',
    template: '%s | ENERGIA'
  },
  description: 'Potenciando atletas, transformando vidas. Entrenamientos funcionales y running de alta calidad en Buenos Aires.',
  keywords: ['running', 'entrenamiento funcional', 'fitness', 'Buenos Aires', 'atletismo', 'maratón', 'coaching'],
  authors: [{ name: 'ENERGIA Team' }],
  creator: 'ENERGIA',
  publisher: 'ENERGIA',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    title: 'ENERGIA - Funcional & Running',
    description: 'Potenciando atletas, transformando vidas. Entrenamientos funcionales y running de alta calidad en Buenos Aires.',
    siteName: 'ENERGIA',
    locale: 'es_AR',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'ENERGIA - Funcional & Running',
    description: 'Potenciando atletas, transformando vidas. Entrenamientos funcionales y running de alta calidad en Buenos Aires.',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon-16x16.png',
    apple: '/apple-touch-icon.png',
  },
  manifest: '/site.webmanifest',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="es-AR">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#2563eb" />
      </head>
      <body className="antialiased">
        <PageTransition>
          {children}
        </PageTransition>
      </body>
    </html>
  )
}
