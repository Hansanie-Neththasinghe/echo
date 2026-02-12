// Additional analytics utility (optional)
import { config } from '@/config/constants'

/**
 * Initialize Google Analytics
 * @param {string} gaId - Google Analytics ID
 */
export function initializeAnalytics(gaId) {
  if (!gaId || gaId.includes('XXXXXXXXXX')) return

  const script = document.createElement('script')
  script.async = true
  script.src = `https://www.googletagmanager.com/gtag/js?id=${gaId}`
  document.head.appendChild(script)

  window.dataLayer = window.dataLayer || []
  function gtag() {
    window.dataLayer.push(arguments)
  }
  gtag('js', new Date())
  gtag('config', gaId)
}

/**
 * Track page view
 * @param {string} path - Page path
 * @param {string} title - Page title
 */
export function trackPageView(path, title) {
  if (typeof window.gtag !== 'undefined') {
    window.gtag('config', import.meta.env.VITE_GA_ID, {
      page_path: path,
      page_title: title,
    })
  }
}

/**
 * Track custom event
 * @param {string} eventName - Event name
 * @param {Object} eventData - Event data
 */
export function trackEvent(eventName, eventData = {}) {
  if (typeof window.gtag !== 'undefined') {
    window.gtag('event', eventName, eventData)
  }
}

/**
 * Track conversion
 * @param {string} conversionId - Conversion ID
 */
export function trackConversion(conversionId) {
  trackEvent('conversion', { conversion_id: conversionId })
}
