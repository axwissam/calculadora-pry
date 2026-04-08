import Link from 'next/link'
import BannerNomad from '../components/BannerNomad'

export const metadata = {
  title: 'Qual o limite de compras no Paraguai em 2026? | Calculadora Paraguai',
  description:
    'Descubra o limite de isenção para compras no Paraguai em 2026. Entenda a cota de US$ 500, o imposto de 50% sobre o excedente e como calcular o valor final em reais.',
  keywords: 'limite compras paraguai 2026, cota isenção paraguai, quanto posso trazer paraguai',
}

export default function LimiteParaguai() {
  return (
    <main className="min-h-screen bg-gray-50 pb-16">
      <div className="bg-gradient-to-r from-green-600 to-green-500 px-5 pt-12 pb-8 text-white">
        <Link href="/" className="text-green-100 text-sm mb-4 block">← Calculadora</Link>
        <h1 className="text-2xl font-bold">Qual o limite de compras no Paraguai em 2026?</h1>
      </div>

      <div className="px-4 py-6 max-w-2xl mx-auto space-y-6">
        <div className="bg-white rounded-2xl p-5 shadow-sm">
          <h2 className="text-lg font-bold text-gray-800 mb-3">🛃 A cota de isenção</h2>
          <p className="text-gray-600">
            Em 2026, cada viajante pode trazer mercadorias do Paraguai no valor de até <strong>US$ 500 (quinhentos dólares)</strong> por viagem, sem pagar imposto de importação.
          </p>
          <div className="mt-4 bg-green-50 border border-green-200 rounded-xl p-4">
            <p className="text-green-800 font-semibold text-center text-2xl">US$ 500</p>
            <p className="text-green-700 text-center text-sm mt-1">Cota de isenção por viajante</p>
          </div>
        </div>

        <div className="bg-white rounded-2xl p-5 shadow-sm">
          <h2 className="text-lg font-bold text-gray-800 mb-3">💰 O que acontece se ultrapassar?</h2>
          <p className="text-gray-600 mb-3">
            Valores acima de US$ 500 são tributados em <strong>50% de imposto de importação</strong> sobre o excedente.
          </p>
          <div className="bg-gray-50 rounded-xl p-4 font-mono text-sm">
            <p>Exemplo: você comprou US$ 800</p>
            <p className="mt-2">Excedente = $800 - $500 = <strong>$300</strong></p>
            <p>Imposto = $300 × 50% = <strong>$150</strong></p>
            <p className="mt-2 text-gray-500">+ IOF + spread se pagar com cartão</p>
          </div>
        </div>

        <div className="bg-white rounded-2xl p-5 shadow-sm">
          <h2 className="text-lg font-bold text-gray-800 mb-3">📋 Regras importantes</h2>
          <ul className="space-y-2 text-gray-600">
            <li>✅ A cota é <strong>por pessoa</strong> — famílias podem somar cotas</li>
            <li>✅ Crianças também têm direito à cota de US$ 500</li>
            <li>✅ A cota vale para <strong>uso pessoal</strong>, não revenda</li>
            <li>⚠️ Eletrônicos têm regras específicas — verifique item a item</li>
            <li>⚠️ Bebidas alcoólicas: limite de 12 litros</li>
            <li>⚠️ Cigarros: limite de 25 maços</li>
          </ul>
        </div>

        <div className="bg-blue-50 border border-blue-100 rounded-2xl p-5">
          <p className="font-bold text-blue-800 mb-2">🧮 Calcule agora</p>
          <p className="text-blue-600 text-sm mb-4">Use nossa calculadora para saber exatamente quanto você vai pagar em reais, incluindo todos os impostos.</p>
          <Link href="/" className="block bg-green-500 text-white text-center py-3 rounded-xl font-semibold">
            Abrir Calculadora →
          </Link>
        </div>
      
        <BannerNomad />
      </div>
    </main>
  )
}
