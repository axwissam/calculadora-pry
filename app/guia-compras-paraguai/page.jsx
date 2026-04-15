import Link from 'next/link'
import BannerNomad from '../components/BannerNomad'

export const metadata = {
  title: 'Guia Completo de Compras no Paraguai 2026 — Do Zero ao Checkout | Calculadora Paraguai',
  description: 'Guia completo para comprar no Paraguai em 2026. O que levar, como negociar, onde comprar cada produto, como pagar e como voltar sem problema na alfândega.',
  keywords: 'guia compras paraguai 2026, como comprar no paraguai, dicas compras ciudad del este, o que levar para o paraguai, guia paraguai brasileiro',
}

export default function GuiaComprasParaguai() {
  return (
    <main className="min-h-screen bg-gray-50 pb-16">
      <div className="bg-gradient-to-r from-green-600 to-green-500 px-5 pt-12 pb-8 text-white">
        <Link href="/" className="text-green-100 text-sm mb-4 block">← Calculadora</Link>
        <h1 className="text-2xl font-bold">Guia Completo de Compras no Paraguai 2026</h1>
        <p className="text-green-100 mt-2 text-sm">Do planejamento até a volta — tudo que você precisa saber.</p>
      </div>

      <div className="px-4 py-6 max-w-2xl mx-auto space-y-5">

        <div className="bg-white rounded-2xl p-5 shadow-sm">
          <p className="text-gray-600 text-sm leading-relaxed">
            Comprar no Paraguai pode ser uma ótima experiência ou um pesadelo — tudo depende do preparo. Brasileiros que vão sem planejamento costumam pagar mais caro, cair em golpes ou ter produtos confiscados na alfândega. Este guia cobre tudo do início ao fim para você aproveitar ao máximo.
          </p>
        </div>

        <div className="bg-white rounded-2xl p-5 shadow-sm">
          <h2 className="text-lg font-bold text-gray-800 mb-4">📋 Antes de sair de casa</h2>
          <div className="space-y-2 text-sm text-gray-600">
            <div className="flex gap-2 bg-gray-50 rounded-xl p-3"><span>✅</span><p><strong>Defina o que vai comprar</strong> e pesquise o preço médio em dólar de cada item.</p></div>
            <div className="flex gap-2 bg-gray-50 rounded-xl p-3"><span>✅</span><p><strong>Use a calculadora</strong> para saber o preço final em reais com imposto incluído.</p></div>
            <div className="flex gap-2 bg-gray-50 rounded-xl p-3"><span>✅</span><p><strong>Baixe o app e-DBV</strong> da Receita Federal para declarar as compras na volta.</p></div>
            <div className="flex gap-2 bg-gray-50 rounded-xl p-3"><span>✅</span><p><strong>Leve RG ou CNH</strong> — passaporte não é obrigatório para brasileiros.</p></div>
            <div className="flex gap-2 bg-gray-50 rounded-xl p-3"><span>✅</span><p><strong>Abra uma conta Nomad</strong> para pagar sem IOF e com câmbio real.</p></div>
          </div>
        </div>

        <div className="bg-white rounded-2xl p-5 shadow-sm">
          <h2 className="text-lg font-bold text-gray-800 mb-4">🏪 Onde comprar cada produto</h2>
          <div className="space-y-2 text-sm">
            {[
              { produto: 'iPhone e produtos Apple', local: 'Mobile Zone', icon: '📱' },
              { produto: 'MacBook e notebooks', local: 'Flytec Computers', icon: '💻' },
              { produto: 'Samsung e Android', local: 'Mobile Zone / Shopping China', icon: '📲' },
              { produto: 'PS5 e videogames', local: 'Shopping China / lojas de games', icon: '🎮' },
              { produto: 'Perfumes importados', local: 'Star Company / Elegancia', icon: '🌸' },
              { produto: 'Whisky e bebidas', local: 'Free shops e lojas especializadas', icon: '🥃' },
            ].map(({ produto, local, icon }) => (
              <div key={produto} className="flex items-center justify-between bg-gray-50 rounded-xl px-4 py-3">
                <div className="flex items-center gap-2">
                  <span>{icon}</span>
                  <span className="font-medium text-gray-800">{produto}</span>
                </div>
                <span className="text-xs text-green-700 font-semibold">{local}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white rounded-2xl p-5 shadow-sm">
          <h2 className="text-lg font-bold text-gray-800 mb-3">💰 Como negociar e pagar</h2>
          <div className="space-y-2 text-sm text-gray-600">
            <div className="flex gap-2"><span>🗣️</span><p><strong>Negocie sempre</strong> — os preços em CDE raramente são fixos. Peça desconto, especialmente em compras maiores.</p></div>
            <div className="flex gap-2"><span>💵</span><p><strong>Dinheiro em dólar</strong> geralmente dá mais desconto que cartão. Mas atenção ao limite que você carrega.</p></div>
            <div className="flex gap-2"><span>💳</span><p><strong>Cartão Nomad</strong> é a melhor opção digital — sem IOF, câmbio real e seguro para valores maiores.</p></div>
            <div className="flex gap-2"><span>🚫</span><p><strong>Nunca faça câmbio na rua</strong> — risco alto de notas falsas e golpe no troco.</p></div>
          </div>
        </div>

        <div className="bg-white rounded-2xl p-5 shadow-sm">
          <h2 className="text-lg font-bold text-gray-800 mb-3">🛃 Na volta — alfândega sem estresse</h2>
          <div className="space-y-2 text-sm text-gray-600">
            <div className="flex gap-2"><span>📱</span><p>Declare tudo no <strong>app e-DBV</strong> antes de cruzar a ponte.</p></div>
            <div className="flex gap-2"><span>🧾</span><p>Tenha as <strong>notas fiscais</strong> de todas as compras organizadas e acessíveis.</p></div>
            <div className="flex gap-2"><span>💰</span><p>Se ultrapassou a cota de US$ 500, <strong>pague o imposto</strong> — é 50% sobre o excedente.</p></div>
            <div className="flex gap-2"><span>👨‍👩‍👧</span><p><strong>Distribua entre a família</strong> — cada pessoa tem direito à sua própria cota de US$ 500.</p></div>
          </div>
        </div>

        <div className="bg-green-50 border border-green-100 rounded-2xl p-5">
          <p className="font-bold text-green-800 mb-1">🧮 Calcule antes de comprar</p>
          <p className="text-green-700 text-sm mb-3">Use nossa calculadora para saber o preço final com câmbio e imposto incluídos.</p>
          <Link href="/" className="block bg-green-500 text-white text-center py-3 rounded-xl font-semibold">Abrir Calculadora →</Link>
        </div>

        <div className="bg-gray-50 rounded-2xl p-4">
          <p className="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-3">Leia também</p>
          <div className="space-y-2">
            <Link href="/como-nao-cair-em-golpes-paraguai" className="flex items-center gap-3 bg-white rounded-xl px-4 py-3 text-sm text-gray-700 border border-gray-100 hover:border-green-300 transition-colors">
              <span className="text-lg">🚨</span><span>Como não cair em golpes no Paraguai</span><span className="ml-auto text-gray-400">→</span>
            </Link>
            <Link href="/como-chegar-ciudad-del-este" className="flex items-center gap-3 bg-white rounded-xl px-4 py-3 text-sm text-gray-700 border border-gray-100 hover:border-green-300 transition-colors">
              <span className="text-lg">🗺️</span><span>Como chegar em Ciudad del Este</span><span className="ml-auto text-gray-400">→</span>
            </Link>
            <Link href="/alfandega-paraguai" className="flex items-center gap-3 bg-white rounded-xl px-4 py-3 text-sm text-gray-700 border border-gray-100 hover:border-green-300 transition-colors">
              <span className="text-lg">🛃</span><span>Alfândega do Paraguai — regras e cota</span><span className="ml-auto text-gray-400">→</span>
            </Link>
          </div>
        </div>

        <BannerNomad />
      </div>

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": [
          { "@type": "Question", "name": "O que levar para comprar no Paraguai?", "acceptedAnswer": { "@type": "Answer", "text": "Leve RG ou CNH, dinheiro em dólar ou cartão Nomad, o app e-DBV instalado no celular e a lista dos produtos que quer comprar com os preços pesquisados previamente." } },
          { "@type": "Question", "name": "Como negociar preço em Ciudad del Este?", "acceptedAnswer": { "@type": "Answer", "text": "Os preços raramente são fixos em CDE. Peça desconto sempre, especialmente em compras maiores. Pagar em dinheiro geralmente dá mais margem para negociação do que cartão." } },
          { "@type": "Question", "name": "Qual o melhor guia de compras para o Paraguai em 2026?", "acceptedAnswer": { "@type": "Answer", "text": "Pesquise os preços antes de ir usando a calculadora, defina a lista de produtos, leve cartão Nomad para pagar sem IOF, exija nota fiscal em tudo e declare no app e-DBV na volta." } }
        ]
      }) }} />
    </main>
  )
}
