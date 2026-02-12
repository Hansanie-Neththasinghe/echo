/**
 * Configuration constants
 */

export const config = {
  siteName: 'Hansanie Neththasinghe',
  siteUrl: process.env.VITE_SITE_URL || 'https://hansanie.dev',
  siteDescription: 'Full Stack Developer creating modern web applications',
  author: 'Hansanie Neththasinghe',
  email: 'hansanie@example.com',
  socialLinks: {
    github: 'https://github.com/hansanie',
    linkedin: 'https://linkedin.com/in/hansanie',
    twitter: 'https://twitter.com/hansanie',
  },
}

export const colors = {
  primary: '#0ea5e9',
  secondary: '#3b82f6',
  dark: '#0f172a',
  light: '#ffffff',
}

export const breakpoints = {
  mobile: 640,
  tablet: 1024,
  desktop: 1280,
}

export const animations = {
  fast: 0.15,
  base: 0.3,
  slow: 0.5,
}
