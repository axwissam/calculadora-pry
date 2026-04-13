import Link from 'next/link'
import BannerNomad from '../components/BannerNomad'

export const metadata = {
  title: 'Whisky no Paraguai 2026 - Precos e Limite para Trazer | Calculadora Paraguai',
  description: 'Quanto custa whisky no Paraguai em 2026? Limite de 12 litros, melhores marcas e como trazer sem pagar imposto. Guia completo.',
  keywords: 'whisky paraguai 2026, whisky mais barato paraguai, limite whisky paraguai, johnnie walker paraguay, jack daniels paraguai',
}

const marcas = [
  { nome: 'Johnnie Walker Red Label', volume: '1L', preco: 'US$ 18', brasil: 'R$ 120', economia: 'Ate 60%' },
  { nome: 'Johnnie Walker Black Label', volume: '1L', preco: 'US$ 28', brasil: 'R$ 180', economia: 'Ate 55%' },
  { nome: 'Johnnie Walker Blue Label', volume: '750ml', preco: 'US$ 150', brasil: 'R$ 900', economia: 'Ate 45%' },
  { nome: 'Jack Daniels Old No.7', volume: '1L', preco: 'US$ 22', brasil: 'R$ 130', economia: 'Ate 50%' },
  { nome: 'Chivas Regal 12 anos', volume: '1L', preco: 'US$ 25', brasil: 'R$ 160', economia: 'Ate 50%' },
  { nome: 'Glenfiddich 12 anos', volume: '1L', preco: 'US$ 35', brasil: 'R$ 220', economia: 'Ate 45%' },
]

export default function WhiskyParaguai() {
  return (
    <>
<script
  type="application/ld+json"
  dangerouslySetInnerHTML={{ __html: JSON.stringify({
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
    {
        "@type": "Question",
        "name": "Qual o limite de whisky que posso trazer do Paraguai?",
        "acceptedAnswer": {
            "@type": "Answer",
            "text": "Cada pessoa pode trazer até 12 litros de bebidas alcoólicas. Esse limite é independente da cota geral de US$ 500, mas o valor das bebidas conta dentro da cota."
        }
    },
    {
        "@type": "Question",
        "name": "Vale a pena comprar whisky no Paraguai?",
        "acceptedAnswer": {
            "@type": "Answer",
            "text": "Sim, é um dos produtos com maior economia. Um Johnnie Walker Black Label custa US$ 28 no Paraguai contra R$ 180 no Brasil — economia de até 55%."
        }
    },
    {
        "@type": "Question",
        "name": "O whisky do Paraguai é original?",
        "acceptedAnswer": {
            "@type": "Answer",
            "text": "Em lojas estabelecidas como Shopping China sim. Evite comprar de ambulantes com preços muito abaixo do normal, pois podem ser produtos adulterados."
        }
    }
]
  }) }}
/>
      <main className="min-h-screen bg-gray-50 pb-16">
      <div className="bg-gradient-to-r from-amber-700 to-amber-600 px-5 pt-12 pb-8 text-white">
        <Link href="/" className="text-amber-100 text-sm mb-4 block">← Calculadora</Link>
        <h1 className="text-2xl font-bold">Whisky no Paraguai em 2026</h1>
        <p className="text-amber-100 mt-2 text-sm">Precos, limite para trazer e as melhores marcas.</p>
      </div>

      <div className="px-4 py-6 max-w-2xl mx-auto space-y-4">

        <div className="bg-white rounded-2xl p-5 shadow-sm">
          <div className="text-center py-2">
            <p className="text-5xl font-black text-amber-600">12L</p>
            <p className="text-gray-600 text-sm mt-2">Limite de bebidas alcoolicas por pessoa</p>
            <p className="text-gray-400 text-xs mt-1">Independente da cota de US$ 500</p>
          </div>
        </div>

        <div className="bg-white rounded-2xl p-5 shadow-sm space-y-3 text-sm text-gray-600">
          <p>
            Whisky e um dos produtos mais vantajosos para comprar no Paraguai. A economia em relacao ao Brasil pode chegar a <strong>60% dependendo da marca</strong> — isso porque o Brasil tem tributacao altissima sobre bebidas importadas, enquanto o Paraguai praticamente nao taxa.
          </p>
          <p>
            Cada pessoa pode trazer ate <strong>12 litros de bebidas alcoolicas</strong> do Paraguai. Esse limite e independente da cota geral de US$ 500 — ou seja, voce pode trazer 12 litros de whisky e ainda ter os US$ 500 para outros produtos.
          </p>
          <h2 className="font-bold text-gray-800 text-base">O whisky entra na cota de US$ 500?</h2>
          <p>
            Bebidas alcoolicas tem limite proprio de 12 litros mas <strong>tambem entram no valor da cota de US$ 500</strong>. O limite de 12 litros e uma restricao de volume — voce nao pode trazer mais que isso mesmo que queira pagar imposto.
          </p>
          <p>
            Na pratica, 12 litros de whisky de qualidade media custa entre US$ 200 e US$ 350 no Paraguai — ou seja, cabe dentro da cota de US$ 500 com espaco para outros produtos.
          </p>
          <h2 className="font-bold text-gray-800 text-base">Qual whisky comprar no Paraguai?</h2>
          <p>
            O Johnnie Walker e a marca mais comprada pelos brasileiros pela facilidade de encontrar em qualquer loja e pela grande variedade de linhas. Para quem prefere bourbon americano, o Jack Daniels tem otimo preco. Para quem busca single malt escoces, o Glenfiddich e Chivas Regal sao as melhores opcoes.
          </p>
        </div>

        <div className="bg-white rounded-2xl p-5 shadow-sm">
          <h2 className="text-lg font-bold text-gray-800 mb-3">🥃 Precos medios em 2026</h2>
          <p className="text-xs text-gray-400 mb-3">*Precos variam por loja. Economia estimada em relacao ao Brasil.</p>
          <div className="space-y-2">
            {marcas.map(({ nome, volume, preco, brasil, economia }) => (
              <div key={nome} className="py-2 border-b border-gray-100">
                <div className="flex justify-between items-start">
                  <div>
                    <p className="font-semibold text-gray-800 text-sm">{nome}</p>
                    <p className="text-gray-400 text-xs">{volume} · Paraguai: {preco} · Brasil: {brasil}</p>
                  </div>
                  <span className="text-xs bg-amber-100 text-amber-700 px-2 py-0.5 rounded-full font-medium">{economia}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white rounded-2xl p-5 shadow-sm space-y-3 text-sm text-gray-600">
          <h2 className="font-bold text-gray-800 text-base">Como calcular quantas garrafas posso trazer?</h2>
          <p>
            O limite e de 12 litros totais de bebidas alcoolicas, independente da graduacao. Voce pode combinar diferentes bebidas — whisky, vinho, gin, vodka — desde que o total nao ultrapasse 12 litros.
          </p>
          <p>
            Exemplos de combinacoes dentro do limite de 12 litros: 12 garrafas de 1L, ou 16 garrafas de 750ml, ou uma mistura de tamanhos. O importante e que o volume total seja no maximo 12 litros.
          </p>
          <h2 className="font-bold text-gray-800 text-base">Onde comprar whisky em Ciudad del Este?</h2>
          <p>
            Whisky e facil de encontrar em praticamente qualquer loja do Shopping China e nas lojas de duty free da regiao. Para melhores precos, compare entre pelo menos 3 lojas — a variacao de preco para a mesma marca pode ser de 10% a 20% dependendo do estabelecimento.
          </p>
          <p>
            Prefira garrafas lacradas com selo original do fabricante. Desconfie de precos muito abaixo da media — pode ser produto adulterado ou falsificado.
          </p>
        </div>

        <div className="bg-yellow-50 border border-yellow-200 rounded-2xl p-5">
          <h2 className="font-bold text-yellow-800 mb-2">⚠️ Regras para trazer bebidas</h2>
          <ul className="text-yellow-700 text-sm space-y-1.5">
            <li>• Limite: 12 litros por pessoa de bebidas alcoolicas</li>
            <li>• O valor entra na cota geral de US$ 500</li>
            <li>• Acima de 12 litros: confisco ou imposto especial</li>
            <li>• Garrafas devem estar lacradas e com nota fiscal</li>
            <li>• Menores de 18 anos nao podem trazer bebidas alcoolicas</li>
          </ul>
        </div>

        <div className="bg-green-50 border border-green-100 rounded-2xl p-5">
          <p className="font-bold text-green-800 mb-3">🧮 Calcule o custo total das suas compras</p>
          <Link href="/" className="block bg-green-500 text-white text-center py-3 rounded-xl font-semibold">
            Abrir Calculadora →
          </Link>
        </div>

        <BannerNomad />

        
        <div className="bg-gray-50 rounded-2xl p-4">
          <p className="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-3">Leia também</p>
          <div className="space-y-2">
            <Link href="/o-que-comprar-paraguai" className="flex items-center gap-3 bg-white rounded-xl px-4 py-3 text-sm text-gray-700 border border-gray-100 hover:border-green-300 transition-colors">
              <span className="text-lg">🛍️</span>
              <span>O que vale a pena comprar</span>
              <span className="ml-auto text-gray-400">→</span>
            </Link>
            <Link href="/limite-compras-paraguai" className="flex items-center gap-3 bg-white rounded-xl px-4 py-3 text-sm text-gray-700 border border-gray-100 hover:border-green-300 transition-colors">
              <span className="text-lg">🛃</span>
              <span>Limite de compras 2026</span>
              <span className="ml-auto text-gray-400">→</span>
            </Link>
            <Link href="/duty-free-foz-do-iguacu" className="flex items-center gap-3 bg-white rounded-xl px-4 py-3 text-sm text-gray-700 border border-gray-100 hover:border-green-300 transition-colors">
              <span className="text-lg">🛫</span>
              <span>Duty Free Foz do Iguaçu</span>
              <span className="ml-auto text-gray-400">→</span>
            </Link>
          </div>
        </div>
        <Link href="/lojas-paraguai" className="flex items-center gap-3 bg-white rounded-xl px-4 py-3 text-sm text-gray-700 border border-gray-100 hover:border-green-300 transition-colors">
          <span className="text-2xl">🏪</span>
          <div>
            <p className="font-bold text-gray-800 text-sm">Melhores lojas do Paraguai</p>
            <p className="text-xs text-gray-500">Shopping China, Flytec, Mobile Zone e mais</p>
          </div>
          <span className="ml-auto text-green-500 font-bold">→</span>
        </Link>

      </div>
    </main>
    </>
  )
}