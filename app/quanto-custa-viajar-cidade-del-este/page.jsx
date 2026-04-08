import Link from 'next/link'
import BannerNomad from '../components/BannerNomad'

export const metadata = {
  title: 'Quanto custa viajar para Ciudad del Este em 2026? | Calculadora Paraguai',
  description: 'Gastos reais de uma viagem a Ciudad del Este em 2026: passagem, hotel, alimentacao e transporte. Planeje sua viagem de compras ao Paraguai.',
  keywords: 'quanto custa viajar cidade del este 2026, viagem paraguai quanto custa, cidade del este hospedagem, passagem foz iguacu paraguai',
}

const custos = [
  { emoji: '🚌', categoria: 'Transporte (Foz do Iguacu)', valor: 'R$ 0 a R$ 50', desc: 'Onibus urbano de Foz ate a fronteira custa R$ 5. Taxi ou Uber ate a Ponte da Amizade custa R$ 30–50.' },
  { emoji: '🛏️', categoria: 'Hotel em Foz do Iguacu', valor: 'R$ 80 a R$ 300/noite', desc: 'Nao precisa se hospedar no Paraguai — a maioria fica em Foz. Tem opcoes para todos os bolsos.' },
  { emoji: '🍽️', categoria: 'Alimentacao', valor: 'R$ 30 a R$ 80/dia', desc: 'Restaurantes em Ciudad del Este aceitam real. Refeicao simples custa em torno de R$ 25–40.' },
  { emoji: '🛍️', categoria: 'Orcamento para compras', valor: 'US$ 300 a US$ 500', desc: 'Planeje ficar dentro da cota de US$ 500 por pessoa para nao pagar imposto de importacao.' },
  { emoji: '✈️', categoria: 'Passagem aerea ate Foz', valor: 'R$ 300 a R$ 800', desc: 'Saindo de SP ou RJ. Voos para o aeroporto de Foz do Iguacu (IGU) com frequencia diaria.' },
]

export default function QuantoCustaViajar() {
  return (
    <main className="min-h-screen bg-gray-50 pb-16">
      <div className="bg-gradient-to-r from-green-600 to-green-500 px-5 pt-12 pb-8 text-white">
        <Link href="/" className="text-green-100 text-sm mb-4 block">← Calculadora</Link>
        <h1 className="text-2xl font-bold">Quanto custa viajar para Ciudad del Este em 2026?</h1>
        <p className="text-green-100 mt-2 text-sm">Todos os gastos reais de uma viagem de compras ao Paraguai.</p>
      </div>

      <div className="px-4 py-6 max-w-2xl mx-auto space-y-4">
        <div className="bg-white rounded-2xl p-5 shadow-sm">
          <p className="text-gray-600 text-sm">
            Ciudad del Este fica a apenas <strong>500 metros da fronteira brasileira</strong> em Foz do Iguacu. A viagem e simples, rapida e barata — o maior gasto e o orcamento para as compras em si.
          </p>
        </div>

        {custos.map(c => (
          <div key={c.categoria} className="bg-white rounded-2xl p-5 shadow-sm flex gap-4">
            <span className="text-3xl">{c.emoji}</span>
            <div>
              <h2 className="font-bold text-gray-800">{c.categoria}</h2>
              <p className="text-gray-500 text-sm mt-1">{c.desc}</p>
              <span className="mt-2 inline-block text-xs px-2 py-0.5 rounded-full font-medium bg-blue-100 text-blue-800">
                {c.valor}
              </span>
            </div>
          </div>
        ))}

        <div className="bg-white rounded-2xl p-5 shadow-sm">
          <h2 className="text-lg font-bold text-gray-800 mb-3">🧮 Exemplo de orcamento total (2 pessoas, 1 dia)</h2>
          <div className="space-y-2 text-sm">
            {[
              { item: 'Onibus Foz → fronteira (ida e volta)', valor: 'R$ 20' },
              { item: 'Alimentacao (almoco + lanche)', valor: 'R$ 80' },
              { item: 'Hotel em Foz (1 noite)', valor: 'R$ 150' },
              { item: 'Compras (2x US$ 500)', valor: '~R$ 5.800' },
            ].map(({ item, valor }) => (
              <div key={item} className="flex justify-between border-b border-gray-100 pb-2">
                <span className="text-gray-600">{item}</span>
                <span className="font-bold text-gray-800">{valor}</span>
              </div>
            ))}
            <div className="flex justify-between pt-1">
              <span className="font-bold text-gray-800">Total estimado</span>
              <span className="font-bold text-green-600">~R$ 6.050</span>
            </div>
          </div>
        </div>

        <div className="bg-yellow-50 border border-yellow-200 rounded-2xl p-5">
          <h2 className="font-bold text-yellow-800 mb-2">⚠️ Dicas para a travessia</h2>
          <ul className="text-yellow-700 text-sm space-y-1.5">
            <li>• Leve documento original — RG ou passaporte</li>
            <li>• Va cedo (7h–9h) para evitar fila na Ponte da Amizade</li>
            <li>• Declare tudo acima de US$ 500 na Receita Federal</li>
            <li>• Guarde todas as notas fiscais das compras</li>
            <li>• Leve reais e dolares — lojas aceitam os dois</li>
          </ul>
        </div>

        <div className="bg-green-50 border border-green-100 rounded-2xl p-5">
          <p className="font-bold text-green-800 mb-3">🧮 Calcule o preco das suas compras antes de ir</p>
          <p className="text-green-600 text-sm mb-4">Saiba exatamente quanto vai gastar com cambio, impostos e forma de pagamento.</p>
          <Link href="/" className="block bg-green-500 text-white text-center py-3 rounded-xl font-semibold">
            Abrir Calculadora →
          </Link>
        </div>
      
        <BannerNomad />
      </div>
    </main>
  )
}
