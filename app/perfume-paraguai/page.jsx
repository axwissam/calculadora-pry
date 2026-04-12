import Link from 'next/link'
import BannerNomad from '../components/BannerNomad'

export const metadata = {
  title: 'Perfume no Paraguai 2026 - Vale a pena? Precos e Marcas | Calculadora Paraguai',
  description: 'Perfumes importados no Paraguai em 2026. Veja quais marcas valem a pena, quanto economiza e como trazer sem pagar imposto.',
  keywords: 'perfume paraguai 2026, perfume mais barato paraguai, perfume importado paraguai, chanel paraguai, dior paraguai',
}

export default function PerfumeParaguai() {
  return (
    <main className="min-h-screen bg-gray-50 pb-16">
      <div className="bg-gradient-to-r from-pink-500 to-pink-400 px-5 pt-12 pb-8 text-white">
        <Link href="/" className="text-pink-100 text-sm mb-4 block">â† Calculadora</Link>
        <h1 className="text-2xl font-bold">Perfume no Paraguai em 2026</h1>
        <p className="text-pink-100 mt-2 text-sm">Vale a pena, quais marcas comprar e como trazer sem problema.</p>
      </div>

      <div className="px-4 py-6 max-w-2xl mx-auto space-y-4">

        <div className="bg-white rounded-2xl p-5 shadow-sm space-y-3 text-sm text-gray-600">
          <p>
            Perfumes importados estao entre os produtos mais vantajosos para comprar no Paraguai. A economia em relacao ao Brasil pode chegar a <strong>50% dependendo da marca e do volume</strong>. Isso acontece porque o Brasil cobra impostos altissimos sobre cosmeticos importados, enquanto o Paraguai praticamente nao tributa esses produtos.
          </p>
          <p>
            As lojas de Ciudad del Este oferecem uma enorme variedade de marcas internacionais â€” de Chanel e Dior a Carolina Herrera, LancÃ´me, Versace e Prada. A maioria dos produtos e autentica e vem direto dos distribuidores oficiais europeus e americanos.
          </p>
          <h2 className="font-bold text-gray-800 text-base">Perfume entra na cota de US$ 500?</h2>
          <p>
            Sim. Perfumes contam dentro da cota geral de US$ 500 por pessoa. Como cada frasco custa entre US$ 50 e US$ 200, da para trazer varios frascos sem estourar a cota â€” especialmente se voce viajar em familia, ja que cada pessoa tem direito a sua propria cota.
          </p>
          <p>
            Uma familia de 4 pessoas pode trazer ate US$ 2.000 em produtos sem pagar imposto. Se cada pessoa trouxer 3 ou 4 perfumes, da para montar um estoque para o ano todo com uma economia significativa.
          </p>
          <h2 className="font-bold text-gray-800 text-base">Como identificar se o perfume e original?</h2>
          <p>
            Compre sempre em lojas estabelecidas como Shopping China, Flytec e Elegancia, que trabalham com produtos originais. Desconfie de perfumes vendidos em bancas de rua com precos muito abaixo do normal â€” podem ser falsificados ou diluidos.
          </p>
          <p>
            Verifique o numero de lote impresso na caixa e no frasco, que devem ser identicos. Perfumes originais tambem tem embalagem firme, fonte impressa com qualidade e o frasco sem bolhas ou imperfeicoes.
          </p>
        </div>

        <div className="bg-white rounded-2xl p-5 shadow-sm">
          <h2 className="text-lg font-bold text-gray-800 mb-3">ðŸŒ¸ Marcas mais procuradas</h2>
          <div className="space-y-2">
            {[
              { marca: 'Chanel', economia: 'Ate 50% mais barato', exemplo: 'NÂ°5, Coco Mademoiselle, Chance' },
              { marca: 'Dior', economia: 'Ate 45% mais barato', exemplo: 'Sauvage, Miss Dior, J adore' },
              { marca: 'Carolina Herrera', economia: 'Ate 40% mais barato', exemplo: 'Good Girl, Bad Boy, 212' },
              { marca: 'Versace', economia: 'Ate 45% mais barato', exemplo: 'Eros, Crystal, Bright Crystal' },
              { marca: 'LancÃ´me', economia: 'Ate 40% mais barato', exemplo: 'La Vie Est Belle, IdÃ´le' },
              { marca: 'Prada', economia: 'Ate 45% mais barato', exemplo: 'Paradoxe, Luna Rossa, Candy' },
            ].map(({ marca, economia, exemplo }) => (
              <div key={marca} className="flex justify-between items-start py-2 border-b border-gray-100">
                <div>
                  <p className="font-semibold text-gray-800 text-sm">{marca}</p>
                  <p className="text-gray-400 text-xs">{exemplo}</p>
                </div>
                <span className="text-xs bg-pink-100 text-pink-700 px-2 py-0.5 rounded-full font-medium">{economia}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-yellow-50 border border-yellow-200 rounded-2xl p-5">
          <h2 className="font-bold text-yellow-800 mb-2">âš ï¸ Dicas para nao ter problema na fronteira</h2>
          <ul className="text-yellow-700 text-sm space-y-1.5">
            <li>â€¢ Mantenha os perfumes na embalagem original com nota fiscal</li>
            <li>â€¢ Nao misture tudo numa sacola â€” organize por pessoa para facilitar conferencia</li>
            <li>â€¢ Soma total de todos os produtos de uma pessoa nao deve ultrapassar US$ 500</li>
            <li>â€¢ A Receita pode abrir malas â€” nao esconda produtos</li>
          </ul>
        </div>

        <div className="bg-white rounded-2xl p-5 shadow-sm space-y-3 text-sm text-gray-600">
          <h2 className="font-bold text-gray-800 text-base">Qual a melhor forma de pagar?</h2>
          <p>
            Para perfumes, o pagamento em dinheiro (dolares) ou Pix costuma dar o melhor preco, pois evita o IOF de 3,5% cobrado nos cartoes de credito comuns. Cartoes internacionais como Nomad e Wise tambem sao boas opcoes por nao cobrarem IOF adicional.
          </p>
          <p>
            Algumas lojas aceitam reais, mas a cotacao costuma ser desfavoravel. Prefira sempre pagar em dolares ou verificar a cotacao antes de aceitar o preco em reais.
          </p>
        </div>

        <div className="bg-green-50 border border-green-100 rounded-2xl p-5">
          <p className="font-bold text-green-800 mb-3">ðŸ§® Calcule o preco final com cambio e imposto</p>
          <Link href="/" className="block bg-green-500 text-white text-center py-3 rounded-xl font-semibold">
            Abrir Calculadora â†’
          </Link>
        </div>

        <BannerNomad />

        <Link href="/lojas-paraguai" className="flex items-center gap-3 bg-white rounded-xl px-4 py-3 text-sm text-gray-700 border border-gray-100 hover:border-green-300 transition-colors">
          <span className="text-2xl">ðŸª</span>
          <div>
            <p className="font-bold text-gray-800 text-sm">Melhores lojas do Paraguai</p>
            <p className="text-xs text-gray-500">Shopping China, Flytec, Mobile Zone e mais</p>
          </div>
          <span className="ml-auto text-green-500 font-bold">â†’</span>
        </Link>

      </div>

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({"@context":"https://schema.org","@type":"FAQPage","mainEntity":[{"@type":"Question","name":"Vale a pena comprar perfume no Paraguai?","acceptedAnswer":{"@type":"Answer","text":"Sim! Perfumes importados chegam a custar 50% menos do que no Brasil, sendo um dos melhores produtos para comprar."}},{"@type":"Question","name":"Quantos perfumes posso trazer do Paraguai?","acceptedAnswer":{"@type":"Answer","text":"Não há limite de quantidade — o limite é a cota de US$ 500 por pessoa. Com perfumes a US$ 100 cada, dá para trazer 4-5 dentro da cota."}},{"@type":"Question","name":"Quais marcas de perfume comprar no Paraguai?","acceptedAnswer":{"@type":"Answer","text":"Chanel, Dior, Carolina Herrera e YSL têm até 50% de desconto. Perfumes árabes como Lattafa e Armaf são excelentes e muito baratos."}}]}) }} />
    </main>
  )
}

