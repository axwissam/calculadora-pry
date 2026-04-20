import Link from 'next/link'
import BannerNomad from '../components/BannerNomad'
export const metadata = {
  title: 'Samsung no Paraguai 2026 - Preco e Vale a Pena? | CotaParaguai',
  description: 'Quanto custa celular Samsung no Paraguai em 2026? Galaxy S24, A55 e mais. Calcule o preco final em reais com imposto e cambio.',
  keywords: 'samsung paraguai, galaxy paraguai, celular samsung paraguai 2026, preco samsung ciudad del este',
}
export default function SamsungParaguai() {
  return (
    <main className="min-h-screen bg-gray-50 pb-16">
      <div className="bg-gradient-to-r from-green-600 to-green-500 px-5 pt-12 pb-8 text-white">
        <Link href="/" className="text-green-100 text-sm mb-4 block">← Calculadora</Link>
        <h1 className="text-2xl font-bold">Samsung no Paraguai em 2026</h1>
        <p className="text-green-100 mt-2 text-sm">Precos reais, modelos disponiveis e como calcular o imposto.</p>
      </div>
      <div className="px-4 py-6 max-w-2xl mx-auto space-y-6">
        <div className="bg-white rounded-2xl p-5 shadow-sm">
          <h2 className="text-lg font-bold text-gray-800 mb-3">Vale a pena comprar Samsung no Paraguai?</h2>
          <p className="text-gray-600 text-sm mb-3">Sim — Samsung e uma das marcas com maior vantagem em Ciudad del Este. Os modelos intermediarios e tops chegam a custar <strong>30% a 40% menos</strong> que no Brasil.</p>
          <div className="bg-green-50 border border-green-200 rounded-xl p-3 text-sm text-green-800">
            Prefira versoes internacionais (sem sufixo BR) — funcionam normalmente no Brasil e tem garantia de fabricante.
          </div>
        </div>
        <div className="bg-white rounded-2xl p-5 shadow-sm">
          <h2 className="text-lg font-bold text-gray-800 mb-3">Precos estimados em 2026</h2>
          <div className="space-y-2">
            {[
              { modelo: 'Galaxy A15', preco: 'US$ 120 a 150', cota: true },
              { modelo: 'Galaxy A35', preco: 'US$ 220 a 260', cota: true },
              { modelo: 'Galaxy A55', preco: 'US$ 320 a 360', cota: true },
              { modelo: 'Galaxy S24', preco: 'US$ 680 a 750', cota: false },
              { modelo: 'Galaxy S24+', preco: 'US$ 850 a 950', cota: false },
              { modelo: 'Galaxy S24 Ultra', preco: 'US$ 1.100 a 1.250', cota: false },
            ].map(({ modelo, preco, cota }) => (
              <div key={modelo} className="flex justify-between items-center py-2 border-b border-gray-100 last:border-0">
                <div>
                  <p className="text-sm font-medium text-gray-800">{modelo}</p>
                  <span className={`text-xs px-2 py-0.5 rounded-full font-medium ${cota ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'}`}>
                    {cota ? 'Dentro da cota' : 'Estoura cota'}
                  </span>
                </div>
                <span className="text-sm font-bold text-green-600">{preco}</span>
              </div>
            ))}
          </div>
          <p className="text-gray-400 text-xs mt-3">* Precos estimados. Use a calculadora para o valor exato com cambio do dia.</p>
        </div>
        <div className="bg-yellow-50 border border-yellow-200 rounded-2xl p-5">
          <h2 className="font-bold text-yellow-800 mb-2">Atencao antes de comprar</h2>
          <ul className="text-yellow-700 text-sm space-y-1.5">
            <li>• Modelos acima de US$ 500 pagam 50% de imposto sobre o excedente</li>
            <li>• Verifique se o modelo aceita chip brasileiro (bandas 4G/5G)</li>
            <li>• Exija nota fiscal da loja</li>
            <li>• Prefira versoes internacionais — garantia mundial</li>
          </ul>
        </div>
        <div className="bg-blue-50 border border-blue-100 rounded-2xl p-5">
          <p className="font-bold text-blue-800 mb-2">Calcule o preco final em reais</p>
          <p className="text-blue-600 text-sm mb-4">Com imposto, IOF e cambio em tempo real.</p>
          <Link href="/" className="block bg-green-500 text-white text-center py-3 rounded-xl font-semibold">Abrir Calculadora →</Link>
        </div>
        <div className="bg-white rounded-2xl p-5 shadow-sm">
          <h2 className="font-bold text-gray-800 mb-3">Leia tambem</h2>
          <div className="space-y-2">
            {[
              { href: '/eletronicos-paraguai', label: 'Eletronicos no Paraguai' },
              { href: '/imposto-iphone-paraguai', label: 'Imposto iPhone Paraguai' },
              { href: '/melhor-forma-pagamento-paraguai', label: 'Melhor forma de pagamento' },
              { href: '/limite-compras-paraguai', label: 'Qual o limite de compras?' },
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
