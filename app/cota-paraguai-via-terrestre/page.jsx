import Link from 'next/link'
import BannerNomad from '../components/BannerNomad'

export const metadata = {
  title: 'Cota Paraguai Via Terrestre 2026 - Limite e Regras | Calculadora Paraguai',
  description: 'Cota de compras no Paraguai via terrestre em 2026. US$ 500 por pessoa pela Ponte da Amizade. Regras, o que conta e como nao pagar imposto.',
  keywords: 'cota paraguai via terrestre 2026, cota ponte da amizade, limite compras paraguai terrestre, cota us 500 paraguai',
}

export default function CotaViaTerrestre() {
  return (
    <main className="min-h-screen bg-gray-50 pb-16">
      <div className="bg-gradient-to-r from-green-600 to-green-500 px-5 pt-12 pb-8 text-white">
        <Link href="/" className="text-green-100 text-sm mb-4 block">← Calculadora</Link>
        <h1 className="text-2xl font-bold">Cota Paraguai Via Terrestre 2026</h1>
        <p className="text-green-100 mt-2 text-sm">US$ 500 por pessoa. Entenda tudo sobre o limite e as regras.</p>
      </div>

      <div className="px-4 py-6 max-w-2xl mx-auto space-y-4">

        <div className="bg-white rounded-2xl p-5 shadow-sm">
          <div className="text-center py-2">
            <p className="text-5xl font-black text-green-600">US$ 500</p>
            <p className="text-gray-600 text-sm mt-2">Cota por pessoa via terrestre em 2026</p>
            <p className="text-gray-400 text-xs mt-1">Ponte da Amizade (Foz do Iguacu) e Pedro Juan Caballero</p>
          </div>
        </div>

        <div className="bg-white rounded-2xl p-5 shadow-sm space-y-3 text-sm text-gray-600">
          <h2 className="font-bold text-gray-800 text-base">O que e a cota de isencao?</h2>
          <p>
            A cota de isencao e o valor maximo de produtos que um viajante pode trazer do exterior sem pagar imposto de importacao. Para viagens terrestres — como a travessia pela Ponte da Amizade em Foz do Iguacu ou por Pedro Juan Caballero — esse limite e de <strong>US$ 500 por pessoa por viagem</strong>.
          </p>
          <p>
            Essa regra vale para todos os produtos somados: eletronicos, roupas, perfumes, calcados, alimentos permitidos e qualquer outro item de uso pessoal. Nao importa quantos produtos sao — o que vale e o valor total.
          </p>
          <h2 className="font-bold text-gray-800 text-base">Por que a cota terrestre e menor que a aerea?</h2>
          <p>
            A Receita Federal estabelece cotas diferentes porque o volume de compras e o perfil do viajante sao distintos. Nas fronteiras terrestres, especialmente em Foz do Iguacu, o volume de brasileiros que vao ao Paraguai especificamente para comprar e muito alto — diferente de quem volta de uma viagem internacional de aviao.
          </p>
          <p>
            Por isso, a cota terrestre e de US$ 500 enquanto a aerea e de US$ 1.000. A ideia e equilibrar o comercio legal com o controle de mercadorias que podem prejudicar o mercado interno brasileiro.
          </p>
          <h2 className="font-bold text-gray-800 text-base">Quantas vezes posso ir ao Paraguai?</h2>
          <p>
            Nao ha restricao legal de frequencia. Voce pode ir ao Paraguai quantas vezes quiser e cada viagem tem direito a uma nova cota de US$ 500. Porem, a Receita Federal pode questionar viajantes que cruzam a fronteira com muita frequencia sempre com valores proximo ao limite — isso pode levantar suspeita de descaminho.
          </p>
        </div>

        <div className="bg-white rounded-2xl p-5 shadow-sm">
          <h2 className="text-lg font-bold text-gray-800 mb-3">🌉 Principais pontos de entrada</h2>
          <div className="space-y-3">
            {[
              { local: 'Ponte da Amizade', cidade: 'Foz do Iguacu, PR', desc: 'Principal entrada do Parana. Liga Foz do Iguacu a Ciudad del Este.' },
              { local: 'Pedro Juan Caballero', cidade: 'Ponta Pora, MS', desc: 'Fronteira seca no Mato Grosso do Sul. Cidades dividem a mesma rua.' },
              { local: 'Salto del Guaira', cidade: 'Guaira, PR', desc: 'Menor movimento. Acesso ao norte do Paraguai.' },
            ].map(({ local, cidade, desc }) => (
              <div key={local} className="flex gap-3 items-start py-2 border-b border-gray-100">
                <span className="text-2xl">🌉</span>
                <div>
                  <p className="font-semibold text-gray-800 text-sm">{local}</p>
                  <p className="text-gray-400 text-xs">{cidade}</p>
                  <p className="text-gray-500 text-xs mt-0.5">{desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white rounded-2xl p-5 shadow-sm space-y-3 text-sm text-gray-600">
          <h2 className="font-bold text-gray-800 text-base">O que nao entra na cota?</h2>
          <p>
            Alguns produtos tem regras proprias independente da cota geral. <strong>Bebidas alcoolicas</strong> tem limite de 12 litros — acima disso ha imposto especifico, mesmo dentro dos US$ 500. <strong>Cigarros</strong> tem limite de 25 carteiras por pessoa.
          </p>
          <p>
            Produtos proibidos de entrar no Brasil nao tem cota: frutas, verduras, carnes frescas, medicamentos sem receita, armas e municoes. Esses itens podem ser apreendidos independente do valor.
          </p>
          <h2 className="font-bold text-gray-800 text-base">Como a Receita fiscaliza na fronteira?</h2>
          <p>
            A Receita Federal tem postos de fiscalizacao na saida da Ponte da Amizade e nos demais pontos de entrada. A abordagem pode ser aleatoria ou por suspeita. Os agentes podem solicitar nota fiscal de todos os produtos, abrir malas e verificar o valor total.
          </p>
          <p>
            O sistema de raio-X e cameras permite identificar produtos escondidos. Tentar esconder mercadorias e considerado descaminho — crime com pena de reclusa de 1 a 4 anos. Sempre declare tudo espontaneamente.
          </p>
        </div>

        <div className="bg-yellow-50 border border-yellow-200 rounded-2xl p-5">
          <h2 className="font-bold text-yellow-800 mb-2">⚠️ O que fazer se passar da cota</h2>
          <ul className="text-yellow-700 text-sm space-y-1.5">
            <li>• Declare espontaneamente no posto da Receita na fronteira</li>
            <li>• Ou use o app Viajantes da Receita Federal antes de chegar</li>
            <li>• Pague o DARF gerado pelo sistema (50% do excedente)</li>
            <li>• Guarde o comprovante de pagamento para apresentar</li>
            <li>• Nao tente esconder — a multa e muito maior que o imposto</li>
          </ul>
        </div>

        <div className="bg-green-50 border border-green-100 rounded-2xl p-5">
          <p className="font-bold text-green-800 mb-3">🧮 Calcule o imposto antes de viajar</p>
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

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({"@context":"https://schema.org","@type":"FAQPage","mainEntity":[{"@type":"Question","name":"Qual é a cota de compras no Paraguai via terrestre em 2026?","acceptedAnswer":{"@type":"Answer","text":"US$ 500 por pessoa via terrestre pela Ponte da Amizade ou Pedro Juan Caballero."}},{"@type":"Question","name":"Posso somar a cota com minha família?","acceptedAnswer":{"@type":"Answer","text":"Sim! Cada pessoa tem direito a US$ 500 individuais, incluindo crianças. Uma família de 4 tem US$ 2.000 de cota total."}},{"@type":"Question","name":"O que acontece se passar da cota?","acceptedAnswer":{"@type":"Answer","text":"Você paga 50% de imposto sobre o valor excedente, convertido pela cotação do dólar do dia."}}]}) }} />
    </main>
  )
}
