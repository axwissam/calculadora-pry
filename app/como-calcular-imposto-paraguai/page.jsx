import Link from 'next/link'
export const metadata = {
  title: 'Como Calcular Imposto Paraguai 2026 - Passo a Passo | Calculadora Paraguai',
  description: 'Aprenda como calcular o imposto de importacao nas compras do Paraguai em 2026. Cota de US$ 500, formula do calculo e simulador online gratuito.',
  keywords: 'como calcular imposto paraguai, calculadora receita federal paraguai, cota paraguai 500 dolares calculadora',
}
export default function ComoCalcularImposto() {
  return (
    <main className="min-h-screen bg-gray-50 pb-16">
      <div className="bg-gradient-to-r from-green-600 to-green-500 px-5 pt-12 pb-8 text-white">
        <Link href="/" className="text-green-100 text-sm mb-4 block">← Calculadora</Link>
        <h1 className="text-2xl font-bold">Como Calcular Imposto Paraguai 2026</h1>
        <p className="text-green-100 mt-2 text-sm">Passo a passo para saber exatamente quanto voce vai pagar.</p>
      </div>
      <div className="px-4 py-6 max-w-2xl mx-auto space-y-5">
        <div className="bg-green-500 rounded-2xl p-5 text-white text-center">
          <p className="font-bold text-lg mb-1">Quer calcular rapido?</p>
          <p className="text-green-100 text-sm mb-3">Use nossa calculadora — resultado em segundos com cambio em tempo real.</p>
          <Link href="/" className="block bg-white text-green-600 font-bold py-3 rounded-xl">Calcular agora</Link>
        </div>
        <div className="bg-white rounded-2xl p-5 shadow-sm">
          <h2 className="text-lg font-bold text-gray-800 mb-3">Passo a passo do calculo</h2>
          <ol className="space-y-4 text-sm">
            {[
              { passo: 'Some o valor total das suas compras em dolares', ex: 'Ex: celular $699 + fone $149 + perfume $120 = $968' },
              { passo: 'Subtraia a cota de US$ 500', ex: 'Ex: $968 - $500 = $468 de excedente' },
              { passo: 'Aplique 50% sobre o excedente', ex: 'Ex: $468 x 50% = $234 de imposto em dolares' },
              { passo: 'Converta para reais pela cotacao do dia', ex: 'Ex: $234 x R$ 5,80 = R$ 1.357 de imposto' },
              { passo: 'Some IOF e spread se pagar com cartao', ex: 'Ex: +3,5% IOF + 5% spread sobre o total' },
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
        <div className="bg-blue-50 border border-blue-100 rounded-2xl p-5">
          <h2 className="font-bold text-blue-800 mb-2">Dica: distribua entre a familia</h2>
          <p className="text-blue-700 text-sm">Cada pessoa tem direito a US$ 500. Com 4 pessoas, voce tem US$ 2.000 de cota total sem pagar imposto.</p>
        </div>
        <div className="bg-green-50 border border-green-100 rounded-2xl p-5">
          <p className="font-bold text-green-800 mb-3">Calculadora de imposto paraguai online</p>
          <Link href="/" className="block bg-green-500 text-white text-center py-3 rounded-xl font-semibold">Abrir Calculadora</Link>
        </div>
      </div>
<script
  type="application/ld+json"
  dangerouslySetInnerHTML={{ __html: JSON.stringify({
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
  {
    "@type": "Question",
    "name": "Como calcular o imposto do Paraguai?",
    "acceptedAnswer": {
      "@type": "Answer",
      "text": "Subtraia US$ 500 do valor total. O excedente é multiplicado por 50% para obter o imposto. Ex: comprou US$ 800, paga 50% de US$ 300 = US$ 150."
    }
  },
  {
    "@type": "Question",
    "name": "O imposto do Paraguai é sobre o total ou só o excedente?",
    "acceptedAnswer": {
      "@type": "Answer",
      "text": "Apenas sobre o excedente acima dos US$ 500 de cota."
    }
  }
]
  }) }}
/>
    </main>
  )
}
