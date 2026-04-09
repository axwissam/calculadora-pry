const fs = require('fs');

// ===== O QUE COMPRAR =====
const oQueComprar = `import Link from 'next/link'
import BannerNomad from '../components/BannerNomad'

export const metadata = {
  title: 'O que vale a pena comprar no Paraguai em 2026? | Calculadora Paraguai',
  description: 'Veja os produtos mais vantajosos para comprar no Paraguai: eletrônicos, perfumes, roupas e mais. Compare preços e calcule a economia real em reais.',
  keywords: 'o que comprar paraguai 2026, eletronicos paraguai, perfume paraguai, vale a pena paraguai, melhores produtos paraguai',
}

const produtos = [
  { emoji: '📱', nome: 'Eletrônicos', desc: 'Celulares, fones, tablets e smartwatches chegam a 40% mais baratos. Atenção ao modelo e garantia.', economia: 'Alta', exemplo: 'iPhone 16 128GB: ~US$ 799 (Brasil: R$ 7.299)' },
  { emoji: '👟', nome: 'Roupas e Calçados', desc: 'Marcas internacionais como Nike, Adidas e New Balance com preço significativamente menor que no Brasil.', economia: 'Alta', exemplo: 'Tênis Nike: ~US$ 80 (Brasil: R$ 600+)' },
  { emoji: '🌸', nome: 'Perfumes e Cosméticos', desc: 'Importados sem os impostos brasileiros. Um dos produtos com maior vantagem — Chanel, Dior, YSL.', economia: 'Muito alta', exemplo: 'Chanel N°5 100ml: ~US$ 120 (Brasil: R$ 900+)' },
  { emoji: '🎮', nome: 'Games e Acessórios', desc: 'Consoles, jogos e periféricos com diferença expressiva de preço. PS5, Xbox e Nintendo Switch.', economia: 'Alta', exemplo: 'PS5: ~US$ 450 (Brasil: R$ 4.500+)' },
  { emoji: '💊', nome: 'Suplementos', desc: 'Whey, creatina e vitaminas de marcas americanas com preços bem mais atrativos que no Brasil.', economia: 'Média', exemplo: 'Whey 5lbs: ~US$ 60 (Brasil: R$ 400+)' },
  { emoji: '🧴', nome: 'Produtos de Beleza', desc: 'Maquiagens, cremes e tratamentos de marcas internacionais como MAC, Maybelline e L\'Oréal.', economia: 'Alta', exemplo: 'Base MAC: ~US$ 35 (Brasil: R$ 250+)' },
  { emoji: '💻', nome: 'Notebooks', desc: 'Dell, Lenovo, ASUS e MacBook com diferença significativa. Ideal para quem está dentro da cota.', economia: 'Alta', exemplo: 'MacBook Air M2: ~US$ 999 (Brasil: R$ 9.999+)' },
  { emoji: '⌚', nome: 'Relógios e Smartwatches', desc: 'Apple Watch, Samsung Galaxy Watch e relógios de marcas suíças com ótimo preço.', economia: 'Alta', exemplo: 'Apple Watch SE: ~US$ 180 (Brasil: R$ 1.800+)' },
]

const naoValeAPena = [
  { nome: 'Natura e O Boticário', motivo: 'Marcas brasileiras — sem vantagem' },
  { nome: 'Alimentos em geral', motivo: 'Frutas e carnes não podem entrar no Brasil' },
  { nome: 'Móveis e eletrodomésticos grandes', motivo: 'Difícil de transportar e declarar' },
  { nome: 'Medicamentos controlados', motivo: 'Exige receita e pode ser apreendido' },
]

export default function OQueComprar() {
  return (
    <main className="min-h-screen bg-gray-50 pb-16">
      <div className="bg-gradient-to-r from-green-600 to-green-500 px-5 pt-12 pb-8 text-white">
        <Link href="/" className="text-green-100 text-sm mb-4 block">← Calculadora</Link>
        <h1 className="text-2xl font-bold">O que vale a pena comprar no Paraguai em 2026?</h1>
        <p className="text-green-100 mt-2 text-sm">Os melhores produtos e onde economizar mais.</p>
      </div>

      <div className="px-4 py-6 max-w-2xl mx-auto space-y-4">

        <div className="bg-white rounded-2xl p-5 shadow-sm">
          <p className="text-gray-600 text-sm">O Paraguai é um dos destinos de compras mais populares da América do Sul. Com <strong>impostos muito menores que o Brasil</strong>, alguns produtos chegam a custar metade do preço — mesmo após pagar o imposto de importação na volta.</p>
        </div>

        <div className="bg-white rounded-2xl p-5 shadow-sm">
          <h2 className="text-lg font-bold text-gray-800 mb-3">✅ O que vale a pena comprar</h2>
          <div className="space-y-3">
            {produtos.map(p => (
              <div key={p.nome} className="flex gap-3 items-start border-b border-gray-50 pb-3 last:border-0 last:pb-0">
                <span className="text-2xl">{p.emoji}</span>
                <div className="flex-1">
                  <div className="flex items-center justify-between">
                    <h3 className="font-bold text-gray-800 text-sm">{p.nome}</h3>
                    <span className={\`text-xs px-2 py-0.5 rounded-full font-medium \${p.economia === 'Muito alta' ? 'bg-green-100 text-green-800' : p.economia === 'Alta' ? 'bg-blue-100 text-blue-800' : 'bg-yellow-100 text-yellow-800'}\`}>
                      {p.economia}
                    </span>
                  </div>
                  <p className="text-gray-500 text-xs mt-0.5">{p.desc}</p>
                  <p className="text-green-600 text-xs mt-1 font-medium">📊 {p.exemplo}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white rounded-2xl p-5 shadow-sm">
          <h2 className="text-lg font-bold text-gray-800 mb-3">❌ O que NÃO vale a pena</h2>
          <div className="space-y-2">
            {naoValeAPena.map(({ nome, motivo }) => (
              <div key={nome} className="flex gap-2 items-start bg-red-50 rounded-xl p-3">
                <span className="text-red-500">✗</span>
                <div>
                  <p className="font-semibold text-gray-800 text-sm">{nome}</p>
                  <p className="text-gray-500 text-xs">{motivo}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white rounded-2xl p-5 shadow-sm">
          <h2 className="text-lg font-bold text-gray-800 mb-3">💡 Como maximizar sua economia</h2>
          <div className="space-y-2 text-sm text-gray-600">
            <div className="flex gap-2"><span>1️⃣</span><p><strong>Distribua as compras pela família</strong> — cada pessoa tem cota de US$ 500, incluindo crianças.</p></div>
            <div className="flex gap-2"><span>2️⃣</span><p><strong>Pague em dinheiro ou Nomad</strong> — evita IOF e spread de cartões comuns.</p></div>
            <div className="flex gap-2"><span>3️⃣</span><p><strong>Priorize produtos com maior imposto no Brasil</strong> — eletrônicos e perfumes têm a maior diferença.</p></div>
            <div className="flex gap-2"><span>4️⃣</span><p><strong>Calcule antes de comprar</strong> — use nossa calculadora para saber o preço final em reais.</p></div>
            <div className="flex gap-2"><span>5️⃣</span><p><strong>Compre em lojas confiáveis</strong> — Shopping China, Flytec, Mobile Zone têm boa reputação.</p></div>
          </div>
        </div>

        <div className="bg-yellow-50 border border-yellow-200 rounded-2xl p-5">
          <h2 className="font-bold text-yellow-800 mb-2">⚠️ Atenção antes de comprar</h2>
          <ul className="text-yellow-700 text-sm space-y-1">
            <li>• Calcule sempre o valor com impostos incluídos</li>
            <li>• Fique dentro da cota de US$ 500 por pessoa ou declare o excedente</li>
            <li>• Prefira pagar em dinheiro ou cartão sem IOF</li>
            <li>• Verifique garantia e compatibilidade de eletrônicos</li>
            <li>• Exija nota fiscal em todas as compras</li>
          </ul>
        </div>

        <Link href="/lojas-paraguai" className="flex items-center gap-3 bg-white rounded-xl px-4 py-3 text-sm text-gray-700 border border-gray-100 hover:border-green-300 transition-colors">
          <span className="text-2xl">🏪</span>
          <div>
            <p className="font-bold text-gray-800 text-sm">Ver melhores lojas do Paraguai</p>
            <p className="text-xs text-gray-500">Shopping China, Flytec, Mobile Zone e mais</p>
          </div>
          <span className="ml-auto text-gray-400">→</span>
        </Link>

        <div className="bg-green-50 border border-green-100 rounded-2xl p-5">
          <p className="font-bold text-green-800 mb-1">🧮 Calcule sua economia agora</p>
          <p className="text-green-700 text-sm mb-3">Veja o preço final com câmbio real e todos os impostos.</p>
          <Link href="/" className="block bg-green-500 text-white text-center py-3 rounded-xl font-semibold">Abrir Calculadora →</Link>
        </div>

        <BannerNomad />
      </div>
    </main>
  )
}
`;

// ===== COMO CALCULAR IMPOSTO =====
const comoCalcular = `import Link from 'next/link'
import BannerNomad from '../components/BannerNomad'

export const metadata = {
  title: 'Como Calcular Imposto Paraguai 2026 - Passo a Passo | Calculadora Paraguai',
  description: 'Aprenda como calcular o imposto de importação nas compras do Paraguai em 2026. Cota de US$ 500, fórmula do cálculo, IOF, spread e simulador online gratuito.',
  keywords: 'como calcular imposto paraguai, calculadora receita federal paraguai, cota paraguai 500 dolares calculadora, formula imposto paraguai',
}

export default function ComoCalcularImposto() {
  return (
    <main className="min-h-screen bg-gray-50 pb-16">
      <div className="bg-gradient-to-r from-green-600 to-green-500 px-5 pt-12 pb-8 text-white">
        <Link href="/" className="text-green-100 text-sm mb-4 block">← Calculadora</Link>
        <h1 className="text-2xl font-bold">Como Calcular Imposto Paraguai 2026</h1>
        <p className="text-green-100 mt-2 text-sm">Passo a passo para saber exatamente quanto você vai pagar.</p>
      </div>
      <div className="px-4 py-6 max-w-2xl mx-auto space-y-5">

        <div className="bg-green-500 rounded-2xl p-5 text-white text-center">
          <p className="font-bold text-lg mb-1">Quer calcular rápido?</p>
          <p className="text-green-100 text-sm mb-3">Use nossa calculadora — resultado em segundos com câmbio do Banco Central.</p>
          <Link href="/" className="block bg-white text-green-600 font-bold py-3 rounded-xl">Calcular agora →</Link>
        </div>

        <div className="bg-white rounded-2xl p-5 shadow-sm">
          <h2 className="text-lg font-bold text-gray-800 mb-3">📐 A fórmula do imposto</h2>
          <div className="bg-gray-50 rounded-xl p-4 font-mono text-sm text-center space-y-1">
            <p className="text-gray-500">Excedente = Total comprado - US$ 500</p>
            <p className="text-gray-500">Imposto USD = Excedente × 50%</p>
            <p className="font-bold text-green-700">Imposto BRL = Imposto USD × Cotação do dia</p>
          </div>
        </div>

        <div className="bg-white rounded-2xl p-5 shadow-sm">
          <h2 className="text-lg font-bold text-gray-800 mb-3">🔢 Passo a passo do cálculo</h2>
          <ol className="space-y-4 text-sm">
            {[
              { passo: 'Some o valor total das suas compras em dólares', ex: 'Ex: celular $699 + fone $149 + perfume $120 = $968' },
              { passo: 'Subtraia a cota de US$ 500', ex: 'Ex: $968 - $500 = $468 de excedente' },
              { passo: 'Aplique 50% sobre o excedente', ex: 'Ex: $468 × 50% = $234 de imposto em dólares' },
              { passo: 'Converta para reais pela cotação do dia', ex: 'Ex: $234 × R$ 5,80 = R$ 1.357 de imposto' },
              { passo: 'Some IOF e spread se pagar com cartão comum', ex: 'Ex: +3,5% IOF + 5% spread sobre o total da compra' },
            ].map(({ passo, ex }, i) => (
              <li key={i} className="flex gap-3">
                <span className="bg-green-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-xs font-bold shrink-0 mt-0.5">{i + 1}</span>
                <div>
                  <p className="font-medium text-gray-800">{passo}</p>
                  <p className="text-gray-400 text-xs mt-0.5">{ex}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>

        <div className="bg-white rounded-2xl p-5 shadow-sm">
          <h2 className="text-lg font-bold text-gray-800 mb-3">📊 Exemplos práticos</h2>
          <div className="space-y-3">
            {[
              { titulo: 'Compra de US$ 300 (dentro da cota)', imposto: 'R$ 0,00', cor: 'green', detalhe: 'Abaixo dos US$ 500 — sem imposto de importação' },
              { titulo: 'Compra de US$ 700', imposto: '~R$ 1.050', cor: 'yellow', detalhe: 'Excedente: $200 × 50% = $100 × cotação R$ 5,25' },
              { titulo: 'Compra de US$ 1.000', imposto: '~R$ 1.575', cor: 'orange', detalhe: 'Excedente: $500 × 50% = $250 × cotação R$ 5,25' },
              { titulo: 'Compra de US$ 1.500', imposto: '~R$ 2.625', cor: 'red', detalhe: 'Excedente: $1.000 × 50% = $500 × cotação R$ 5,25' },
            ].map(({ titulo, imposto, cor, detalhe }) => (
              <div key={titulo} className={\`rounded-xl p-3 \${cor === 'green' ? 'bg-green-50' : cor === 'yellow' ? 'bg-yellow-50' : cor === 'orange' ? 'bg-orange-50' : 'bg-red-50'}\`}>
                <div className="flex justify-between items-center">
                  <p className="font-semibold text-gray-800 text-sm">{titulo}</p>
                  <span className="font-bold text-gray-700">{imposto}</span>
                </div>
                <p className="text-gray-500 text-xs mt-1">{detalhe}</p>
              </div>
            ))}
          </div>
          <p className="text-gray-400 text-xs mt-2">* Cotação simulada em R$ 5,25. Use a calculadora para o valor exato do dia.</p>
        </div>

        <div className="bg-white rounded-2xl p-5 shadow-sm">
          <h2 className="text-lg font-bold text-gray-800 mb-3">💳 E se pagar com cartão?</h2>
          <p className="text-gray-600 text-sm mb-3">Se pagar com cartão de crédito comum, o custo real é ainda maior:</p>
          <div className="space-y-2 text-sm">
            {[
              { item: 'Imposto de importação (50% excedente)', valor: 'Obrigatório para todos' },
              { item: 'IOF (cartão comum)', valor: '+3,5%' },
              { item: 'Spread bancário', valor: '+4% a +7%' },
              { item: 'Cotação turismo vs comercial', valor: '+2% a +5%' },
            ].map(({ item, valor }) => (
              <div key={item} className="flex justify-between items-center py-1.5 border-b border-gray-100 last:border-0">
                <span className="text-gray-600">{item}</span>
                <span className="text-red-500 font-semibold text-xs">{valor}</span>
              </div>
            ))}
          </div>
          <div className="bg-green-50 rounded-xl p-3 mt-3">
            <p className="text-green-800 text-xs font-semibold">💡 Use Nomad ou pague em dinheiro</p>
            <p className="text-green-700 text-xs mt-1">Zero IOF, spread mínimo e cotação comercial — economiza até 15% comparado com cartão comum.</p>
          </div>
        </div>

        <div className="bg-blue-50 border border-blue-100 rounded-2xl p-5">
          <h2 className="font-bold text-blue-800 mb-2">👨‍👩‍👧 Dica: distribua entre a família</h2>
          <p className="text-blue-700 text-sm">Cada pessoa tem direito a US$ 500. Com 4 pessoas, você tem US$ 2.000 de cota total sem pagar imposto.</p>
          <div className="bg-blue-100 rounded-xl p-3 mt-2 text-center">
            <p className="text-blue-800 font-bold">4 pessoas × US$ 500 = US$ 2.000 sem imposto ✅</p>
          </div>
        </div>

        <div className="bg-green-50 border border-green-100 rounded-2xl p-5">
          <p className="font-bold text-green-800 mb-1">🧮 Calculadora de imposto Paraguai online</p>
          <p className="text-green-700 text-sm mb-3">Com câmbio do Banco Central e todos os custos incluídos.</p>
          <Link href="/" className="block bg-green-500 text-white text-center py-3 rounded-xl font-semibold">Abrir Calculadora →</Link>
        </div>

        <BannerNomad />
      </div>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": [
          { "@type": "Question", "name": "Como calcular o imposto do Paraguai?", "acceptedAnswer": { "@type": "Answer", "text": "Subtraia US$ 500 do valor total. O excedente é multiplicado por 50% para obter o imposto. Ex: comprou US$ 800, paga 50% de US$ 300 = US$ 150." } },
          { "@type": "Question", "name": "O imposto do Paraguai é sobre o total ou só o excedente?", "acceptedAnswer": { "@type": "Answer", "text": "Apenas sobre o excedente acima dos US$ 500 de cota." } },
          { "@type": "Question", "name": "Qual é a cota de compras no Paraguai em 2026?", "acceptedAnswer": { "@type": "Answer", "text": "US$ 500 por pessoa via terrestre e US$ 1.000 via aérea." } }
        ]
      }) }} />
    </main>
  )
}
`;

// ===== PERFUME PARAGUAI =====
const perfume = `import Link from 'next/link'
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
                    <span className={\`text-xs px-2 py-0.5 rounded-full font-medium \${m.economia === 'Sem vantagem' ? 'bg-gray-100 text-gray-600' : m.economia === 'Muito barato' ? 'bg-green-100 text-green-800' : 'bg-blue-100 text-blue-800'}\`}>
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
`;

fs.writeFileSync('app/o-que-comprar-paraguai/page.jsx', oQueComprar);
console.log('OK: o-que-comprar-paraguai');

fs.writeFileSync('app/como-calcular-imposto-paraguai/page.jsx', comoCalcular);
console.log('OK: como-calcular-imposto-paraguai');

fs.writeFileSync('app/perfume-paraguai/page.jsx', perfume);
console.log('OK: perfume-paraguai');
