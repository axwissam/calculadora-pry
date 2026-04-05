import Link from 'next/link'

export const metadata = {
  title: 'O que vale a pena comprar no Paraguai em 2026? | Calculadora Paraguai',
  description:
    'Veja os produtos mais vantajosos para comprar no Paraguai: eletrônicos, perfumes, roupas e mais. Compare preços e calcule a economia real em reais.',
  keywords: 'o que comprar paraguai 2026, eletrônicos paraguai, perfume paraguai, vale a pena paraguai',
}

const produtos = [
  { emoji: '📱', nome: 'Eletrônicos', desc: 'Celulares, fones, tablets e smartwatches chegam a 40% mais baratos. Atenção ao modelo e garantia.', economia: 'Alta' },
  { emoji: '👟', nome: 'Roupas e Calçados', desc: 'Marcas internacionais com preço significativamente menor que no Brasil.', economia: 'Alta' },
  { emoji: '🌸', nome: 'Perfumes e Cosméticos', desc: 'Importados sem os impostos brasileiros. Um dos produtos com maior vantagem.', economia: 'Muito alta' },
  { emoji: '🎮', nome: 'Games e Acessórios', desc: 'Consoles, jogos e periféricos com diferença expressiva de preço.', economia: 'Alta' },
  { emoji: '💊', nome: 'Suplementos', desc: 'Whey, creatina e vitaminas com preços bem mais atrativos.', economia: 'Média' },
  { emoji: '🧴', nome: 'Produtos de Beleza', desc: 'Maquiagens, cremes e tratamentos de marcas internacionais.', economia: 'Alta' },
]

export default function OQueComprar() {
  return (
    <main className="min-h-screen bg-gray-50 pb-16">
      <div className="bg-gradient-to-r from-green-600 to-green-500 px-5 pt-12 pb-8 text-white">
        <Link href="/" className="text-green-100 text-sm mb-4 block">← Calculadora</Link>
        <h1 className="text-2xl font-bold">O que vale a pena comprar no Paraguai em 2026?</h1>
      </div>

      <div className="px-4 py-6 max-w-2xl mx-auto space-y-4">
        <div className="bg-white rounded-2xl p-5 shadow-sm">
          <p className="text-gray-600">
            O Paraguai é um dos destinos de compras mais populares da América do Sul. Com <strong>impostos muito menores que o Brasil</strong>, alguns produtos chegam a custar metade do preço.
          </p>
        </div>

        {produtos.map(p => (
          <div key={p.nome} className="bg-white rounded-2xl p-5 shadow-sm flex gap-4">
            <span className="text-3xl">{p.emoji}</span>
            <div>
              <h2 className="font-bold text-gray-800">{p.nome}</h2>
              <p className="text-gray-500 text-sm mt-1">{p.desc}</p>
              <span className={`mt-2 inline-block text-xs px-2 py-0.5 rounded-full font-medium ${
                p.economia === 'Muito alta' ? 'bg-green-100 text-green-800' :
                p.economia === 'Alta' ? 'bg-blue-100 text-blue-800' :
                'bg-yellow-100 text-yellow-800'
              }`}>
                Economia: {p.economia}
              </span>
            </div>
          </div>
        ))}

        <div className="bg-yellow-50 border border-yellow-200 rounded-2xl p-5">
          <h2 className="font-bold text-yellow-800 mb-2">⚠️ Atenção antes de comprar</h2>
          <ul className="text-yellow-700 text-sm space-y-1">
            <li>• Calcule sempre o valor com impostos incluídos</li>
            <li>• Garanta dentro da cota de US$ 500 por pessoa</li>
            <li>• Prefira pagar em dinheiro ou pix (menos taxas)</li>
            <li>• Verifique garantia e compatibilidade de eletrônicos</li>
          </ul>
        </div>

        <div className="bg-green-50 border border-green-100 rounded-2xl p-5">
          <p className="font-bold text-green-800 mb-3">🧮 Calcule sua economia agora</p>
          <Link href="/" className="block bg-green-500 text-white text-center py-3 rounded-xl font-semibold">
            Abrir Calculadora →
          </Link>
        </div>
      </div>
    </main>
  )
}
