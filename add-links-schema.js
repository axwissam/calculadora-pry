const fs = require('fs');

// ===== 1. ADICIONA LINKS DAS NOVAS PÁGINAS NA HOME =====
let home = fs.readFileSync('app/page.jsx', 'utf8');

const oldGrid = `            { href: '/como-calcular-imposto-paraguai', icon: '🧮', label: 'Como calcular imposto Paraguai?' },`;
const newGrid = `            { href: '/celular-paraguai', icon: '📱', label: 'Celular no Paraguai 2026' },
            { href: '/notebook-paraguai', icon: '💻', label: 'Notebook no Paraguai 2026' },
            { href: '/whisky-paraguai', icon: '🥃', label: 'Whisky no Paraguai 2026' },
            { href: '/como-calcular-imposto-paraguai', icon: '🧮', label: 'Como calcular imposto Paraguai?' },`;

if (!home.includes(oldGrid)) {
  console.log('ERRO - grid nao encontrado');
  process.exit(1);
}
home = home.replace(oldGrid, newGrid);
fs.writeFileSync('app/page.jsx', home);
console.log('OK: links adicionados na home');

// ===== 2. SCHEMA FAQ NAS PÁGINAS PRINCIPAIS =====
const faqs = {
  'app/como-calcular-imposto-paraguai/page.jsx': null, // já tem schema
  'app/quanto-de-imposto-pagar-no-paraguai/page.jsx': {
    faqs: [
      { q: 'Quanto de imposto pago nas compras do Paraguai?', a: 'Você paga 50% de imposto sobre o valor que ultrapassar a cota de US$ 500 por pessoa. Por exemplo: comprou US$ 800, paga 50% de US$ 300 = US$ 150.' },
      { q: 'Qual é a cota de isenção do Paraguai em 2026?', a: 'US$ 500 por pessoa via terrestre (Ponte da Amizade) e US$ 1.000 via aérea.' },
      { q: 'O imposto é sobre o total ou só o excedente?', a: 'Apenas sobre o excedente acima dos US$ 500 de cota.' },
    ]
  },
  'app/cota-paraguai-via-terrestre/page.jsx': {
    faqs: [
      { q: 'Qual é a cota de compras no Paraguai via terrestre em 2026?', a: 'US$ 500 por pessoa via terrestre pela Ponte da Amizade ou Pedro Juan Caballero.' },
      { q: 'Posso somar a cota com minha família?', a: 'Sim! Cada pessoa tem direito a US$ 500 individuais, incluindo crianças. Uma família de 4 tem US$ 2.000 de cota total.' },
      { q: 'O que acontece se passar da cota?', a: 'Você paga 50% de imposto sobre o valor excedente, convertido pela cotação do dólar do dia.' },
    ]
  },
  'app/imposto-iphone-paraguai/page.jsx': {
    faqs: [
      { q: 'Vale a pena comprar iPhone no Paraguai?', a: 'Sim, mesmo pagando imposto o preço final costuma ser 20% a 30% mais barato que no Brasil.' },
      { q: 'Qual iPhone cabe na cota de US$ 500 do Paraguai?', a: 'Apenas o iPhone SE (US$ 429). Os demais modelos ultrapassam a cota e pagam 50% sobre o excedente.' },
      { q: 'Qual modelo de iPhone comprar no Paraguai?', a: 'Prefira o modelo americano (sufixo A), que tem garantia mundial e funciona com todas as operadoras brasileiras.' },
    ]
  },
  'app/perfume-paraguai/page.jsx': {
    faqs: [
      { q: 'Vale a pena comprar perfume no Paraguai?', a: 'Sim! Perfumes importados chegam a custar 50% menos do que no Brasil, sendo um dos melhores produtos para comprar.' },
      { q: 'Quantos perfumes posso trazer do Paraguai?', a: 'Não há limite de quantidade — o limite é a cota de US$ 500 por pessoa. Com perfumes a US$ 100 cada, dá para trazer 4-5 dentro da cota.' },
      { q: 'Quais marcas de perfume comprar no Paraguai?', a: 'Chanel, Dior, Carolina Herrera e YSL têm até 50% de desconto. Perfumes árabes como Lattafa e Armaf são excelentes e muito baratos.' },
    ]
  },
  'app/limite-compras-paraguai/page.jsx': {
    faqs: [
      { q: 'Qual é o limite de compras no Paraguai em 2026?', a: 'US$ 500 por pessoa via terrestre e US$ 1.000 via aérea, sem pagar imposto de importação.' },
      { q: 'O que acontece se passar do limite de US$ 500?', a: 'Você paga 50% de imposto sobre o valor excedente. Por exemplo: comprou US$ 700, paga 50% de US$ 200 = US$ 100 de imposto.' },
      { q: 'Crianças têm direito à cota de US$ 500?', a: 'Sim! Cada pessoa tem direito à cota, incluindo crianças de qualquer idade.' },
    ]
  },
}

for (const [filePath, data] of Object.entries(faqs)) {
  if (data === null) { console.log('SKIP:', filePath); continue; }
  if (!fs.existsSync(filePath)) { console.log('NAO EXISTE:', filePath); continue; }
  
  let c = fs.readFileSync(filePath, 'utf8');
  if (c.includes('FAQPage')) { console.log('JA TEM SCHEMA:', filePath); continue; }

  const schemaJson = JSON.stringify({
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": data.faqs.map(({ q, a }) => ({
      "@type": "Question",
      "name": q,
      "acceptedAnswer": { "@type": "Answer", "text": a }
    }))
  });

  const schema = `\n      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(${schemaJson}) }} />\n    </main>`;
  c = c.replace('    </main>', schema);
  fs.writeFileSync(filePath, c);
  console.log('OK schema:', filePath);
}
