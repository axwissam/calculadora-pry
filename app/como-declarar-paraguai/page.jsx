import Link from 'next/link'
import BannerNomad from '../components/BannerNomad'

export const metadata = {
  title: 'Como declarar compras no Paraguai em 2026? | Calculadora Paraguai',
  description:
    'Guia completo sobre como declarar compras feitas no Paraguai na Receita Federal. Entenda o que declarar, como pagar o imposto e evitar multas.',
  keywords: 'como declarar compras paraguai, declaração receita federal paraguai, imposto compras paraguai 2026',
}

export default function ComoDeclarar() {
  return (
    <main className="min-h-screen bg-gray-50 pb-16">
      <div className="bg-gradient-to-r from-green-600 to-green-500 px-5 pt-12 pb-8 text-white">
        <Link href="/" className="text-green-100 text-sm mb-4 block">← Calculadora</Link>
        <h1 className="text-2xl font-bold">Como declarar compras no Paraguai em 2026?</h1>
      </div>

      <div className="px-4 py-6 max-w-2xl mx-auto space-y-5">
        <div className="bg-white rounded-2xl p-5 shadow-sm">
          <h2 className="text-lg font-bold text-gray-800 mb-3">📋 Quando precisar declarar?</h2>
          <p className="text-gray-600">
            Você precisa declarar suas compras ao passar pela aduana brasileira quando o valor total ultrapassar a <strong>cota de isenção de US$ 500</strong> por pessoa.
          </p>
          <p className="text-gray-600 mt-3">
            Valores dentro da cota não precisam de declaração — mas guarde suas notas fiscais paraguaias.
          </p>
        </div>

        <div className="bg-white rounded-2xl p-5 shadow-sm">
          <h2 className="text-lg font-bold text-gray-800 mb-3">📱 App e-DBV (Receita Federal)</h2>
          <p className="text-gray-600 mb-3">A Receita Federal disponibiliza o app <strong>e-DBV</strong> para declarar bens de viajantes de forma digital, antes mesmo de chegar à aduana.</p>
          <ol className="space-y-2 text-gray-600">
            <li className="flex gap-2"><span className="bg-green-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm flex-shrink-0">1</span> Baixe o app "e-DBV" na loja do seu celular</li>
            <li className="flex gap-2"><span className="bg-green-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm flex-shrink-0">2</span> Informe seus dados pessoais e de viagem</li>
            <li className="flex gap-2"><span className="bg-green-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm flex-shrink-0">3</span> Liste os produtos comprados com valores em dólares</li>
            <li className="flex gap-2"><span className="bg-green-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm flex-shrink-0">4</span> Pague o imposto calculado pelo app (via PIX ou boleto)</li>
            <li className="flex gap-2"><span className="bg-green-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm flex-shrink-0">5</span> Apresente o comprovante na aduana</li>
          </ol>
        </div>

        <div className="bg-white rounded-2xl p-5 shadow-sm">
          <h2 className="text-lg font-bold text-gray-800 mb-3">⚠️ O que acontece se não declarar?</h2>
          <ul className="space-y-2 text-gray-600">
            <li>❌ Apreensão das mercadorias</li>
            <li>❌ Multa de 50% a 100% sobre o valor dos bens</li>
            <li>❌ Processo administrativo na Receita Federal</li>
          </ul>
          <p className="mt-3 text-sm text-gray-500">
            Não vale o risco — declare corretamente e durma tranquilo.
          </p>
        </div>

        <div className="bg-green-50 border border-green-100 rounded-2xl p-5">
          <p className="font-bold text-green-800 mb-1">🧮 Calcule antes de comprar</p>
          <p className="text-green-700 text-sm mb-3">Saiba exatamente quanto vai pagar de imposto com nossa calculadora antes de ir às compras.</p>
          <Link href="/" className="block bg-green-500 text-white text-center py-3 rounded-xl font-semibold">
            Abrir Calculadora →
          </Link>
        </div>
      
        <BannerNomad />
      </div>
    </main>
  )
}
