const fs = require('fs')

const content = `import Link from 'next/link'
import BannerNomad from '../components/BannerNomad'

export const metadata = {
  title: 'Eletronicos no Paraguai 2026 - Vale a pena? Precos e Dicas | Calculadora Paraguai',
  description: 'Celular, notebook, fone e smartwatch no Paraguai em 2026. Veja quais eletronicos valem a pena, quanto economiza e como calcular o preco final em reais.',
  keywords: 'eletronicos paraguai 2026, celular paraguai, notebook paraguai, iphone paraguai, samsung paraguai',
}

const itens = [
  { emoji: '📱', nome: 'Smartphones', economia: 'Ate 40% mais barato', desc: 'iPhone e Samsung lideram. Verifique o modelo (A, LL, BR) — prefira versao internacional com garantia de fabricante.', destaque: true },
  { emoji: '💻', nome: 'Notebooks', economia: 'Ate 35% mais barato', desc: 'Dell, Lenovo, HP e Apple. Confirme voltagem e layout do teclado antes de comprar.', destaque: true },
  { emoji: '🎧', nome: 'Fones e Headphones', economia: 'Ate 45% mais barato', desc: 'AirPods, Sony e JBL com grande vantagem. Produto pequeno, facil de trazer na mochila.', destaque: true },
  { emoji: '⌚', nome: 'Smartwatches', economia: 'Ate 38% mais barato', desc: 'Apple Watch e Galaxy Watch. Verifique compatibilidade com chip do seu celular.', destaque: false },
  { emoji: '🎮', nome: 'Consoles e Games', economia: 'Ate 30% mais barato', desc: 'PlayStation, Xbox e Nintendo Switch. Atencao ao bloqueio de regiao em jogos fisicos.', destaque: false },
  { emoji: '📷', nome: 'Cameras e Drones', economia: 'Ate 35% mais barato', desc: 'GoPro, DJI e cameras mirrorless com preco bem abaixo do Brasil.', destaque: false },
]

export default function EletronicosParaguai() {
  return (
    <main className="min-h-screen bg-gray-50 pb-16">
      <div className="bg-gradient-to-r from-green-600 to-green-500 px-5 pt-12 pb-8 text-white">
        <Link href="/" className="text-green-100 text-sm mb-4 block">← Calculadora</Link>
        <h1 className="text-2xl font-bold">Eletronicos no Paraguai em 2026</h1>
        <p className="text-green-100 mt-2 text-sm">Quais valem a pena, quanto economiza e o que checar antes de comprar.</p>
      </div>

      <div className="px-4 py-6 max-w-2xl mx-auto space-y-4">

        <div className="bg-white rounded-2xl p-5 shadow-sm space-y-3 text-sm text-gray-600">
          <p>
            Eletronicos sao o principal motivo de viagem ao Paraguai. Com <strong>impostos de importacao muito menores que o Brasil</strong>, a diferenca de preco pode chegar a 40% dependendo do produto e da cotacao do dolar no dia. Mas nem tudo vale a pena — e fundamental calcular o valor final antes de comprar.
          </p>
          <p>
            Ciudad del Este, a principal cidade de compras do Paraguai, fica a poucos quilometros de Foz do Iguacu pela Ponte da Amizade. Lojas como Flytec, Shopping China e Mobile Zone concentram a maior parte dos eletronicos e sao as mais procuradas pelos brasileiros.
          </p>
          <h2 className="font-bold text-gray-800 text-base">Por que os eletronicos sao mais baratos no Paraguai?</h2>
          <p>
            O Paraguai tem uma das menores cargas tributarias da America do Sul. Enquanto no Brasil um celular pode ter ate 80% do preco composto por impostos, no Paraguai esse percentual e muito menor. Alem disso, o pais e uma zona de livre comercio, o que facilita a importacao de produtos tecnologicos dos Estados Unidos, China e Europa sem as tarifas brasileiras.
          </p>
          <p>
            Outro fator e a cotacao do dolar. Como os precos sao em dolares, quando o real esta fraco a vantagem diminui — e quando o real esta mais forte, a economia aumenta ainda mais. Por isso, sempre calcule o preco final em reais antes de decidir.
          </p>
          <h2 className="font-bold text-gray-800 text-base">Cuidados ao comprar eletronicos no Paraguai</h2>
          <p>
            O maior risco na compra de eletronicos no Paraguai e adquirir produtos com versoes incompativeis com o Brasil. Celulares com versao A (americana) costumam funcionar normalmente, mas e preciso verificar se as bandas de frequencia 4G e 5G sao compativeis com as operadoras brasileiras. Notebooks podem vir com teclado QWERTY em ingles — um detalhe que incomoda muita gente no dia a dia.
          </p>
          <p>
            Outro ponto importante e a garantia. Produtos comprados no Paraguai nao tem assistencia tecnica autorizada no Brasil na maioria dos casos. Se o produto apresentar defeito, voce precisara enviar para o exterior ou pagar um conserto particular.
          </p>
          <p>
            Sempre guarde a nota fiscal emitida pela loja. A Receita Federal pode solicitar a comprovacao do valor pago na hora da passagem pela fronteira. Sem nota, o agente fiscal pode arbitrar um valor mais alto e cobrar imposto sobre ele.
          </p>
        </div>

        {itens.map(item => (
          <div key={item.nome} className="bg-white rounded-2xl p-5 shadow-sm flex gap-4">
            <span className="text-3xl">{item.emoji}</span>
            <div className="flex-1">
              <div className="flex items-center justify-between">
                <h2 className="font-bold text-gray-800">{item.nome}</h2>
                {item.destaque && <span className="text-xs bg-green-100 text-green-700 px-2 py-0.5 rounded-full font-medium">Top pick</span>}
              </div>
              <p className="text-gray-500 text-sm mt-1">{item.desc}</p>
              <span className="mt-2 inline-block text-xs px-2 py-0.5 rounded-full font-medium bg-blue-100 text-blue-800">
                {item.economia}
              </span>
            </div>
          </div>
        ))}

        <div className="bg-yellow-50 border border-yellow-200 rounded-2xl p-5">
          <h2 className="font-bold text-yellow-800 mb-2">⚠️ Antes de comprar qualquer eletronico</h2>
          <ul className="text-yellow-700 text-sm space-y-1.5">
            <li>• Verifique o modelo: versao A (Americana) tem garantia mundial, versao BR nao</li>
            <li>• Notebooks: confirme layout do teclado (QWERTY vs ABNT)</li>
            <li>• Consoles: verifique regiao dos jogos fisicos</li>
            <li>• Tudo acima de US$ 500 paga 50% de imposto na entrada do Brasil</li>
            <li>• Guarde nota fiscal — a Receita pode pedir</li>
          </ul>
        </div>

        <div className="bg-white rounded-2xl p-5 shadow-sm">
          <h2 className="text-lg font-bold text-gray-800 mb-3">📦 Cabe na cota de US$ 500?</h2>
          <p className="text-gray-600 text-sm mb-3">Um iPhone 15 custa em media US$ 750 no Paraguai — sozinho ja estoura a cota. Calcule antes de ir.</p>
          <div className="grid grid-cols-2 gap-3 text-sm">
            <div className="bg-green-50 rounded-xl p-3">
              <p className="font-bold text-green-800">Dentro da cota</p>
              <p className="text-green-600 mt-1 text-xs">Fones, smartwatch, games, acessorios</p>
              <p className="text-green-700 font-semibold mt-2">Sem imposto ✅</p>
            </div>
            <div className="bg-red-50 rounded-xl p-3">
              <p className="font-bold text-red-800">Acima de US$ 500</p>
              <p className="text-red-600 mt-1 text-xs">Celular top, notebook, console</p>
              <p className="text-red-700 font-semibold mt-2">+50% no excedente ⚠️</p>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-2xl p-5 shadow-sm space-y-3 text-sm text-gray-600">
          <h2 className="font-bold text-gray-800 text-base">Vale a pena comprar mesmo pagando imposto?</h2>
          <p>
            Depende do produto e do valor. Para um iPhone que custa US$ 800 no Paraguai, voce pagaria 50% sobre os US$ 300 excedentes — ou seja, US$ 150 de imposto. Convertendo pela cotacao do dia, o preco final ainda pode ser menor que no Brasil, onde o mesmo aparelho chega a custar R$ 8.000 a R$ 9.000.
          </p>
          <p>
            Para notebooks e eletronicos de maior valor, a conta costuma fechar a favor do Paraguai mesmo com o imposto. Ja para produtos dentro da cota — como fones de ouvido, smartwatches e acessorios — a economia e ainda mais clara, pois nao ha nenhum imposto adicional a pagar.
          </p>
          <p>
            Use nossa calculadora para simular o custo exato com a cotacao do dia antes de viajar. Assim voce chega a Ciudad del Este sabendo exatamente quanto pode gastar sem surpresas na volta.
          </p>
        </div>

        <div className="bg-green-50 border border-green-100 rounded-2xl p-5">
          <p className="font-bold text-green-800 mb-3">🧮 Calcule o preco final em reais</p>
          <p className="text-green-600 text-sm mb-4">Com imposto, IOF e cambio real incluidos.</p>
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

fs.writeFileSync('app/eletronicos-paraguai/page.jsx', content, 'utf8')
console.log('OK - pagina expandida!')
