import Link from 'next/link'
import BannerNomad from '../components/BannerNomad'

export const metadata = {
  title: 'Perfume Chanel no Paraguai 2026 - Preços e Vale a Pena? | Calculadora Paraguai',
  description: 'Quanto custa perfume Chanel no Paraguai em 2026? Veja preços do N°5, Coco Mademoiselle, Bleu de Chanel e outros com comparação ao Brasil.',
  keywords: 'perfume chanel paraguai, chanel no5 paraguai preco, coco mademoiselle paraguai, bleu de chanel paraguai, perfume importado paraguai',
}

const perfumes = [
  { nome: 'Chanel N°5 Eau de Parfum 100ml', usd: 145, brasil: 1350, genero: 'Feminino' },
  { nome: 'Coco Mademoiselle EDP 100ml', usd: 155, brasil: 1450, genero: 'Feminino' },
  { nome: 'Chance Eau Tendre EDP 100ml', usd: 138, brasil: 1280, genero: 'Feminino' },
  { nome: 'Bleu de Chanel EDP 100ml', usd: 148, brasil: 1380, genero: 'Masculino' },
  { nome: 'Allure Homme Sport EDT 100ml', usd: 125, brasil: 1150, genero: 'Masculino' },
  { nome: 'Gabrielle Chanel EDP 100ml', usd: 142, brasil: 1320, genero: 'Feminino' },
  { nome: 'N°5 L'Eau EDT 100ml', usd: 132, brasil: 1220, genero: 'Feminino' },
  { nome: 'Chance Eau Fraiche EDT 100ml', usd: 128, brasil: 1180, genero: 'Feminino' },
]

const COTACAO = 5.25

export default function PerfumeChanelParaguai() {
  return (
    <main className="min-h-screen bg-gray-50 pb-16">
      <div className="bg-gradient-to-r from-green-600 to-green-500 px-5 pt-12 pb-8 text-white">
        <Link href="/" className="text-green-100 text-sm mb-4 block">← Calculadora</Link>
        <h1 className="text-2xl font-bold">Perfume Chanel no Paraguai 2026</h1>
        <p className="text-green-100 mt-2 text-sm">Preços reais com comparação ao Brasil e dicas de compra.</p>
      </div>

      <div className="px-4 py-6 max-w-2xl mx-auto space-y-5">

        <div className="bg-green-50 border border-green-200 rounded-2xl p-5">
          <p className="font-bold text-green-800">✅ Chanel no Paraguai custa até 50% menos que no Brasil</p>
          <p className="text-green-700 text-sm mt-2">Os perfumes Chanel são um dos produtos com maior vantagem para quem vai ao Paraguai. Sem a tributação brasileira de importação, os preços ficam muito abaixo do que nas lojas do Brasil. Um Chanel N°5 de 100ml que custa R$ 1.350 no Brasil sai por aproximadamente <strong>R$ 760 no Paraguai</strong> — economia de quase R$ 600 em um único frasco.</p>
        </div>

        <div className="bg-white rounded-2xl p-5 shadow-sm">
          <h2 className="text-lg font-bold text-gray-800 mb-3">🌸 Preços Chanel no Paraguai 2026</h2>
          <div className="space-y-2">
            {perfumes.map(({ nome, usd, brasil, genero }) => {
              const brl = usd * COTACAO
              const eco = brasil - brl
              const pct = Math.round((eco / brasil) * 100)
              return (
                <div key={nome} className="flex justify-between items-start py-2.5 border-b border-gray-100 last:border-0">
                  <div className="flex-1 pr-2">
                    <p className="font-medium text-gray-800 text-sm">{nome}</p>
                    <div className="flex gap-2 mt-0.5">
                      <span className="text-xs text-gray-400">{genero}</span>
                      <span className="text-xs text-green-600 font-semibold">-{pct}% vs Brasil</span>
                    </div>
                  </div>
                  <div className="text-right flex-shrink-0">
                    <p className="font-bold text-green-700 text-sm">US$ {usd}</p>
                    <p className="text-xs text-gray-500">≈ R$ {brl.toLocaleString('pt-BR', { maximumFractionDigits: 0 })}</p>
                    <p className="text-xs text-gray-400 line-through">R$ {brasil.toLocaleString('pt-BR')}</p>
                  </div>
                </div>
              )
            })}
          </div>
          <p className="text-xs text-gray-400 mt-3">* Preços aproximados. Cotação base US$ 1 = R$ {COTACAO}. Todos os perfumes acima cabem dentro da cota de US$ 500.</p>
        </div>

        <div className="bg-white rounded-2xl p-5 shadow-sm">
          <h2 className="text-lg font-bold text-gray-800 mb-3">💰 Quantos Chanels posso trazer?</h2>
          <p className="text-gray-600 text-sm mb-3">Não há limite de quantidade — o limite é a <strong>cota de US$ 500 por pessoa</strong>. Exemplos práticos:</p>
          <div className="space-y-2">
            <div className="bg-green-50 rounded-xl p-3 text-sm">
              <p className="font-bold text-green-800">3 perfumes Chanel (~US$ 140 cada)</p>
              <p className="text-green-700 mt-0.5">3 × US$ 140 = US$ 420 — dentro da cota, <strong>zero imposto</strong> ✅</p>
              <p className="text-green-600 text-xs mt-0.5">Ainda sobram US$ 80 para outro produto</p>
            </div>
            <div className="bg-blue-50 rounded-xl p-3 text-sm">
              <p className="font-bold text-blue-800">Família de 4 pessoas</p>
              <p className="text-blue-700 mt-0.5">4 × US$ 500 = <strong>US$ 2.000 de cota total</strong> — dá para trazer mais de 14 perfumes Chanel!</p>
            </div>
            <div className="bg-yellow-50 rounded-xl p-3 text-sm">
              <p className="font-bold text-yellow-800">4 perfumes (US$ 560 total)</p>
              <p className="text-yellow-700 mt-0.5">Estoura a cota em US$ 60. Imposto = US$ 60 × 50% = <strong>US$ 30</strong> — ainda compensa!</p>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-2xl p-5 shadow-sm">
          <h2 className="text-lg font-bold text-gray-800 mb-3">🏪 Onde comprar Chanel em Ciudad del Este?</h2>
          <p className="text-gray-600 text-sm mb-3">Nem toda loja tem Chanel original. Prefira estas:</p>
          <div className="space-y-2">
            {[
              { loja: 'Star Company', desc: 'Referência absoluta em perfumes importados em CDE. Maior variedade de Chanel com autenticidade garantida.', destaque: true },
              { loja: 'Elegancia Company', desc: 'Excelente seleção de fragrâncias femininas Chanel. Atendimento especializado para brasileiras.', destaque: true },
              { loja: 'Shopping China', desc: 'Diversas lojas de perfumes dentro do shopping. Bom para comparar preços entre vendedores.', destaque: false },
            ].map(({ loja, desc, destaque }) => (
              <div key={loja} className={`flex gap-3 rounded-xl p-3 ${destaque ? 'bg-green-50' : 'bg-gray-50'}`}>
                <span className="text-xl">🏪</span>
                <div>
                  <p className="font-bold text-gray-800 text-sm">{loja} {destaque && '⭐'}</p>
                  <p className="text-gray-500 text-xs mt-0.5">{desc}</p>
                </div>
              </div>
            ))}
          </div>
          <Link href="/lojas-paraguai" className="block mt-3 text-center text-green-600 text-sm font-semibold">Ver guia completo de lojas →</Link>
        </div>

        <div className="bg-white rounded-2xl p-5 shadow-sm">
          <h2 className="text-lg font-bold text-gray-800 mb-3">⚠️ Como identificar Chanel original</h2>
          <p className="text-gray-600 text-sm mb-3">O Paraguai tem falsificados — saiba como identificar o original:</p>
          <div className="space-y-2 text-sm text-gray-600">
            <div className="flex gap-2 bg-gray-50 rounded-xl p-3">
              <span>🔍</span><p><strong>Embalagem:</strong> Caixa com impressão perfeita, fontes simétricas, sem erros ortográficos. O plástico transparente é cristalino, não fosco.</p>
            </div>
            <div className="flex gap-2 bg-gray-50 rounded-xl p-3">
              <span>🧴</span><p><strong>Frasco:</strong> Vidro pesado e espesso. Tampa que encaixa com firmeza. Número de lote gravado no fundo do frasco e na caixa (devem ser iguais).</p>
            </div>
            <div className="flex gap-2 bg-gray-50 rounded-xl p-3">
              <span>👃</span><p><strong>Fixação:</strong> Chanel original tem fixação de 6 a 12 horas. Aplique no pulso e espere 30 minutos — se sumir, é falso.</p>
            </div>
            <div className="flex gap-2 bg-yellow-50 rounded-xl p-3">
              <span>💰</span><p><strong>Preço suspeito:</strong> Chanel a US$ 20 ou US$ 30 é 100% falsificado. O original custa acima de US$ 120.</p>
            </div>
            <div className="flex gap-2 bg-green-50 rounded-xl p-3">
              <span>🧾</span><p><strong>Exija nota fiscal:</strong> Lojas que vendem original sempre emitem nota. Sem nota = risco de falsificado.</p>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-2xl p-5 shadow-sm">
          <h2 className="text-lg font-bold text-gray-800 mb-3">🌟 Outros perfumes importados que valem a pena</h2>
          <p className="text-gray-600 text-sm mb-3">Além de Chanel, essas marcas têm ótimo preço no Paraguai:</p>
          <div className="grid grid-cols-2 gap-2 text-sm">
            {[
              { marca: 'Dior', economia: 'Até 48% off', ex: 'Sauvage, Miss Dior' },
              { marca: 'Carolina Herrera', economia: 'Até 45% off', ex: 'Good Girl, Bad Boy' },
              { marca: 'Versace', economia: 'Até 45% off', ex: 'Eros, Bright Crystal' },
              { marca: 'Lattafa', economia: 'A partir de US$ 15', ex: 'Perfumes árabes' },
            ].map(({ marca, economia, ex }) => (
              <div key={marca} className="bg-gray-50 rounded-xl p-3">
                <p className="font-bold text-gray-800 text-sm">{marca}</p>
                <p className="text-green-600 text-xs font-semibold">{economia}</p>
                <p className="text-gray-400 text-xs">{ex}</p>
              </div>
            ))}
          </div>
          <Link href="/perfume-paraguai" className="block mt-3 text-center text-green-600 text-sm font-semibold">Ver guia completo de perfumes →</Link>
        </div>

        <div className="bg-green-50 border border-green-100 rounded-2xl p-5">
          <p className="font-bold text-green-800 mb-1">🧮 Calcule o preço final com câmbio do dia</p>
          <p className="text-green-700 text-sm mb-3">Veja quanto vai pagar em reais com cotação real do Banco Central.</p>
          <Link href="/" className="block bg-green-500 text-white text-center py-3 rounded-xl font-semibold">Abrir Calculadora →</Link>
        </div>

        <BannerNomad />
      </div>

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": [
          { "@type": "Question", "name": "Quanto custa perfume Chanel no Paraguai?", "acceptedAnswer": { "@type": "Answer", "text": "Os perfumes Chanel de 100ml custam entre US$ 125 e US$ 155 no Paraguai, dependendo do modelo. Com câmbio de R$ 5,25, o Chanel N°5 sai em torno de R$ 760, contra R$ 1.350 no Brasil." } },
          { "@type": "Question", "name": "Chanel no Paraguai é original?", "acceptedAnswer": { "@type": "Answer", "text": "Sim, nas lojas de confiança como Star Company e Elegancia Company. Verifique embalagem, número de lote e preço — Chanel original custa acima de US$ 120. Evite ambulantes." } },
          { "@type": "Question", "name": "Quantos perfumes Chanel posso trazer do Paraguai?", "acceptedAnswer": { "@type": "Answer", "text": "Não há limite de quantidade — o limite é a cota de US$ 500 por pessoa. Com perfumes a ~US$ 140 cada, cabe 3 fragrâncias dentro da cota sem pagar imposto." } }
        ]
      }) }} />
    </main>
  )
}
