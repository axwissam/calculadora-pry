import Link from 'next/link'
import BannerNomad from '../components/BannerNomad'

export const metadata = {
  title: 'Alfândega do Paraguai 2026 — O que pode trazer e como declarar | Calculadora Paraguai',
  description: 'Guia completo sobre a alfândega do Paraguai em 2026. Cota de US$ 500, como declarar no app e-DBV, o que é confiscado e como evitar problemas na volta.',
  keywords: 'alfandega paraguai 2026, como passar alfandega paraguai, declarar compras paraguai, cota paraguai 2026, receita federal paraguai',
}

export default function AlfandegaParaguai() {
  return (
    <main className="min-h-screen bg-gray-50 pb-16">
      <div className="bg-gradient-to-r from-green-600 to-green-500 px-5 pt-12 pb-8 text-white">
        <Link href="/" className="text-green-100 text-sm mb-4 block">← Calculadora</Link>
        <h1 className="text-2xl font-bold">Alfândega do Paraguai 2026</h1>
        <p className="text-green-100 mt-2 text-sm">Tudo o que você precisa saber para passar sem problemas na volta.</p>
      </div>

      <div className="px-4 py-6 max-w-2xl mx-auto space-y-5">

        <div className="bg-white rounded-2xl p-5 shadow-sm">
          <p className="text-gray-600 text-sm leading-relaxed">
            A alfândega do Paraguai é o principal ponto de atenção para quem vai a Ciudad del Este fazer compras. Conhecer as regras com antecedência evita confisco, multa e estresse na volta. Em 2026, as regras seguem as mesmas diretrizes da Receita Federal Brasileira para viajantes via terrestre.
          </p>
        </div>

        <div className="bg-white rounded-2xl p-5 shadow-sm">
          <h2 className="text-lg font-bold text-gray-800 mb-4">📋 Regras principais da alfândega</h2>
          <div className="space-y-3 text-sm text-gray-600">
            <div className="flex gap-3 bg-green-50 rounded-xl p-3">
              <span className="text-xl">💰</span>
              <div>
                <p className="font-bold text-green-800">Cota de isenção: US$ 500 por pessoa</p>
                <p className="text-green-700 mt-0.5">Cada viajante pode trazer até US$ 500 em produtos sem pagar imposto. Crianças também têm direito à cota individual. Uma família de 4 pessoas tem US$ 2.000 de cota total.</p>
              </div>
            </div>
            <div className="flex gap-3 bg-yellow-50 rounded-xl p-3">
              <span className="text-xl">🧮</span>
              <div>
                <p className="font-bold text-yellow-800">Imposto de 50% sobre o excedente</p>
                <p className="text-yellow-700 mt-0.5">Se ultrapassar a cota, você paga 50% sobre o valor excedente. Comprou US$ 700? Paga 50% de US$ 200 = US$ 100 de imposto. Vale a pena calcular antes de comprar.</p>
              </div>
            </div>
            <div className="flex gap-3 bg-blue-50 rounded-xl p-3">
              <span className="text-xl">📱</span>
              <div>
                <p className="font-bold text-blue-800">Use o app e-DBV antes de cruzar</p>
                <p className="text-blue-700 mt-0.5">O app e-DBV (Declaração de Bens do Viajante) da Receita Federal permite declarar suas compras antes de voltar ao Brasil. Evita filas e agiliza a passagem pela aduana.</p>
              </div>
            </div>
            <div className="flex gap-3 bg-red-50 rounded-xl p-3">
              <span className="text-xl">🚫</span>
              <div>
                <p className="font-bold text-red-800">O que pode ser confiscado</p>
                <p className="text-red-700 mt-0.5">Produtos sem nota fiscal, mercadorias em grande quantidade igual (fins comerciais), cigarros acima de 10 maços e bebidas acima de 12 litros podem ser apreendidos.</p>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-2xl p-5 shadow-sm">
          <h2 className="text-lg font-bold text-gray-800 mb-3">✅ Checklist antes de voltar ao Brasil</h2>
          <div className="space-y-2 text-sm text-gray-600">
            <div className="flex gap-2"><span>1️⃣</span><p>Guarde todas as notas fiscais das compras realizadas.</p></div>
            <div className="flex gap-2"><span>2️⃣</span><p>Some o valor total das compras e compare com a cota de US$ 500.</p></div>
            <div className="flex gap-2"><span>3️⃣</span><p>Declare no app e-DBV antes de cruzar a Ponte da Amizade.</p></div>
            <div className="flex gap-2"><span>4️⃣</span><p>Se houver imposto a pagar, tenha dinheiro em reais ou cartão disponível.</p></div>
            <div className="flex gap-2"><span>5️⃣</span><p>Distribua as compras entre os membros da família para aproveitar todas as cotas.</p></div>
          </div>
        </div>

        <div className="bg-green-50 border border-green-100 rounded-2xl p-5">
          <p className="font-bold text-green-800 mb-1">🧮 Calcule o imposto antes de comprar</p>
          <p className="text-green-700 text-sm mb-3">Use nossa calculadora com câmbio real do Banco Central para saber exatamente quanto vai pagar.</p>
          <Link href="/" className="block bg-green-500 text-white text-center py-3 rounded-xl font-semibold">Abrir Calculadora →</Link>
        </div>

        <div className="bg-gray-50 rounded-2xl p-4">
          <p className="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-3">Leia também</p>
          <div className="space-y-2">
            <Link href="/como-declarar-paraguai" className="flex items-center gap-3 bg-white rounded-xl px-4 py-3 text-sm text-gray-700 border border-gray-100 hover:border-green-300 transition-colors">
              <span className="text-lg">📋</span><span>Como declarar compras na Receita Federal</span><span className="ml-auto text-gray-400">→</span>
            </Link>
            <Link href="/limite-compras-paraguai" className="flex items-center gap-3 bg-white rounded-xl px-4 py-3 text-sm text-gray-700 border border-gray-100 hover:border-green-300 transition-colors">
              <span className="text-lg">🛃</span><span>Qual o limite de compras no Paraguai?</span><span className="ml-auto text-gray-400">→</span>
            </Link>
            <Link href="/como-calcular-imposto-paraguai" className="flex items-center gap-3 bg-white rounded-xl px-4 py-3 text-sm text-gray-700 border border-gray-100 hover:border-green-300 transition-colors">
              <span className="text-lg">🧮</span><span>Como calcular o imposto do Paraguai</span><span className="ml-auto text-gray-400">→</span>
            </Link>
          </div>
        </div>

        <BannerNomad />
      </div>

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": [
          { "@type": "Question", "name": "Qual é a cota de compras na alfândega do Paraguai em 2026?", "acceptedAnswer": { "@type": "Answer", "text": "A cota é de US$ 500 por pessoa via terrestre. Cada viajante tem direito à cota individual, incluindo crianças." } },
          { "@type": "Question", "name": "Como declarar compras na alfândega do Paraguai?", "acceptedAnswer": { "@type": "Answer", "text": "Use o app e-DBV (Declaração de Bens do Viajante) da Receita Federal antes de cruzar a Ponte da Amizade. O app é gratuito e disponível para Android e iOS." } },
          { "@type": "Question", "name": "O que pode ser confiscado na alfândega do Paraguai?", "acceptedAnswer": { "@type": "Answer", "text": "Produtos sem nota fiscal, mercadorias em grande quantidade (fins comerciais), cigarros acima de 10 maços e bebidas acima de 12 litros podem ser apreendidos." } }
        ]
      }) }} />
    </main>
  )
}
