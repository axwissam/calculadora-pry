import Link from 'next/link'
import BannerNomad from '../components/BannerNomad'

export const metadata = {
  title: 'Quanto custa um iPhone no Paraguai em 2026? | Calculadora Paraguai',
  description: 'Veja os preços reais do iPhone no Paraguai em 2026 com imposto calculado em reais. iPhone 15, 16, Pro e SE — quanto sai no total para o brasileiro.',
  keywords: 'quanto custa iphone paraguai, preco iphone paraguai 2026, iphone 16 paraguai reais, iphone paraguai com imposto',
}

const modelos = [
  { modelo: 'iPhone SE (3ª geração)', usd: 429, brasil: 4299, cota: true },
  { modelo: 'iPhone 15 128GB', usd: 699, brasil: 7299, cota: false },
  { modelo: 'iPhone 15 Plus 128GB', usd: 799, brasil: 8299, cota: false },
  { modelo: 'iPhone 15 Pro 128GB', usd: 999, brasil: 9799, cota: false },
  { modelo: 'iPhone 16 128GB', usd: 799, brasil: 7999, cota: false },
  { modelo: 'iPhone 16 Plus 128GB', usd: 899, brasil: 8999, cota: false },
  { modelo: 'iPhone 16 Pro 128GB', usd: 1099, brasil: 10999, cota: false },
  { modelo: 'iPhone 16 Pro Max 256GB', usd: 1299, brasil: 13499, cota: false },
]

const COTACAO = 5.25

function calcImposto(usd) {
  const excedente = Math.max(0, usd - 500)
  return excedente * 0.5
}

function totalBRL(usd) {
  return (usd + calcImposto(usd)) * COTACAO
}

function economia(usd, brasil) {
  return brasil - totalBRL(usd)
}

export default function QuantoCustaIphoneParaguai() {
  return (
    <main className="min-h-screen bg-gray-50 pb-16">
      <div className="bg-gradient-to-r from-green-600 to-green-500 px-5 pt-12 pb-8 text-white">
        <Link href="/" className="text-green-100 text-sm mb-4 block">← Calculadora</Link>
        <h1 className="text-2xl font-bold">Quanto custa um iPhone no Paraguai em 2026?</h1>
        <p className="text-green-100 mt-2 text-sm">Preços reais com imposto de importação já calculado em reais.</p>
      </div>

      <div className="px-4 py-6 max-w-2xl mx-auto space-y-5">

        <div className="bg-white rounded-2xl p-5 shadow-sm">
          <p className="text-gray-600 text-sm leading-relaxed">
            Comprar iPhone no Paraguai é uma das estratégias mais populares entre os brasileiros que visitam Ciudad del Este. Mesmo após pagar o <strong>imposto de importação de 50% sobre o excedente da cota de US$ 500</strong>, o preço final ainda pode ser <strong>20% a 35% menor</strong> do que no Brasil. Nesta página você encontra os preços atualizados de cada modelo com o cálculo completo já feito.
          </p>
        </div>

        <div className="bg-white rounded-2xl p-5 shadow-sm">
          <h2 className="text-lg font-bold text-gray-800 mb-1">📱 Tabela de preços — iPhone no Paraguai 2026</h2>
          <p className="text-xs text-gray-400 mb-3">Cotação base: US$ 1 = R$ {COTACAO.toFixed(2)}. Use a calculadora para o valor exato do dia.</p>
          <div className="space-y-3">
            {modelos.map(({ modelo, usd, brasil, cota }) => {
              const imposto = calcImposto(usd)
              const total = totalBRL(usd)
              const eco = economia(usd, brasil)
              return (
                <div key={modelo} className={`rounded-xl p-4 ${cota ? 'bg-green-50 border border-green-100' : 'bg-gray-50'}`}>
                  <div className="flex items-start justify-between">
                    <p className="font-bold text-gray-800 text-sm">{modelo}</p>
                    {cota ? (
                      <span className="text-xs bg-green-500 text-white px-2 py-0.5 rounded-full">Sem imposto ✅</span>
                    ) : (
                      <span className="text-xs bg-yellow-100 text-yellow-700 px-2 py-0.5 rounded-full">Paga imposto</span>
                    )}
                  </div>
                  <div className="grid grid-cols-2 gap-2 mt-2 text-xs">
                    <div>
                      <p className="text-gray-400">Preço no Paraguai</p>
                      <p className="font-semibold text-gray-700">US$ {usd.toLocaleString('pt-BR')}</p>
                    </div>
                    <div>
                      <p className="text-gray-400">Imposto estimado</p>
                      <p className="font-semibold text-red-500">{imposto > 0 ? `US$ ${imposto.toFixed(0)}` : 'R$ 0,00'}</p>
                    </div>
                    <div>
                      <p className="text-gray-400">Total em reais</p>
                      <p className="font-bold text-green-700">R$ {total.toLocaleString('pt-BR', { maximumFractionDigits: 0 })}</p>
                    </div>
                    <div>
                      <p className="text-gray-400">Economia vs Brasil</p>
                      <p className="font-bold text-blue-600">R$ {eco.toLocaleString('pt-BR', { maximumFractionDigits: 0 })}</p>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>

        <div className="bg-white rounded-2xl p-5 shadow-sm">
          <h2 className="text-lg font-bold text-gray-800 mb-3">🧮 Como é feito o cálculo?</h2>
          <p className="text-gray-600 text-sm mb-3">O cálculo leva em conta três fatores principais:</p>
          <div className="space-y-2 text-sm text-gray-600">
            <div className="flex gap-2 bg-gray-50 rounded-xl p-3">
              <span className="font-bold text-green-600 w-6">1.</span>
              <p><strong>Preço em dólar</strong> na loja de Ciudad del Este, convertido pela cotação do Banco Central do dia.</p>
            </div>
            <div className="flex gap-2 bg-gray-50 rounded-xl p-3">
              <span className="font-bold text-green-600 w-6">2.</span>
              <p><strong>Imposto de importação:</strong> 50% sobre o valor que ultrapassar US$ 500 de cota por pessoa.</p>
            </div>
            <div className="flex gap-2 bg-gray-50 rounded-xl p-3">
              <span className="font-bold text-green-600 w-6">3.</span>
              <p><strong>Forma de pagamento:</strong> dinheiro é mais barato (sem IOF), cartão comum tem IOF de 3,5% + spread.</p>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-2xl p-5 shadow-sm">
          <h2 className="text-lg font-bold text-gray-800 mb-3">💡 Qual iPhone comprar no Paraguai?</h2>
          <p className="text-gray-600 text-sm mb-3">A resposta depende do seu orçamento e do que você prioriza:</p>
          <div className="space-y-3">
            <div className="bg-green-50 rounded-xl p-4">
              <p className="font-bold text-green-800 text-sm">🥇 Melhor economia absoluta: iPhone SE</p>
              <p className="text-green-700 text-xs mt-1">US$ 429 — único modelo que entra dentro da cota de US$ 500 sem pagar imposto. Economia de ~R$ 1.000 vs Brasil.</p>
            </div>
            <div className="bg-blue-50 rounded-xl p-4">
              <p className="font-bold text-blue-800 text-sm">🥈 Melhor custo-benefício: iPhone 16 128GB</p>
              <p className="text-blue-700 text-xs mt-1">US$ 799 com imposto de ~US$ 150. Total ~R$ 4.950 vs R$ 7.999 no Brasil. Economia de ~R$ 3.000.</p>
            </div>
            <div className="bg-purple-50 rounded-xl p-4">
              <p className="font-bold text-purple-800 text-sm">🥉 Melhor premium: iPhone 16 Pro 128GB</p>
              <p className="text-purple-700 text-xs mt-1">US$ 1.099 com imposto de ~US$ 300. Total ~R$ 7.300 vs R$ 10.999 no Brasil. Economia de ~R$ 3.700.</p>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-2xl p-5 shadow-sm">
          <h2 className="text-lg font-bold text-gray-800 mb-3">✅ Dicas essenciais antes de comprar</h2>
          <div className="space-y-2 text-sm text-gray-600">
            <div className="flex gap-2"><span>📱</span><p><strong>Prefira o modelo americano (A)</strong> — funciona com todas as operadoras brasileiras e tem garantia Apple mundial válida no Brasil.</p></div>
            <div className="flex gap-2"><span>🔍</span><p><strong>Verifique o IMEI</strong> em imei.info ou checkcoverage.apple.com — confirma que o aparelho é original e não está bloqueado.</p></div>
            <div className="flex gap-2"><span>🧾</span><p><strong>Exija nota fiscal</strong> — obrigatória para declarar na Receita Federal e para acionar a garantia Apple.</p></div>
            <div className="flex gap-2"><span>💵</span><p><strong>Pague em dinheiro ou Nomad</strong> — evita IOF de 3,5% e spread bancário de cartões comuns, que podem adicionar até 10% ao custo final.</p></div>
            <div className="flex gap-2"><span>📋</span><p><strong>Declare no app e-DBV</strong> antes de cruzar a ponte — evita filas na aduana e comprova regularidade da compra.</p></div>
            <div className="flex gap-2"><span>🏪</span><p><strong>Compre em lojas conhecidas</strong> como Mobile Zone, Shopping China ou Flytec — têm boa reputação com brasileiros e garantem produto original.</p></div>
          </div>
        </div>

        <div className="bg-white rounded-2xl p-5 shadow-sm">
          <h2 className="text-lg font-bold text-gray-800 mb-3">❓ Perguntas frequentes</h2>
          <div className="space-y-3 text-sm">
            <div className="border-b border-gray-100 pb-3">
              <p className="font-semibold text-gray-800">Posso trazer 2 iPhones do Paraguai?</p>
              <p className="text-gray-600 mt-1">Sim, mas cada pessoa paga imposto individualmente sobre o excedente da sua cota de US$ 500. Não é possível juntar cotas para dividir um produto.</p>
            </div>
            <div className="border-b border-gray-100 pb-3">
              <p className="font-semibold text-gray-800">iPhone do Paraguai tem garantia no Brasil?</p>
              <p className="text-gray-600 mt-1">Sim, o modelo americano (A) tem garantia Apple mundial de 1 ano válida em qualquer Apple Store ou assistência autorizada no Brasil.</p>
            </div>
            <div className="border-b border-gray-100 pb-3">
              <p className="font-semibold text-gray-800">Qual a diferença entre iPhone paraguaio e brasileiro?</p>
              <p className="text-gray-600 mt-1">Basicamente o preço e o teclado (inglês no modelo americano). Tecnicamente são idênticos — mesmo chip, mesma câmera, mesmo software.</p>
            </div>
            <div>
              <p className="font-semibold text-gray-800">Quando vale a pena comprar no Brasil?</p>
              <p className="text-gray-600 mt-1">Se o dólar estiver muito alto (acima de R$ 6,50) e você precisar de garantia nacional, pode ser que o preço fique próximo. Use nossa calculadora para comparar.</p>
            </div>
          </div>
        </div>

        <Link href="/lojas-paraguai" className="flex items-center gap-3 bg-white rounded-xl px-4 py-3 text-sm text-gray-700 border border-gray-100 hover:border-green-300 transition-colors">
          <span className="text-2xl">🏪</span>
          <div>
            <p className="font-bold text-gray-800 text-sm">Ver melhores lojas para comprar iPhone</p>
            <p className="text-xs text-gray-500">Mobile Zone, Shopping China, Flytec</p>
          </div>
          <span className="ml-auto text-gray-400">→</span>
        </Link>

        <div className="bg-green-50 border border-green-100 rounded-2xl p-5">
          <p className="font-bold text-green-800 mb-1">🧮 Calcule o preço exato com a cotação do dia</p>
          <p className="text-green-700 text-sm mb-3">Nossa calculadora usa o dólar do Banco Central atualizado diariamente.</p>
          <Link href="/" className="block bg-green-500 text-white text-center py-3 rounded-xl font-semibold">Abrir Calculadora →</Link>
        </div>

        <BannerNomad />
      </div>

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": [
          { "@type": "Question", "name": "Quanto custa um iPhone no Paraguai em 2026?", "acceptedAnswer": { "@type": "Answer", "text": "O iPhone 16 128GB custa cerca de US$ 799 no Paraguai. Com imposto de importação e câmbio de R$ 5,25, o total fica em torno de R$ 4.950 — cerca de R$ 3.000 mais barato que no Brasil." } },
          { "@type": "Question", "name": "Qual iPhone do Paraguai tem garantia no Brasil?", "acceptedAnswer": { "@type": "Answer", "text": "O modelo americano (sufixo A) tem garantia Apple mundial válida no Brasil por 1 ano em qualquer Apple Store ou assistência autorizada." } },
          { "@type": "Question", "name": "Vale a pena comprar iPhone no Paraguai?", "acceptedAnswer": { "@type": "Answer", "text": "Sim. Mesmo pagando imposto de importação, o iPhone fica 20% a 35% mais barato que no Brasil dependendo do modelo e da cotação do dólar." } }
        ]
      }) }} />
    </main>
  )
}
