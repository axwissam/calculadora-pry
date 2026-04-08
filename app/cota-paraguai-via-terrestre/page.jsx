import Link from 'next/link'
import BannerNomad from '../components/BannerNomad'

export const metadata = {
  title: 'Cota Paraguai Via Terrestre 2026 - Limite e Regras | Calculadora Paraguai',
  description: 'Qual a cota de compras no Paraguai pela fronteira terrestre em 2026? US$ 500 por pessoa, regras da Receita Federal e como declarar na Ponte da Amizade.',
  keywords: 'cota paraguai via terrestre 2026, imposto ponte da amizade calculadora, limite compras fronteira paraguai',
}

export default function CotaViaTerrestre() {
  return (
    <main className="min-h-screen bg-gray-50 pb-16">
      <div className="bg-gradient-to-r from-green-600 to-green-500 px-5 pt-12 pb-8 text-white">
        <Link href="/" className="text-green-100 text-sm mb-4 block">← Calculadora</Link>
        <h1 className="text-2xl font-bold">Cota Paraguai Via Terrestre 2026</h1>
        <p className="text-green-100 mt-2 text-sm">Regras da Receita Federal para quem passa pela Ponte da Amizade.</p>
      </div>
      <div className="px-4 py-6 max-w-2xl mx-auto space-y-5">
        <div className="bg-white rounded-2xl p-5 shadow-sm">
          <h2 className="text-lg font-bold text-gray-800 mb-3">Cota via terrestre: US$ 500</h2>
          <p className="text-gray-600 text-sm mb-3">A cota de isencao para compras no Paraguai via terrestre em 2026 e de <strong>US$ 500 por pessoa</strong>. E a mesma cota do aeroporto.</p>
          <div className="grid grid-cols-2 gap-3">
            <div className="bg-green-50 rounded-xl p-3 text-center">
              <p className="font-black text-green-600 text-2xl">US$ 500</p>
              <p className="text-green-700 text-xs mt-1">Via terrestre</p>
            </div>
            <div className="bg-blue-50 rounded-xl p-3 text-center">
              <p className="font-black text-blue-600 text-2xl">US$ 1.000</p>
              <p className="text-blue-700 text-xs mt-1">Via aerea</p>
            </div>
          </div>
        </div>
        <div className="bg-white rounded-2xl p-5 shadow-sm">
          <h2 className="text-lg font-bold text-gray-800 mb-3">Como funciona na Ponte da Amizade</h2>
          <ol className="space-y-3 text-sm text-gray-600">
            <li className="flex gap-3">
              <span className="bg-green-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-xs font-bold shrink-0">1</span>
              <span>Voce faz as compras em Ciudad del Este normalmente</span>
            </li>
            <li className="flex gap-3">
              <span className="bg-green-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-xs font-bold shrink-0">2</span>
              <span>Na volta, passa pela Receita Federal na Ponte da Amizade</span>
            </li>
            <li className="flex gap-3">
              <span className="bg-green-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-xs font-bold shrink-0">3</span>
              <span>Se o total for ate US$ 500, passa direto na fila verde</span>
            </li>
            <li className="flex gap-3">
              <span className="bg-green-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-xs font-bold shrink-0">4</span>
              <span>Se ultrapassar, vai para a fila vermelha e declara o excedente</span>
            </li>
            <li className="flex gap-3">
              <span className="bg-green-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-xs font-bold shrink-0">5</span>
              <span>Paga 50% de imposto sobre o valor acima de US$ 500</span>
            </li>
          </ol>
        </div>
        <div className="bg-yellow-50 border border-yellow-200 rounded-2xl p-5">
          <h2 className="font-bold text-yellow-800 mb-2">O que a Receita Federal fiscaliza</h2>
          <ul className="text-yellow-700 text-sm space-y-1.5">
            <li>• Mercadorias em quantidade acima do uso pessoal</li>
            <li>• Produtos sem nota fiscal</li>
            <li>• Eletronicos de alto valor (notebook, iPhone, TV)</li>
            <li>• Tentativa de esconder mercadoria na bagagem</li>
          </ul>
        </div>
        <div className="bg-white rounded-2xl p-5 shadow-sm">
          <h2 className="text-lg font-bold text-gray-800 mb-3">Dicas para passar sem problema</h2>
          <ul className="space-y-2 text-sm text-gray-600">
            <li className="flex gap-2"><span className="text-green-500 font-bold">✓</span> Guarde todas as notas fiscais das compras</li>
            <li className="flex gap-2"><span className="text-green-500 font-bold">✓</span> Calcule o total antes de comprar</li>
            <li className="flex gap-2"><span className="text-green-500 font-bold">✓</span> Se tiver familia, distribua as compras entre os membros</li>
            <li className="flex gap-2"><span className="text-red-400 font-bold">✗</span> Nao tente esconder itens ou retirar embalagens</li>
          </ul>
        </div>
        <div className="bg-green-50 border border-green-100 rounded-2xl p-5">
          <p className="font-bold text-green-800 mb-3">Calcule o imposto da Ponte da Amizade</p>
          <Link href="/" className="block bg-green-500 text-white text-center py-3 rounded-xl font-semibold">
            Abrir Calculadora →
          </Link>
        </div>
        <BannerNomad />
      </div>
<script
  type="application/ld+json"
  dangerouslySetInnerHTML={{ __html: JSON.stringify({
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
  {
    "@type": "Question",
    "name": "Qual é a cota do Paraguai via terrestre em 2026?",
    "acceptedAnswer": {
      "@type": "Answer",
      "text": "US$ 500 por pessoa por viagem via terrestre pela Ponte da Amizade ou Pedro Juan Caballero."
    }
  },
  {
    "@type": "Question",
    "name": "Com que frequência posso ir ao Paraguai?",
    "acceptedAnswer": {
      "@type": "Answer",
      "text": "Não há limite de frequência, mas a cota de US$ 500 se aplica a cada viagem."
    }
  }
]
  }) }}
/>
    </main>
  )
}
