import Link from 'next/link'
import BannerNomad from '../components/BannerNomad'

export const metadata = {
  title: 'Como Chegar em Ciudad del Este 2026 — Guia Completo | Calculadora Paraguai',
  description: 'Como chegar em Ciudad del Este de forma fácil e segura em 2026. De carro, ônibus ou avião saindo de qualquer cidade do Brasil — tudo que você precisa saber.',
  keywords: 'como chegar ciudad del este, como ir ao paraguai, onibus para ciudad del este, distancia foz do iguacu paraguai, travessia ponte da amizade',
}

export default function ComoChegar() {
  return (
    <main className="min-h-screen bg-gray-50 pb-16">
      <div className="bg-gradient-to-r from-green-600 to-green-500 px-5 pt-12 pb-8 text-white">
        <Link href="/" className="text-green-100 text-sm mb-4 block">← Calculadora</Link>
        <h1 className="text-2xl font-bold">Como Chegar em Ciudad del Este 2026</h1>
        <p className="text-green-100 mt-2 text-sm">De carro, ônibus ou avião — o guia completo para chegar com segurança.</p>
      </div>

      <div className="px-4 py-6 max-w-2xl mx-auto space-y-5">

        <div className="bg-white rounded-2xl p-5 shadow-sm">
          <p className="text-gray-600 text-sm leading-relaxed">
            Ciudad del Este fica no Paraguai, logo do outro lado da Ponte da Amizade a partir de Foz do Iguaçu, no Paraná. É uma das fronteiras mais movimentadas da América do Sul, com milhares de brasileiros cruzando todos os dias para fazer compras. A travessia é simples, mas exige atenção com documentos e horários.
          </p>
        </div>

        <div className="bg-white rounded-2xl p-5 shadow-sm">
          <h2 className="text-lg font-bold text-gray-800 mb-4">🚗 De carro saindo do Brasil</h2>
          <div className="space-y-2 text-sm text-gray-600">
            <div className="flex gap-2 bg-gray-50 rounded-xl p-3"><span>1️⃣</span><p>Dirija até <strong>Foz do Iguaçu (PR)</strong> — principal cidade de acesso à fronteira.</p></div>
            <div className="flex gap-2 bg-gray-50 rounded-xl p-3"><span>2️⃣</span><p>Siga pela <strong>Av. das Cataratas</strong> até a <strong>Ponte da Amizade</strong>. Há placas indicativas em toda a cidade.</p></div>
            <div className="flex gap-2 bg-gray-50 rounded-xl p-3"><span>3️⃣</span><p>Na fronteira brasileira, pare na <strong>Receita Federal</strong> se for declarar compras na volta.</p></div>
            <div className="flex gap-2 bg-gray-50 rounded-xl p-3"><span>4️⃣</span><p>Após cruzar a ponte, você estará em Ciudad del Este. O centro comercial fica a menos de 5 minutos.</p></div>
            <div className="flex gap-2 bg-yellow-50 rounded-xl p-3"><span>⚠️</span><p><strong>Atenção:</strong> leve apenas RG ou CNH — passaporte não é obrigatório para brasileiros.</p></div>
          </div>
        </div>

        <div className="bg-white rounded-2xl p-5 shadow-sm">
          <h2 className="text-lg font-bold text-gray-800 mb-4">🚌 De ônibus</h2>
          <div className="space-y-3 text-sm text-gray-600">
            <div className="bg-blue-50 rounded-xl p-3">
              <p className="font-bold text-blue-800">De outras cidades até Foz do Iguaçu</p>
              <p className="text-blue-700 mt-1">Há ônibus diretos de São Paulo (~14h), Curitiba (~9h), Campo Grande (~9h) e outras capitais até Foz do Iguaçu. De lá, pegue um ônibus local até a fronteira.</p>
            </div>
            <div className="bg-blue-50 rounded-xl p-3">
              <p className="font-bold text-blue-800">Ônibus urbano Foz → CDE</p>
              <p className="text-blue-700 mt-1">Dentro de Foz do Iguaçu, o ônibus da linha <strong>Foz-CDE</strong> sai da rodoviária local e cruza a ponte até Ciudad del Este por cerca de R$ 8. É a opção mais barata e prática.</p>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-2xl p-5 shadow-sm">
          <h2 className="text-lg font-bold text-gray-800 mb-3">✈️ De avião</h2>
          <p className="text-gray-600 text-sm leading-relaxed">
            O aeroporto mais próximo é o <strong>Aeroporto Internacional de Foz do Iguaçu (IGU)</strong>, com voos diretos de São Paulo, Curitiba e outras cidades. Do aeroporto até a Ponte da Amizade são cerca de 20 minutos de táxi ou aplicativo.
          </p>
        </div>

        <div className="bg-white rounded-2xl p-5 shadow-sm">
          <h2 className="text-lg font-bold text-gray-800 mb-3">🕐 Horários e dicas importantes</h2>
          <div className="space-y-2 text-sm text-gray-600">
            <div className="flex gap-2"><span>🌅</span><p><strong>Chegue cedo:</strong> a fronteira abre às 7h. Quanto mais cedo, menos fila tanto na ida quanto na volta.</p></div>
            <div className="flex gap-2"><span>📅</span><p><strong>Evite sábado:</strong> é o dia mais movimentado. Prefira terça, quarta ou quinta-feira.</p></div>
            <div className="flex gap-2"><span>📱</span><p><strong>Use o app e-DBV</strong> da Receita Federal antes de voltar para declarar as compras e agilizar a passagem.</p></div>
            <div className="flex gap-2"><span>🌧️</span><p><strong>Chuva atrasa tudo:</strong> dias chuvosos aumentam muito o tempo de espera na fronteira.</p></div>
          </div>
        </div>

        <div className="bg-green-50 border border-green-100 rounded-2xl p-5">
          <p className="font-bold text-green-800 mb-1">🧮 Calcule o imposto antes de ir</p>
          <p className="text-green-700 text-sm mb-3">Saiba exatamente quanto vai pagar com câmbio real do Banco Central.</p>
          <Link href="/" className="block bg-green-500 text-white text-center py-3 rounded-xl font-semibold">Abrir Calculadora →</Link>
        </div>

        <div className="bg-gray-50 rounded-2xl p-4">
          <p className="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-3">Leia também</p>
          <div className="space-y-2">
            <Link href="/alfandega-paraguai" className="flex items-center gap-3 bg-white rounded-xl px-4 py-3 text-sm text-gray-700 border border-gray-100 hover:border-green-300 transition-colors">
              <span className="text-lg">🛃</span><span>Alfândega do Paraguai — regras e cota</span><span className="ml-auto text-gray-400">→</span>
            </Link>
            <Link href="/como-nao-cair-em-golpes-paraguai" className="flex items-center gap-3 bg-white rounded-xl px-4 py-3 text-sm text-gray-700 border border-gray-100 hover:border-green-300 transition-colors">
              <span className="text-lg">🚨</span><span>Como não cair em golpes no Paraguai</span><span className="ml-auto text-gray-400">→</span>
            </Link>
            <Link href="/lojas-ciudad-del-este" className="flex items-center gap-3 bg-white rounded-xl px-4 py-3 text-sm text-gray-700 border border-gray-100 hover:border-green-300 transition-colors">
              <span className="text-lg">🏪</span><span>Melhores lojas de Ciudad del Este</span><span className="ml-auto text-gray-400">→</span>
            </Link>
          </div>
        </div>

        <BannerNomad />
      </div>

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": [
          { "@type": "Question", "name": "Como chegar em Ciudad del Este saindo do Brasil?", "acceptedAnswer": { "@type": "Answer", "text": "A entrada principal é pela Ponte da Amizade em Foz do Iguaçu (PR). De carro, siga pela Av. das Cataratas até a ponte. De ônibus, há linha urbana saindo da rodoviária de Foz por cerca de R$ 8." } },
          { "@type": "Question", "name": "Precisa de passaporte para entrar no Paraguai?", "acceptedAnswer": { "@type": "Answer", "text": "Não. Brasileiros podem entrar no Paraguai apenas com RG ou CNH válidos. Passaporte não é obrigatório." } },
          { "@type": "Question", "name": "Qual o melhor dia para ir a Ciudad del Este?", "acceptedAnswer": { "@type": "Answer", "text": "Prefira dias de semana, especialmente terça, quarta ou quinta-feira. Sábado é o dia mais movimentado com maior tempo de espera na fronteira." } }
        ]
      }) }} />
    </main>
  )
}
