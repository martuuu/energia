import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://energia.com'

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
      priority: 0.8,
    },
    {
      url: `${baseUrl}/horarios`,
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: 0.8,
    },
  ]

  // Dynamic exercise pages (when connected to DB, this will be dynamic)
  const exercises = [
    'cadencia-running',
    'postura-corporal',
    'respiracion-ritmica',
    'pisada-eficiente',
    'calentamiento-dinamico',
    'fuerza-funcional',
  ]

  const exercisePages = exercises.map(slug => ({
    url: `${baseUrl}/ejercicio/${slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.6,
  }))

  return [...staticPages, ...exercisePages]
}
