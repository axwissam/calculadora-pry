import Link from 'next/link'
import BannerNomad from '../components/BannerNomad'

export const metadata = {
  title: 'Como Não Cair em Golpes no Paraguai 2026 — Guia de Segurança | Calculadora Paraguai',
  description: 'Conheça os golpes mais comuns em Ciudad del Este e como se proteger em 2026. Produto falso, câmbio na rua, troco errado e abordagens suspeitas — saiba como evitar.',
  keywords: 'golpes paraguai 2026, como nao ser roubado paraguai, produto falso ciudad del este, segurança paraguai compras, cuidados paraguai',
}

export default function ComoNaoCairEmGolpes() {
  return (
    <main className="min-h-screen bg-gray-50 pb-16">
      <div className="bg-gradient-to-r from-green-600 to-green-500 px-5 pt-12 pb-8 text-white">
        <Link href="/" className="text-green-100 text-sm mb-4 block">← Calculadora</Link>
        <h1 className="text-2xl font-bold">Como Não Cair em Golpes no Paraguai</h1>
        <p className="text-green-100 mt-2 text-sm">Os golpes mais comuns em Ciudad del Este e como se proteger em 2026.</p>
      </div>

      <div className="px-4 py-6 max-w-2xl mx-auto space-y-5">

        <div className="bg-white rounded-2xl p-5 shadow-sm">
          <p className="text-gray-600 text-sm leading-relaxed">
            Ciudad del Este é uma cidade segura para fazer compras, mas como em qualquer grande centro comercial, existem golpes aplicados principalmente em turistas desatentos. Conhecer os esquemas mais comuns é a melhor forma de se proteger e aproveitar a viagem sem surpresas desagradáveis.
          </p>
        </div>

        <div className="bg-white rounded-2xl p-5 shadow-sm">
          <h2 className="text-lg font-bold text-gray-800 mb-4">🚨 Golpes mais comuns em CDE</h2>
          <div className="space-y-3">
            {[
              {
                titulo: 'Produto falsificado ou vazio',
                icon: '📦',
                cor: 'red',
                desc: 'A caixa original por fora, mas com produto falso, usado ou até pedra dentro. Comum com eletrônicos e perfumes comprados de ambulantes ou lojas duvidosas.',
                dica: 'Sempre abra e teste o produto na loja antes de pagar. Nunca aceite caixa lacrada sem verificar.'
              },
              {
                titulo: 'Câmbio na rua',
                icon: '💵',
                cor: 'red',
                desc: 'Cambistas oferecem taxas "melhores" nas calçadas, mas usam notas falsas, contam errado ou distraem enquanto trocam as cédulas.',
                dica: 'Nunca faça câmbio na rua. Use apenas casas de câmbio oficiais ou cartão Nomad.'
              },
              {
                titulo: 'Troco errado propositalmente',
                icon: '🪙',
                cor: 'yellow',
                desc: 'Vendedor devolve troco a menos, contando rápido para confundir. Muito comum quando o comprador não conhece a moeda local.',
                dica: 'Conte o troco sempre na frente do vendedor antes de sair do caixa.'
              },
              {
                titulo: 'Abordagem de "guias" na rua',
                icon: '🧑',
                cor: 'yellow',
                desc: 'Pessoas se oferecem para te levar às "melhores lojas" e ganham comissão, fazendo você pagar mais caro sem saber.',
                dica: 'Pesquise as lojas antes de ir. Não siga desconhecidos que abordam na rua.'
              },
              {
                titulo: 'IMEI bloqueado ou reportado',
                icon: '📱',
                cor: 'red',
                desc: 'Celulares com IMEI de aparelho roubado ou bloqueado pela operadora. Funciona na hora, mas para de funcionar dias depois.',
                dica: 'Sempre verifique o IMEI em imei.info antes de pagar. Leva menos de 1 minuto.'
              },
            ].map(({ titulo, icon, cor, desc, dica }) => (
              <div key={titulo} className={`rounded-xl p-4 border ${cor === 'red' ? 'bg-red-50 border-red-100' : 'bg-yellow-50 border-yellow-100'}`}>
                <p className="font-bold text-gray-800 text-sm">{icon} {titulo}</p>
                <p className="text-gray-600 text-xs mt-1">{desc}</p>
                <p className={`text-xs font-semibold mt-2 ${cor === 'red' ? 'text-red-700' : 'text-yellow-700'}`}>✅ Como evitar: {dica}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white rounded-2xl p-5 shadow-sm">
          <h2 className="text-lg font-bold text-gray-800 mb-3">🛡️ Regras de ouro para comprar seguro</h2>
          <div className="space-y-2 text-sm text-gray-600">
            <div className="flex gap-2"><span>1️⃣</span><p><strong>Compre apenas em lojas fixas</strong> com estrutura estabelecida — nunca de ambulantes.</p></div>
            <div className="flex gap-2"><span>2️⃣</span><p><strong>Exija nota fiscal</strong> em toda compra — lojas sérias sempre emitem.</p></div>
            <div className="flex gap-2"><span>3️⃣</span><p><strong>Teste tudo antes de pagar</strong> — ligue o celular, cheire o perfume, verifique a embalagem.</p></div>
            <div className="flex gap-2"><span>4️⃣</span><p><strong>Pague com cartão ou Nomad</strong> — evita problemas com troco e notas falsas.</p></div>
            <div className="flex gap-2"><span>5️⃣</span><p><strong>Não leve muito dinheiro</strong> — leve o necessário para as compras planejadas.</p></div>
          </div>
        </div>

        <div className="bg-green-50 border border-green-100 rounded-2xl p-5">
          <p className="font-bold text-green-800 mb-1">🧮 Calcule o imposto antes de comprar</p>
          <p className="text-green-700 text-sm mb-3">Saiba o preço justo e não pague mais do que deveria.</p>
          <Link href="/" className="block bg-green-500 text-white text-center py-3 rounded-xl font-semibold">Abrir Calculadora →</Link>
        </div>

        <div className="bg-gray-50 rounded-2xl p-4">
          <p className="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-3">Leia também</p>
          <div className="space-y-2">
            <Link href="/lojas-ciudad-del-este" className="flex items-center gap-3 bg-white rounded-xl px-4 py-3 text-sm text-gray-700 border border-gray-100 hover:border-green-300 transition-colors">
              <span className="text-lg">🏪</span><span>Melhores lojas de Ciudad del Este</span><span className="ml-auto text-gray-400">→</span>
            </Link>
            <Link href="/melhor-forma-pagamento-paraguai" className="flex items-center gap-3 bg-white rounded-xl px-4 py-3 text-sm text-gray-700 border border-gray-100 hover:border-green-300 transition-colors">
              <span className="text-lg">💳</span><span>Melhor forma de pagamento no Paraguai</span><span className="ml-auto text-gray-400">→</span>
            </Link>
            <Link href="/como-chegar-ciudad-del-este" className="flex items-center gap-3 bg-white rounded-xl px-4 py-3 text-sm text-gray-700 border border-gray-100 hover:border-green-300 transition-colors">
              <span className="text-lg">🗺️</span><span>Como chegar em Ciudad del Este</span><span className="ml-auto text-gray-400">→</span>
            </Link>
          </div>
        </div>

        <BannerNomad />
      </div>

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": [
          { "@type": "Question", "name": "Quais são os golpes mais comuns em Ciudad del Este?", "acceptedAnswer": { "@type": "Answer", "text": "Os mais comuns são: produto falsificado ou vazio, câmbio na rua com notas falsas, troco errado propositalmente, abordagem de falsos guias e celulares com IMEI bloqueado." } },
          { "@type": "Question", "name": "Como verificar se um celular comprado no Paraguai é original?", "acceptedAnswer": { "@type": "Answer", "text": "Verifique o IMEI em imei.info antes de pagar. Para iPhones, acesse checkcoverage.apple.com. Sempre ligue o aparelho e teste na loja antes de fechar negócio." } },
          { "@type": "Question", "name": "É seguro comprar em Ciudad del Este?", "acceptedAnswer": { "@type": "Answer", "text": "Sim, desde que você compre em lojas fixas e estabelecidas, exija nota fiscal, teste o produto antes de pagar e evite câmbio na rua e ambulantes." } }
        ]
      }) }} />
    </main>
  )
}
