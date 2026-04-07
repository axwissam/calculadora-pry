const fs = require('fs')

// ========== 1. WebApplication Schema na HOME ==========
let home = fs.readFileSync('app/page.jsx', 'utf8')
const sep = home.includes('\r\n') ? '\r\n' : '\n'

const schemaHome = `
<script
  type="application/ld+json"
  dangerouslySetInnerHTML={{ __html: JSON.stringify({
    "@context": "https://schema.org",
    "@type": "WebApplication",
    "name": "Calculadora de Imposto Paraguai 2026",
    "url": "https://calculadora-pry.vercel.app",
    "description": "Calcule o imposto e custo total das suas compras no Paraguai com cotação do Banco Central em tempo real.",
    "applicationCategory": "FinanceApplication",
    "operatingSystem": "All",
    "offers": { "@type": "Offer", "price": "0", "priceCurrency": "BRL" }
  }) }}
/>`

if (!home.includes('WebApplication')) {
  home = home.replace(
    '<main className="min-h-screen bg-gray-50 pb-20">',
    `<>${schemaHome}${sep}    <main className="min-h-screen bg-gray-50 pb-20">`
  ).replace(
    /(\s*)\)(\s*)\}(\s*)$/,
    `${sep}    </>${sep}  )${sep}}`
  )
  fs.writeFileSync('app/page.jsx', home, 'utf8')
  console.log('OK - WebApplication schema adicionado na home')
} else {
  console.log('SKIP - home ja tem schema')
}

// ========== 2. FAQ Schema nas páginas SEO ==========
const faqPages = [
  {
    path: 'app/quanto-de-imposto-pagar-no-paraguai/page.jsx',
    faqs: [
      { q: 'Quanto de imposto pagar no Paraguai em 2026?', a: 'Acima da cota de US$ 500, você paga 50% de imposto sobre o valor excedente. Abaixo da cota, é isento.' },
      { q: 'Qual é a cota de isenção do Paraguai?', a: 'A cota é de US$ 500 por pessoa por viagem via terrestre e US$ 1.000 por via aérea.' },
      { q: 'Posso somar a cota com minha família?', a: 'Sim, cada pessoa tem US$ 500 de cota individual, incluindo crianças. Uma família de 4 pode trazer até US$ 2.000 sem pagar imposto.' },
    ]
  },
  {
    path: 'app/como-calcular-imposto-paraguai/page.jsx',
    faqs: [
      { q: 'Como calcular o imposto do Paraguai?', a: 'Subtraia US$ 500 do valor total. O excedente é multiplicado por 50% para obter o imposto. Ex: comprou US$ 800, paga 50% de US$ 300 = US$ 150.' },
      { q: 'O imposto do Paraguai é sobre o total ou só o excedente?', a: 'Apenas sobre o excedente acima dos US$ 500 de cota.' },
    ]
  },
  {
    path: 'app/cota-paraguai-via-terrestre/page.jsx',
    faqs: [
      { q: 'Qual é a cota do Paraguai via terrestre em 2026?', a: 'US$ 500 por pessoa por viagem via terrestre pela Ponte da Amizade ou Pedro Juan Caballero.' },
      { q: 'Com que frequência posso ir ao Paraguai?', a: 'Não há limite de frequência, mas a cota de US$ 500 se aplica a cada viagem.' },
    ]
  },
  {
    path: 'app/melhor-forma-pagamento-paraguai/page.jsx',
    faqs: [
      { q: 'Qual a melhor forma de pagar no Paraguai?', a: 'Dinheiro ou Pix são as melhores opções por não terem IOF nem spread. Cartões internacionais como Nomad e Wise também são boas opções.' },
      { q: 'Tem IOF nas compras no Paraguai com cartão?', a: 'Sim, cartões comuns cobram IOF de 3,5%. Cartões como Nomad e Wise não cobram IOF adicional na compra.' },
    ]
  },
]

faqPages.forEach(({ path, faqs }) => {
  if (!fs.existsSync(path)) { console.log(`SKIP - nao existe: ${path}`); return }
  let content = fs.readFileSync(path, 'utf8')
  if (content.includes('FAQPage')) { console.log(`SKIP - ja tem FAQ: ${path}`); return }

  const faqSchema = `
<script
  type="application/ld+json"
  dangerouslySetInnerHTML={{ __html: JSON.stringify({
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": ${JSON.stringify(faqs.map(f => ({
      "@type": "Question",
      "name": f.q,
      "acceptedAnswer": { "@type": "Answer", "text": f.a }
    })), null, 2)}
  }) }}
/>`

  const fileSep = content.includes('\r\n') ? '\r\n' : '\n'

  // Insere antes do </main> final
  content = content.replace(
    /(\s*)<\/main>/,
    `${faqSchema}${fileSep}    </main>`
  )

  fs.writeFileSync(path, content, 'utf8')
  console.log(`OK - FAQ schema: ${path}`)
})

// ========== 3. LocalBusiness Schema na página de lojas ==========
let lojas = fs.readFileSync('app/lojas-paraguai/page.jsx', 'utf8')

if (!lojas.includes('LocalBusiness')) {
  const lojasSchema = `
<script
  type="application/ld+json"
  dangerouslySetInnerHTML={{ __html: JSON.stringify({
    "@context": "https://schema.org",
    "@type": "ItemList",
    "name": "Melhores Lojas do Paraguai em 2026",
    "description": "As lojas mais confiáveis de Ciudad del Este, Paraguai",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "item": { "@type": "Store", "name": "Shopping China", "address": { "@type": "PostalAddress", "streetAddress": "Av. Bernardino Caballero", "addressLocality": "Ciudad del Este", "addressCountry": "PY" } } },
      { "@type": "ListItem", "position": 2, "item": { "@type": "Store", "name": "Flytec Computers", "address": { "@type": "PostalAddress", "streetAddress": "Av. Monseñor Rodríguez", "addressLocality": "Ciudad del Este", "addressCountry": "PY" } } },
      { "@type": "ListItem", "position": 3, "item": { "@type": "Store", "name": "Mobile Zone", "address": { "@type": "PostalAddress", "addressLocality": "Ciudad del Este", "addressCountry": "PY" } } },
      { "@type": "ListItem", "position": 4, "item": { "@type": "Store", "name": "Visão VIP", "address": { "@type": "PostalAddress", "addressLocality": "Ciudad del Este", "addressCountry": "PY" } } },
      { "@type": "ListItem", "position": 5, "item": { "@type": "Store", "name": "Star Company", "address": { "@type": "PostalAddress", "addressLocality": "Ciudad del Este", "addressCountry": "PY" } } },
      { "@type": "ListItem", "position": 6, "item": { "@type": "Store", "name": "Elegancia Company", "address": { "@type": "PostalAddress", "addressLocality": "Ciudad del Este", "addressCountry": "PY" } } }
    ]
  }) }}
/>`

  const lojaSep = lojas.includes('\r\n') ? '\r\n' : '\n'
  lojas = lojas.replace(
    /(\s*)<\/main>/,
    `${lojasSchema}${lojaSep}    </main>`
  )
  fs.writeFileSync('app/lojas-paraguai/page.jsx', lojas, 'utf8')
  console.log('OK - LocalBusiness schema adicionado em lojas-paraguai')
} else {
  console.log('SKIP - lojas ja tem schema')
}

console.log('\nConcluido!')
