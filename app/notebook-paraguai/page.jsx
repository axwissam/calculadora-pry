import Link from 'next/link'
import BannerNomad from '../components/BannerNomad'

export const metadata = {
  title: 'Notebook no Paraguai 2026 - Vale a Pena? Precos e Dicas | Calculadora Paraguai',
  description: 'Vale a pena comprar notebook no Paraguai em 2026? Precos de MacBook, Dell e Lenovo, calculo de imposto e o que verificar antes de comprar.',
  keywords: 'notebook paraguai 2026, notebook mais barato paraguai, macbook paraguai, dell paraguai, comprar notebook paraguai',
}

const modelos = [
  { nome: 'MacBook Air M3 13"', preco: 'US$ 1.099', economia: 'Ate R$ 3.000', obs: 'Acima da cota. Paga imposto sobre excedente.' },
  { nome: 'MacBook Pro M4 14"', preco: 'US$ 1.599', economia: 'Ate R$ 4.000', obs: 'Acima da cota. Grande economia mesmo com imposto.' },
  { nome: 'Dell XPS 13', preco: 'US$ 999', economia: 'Ate R$ 2.500', obs: 'Verifique layout do teclado.' },
  { nome: 'Lenovo ThinkPad X1', preco: 'US$ 1.199', economia: 'Ate R$ 3.000', obs: 'Teclado QWERTY. Voltagem bivolt.' },
  { nome: 'HP Spectre x360', preco: 'US$ 1.299', economia: 'Ate R$ 3.200', obs: 'Verifique adaptador de tomada.' },
  { nome: 'Asus ZenBook 14', preco: 'US$ 699', economia: 'Ate R$ 1.800', obs: 'Proximo da cota. Menos imposto.' },
]

export default function NotebookParaguai() {
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
        "name": "Vale a pena comprar notebook no Paraguai?",
        "acceptedAnswer": {
            "@type": "Answer",
            "text": "Sim, a economia pode chegar a 35%. Um MacBook Air M3 que custa R$ 12.000 no Brasil pode sair por R$ 8.500 a R$ 9.000 no Paraguai com imposto incluído."
        }
    },
    {
        "@type": "Question",
        "name": "O teclado do notebook do Paraguai é em português?",
        "acceptedAnswer": {
            "@type": "Answer",
            "text": "Não. A maioria dos notebooks vendidos no Paraguai tem teclado QWERTY em inglês, sem cedilha e sem acentos nas teclas físicas."
        }
    },
    {
        "@type": "Question",
        "name": "Qual o imposto para trazer notebook do Paraguai?",
        "acceptedAnswer": {
            "@type": "Answer",
            "text": "Acima da cota de US$ 500 paga-se 50% sobre o excedente. Um notebook de US$ 999 tem US$ 499 de excedente, gerando US$ 249,50 de imposto."
        }
    }
]
  }) }}
/>
      <main className="min-h-screen bg-gray-50 pb-16">
      <div className="bg-gradient-to-r from-gray-700 to-gray-600 px-5 pt-12 pb-8 text-white">
        <Link href="/" className="text-gray-300 text-sm mb-4 block">← Calculadora</Link>
        <h1 className="text-2xl font-bold">Notebook no Paraguai em 2026</h1>
        <p className="text-gray-300 mt-2 text-sm">Precos, imposto e o que verificar antes de comprar.</p>
      </div>

      <div className="px-4 py-6 max-w-2xl mx-auto space-y-4">

        <div className="bg-white rounded-2xl p-5 shadow-sm space-y-3 text-sm text-gray-600">
          <p>
            Notebook e um dos produtos com maior economia no Paraguai. Um MacBook Air que custa R$ 12.000 no Brasil pode sair por equivalente a R$ 8.000 a R$ 9.000 no Paraguai — mesmo pagando o imposto de importacao. Para notebooks intermediarios, a economia percentual costuma ser ainda maior.
          </p>
          <p>
            O ponto critico ao comprar notebook no Paraguai e o <strong>layout do teclado</strong>. A maioria dos modelos vendidos la tem teclado QWERTY em ingles — sem cedilha, sem acentos nas teclas fisicas. Para quem escreve muito em portugues, isso pode ser incomodo no dia a dia.
          </p>
          <h2 className="font-bold text-gray-800 text-base">Quanto de imposto vou pagar?</h2>
          <p>
            Como quase todos os notebooks custam mais de US$ 500, voce vai pagar imposto sobre o excedente. A regra e 50% sobre o valor acima da cota. Por exemplo: um notebook de US$ 999 tem US$ 499 acima da cota — o imposto sera US$ 249,50 convertido pelo cambio do dia.
          </p>
          <p>
            Mesmo assim, a economia em relacao ao Brasil costuma ser de R$ 2.000 a R$ 4.000 dependendo do modelo. Use nossa calculadora para simular o valor exato antes de viajar.
          </p>
        </div>

        <div className="bg-white rounded-2xl p-5 shadow-sm">
          <h2 className="text-lg font-bold text-gray-800 mb-3">💻 Precos medios em 2026</h2>
          <p className="text-xs text-gray-400 mb-3">*Precos variam por loja e cotacao. Use a calculadora para valor exato.</p>
          <div className="space-y-2">
            {modelos.map(({ nome, preco, economia, obs }) => (
              <div key={nome} className="py-2 border-b border-gray-100">
                <div className="flex justify-between items-start">
                  <p className="font-semibold text-gray-800 text-sm">{nome}</p>
                  <span className="text-xs bg-green-100 text-green-700 px-2 py-0.5 rounded-full font-medium">{economia}</span>
                </div>
                <p className="text-gray-500 text-xs mt-0.5">Paraguai: {preco} · {obs}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white rounded-2xl p-5 shadow-sm space-y-3 text-sm text-gray-600">
          <h2 className="font-bold text-gray-800 text-base">Cuidados ao comprar notebook no Paraguai</h2>
          <p>
            Alem do teclado, outros pontos importantes antes de comprar: a <strong>voltagem</strong> (a maioria dos notebooks modernos e bivolt 100-240V, mas confirme), o <strong>adaptador de tomada</strong> (o Brasil usa tipo N, diferente dos EUA) e a <strong>garantia</strong> (sem cobertura no Brasil na maioria dos casos).
          </p>
          <p>
            MacBooks tem garantia internacional e podem ser levados a uma Apple Store ou assistencia autorizada no Brasil, mas o atendimento para produtos comprados fora do pais pode ter restricoes. Para outras marcas, a garantia costuma nao cobrir o Brasil.
          </p>
          <h2 className="font-bold text-gray-800 text-base">MacBook no Paraguai vale a pena?</h2>
          <p>
            Sim, o MacBook e um dos produtos com melhor custo-beneficio para comprar no Paraguai. A Apple tem preco relativamente padronizado globalmente, e a diferenca de tributacao faz com que o MacBook no Paraguai seja significativamente mais barato que no Brasil.
          </p>
          <p>
            Um MacBook Air M3 que custa em media R$ 12.000 no Brasil pode sair por equivalente a R$ 8.500 a R$ 9.000 no Paraguai com imposto incluido — uma economia de ate R$ 3.500. Para o MacBook Pro, a diferenca e ainda maior em termos absolutos.
          </p>
          <h2 className="font-bold text-gray-800 text-base">Onde comprar notebook em Ciudad del Este?</h2>
          <p>
            As melhores lojas para notebooks sao a <strong>Flytec Computers</strong> — especializada em informatica e considerada a mais confiavel para eletronicos — e o <strong>Shopping China</strong>, que tem varios andares de eletronicos. Ambas emitem nota fiscal e tem atendimento em portugues.
          </p>
        </div>

        <div className="bg-yellow-50 border border-yellow-200 rounded-2xl p-5">
          <h2 className="font-bold text-yellow-800 mb-2">⚠️ Checklist antes de comprar</h2>
          <ul className="text-yellow-700 text-sm space-y-1.5">
            <li>• Verifique o layout do teclado — QWERTY ou ABNT2</li>
            <li>• Confirme que a voltagem e bivolt (100-240V)</li>
            <li>• Ligue o notebook e teste na loja</li>
            <li>• Verifique o numero de serie na embalagem e no sistema</li>
            <li>• Exija nota fiscal com descricao do produto</li>
            <li>• Leve um adaptador de tomada — padrao americano e tipo A/B</li>
          </ul>
        </div>

        <div className="bg-green-50 border border-green-100 rounded-2xl p-5">
          <p className="font-bold text-green-800 mb-3">🧮 Calcule o preco final com imposto</p>
          <p className="text-green-600 text-sm mb-4">Cotacao do Banco Central em tempo real.</p>
          <Link href="/" className="block bg-green-500 text-white text-center py-3 rounded-xl font-semibold">
            Abrir Calculadora →
          </Link>
        </div>

        <BannerNomad />

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