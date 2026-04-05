import Link from 'next/link'

export const metadata = {
  title: 'Perfume no Paraguai 2026 - Vale a pena? Precos e Marcas | Calculadora Paraguai',
  description: 'Perfumes importados no Paraguai em 2026. Chanel, Dior, Carolina Herrera e mais com preco muito abaixo do Brasil. Veja quanto economiza.',
  keywords: 'perfume paraguai 2026, perfume ciudad del este, chanel paraguai, dior paraguai, perfume importado paraguai',
}

const marcas = [
  { emoji: '🌸', nome: 'Chanel', economia: 'Ate 50% mais barato', desc: 'N°5, Coco Mademoiselle, Bleu de Chanel. Os mais procurados e com maior diferenca de preco.' },
  { emoji: '💎', nome: 'Dior', economia: 'Ate 48% mais barato', desc: 'Sauvage, Miss Dior, J\'adore. Alta demanda nas lojas de Ciudad del Este.' },
  { emoji: '🌺', nome: 'Carolina Herrera', economia: 'Ate 45% mais barato', desc: 'Good Girl, Bad Boy e 212 sao classicos com otimo preco no Paraguai.' },
  { emoji: '✨', nome: 'Versace, Armani, YSL', economia: 'Ate 45% mais barato', desc: 'Marcas europeias em geral tem grande vantagem por nao ter taxacao brasileira.' },
  { emoji: '🍃', nome: 'Natura e O Boticario', economia: 'Sem vantagem', desc: 'Marcas brasileiras nao tem diferenca significativa — compre no Brasil mesmo.' },
]

export default function PerfumeParaguai() {
  return (
    <main className="min-h-screen bg-gray-50 pb-16">
      <div className="bg-gradient-to-r from-green-600 to-green-500 px-5 pt-12 pb-8 text-white">
        <Link href="/" className="text-green-100 text-sm mb-4 block">← Calculadora</Link>
        <h1 className="text-2xl font-bold">Perfume no Paraguai em 2026</h1>
        <p className="text-green-100 mt-2 text-sm">Vale muito a pena — mas so os importados. Veja quais marcas comprar.</p>
      </div>

      <div className="px-4 py-6 max-w-2xl mx-auto space-y-4">
        <div className="bg-green-50 border border-green-200 rounded-2xl p-5">
          <p className="font-bold text-green-800 text-base">✅ Perfume e um dos melhores produtos para comprar no Paraguai</p>
          <p className="text-green-700 text-sm mt-2">Perfumes importados chegam a custar <strong>50% menos</strong> do que no Brasil. Sao leves, cabem facilmente na cota de US$ 500 e a diferenca de preco e enorme.</p>
        </div>

        {marcas.map(m => (
          <div key={m.nome} className="bg-white rounded-2xl p-5 shadow-sm flex gap-4">
            <span className="text-3xl">{m.emoji}</span>
            <div>
              <h2 className="font-bold text-gray-800">{m.nome}</h2>
              <p className="text-gray-500 text-sm mt-1">{m.desc}</p>
              <span className={`mt-2 inline-block text-xs px-2 py-0.5 rounded-full font-medium ${
                m.economia === 'Sem vantagem' ? 'bg-gray-100 text-gray-600' : 'bg-green-100 text-green-800'
              }`}>
                {m.economia}
              </span>
            </div>
          </div>
        ))}

        <div className="bg-white rounded-2xl p-5 shadow-sm">
          <h2 className="text-lg font-bold text-gray-800 mb-3">📦 Quantos perfumes posso trazer?</h2>
          <p className="text-gray-600 text-sm mb-3">Nao ha limite especifico de quantidade — o limite e a cota de <strong>US$ 500 por pessoa</strong>. Um perfume de 100ml custa em media US$ 80–120, entao da pra trazer 3 a 4 dentro da cota.</p>
          <div className="bg-blue-50 rounded-xl p-4 text-sm">
            <p className="font-bold text-blue-800 mb-1">Exemplo pratico</p>
            <p className="text-blue-700">3 perfumes a US$ 100 cada = US$ 300</p>
            <p className="text-blue-700">Ainda sobram US$ 200 de cota para outros produtos ✅</p>
          </div>
        </div>

        <div className="bg-yellow-50 border border-yellow-200 rounded-2xl p-5">
          <h2 className="font-bold text-yellow-800 mb-2">⚠️ Cuidado com falsificados</h2>
          <ul className="text-yellow-700 text-sm space-y-1.5">
            <li>• Compre em lojas estabelecidas — evite ambulantes e camelodromos</li>
            <li>• Preco muito abaixo do normal e sinal de falsificado</li>
            <li>• Exija nota fiscal — protege voce na alfandega</li>
            <li>• Teste o perfume antes de pagar — original tem fixacao de 6h+</li>
          </ul>
        </div>

        <div className="bg-green-50 border border-green-100 rounded-2xl p-5">
          <p className="font-bold text-green-800 mb-3">🧮 Calcule o preco final com cambio e impostos</p>
          <Link href="/" className="block bg-green-500 text-white text-center py-3 rounded-xl font-semibold">
            Abrir Calculadora →
          </Link>
        </div>
      </div>
    </main>
  )
}
