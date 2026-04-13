import Link from 'next/link'
import BannerNomad from '../components/BannerNomad'

export const metadata = {
  title: 'Como Declarar Compras do Paraguai na Receita 2026 | Calculadora Paraguai',
  description: 'Passo a passo para declarar compras do Paraguai na Receita Federal em 2026. O que declarar, quando pagar imposto e como evitar problemas na fronteira.',
  keywords: 'como declarar compras paraguai, declarar receita federal paraguai, imposto paraguai declaracao, e-DBV paraguai',
}

export default function ComoDeclarar() {
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
        "name": "Como declarar compras do Paraguai na Receita Federal?",
        "acceptedAnswer": {
            "@type": "Answer",
            "text": "Use o app Viajantes da Receita Federal antes de cruzar a fronteira, declare os produtos e pague o DARF gerado. Ou declare diretamente no posto da Receita na fronteira."
        }
    },
    {
        "@type": "Question",
        "name": "O que é o e-DBV?",
        "acceptedAnswer": {
            "@type": "Answer",
            "text": "É a Declaração de Bens de Viajante da Receita Federal. Pelo app Viajantes você informa os produtos comprados, o sistema calcula o imposto e gera um DARF para pagamento."
        }
    },
    {
        "@type": "Question",
        "name": "O que acontece se não declarar compras do Paraguai?",
        "acceptedAnswer": {
            "@type": "Answer",
            "text": "Não declarar produtos acima da cota é descaminho — crime previsto no Código Penal. A multa pode chegar a 50% do valor dos bens retidos."
        }
    }
]
  }) }}
/>
      <main className="min-h-screen bg-gray-50 pb-16">
      <div className="bg-gradient-to-r from-blue-600 to-blue-500 px-5 pt-12 pb-8 text-white">
        <Link href="/" className="text-blue-100 text-sm mb-4 block">← Calculadora</Link>
        <h1 className="text-2xl font-bold">Como Declarar Compras do Paraguai</h1>
        <p className="text-blue-100 mt-2 text-sm">Passo a passo para declarar na Receita e pagar o imposto certo.</p>
      </div>

      <div className="px-4 py-6 max-w-2xl mx-auto space-y-4">

        <div className="bg-white rounded-2xl p-5 shadow-sm space-y-3 text-sm text-gray-600">
          <h2 className="font-bold text-gray-800 text-base">Preciso declarar tudo que comprei?</h2>
          <p>
            Se o valor total das suas compras ficar dentro da cota de <strong>US$ 500 por pessoa via terrestre</strong>, voce nao precisa pagar imposto, mas pode ser questionado pela Receita Federal na fronteira. Por isso, e importante ter as notas fiscais organizadas para apresentar se necessario.
          </p>
          <p>
            Se voce ultrapassou a cota, o correto e declarar o valor excedente e pagar o imposto de 50% sobre ele. Isso pode ser feito diretamente no posto da Receita na fronteira ou pelo aplicativo e-DBV antes de chegar ao Brasil.
          </p>
          <h2 className="font-bold text-gray-800 text-base">O que e o e-DBV?</h2>
          <p>
            O <strong>e-DBV (Declaracao de Bens de Viajante)</strong> e o sistema da Receita Federal para declarar bens trazidos do exterior. Voce pode acessar pelo app Viajantes da Receita Federal ou pelo site da Receita antes de chegar a fronteira.
          </p>
          <p>
            Ao declarar pelo e-DBV, voce informa os produtos comprados e seus valores. O sistema calcula automaticamente o imposto devido sobre o excedente da cota e gera um DARF para pagamento. Apos o pagamento, voce tem um comprovante para apresentar na fronteira.
          </p>
        </div>

        <div className="bg-white rounded-2xl p-5 shadow-sm">
          <h2 className="text-lg font-bold text-gray-800 mb-3">📋 Passo a passo para declarar</h2>
          <div className="space-y-3">
            {[
              { passo: '1', titulo: 'Guarde todas as notas fiscais', desc: 'De cada loja, exija nota fiscal com o valor em dolares ou guaranis.' },
              { passo: '2', titulo: 'Some o valor total das compras', desc: 'Converta tudo para dolares usando a cotacao do dia da compra.' },
              { passo: '3', titulo: 'Verifique se passou da cota', desc: 'Se o total por pessoa for maior que US$ 500, ha imposto a pagar.' },
              { passo: '4', titulo: 'Acesse o app Viajantes', desc: 'Baixe o app da Receita Federal e faca a declaracao antes de cruzar a fronteira.' },
              { passo: '5', titulo: 'Pague o DARF gerado', desc: 'O imposto e 50% do valor excedente. Pague pelo app do banco antes de chegar ao Brasil.' },
              { passo: '6', titulo: 'Apresente o comprovante', desc: 'Na fronteira, mostre o comprovante de pagamento ao agente da Receita.' },
            ].map(({ passo, titulo, desc }) => (
              <div key={passo} className="flex gap-3">
                <span className="w-7 h-7 rounded-full bg-blue-500 text-white text-xs font-bold flex items-center justify-center flex-shrink-0 mt-0.5">{passo}</span>
                <div>
                  <p className="font-semibold text-gray-800 text-sm">{titulo}</p>
                  <p className="text-gray-500 text-xs mt-0.5">{desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white rounded-2xl p-5 shadow-sm space-y-3 text-sm text-gray-600">
          <h2 className="font-bold text-gray-800 text-base">O que acontece se nao declarar?</h2>
          <p>
            Passar pela fronteira sem declarar produtos acima da cota e considerado descaminho, que e crime previsto no Codigo Penal brasileiro. A Receita Federal tem equipamentos de raio-X e pode revistar bagagens aleatoriamente ou por suspeita.
          </p>
          <p>
            Se os produtos forem apreendidos, alem de perder as mercadorias, voce pode ser autuado com multa de ate 50% do valor dos bens retidos. Em casos de reincidencia ou volumes muito grandes, pode haver abertura de inquerito policial.
          </p>
          <p>
            A melhor estrategia e sempre declarar e pagar o imposto correto. Na maioria dos casos, mesmo pagando 50% de imposto sobre o excedente, ainda vale a pena financeiramente em comparacao com os precos brasileiros.
          </p>
          <h2 className="font-bold text-gray-800 text-base">E se o agente na fronteira estimar um valor diferente?</h2>
          <p>
            A Receita Federal pode arbitrar o valor de um produto se nao houver nota fiscal ou se o valor declarado parecer muito abaixo do mercado. Nesse caso, o imposto sera calculado sobre o valor arbitrado, que costuma ser maior. Por isso, sempre exija nota fiscal nas lojas do Paraguai.
          </p>
        </div>

        <div className="bg-yellow-50 border border-yellow-200 rounded-2xl p-5">
          <h2 className="font-bold text-yellow-800 mb-2">⚠️ Erros mais comuns na declaracao</h2>
          <ul className="text-yellow-700 text-sm space-y-1.5">
            <li>• Nao guardar nota fiscal — sem ela, a Receita arbitra o valor</li>
            <li>• Somar cotas indevidamente — cada pessoa tem sua propria cota</li>
            <li>• Esquecer produtos pequenos — tudo conta: fones, acessorios, roupas</li>
            <li>• Nao converter corretamente — use a cotacao do dia da compra</li>
            <li>• Achar que crianca nao precisa declarar — precisa sim</li>
          </ul>
        </div>

        <div className="bg-green-50 border border-green-100 rounded-2xl p-5">
          <p className="font-bold text-green-800 mb-3">🧮 Calcule o imposto que vai pagar</p>
          <Link href="/" className="block bg-green-500 text-white text-center py-3 rounded-xl font-semibold">
            Abrir Calculadora →
          </Link>
        </div>

        <BannerNomad />

        
        <div className="bg-gray-50 rounded-2xl p-4">
          <p className="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-3">Leia também</p>
          <div className="space-y-2">
            <Link href="/cota-paraguai-via-terrestre" className="flex items-center gap-3 bg-white rounded-xl px-4 py-3 text-sm text-gray-700 border border-gray-100 hover:border-green-300 transition-colors">
              <span className="text-lg">🌉</span>
              <span>Cota via terrestre 2026</span>
              <span className="ml-auto text-gray-400">→</span>
            </Link>
            <Link href="/quanto-de-imposto-pagar-no-paraguai" className="flex items-center gap-3 bg-white rounded-xl px-4 py-3 text-sm text-gray-700 border border-gray-100 hover:border-green-300 transition-colors">
              <span className="text-lg">💰</span>
              <span>Quanto de imposto pagar?</span>
              <span className="ml-auto text-gray-400">→</span>
            </Link>
            <Link href="/limite-compras-paraguai" className="flex items-center gap-3 bg-white rounded-xl px-4 py-3 text-sm text-gray-700 border border-gray-100 hover:border-green-300 transition-colors">
              <span className="text-lg">🛃</span>
              <span>Limite de compras 2026</span>
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