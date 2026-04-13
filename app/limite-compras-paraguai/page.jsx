import Link from 'next/link'
import BannerNomad from '../components/BannerNomad'

export const metadata = {
  title: 'Limite de Compras no Paraguai 2026 - Cota e Regras | Calculadora Paraguai',
  description: 'Qual o limite de compras no Paraguai em 2026? Cota de US$ 500 via terrestre, regras de imposto, o que pode e o que nao pode trazer. Tudo explicado.',
  keywords: 'limite compras paraguai 2026, cota paraguai, quanto posso trazer paraguai, cota us 500 paraguai',
}

export default function LimiteComprasParaguai() {
  return (
    <main className="min-h-screen bg-gray-50 pb-16">
      <div className="bg-gradient-to-r from-green-600 to-green-500 px-5 pt-12 pb-8 text-white">
        <Link href="/" className="text-green-100 text-sm mb-4 block">← Calculadora</Link>
        <h1 className="text-2xl font-bold">Limite de Compras no Paraguai 2026</h1>
        <p className="text-green-100 mt-2 text-sm">Cota, regras de imposto e o que pode trazer sem pagar nada.</p>
      </div>

      <div className="px-4 py-6 max-w-2xl mx-auto space-y-4">

        <div className="bg-white rounded-2xl p-5 shadow-sm">
          <div className="text-center py-2">
            <p className="text-5xl font-black text-green-600">US$ 500</p>
            <p className="text-gray-600 text-sm mt-2">Cota de isencao por pessoa via terrestre</p>
            <p className="text-gray-400 text-xs mt-1">Ponte da Amizade / Pedro Juan Caballero</p>
          </div>
        </div>

        <div className="bg-white rounded-2xl p-5 shadow-sm space-y-3 text-sm text-gray-600">
          <h2 className="font-bold text-gray-800 text-base">Como funciona a cota de US$ 500?</h2>
          <p>
            Cada viajante tem direito a trazer produtos comprados no exterior no valor de ate <strong>US$ 500 sem pagar imposto</strong>. Esse limite se aplica a viagens terrestres — pela Ponte da Amizade em Foz do Iguacu ou por Pedro Juan Caballero no Mato Grosso do Sul.
          </p>
          <p>
            Para viagens aereas internacionais, a cota e maior: <strong>US$ 1.000 por pessoa</strong>. A diferenca existe porque o controle nas fronteiras terrestres e mais frequente e os volumes de compra costumam ser maiores.
          </p>
          <p>
            A cota e por pessoa e por viagem. Nao importa quantas vezes voce viajou no mes — cada viagem tem direito a US$ 500. Porem, na pratica, a Receita Federal pode questionar viagens muito frequentes ao mesmo destino com valores sempre proximo ao limite.
          </p>
          <h2 className="font-bold text-gray-800 text-base">Posso somar a cota com minha familia?</h2>
          <p>
            Sim! Cada membro da familia tem sua propria cota de US$ 500, incluindo criancas e bebes. Uma familia de 4 pessoas pode trazer ate <strong>US$ 2.000 em produtos sem pagar nenhum imposto</strong>.
          </p>
          <p>
            Porem, os produtos precisam ser distribuidos entre as pessoas de forma coerente. Nao adianta colocar tudo no nome de uma crianca para driblar o limite — o agente fiscal pode questionar se uma crianca pequena realmente comprou 4 notebooks.
          </p>
        </div>

        <div className="bg-white rounded-2xl p-5 shadow-sm">
          <h2 className="text-lg font-bold text-gray-800 mb-3">📊 Cotas por tipo de viagem</h2>
          <div className="space-y-3">
            {[
              { tipo: 'Via terrestre', cota: 'US$ 500', exemplo: 'Ponte da Amizade, Pedro Juan' },
              { tipo: 'Via aerea', cota: 'US$ 1.000', exemplo: 'Voo internacional' },
              { tipo: 'Por pessoa', cota: 'Individual', exemplo: 'Cada viajante tem sua propria cota' },
              { tipo: 'Criancas', cota: 'US$ 500', exemplo: 'Mesma cota dos adultos' },
            ].map(({ tipo, cota, exemplo }) => (
              <div key={tipo} className="flex justify-between items-start py-2 border-b border-gray-100">
                <div>
                  <p className="font-semibold text-gray-800 text-sm">{tipo}</p>
                  <p className="text-gray-400 text-xs">{exemplo}</p>
                </div>
                <span className="font-bold text-green-700 text-sm">{cota}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white rounded-2xl p-5 shadow-sm space-y-3 text-sm text-gray-600">
          <h2 className="font-bold text-gray-800 text-base">O que acontece se passar da cota?</h2>
          <p>
            Se o valor total das suas compras ultrapassar US$ 500, voce paga <strong>50% de imposto sobre o valor excedente</strong>. Por exemplo: se voce comprou US$ 700, o excedente e US$ 200, e o imposto sera de US$ 100 (50% de US$ 200).
          </p>
          <p>
            Esse imposto e cobrado em reais, convertido pela cotacao do dolar do dia. Portanto, mesmo passando da cota, pode ainda valer a pena dependendo do produto — use nossa calculadora para simular o valor exato.
          </p>
          <h2 className="font-bold text-gray-800 text-base">O que nao pode entrar no Brasil?</h2>
          <p>
            Independente da cota, alguns produtos sao proibidos ou tem restricoes na entrada no Brasil: frutas, carnes e laticinios frescos, medicamentos sem receita medica, armas e municoes. Cigarros tem limite proprio de 25 carteiras e bebidas alcoolicas de 12 litros.
          </p>
          <p>
            Produtos para uso comercial — ou seja, em quantidade que sugere revenda — tambem podem ser retidos mesmo dentro da cota. A Receita avalia se as quantidades sao compativeis com uso pessoal.
          </p>
        </div>

        <div className="bg-yellow-50 border border-yellow-200 rounded-2xl p-5">
          <h2 className="font-bold text-yellow-800 mb-2">⚠️ Dicas para a passagem na fronteira</h2>
          <ul className="text-yellow-700 text-sm space-y-1.5">
            <li>• Tenha todas as notas fiscais organizadas e de facil acesso</li>
            <li>• Declare tudo espontaneamente — nao tente esconder produtos</li>
            <li>• Separe os produtos por pessoa para facilitar a conferencia</li>
            <li>• Produtos novos na embalagem original chamam menos atencao</li>
            <li>• Calcule o valor total antes de sair da loja</li>
          </ul>
        </div>

        <div className="bg-green-50 border border-green-100 rounded-2xl p-5">
          <p className="font-bold text-green-800 mb-3">🧮 Calcule o imposto antes de comprar</p>
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
            <Link href="/como-declarar-paraguai" className="flex items-center gap-3 bg-white rounded-xl px-4 py-3 text-sm text-gray-700 border border-gray-100 hover:border-green-300 transition-colors">
              <span className="text-lg">📋</span>
              <span>Como declarar na Receita</span>
              <span className="ml-auto text-gray-400">→</span>
            </Link>
            <Link href="/o-que-comprar-paraguai" className="flex items-center gap-3 bg-white rounded-xl px-4 py-3 text-sm text-gray-700 border border-gray-100 hover:border-green-300 transition-colors">
              <span className="text-lg">🛍️</span>
              <span>O que vale a pena comprar</span>
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

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({"@context":"https://schema.org","@type":"FAQPage","mainEntity":[{"@type":"Question","name":"Qual é o limite de compras no Paraguai em 2026?","acceptedAnswer":{"@type":"Answer","text":"US$ 500 por pessoa via terrestre e US$ 1.000 via aérea, sem pagar imposto de importação."}},{"@type":"Question","name":"O que acontece se passar do limite de US$ 500?","acceptedAnswer":{"@type":"Answer","text":"Você paga 50% de imposto sobre o valor excedente. Por exemplo: comprou US$ 700, paga 50% de US$ 200 = US$ 100 de imposto."}},{"@type":"Question","name":"Crianças têm direito à cota de US$ 500?","acceptedAnswer":{"@type":"Answer","text":"Sim! Cada pessoa tem direito à cota, incluindo crianças de qualquer idade."}}]}) }} />
    </main>
  )
}
