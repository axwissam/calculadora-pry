import Link from 'next/link'
export const metadata = {
  title: 'Quanto de imposto pagar no Paraguai em 2026? | Calculadora Paraguai',
  description: 'Descubra quanto de imposto voce paga nas compras do Paraguai em 2026. Cota de US$ 500, 50% sobre excedente, IOF e spread explicados com exemplos reais.',
  keywords: 'quanto de imposto pagar no paraguai, imposto 50% paraguai calculo, simulador imposto paraguai',
}
export default function QuantoDeImposto() {
  return (
    <main className="min-h-screen bg-gray-50 pb-16">
      <div className="bg-gradient-to-r from-green-600 to-green-500 px-5 pt-12 pb-8 text-white">
        <Link href="/" className="text-green-100 text-sm mb-4 block">← Calculadora</Link>
        <h1 className="text-2xl font-bold">Quanto de imposto pagar no Paraguai em 2026?</h1>
        <p className="text-green-100 mt-2 text-sm">Cota, excedente e todos os impostos com exemplos reais.</p>
      </div>
      <div className="px-4 py-6 max-w-2xl mx-auto space-y-5">
        <div className="bg-white rounded-2xl p-5 shadow-sm">
          <h2 className="text-lg font-bold text-gray-800 mb-3">Regra basica do imposto no Paraguai</h2>
          <p className="text-gray-600 text-sm mb-3">Cada viajante tem direito a trazer <strong>ate US$ 500 sem pagar imposto</strong>. Acima disso, incide <strong>50% sobre o excedente</strong>.</p>
          <div className="bg-green-50 rounded-xl p-4 text-center">
            <p className="text-3xl font-black text-green-600">US$ 500</p>
            <p className="text-green-700 text-sm mt-1">Cota de isencao por pessoa por viagem</p>
          </div>
        </div>
        <div className="bg-white rounded-2xl p-5 shadow-sm">
          <h2 className="text-lg font-bold text-gray-800 mb-3">Como calcular o imposto se passar da cota</h2>
          <div className="bg-gray-50 rounded-xl p-4 font-mono text-sm space-y-1">
            <p className="font-bold text-gray-700">Exemplo: compra de US$ 700</p>
            <p>Excedente = $700 - $500 = <strong>$200</strong></p>
            <p>Imposto = $200 x 50% = <strong>$100</strong></p>
          </div>
          <div className="bg-gray-50 rounded-xl p-4 font-mono text-sm space-y-1 mt-3">
            <p className="font-bold text-gray-700">Exemplo: compra de US$ 1.000</p>
            <p>Excedente = $1.000 - $500 = <strong>$500</strong></p>
            <p>Imposto = $500 x 50% = <strong>$250</strong></p>
          </div>
        </div>
        <div className="bg-white rounded-2xl p-5 shadow-sm">
          <h2 className="text-lg font-bold text-gray-800 mb-3">Posso somar a cota da familia?</h2>
          <p className="text-gray-600 text-sm">Sim! Cada pessoa tem US$ 500 incluindo criancas. Uma familia de 4 pode trazer ate <strong>US$ 2.000 sem imposto</strong>.</p>
        </div>
        <div className="bg-green-50 border border-green-100 rounded-2xl p-5">
          <p className="font-bold text-green-800 mb-3">Use o simulador de imposto paraguai</p>
          <Link href="/" className="block bg-green-500 text-white text-center py-3 rounded-xl font-semibold">Abrir Calculadora</Link>
        </div>
      </div>
    </main>
  )
}
