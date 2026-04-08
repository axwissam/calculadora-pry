import Link from 'next/link'
import BannerNomad from '../components/BannerNomad'
export const metadata = {
  title: 'Imposto iPhone Paraguai 2026 - Quanto pagar? | Calculadora Paraguai',
  description: 'Quanto de imposto voce paga para trazer iPhone do Paraguai em 2026? Calcule o preco final com cota, IOF e cambio.',
  keywords: 'imposto iphone paraguai, iphone paraguai 2026, vale a pena iphone paraguai',
}
const modelos = [
  { modelo: 'iPhone 15', preco: 'US$ 699', entra_cota: false, imposto_est: 'US$ 100' },
  { modelo: 'iPhone 15 Plus', preco: 'US$ 799', entra_cota: false, imposto_est: 'US$ 150' },
  { modelo: 'iPhone 15 Pro', preco: 'US$ 999', entra_cota: false, imposto_est: 'US$ 250' },
  { modelo: 'iPhone SE (3a geracao)', preco: 'US$ 429', entra_cota: true, imposto_est: 'R$ 0' },
]
export default function ImpostoIphoneParaguai() {
  return (
    <main className="min-h-screen bg-gray-50 pb-16">
      <div className="bg-gradient-to-r from-green-600 to-green-500 px-5 pt-12 pb-8 text-white">
        <Link href="/" className="text-green-100 text-sm mb-4 block">← Calculadora</Link>
        <h1 className="text-2xl font-bold">Imposto iPhone Paraguai 2026</h1>
        <p className="text-green-100 mt-2 text-sm">Quanto custa trazer iPhone do Paraguai com todos os impostos.</p>
      </div>
      <div className="px-4 py-6 max-w-2xl mx-auto space-y-5">
        <div className="bg-yellow-50 border border-yellow-200 rounded-2xl p-5">
          <p className="font-bold text-yellow-800">A maioria dos iPhones estoura a cota de US$ 500</p>
          <p className="text-yellow-700 text-sm mt-2">Apenas o iPhone SE cabe dentro da cota. Os demais pagam 50% sobre o excedente.</p>
        </div>
        <div className="bg-white rounded-2xl p-5 shadow-sm">
          <h2 className="text-lg font-bold text-gray-800 mb-3">Imposto por modelo em 2026</h2>
          <div className="space-y-2">
            {modelos.map(({ modelo, preco, entra_cota, imposto_est }) => (
              <div key={modelo} className="flex justify-between items-center py-2 border-b border-gray-100 last:border-0">
                <div>
                  <p className="font-medium text-gray-800 text-sm">{modelo}</p>
                  <p className="text-gray-400 text-xs">{preco} no Paraguai</p>
                </div>
                <div className="text-right">
                  <span className={`text-xs font-bold px-2 py-0.5 rounded-full ${entra_cota ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'}`}>
                    {entra_cota ? 'Dentro da cota' : 'Estoura cota'}
                  </span>
                  <p className="text-xs text-gray-500 mt-0.5">Imposto: {imposto_est}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="bg-white rounded-2xl p-5 shadow-sm">
          <h2 className="text-lg font-bold text-gray-800 mb-3">Ainda vale a pena comprar iPhone no Paraguai?</h2>
          <p className="text-gray-600 text-sm">Mesmo pagando imposto, o preco final costuma ser <strong>20% a 30% mais barato</strong> que no Brasil. Prefira o modelo A (americano) — tem garantia mundial.</p>
        </div>
        <div className="bg-green-50 border border-green-100 rounded-2xl p-5">
          <p className="font-bold text-green-800 mb-3">Calcule o preco exato do seu iPhone</p>
          <Link href="/" className="block bg-green-500 text-white text-center py-3 rounded-xl font-semibold">Abrir Calculadora</Link>
        </div>
      
        <BannerNomad />
      </div>
    </main>
  )
}
