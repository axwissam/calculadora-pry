import Link from 'next/link'
import BannerNomad from '../components/BannerNomad'
export const metadata = {
  title: 'Whisky no Paraguai 2026 - Quanto pode trazer? Limite e precos',
  description: 'Quantas garrafas de whisky posso trazer do Paraguai? Limite de 12 litros por pessoa. Johnnie Walker, Jack Daniels e mais com ate 60% de desconto.',
  keywords: 'whisky paraguai, quantos litros whisky paraguai, garrafas whisky limite, cota whisky paraguai 2026',
}
export default function WhiskyParaguai() {
  return (
    <main className="min-h-screen bg-gray-50 pb-16">
      <div className="bg-gradient-to-r from-green-600 to-green-500 px-5 pt-12 pb-8 text-white">
        <Link href="/" className="text-green-100 text-sm mb-4 block">Calculadora</Link>
        <h1 className="text-2xl font-bold">Whisky no Paraguai 2026</h1>
        <p className="text-green-100 mt-2 text-sm">Quantas garrafas pode trazer? Limites, precos e como nao pagar imposto.</p>
      </div>
      <div className="px-4 py-6 max-w-2xl mx-auto space-y-6">
        <div className="bg-white rounded-2xl p-5 shadow-sm">
          <h2 className="text-lg font-bold text-gray-800 mb-3">Quantas garrafas de whisky pode trazer do Paraguai?</h2>
          <div className="bg-green-50 border border-green-200 rounded-xl p-4 text-center mb-4">
            <p className="text-3xl font-black text-green-600">12 litros</p>
            <p className="text-green-700 text-sm mt-1">Limite de bebida alcoolica por pessoa</p>
          </div>
          <div className="space-y-2 text-sm text-gray-600">
            <p>Em garrafas de 750ml: <strong className="text-gray-800">ate 16 garrafas</strong></p>
            <p>Em garrafas de 1 litro: <strong className="text-gray-800">ate 12 garrafas</strong></p>
            <p>Em garrafas de 1,75L: <strong className="text-gray-800">ate 6 garrafas</strong></p>
          </div>
          <div className="mt-3 bg-yellow-50 border border-yellow-200 rounded-xl p-3 text-sm text-yellow-800">
            O limite de bebida alcoolica e independente da cota de US$ 500 - voce pode trazer os 12 litros mesmo que ja tenha usado toda a cota em outros produtos.
          </div>
        </div>
        <div className="bg-white rounded-2xl p-5 shadow-sm">
          <h2 className="text-lg font-bold text-gray-800 mb-3">Preco do whisky em Ciudad del Este</h2>
          <div className="space-y-2">
            {[
              { marca: 'Johnnie Walker Red Label 1L', preco: 'US$ 12 a 15' },
              { marca: 'Johnnie Walker Black Label 1L', preco: 'US$ 22 a 28' },
              { marca: 'Jack Daniels 1L', preco: 'US$ 20 a 25' },
              { marca: 'Chivas Regal 12 anos 1L', preco: 'US$ 25 a 32' },
              { marca: 'Ballantines 1L', preco: 'US$ 14 a 18' },
              { marca: 'Famous Grouse 1L', preco: 'US$ 13 a 17' },
            ].map(({ marca, preco }) => (
              <div key={marca} className="flex justify-between items-center py-2 border-b border-gray-100 last:border-0">
                <span className="text-sm text-gray-700">{marca}</span>
                <span className="text-sm font-bold text-green-600">{preco}</span>
              </div>
            ))}
          </div>
        </div>
        <div className="bg-white rounded-2xl p-5 shadow-sm">
          <h2 className="text-lg font-bold text-gray-800 mb-3">Whisky entra na cota de US$ 500?</h2>
          <p className="text-gray-600 text-sm mb-3">Sim! O whisky entra na cota geral de US$ 500 por pessoa. Some o valor do whisky com o restante das compras para saber se vai pagar imposto.</p>
          <div className="bg-red-50 rounded-xl p-3 text-sm text-red-700 mt-3">
            <p className="font-semibold">Atencao:</p>
            <p className="mt-1">Nunca tente esconder garrafas em malas. A fiscalizacao na Ponte da Amizade e rigorosa e o excedente pode ser apreendido.</p>
          </div>
        </div>
        <div className="bg-blue-50 border border-blue-100 rounded-2xl p-5">
          <p className="font-bold text-blue-800 mb-2">Calcule o imposto da sua compra</p>
          <p className="text-blue-600 text-sm mb-4">Some o whisky com todas as outras compras e veja se vai pagar imposto.</p>
          <Link href="/" className="block bg-green-500 text-white text-center py-3 rounded-xl font-semibold">Abrir Calculadora</Link>
        </div>
        <div className="bg-white rounded-2xl p-5 shadow-sm">
          <h2 className="font-bold text-gray-800 mb-3">Leia tambem</h2>
          <div className="space-y-2">
            {[
              { href: '/limite-compras-paraguai', label: 'Qual o limite de compras no Paraguai?' },
              { href: '/o-que-comprar-paraguai', label: 'O que vale a pena comprar no Paraguai?' },
              { href: '/melhor-forma-pagamento-paraguai', label: 'Melhor forma de pagamento no Paraguai' },
              { href: '/como-declarar-paraguai', label: 'Como declarar na Receita Federal' },
            ].map(({ href, label }) => (
              <Link key={href} href={href} className="flex items-center justify-between bg-gray-50 rounded-xl px-4 py-3 text-sm text-gray-700 border border-gray-100 transition-colors">
                <span>{label}</span><span className="text-gray-400">-&gt;</span>
              </Link>
            ))}
          </div>
        </div>
        <BannerNomad />
      </div>
    </main>
  )
}
