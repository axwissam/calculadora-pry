import Link from 'next/link'
import BannerNomad from '../components/BannerNomad'
import Image from 'next/image'

export const metadata = {
  title: 'Melhores Lojas do Paraguai em 2026 | Guia Completo Ciudad del Este',
  description: 'Conheça as melhores e mais confiáveis lojas do Paraguai em 2026. Shopping China, Flytec, Mobile Zone, Visão VIP, Star Company e Elegancia com endereços e dicas.',
  keywords: 'melhores lojas paraguai, lojas confiáveis ciudad del este, onde comprar paraguai, shopping china paraguai, flytec paraguai',
}

const lojas = [
  {
    nome: 'Shopping China',
    foto: '/lojas/shopping-china.jpg',
    descricao: 'O maior shopping de importados do Paraguai, localizado às margens do Rio Paraná com vista para a Ponte da Amizade. Com mais de 600 lojas distribuídas em vários andares, é o destino preferido dos brasileiros que buscam eletrônicos, perfumes, roupas e muito mais. Estrutura moderna com praça de alimentação, estacionamento e segurança.',
    especialidade: '🏬 Eletrônicos, perfumes, roupas, acessórios',
    endereco: 'Av. Bernardino Caballero, Ciudad del Este, Paraguai',
    link: 'https://adfly.site/Fo224fb',
    destaque: 'Maior shopping de importados do PY',
  },
  {
    nome: 'Flytec Computers',
    foto: '/lojas/flytec.jpg',
    descricao: 'Referência em informática e tecnologia em Ciudad del Este. A Flytec é conhecida pelos preços competitivos em notebooks, componentes de PC, periféricos e eletrônicos em geral. Atende muito bem brasileiros e tem funcionários que falam português. Ótima reputação com anos de mercado.',
    especialidade: '💻 Notebooks, PCs, componentes, periféricos',
    endereco: 'Microcentro, Ciudad del Este, Paraguai',
    link: 'https://adfly.site/RNwEMA',
    destaque: 'Especialista em informática',
  },
  {
    nome: 'Mobile Zone Internacional',
    foto: '/lojas/mobile-zone.jpg',
    descricao: 'Especializada em smartphones e acessórios mobile, a Mobile Zone é uma das lojas mais procuradas para quem quer comprar celular no Paraguai. Trabalha com as principais marcas como Apple, Samsung e Xiaomi, com garantia e nota fiscal. Atendimento em português.',
    especialidade: '📱 Celulares, tablets, smartwatches',
    endereco: 'Shopping China e Microcentro, Ciudad del Este',
    link: 'https://adfly.site/fBYK2p',
    destaque: 'Melhor para comprar iPhone no PY',
  },
  {
    nome: 'Visão VIP Informática',
    foto: '/lojas/visao-vip.jpg',
    descricao: 'Uma das lojas de informática mais completas do Paraguai, com foco em notebooks, desktops e componentes. A Visão VIP tem preços agressivos e grande variedade de produtos de marcas como Dell, Lenovo, ASUS e MSI. Muito frequentada por brasileiros de toda a região.',
    especialidade: '🖥️ Notebooks, desktops, monitores, hardware',
    endereco: 'Microcentro, Ciudad del Este, Paraguai',
    link: 'https://adfly.site/visaovip',
    destaque: 'Melhor custo-benefício em notebooks',
  },
  {
    nome: 'Star Company',
    foto: '/lojas/star-company.jpg',
    descricao: 'A Star Company é referência em perfumes importados no Paraguai, com um dos maiores acervos de fragrâncias do país. Trabalha com marcas premium como Chanel, Dior, Versace, YSL e dezenas de perfumes árabes exclusivos. Ambiente sofisticado e atendimento especializado.',
    especialidade: '🌟 Perfumes importados, cosméticos, fragrâncias árabes',
    endereco: 'Av. Adrián Jara, Ciudad del Este, Paraguai',
    link: 'https://adfly.site/starcompany',
    destaque: 'Maior variedade de perfumes do PY',
  },
  {
    nome: 'Elegancia Company',
    foto: '/lojas/elegancia.jpg',
    descricao: 'Especializada em cosméticos, perfumes e produtos de beleza importados, a Elegancia é muito popular entre as brasileiras que visitam o Paraguai. Conta com produtos de marcas internacionais a preços bem abaixo do Brasil, além de uma linha completa de perfumes árabes e maquiagem profissional.',
    especialidade: '💄 Cosméticos, maquiagem, perfumes, beleza',
    endereco: 'Shopping China e Microcentro, Ciudad del Este',
    link: 'https://adfly.site/elegancia',
    destaque: 'Referência em cosméticos e beleza',
  },
]

export default function LojasParaguai() {
  return (
    <main className="min-h-screen bg-gray-50 pb-16">
      <div className="bg-gradient-to-r from-green-600 to-green-500 px-5 pt-12 pb-8 text-white">
        <Link href="/" className="text-green-100 text-sm mb-4 block">← Calculadora</Link>
        <h1 className="text-2xl font-bold">🏪 Melhores Lojas do Paraguai 2026</h1>
        <p className="text-green-100 mt-2 text-sm">As lojas mais confiáveis de Ciudad del Este para brasileiros</p>
      </div>

      <div className="px-4 py-6 max-w-2xl mx-auto space-y-6">

        <div className="bg-yellow-50 border border-yellow-200 rounded-2xl p-4 text-sm text-yellow-800">
          💡 <strong>Dica:</strong> Use nossa calculadora para saber exatamente quanto você vai pagar com imposto antes de comprar!
          <Link href="/" className="block mt-2 text-green-700 font-semibold underline">→ Abrir Calculadora de Imposto</Link>
        </div>

        {lojas.map((loja) => (
          <div key={loja.nome} className="bg-white rounded-2xl shadow-sm overflow-hidden">
            <div className="relative w-full h-52">
              <Image
                src={loja.foto}
                alt={`Fachada da loja ${loja.nome} em Ciudad del Este, Paraguai`}
                fill
                className="object-cover"
               loading="lazy"/>
              <div className="absolute top-3 left-3 bg-green-500 text-white text-xs font-bold px-3 py-1 rounded-full">
                {loja.destaque}
              </div>
            </div>
            <div className="p-5 space-y-3">
              <h2 className="text-xl font-bold text-gray-800">{loja.nome}</h2>
              <p className="text-xs font-medium text-green-600 bg-green-50 inline-block px-3 py-1 rounded-full">{loja.especialidade}</p>
              <p className="text-gray-600 text-sm leading-relaxed">{loja.descricao}</p>
              <div className="flex items-start gap-2 text-xs text-gray-500">
                <span>📍</span>
                <span>{loja.endereco}</span>
              </div>
              <a
                href={loja.link}
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full bg-green-500 hover:bg-green-600 text-white text-center py-3 rounded-xl font-semibold transition-colors"
              >
                Visitar site da loja →
              </a>
            </div>
          </div>
        ))}

        <div className="bg-white rounded-2xl p-5 shadow-sm text-sm text-gray-600 space-y-3">
          <h2 className="font-bold text-gray-800 text-base">📋 Dicas para comprar no Paraguai</h2>
          <p>Antes de visitar qualquer loja em Ciudad del Este, calcule o imposto de importação. Cada pessoa tem direito a trazer <strong>até US$ 500 sem pagar imposto</strong> via terrestre. Acima disso, incide 50% sobre o excedente.</p>
          <p>Leve <strong>reais em espécie</strong> para as melhores cotações, ou use cartão Nomad/Wise para evitar IOF. Evite cartões de crédito comuns que cobram IOF de 3,5% + spread bancário.</p>
          <p>Sempre <strong>peça nota fiscal</strong> nas lojas — é obrigatória para declaração na Receita Federal ao retornar ao Brasil.</p>
        </div>

        <div className="bg-green-50 border border-green-100 rounded-2xl p-5">
          <p className="font-bold text-green-800 mb-1">Calcule o imposto antes de comprar</p>
          <p className="text-green-700 text-sm mb-3">Saiba exatamente quanto vai pagar no total com nossa calculadora gratuita.</p>
          <Link href="/" className="block bg-green-500 text-white text-center py-3 rounded-xl font-semibold">
            Abrir Calculadora →
          </Link>
        </div>

        <BannerNomad />
      </div>
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
/>
    </main>
  )
}
