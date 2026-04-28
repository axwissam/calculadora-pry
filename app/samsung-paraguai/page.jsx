import Link from 'next/link'
import BannerNomad from '../components/BannerNomad'
export const metadata = {
  title: 'Samsung no Paraguai 2026 - Precos, Galaxy e onde comprar',
  description: 'Quanto custa um Samsung no Paraguai? Veja precos do Galaxy S25, A55, A35 em Ciudad del Este e calcule quanto vai pagar em reais com impostos.',
  keywords: 'samsung paraguai, galaxy s25 paraguai preco, samsung ciudad del este, comprar samsung paraguai 2026',
}
export default function SamsungParaguai() {
  return (
    <main className="min-h-screen bg-gray-50 pb-16">
      <div className="bg-gradient-to-r from-green-600 to-green-500 px-5 pt-12 pb-8 text-white">
        <Link href="/" className="text-green-100 text-sm mb-4 block">Calculadora</Link>
        <h1 className="text-2xl font-bold">Samsung no Paraguai 2026</h1>
        <p className="text-green-100 mt-2 text-sm">Precos do Galaxy em Ciudad del Este e quanto voce paga em reais.</p>
      </div>
      <div className="px-4 py-6 max-w-2xl mx-auto space-y-6">
        <div className="bg-white rounded-2xl p-5 shadow-sm">
          <h2 className="text-lg font-bold text-gray-800 mb-3">Vale a pena comprar Samsung no Paraguai?</h2>
          <p className="text-gray-600 text-sm mb-3">Sim! Os celulares Samsung em Ciudad del Este costumam ser 20% a 35% mais baratos que no Brasil, mesmo considerando o dolar e os impostos da Receita Federal.</p>
          <div className="bg-green-50 border border-green-200 rounded-xl p-4">
            <p className="text-green-800 font-semibold text-sm">Exemplo real:</p>
            <p className="text-green-700 text-sm mt-1">Galaxy A55 5G no Paraguai: ~US$ 320 (aprox. R$ 1.640)</p>
            <p className="text-green-700 text-sm">Mesmo modelo no Brasil: ~R$ 2.199</p>
            <p className="text-green-600 font-bold text-sm mt-1">Economia: ~R$ 559</p>
          </div>
        </div>
        <div className="bg-white rounded-2xl p-5 shadow-sm">
          <h2 className="text-lg font-bold text-gray-800 mb-3">Precos Samsung em Ciudad del Este 2026</h2>
          <div className="space-y-2">
            {[
              { modelo: 'Galaxy A15', preco: 'US$ 120 a 150' },
              { modelo: 'Galaxy A35 5G', preco: 'US$ 230 a 270' },
              { modelo: 'Galaxy A55 5G', preco: 'US$ 300 a 350' },
              { modelo: 'Galaxy S24 FE', preco: 'US$ 450 a 500' },
              { modelo: 'Galaxy S25 128GB', preco: 'US$ 750 a 820' },
              { modelo: 'Galaxy S25+ 256GB', preco: 'US$ 950 a 1050' },
              { modelo: 'Galaxy S25 Ultra', preco: 'US$ 1.150 a 1.300' },
              { modelo: 'Galaxy Z Fold 6', preco: 'US$ 1.400 a 1.600' },
              { modelo: 'Galaxy Z Flip 6', preco: 'US$ 800 a 900' },
            ].map(({ modelo, preco }) => (
              <div key={modelo} className="flex justify-between items-center py-2 border-b border-gray-100 last:border-0">
                <span className="text-sm text-gray-700">{modelo}</span>
                <span className="text-sm font-bold text-green-600">{preco}</span>
              </div>
            ))}
          </div>
          <p className="text-xs text-gray-400 mt-3">* Precos estimados em USD. Use a calculadora para ver o valor exato em reais com impostos.</p>
        </div>
        <div className="bg-white rounded-2xl p-5 shadow-sm">
          <h2 className="text-lg font-bold text-gray-800 mb-3">Quanto vou pagar de imposto no Samsung?</h2>
          <p className="text-gray-600 text-sm mb-3">A cota de isencao e de US$ 500 por pessoa. Se o celular custar menos que isso e for sua unica compra, nao paga imposto. Acima de US$ 500, paga 50% sobre o excedente.</p>
          <div className="space-y-3 text-sm">
            <div className="bg-green-50 rounded-xl p-3">
              <p className="font-semibold text-green-800">Galaxy A55 (US$ 320) - Sem imposto</p>
              <p className="text-green-700 mt-1">Dentro da cota de US$ 500. Voce paga so a conversao do dolar.</p>
            </div>
            <div className="bg-red-50 rounded-xl p-3">
              <p className="font-semibold text-red-800">Galaxy S25 (US$ 800) - Com imposto</p>
              <p className="text-red-700 mt-1">Excedente: US$ 300. Imposto: 50% x US$ 300 = US$ 150 a mais.</p>
            </div>
          </div>
        </div>
        <div className="bg-white rounded-2xl p-5 shadow-sm">
          <h2 className="text-lg font-bold text-gray-800 mb-3">Onde comprar Samsung em Ciudad del Este?</h2>
          <ul className="space-y-2 text-sm text-gray-600">
            <li className="flex gap-2"><span className="text-green-500 font-bold">+</span><span><strong>Flytec</strong> - maior rede de eletronicos do PY, estoque garantido</span></li>
            <li className="flex gap-2"><span className="text-green-500 font-bold">+</span><span><strong>Shopping China</strong> - varios vendedores, bom para comparar precos</span></li>
            <li className="flex gap-2"><span className="text-green-500 font-bold">+</span><span><strong>Mobile Zone</strong> - especializado em smartphones</span></li>
            <li className="flex gap-2"><span className="text-green-500 font-bold">+</span><span><strong>Atacado Connect</strong> - bom para quem compra mais de um aparelho</span></li>
          </ul>
          <div className="mt-3 bg-blue-50 rounded-xl p-3 text-sm text-blue-700">
            Dica: Sempre exija nota fiscal e verifique se o aparelho e desbloqueado para uso no Brasil com chip nacional.
          </div>
        </div>
        <div className="bg-white rounded-2xl p-5 shadow-sm">
          <h2 className="text-lg font-bold text-gray-800 mb-3">Samsung do Paraguai funciona no Brasil?</h2>
          <p className="text-gray-600 text-sm mb-3">A maioria dos modelos vendidos no Paraguai sao versoes globais (SM-GXXXB) que funcionam normalmente no Brasil com qualquer chip. Porem, fique atento a:</p>
          <ul className="space-y-2 text-sm text-gray-600">
            <li className="flex gap-2"><span className="text-yellow-500">!</span><span>Garantia - a garantia paraguaia nao e valida no Brasil. Guarde a nota fiscal.</span></li>
            <li className="flex gap-2"><span className="text-yellow-500">!</span><span>Versao - confirme que e versao global, nao americana (SM-GXXXU) que pode ter restricoes.</span></li>
            <li className="flex gap-2"><span className="text-green-500 font-bold">+</span><span>5G - os modelos com 5G funcionam nas redes brasileiras normalmente.</span></li>
          </ul>
        </div>
        <div className="bg-blue-50 border border-blue-100 rounded-2xl p-5">
          <p className="font-bold text-blue-800 mb-2">Calcule quanto vai pagar pelo Samsung</p>
          <p className="text-blue-600 text-sm mb-4">Nossa calculadora converte o preco em USD para reais com cotacao do Banco Central e calcula o imposto automaticamente.</p>
          <Link href="/" className="block bg-green-500 text-white text-center py-3 rounded-xl font-semibold">Calcular agora</Link>
        </div>
        <div className="bg-white rounded-2xl p-5 shadow-sm">
          <h2 className="font-bold text-gray-800 mb-3">Leia tambem</h2>
          <div className="space-y-2">
            {[
              { href: '/imposto-iphone-paraguai', label: 'Imposto iPhone no Paraguai' },
              { href: '/eletronicos-paraguai', label: 'Eletronicos no Paraguai - guia completo' },
              { href: '/limite-compras-paraguai', label: 'Qual o limite de compras no Paraguai?' },
              { href: '/melhor-forma-pagamento-paraguai', label: 'Melhor forma de pagamento no Paraguai' },
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
