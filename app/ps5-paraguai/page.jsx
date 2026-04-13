import Link from 'next/link'
import BannerNomad from '../components/BannerNomad'

export const metadata = {
  title: 'PS5 no Paraguai 2026 - Preço e Vale a Pena? | Calculadora Paraguai',
  description: 'Quanto custa o PS5 no Paraguai em 2026? Veja preços do PlayStation 5 Slim, Digital e acessórios com imposto calculado em reais. Vale a pena comprar?',
  keywords: 'ps5 paraguai 2026, playstation 5 paraguai preco, ps5 slim paraguai, ps5 cidade del este, videogame paraguai',
}

const produtos = [
  { nome: 'PS5 Slim Leitor de Disco', usd: 449, brasil: 4299, descricao: 'Versão mais vendida. Aceita jogos físicos e digitais.' },
  { nome: 'PS5 Slim Digital Edition', usd: 349, brasil: 3799, descricao: 'Sem leitor de disco. Menor e mais leve, só jogos digitais.' },
  { nome: 'PS5 Standard (modelo antigo)', usd: 399, brasil: 3999, descricao: 'Modelo original maior. Ainda disponível em algumas lojas.' },
  { nome: 'Controle DualSense', usd: 69, brasil: 699, descricao: 'Controle adicional. Cabe fácil dentro da cota.' },
  { nome: 'PS5 + 2 Controles + Jogo', usd: 549, brasil: 5499, descricao: 'Kit completo. Paga imposto sobre US$ 49 de excedente.' },
]

const COTACAO = 5.25

function calcImposto(usd) { return Math.max(0, usd - 500) * 0.5 }
function totalBRL(usd) { return (usd + calcImposto(usd)) * COTACAO }

export default function PS5Paraguai() {
  return (
    <main className="min-h-screen bg-gray-50 pb-16">
      <div className="bg-gradient-to-r from-green-600 to-green-500 px-5 pt-12 pb-8 text-white">
        <Link href="/" className="text-green-100 text-sm mb-4 block">← Calculadora</Link>
        <h1 className="text-2xl font-bold">PS5 no Paraguai em 2026</h1>
        <p className="text-green-100 mt-2 text-sm">Preços, modelos e quanto sai no total com imposto.</p>
      </div>

      <div className="px-4 py-6 max-w-2xl mx-auto space-y-5">

        <div className="bg-green-50 border border-green-200 rounded-2xl p-5">
          <p className="font-bold text-green-800">✅ PS5 no Paraguai custa até 35% menos que no Brasil</p>
          <p className="text-green-700 text-sm mt-2">O PlayStation 5 Slim Digital Edition (US$ 349) cabe dentro da cota de US$ 500 e entra no Brasil <strong>sem pagar nenhum imposto de importação</strong>. Mesmo o modelo com disco (US$ 449) fica muito mais barato que no Brasil após o imposto.</p>
        </div>

        <div className="bg-white rounded-2xl p-5 shadow-sm">
          <h2 className="text-lg font-bold text-gray-800 mb-3">🎮 Preços do PS5 no Paraguai 2026</h2>
          <div className="space-y-3">
            {produtos.map(({ nome, usd, brasil, descricao }) => {
              const imposto = calcImposto(usd)
              const total = totalBRL(usd)
              const eco = brasil - total
              const semImposto = usd <= 500
              return (
                <div key={nome} className={`rounded-xl p-4 ${semImposto ? 'bg-green-50 border border-green-100' : 'bg-gray-50'}`}>
                  <div className="flex justify-between items-start">
                    <p className="font-bold text-gray-800 text-sm">{nome}</p>
                    {semImposto && <span className="text-xs bg-green-500 text-white px-2 py-0.5 rounded-full">Sem imposto ✅</span>}
                  </div>
                  <p className="text-gray-500 text-xs mt-0.5">{descricao}</p>
                  <div className="grid grid-cols-3 gap-2 mt-2 text-xs">
                    <div>
                      <p className="text-gray-400">Paraguai</p>
                      <p className="font-semibold text-gray-700">US$ {usd}</p>
                    </div>
                    <div>
                      <p className="text-gray-400">Total c/ imposto</p>
                      <p className="font-bold text-green-700">R$ {total.toLocaleString('pt-BR', { maximumFractionDigits: 0 })}</p>
                    </div>
                    <div>
                      <p className="text-gray-400">Economia</p>
                      <p className="font-bold text-blue-600">R$ {eco.toLocaleString('pt-BR', { maximumFractionDigits: 0 })}</p>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
          <p className="text-xs text-gray-400 mt-3">* Cotação base R$ {COTACAO}. Use a calculadora para o valor exato do dia.</p>
        </div>

        <div className="bg-white rounded-2xl p-5 shadow-sm">
          <h2 className="text-lg font-bold text-gray-800 mb-3">🎯 Qual PS5 comprar no Paraguai?</h2>
          <div className="space-y-3">
            <div className="bg-green-50 rounded-xl p-4">
              <p className="font-bold text-green-800 text-sm">🥇 Melhor opção: PS5 Slim Digital (US$ 349)</p>
              <p className="text-green-700 text-xs mt-1">Entra dentro da cota de US$ 500 — zero imposto. No Brasil custa R$ 3.799. No Paraguai sai ~R$ 1.832. <strong>Economia de ~R$ 1.967!</strong> Ideal para quem prefere comprar jogos digitalmente.</p>
            </div>
            <div className="bg-blue-50 rounded-xl p-4">
              <p className="font-bold text-blue-800 text-sm">🥈 Com leitor de disco: PS5 Slim (US$ 449)</p>
              <p className="text-blue-700 text-xs mt-1">Ainda cabe na cota — zero imposto. No Brasil custa R$ 4.299. No Paraguai sai ~R$ 2.357. <strong>Economia de ~R$ 1.942!</strong> Melhor para quem compra jogos físicos ou empresta jogos com amigos.</p>
            </div>
            <div className="bg-yellow-50 rounded-xl p-4">
              <p className="font-bold text-yellow-800 text-sm">💡 Dica: compre junto com acessórios</p>
              <p className="text-yellow-700 text-xs mt-1">Se comprar o PS5 Digital (US$ 349) + controle extra (US$ 69) = US$ 418. Ainda dentro da cota! Ou distribua entre familiares para não pagar imposto.</p>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-2xl p-5 shadow-sm">
          <h2 className="text-lg font-bold text-gray-800 mb-3">🌍 PS5 do Paraguai funciona no Brasil?</h2>
          <p className="text-gray-600 text-sm mb-3">Sim, com algumas observações importantes:</p>
          <div className="space-y-2 text-sm text-gray-600">
            <div className="flex gap-2 bg-gray-50 rounded-xl p-3">
              <span>✅</span><p><strong>Voltagem:</strong> O PS5 é bivolt (100-240V) — funciona normalmente nas tomadas brasileiras.</p>
            </div>
            <div className="flex gap-2 bg-gray-50 rounded-xl p-3">
              <span>✅</span><p><strong>Jogos físicos:</strong> O PS5 do Paraguai geralmente é região Americas (mesmo que o Brasil) — a maioria dos jogos físicos funciona.</p>
            </div>
            <div className="flex gap-2 bg-gray-50 rounded-xl p-3">
              <span>✅</span><p><strong>PlayStation Network:</strong> Funciona normalmente com conta brasileira ou americana.</p>
            </div>
            <div className="flex gap-2 bg-yellow-50 rounded-xl p-3">
              <span>⚠️</span><p><strong>Garantia:</strong> Não tem garantia oficial Sony no Brasil. Em caso de defeito, precisa resolver pela Sony americana ou pagar assistência particular.</p>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-2xl p-5 shadow-sm">
          <h2 className="text-lg font-bold text-gray-800 mb-3">✅ Dicas para comprar PS5 no Paraguai</h2>
          <div className="space-y-2 text-sm text-gray-600">
            <div className="flex gap-2"><span>1️⃣</span><p><strong>Verifique se a caixa está lacrada</strong> — PS5 original nunca vem com caixa aberta ou fita adesiva improvisada.</p></div>
            <div className="flex gap-2"><span>2️⃣</span><p><strong>Teste na loja antes de pagar</strong> — peça para ligar e verificar que inicializa normalmente.</p></div>
            <div className="flex gap-2"><span>3️⃣</span><p><strong>Exija nota fiscal</strong> — necessária para declarar na Receita Federal na volta.</p></div>
            <div className="flex gap-2"><span>4️⃣</span><p><strong>Prefira lojas conhecidas</strong> — Shopping China e Mobile Zone têm boa reputação para eletrônicos.</p></div>
            <div className="flex gap-2"><span>5️⃣</span><p><strong>Distribua na família</strong> — se quiser levar PS5 + jogos + controle extra, separe entre 2 pessoas para não estourar a cota.</p></div>
          </div>
        </div>

        <div className="bg-white rounded-2xl p-5 shadow-sm">
          <h2 className="text-lg font-bold text-gray-800 mb-3">❓ Perguntas frequentes</h2>
          <div className="space-y-3 text-sm">
            <div className="border-b border-gray-100 pb-3">
              <p className="font-semibold text-gray-800">Posso trazer PS5 e jogos juntos?</p>
              <p className="text-gray-600 mt-1">Sim, mas tudo soma na cota de US$ 500. PS5 Digital (US$ 349) + 2 jogos (US$ 30 cada) = US$ 409. Ainda dentro da cota!</p>
            </div>
            <div className="border-b border-gray-100 pb-3">
              <p className="font-semibold text-gray-800">Xbox Series S ou PS5 — qual comprar no Paraguai?</p>
              <p className="text-gray-600 mt-1">O Xbox Series S custa ~US$ 249 e entra bem dentro da cota. O PS5 Digital (US$ 349) também cabe. Ambos são ótimas opções — depende da sua preferência de plataforma.</p>
            </div>
            <div>
              <p className="font-semibold text-gray-800">Nintendo Switch 2 está disponível no Paraguai?</p>
              <p className="text-gray-600 mt-1">Depende do lançamento. O Switch 2 foi anunciado para 2025. Quando disponível, o Paraguai costuma ter estoques rapidamente a preços competitivos.</p>
            </div>
          </div>
        </div>

        <Link href="/lojas-paraguai" className="flex items-center gap-3 bg-white rounded-xl px-4 py-3 text-sm text-gray-700 border border-gray-100 hover:border-green-300 transition-colors">
          <span className="text-2xl">🏪</span>
          <div>
            <p className="font-bold text-gray-800 text-sm">Ver melhores lojas para comprar PS5</p>
            <p className="text-xs text-gray-500">Shopping China, Mobile Zone, Flytec</p>
          </div>
          <span className="ml-auto text-gray-400">→</span>
        </Link>

        <div className="bg-green-50 border border-green-100 rounded-2xl p-5">
          <p className="font-bold text-green-800 mb-1">🧮 Calcule o preço exato do PS5 com a cotação do dia</p>
          <p className="text-green-700 text-sm mb-3">Veja quanto vai pagar no total com câmbio real do Banco Central.</p>
          <Link href="/" className="block bg-green-500 text-white text-center py-3 rounded-xl font-semibold">Abrir Calculadora →</Link>
        </div>

        <BannerNomad />
      </div>

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": [
          { "@type": "Question", "name": "Quanto custa o PS5 no Paraguai em 2026?", "acceptedAnswer": { "@type": "Answer", "text": "O PS5 Slim Digital custa US$ 349 e o PS5 Slim com leitor custa US$ 449. Ambos entram dentro da cota de US$ 500 sem pagar imposto. Com câmbio de R$ 5,25, o PS5 Digital sai ~R$ 1.832." } },
          { "@type": "Question", "name": "PS5 do Paraguai funciona no Brasil?", "acceptedAnswer": { "@type": "Answer", "text": "Sim. O PS5 é bivolt e funciona nas tomadas brasileiras. Os jogos da região Americas funcionam normalmente. A PlayStation Network também funciona com conta brasileira." } },
          { "@type": "Question", "name": "Vale a pena comprar PS5 no Paraguai?", "acceptedAnswer": { "@type": "Answer", "text": "Sim. O PS5 Digital cabe na cota sem pagar imposto e sai cerca de R$ 1.900 mais barato que no Brasil." } }
        ]
      }) }} />
    </main>
  )
}
