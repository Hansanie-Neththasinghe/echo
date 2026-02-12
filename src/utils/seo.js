import { config } from '@/config/constants'

/**
 * Generate SEO metadata for pages
 * @param {Object} options - SEO options
 * @returns {Object} SEO metadata
 */
export function generateSEO({ title, description, url, image, type = 'website' }) {
  const fullTitle = title ? `${title} | ${config.siteName}` : config.siteName
  const fullUrl = url ? `${config.siteUrl}${url}` : config.siteUrl

  return {
    title: fullTitle,
    description: description || config.siteDescription,
    canonical: fullUrl,
    og: {
      title: fullTitle,
      description: description || config.siteDescription,
      url: fullUrl,
      type,
      image: image || `${config.siteUrl}/og-image.png`,
    },
    twitter: {
      card: 'summary_large_image',
      creator: '@hansanie',
      title: fullTitle,
      description: description || config.siteDescription,
      image: image || `${config.siteUrl}/og-image.png`,
    },
  }
}

/**
 * Generate JSON-LD structured data
 * @param {Object} data - Structured data
 * @returns {string} JSON-LD string
 */
export function generateJsonLD(data) {
  return JSON.stringify({
    '@context': 'https://schema.org',
    ...data,
  })
}

/**
 * Generate breadcrumb structured data
 * @param {Array} items - Breadcrumb items
 * @returns {Object} Breadcrumb structured data
 */
export function generateBreadcrumbs(items) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: `${config.siteUrl}${item.url}`,
    })),
  }
}

/**
 * Generate organization schema
 * @returns {Object} Organization schema
 */
export function generateOrganizationSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: config.author,
    url: config.siteUrl,
    email: config.email,
    sameAs: Object.values(config.socialLinks),
  }
}
