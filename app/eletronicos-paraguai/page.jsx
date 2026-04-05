import Link from 'next/link'

export const metadata = {
  title: 'Eletronicos no Paraguai 2026 - Vale a pena? Precos e Dicas | Calculadora Paraguai',
  description: 'Celular, notebook, fone e smartwatch no Paraguai em 2026. Veja quais eletronicos valem a pena, quanto economiza e como calcular o preco final em reais.',
  keywords: 'eletronicos paraguai 2026, celular paraguai, notebook paraguai, iphone paraguai, samsung paraguai',
}

const itens = [
  { emoji: '📱', nome: 'Smartphones', economia: 'Ate 40% mais barato', desc: 'iPhone e Samsung lideram. Verifique o modelo (A, LL, BR) — prefira versao internacional com garantia de fabricante.', destaque: true },
  { emoji: '💻', nome: 'Notebooks', economia: 'Ate 35% mais barato', desc: 'Dell, Lenovo, HP e Apple. Confirme voltagem e layout do teclado antes de comprar.', destaque: true },
  { emoji: '🎧', nome: 'Fones e Headphones', economia: 'Ate 45% mais barato', desc: 'AirPods, Sony e JBL com grande vantagem. Produto pequeno, facil de trazer na mochila.', destaque: true },
  { emoji: '⌚', nome: 'Smartwatches', economia: 'Ate 38% mais barato', desc: 'Apple Watch e Galaxy Watch. Verifique compatibilidade com chip do seu celular.', destaque: false },
  { emoji: '🎮', nome: 'Consoles e Games', economia: 'Ate 30% mais barato', desc: 'PlayStation, Xbox e Nintendo Switch. Atencao ao bloqueio de regiao em jogos fisicos.', destaque: false },
  { emoji: '📷', nome: 'Cameras e Drones', economia: 'Ate 35% mais barato', desc: 'GoPro, DJI e cameras mirrorless com preco bem abaixo do Brasil.', destaque: false },
]

export default function EletronicosParaguai() {
  return (
    <main className="min-h-screen bg-gray-50 pb-16">
      <div className="bg-gradient-to-r from-green-600 to-green-500 px-5 pt-12 pb-8 text-white">
        <Link href="/" className="text-green-100 text-sm mb-4 block">← Calculadora</Link>
        <h1 className="text-2xl font-bold">Eletronicos no Paraguai em 2026</h1>
        <p className="text-green-100 mt-2 text-sm">Quais valem a pena, quanto economiza e o que checar antes de comprar.</p>
      </div>

      <div className="px-4 py-6 max-w-2xl mx-auto space-y-4">
        <div className="bg-white rounded-2xl p-5 shadow-sm">
          <p className="text-gray-600 text-sm">
            Eletronicos sao o principal motivo de viagem ao Paraguai. Com <strong>impostos de importacao muito menores que o Brasil</strong>, a diferenca de preco pode chegar a 40% — mas nem tudo vale a pena. Calcule sempre o valor final antes de comprar.
          </p>
        </div>

        {itens.map(item => (
          <div key={item.nome} className="bg-white rounded-2xl p-5 shadow-sm flex gap-4">
            <span className="text-3xl">{item.emoji}</span>
            <div className="flex-1">
              <div className="flex items-center justify-between">
                <h2 className="font-bold text-gray-800">{item.nome}</h2>
                {item.destaque && <span className="text-xs bg-green-100 text-green-700 px-2 py-0.5 rounded-full font-medium">Top pick</span>}
              </div>
              <p className="text-gray-500 text-sm mt-1">{item.desc}</p>
              <span className="mt-2 inline-block text-xs px-2 py-0.5 rounded-full font-medium bg-blue-100 text-blue-800">
                {item.economia}
              </span>
            </div>
          </div>
        ))}

        <div className="bg-yellow-50 border border-yellow-200 rounded-2xl p-5">
          <h2 className="font-bold text-yellow-800 mb-2">⚠️ Antes de comprar qualquer eletronico</h2>
          <ul className="text-yellow-700 text-sm space-y-1.5">
            <li>• Verifique o modelo: versao A (Americana) tem garantia mundial, versao BR nao</li>
            <li>• Notebooks: confirme layout do teclado (QWERTY vs ABNT)</li>
            <li>• Consoles: verifique regiao dos jogos fisicos</li>
            <li>• Tudo acima de US$ 500 paga 50% de imposto na entrada do Brasil</li>
            <li>• Guarde nota fiscal — a Receita pode pedir</li>
          </ul>
        </div>

        <div className="bg-white rounded-2xl p-5 shadow-sm">
          <h2 className="text-lg font-bold text-gray-800 mb-3">📦 Cabe na cota de US$ 500?</h2>
          <p className="text-gray-600 text-sm mb-3">Um iPhone 15 custa em media US$ 750 no Paraguai — sozinho ja estoura a cota. Calcule antes de ir.</p>
          <div className="grid grid-cols-2 gap-3 text-sm">
            <div className="bg-green-50 rounded-xl p-3">
              <p className="font-bold text-green-800">Dentro da cota</p>
              <p className="text-green-600 mt-1 text-xs">Fones, smartwatch, games, acessorios</p>
              <p className="text-green-700 font-semibold mt-2">Sem imposto ✅</p>
            </div>
            <div className="bg-red-50 rounded-xl p-3">
              <p className="font-bold text-red-800">Acima de US$ 500</p>
              <p className="text-red-600 mt-1 text-xs">Celular top, notebook, console</p>
              <p className="text-red-700 font-semibold mt-2">+50% no excedente ⚠️</p>
            </div>
          </div>
        </div>

        <div className="bg-green-50 border border-green-100 rounded-2xl p-5">
          <p className="font-bold text-green-800 mb-3">🧮 Calcule o preco final em reais</p>
          <p className="text-green-600 text-sm mb-4">Com imposto, IOF e cambio real incluidos.</p>
          <Link href="/" className="block bg-green-500 text-white text-center py-3 rounded-xl font-semibold">
            Abrir Calculadora →
          </Link>
        </div>
      </div>
    </main>
  )
}
