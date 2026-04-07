import Link from 'next/link'

export const metadata = {
  title: 'Duty Free Foz do Iguacu 2026 - O que Comprar e Quanto Pode Trazer | Calculadora Paraguai',
  description: 'Duty free em Foz do Iguacu 2026: limite de compras, o que vale a pena, como funciona e a diferenca com o Paraguai. Dicas para aproveitar ao maximo.',
  keywords: 'duty free foz do iguacu, duty free paraguai, duty free ponte amizade, compras duty free foz 2026',
}

const itens = [
  { emoji: '🥃', nome: 'Bebidas Alcoolicas', limite: 'Ate 12 litros', desc: 'Whisky, vinho, espumante e gin com preco muito abaixo do Brasil. Um dos melhores itens do duty free.', destaque: true },
  { emoji: '🚬', nome: 'Cigarros e Tabaco', limite: 'Ate 25 unidades', desc: '25 carteiras de cigarro ou equivalente em charutos. Grande economia para fumantes.', destaque: false },
  { emoji: '💄', nome: 'Perfumes e Cosmeticos', limite: 'Dentro da cota geral', desc: 'Marcas internacionais como Carolina Herrera, Dior e Chanel com ate 50% de desconto.', destaque: true },
  { emoji: '🍫', nome: 'Chocolates e Alimentos', limite: 'Dentro da cota geral', desc: 'Chocolates importados, azeites e outros alimentos. Atencao: frutas e carnes nao podem entrar.', destaque: false },
  { emoji: '👜', nome: 'Bolsas e Acessorios', limite: 'Dentro da cota geral', desc: 'Marcas como Coach, Michael Kors e outras com bom desconto. Verifique autenticidade.', destaque: false },
  { emoji: '📱', nome: 'Eletronicos', limite: 'Dentro da cota geral', desc: 'Alguns eletronicos disponiveis, mas o Paraguai tende a ter preco melhor para celulares e notebooks.', destaque: false },
]

export default function DutyFreeFoz() {
  return (
    <main className="min-h-screen bg-gray-50 pb-16">
      <div className="bg-gradient-to-r from-purple-600 to-purple-500 px-5 pt-12 pb-8 text-white">
        <Link href="/" className="text-purple-100 text-sm mb-4 block">← Calculadora</Link>
        <h1 className="text-2xl font-bold">Duty Free Foz do Iguacu 2026</h1>
        <p className="text-purple-100 mt-2 text-sm">O que comprar, quanto pode trazer e como funciona na pratica.</p>
      </div>

      <div className="px-4 py-6 max-w-2xl mx-auto space-y-4">
        <div className="bg-white rounded-2xl p-5 shadow-sm">
          <p className="text-gray-600 text-sm">
            O duty free de Foz do Iguacu fica na <strong>Ponte da Amizade</strong>, na saida do Brasil rumo ao Paraguai — e tambem na volta. E uma loja isenta de impostos onde voce pode comprar dentro de limites especificos sem pagar tributos na entrada do Brasil.
          </p>
        </div>

        <div className="bg-blue-50 border border-blue-100 rounded-2xl p-5">
          <h2 className="font-bold text-blue-800 mb-3">📋 Limites do Duty Free em 2026</h2>
          <div className="space-y-2 text-sm">
            <div className="flex justify-between py-2 border-b border-blue-100">
              <span className="text-gray-700">Cota geral de compras</span>
              <span className="font-bold text-blue-800">US$ 500 por pessoa</span>
            </div>
            <div className="flex justify-between py-2 border-b border-blue-100">
              <span className="text-gray-700">Bebidas alcoolicas</span>
              <span className="font-bold text-blue-800">Ate 12 litros</span>
            </div>
            <div className="flex justify-between py-2 border-b border-blue-100">
              <span className="text-gray-700">Cigarros</span>
              <span className="font-bold text-blue-800">25 carteiras</span>
            </div>
            <div className="flex justify-between py-2">
              <span className="text-gray-700">Frequencia minima</span>
              <span className="font-bold text-blue-800">1 vez a cada 30 dias</span>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-2xl p-5 shadow-sm">
          <h2 className="text-lg font-bold text-gray-800 mb-3">O que vale a pena comprar?</h2>
          <div className="space-y-3">
            {itens.map(item => (
              <div key={item.nome} className="flex gap-3 items-start">
                <span className="text-2xl">{item.emoji}</span>
                <div className="flex-1">
                  <div className="flex items-center gap-2">
                    <p className="font-semibold text-gray-800 text-sm">{item.nome}</p>
                    {item.destaque && <span className="text-xs bg-purple-100 text-purple-700 px-2 py-0.5 rounded-full">Top pick</span>}
                  </div>
                  <p className="text-gray-400 text-xs">{item.limite}</p>
                  <p className="text-gray-500 text-xs mt-0.5">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white rounded-2xl p-5 shadow-sm">
          <h2 className="text-lg font-bold text-gray-800 mb-3">🆚 Duty Free vs Paraguai</h2>
          <div className="space-y-2 text-sm">
            <div className="grid grid-cols-3 gap-2 text-xs font-bold text-gray-500 pb-1 border-b">
              <span>Produto</span>
              <span className="text-center">Duty Free</span>
              <span className="text-center">Paraguai</span>
            </div>
            {[
              { produto: 'Whisky', df: '✅ Melhor', py: '🟡 Similar' },
              { produto: 'Perfume', df: '✅ Melhor', py: '🟡 Similar' },
              { produto: 'Celular', df: '🟡 Ok', py: '✅ Melhor' },
              { produto: 'Notebook', df: '❌ Pouco estoque', py: '✅ Melhor' },
              { produto: 'Chocolate', df: '✅ Melhor', py: '🟡 Similar' },
            ].map(row => (
              <div key={row.produto} className="grid grid-cols-3 gap-2 text-xs py-1.5 border-b border-gray-50">
                <span className="text-gray-700">{row.produto}</span>
                <span className="text-center">{row.df}</span>
                <span className="text-center">{row.py}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-yellow-50 border border-yellow-200 rounded-2xl p-5">
          <h2 className="font-bold text-yellow-800 mb-2">⚠️ Atencao na volta</h2>
          <ul className="text-yellow-700 text-sm space-y-1.5">
            <li>• O duty free conta dentro da sua cota de US$ 500</li>
            <li>• Bebidas tem limite proprio de 12 litros, independente da cota</li>
            <li>• A Receita pode conferir tudo na Ponte da Amizade</li>
            <li>• Compras do Paraguai + duty free somam na mesma cota</li>
            <li>• Guarde todos os cupons fiscais</li>
          </ul>
        </div>

        <div className="bg-white rounded-2xl p-5 shadow-sm">
          <h2 className="text-lg font-bold text-gray-800 mb-2">📍 Onde fica o Duty Free?</h2>
          <p className="text-gray-600 text-sm">Ha duas lojas duty free na regiao:</p>
          <ul className="text-gray-600 text-sm mt-2 space-y-1.5">
            <li>• <strong>Saida do Brasil:</strong> na Ponte da Amizade, antes do controle aduaneiro paraguaio</li>
            <li>• <strong>Retorno ao Brasil:</strong> apos o controle aduaneiro brasileiro, ainda na ponte</li>
          </ul>
          <p className="text-gray-500 text-xs mt-3">Dica: a loja da volta costuma ter mais movimento. Va cedo para evitar filas.</p>
        </div>

        <Link href="/lojas-paraguai" className="flex items-center gap-3 bg-white rounded-xl px-4 py-3 text-sm text-gray-700 border border-gray-100 hover:border-purple-300 transition-colors">
          <span className="text-2xl">🏪</span>
          <div>
            <p className="font-bold text-gray-800 text-sm">Melhores lojas do Paraguai</p>
            <p className="text-xs text-gray-500">Shopping China, Flytec, Mobile Zone e mais</p>
          </div>
          <span className="ml-auto text-gray-400">→</span>
        </Link>

        <div className="bg-green-50 border border-green-100 rounded-2xl p-5">
          <p className="font-bold text-green-800 mb-3">🧮 Calcule o preco final das suas compras</p>
          <p className="text-green-600 text-sm mb-4">Com imposto, IOF e cambio real incluidos.</p>
          <Link href="/" className="block bg-green-500 text-white text-center py-3 rounded-xl font-semibold">
            Abrir Calculadora →
          </Link>
        </div>
      </div>
    </main>
  )
}
