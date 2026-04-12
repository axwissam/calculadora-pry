import Link from 'next/link'
import BannerNomad from '../components/BannerNomad'

export const metadata = {
  title: 'AirPods no Paraguai 2026 - Preços e Vale a Pena? | Calculadora Paraguai',
  description: 'Comprar AirPods no Paraguai em 2026 vale a pena? Veja preços do AirPods 4, Pro 2, Max com imposto calculado. Economia de até 40% vs Brasil.',
  keywords: 'airpods paraguai 2026, airpods pro paraguai, airpods max paraguai, preco airpods paraguai, apple paraguai',
}

const modelos = [
  { modelo: 'AirPods 4', preco: 'US$ 129', cota: true, imposto: 'R$ 0', economia: '~35%' },
  { modelo: 'AirPods 4 ANC', preco: 'US$ 179', cota: true, imposto: 'R$ 0', economia: '~35%' },
  { modelo: 'AirPods Pro 2', preco: 'US$ 249', cota: true, imposto: 'R$ 0', economia: '~38%' },
  { modelo: 'AirPods Max (USB-C)', preco: 'US$ 549', cota: false, imposto: '~US$ 25', economia: '~30%' },
]

export default function AirpodsParaguai() {
  return (
    <main className="min-h-screen bg-gray-50 pb-16">
      <div className="bg-gradient-to-r from-green-600 to-green-500 px-5 pt-12 pb-8 text-white">
        <Link href="/" className="text-green-100 text-sm mb-4 block">← Calculadora</Link>
        <h1 className="text-2xl font-bold">AirPods no Paraguai em 2026</h1>
        <p className="text-green-100 mt-2 text-sm">Preços, impostos e qual modelo comprar.</p>
      </div>

      <div className="px-4 py-6 max-w-2xl mx-auto space-y-5">

        <div className="bg-green-50 border border-green-200 rounded-2xl p-5">
          <p className="font-bold text-green-800">✅ AirPods é um dos melhores produtos para comprar no Paraguai</p>
          <p className="text-green-700 text-sm mt-2">Os AirPods custam até <strong>40% menos</strong> que no Brasil e todos os modelos (exceto o Max) cabem dentro da cota de US$ 500 — sem pagar nenhum imposto de importação.</p>
        </div>

        <div className="bg-white rounded-2xl p-5 shadow-sm">
          <h2 className="text-lg font-bold text-gray-800 mb-3">🎧 Preços AirPods no Paraguai 2026</h2>
          <div className="space-y-2">
            {modelos.map(({ modelo, preco, cota, imposto, economia }) => (
              <div key={modelo} className="flex justify-between items-center py-2 border-b border-gray-100 last:border-0">
                <div>
                  <p className="font-medium text-gray-800 text-sm">{modelo}</p>
                  <p className="text-gray-400 text-xs">{preco} · Imposto: {imposto}</p>
                </div>
                <span className={`text-xs font-bold px-2 py-0.5 rounded-full ${cota ? 'bg-green-100 text-green-700' : 'bg-yellow-100 text-yellow-700'}`}>
                  {cota ? `✅ Sem imposto · ${economia}` : `Economia: ${economia}`}
                </span>
              </div>
            ))}
          </div>
          <p className="text-xs text-gray-400 mt-3">* Preços aproximados. Use a calculadora para o valor exato com câmbio do dia.</p>
        </div>

        <div className="bg-white rounded-2xl p-5 shadow-sm">
          <h2 className="text-lg font-bold text-gray-800 mb-3">🥇 Qual AirPods comprar no Paraguai?</h2>
          <div className="space-y-3">
            <div className="bg-green-50 rounded-xl p-4">
              <p className="font-bold text-green-800">Melhor escolha: AirPods Pro 2</p>
              <p className="text-green-700 text-sm mt-1">US$ 249 — cancelamento de ruído ativo, áudio espacial, chip H2. Entra dentro da cota sem pagar imposto. No Brasil custa R$ 2.199 — no Paraguai sai ~R$ 1.310. <strong>Economia de ~R$ 890!</strong></p>
            </div>
            <div className="bg-blue-50 rounded-xl p-4">
              <p className="font-bold text-blue-800">Melhor custo-benefício: AirPods 4</p>
              <p className="text-blue-700 text-sm mt-1">US$ 129 — modelo básico com ótima qualidade de som. No Brasil custa R$ 1.199 — no Paraguai sai ~R$ 680. <strong>Economia de ~R$ 519!</strong></p>
            </div>
            <div className="bg-purple-50 rounded-xl p-4">
              <p className="font-bold text-purple-800">Premium: AirPods Max</p>
              <p className="text-purple-700 text-sm mt-1">US$ 549 — ultrapassa a cota em US$ 49, pagando ~US$ 25 de imposto. Mesmo assim sai bem mais barato que no Brasil (R$ 5.499).</p>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-2xl p-5 shadow-sm">
          <h2 className="text-lg font-bold text-gray-800 mb-3">📦 Posso trazer mais de um AirPods?</h2>
          <p className="text-gray-600 text-sm mb-3">Sim, desde que fique dentro da cota de US$ 500 por pessoa. Exemplos:</p>
          <div className="space-y-2 text-sm">
            <div className="bg-green-50 rounded-xl p-3">
              <p className="text-green-700">2x AirPods 4 (US$ 129 cada) = <strong>US$ 258</strong> — dentro da cota ✅</p>
            </div>
            <div className="bg-green-50 rounded-xl p-3">
              <p className="text-green-700">AirPods Pro 2 (US$ 249) + AirPods 4 (US$ 129) = <strong>US$ 378</strong> — dentro da cota ✅</p>
            </div>
            <div className="bg-yellow-50 rounded-xl p-3">
              <p className="text-yellow-700">AirPods Pro 2 (US$ 249) + AirPods Max (US$ 549) = <strong>US$ 798</strong> — paga imposto sobre US$ 298 ⚠️</p>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-2xl p-5 shadow-sm">
          <h2 className="text-lg font-bold text-gray-800 mb-3">✅ Dicas para comprar AirPods no Paraguai</h2>
          <div className="space-y-2 text-sm text-gray-600">
            <div className="flex gap-2"><span>1️⃣</span><p><strong>Verifique o número de série</strong> em checkcoverage.apple.com — confirma autenticidade e garantia.</p></div>
            <div className="flex gap-2"><span>2️⃣</span><p><strong>Compre em lojas Apple reseller</strong> — Shopping China e Mobile Zone têm produtos originais.</p></div>
            <div className="flex gap-2"><span>3️⃣</span><p><strong>Verifique se a caixa está lacrada</strong> — AirPods originais sempre vêm com lacre intacto.</p></div>
            <div className="flex gap-2"><span>4️⃣</span><p><strong>Exija nota fiscal</strong> — necessária para declarar na Receita Federal.</p></div>
            <div className="flex gap-2"><span>5️⃣</span><p><strong>Combine com outros produtos</strong> — se comprar iPhone + AirPods, distribua pela família para não estourar a cota.</p></div>
          </div>
        </div>

        <div className="bg-white rounded-2xl p-5 shadow-sm">
          <h2 className="text-lg font-bold text-gray-800 mb-3">💰 Comparação de preços Brasil vs Paraguai</h2>
          <div className="space-y-2 text-sm">
            {[
              { modelo: 'AirPods 4', brasil: 'R$ 1.199', paraguai: '~R$ 680', economia: '~R$ 519' },
              { modelo: 'AirPods Pro 2', brasil: 'R$ 2.199', paraguai: '~R$ 1.310', economia: '~R$ 889' },
              { modelo: 'AirPods Max', brasil: 'R$ 5.499', paraguai: '~R$ 3.100', economia: '~R$ 2.400' },
            ].map(({ modelo, brasil, paraguai, economia }) => (
              <div key={modelo} className="bg-gray-50 rounded-xl p-3">
                <p className="font-bold text-gray-800 text-sm">{modelo}</p>
                <div className="flex justify-between text-xs mt-1">
                  <span className="text-gray-500">Brasil: <strong>{brasil}</strong></span>
                  <span className="text-gray-500">Paraguai: <strong>{paraguai}</strong></span>
                  <span className="text-green-700 font-bold">{economia}</span>
                </div>
              </div>
            ))}
          </div>
          <p className="text-gray-400 text-xs mt-2">* Valores aproximados com câmbio de R$ 5,25.</p>
        </div>

        <div className="bg-green-50 border border-green-100 rounded-2xl p-5">
          <p className="font-bold text-green-800 mb-1">🧮 Calcule o preço exato dos seus AirPods</p>
          <p className="text-green-700 text-sm mb-3">Com câmbio real do Banco Central e todos os impostos.</p>
          <Link href="/" className="block bg-green-500 text-white text-center py-3 rounded-xl font-semibold">Abrir Calculadora →</Link>
        </div>

        <BannerNomad />
      </div>
    </main>
  )
}
