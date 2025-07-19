import type { Metadata } from 'next'
import './globals.css'
import PageTransition from '@/components/page-transition'

export const metadata: Metadata = {
  metadataBase: new URL('https://energia-webapp.vercel.app'),
  title: {
    default: 'ENERGIA - Grupo de Running y Funcional | Bahía Blanca',
    template: '%s | ENERGIA'
  },
  description: 'Grupo de running y entrenamiento funcional al aire libre en Bahía Blanca, Buenos Aires. Entrenamientos presenciales y seguimiento remoto personalizado. Únete a nuestra comunidad de corredores.',
  keywords: [
    'running Bahía Blanca',
    'entrenamiento funcional Bahía Blanca', 
    'grupo running Buenos Aires',
    'coaching running remoto',
    'entrenamiento al aire libre',
    'running club Argentina',
    'funcional outdoor',
    'preparación maratón',
    'running técnico',
    'entrenamiento personalizado'
  ],
  authors: [{ name: 'ENERGIA Team' }],
  creator: 'ENERGIA',
  publisher: 'ENERGIA',
  category: 'Sports & Fitness',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    title: 'ENERGIA - Grupo de Running y Funcional | Bahía Blanca',
    description: 'Grupo de running y entrenamiento funcional al aire libre en Bahía Blanca. Entrenamientos presenciales y seguimiento remoto. Únete a nuestra comunidad.',
    siteName: 'ENERGIA',
    locale: 'es_AR',
    type: 'website',
    url: 'https://energia-webapp.vercel.app',
    images: [
      {
        url: '/images/logo-energia.png',
        width: 1200,
        height: 630,
        alt: 'ENERGIA - Grupo de Running y Funcional'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    site: '@energia_bb',
    creator: '@energia_bb',
    title: 'ENERGIA - Grupo de Running y Funcional | Bahía Blanca',
    description: 'Grupo de running y entrenamiento funcional al aire libre en Bahía Blanca. Entrenamientos presenciales y seguimiento remoto.',
    images: ['/images/logo-energia.png']
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
    icon: [
      { url: '/favicon.ico', sizes: '48x48' },
      { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
      { url: '/icon.svg', type: 'image/svg+xml' }
    ],
    shortcut: '/favicon.ico',
    apple: [
      { url: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png' }
    ]
  },
  manifest: '/site.webmanifest',
  alternates: {
    canonical: 'https://energia-webapp.vercel.app'
  },
  other: {
    'geo.region': 'AR-BA',
    'geo.placename': 'Bahía Blanca',
    'geo.position': '-38.7183;-62.2663'
  }
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "SportsClub",
    "name": "ENERGIA",
    "description": "Grupo de running y entrenamiento funcional al aire libre en Bahía Blanca, Buenos Aires. Entrenamientos presenciales y seguimiento remoto personalizado.",
    "url": "https://energia-webapp.vercel.app",
    "logo": "https://energia-webapp.vercel.app/images/logo-energia.png",
    "image": "https://energia-webapp.vercel.app/images/logo-energia.png",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Bahía Blanca",
      "addressRegion": "Buenos Aires",
      "addressCountry": "AR"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": -38.7183,
      "longitude": -62.2663
    },
    "sport": ["Running", "Functional Training"],
    "offers": {
      "@type": "Offer",
      "description": "Entrenamientos de running y funcional presenciales y remotos",
      "availability": "InStock"
    },
    "sameAs": [
      "https://www.instagram.com/energia_bb",
      "https://www.facebook.com/energia.bb"
    ]
  }

  return (
    <html lang="es-AR">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#4338CA" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </head>
      <body className="antialiased">
        <PageTransition>
          {children}
        </PageTransition>
      </body>
    </html>
  )
}
