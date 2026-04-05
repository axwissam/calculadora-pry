export default function robots() {
  return {
    rules: { userAgent: '*', allow: '/', disallow: ['/admin', '/api/'] },
    sitemap: 'https://calculadora-paraguai.vercel.app/sitemap.xml',
  }
}
