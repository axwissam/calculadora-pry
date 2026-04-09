import Link from 'next/link'
import BannerNomad from '../components/BannerNomad'

export const metadata = {
  title: 'Qual o limite de compras no Paraguai em 2026? | Calculadora Paraguai',
  description: 'Descubra o limite de isenção para compras no Paraguai em 2026. Cota de US$ 500 via terrestre, US$ 1.000 aéreo, imposto de 50% sobre excedente e regras completas.',
  keywords: 'limite compras paraguai 2026, cota isencao paraguai, quanto posso trazer paraguai, cota us$ 500 paraguai',
}

export default function LimiteParaguai() {
  return (
    <main className="min-h-screen bg-gray-50 pb-16">
      <div className="bg-gradient-to-r from-green-600 to-green-500 px-5 pt-12 pb-8 text-white">
        <Link href="/" className="text-green-100 text-sm mb-4 block">← Calculadora</Link>
        <h1 className="text-2xl font-bold">Qual o limite de compras no Paraguai em 2026?</h1>
        <p className="text-green-100 mt-2 text-sm">Cota de isenção, regras e como calcular o imposto sobre o excedente.</p>
      </div>

      <div className="px-4 py-6 max-w-2xl mx-auto space-y-6">

        <div className="bg-white rounded-2xl p-5 shadow-sm">
          <h2 className="text-lg font-bold text-gray-800 mb-3">🛃 A cota de isenção em 2026</h2>
          <div className="grid grid-cols-2 gap-3 mb-3">
            <div className="bg-green-50 rounded-xl p-4 text-center">
              <p className="text-2xl font-black text-green-600">US$ 500</p>
              <p className="text-green-700 text-xs mt-1">Via terrestre</p>
              <p className="text-green-600 text-xs">Ponte da Amizade / PJC</p>
            </div>
            <div className="bg-blue-50 rounded-xl p-4 text-center">
              <p className="text-2xl font-black text-blue-600">US$ 1.000</p>
              <p className="text-blue-700 text-xs mt-1">Via aérea</p>
              <p className="text-blue-600 text-xs">Voos internacionais</p>
            </div>
          </div>
          <p className="text-gray-600 text-sm">Cada viajante pode trazer mercadorias dentro desses valores <strong>sem pagar imposto de importação</strong>.</p>
        </div>

        <div className="bg-white rounded-2xl p-5 shadow-sm">
          <h2 className="text-lg font-bold text-gray-800 mb-3">💰 O que acontece se ultrapassar a cota?</h2>
          <p className="text-gray-600 text-sm mb-3">Valores acima da cota são tributados em <strong>50% de imposto de importação</strong> sobre o excedente.</p>
          <div className="space-y-2">
            <div className="bg-gray-50 rounded-xl p-4 font-mono text-sm">
              <p className="font-bold text-gray-700">Exemplo 1: compra de US$ 700</p>
              <p className="mt-1">Excedente = $700 - $500 = <strong>$200</strong></p>
              <p>Imposto = $200 × 50% = <strong>$100</strong></p>
            </div>
            <div className="bg-gray-50 rounded-xl p-4 font-mono text-sm">
              <p className="font-bold text-gray-700">Exemplo 2: compra de US$ 1.200</p>
              <p className="mt-1">Excedente = $1.200 - $500 = <strong>$700</strong></p>
              <p>Imposto = $700 × 50% = <strong>$350</strong></p>
            </div>
          </div>
          <p className="text-gray-500 text-xs mt-2">O imposto é cobrado em reais na aduana, convertido pela cotação do dia.</p>
        </div>

        <div className="bg-white rounded-2xl p-5 shadow-sm">
          <h2 className="text-lg font-bold text-gray-800 mb-3">👨‍👩‍👧‍👦 Posso somar a cota da família?</h2>
          <p className="text-gray-600 text-sm mb-3">Sim! Cada pessoa tem sua cota individual — incluindo crianças de qualquer idade.</p>
          <div className="bg-green-50 rounded-xl p-4">
            <p className="font-bold text-green-800 text-sm">Família de 4 pessoas:</p>
            <p className="text-green-700 text-sm mt-1">4 × US$ 500 = <strong>US$ 2.000 sem imposto</strong></p>
          </div>
          <p className="text-gray-500 text-xs mt-3">⚠️ Mas cada pessoa precisa declarar os seus próprios produtos — não é possível colocar tudo no nome de uma pessoa só.</p>
        </div>

        <div className="bg-white rounded-2xl p-5 shadow-sm">
          <h2 className="text-lg font-bold text-gray-800 mb-3">📋 Limites específicos por produto</h2>
          <div className="space-y-2 text-sm">
            {[
              { produto: 'Bebidas alcoólicas', limite: 'Até 12 litros', obs: 'Independente da cota geral' },
              { produto: 'Cigarros', limite: 'Até 25 maços', obs: 'Independente da cota geral' },
              { produto: 'Eletrônicos', limite: 'Dentro da cota de US$ 500', obs: '1 unidade por tipo para uso pessoal' },
              { produto: 'Perfumes', limite: 'Dentro da cota geral', obs: 'Para uso pessoal' },
              { produto: 'Roupas e calçados', limite: 'Dentro da cota geral', obs: 'Para uso pessoal, não revenda' },
              { produto: 'Medicamentos', limite: 'Uso pessoal comprovado', obs: 'Exige receita médica em alguns casos' },
            ].map(({ produto, limite, obs }) => (
              <div key={produto} className="flex justify-between items-start py-2 border-b border-gray-100 last:border-0">
                <div>
                  <p className="font-medium text-gray-800 text-sm">{produto}</p>
                  <p className="text-gray-400 text-xs">{obs}</p>
                </div>
                <span className="text-green-700 font-semibold text-xs text-right ml-2">{limite}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white rounded-2xl p-5 shadow-sm">
          <h2 className="text-lg font-bold text-gray-800 mb-3">⚠️ Regras importantes</h2>
          <div className="space-y-2 text-sm text-gray-600">
            <div className="flex gap-2"><span>✅</span><p>A cota é <strong>por pessoa</strong> — não acumula entre viagens</p></div>
            <div className="flex gap-2"><span>✅</span><p>Só vale para <strong>uso pessoal</strong> — mercadorias para revenda têm regras diferentes</p></div>
            <div className="flex gap-2"><span>✅</span><p>Você pode viajar quantas vezes quiser — a cota se renova a cada viagem</p></div>
            <div className="flex gap-2"><span>⚠️</span><p>A Receita Federal pode questionar se você viaja com frequência — tenha suas notas fiscais</p></div>
            <div className="flex gap-2"><span>⚠️</span><p>Produtos acima do limite devem ser declarados no app <strong>e-DBV</strong> antes de cruzar a ponte</p></div>
          </div>
        </div>

        <div className="bg-blue-50 border border-blue-100 rounded-2xl p-5">
          <p className="font-bold text-blue-800 mb-2">🧮 Calcule agora</p>
          <p className="text-blue-600 text-sm mb-4">Use nossa calculadora para saber exatamente quanto vai pagar em reais, incluindo todos os impostos.</p>
          <Link href="/" className="block bg-green-500 text-white text-center py-3 rounded-xl font-semibold">Abrir Calculadora →</Link>
        </div>

        <BannerNomad />
      </div>
    </main>
  )
}
