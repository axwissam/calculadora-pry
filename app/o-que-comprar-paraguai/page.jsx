import Link from 'next/link'
import BannerNomad from '../components/BannerNomad'

export const metadata = {
  title: 'O que Vale a Pena Comprar no Paraguai em 2026 | Calculadora Paraguai',
  description: 'Descubra o que realmente vale a pena comprar no Paraguai em 2026. Eletronicos, perfumes, roupas, bebidas e o que nao comprar. Guia completo com dicas.',
  keywords: 'o que comprar paraguai 2026, vale a pena paraguai, melhores compras paraguai, o que trazer do paraguai',
}

const produtos = [
  { emoji: '📱', nome: 'Smartphones', nota: '⭐⭐⭐⭐⭐', vale: true, motivo: 'Ate 40% mais barato. iPhone e Samsung com grande vantagem.' },
  { emoji: '🎧', nome: 'Fones e Headphones', nota: '⭐⭐⭐⭐⭐', vale: true, motivo: 'AirPods e Sony ate 45% mais barato. Produto leve e facil de trazer.' },
  { emoji: '🌸', nome: 'Perfumes importados', nota: '⭐⭐⭐⭐⭐', vale: true, motivo: 'Chanel, Dior e CH ate 50% mais barato que no Brasil.' },
  { emoji: '💻', nome: 'Notebooks', nota: '⭐⭐⭐⭐', vale: true, motivo: 'Ate 35% mais barato mas verifique o teclado e a garantia.' },
  { emoji: '🥃', nome: 'Whisky e bebidas', nota: '⭐⭐⭐⭐⭐', vale: true, motivo: 'Limite de 12 litros. Johnnie Walker, Jack Daniels muito mais barato.' },
  { emoji: '👟', nome: 'Tenis e roupas de marca', nota: '⭐⭐⭐⭐', vale: true, motivo: 'Nike, Adidas e Tommy Hilfiger com bom desconto.' },
  { emoji: '🎮', nome: 'Consoles e games', nota: '⭐⭐⭐', vale: true, motivo: 'Vale mas atencao ao bloqueio de regiao dos jogos fisicos.' },
  { emoji: '🛒', nome: 'Produtos de mercado', nota: '⭐⭐', vale: false, motivo: 'Alimentos em geral nao compensam o espaco e o risco na fronteira.' },
  { emoji: '💊', nome: 'Medicamentos', nota: '⭐', vale: false, motivo: 'Muitos medicamentos sao proibidos de entrar no Brasil sem receita.' },
]

export default function OQueComprar() {
  return (
    <main className="min-h-screen bg-gray-50 pb-16">
      <div className="bg-gradient-to-r from-green-600 to-green-500 px-5 pt-12 pb-8 text-white">
        <Link href="/" className="text-green-100 text-sm mb-4 block">← Calculadora</Link>
        <h1 className="text-2xl font-bold">O que Vale a Pena Comprar no Paraguai</h1>
        <p className="text-green-100 mt-2 text-sm">Guia completo 2026 — o que comprar e o que evitar.</p>
      </div>

      <div className="px-4 py-6 max-w-2xl mx-auto space-y-4">

        <div className="bg-white rounded-2xl p-5 shadow-sm space-y-3 text-sm text-gray-600">
          <p>
            O Paraguai e um dos destinos de compras mais populares entre os brasileiros, especialmente para quem mora perto de Foz do Iguacu. Mas nem tudo que parece barato realmente compensa — e preciso considerar o cambio, o imposto de importacao e o risco de trazer produtos incompativeis com o Brasil.
          </p>
          <p>
            A cota de isencao e de <strong>US$ 500 por pessoa via terrestre</strong>. Acima disso, voce paga 50% de imposto sobre o excedente. Por isso, planejar o que comprar antes de viajar faz toda a diferenca.
          </p>
        </div>

        <div className="bg-white rounded-2xl p-5 shadow-sm">
          <h2 className="text-lg font-bold text-gray-800 mb-3">🏆 Vale a pena x Nao vale</h2>
          <div className="space-y-3">
            {produtos.map(({ emoji, nome, nota, vale, motivo }) => (
              <div key={nome} className={`flex gap-3 items-start py-2 border-b border-gray-100 ${!vale ? 'opacity-60' : ''}`}>
                <span className="text-2xl">{emoji}</span>
                <div className="flex-1">
                  <div className="flex items-center gap-2">
                    <p className="font-semibold text-gray-800 text-sm">{nome}</p>
                    <span className={`text-xs px-2 py-0.5 rounded-full font-medium ${vale ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-600'}`}>
                      {vale ? 'Vale ✅' : 'Evite ❌'}
                    </span>
                  </div>
                  <p className="text-gray-500 text-xs mt-0.5">{motivo}</p>
                  <p className="text-yellow-500 text-xs mt-0.5">{nota}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white rounded-2xl p-5 shadow-sm space-y-3 text-sm text-gray-600">
          <h2 className="font-bold text-gray-800 text-base">Estrategia para aproveitar ao maximo</h2>
          <p>
            A melhor estrategia e <strong>priorizar produtos de alto valor e baixo peso</strong>. Fones de ouvido, perfumes e smartwatches sao ideais — custam entre US$ 50 e US$ 300, cabem facilmente na bagagem e tem grande economia em relacao ao Brasil.
          </p>
          <p>
            Se voce quer um produto mais caro como um celular ou notebook que sozinho ultrapassa a cota, calcule o custo total com o imposto antes de decidir. Na maioria dos casos ainda vale a pena, mas e importante saber exatamente quanto vai pagar.
          </p>
          <p>
            Para familias, a estrategia de distribuir as compras entre todos os membros e muito eficiente. Uma familia de 4 pessoas tem US$ 2.000 de cota combinada — o suficiente para trazer varios eletronicos e perfumes sem pagar nenhum imposto.
          </p>
          <h2 className="font-bold text-gray-800 text-base">Onde comprar em Ciudad del Este?</h2>
          <p>
            As lojas mais confiaveis de Ciudad del Este sao o Shopping China, Flytec Computers, Mobile Zone, Visao VIP e Elegancia. Evite comprar de ambulantes ou em lojas sem nota fiscal — o risco de produtos falsificados e maior e voce fica sem comprovante para a fronteira.
          </p>
        </div>

        <div className="bg-yellow-50 border border-yellow-200 rounded-2xl p-5">
          <h2 className="font-bold text-yellow-800 mb-2">⚠️ Produtos que nao valem a pena</h2>
          <ul className="text-yellow-700 text-sm space-y-1.5">
            <li>• Alimentos pereciveis — frutas e carnes sao proibidas de entrar no Brasil</li>
            <li>• Medicamentos — muitos precisam de receita e podem ser apreendidos</li>
            <li>• Produtos muito pesados ou volumosos — ocupam espaco da cota sem grande vantagem</li>
            <li>• Eletrodomesticos grandes — voltagem diferente e garantia invalida no Brasil</li>
          </ul>
        </div>

        <div className="bg-green-50 border border-green-100 rounded-2xl p-5">
          <p className="font-bold text-green-800 mb-3">🧮 Calcule o preco final antes de comprar</p>
          <Link href="/" className="block bg-green-500 text-white text-center py-3 rounded-xl font-semibold">
            Abrir Calculadora →
          </Link>
        </div>

        <BannerNomad />

        
        <div className="bg-gray-50 rounded-2xl p-4">
          <p className="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-3">Leia também</p>
          <div className="space-y-2">
            <Link href="/eletronicos-paraguai" className="flex items-center gap-3 bg-white rounded-xl px-4 py-3 text-sm text-gray-700 border border-gray-100 hover:border-green-300 transition-colors">
              <span className="text-lg">🖥️</span>
              <span>Eletrônicos no Paraguai</span>
              <span className="ml-auto text-gray-400">→</span>
            </Link>
            <Link href="/perfume-paraguai" className="flex items-center gap-3 bg-white rounded-xl px-4 py-3 text-sm text-gray-700 border border-gray-100 hover:border-green-300 transition-colors">
              <span className="text-lg">🌸</span>
              <span>Perfume no Paraguai</span>
              <span className="ml-auto text-gray-400">→</span>
            </Link>
            <Link href="/whisky-paraguai" className="flex items-center gap-3 bg-white rounded-xl px-4 py-3 text-sm text-gray-700 border border-gray-100 hover:border-green-300 transition-colors">
              <span className="text-lg">🥃</span>
              <span>Whisky no Paraguai</span>
              <span className="ml-auto text-gray-400">→</span>
            </Link>
          </div>
        </div>
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
  )
}
