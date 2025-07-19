import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://energia-webapp.vercel.app'

  // Static pages
  const staticPages = [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'daily' as const,
      priority: 1,
    },
    {
      url: `${baseUrl}/tecnica`,
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: 0.9,
    },
    {
      url: `${baseUrl}/horarios`,
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: 0.8,
    },
    {
      url: `${baseUrl}/eventos`,
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: 0.8,
    },
    {
      url: `${baseUrl}/contacto`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.7,
    },
  ]

  // Dynamic technical articles
  const articles = [
    'cadencia-running',
    'postura-corporal',
    'respiracion-ritmica',
    'pisada-eficiente',
    'calentamiento-dinamico',
    'fuerza-funcional',
    'nutricion-deportiva',
    'recuperacion-activa',
    'entrenamiento-intervalos',
    'mental-running',
  ]

  const articlePages = articles.map(slug => ({
    url: `${baseUrl}/tecnica/${slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.6,
  }))

  return [...staticPages, ...articlePages]
}
