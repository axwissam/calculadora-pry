import Link from 'next/link'
import BannerNomad from '../components/BannerNomad'

export const metadata = {
  title: 'Como Calcular Imposto Paraguai 2026 - Passo a Passo | Calculadora Paraguai',
  description: 'Aprenda como calcular o imposto das compras do Paraguai em 2026. Cota de US$ 500, 50% sobre excedente, IOF e spread explicados com exemplos praticos.',
  keywords: 'como calcular imposto paraguai, calculo imposto paraguai 2026, imposto paraguai formula, simulador imposto paraguai',
}

export default function ComoCalcularImposto() {
  return (
    <>
<script
  type="application/ld+json"
  dangerouslySetInnerHTML={{ __html: JSON.stringify({
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
    {
        "@type": "Question",
        "name": "Como calcular o imposto das compras do Paraguai?",
        "acceptedAnswer": {
            "@type": "Answer",
            "text": "Subtraia US$ 500 do valor total. O excedente é multiplicado por 50%. Exemplo: comprou US$ 700, excedente = US$ 200, imposto = US$ 100 convertido pela cotação do dia."
        }
    },
    {
        "@type": "Question",
        "name": "O imposto é sobre o total ou só o excedente?",
        "acceptedAnswer": {
            "@type": "Answer",
            "text": "Apenas sobre o excedente acima dos US$ 500 de cota. Se comprou US$ 600, paga 50% sobre US$ 100, não sobre os US$ 600 totais."
        }
    },
    {
        "@type": "Question",
        "name": "Como calcular o IOF nas compras do Paraguai com cartão?",
        "acceptedAnswer": {
            "@type": "Answer",
            "text": "O IOF é de 3,5% sobre o valor total em dólares. Cartões como Nomad e Wise não cobram IOF adicional pois o imposto já foi pago na conversão."
        }
    }
]
  }) }}
/>
      <main className="min-h-screen bg-gray-50 pb-16">
      <div className="bg-gradient-to-r from-green-600 to-green-500 px-5 pt-12 pb-8 text-white">
        <Link href="/" className="text-green-100 text-sm mb-4 block">← Calculadora</Link>
        <h1 className="text-2xl font-bold">Como Calcular Imposto Paraguai 2026</h1>
        <p className="text-green-100 mt-2 text-sm">Formula completa com exemplos reais e cotacao do dia.</p>
      </div>

      <div className="px-4 py-6 max-w-2xl mx-auto space-y-4">

        <div className="bg-white rounded-2xl p-5 shadow-sm space-y-3 text-sm text-gray-600">
          <h2 className="font-bold text-gray-800 text-base">A formula basica do imposto</h2>
          <p>
            O calculo do imposto nas compras do Paraguai segue uma regra simples: cada viajante tem direito a uma <strong>cota de isencao de US$ 500</strong> por viagem via terrestre. Tudo que ultrapassar esse valor e tributado em <strong>50% sobre o excedente</strong>.
          </p>
          <p>
            Ou seja, se voce comprou US$ 700, o excedente e de US$ 200 (700 - 500). O imposto sera de US$ 100 (50% de 200). Esse valor e convertido para reais pela cotacao do dolar do dia.
          </p>
        </div>

        <div className="bg-blue-50 border border-blue-100 rounded-2xl p-5">
          <h2 className="font-bold text-blue-800 mb-3">📐 Formula completa</h2>
          <div className="font-mono text-sm space-y-2 text-blue-900">
            <p><span className="font-bold">Passo 1:</span> Excedente = Total comprado - US$ 500</p>
            <p><span className="font-bold">Passo 2:</span> Imposto USD = Excedente x 50%</p>
            <p><span className="font-bold">Passo 3:</span> Imposto BRL = Imposto USD x Cotacao do dia</p>
            <p><span className="font-bold">Passo 4:</span> Total final = (Total USD x Cotacao) + Imposto BRL + IOF</p>
          </div>
        </div>

        <div className="bg-white rounded-2xl p-5 shadow-sm space-y-3 text-sm text-gray-600">
          <h2 className="font-bold text-gray-800 text-base">Exemplos praticos de calculo</h2>

          <div className="bg-gray-50 rounded-xl p-4 font-mono text-sm space-y-1">
            <p className="font-bold text-gray-700 mb-2">Exemplo 1 — Dentro da cota</p>
            <p>Compra: US$ 400</p>
            <p>Excedente: US$ 0 (abaixo de US$ 500)</p>
            <p className="text-green-600 font-bold">Imposto: R$ 0,00 ✅</p>
          </div>

          <div className="bg-gray-50 rounded-xl p-4 font-mono text-sm space-y-1">
            <p className="font-bold text-gray-700 mb-2">Exemplo 2 — iPhone US$ 700</p>
            <p>Excedente: US$ 700 - US$ 500 = US$ 200</p>
            <p>Imposto USD: US$ 200 x 50% = US$ 100</p>
            <p>Cotacao: R$ 5,80</p>
            <p className="text-orange-600 font-bold">Imposto: R$ 580,00 ⚠️</p>
          </div>

          <div className="bg-gray-50 rounded-xl p-4 font-mono text-sm space-y-1">
            <p className="font-bold text-gray-700 mb-2">Exemplo 3 — Notebook US$ 1.200</p>
            <p>Excedente: US$ 1.200 - US$ 500 = US$ 700</p>
            <p>Imposto USD: US$ 700 x 50% = US$ 350</p>
            <p>Cotacao: R$ 5,80</p>
            <p className="text-red-600 font-bold">Imposto: R$ 2.030,00 ⚠️</p>
          </div>
        </div>

        <div className="bg-white rounded-2xl p-5 shadow-sm space-y-3 text-sm text-gray-600">
          <h2 className="font-bold text-gray-800 text-base">E o IOF e o spread do cartao?</h2>
          <p>
            Alem do imposto de importacao, se voce pagar com cartao de credito comum, incide o <strong>IOF de 3,5%</strong> sobre o valor total da compra em dolares. Isso e cobrado automaticamente pela operadora do cartao na fatura.
          </p>
          <p>
            O spread bancario e a diferenca entre a cotacao oficial e a cotacao cobrada pelo banco — pode chegar a 7% em bancos tradicionais. Para evitar isso, use cartoes internacionais como Nomad ou Wise, que nao cobram IOF adicional e tem spread proximo de zero.
          </p>
          <h2 className="font-bold text-gray-800 text-base">Como a cotacao afeta o calculo?</h2>
          <p>
            A cotacao do dolar muda diariamente. Nossa calculadora usa a cotacao oficial do Banco Central atualizada a cada 30 minutos para dar o valor mais preciso possivel. Antes de viajar, simule o calculo com a cotacao do dia para saber exatamente quanto vai gastar.
          </p>
          <p>
            Uma variacao de R$ 0,20 no dolar pode significar uma diferenca de R$ 100 a R$ 200 no custo final de um produto mais caro. Por isso, o timing da compra tambem importa.
          </p>
          <h2 className="font-bold text-gray-800 text-base">Vale a pena mesmo pagando imposto?</h2>
          <p>
            Na maioria dos casos, sim. Para eletronicos de alto valor como iPhones e notebooks, mesmo pagando 50% de imposto sobre o excedente, o preco final costuma ser menor que no Brasil. Use nossa calculadora para comparar e decidir com base nos numeros reais do dia.
          </p>
        </div>

        <div className="bg-yellow-50 border border-yellow-200 rounded-2xl p-5">
          <h2 className="font-bold text-yellow-800 mb-2">⚠️ Erros comuns no calculo</h2>
          <ul className="text-yellow-700 text-sm space-y-1.5">
            <li>• Calcular o imposto sobre o valor total e nao sobre o excedente</li>
            <li>• Esquecer de incluir o IOF no calculo final</li>
            <li>• Usar cotacao desatualizada — use sempre a do dia</li>
            <li>• Nao somar todos os produtos comprados — tudo conta</li>
            <li>• Esquecer que cada pessoa tem sua propria cota de US$ 500</li>
          </ul>
        </div>

        <div className="bg-green-50 border border-green-100 rounded-2xl p-5">
          <p className="font-bold text-green-800 mb-3">🧮 Use a calculadora automatica</p>
          <p className="text-green-600 text-sm mb-4">Cotacao do Banco Central em tempo real. Resultado em segundos.</p>
          <Link href="/" className="block bg-green-500 text-white text-center py-3 rounded-xl font-semibold">
            Calcular agora →
          </Link>
        </div>

        <BannerNomad />

        <Link href="/lojas-paraguai" className="flex items-center gap-3 bg-white rounded-xl px-4 py-3 text-sm text-gray-700 border border-gray-100 hover:border-green-300 transition-colors">
          <span className="text-2xl">🏪</span>
          <div>
            <p className="font-bold text-gray-800 text-sm">Melhores lojas do Paraguai</p>
            <p className="text-xs text-gray-500">Shopping China, Flytec, Mobile Zone e mais</p>
          </div>
          <span className="ml-auto text-green-500 font-bold">→</span>
        </Link>

      </div>
    </main>
    </>
  )
}