import Link from 'next/link'
import BannerNomad from '../components/BannerNomad'
export const metadata = {
  title: 'AirPods no Paraguai 2026 - Preco e Vale a Pena? | CotaParaguai',
  description: 'Quanto custam AirPods no Paraguai em 2026? AirPods 2, 3, Pro e Max. Veja precos em dolares e calcule o valor final em reais.',
  keywords: 'airpods paraguai, airpods pro paraguai, preco airpods cidade del este, fone apple paraguai 2026',
}
export default function AirpodsParaguai() {
  return (
    <main className="min-h-screen bg-gray-50 pb-16">
      <div className="bg-gradient-to-r from-green-600 to-green-500 px-5 pt-12 pb-8 text-white">
        <Link href="/" className="text-green-100 text-sm mb-4 block">← Calculadora</Link>
        <h1 className="text-2xl font-bold">AirPods no Paraguai em 2026</h1>
        <p className="text-green-100 mt-2 text-sm">Precos reais de todos os modelos e se vale a pena comprar.</p>
      </div>
      <div className="px-4 py-6 max-w-2xl mx-auto space-y-6">
        <div className="bg-green-50 border border-green-200 rounded-2xl p-5">
          <p className="font-bold text-green-800 text-base">AirPods sao um dos melhores produtos para comprar no Paraguai</p>
          <p className="text-green-700 text-sm mt-2">Leves, pequenos e com preco ate <strong>40% menor</strong> que no Brasil. Todos os modelos cabem facilmente dentro da cota de US$ 500.</p>
        </div>
        <div className="bg-white rounded-2xl p-5 shadow-sm">
          <h2 className="text-lg font-bold text-gray-800 mb-3">Precos dos AirPods em 2026</h2>
          <div className="space-y-2">
            {[
              { modelo: 'AirPods 2a geracao', preco: 'US$ 80 a 100', cota: true },
              { modelo: 'AirPods 3a geracao', preco: 'US$ 130 a 160', cota: true },
              { modelo: 'AirPods Pro 2a geracao', preco: 'US$ 180 a 220', cota: true },
              { modelo: 'AirPods Max', preco: 'US$ 420 a 480', cota: true },
            ].map(({ modelo, preco, cota }) => (
              <div key={modelo} className="flex justify-between items-center py-2 border-b border-gray-100 last:border-0">
                <div>
                  <p className="text-sm font-medium text-gray-800">{modelo}</p>
                  <span className="text-xs px-2 py-0.5 rounded-full font-medium bg-green-100 text-green-700">Dentro da cota ✅</span>
                </div>
                <span className="text-sm font-bold text-green-600">{preco}</span>
              </div>
            ))}
          </div>
          <p className="text-gray-400 text-xs mt-3">* Precos estimados. Verifique com cambio do dia na calculadora.</p>
        </div>
        <div className="bg-white rounded-2xl p-5 shadow-sm">
          <h2 className="text-lg font-bold text-gray-800 mb-3">Dicas para comprar AirPods no Paraguai</h2>
          <ul className="space-y-2 text-sm text-gray-600">
            <li className="flex gap-2"><span className="text-green-500 font-bold">✓</span> Compre em lojas oficiais Apple ou revendedores autorizados</li>
            <li className="flex gap-2"><span className="text-green-500 font-bold">✓</span> Verifique se a caixa esta lacrada</li>
            <li className="flex gap-2"><span className="text-green-500 font-bold">✓</span> Teste antes de pagar — conecte ao celular</li>
            <li className="flex gap-2"><span className="text-green-500 font-bold">✓</span> Exija nota fiscal</li>
            <li className="flex gap-2"><span className="text-red-400 font-bold">✗</span> Evite AirPods muito baratos — provavelmente falsificados</li>
          </ul>
        </div>
        <div className="bg-blue-50 border border-blue-100 rounded-2xl p-5">
          <p className="font-bold text-blue-800 mb-2">Calcule o preco final dos seus AirPods</p>
          <p className="text-blue-600 text-sm mb-4">Com cambio em tempo real e imposto incluido.</p>
          <Link href="/" className="block bg-green-500 text-white text-center py-3 rounded-xl font-semibold">Abrir Calculadora →</Link>
        </div>
        <div className="bg-white rounded-2xl p-5 shadow-sm">
          <h2 className="font-bold text-gray-800 mb-3">Leia tambem</h2>
          <div className="space-y-2">
            {[
              { href: '/eletronicos-paraguai', label: 'Eletronicos no Paraguai' },
              { href: '/imposto-iphone-paraguai', label: 'Imposto iPhone Paraguai' },
              { href: '/cota-paraguai-via-terrestre', label: 'Cota via terrestre 2026' },
              { href: '/melhor-forma-pagamento-paraguai', label: 'Melhor forma de pagamento' },
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
