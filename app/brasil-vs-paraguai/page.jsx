import Link from 'next/link'
import BannerNomad from '../components/BannerNomad'

export const metadata = {
  title: 'Brasil vs Paraguai — O que é mais barato comprar no Paraguai? | Calculadora Paraguai',
  description: 'Comparativo completo: o que é mais barato comprar no Paraguai vs Brasil em 2026. Eletrônicos, perfumes, roupas e bebidas com diferença de preço real calculada.',
  keywords: 'brasil vs paraguai precos, o que e mais barato paraguai, vale a pena comprar paraguai 2026, comparativo precos paraguai brasil, diferenca preco paraguai',
}

const itens = [
  { produto: 'iPhone 16 128GB', brasil: 'R$ 7.999', paraguai: '~R$ 4.950', economia: '~R$ 3.050', vale: true, obs: 'Com imposto incluído' },
  { produto: 'MacBook Air M3', brasil: 'R$ 11.999', paraguai: '~R$ 7.342', economia: '~R$ 4.657', vale: true, obs: 'Com imposto incluído' },
  { produto: 'AirPods Pro 2', brasil: 'R$ 2.199', paraguai: '~R$ 1.310', economia: '~R$ 889', vale: true, obs: 'Sem imposto (dentro da cota)' },
  { produto: 'PS5 Slim Digital', brasil: 'R$ 3.799', paraguai: '~R$ 1.832', economia: '~R$ 1.967', vale: true, obs: 'Sem imposto (dentro da cota)' },
  { produto: 'Chanel N°5 100ml', brasil: 'R$ 1.350', paraguai: '~R$ 760', economia: '~R$ 590', vale: true, obs: 'Sem imposto (dentro da cota)' },
  { produto: 'Whisky Jack Daniels 1L', brasil: 'R$ 120', paraguai: '~R$ 65', economia: '~R$ 55', vale: true, obs: 'Limite: 12 litros por pessoa' },
  { produto: 'Alimentos e supermercado', brasil: 'Preço local', paraguai: 'Similar', economia: 'Pouco', vale: false, obs: 'Não vale a viagem só pra isso' },
]

export default function BrasilVsParaguai() {
  return (
    <main className="min-h-screen bg-gray-50 pb-16">
      <div className="bg-gradient-to-r from-green-600 to-green-500 px-5 pt-12 pb-8 text-white">
        <Link href="/" className="text-green-100 text-sm mb-4 block">← Calculadora</Link>
        <h1 className="text-2xl font-bold">Brasil vs Paraguai — O que compensa comprar?</h1>
        <p className="text-green-100 mt-2 text-sm">Comparativo real de preços com imposto incluído em 2026.</p>
      </div>

      <div className="px-4 py-6 max-w-2xl mx-auto space-y-5">

        <div className="bg-white rounded-2xl p-5 shadow-sm">
          <p className="text-gray-600 text-sm leading-relaxed">
            A grande dúvida de quem planeja uma viagem ao Paraguai é: realmente vale a pena comprar lá? A resposta depende do produto. Em eletrônicos, perfumes e bebidas importadas, a economia pode passar de 40% mesmo depois de pagar o imposto de importação. Confira o comparativo atualizado para 2026.
          </p>
        </div>

        <div className="bg-white rounded-2xl p-5 shadow-sm">
          <h2 className="text-lg font-bold text-gray-800 mb-3">📊 Tabela comparativa Brasil vs Paraguai 2026</h2>
          <div className="space-y-2">
            {itens.map(({ produto, brasil, paraguai, economia, vale, obs }) => (
              <div key={produto} className={`rounded-xl p-3 ${vale ? 'bg-green-50' : 'bg-gray-50'}`}>
                <div className="flex items-center justify-between mb-1">
                  <p className="font-bold text-gray-800 text-sm">{produto}</p>
                  <span className={`text-xs px-2 py-0.5 rounded-full font-semibold ${vale ? 'bg-green-500 text-white' : 'bg-gray-300 text-gray-600'}`}>
                    {vale ? '✅ Vale' : '➡️ Neutro'}
                  </span>
                </div>
                <div className="grid grid-cols-3 gap-1 text-xs mt-1">
                  <div><p className="text-gray-400">Brasil</p><p className="font-semibold text-gray-700">{brasil}</p></div>
                  <div><p className="text-gray-400">Paraguai</p><p className="font-semibold text-green-700">{paraguai}</p></div>
                  <div><p className="text-gray-400">Economia</p><p className="font-bold text-blue-600">{economia}</p></div>
                </div>
                <p className="text-gray-400 text-xs mt-1 italic">{obs}</p>
              </div>
            ))}
          </div>
          <p className="text-xs text-gray-400 mt-3">* Preços aproximados com câmbio de R$ 5,25. Use a calculadora para o valor exato do dia.</p>
        </div>

        <div className="bg-white rounded-2xl p-5 shadow-sm">
          <h2 className="text-lg font-bold text-gray-800 mb-3">💡 Quando vale a pena ir ao Paraguai?</h2>
          <div className="space-y-2 text-sm text-gray-600">
            <div className="flex gap-2 bg-green-50 rounded-xl p-3"><span>✅</span><p>Vale muito a pena para <strong>eletrônicos, perfumes importados e bebidas</strong> — economia real de 30% a 50%.</p></div>
            <div className="flex gap-2 bg-blue-50 rounded-xl p-3"><span>💳</span><p>Use <strong>Nomad ou dinheiro</strong> para evitar IOF e maximizar a economia.</p></div>
            <div className="flex gap-2 bg-yellow-50 rounded-xl p-3"><span>🧮</span><p>Sempre <strong>calcule o imposto antes</strong> — produtos acima de US$ 500 pagam 50% sobre o excedente.</p></div>
          </div>
        </div>

        <div className="bg-green-50 border border-green-100 rounded-2xl p-5">
          <p className="font-bold text-green-800 mb-1">🧮 Calcule sua economia real</p>
          <p className="text-green-700 text-sm mb-3">Nossa calculadora usa o câmbio do Banco Central e já inclui o imposto de importação.</p>
          <Link href="/" className="block bg-green-500 text-white text-center py-3 rounded-xl font-semibold">Abrir Calculadora →</Link>
        </div>

        <div className="bg-gray-50 rounded-2xl p-4">
          <p className="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-3">Leia também</p>
          <div className="space-y-2">
            <Link href="/o-que-comprar-paraguai" className="flex items-center gap-3 bg-white rounded-xl px-4 py-3 text-sm text-gray-700 border border-gray-100 hover:border-green-300 transition-colors">
              <span className="text-lg">🛍️</span><span>O que vale a pena comprar no Paraguai</span><span className="ml-auto text-gray-400">→</span>
            </Link>
            <Link href="/limite-compras-paraguai" className="flex items-center gap-3 bg-white rounded-xl px-4 py-3 text-sm text-gray-700 border border-gray-100 hover:border-green-300 transition-colors">
              <span className="text-lg">🛃</span><span>Qual o limite de compras no Paraguai?</span><span className="ml-auto text-gray-400">→</span>
            </Link>
            <Link href="/melhor-forma-pagamento-paraguai" className="flex items-center gap-3 bg-white rounded-xl px-4 py-3 text-sm text-gray-700 border border-gray-100 hover:border-green-300 transition-colors">
              <span className="text-lg">💳</span><span>Melhor forma de pagamento no Paraguai</span><span className="ml-auto text-gray-400">→</span>
            </Link>
          </div>
        </div>

        <BannerNomad />
      </div>

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": [
          { "@type": "Question", "name": "O que é mais barato comprar no Paraguai do que no Brasil?", "acceptedAnswer": { "@type": "Answer", "text": "Eletrônicos (iPhone, MacBook, PS5), perfumes importados (Chanel, Dior), whisky e bebidas importadas são significativamente mais baratos no Paraguai — economia de 30% a 50% mesmo após o imposto." } },
          { "@type": "Question", "name": "Vale a pena ir ao Paraguai para fazer compras em 2026?", "acceptedAnswer": { "@type": "Answer", "text": "Sim, especialmente para eletrônicos e perfumes importados. Um iPhone 16 sai ~R$ 3.000 mais barato e um MacBook Air M3 ~R$ 4.600 mais barato, mesmo pagando imposto de importação." } },
          { "@type": "Question", "name": "Quanto economizo comprando no Paraguai?", "acceptedAnswer": { "@type": "Answer", "text": "Depende do produto: eletrônicos Apple têm economia de 25% a 35%, perfumes importados de 40% a 50%, e videogames como PS5 de até 50%. Use a calculadora para o valor exato." } }
        ]
      }) }} />
    </main>
  )
}
