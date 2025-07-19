// Google Analytics configuration
// Replace GA_MEASUREMENT_ID with your actual Google Analytics Measurement ID

declare global {
  interface Window {
    gtag: (...args: any[]) => void
  }
}

export const GA_MEASUREMENT_ID = 'G-XXXXXXXXXX' // Replace with your GA4 measurement ID

// https://developers.google.com/analytics/devguides/collection/gtagjs/pages
export const pageview = (url: string) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('config', GA_MEASUREMENT_ID, {
      page_path: url,
    })
  }
}

// https://developers.google.com/analytics/devguides/collection/gtagjs/events
export const event = ({ action, category, label, value }: {
  action: string
  category: string
  label?: string
  value?: number
}) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', action, {
      event_category: category,
      event_label: label,
      value: value,
    })
  }
}

// Specific events for ENERGIA
export const trackRunningArticleView = (articleTitle: string) => {
  event({
    action: 'view_article',
    category: 'Running Technique',
    label: articleTitle
  })
}

export const trackContactForm = () => {
  event({
    action: 'submit_form',
    category: 'Contact',
    label: 'Contact Form'
  })
}

export const trackScheduleView = () => {
  event({
    action: 'view_schedule',
    category: 'Training',
    label: 'Training Schedule'
  })
}
