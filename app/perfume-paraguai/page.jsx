import Link from 'next/link'
import BannerNomad from '../components/BannerNomad'

export const metadata = {
  title: 'Perfume no Paraguai 2026 - Vale a pena? Preços e Marcas | Calculadora Paraguai',
  description: 'Perfumes importados no Paraguai em 2026. Chanel, Dior, Carolina Herrera e mais com preço muito abaixo do Brasil. Veja quanto economiza e onde comprar.',
  keywords: 'perfume paraguai 2026, perfume ciudad del este, chanel paraguai, dior paraguai, perfume importado paraguai, star company paraguai',
}

const marcas = [
  { emoji: '🌸', nome: 'Chanel', economia: 'Até 50% mais barato', desc: 'N°5, Coco Mademoiselle, Bleu de Chanel. Os mais procurados e com maior diferença de preço.', preco: 'US$ 90–150' },
  { emoji: '💎', nome: 'Dior', economia: 'Até 48% mais barato', desc: "Sauvage, Miss Dior, J'adore. Alta demanda nas lojas de Ciudad del Este.", preco: 'US$ 80–140' },
  { emoji: '🌺', nome: 'Carolina Herrera', economia: 'Até 45% mais barato', desc: 'Good Girl, Bad Boy e 212 são clássicos com ótimo preço no Paraguai.', preco: 'US$ 60–120' },
  { emoji: '✨', nome: 'Versace, Armani, YSL', economia: 'Até 45% mais barato', desc: 'Marcas europeias em geral têm grande vantagem por não ter tributação brasileira.', preco: 'US$ 70–130' },
  { emoji: '🌿', nome: 'Perfumes Árabes (Lattafa, Armaf)', economia: 'Muito barato', desc: 'Excelente qualidade e fixação, preços a partir de US$ 15. Enorme variedade nas lojas.', preco: 'US$ 15–50' },
  { emoji: '🍃', nome: 'Natura e O Boticário', economia: 'Sem vantagem', desc: 'Marcas brasileiras não têm diferença significativa — compre no Brasil mesmo.', preco: 'Similar ao Brasil' },
]

export default function PerfumeParaguai() {
  return (
    <main className="min-h-screen bg-gray-50 pb-16">
      <div className="bg-gradient-to-r from-green-600 to-green-500 px-5 pt-12 pb-8 text-white">
        <Link href="/" className="text-green-100 text-sm mb-4 block">← Calculadora</Link>
        <h1 className="text-2xl font-bold">Perfume no Paraguai em 2026</h1>
        <p className="text-green-100 mt-2 text-sm">Vale muito a pena — mas só os importados. Veja quais marcas comprar.</p>
      </div>

      <div className="px-4 py-6 max-w-2xl mx-auto space-y-4">

        <div className="bg-green-50 border border-green-200 rounded-2xl p-5">
          <p className="font-bold text-green-800 text-base">✅ Perfume é um dos melhores produtos para comprar no Paraguai</p>
          <p className="text-green-700 text-sm mt-2">Perfumes importados chegam a custar <strong>50% menos</strong> do que no Brasil. São leves, cabem facilmente na cota de US$ 500 e a diferença de preço é enorme.</p>
        </div>

        <div className="bg-white rounded-2xl p-5 shadow-sm">
          <h2 className="text-lg font-bold text-gray-800 mb-3">🌸 Melhores marcas para comprar</h2>
          <div className="space-y-3">
            {marcas.map(m => (
              <div key={m.nome} className="flex gap-3 items-start border-b border-gray-50 pb-3 last:border-0 last:pb-0">
                <span className="text-2xl">{m.emoji}</span>
                <div className="flex-1">
                  <div className="flex items-center justify-between">
                    <h3 className="font-bold text-gray-800 text-sm">{m.nome}</h3>
                    <span className={`text-xs px-2 py-0.5 rounded-full font-medium ${m.economia === 'Sem vantagem' ? 'bg-gray-100 text-gray-600' : m.economia === 'Muito barato' ? 'bg-green-100 text-green-800' : 'bg-blue-100 text-blue-800'}`}>
                      {m.economia}
                    </span>
                  </div>
                  <p className="text-gray-500 text-xs mt-0.5">{m.desc}</p>
                  <p className="text-green-600 text-xs mt-1 font-medium">💰 Preço no Paraguai: {m.preco}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white rounded-2xl p-5 shadow-sm">
          <h2 className="text-lg font-bold text-gray-800 mb-3">📦 Quantos perfumes posso trazer?</h2>
          <p className="text-gray-600 text-sm mb-3">Não há limite específico de quantidade — o limite é a cota de <strong>US$ 500 por pessoa</strong>.</p>
          <div className="space-y-2">
            <div className="bg-green-50 rounded-xl p-3 text-sm">
              <p className="font-bold text-green-800">Exemplo com 3 perfumes (US$ 100 cada):</p>
              <p className="text-green-700 mt-1">3 × US$ 100 = US$ 300 — ainda sobram US$ 200 de cota ✅</p>
            </div>
            <div className="bg-blue-50 rounded-xl p-3 text-sm">
              <p className="font-bold text-blue-800">Família de 4 pessoas:</p>
              <p className="text-blue-700 mt-1">4 × US$ 500 = US$ 2.000 de cota — dá para trazer muitos perfumes ✅</p>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-2xl p-5 shadow-sm">
          <h2 className="text-lg font-bold text-gray-800 mb-3">🏪 Onde comprar perfume em Ciudad del Este?</h2>
          <div className="space-y-2">
            {[
              { loja: 'Star Company', desc: 'Referência em perfumes importados. Maior variedade de fragrâncias, incluindo árabes.' },
              { loja: 'Elegancia Company', desc: 'Especializada em cosméticos e perfumes. Ótimo atendimento para brasileiros.' },
              { loja: 'Shopping China', desc: 'Diversas lojas de perfume dentro do shopping. Boa para comparar preços.' },
            ].map(({ loja, desc }) => (
              <div key={loja} className="flex gap-3 items-start bg-gray-50 rounded-xl p-3">
                <span>🏪</span>
                <div>
                  <p className="font-semibold text-gray-800 text-sm">{loja}</p>
                  <p className="text-gray-500 text-xs">{desc}</p>
                </div>
              </div>
            ))}
          </div>
          <Link href="/lojas-paraguai" className="block mt-3 text-center text-green-600 text-sm font-semibold">Ver guia completo de lojas →</Link>
        </div>

        <div className="bg-white rounded-2xl p-5 shadow-sm">
          <h2 className="text-lg font-bold text-gray-800 mb-3">💡 Dicas para comprar perfume no Paraguai</h2>
          <div className="space-y-2 text-sm text-gray-600">
            <div className="flex gap-2"><span>1️⃣</span><p><strong>Teste antes de comprar</strong> — aplique no pulso e espere 10 minutos para sentir a fixação real.</p></div>
            <div className="flex gap-2"><span>2️⃣</span><p><strong>Verifique o lacre e embalagem</strong> — originais têm acabamento impecável e lacre intacto.</p></div>
            <div className="flex gap-2"><span>3️⃣</span><p><strong>Compre em lojas estabelecidas</strong> — evite ambulantes e camelódromos.</p></div>
            <div className="flex gap-2"><span>4️⃣</span><p><strong>Exija nota fiscal</strong> — protege você na alfândega e comprova autenticidade.</p></div>
            <div className="flex gap-2"><span>5️⃣</span><p><strong>Compare preços entre lojas</strong> — a diferença pode ser de 10% a 20% dentro de CDE.</p></div>
          </div>
        </div>

        <div className="bg-yellow-50 border border-yellow-200 rounded-2xl p-5">
          <h2 className="font-bold text-yellow-800 mb-2">⚠️ Cuidado com falsificados</h2>
          <ul className="text-yellow-700 text-sm space-y-1.5">
            <li>• Preço muito abaixo do normal é sinal de falsificado</li>
            <li>• Original tem fixação de 6h+ — falsificado some em 1-2h</li>
            <li>• Verifique o número do lote na embalagem e no frasco</li>
            <li>• Embalagem original tem impressão de alta qualidade sem erros</li>
          </ul>
        </div>

        <div className="bg-green-50 border border-green-100 rounded-2xl p-5">
          <p className="font-bold text-green-800 mb-1">🧮 Calcule o preço final com câmbio e impostos</p>
          <p className="text-green-700 text-sm mb-3">Veja o valor exato em reais com cotação do Banco Central.</p>
          <Link href="/" className="block bg-green-500 text-white text-center py-3 rounded-xl font-semibold">Abrir Calculadora →</Link>
        </div>

        <BannerNomad />
      </div>
    </main>
  )
}
