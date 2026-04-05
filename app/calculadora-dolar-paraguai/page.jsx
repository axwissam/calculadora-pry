import Link from 'next/link'
export const metadata = {
  title: 'Calculadora Dólar Paraguai 2026 — Quanto vale em reais? | Calculadora Paraguai',
  description: 'Converta dólar para real nas compras do Paraguai em 2026. Calcule com câmbio atualizado, impostos, IOF e spread bancário incluídos.',
  keywords: 'calculadora dolar paraguai, converter dolar real paraguai 2026, dolar paraguai hoje, cotacao dolar paraguai',
}
export default function CalculadoraDolarParaguai() {
  return (
    <main className="min-h-screen bg-gray-50 pb-16">
      <div className="bg-gradient-to-r from-green-600 to-green-500 px-5 pt-12 pb-8 text-white">
        <Link href="/" className="text-green-100 text-sm mb-4 block">← Calculadora</Link>
        <h1 className="text-2xl font-bold">Calculadora Dólar Paraguai 2026</h1>
        <p className="text-green-100 mt-2 text-sm">Converta dólar para real com impostos, IOF e câmbio real incluídos.</p>
      </div>
      <div className="px-4 py-6 max-w-2xl mx-auto space-y-6">
        <div className="bg-green-500 rounded-2xl p-5 text-white text-center">
          <p className="font-bold text-xl mb-1">🧮 Use a calculadora agora</p>
          <p className="text-green-100 text-sm mb-4">Cotação atualizada a cada 30 minutos. Resultado em segundos.</p>
          <Link href="/" className="block bg-white text-green-600 font-bold py-3 rounded-xl">Calcular minha compra →</Link>
        </div>
        <div className="bg-white rounded-2xl p-5 shadow-sm">
          <h2 className="text-lg font-bold text-gray-800 mb-3">❌ Por que não basta multiplicar pelo dólar?</h2>
          <p className="text-gray-600 text-sm mb-3">Muita gente multiplica o preço em dólar pela cotação do dia e acha que sabe o valor final. Mas no Paraguai existem custos extras que podem aumentar em <strong>15% a 25%</strong> o valor dependendo de como você paga.</p>
          <div className="space-y-2 text-sm">
            {[
              { custo: 'Cotação dólar turismo', impacto: '+2% a +5%', desc: 'Bancos usam cotação mais cara que a comercial' },
              { custo: 'IOF', impacto: '+3,5%', desc: 'Imposto federal em transações internacionais com cartão' },
              { custo: 'Spread bancário', impacto: '+3% a +7%', desc: 'Margem do banco na conversão de moeda' },
              { custo: 'Taxa da loja no cartão', impacto: '+5% a +10%', desc: 'Cobrada pelas lojas para pagamento em cartão' },
              { custo: 'Imposto de importação', impacto: '+50% sobre excedente', desc: 'Para compras acima de US$ 500 por pessoa' },
            ].map(({ custo, impacto, desc }) => (
              <div key={custo} className="bg-gray-50 rounded-xl p-3">
                <div className="flex justify-between items-center">
                  <p className="font-medium text-gray-700 text-sm">{custo}</p>
                  <span className="text-red-500 font-bold text-xs">{impacto}</span>
                </div>
                <p className="text-gray-400 text-xs mt-0.5">{desc}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="bg-white rounded-2xl p-5 shadow-sm">
          <h2 className="text-lg font-bold text-gray-800 mb-3">💱 Dólar turismo vs dólar comercial</h2>
          <div className="grid grid-cols-2 gap-3 text-sm">
            <div className="bg-blue-50 rounded-xl p-3">
              <p className="font-bold text-blue-800">Dólar Comercial</p>
              <p className="text-blue-600 mt-1 text-xs">Usado por: Nomad, Wise, Pix</p>
              <p className="text-blue-700 font-semibold mt-2">Mais barato ✅</p>
            </div>
            <div className="bg-orange-50 rounded-xl p-3">
              <p className="font-bold text-orange-800">Dólar Turismo</p>
              <p className="text-orange-600 mt-1 text-xs">Usado por: bancos, casas de câmbio</p>
              <p className="text-orange-700 font-semibold mt-2">2% a 5% mais caro ⚠️</p>
            </div>
          </div>
        </div>
        <div className="bg-blue-50 border border-blue-100 rounded-2xl p-5">
          <p className="font-bold text-blue-800 mb-2">🧮 Calcule agora com câmbio real</p>
          <p className="text-blue-600 text-sm mb-4">Cotação atualizada a cada 30 minutos direto do Banco Central.</p>
          <Link href="/" className="block bg-green-500 text-white text-center py-3 rounded-xl font-semibold">Abrir Calculadora →</Link>
        </div>
      </div>
    </main>
  )
}
