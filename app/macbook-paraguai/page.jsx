import Link from 'next/link'
import BannerNomad from '../components/BannerNomad'
export const metadata = {
  title: 'MacBook no Paraguai 2026 - Preco e Vale a Pena? | CotaParaguai',
  description: 'Quanto custa MacBook no Paraguai em 2026? Air e Pro com chip M. Calcule o preco final em reais com imposto e cambio.',
  keywords: 'macbook paraguai, macbook air paraguai, macbook pro paraguai, notebook apple paraguai 2026',
}
export default function MacbookParaguai() {
  return (
    <main className="min-h-screen bg-gray-50 pb-16">
      <div className="bg-gradient-to-r from-green-600 to-green-500 px-5 pt-12 pb-8 text-white">
        <Link href="/" className="text-green-100 text-sm mb-4 block">← Calculadora</Link>
        <h1 className="text-2xl font-bold">MacBook no Paraguai em 2026</h1>
        <p className="text-green-100 mt-2 text-sm">Precos reais e se ainda vale a pena depois do imposto.</p>
      </div>
      <div className="px-4 py-6 max-w-2xl mx-auto space-y-6">
        <div className="bg-yellow-50 border border-yellow-200 rounded-2xl p-5">
          <p className="font-bold text-yellow-800">MacBook estoura a cota de US$ 500</p>
          <p className="text-yellow-700 text-sm mt-2">Todos os modelos de MacBook custam acima de US$ 900 — voce vai pagar imposto sobre o excedente. Mesmo assim, o preco final costuma ser <strong>20% a 25% mais barato</strong> que no Brasil.</p>
        </div>
        <div className="bg-white rounded-2xl p-5 shadow-sm">
          <h2 className="text-lg font-bold text-gray-800 mb-3">Precos dos MacBooks em 2026</h2>
          <div className="space-y-3">
            {[
              { modelo: 'MacBook Air 13" M3', preco: 'US$ 920 a 1.000', imposto: 'US$ 210 a 250', economia: '~25% mais barato que BR' },
              { modelo: 'MacBook Air 15" M3', preco: 'US$ 1.100 a 1.200', imposto: 'US$ 300 a 350', economia: '~22% mais barato que BR' },
              { modelo: 'MacBook Pro 14" M3', preco: 'US$ 1.450 a 1.600', imposto: 'US$ 475 a 550', economia: '~20% mais barato que BR' },
            ].map(({ modelo, preco, imposto, economia }) => (
              <div key={modelo} className="bg-gray-50 rounded-xl p-4">
                <p className="font-semibold text-gray-800 text-sm">{modelo}</p>
                <div className="flex justify-between mt-2 text-xs text-gray-600">
                  <span>Preco: <strong className="text-green-600">{preco}</strong></span>
                  <span>Imposto: <strong className="text-red-500">{imposto}</strong></span>
                </div>
                <p className="text-xs text-green-700 mt-1 font-medium">{economia}</p>
              </div>
            ))}
          </div>
          <p className="text-gray-400 text-xs mt-3">* Precos estimados com cambio de R$ 5,80. Use a calculadora para valor exato.</p>
        </div>
        <div className="bg-white rounded-2xl p-5 shadow-sm">
          <h2 className="text-lg font-bold text-gray-800 mb-3">Dicas para comprar MacBook no Paraguai</h2>
          <ul className="space-y-2 text-sm text-gray-600">
            <li className="flex gap-2"><span className="text-green-500 font-bold">✓</span> Confira se o modelo aceita teclado ABNT2 ou adapte-se ao QWERTY</li>
            <li className="flex gap-2"><span className="text-green-500 font-bold">✓</span> Verifique o layout do teclado antes de comprar</li>
            <li className="flex gap-2"><span className="text-green-500 font-bold">✓</span> Compre em lojas conhecidas com nota fiscal</li>
            <li className="flex gap-2"><span className="text-green-500 font-bold">✓</span> MacBook tem garantia Apple mundial — funciona no Brasil</li>
            <li className="flex gap-2"><span className="text-green-500 font-bold">✓</span> Carregador bivolt — nao precisa de adaptador</li>
          </ul>
        </div>
        <div className="bg-blue-50 border border-blue-100 rounded-2xl p-5">
          <p className="font-bold text-blue-800 mb-2">Calcule o preco final do seu MacBook</p>
          <p className="text-blue-600 text-sm mb-4">Com imposto de importacao e cambio em tempo real.</p>
          <Link href="/" className="block bg-green-500 text-white text-center py-3 rounded-xl font-semibold">Abrir Calculadora →</Link>
        </div>
        <div className="bg-white rounded-2xl p-5 shadow-sm">
          <h2 className="font-bold text-gray-800 mb-3">Leia tambem</h2>
          <div className="space-y-2">
            {[
              { href: '/eletronicos-paraguai', label: 'Eletronicos no Paraguai' },
              { href: '/imposto-iphone-paraguai', label: 'Imposto iPhone Paraguai' },
              { href: '/como-calcular-imposto-paraguai', label: 'Como calcular o imposto' },
              { href: '/cota-paraguai-via-terrestre', label: 'Cota via terrestre 2026' },
            ].map(({ href, label }) => (
              <Link key={href} href={href} className="flex items-center justify-between bg-gray-50 rounded-xl px-4 py-3 text-sm text-gray-700 border border-gray-100">
                <span>{label}</span><span className="text-gray-400">→</span>
              </Link>
            ))}
          </div>
        </div>
        <BannerNomad />
      </div>
    </main>
  )
}
