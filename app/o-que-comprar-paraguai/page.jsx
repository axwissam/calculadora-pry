import Link from 'next/link'
import BannerNomad from '../components/BannerNomad'

export const metadata = {
  title: 'O que vale a pena comprar no Paraguai em 2026? | Calculadora Paraguai',
  description: 'Veja os produtos mais vantajosos para comprar no Paraguai: eletrônicos, perfumes, roupas e mais. Compare preços e calcule a economia real em reais.',
  keywords: 'o que comprar paraguai 2026, eletronicos paraguai, perfume paraguai, vale a pena paraguai, melhores produtos paraguai',
}

const produtos = [
  { emoji: '📱', nome: 'Eletrônicos', desc: 'Celulares, fones, tablets e smartwatches chegam a 40% mais baratos. Atenção ao modelo e garantia.', economia: 'Alta', exemplo: 'iPhone 16 128GB: ~US$ 799 (Brasil: R$ 7.299)' },
  { emoji: '👟', nome: 'Roupas e Calçados', desc: 'Marcas internacionais como Nike, Adidas e New Balance com preço significativamente menor que no Brasil.', economia: 'Alta', exemplo: 'Tênis Nike: ~US$ 80 (Brasil: R$ 600+)' },
  { emoji: '🌸', nome: 'Perfumes e Cosméticos', desc: 'Importados sem os impostos brasileiros. Um dos produtos com maior vantagem — Chanel, Dior, YSL.', economia: 'Muito alta', exemplo: 'Chanel N°5 100ml: ~US$ 120 (Brasil: R$ 900+)' },
  { emoji: '🎮', nome: 'Games e Acessórios', desc: 'Consoles, jogos e periféricos com diferença expressiva de preço. PS5, Xbox e Nintendo Switch.', economia: 'Alta', exemplo: 'PS5: ~US$ 450 (Brasil: R$ 4.500+)' },
  { emoji: '💊', nome: 'Suplementos', desc: 'Whey, creatina e vitaminas de marcas americanas com preços bem mais atrativos que no Brasil.', economia: 'Média', exemplo: 'Whey 5lbs: ~US$ 60 (Brasil: R$ 400+)' },
  { emoji: '🧴', nome: 'Produtos de Beleza', desc: 'Maquiagens, cremes e tratamentos de marcas internacionais como MAC, Maybelline e L'Oréal.', economia: 'Alta', exemplo: 'Base MAC: ~US$ 35 (Brasil: R$ 250+)' },
  { emoji: '💻', nome: 'Notebooks', desc: 'Dell, Lenovo, ASUS e MacBook com diferença significativa. Ideal para quem está dentro da cota.', economia: 'Alta', exemplo: 'MacBook Air M2: ~US$ 999 (Brasil: R$ 9.999+)' },
  { emoji: '⌚', nome: 'Relógios e Smartwatches', desc: 'Apple Watch, Samsung Galaxy Watch e relógios de marcas suíças com ótimo preço.', economia: 'Alta', exemplo: 'Apple Watch SE: ~US$ 180 (Brasil: R$ 1.800+)' },
]

const naoValeAPena = [
  { nome: 'Natura e O Boticário', motivo: 'Marcas brasileiras — sem vantagem' },
  { nome: 'Alimentos em geral', motivo: 'Frutas e carnes não podem entrar no Brasil' },
  { nome: 'Móveis e eletrodomésticos grandes', motivo: 'Difícil de transportar e declarar' },
  { nome: 'Medicamentos controlados', motivo: 'Exige receita e pode ser apreendido' },
]

export default function OQueComprar() {
  return (
    <main className="min-h-screen bg-gray-50 pb-16">
      <div className="bg-gradient-to-r from-green-600 to-green-500 px-5 pt-12 pb-8 text-white">
        <Link href="/" className="text-green-100 text-sm mb-4 block">← Calculadora</Link>
        <h1 className="text-2xl font-bold">O que vale a pena comprar no Paraguai em 2026?</h1>
        <p className="text-green-100 mt-2 text-sm">Os melhores produtos e onde economizar mais.</p>
      </div>

      <div className="px-4 py-6 max-w-2xl mx-auto space-y-4">

        <div className="bg-white rounded-2xl p-5 shadow-sm">
          <p className="text-gray-600 text-sm">O Paraguai é um dos destinos de compras mais populares da América do Sul. Com <strong>impostos muito menores que o Brasil</strong>, alguns produtos chegam a custar metade do preço — mesmo após pagar o imposto de importação na volta.</p>
        </div>

        <div className="bg-white rounded-2xl p-5 shadow-sm">
          <h2 className="text-lg font-bold text-gray-800 mb-3">✅ O que vale a pena comprar</h2>
          <div className="space-y-3">
            {produtos.map(p => (
              <div key={p.nome} className="flex gap-3 items-start border-b border-gray-50 pb-3 last:border-0 last:pb-0">
                <span className="text-2xl">{p.emoji}</span>
                <div className="flex-1">
                  <div className="flex items-center justify-between">
                    <h3 className="font-bold text-gray-800 text-sm">{p.nome}</h3>
                    <span className={`text-xs px-2 py-0.5 rounded-full font-medium ${p.economia === 'Muito alta' ? 'bg-green-100 text-green-800' : p.economia === 'Alta' ? 'bg-blue-100 text-blue-800' : 'bg-yellow-100 text-yellow-800'}`}>
                      {p.economia}
                    </span>
                  </div>
                  <p className="text-gray-500 text-xs mt-0.5">{p.desc}</p>
                  <p className="text-green-600 text-xs mt-1 font-medium">📊 {p.exemplo}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white rounded-2xl p-5 shadow-sm">
          <h2 className="text-lg font-bold text-gray-800 mb-3">❌ O que NÃO vale a pena</h2>
          <div className="space-y-2">
            {naoValeAPena.map(({ nome, motivo }) => (
              <div key={nome} className="flex gap-2 items-start bg-red-50 rounded-xl p-3">
                <span className="text-red-500">✗</span>
                <div>
                  <p className="font-semibold text-gray-800 text-sm">{nome}</p>
                  <p className="text-gray-500 text-xs">{motivo}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white rounded-2xl p-5 shadow-sm">
          <h2 className="text-lg font-bold text-gray-800 mb-3">💡 Como maximizar sua economia</h2>
          <div className="space-y-2 text-sm text-gray-600">
            <div className="flex gap-2"><span>1️⃣</span><p><strong>Distribua as compras pela família</strong> — cada pessoa tem cota de US$ 500, incluindo crianças.</p></div>
            <div className="flex gap-2"><span>2️⃣</span><p><strong>Pague em dinheiro ou Nomad</strong> — evita IOF e spread de cartões comuns.</p></div>
            <div className="flex gap-2"><span>3️⃣</span><p><strong>Priorize produtos com maior imposto no Brasil</strong> — eletrônicos e perfumes têm a maior diferença.</p></div>
            <div className="flex gap-2"><span>4️⃣</span><p><strong>Calcule antes de comprar</strong> — use nossa calculadora para saber o preço final em reais.</p></div>
            <div className="flex gap-2"><span>5️⃣</span><p><strong>Compre em lojas confiáveis</strong> — Shopping China, Flytec, Mobile Zone têm boa reputação.</p></div>
          </div>
        </div>

        <div className="bg-yellow-50 border border-yellow-200 rounded-2xl p-5">
          <h2 className="font-bold text-yellow-800 mb-2">⚠️ Atenção antes de comprar</h2>
          <ul className="text-yellow-700 text-sm space-y-1">
            <li>• Calcule sempre o valor com impostos incluídos</li>
            <li>• Fique dentro da cota de US$ 500 por pessoa ou declare o excedente</li>
            <li>• Prefira pagar em dinheiro ou cartão sem IOF</li>
            <li>• Verifique garantia e compatibilidade de eletrônicos</li>
            <li>• Exija nota fiscal em todas as compras</li>
          </ul>
        </div>

        <Link href="/lojas-paraguai" className="flex items-center gap-3 bg-white rounded-xl px-4 py-3 text-sm text-gray-700 border border-gray-100 hover:border-green-300 transition-colors">
          <span className="text-2xl">🏪</span>
          <div>
            <p className="font-bold text-gray-800 text-sm">Ver melhores lojas do Paraguai</p>
            <p className="text-xs text-gray-500">Shopping China, Flytec, Mobile Zone e mais</p>
          </div>
          <span className="ml-auto text-gray-400">→</span>
        </Link>

        <div className="bg-green-50 border border-green-100 rounded-2xl p-5">
          <p className="font-bold text-green-800 mb-1">🧮 Calcule sua economia agora</p>
          <p className="text-green-700 text-sm mb-3">Veja o preço final com câmbio real e todos os impostos.</p>
          <Link href="/" className="block bg-green-500 text-white text-center py-3 rounded-xl font-semibold">Abrir Calculadora →</Link>
        </div>

        <BannerNomad />
      </div>
    </main>
  )
}
