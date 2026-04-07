export default function robots() {
  return {
    rules: { userAgent: '*', allow: '/', disallow: ['/admin', '/api/'] },
    sitemap: 'https://calculadora-pry.vercel.app/sitemap.xml',
  }
}
