import Link from 'next/link'
import BannerNomad from '../components/BannerNomad'
export const metadata = {
  title: 'AirPods no Paraguai 2026 - Precos e vale a pena comprar?',
  description: 'Quanto custam os AirPods no Paraguai? Veja precos do AirPods Pro, AirPods 4 e AirPods Max em Ciudad del Este e calcule o valor em reais com impostos.',
  keywords: 'airpods paraguai, airpods pro paraguai preco, airpods ciudad del este, comprar airpods paraguai 2026',
}
export default function AirpodsParaguai() {
  return (
    <main className="min-h-screen bg-gray-50 pb-16">
      <div className="bg-gradient-to-r from-green-600 to-green-500 px-5 pt-12 pb-8 text-white">
        <Link href="/" className="text-green-100 text-sm mb-4 block">Calculadora</Link>
        <h1 className="text-2xl font-bold">AirPods no Paraguai 2026</h1>
        <p className="text-green-100 mt-2 text-sm">Precos, modelos e quanto voce paga em reais com impostos.</p>
      </div>
      <div className="px-4 py-6 max-w-2xl mx-auto space-y-6">
        <div className="bg-white rounded-2xl p-5 shadow-sm">
          <h2 className="text-lg font-bold text-gray-800 mb-3">Vale a pena comprar AirPods no Paraguai?</h2>
          <p className="text-gray-600 text-sm mb-3">Sim! Os AirPods no Paraguai custam entre 20% e 30% menos que no Brasil. Como o preco e inferior a US$ 500, a maioria dos modelos entra na cota de isencao sem pagar imposto.</p>
          <div className="bg-green-50 border border-green-200 rounded-xl p-4">
            <p className="text-green-800 font-semibold text-sm">Exemplo real:</p>
            <p className="text-green-700 text-sm mt-1">AirPods Pro 2 no Paraguai: ~US$ 200 (aprox. R$ 1.020)</p>
            <p className="text-green-700 text-sm">Mesmo modelo no Brasil: ~R$ 1.799</p>
            <p className="text-green-600 font-bold text-sm mt-1">Economia: ~R$ 780</p>
          </div>
        </div>
        <div className="bg-white rounded-2xl p-5 shadow-sm">
          <h2 className="text-lg font-bold text-gray-800 mb-3">Precos AirPods em Ciudad del Este 2026</h2>
          <div className="space-y-2">
            {[
              { modelo: 'AirPods 4 (entrada)', preco: 'US$ 110 a 130' },
              { modelo: 'AirPods 4 com ANC', preco: 'US$ 150 a 180' },
              { modelo: 'AirPods Pro 2', preco: 'US$ 190 a 220' },
              { modelo: 'AirPods Max (USB-C)', preco: 'US$ 480 a 520' },
            ].map(({ modelo, preco }) => (
              <div key={modelo} className="flex justify-between items-center py-2 border-b border-gray-100 last:border-0">
                <span className="text-sm text-gray-700">{modelo}</span>
                <span className="text-sm font-bold text-green-600">{preco}</span>
              </div>
            ))}
          </div>
          <p className="text-xs text-gray-400 mt-3">* Precos estimados em USD. Use a calculadora para ver o valor exato em reais.</p>
        </div>
        <div className="bg-white rounded-2xl p-5 shadow-sm">
          <h2 className="text-lg font-bold text-gray-800 mb-3">AirPods do Paraguai tem imposto?</h2>
          <p className="text-gray-600 text-sm mb-3">Depende do valor total das suas compras. A cota e de US$ 500 por pessoa. Se comprar so os AirPods Pro 2 (US$ 200), nao paga nada. Mas se comprar junto com outras coisas e ultrapassar US$ 500, paga 50% sobre o excedente.</p>
          <div className="space-y-2 text-sm">
            <div className="bg-green-50 rounded-xl p-3">
              <p className="font-semibold text-green-800">AirPods Pro 2 (US$ 200) sozinho - Sem imposto</p>
              <p className="text-green-700 mt-1">Dentro da cota. So paga a conversao do dolar.</p>
            </div>
            <div className="bg-yellow-50 rounded-xl p-3">
              <p className="font-semibold text-yellow-800">AirPods Max (US$ 500) - Limite exato</p>
              <p className="text-yellow-700 mt-1">Exatamente na cota. Sem imposto se nao tiver outras compras.</p>
            </div>
          </div>
        </div>
        <div className="bg-white rounded-2xl p-5 shadow-sm">
          <h2 className="text-lg font-bold text-gray-800 mb-3">AirPods paraguaio funciona no Brasil?</h2>
          <p className="text-gray-600 text-sm mb-3">Sim, 100%! AirPods nao tem versao regional — o mesmo modelo vendido no Paraguai funciona identico no Brasil. Voce so precisa ter um iPhone, iPad ou Mac para configurar.</p>
          <div className="bg-blue-50 rounded-xl p-3 text-sm text-blue-700">
            Dica: A garantia Apple no Paraguai nao e valida no Brasil. Mas os AirPods raramente dao problema. Guarde a nota fiscal mesmo assim.
          </div>
        </div>
        <div className="bg-white rounded-2xl p-5 shadow-sm">
          <h2 className="text-lg font-bold text-gray-800 mb-3">Onde comprar AirPods em Ciudad del Este?</h2>
          <ul className="space-y-2 text-sm text-gray-600">
            <li className="flex gap-2"><span className="text-green-500 font-bold">+</span><span><strong>Flytec</strong> - revendedor Apple autorizado, produto original garantido</span></li>
            <li className="flex gap-2"><span className="text-green-500 font-bold">+</span><span><strong>Shopping China</strong> - varios vendedores, compare precos</span></li>
            <li className="flex gap-2"><span className="text-green-500 font-bold">+</span><span><strong>iPlace Paraguai</strong> - loja especializada Apple</span></li>
          </ul>
          <div className="mt-3 bg-red-50 rounded-xl p-3 text-sm text-red-700">
            Cuidado com AirPods falsos! Sempre exija caixa lacrada e verifique o numero de serie no site da Apple antes de pagar.
          </div>
        </div>
        <div className="bg-blue-50 border border-blue-100 rounded-2xl p-5">
          <p className="font-bold text-blue-800 mb-2">Calcule quanto vai pagar pelos AirPods</p>
          <p className="text-blue-600 text-sm mb-4">Some os AirPods com suas outras compras e veja se vai pagar imposto.</p>
          <Link href="/" className="block bg-green-500 text-white text-center py-3 rounded-xl font-semibold">Calcular agora</Link>
        </div>
        <div className="bg-white rounded-2xl p-5 shadow-sm">
          <h2 className="font-bold text-gray-800 mb-3">Leia tambem</h2>
          <div className="space-y-2">
            {[
              { href: '/imposto-iphone-paraguai', label: 'iPhone no Paraguai - precos e impostos' },
              { href: '/macbook-paraguai', label: 'MacBook no Paraguai 2026' },
              { href: '/eletronicos-paraguai', label: 'Eletronicos no Paraguai - guia completo' },
              { href: '/limite-compras-paraguai', label: 'Qual o limite de compras no Paraguai?' },
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
