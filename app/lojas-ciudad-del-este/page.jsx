import Link from 'next/link'
import BannerNomad from '../components/BannerNomad'

export const metadata = {
  title: 'Melhores Lojas de Ciudad del Este 2026 — Onde Comprar? | Calculadora Paraguai',
  description: 'Conheça as melhores lojas de Ciudad del Este em 2026. Mobile Zone, Flytec, Shopping China e mais — onde comprar eletrônicos, perfumes e roupas com segurança.',
  keywords: 'lojas ciudad del este 2026, melhor loja paraguai, mobile zone paraguai, flytec paraguai, shopping china paraguai, onde comprar ciudad del este',
}

const lojasList = [
  {
    nome: 'Mobile Zone',
    categoria: 'Eletrônicos Apple',
    icon: '📱',
    descricao: 'Referência em produtos Apple em Ciudad del Este. Ótima reputação com brasileiros, produtos originais com nota fiscal. Especializada em iPhone, MacBook e AirPods.',
    destaque: 'Melhor para: iPhone e Apple em geral',
    cor: 'green',
  },
  {
    nome: 'Flytec Computers',
    categoria: 'Notebooks e Computadores',
    icon: '💻',
    descricao: 'Uma das mais tradicionais de CDE para notebooks e eletrônicos. Excelente para MacBook, notebooks Windows e periféricos. Atende muito bem clientes brasileiros.',
    destaque: 'Melhor para: MacBook e notebooks',
    cor: 'blue',
  },
  {
    nome: 'Shopping China',
    categoria: 'Shopping Multi-lojas',
    icon: '🏬',
    descricao: 'Grande complexo com dezenas de lojas de eletrônicos, perfumes, roupas e acessórios. Bom para comparar preços entre vendedores. Atenção: negocie sempre.',
    destaque: 'Melhor para: comparar preços',
    cor: 'yellow',
  },
  {
    nome: 'Star Company',
    categoria: 'Perfumes Importados',
    icon: '🌸',
    descricao: 'Referência absoluta em perfumes importados em CDE. Melhor variedade de Chanel, Dior e Carolina Herrera com autenticidade garantida e nota fiscal.',
    destaque: 'Melhor para: perfumes originais',
    cor: 'purple',
  },
]

export default function LojasCiudadDelEste() {
  return (
    <main className="min-h-screen bg-gray-50 pb-16">
      <div className="bg-gradient-to-r from-green-600 to-green-500 px-5 pt-12 pb-8 text-white">
        <Link href="/" className="text-green-100 text-sm mb-4 block">← Calculadora</Link>
        <h1 className="text-2xl font-bold">Melhores Lojas de Ciudad del Este 2026</h1>
        <p className="text-green-100 mt-2 text-sm">Onde comprar com segurança e garantia de produto original.</p>
      </div>

      <div className="px-4 py-6 max-w-2xl mx-auto space-y-5">

        <div className="bg-white rounded-2xl p-5 shadow-sm">
          <p className="text-gray-600 text-sm leading-relaxed">
            Ciudad del Este tem centenas de lojas, mas nem todas são confiáveis. Saber onde comprar faz toda a diferença para garantir produto original, nota fiscal e bom atendimento. Esta lista reúne as lojas com melhor reputação entre os compradores brasileiros em 2026.
          </p>
        </div>

        <div className="space-y-3">
          {lojasList.map(({ nome, categoria, icon, descricao, destaque, cor }) => (
            <div key={nome} className={`rounded-2xl p-5 border ${
              cor === 'green' ? 'bg-green-50 border-green-200' :
              cor === 'blue' ? 'bg-blue-50 border-blue-200' :
              cor === 'yellow' ? 'bg-yellow-50 border-yellow-200' :
              'bg-purple-50 border-purple-200'
            }`}>
              <div className="flex items-start justify-between mb-2">
                <div>
                  <p className="font-bold text-base text-gray-800">{icon} {nome}</p>
                  <p className="text-xs text-gray-500 mt-0.5">{categoria}</p>
                </div>
                <span className="text-xs font-semibold px-2 py-1 rounded-full bg-white text-gray-600 border">⭐ Top</span>
              </div>
              <p className="text-gray-600 text-sm">{descricao}</p>
              <p className="text-xs font-bold mt-2 text-gray-700">{destaque}</p>
            </div>
          ))}
        </div>

        <div className="bg-white rounded-2xl p-5 shadow-sm">
          <h2 className="text-lg font-bold text-gray-800 mb-3">⚠️ Cuidados ao comprar em CDE</h2>
          <div className="space-y-2 text-sm text-gray-600">
            <div className="flex gap-2"><span>🧾</span><p><strong>Sempre exija nota fiscal</strong> — necessária para declarar na Receita Federal e acionar garantia.</p></div>
            <div className="flex gap-2"><span>🔍</span><p><strong>Verifique o produto antes de pagar</strong> — ligue, teste e confira o número de série.</p></div>
            <div className="flex gap-2"><span>💵</span><p><strong>Pague em dinheiro ou cartão Nomad</strong> — evita IOF de 3,5% e spread de cartões comuns.</p></div>
            <div className="flex gap-2"><span>🚶</span><p><strong>Evite ambulantes e abordagens na rua</strong> — risco alto de produto falsificado ou roubado.</p></div>
          </div>
        </div>

        <div className="bg-green-50 border border-green-100 rounded-2xl p-5">
          <p className="font-bold text-green-800 mb-1">🧮 Calcule o imposto antes de comprar</p>
          <p className="text-green-700 text-sm mb-3">Saiba exatamente quanto vai pagar com câmbio real do Banco Central.</p>
          <Link href="/" className="block bg-green-500 text-white text-center py-3 rounded-xl font-semibold">Abrir Calculadora →</Link>
        </div>

        <div className="bg-gray-50 rounded-2xl p-4">
          <p className="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-3">Leia também</p>
          <div className="space-y-2">
            <Link href="/o-que-comprar-paraguai" className="flex items-center gap-3 bg-white rounded-xl px-4 py-3 text-sm text-gray-700 border border-gray-100 hover:border-green-300 transition-colors">
              <span className="text-lg">🛍️</span><span>O que vale a pena comprar no Paraguai</span><span className="ml-auto text-gray-400">→</span>
            </Link>
            <Link href="/melhor-forma-pagamento-paraguai" className="flex items-center gap-3 bg-white rounded-xl px-4 py-3 text-sm text-gray-700 border border-gray-100 hover:border-green-300 transition-colors">
              <span className="text-lg">💳</span><span>Melhor forma de pagamento no Paraguai</span><span className="ml-auto text-gray-400">→</span>
            </Link>
            <Link href="/perfume-paraguai" className="flex items-center gap-3 bg-white rounded-xl px-4 py-3 text-sm text-gray-700 border border-gray-100 hover:border-green-300 transition-colors">
              <span className="text-lg">🌸</span><span>Perfumes no Paraguai — vale a pena?</span><span className="ml-auto text-gray-400">→</span>
            </Link>
          </div>
        </div>

        <BannerNomad />
      </div>

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": [
          { "@type": "Question", "name": "Qual a melhor loja para comprar iPhone em Ciudad del Este?", "acceptedAnswer": { "@type": "Answer", "text": "A Mobile Zone é a mais recomendada para produtos Apple em Ciudad del Este. Tem ótima reputação com brasileiros, produtos originais e emite nota fiscal." } },
          { "@type": "Question", "name": "O Shopping China de Ciudad del Este é confiável?", "acceptedAnswer": { "@type": "Answer", "text": "Sim, mas é preciso cautela. O Shopping China tem dezenas de lojas com qualidade variada. Compare preços entre vendedores, exija nota fiscal e verifique o produto antes de pagar." } },
          { "@type": "Question", "name": "Onde comprar perfume original em Ciudad del Este?", "acceptedAnswer": { "@type": "Answer", "text": "A Star Company é a referência em perfumes importados originais em CDE, com grande variedade de Chanel, Dior e outras marcas premium com nota fiscal garantida." } }
        ]
      }) }} />
    </main>
  )
}
