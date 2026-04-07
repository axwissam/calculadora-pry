import Link from 'next/link'
export const metadata = {
  title: 'Melhor forma de pagamento no Paraguai em 2026 | Calculadora Paraguai',
  description: 'Dinheiro, Pix, cartão ou Nomad? Descubra qual é a melhor forma de pagar no Paraguai em 2026. Comparamos taxas, IOF e spread para você economizar.',
  keywords: 'melhor forma pagamento paraguai 2026, pagar paraguai dinheiro pix cartao, nomad paraguai, wise paraguai',
}
export default function MelhorFormaPagamento() {
  return (
    <main className="min-h-screen bg-gray-50 pb-16">
      <div className="bg-gradient-to-r from-green-600 to-green-500 px-5 pt-12 pb-8 text-white">
        <Link href="/" className="text-green-100 text-sm mb-4 block">← Calculadora</Link>
        <h1 className="text-2xl font-bold">Melhor forma de pagamento no Paraguai em 2026</h1>
        <p className="text-green-100 mt-2 text-sm">Dinheiro, Pix, cartão ou Nomad? Compare antes de comprar.</p>
      </div>
      <div className="px-4 py-6 max-w-2xl mx-auto space-y-6">
        <div className="bg-white rounded-2xl p-5 shadow-sm">
          <h2 className="text-lg font-bold text-gray-800 mb-3">🏆 Resumo: do melhor ao pior</h2>
          <ol className="space-y-3">
            {[
              { pos: '1º', label: 'Dinheiro em espécie (dólar)', desc: 'Sem IOF, sem spread bancário. Melhor custo final.', color: 'text-green-600' },
              { pos: '2º', label: 'Pix (Nomad ou Wise)', desc: 'Sem IOF na compra, spread baixo (~1%). Prático e seguro.', color: 'text-green-500' },
              { pos: '3º', label: 'Cartão Nomad / Wise (débito)', desc: 'IOF já pago na conversão. Spread de 1–2%.', color: 'text-yellow-600' },
              { pos: '4º', label: 'Cartão de débito tradicional', desc: 'IOF 3,5% + spread do banco + cotação turismo.', color: 'text-orange-500' },
              { pos: '5º', label: 'Cartão de crédito tradicional', desc: 'IOF 3,5% + spread alto + taxa extra na maquininha (5–10%).', color: 'text-red-500' },
            ].map(({ pos, label, desc, color }) => (
              <li key={pos} className="flex gap-3 items-start">
                <span className={`font-bold text-lg w-8 shrink-0 ${color}`}>{pos}</span>
                <div>
                  <p className="font-semibold text-gray-800">{label}</p>
                  <p className="text-gray-500 text-sm">{desc}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
        <div className="bg-white rounded-2xl p-5 shadow-sm">
          <h2 className="text-lg font-bold text-gray-800 mb-2">💳 Cartão Nomad no Paraguai</h2>
          <p className="text-gray-600 text-sm mb-3">O cartão Nomad é um débito internacional em dólar. O IOF de 3,5% é cobrado apenas quando você converte reais para dólar — não na hora da compra.</p>
          <div className="bg-yellow-50 border border-yellow-200 rounded-xl p-4">
            <p className="text-yellow-800 font-bold text-sm">Custo real do Nomad no PY</p>
            <div className="mt-2 space-y-1 text-sm text-yellow-700">
              <p>• IOF na compra: <strong>R$ 0,00</strong></p>
              <p>• Spread: <strong>1–2%</strong></p>
              <p>• Cotação: <strong>dólar comercial</strong></p>
            </div>
          </div>
        </div>
        <div className="bg-white rounded-2xl p-5 shadow-sm">
          <h2 className="text-lg font-bold text-gray-800 mb-2">⚠️ Cartão de crédito tradicional</h2>
          <p className="text-gray-600 text-sm mb-3">Evite ao máximo. Além do IOF e spread, muitas lojas cobram taxa extra de <strong>5% a 10%</strong> no cartão de crédito.</p>
          <div className="bg-red-50 rounded-xl p-3 text-sm text-red-700">
            <p>Exemplo numa compra de US$ 300:</p>
            <p className="mt-1">• Taxa da loja (8%): + R$ 124</p>
            <p>• IOF (3,5%): + R$ 54</p>
            <p>• Spread banco (5%): + R$ 77</p>
            <p className="font-bold mt-1">Total extra: ~R$ 255 a mais que no dinheiro</p>
          </div>
        </div>
        <div className="bg-blue-50 border border-blue-100 rounded-2xl p-5">
          <p className="font-bold text-blue-800 mb-2">🧮 Calcule sua compra agora</p>
          <p className="text-blue-600 text-sm mb-4">Compare todos os métodos automaticamente com câmbio em tempo real.</p>
          <Link href="/" className="block bg-green-500 text-white text-center py-3 rounded-xl font-semibold">Abrir Calculadora →</Link>
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
    "name": "Qual a melhor forma de pagar no Paraguai?",
    "acceptedAnswer": {
      "@type": "Answer",
      "text": "Dinheiro ou Pix são as melhores opções por não terem IOF nem spread. Cartões internacionais como Nomad e Wise também são boas opções."
    }
  },
  {
    "@type": "Question",
    "name": "Tem IOF nas compras no Paraguai com cartão?",
    "acceptedAnswer": {
      "@type": "Answer",
      "text": "Sim, cartões comuns cobram IOF de 3,5%. Cartões como Nomad e Wise não cobram IOF adicional na compra."
    }
  }
]
  }) }}
/>
    </main>
  )
}
