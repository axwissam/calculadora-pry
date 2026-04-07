export default function sitemap() {
  const base = 'https://calculadora-pry.vercel.app'
  return [
    { url: base,                                              lastModified: new Date(), changeFrequency: 'hourly',  priority: 1.0 },
    { url: `${base}/calculadora-dolar-paraguai`,             lastModified: new Date(), changeFrequency: 'monthly', priority: 0.9 },
    { url: `${base}/melhor-forma-pagamento-paraguai`,        lastModified: new Date(), changeFrequency: 'monthly', priority: 0.9 },
    { url: `${base}/lojas-paraguai`,                        lastModified: new Date(), changeFrequency: 'weekly',  priority: 0.9 },
    { url: `${base}/quanto-de-imposto-pagar-no-paraguai`,   lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
    { url: `${base}/como-calcular-imposto-paraguai`,        lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
    { url: `${base}/cota-paraguai-via-terrestre`,           lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
    { url: `${base}/imposto-iphone-paraguai`,               lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
    { url: `${base}/eletronicos-paraguai`,                  lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
    { url: `${base}/perfume-paraguai`,                      lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
    { url: `${base}/nomad-paraguai`,                        lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
    { url: `${base}/limite-compras-paraguai`,               lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
    { url: `${base}/como-declarar-paraguai`,                lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
    { url: `${base}/o-que-comprar-paraguai`,                lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
    { url: `${base}/quanto-custa-viajar-cidade-del-este`,   lastModified: new Date(), changeFrequency: 'monthly', priority: 0.7 },
    { url: `${base}/seguro-viagem-paraguai`,        lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
    { url: `${base}/duty-free-foz-do-iguacu`,        lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
    { url: `${base}/privacidade`,                           lastModified: new Date(), changeFrequency: 'yearly',  priority: 0.3 },
  ]
}
