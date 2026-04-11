const fs = require('fs')

const content = `import Link from 'next/link'
import BannerNomad from '../components/BannerNomad'

export const metadata = {
  title: 'Imposto iPhone Paraguai 2026 - Quanto Pagar e Vale a Pena? | Calculadora Paraguai',
  description: 'Quanto de imposto pagar ao trazer iPhone do Paraguai em 2026? Calcule o preco final com cambio e imposto e veja se vale a pena comparado ao Brasil.',
  keywords: 'imposto iphone paraguai, iphone paraguai 2026, iphone mais barato paraguai, trazer iphone paraguai',
}

const modelos = [
  { modelo: 'iPhone 15', preco: 'US$ 699', brasil: 'R$ 5.999', economia: 'Ate R$ 1.800' },
  { modelo: 'iPhone 15 Plus', preco: 'US$ 799', brasil: 'R$ 6.999', economia: 'Ate R$ 2.000' },
  { modelo: 'iPhone 15 Pro', preco: 'US$ 999', brasil: 'R$ 8.499', economia: 'Ate R$ 2.500' },
  { modelo: 'iPhone 15 Pro Max', preco: 'US$ 1.199', brasil: 'R$ 10.499', economia: 'Ate R$ 3.000' },
  { modelo: 'iPhone 16', preco: 'US$ 799', brasil: 'R$ 6.999', economia: 'Ate R$ 2.000' },
  { modelo: 'iPhone 16 Pro', preco: 'US$ 1.099', brasil: 'R$ 9.499', economia: 'Ate R$ 2.800' },
]

export default function ImpostoIphoneParaguai() {
  return (
    <main className="min-h-screen bg-gray-50 pb-16">
      <div className="bg-gradient-to-r from-gray-800 to-gray-700 px-5 pt-12 pb-8 text-white">
        <Link href="/" className="text-gray-300 text-sm mb-4 block">← Calculadora</Link>
        <h1 className="text-2xl font-bold">Imposto iPhone Paraguai 2026</h1>
        <p className="text-gray-300 mt-2 text-sm">Quanto pagar, como calcular e se ainda vale a pena.</p>
      </div>

      <div className="px-4 py-6 max-w-2xl mx-auto space-y-4">

        <div className="bg-white rounded-2xl p-5 shadow-sm space-y-3 text-sm text-gray-600">
          <p>
            O iPhone e um dos produtos mais buscados no Paraguai por brasileiros. A diferenca de preco pode ser significativa — mas como quase todos os modelos custam mais de US$ 500, e preciso calcular o imposto de importacao antes de decidir se vale a pena.
          </p>
          <p>
            A regra e simples: cada pessoa tem uma cota de <strong>US$ 500 sem imposto</strong>. Acima disso, incide <strong>50% sobre o valor excedente</strong>. Um iPhone 15 que custa US$ 699 no Paraguai, por exemplo, tem US$ 199 acima da cota — o imposto seria US$ 99,50, convertido pela cotacao do dia.
          </p>
          <h2 className="font-bold text-gray-800 text-base">Como calcular o preco final do iPhone</h2>
          <p>
            Some o preco do iPhone em dolares ao imposto (50% do excedente acima de US$ 500) e multiplique pela cotacao do dolar do dia. Nao se esqueca de incluir o IOF se for pagar com cartao de credito comum — mais 3,5% sobre o total.
          </p>
          <p>
            Para evitar o IOF, pague em dinheiro (dolares) ou use um cartao internacional sem IOF como o Nomad. Isso pode economizar mais R$ 150 a R$ 300 dependendo do modelo.
          </p>
        </div>

        <div className="bg-white rounded-2xl p-5 shadow-sm">
          <h2 className="text-lg font-bold text-gray-800 mb-3">📱 Precos medios e economia estimada</h2>
          <p className="text-xs text-gray-400 mb-3">*Precos variam conforme loja e cotacao do dia. Use a calculadora para o valor exato.</p>
          <div className="space-y-2">
            {modelos.map(({ modelo, preco, brasil, economia }) => (
              <div key={modelo} className="flex justify-between items-center py-2 border-b border-gray-100">
                <div>
                  <p className="font-semibold text-gray-800 text-sm">{modelo}</p>
                  <p className="text-gray-400 text-xs">Paraguai: {preco} · Brasil: {brasil}</p>
                </div>
                <span className="text-xs bg-green-100 text-green-700 px-2 py-0.5 rounded-full font-medium">{economia}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white rounded-2xl p-5 shadow-sm space-y-3 text-sm text-gray-600">
          <h2 className="font-bold text-gray-800 text-base">Qual versao do iPhone comprar no Paraguai?</h2>
          <p>
            No Paraguai, os iPhones vendidos sao geralmente a versao <strong>LL/A (americana)</strong>. Essa versao funciona normalmente no Brasil — tem as mesmas bandas de frequencia 4G e 5G, aceita chip nacional e recebe atualizacoes como qualquer outro iPhone.
          </p>
          <p>
            A diferenca principal e a garantia. A Apple nao oferece garantia oficial no Brasil para iPhones comprados fora do pais. Se o aparelho apresentar defeito, voce precisara de assistencia tecnica particular ou enviar para o exterior. A garantia de fabrica e de 1 ano internacional, mas assistencias no Brasil cobram para honrar.
          </p>
          <h2 className="font-bold text-gray-800 text-base">Vale a pena mesmo sem garantia?</h2>
          <p>
            Para muitas pessoas, sim. A economia pode chegar a R$ 2.000 a R$ 3.000 dependendo do modelo — valor que pagaria varios consertos, se necessario. Alem disso, estatisticamente, a maioria dos iPhones nao apresenta defeito no primeiro ano.
          </p>
          <p>
            Se voce prefere seguranca, pode comprar um seguro para o aparelho em seguradoras brasileiras que cobrem iPhones independente da origem da compra. O custo anual costuma ser inferior a R$ 500.
          </p>
        </div>

        <div className="bg-blue-50 border border-blue-100 rounded-2xl p-5">
          <h2 className="font-bold text-blue-800 mb-3">💡 Exemplo de calculo iPhone 15</h2>
          <div className="font-mono text-sm space-y-1 text-blue-900">
            <p>Preco no Paraguai: US$ 699</p>
            <p>Cota de isencao: US$ 500</p>
            <p>Excedente: US$ 199</p>
            <p>Imposto (50%): US$ 99,50</p>
            <p className="border-t border-blue-200 pt-1 font-bold">Total a pagar: US$ 798,50</p>
            <p className="text-blue-600 text-xs mt-1">*Convertido pela cotacao do dia + forma de pagamento escolhida</p>
          </div>
        </div>

        <div className="bg-yellow-50 border border-yellow-200 rounded-2xl p-5">
          <h2 className="font-bold text-yellow-800 mb-2">⚠️ Cuidados ao comprar iPhone no Paraguai</h2>
          <ul className="text-yellow-700 text-sm space-y-1.5">
            <li>• Exija nota fiscal com numero de serie e IMEI</li>
            <li>• Ligue o aparelho na loja e verifique o IMEI nas configuracoes</li>
            <li>• Confirme que e versao LL/A, nao versao chinesa ou japonesa</li>
            <li>• Teste o chip, wi-fi, camera e Face ID antes de sair da loja</li>
            <li>• Nao compre de ambulantes — risco de produto falsificado ou roubado</li>
          </ul>
        </div>

        <div className="bg-green-50 border border-green-100 rounded-2xl p-5">
          <p className="font-bold text-green-800 mb-3">🧮 Calcule o preco exato do seu iPhone</p>
          <p className="text-green-600 text-sm mb-4">Com cotacao do Banco Central, imposto e IOF incluidos.</p>
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
  )
}
`

fs.writeFileSync('app/imposto-iphone-paraguai/page.jsx', content, 'utf8')
console.log('OK - imposto-iphone-paraguai expandido!')
