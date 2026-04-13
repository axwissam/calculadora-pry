import Link from 'next/link'
import BannerNomad from '../components/BannerNomad'

export const metadata = {
  title: 'Celular no Paraguai 2026 - Vale a Pena? Precos e Dicas | Calculadora Paraguai',
  description: 'Vale a pena comprar celular no Paraguai em 2026? Veja precos de iPhone e Samsung, calcule o imposto e saiba o que verificar antes de comprar.',
  keywords: 'celular paraguai 2026, comprar celular paraguai, celular mais barato paraguai, samsung paraguai, iphone paraguai preco',
}

const modelos = [
  { nome: 'iPhone 16', preco: 'US$ 799', economia: 'Ate R$ 2.000', obs: 'Versao LL/A. Funciona no Brasil.' },
  { nome: 'iPhone 16 Pro', preco: 'US$ 1.099', economia: 'Ate R$ 2.800', obs: 'Acima da cota — paga imposto.' },
  { nome: 'Samsung Galaxy S25', preco: 'US$ 799', economia: 'Ate R$ 1.800', obs: 'Verifique bandas 5G.' },
  { nome: 'Samsung Galaxy S25 Ultra', preco: 'US$ 1.299', economia: 'Ate R$ 3.000', obs: 'Acima da cota — paga imposto.' },
  { nome: 'Motorola Edge 50', preco: 'US$ 399', economia: 'Ate R$ 1.200', obs: 'Dentro da cota. Sem imposto.' },
  { nome: 'Xiaomi 14', preco: 'US$ 599', economia: 'Ate R$ 1.500', obs: 'Verifique compatibilidade de chip.' },
]

export default function CelularParaguai() {
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
        "name": "Vale a pena comprar celular no Paraguai?",
        "acceptedAnswer": {
            "@type": "Answer",
            "text": "Sim, a economia pode chegar a 40% mesmo após pagar o imposto de importação. Um iPhone que custa R$ 8.000 no Brasil pode sair por R$ 5.500 a R$ 6.000 no Paraguai com imposto incluído."
        }
    },
    {
        "@type": "Question",
        "name": "Qual o imposto para trazer celular do Paraguai?",
        "acceptedAnswer": {
            "@type": "Answer",
            "text": "A cota de isenção é de US$ 500. Acima disso, paga-se 50% sobre o valor excedente. Um celular de US$ 800 tem US$ 300 de excedente, gerando US$ 150 de imposto."
        }
    },
    {
        "@type": "Question",
        "name": "O celular do Paraguai funciona no Brasil?",
        "acceptedAnswer": {
            "@type": "Answer",
            "text": "Sim, a versão americana (LL/A) dos iPhones funciona normalmente no Brasil. Para Samsung e outras marcas, verifique as bandas 4G e 5G compatíveis com operadoras brasileiras."
        }
    }
]
  }) }}
/>
      <main className="min-h-screen bg-gray-50 pb-16">
      <div className="bg-gradient-to-r from-green-600 to-green-500 px-5 pt-12 pb-8 text-white">
        <Link href="/" className="text-green-100 text-sm mb-4 block">← Calculadora</Link>
        <h1 className="text-2xl font-bold">Celular no Paraguai em 2026</h1>
        <p className="text-green-100 mt-2 text-sm">Precos, imposto e tudo que voce precisa saber antes de comprar.</p>
      </div>

      <div className="px-4 py-6 max-w-2xl mx-auto space-y-4">

        <div className="bg-white rounded-2xl p-5 shadow-sm space-y-3 text-sm text-gray-600">
          <p>
            Celular e o produto mais comprado pelos brasileiros no Paraguai. A economia pode chegar a <strong>R$ 2.000 a R$ 3.000</strong> dependendo do modelo — mesmo depois de pagar o imposto de importacao. Mas e preciso saber o que verificar antes de fechar a compra.
          </p>
          <p>
            A maioria dos celulares vendidos em Ciudad del Este e a versao americana (LL/A) ou internacional, que funciona normalmente no Brasil. Porem, alguns pontos precisam de atencao: compatibilidade de bandas 5G, garantia e nota fiscal.
          </p>
          <h2 className="font-bold text-gray-800 text-base">Quanto de imposto vou pagar?</h2>
          <p>
            A cota de isencao e de <strong>US$ 500 por pessoa</strong>. Como a maioria dos celulares top de linha custa mais que isso, voce vai pagar <strong>50% de imposto sobre o valor excedente</strong>. Por exemplo: um iPhone 16 por US$ 799 tem US$ 299 acima da cota — o imposto sera US$ 149,50, convertido pelo cambio do dia.
          </p>
          <p>
            Mesmo com esse imposto, o preco final costuma ser menor que no Brasil. Use nossa calculadora para simular o valor exato com a cotacao do dia antes de viajar.
          </p>
        </div>

        <div className="bg-white rounded-2xl p-5 shadow-sm">
          <h2 className="text-lg font-bold text-gray-800 mb-3">📱 Precos medios em 2026</h2>
          <p className="text-xs text-gray-400 mb-3">*Precos variam por loja e cotacao. Consulte a calculadora para o valor exato.</p>
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
          <h2 className="font-bold text-gray-800 text-base">O celular vai funcionar no Brasil?</h2>
          <p>
            A versao americana (LL/A) dos iPhones funciona perfeitamente no Brasil — aceita chip nacional, 4G e 5G das principais operadoras e recebe todas as atualizacoes. Para Samsung e outras marcas, verifique se o modelo tem as bandas B28 (700MHz) e N28 (5G), que sao as mais usadas no Brasil.
          </p>
          <p>
            Celulares chineses como Xiaomi e Oppo podem ter restricoes de bandas. Antes de comprar, pesquise o numero exato do modelo e verifique a compatibilidade com as operadoras brasileiras no site da Anatel.
          </p>
          <h2 className="font-bold text-gray-800 text-base">E a garantia?</h2>
          <p>
            Celulares comprados no Paraguai nao tem garantia oficial no Brasil. A Apple, Samsung e outras marcas nao atendem em assistencias autorizadas brasileiras produtos comprados fora do pais. Se o aparelho quebrar, voce precisara de assistencia tecnica particular.
          </p>
          <p>
            Uma alternativa e contratar seguro para o aparelho em seguradoras brasileiras — o custo anual costuma ser de R$ 300 a R$ 600, bem abaixo da economia gerada pela compra no Paraguai.
          </p>
          <h2 className="font-bold text-gray-800 text-base">Onde comprar celular em Ciudad del Este?</h2>
          <p>
            As lojas mais confiaveis para comprar celular no Paraguai sao a <strong>Flytec Computers</strong>, <strong>Mobile Zone</strong> e <strong>Visao VIP</strong>. Essas lojas trabalham com produtos originais, emitem nota fiscal e tem atendimento em portugues.
          </p>
          <p>
            Evite comprar de ambulantes ou em lojas sem identificacao — o risco de produto falsificado, roubado ou com IMEI bloqueado e alto. Sempre teste o aparelho na loja antes de pagar: ligue, teste o chip, camera, wi-fi e Face ID ou leitor de digital.
          </p>
        </div>

        <div className="bg-yellow-50 border border-yellow-200 rounded-2xl p-5">
          <h2 className="font-bold text-yellow-800 mb-2">⚠️ Checklist antes de comprar</h2>
          <ul className="text-yellow-700 text-sm space-y-1.5">
            <li>• Exija nota fiscal com IMEI e numero de serie</li>
            <li>• Verifique o IMEI em Configuracoes — deve bater com a caixa</li>
            <li>• Teste o chip da sua operadora na loja</li>
            <li>• Confirme que e versao LL/A ou internacional</li>
            <li>• Verifique bandas 4G/5G para o Brasil</li>
            <li>• Nao compre lacrado sem ver o aparelho funcionando</li>
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

        
        <div className="bg-gray-50 rounded-2xl p-4">
          <p className="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-3">Leia também</p>
          <div className="space-y-2">
            <Link href="/imposto-iphone-paraguai" className="flex items-center gap-3 bg-white rounded-xl px-4 py-3 text-sm text-gray-700 border border-gray-100 hover:border-green-300 transition-colors">
              <span className="text-lg">📱</span>
              <span>Imposto do iPhone no Paraguai</span>
              <span className="ml-auto text-gray-400">→</span>
            </Link>
            <Link href="/samsung-paraguai" className="flex items-center gap-3 bg-white rounded-xl px-4 py-3 text-sm text-gray-700 border border-gray-100 hover:border-green-300 transition-colors">
              <span className="text-lg">📲</span>
              <span>Samsung no Paraguai</span>
              <span className="ml-auto text-gray-400">→</span>
            </Link>
            <Link href="/como-calcular-imposto-paraguai" className="flex items-center gap-3 bg-white rounded-xl px-4 py-3 text-sm text-gray-700 border border-gray-100 hover:border-green-300 transition-colors">
              <span className="text-lg">🧮</span>
              <span>Como calcular o imposto</span>
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