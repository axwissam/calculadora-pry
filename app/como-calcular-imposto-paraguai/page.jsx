import Link from 'next/link'
import BannerNomad from '../components/BannerNomad'

export const metadata = {
  title: 'Como Calcular Imposto Paraguai 2026 - Passo a Passo | Calculadora Paraguai',
  description: 'Aprenda como calcular o imposto de importação nas compras do Paraguai em 2026. Cota de US$ 500, fórmula do cálculo, IOF, spread e simulador online gratuito.',
  keywords: 'como calcular imposto paraguai, calculadora receita federal paraguai, cota paraguai 500 dolares calculadora, formula imposto paraguai',
}

export default function ComoCalcularImposto() {
  return (
    <main className="min-h-screen bg-gray-50 pb-16">
      <div className="bg-gradient-to-r from-green-600 to-green-500 px-5 pt-12 pb-8 text-white">
        <Link href="/" className="text-green-100 text-sm mb-4 block">← Calculadora</Link>
        <h1 className="text-2xl font-bold">Como Calcular Imposto Paraguai 2026</h1>
        <p className="text-green-100 mt-2 text-sm">Passo a passo para saber exatamente quanto você vai pagar.</p>
      </div>
      <div className="px-4 py-6 max-w-2xl mx-auto space-y-5">

        <div className="bg-green-500 rounded-2xl p-5 text-white text-center">
          <p className="font-bold text-lg mb-1">Quer calcular rápido?</p>
          <p className="text-green-100 text-sm mb-3">Use nossa calculadora — resultado em segundos com câmbio do Banco Central.</p>
          <Link href="/" className="block bg-white text-green-600 font-bold py-3 rounded-xl">Calcular agora →</Link>
        </div>

        <div className="bg-white rounded-2xl p-5 shadow-sm">
          <h2 className="text-lg font-bold text-gray-800 mb-3">📐 A fórmula do imposto</h2>
          <div className="bg-gray-50 rounded-xl p-4 font-mono text-sm text-center space-y-1">
            <p className="text-gray-500">Excedente = Total comprado - US$ 500</p>
            <p className="text-gray-500">Imposto USD = Excedente × 50%</p>
            <p className="font-bold text-green-700">Imposto BRL = Imposto USD × Cotação do dia</p>
          </div>
        </div>

        <div className="bg-white rounded-2xl p-5 shadow-sm">
          <h2 className="text-lg font-bold text-gray-800 mb-3">🔢 Passo a passo do cálculo</h2>
          <ol className="space-y-4 text-sm">
            {[
              { passo: 'Some o valor total das suas compras em dólares', ex: 'Ex: celular $699 + fone $149 + perfume $120 = $968' },
              { passo: 'Subtraia a cota de US$ 500', ex: 'Ex: $968 - $500 = $468 de excedente' },
              { passo: 'Aplique 50% sobre o excedente', ex: 'Ex: $468 × 50% = $234 de imposto em dólares' },
              { passo: 'Converta para reais pela cotação do dia', ex: 'Ex: $234 × R$ 5,80 = R$ 1.357 de imposto' },
              { passo: 'Some IOF e spread se pagar com cartão comum', ex: 'Ex: +3,5% IOF + 5% spread sobre o total da compra' },
            ].map(({ passo, ex }, i) => (
              <li key={i} className="flex gap-3">
                <span className="bg-green-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-xs font-bold shrink-0 mt-0.5">{i + 1}</span>
                <div>
                  <p className="font-medium text-gray-800">{passo}</p>
                  <p className="text-gray-400 text-xs mt-0.5">{ex}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>

        <div className="bg-white rounded-2xl p-5 shadow-sm">
          <h2 className="text-lg font-bold text-gray-800 mb-3">📊 Exemplos práticos</h2>
          <div className="space-y-3">
            {[
              { titulo: 'Compra de US$ 300 (dentro da cota)', imposto: 'R$ 0,00', cor: 'green', detalhe: 'Abaixo dos US$ 500 — sem imposto de importação' },
              { titulo: 'Compra de US$ 700', imposto: '~R$ 1.050', cor: 'yellow', detalhe: 'Excedente: $200 × 50% = $100 × cotação R$ 5,25' },
              { titulo: 'Compra de US$ 1.000', imposto: '~R$ 1.575', cor: 'orange', detalhe: 'Excedente: $500 × 50% = $250 × cotação R$ 5,25' },
              { titulo: 'Compra de US$ 1.500', imposto: '~R$ 2.625', cor: 'red', detalhe: 'Excedente: $1.000 × 50% = $500 × cotação R$ 5,25' },
            ].map(({ titulo, imposto, cor, detalhe }) => (
              <div key={titulo} className={`rounded-xl p-3 ${cor === 'green' ? 'bg-green-50' : cor === 'yellow' ? 'bg-yellow-50' : cor === 'orange' ? 'bg-orange-50' : 'bg-red-50'}`}>
                <div className="flex justify-between items-center">
                  <p className="font-semibold text-gray-800 text-sm">{titulo}</p>
                  <span className="font-bold text-gray-700">{imposto}</span>
                </div>
                <p className="text-gray-500 text-xs mt-1">{detalhe}</p>
              </div>
            ))}
          </div>
          <p className="text-gray-400 text-xs mt-2">* Cotação simulada em R$ 5,25. Use a calculadora para o valor exato do dia.</p>
        </div>

        <div className="bg-white rounded-2xl p-5 shadow-sm">
          <h2 className="text-lg font-bold text-gray-800 mb-3">💳 E se pagar com cartão?</h2>
          <p className="text-gray-600 text-sm mb-3">Se pagar com cartão de crédito comum, o custo real é ainda maior:</p>
          <div className="space-y-2 text-sm">
            {[
              { item: 'Imposto de importação (50% excedente)', valor: 'Obrigatório para todos' },
              { item: 'IOF (cartão comum)', valor: '+3,5%' },
              { item: 'Spread bancário', valor: '+4% a +7%' },
              { item: 'Cotação turismo vs comercial', valor: '+2% a +5%' },
            ].map(({ item, valor }) => (
              <div key={item} className="flex justify-between items-center py-1.5 border-b border-gray-100 last:border-0">
                <span className="text-gray-600">{item}</span>
                <span className="text-red-500 font-semibold text-xs">{valor}</span>
              </div>
            ))}
          </div>
          <div className="bg-green-50 rounded-xl p-3 mt-3">
            <p className="text-green-800 text-xs font-semibold">💡 Use Nomad ou pague em dinheiro</p>
            <p className="text-green-700 text-xs mt-1">Zero IOF, spread mínimo e cotação comercial — economiza até 15% comparado com cartão comum.</p>
          </div>
        </div>

        <div className="bg-blue-50 border border-blue-100 rounded-2xl p-5">
          <h2 className="font-bold text-blue-800 mb-2">👨‍👩‍👧 Dica: distribua entre a família</h2>
          <p className="text-blue-700 text-sm">Cada pessoa tem direito a US$ 500. Com 4 pessoas, você tem US$ 2.000 de cota total sem pagar imposto.</p>
          <div className="bg-blue-100 rounded-xl p-3 mt-2 text-center">
            <p className="text-blue-800 font-bold">4 pessoas × US$ 500 = US$ 2.000 sem imposto ✅</p>
          </div>
        </div>

        <div className="bg-green-50 border border-green-100 rounded-2xl p-5">
          <p className="font-bold text-green-800 mb-1">🧮 Calculadora de imposto Paraguai online</p>
          <p className="text-green-700 text-sm mb-3">Com câmbio do Banco Central e todos os custos incluídos.</p>
          <Link href="/" className="block bg-green-500 text-white text-center py-3 rounded-xl font-semibold">Abrir Calculadora →</Link>
        </div>

        <BannerNomad />
      </div>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": [
          { "@type": "Question", "name": "Como calcular o imposto do Paraguai?", "acceptedAnswer": { "@type": "Answer", "text": "Subtraia US$ 500 do valor total. O excedente é multiplicado por 50% para obter o imposto. Ex: comprou US$ 800, paga 50% de US$ 300 = US$ 150." } },
          { "@type": "Question", "name": "O imposto do Paraguai é sobre o total ou só o excedente?", "acceptedAnswer": { "@type": "Answer", "text": "Apenas sobre o excedente acima dos US$ 500 de cota." } },
          { "@type": "Question", "name": "Qual é a cota de compras no Paraguai em 2026?", "acceptedAnswer": { "@type": "Answer", "text": "US$ 500 por pessoa via terrestre e US$ 1.000 via aérea." } }
        ]
      }) }} />
    </main>
  )
}
