export default function sitemap() {
  const base = 'https://calculadora-pry.vercel.app'
  return [
    { url: base,                                        lastModified: new Date(), changeFrequency: 'hourly',  priority: 1.0 },
    { url: `${base}/calculadora-dolar-paraguai`,        lastModified: new Date(), changeFrequency: 'monthly', priority: 0.9 },
    { url: `${base}/melhor-forma-pagamento-paraguai`,   lastModified: new Date(), changeFrequency: 'monthly', priority: 0.9 },
    { url: `${base}/nomad-paraguai`,                    lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
    { url: `${base}/limite-compras-paraguai`,           lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
    { url: `${base}/como-declarar-paraguai`,            lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
    { url: `${base}/o-que-comprar-paraguai`,            lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
    { url: `${base}/privacidade`,                       lastModified: new Date(), changeFrequency: 'yearly',  priority: 0.3 },
  ]
}
