import Link from 'next/link'
import BannerNomad from '../components/BannerNomad'

export const metadata = {
  title: 'Seguro Viagem Paraguai 2026 - Vale a Pena? Quanto Custa? | Calculadora Paraguai',
  description: 'Seguro viagem para o Paraguai em 2026: vale a pena, quanto custa, o que cobre e as melhores opcoes para quem vai a Ciudad del Este ou Pedro Juan Caballero.',
  keywords: 'seguro viagem paraguai, seguro viagem ciudad del este, seguro viagem pedro juan caballero, seguro viagem paraguai 2026',
}

const coberturas = [
  { emoji: '🏥', nome: 'Despesas Medicas', desc: 'Cobre consultas, internacao e emergencias no Paraguai. Essencial — atendimento particular la pode custar caro em dolares.', destaque: true },
  { emoji: '✈️', nome: 'Cancelamento de Viagem', desc: 'Reembolsa passagem e hotel em caso de imprevisto antes da viagem. Util para quem vai de aviao.', destaque: false },
  { emoji: '🧳', nome: 'Extravio de Bagagem', desc: 'Indeniza se a mala sumir ou atrasar. Importante para quem leva eletronicos de volta.', destaque: false },
  { emoji: '🦷', nome: 'Emergencia Odontologica', desc: 'Cobre dor de dente e procedimentos de urgencia. Muitos planos basicos nao incluem — verifique.', destaque: false },
  { emoji: '🚗', nome: 'Responsabilidade Civil', desc: 'Cobre danos que voce cause a terceiros. Importante se for de carro proprio.', destaque: false },
  { emoji: '📞', nome: 'Assistencia 24h', desc: 'Suporte em portugues a qualquer hora. Fundamental em pais estrangeiro com idioma diferente.', destaque: true },
]

const seguradoras = [
  { nome: 'Assist Card', preco: 'A partir de R$ 35', nota: '⭐ Popular', desc: 'Boa cobertura medica e assistencia 24h em portugues. Aceita no Paraguai.' },
  { nome: 'Vital Card', preco: 'A partir de R$ 28', nota: '💰 Custo-beneficio', desc: 'Opcao mais barata com cobertura basica. Boa para viagens curtas de compras.' },
  { nome: 'GTA Seguros', preco: 'A partir de R$ 40', nota: '🏆 Mais completo', desc: 'Cobertura ampla incluindo odonto e cancelamento. Ideal para familias.' },
]

export default function SeguroViagemParaguai() {
  return (
    <main className="min-h-screen bg-gray-50 pb-16">
      <div className="bg-gradient-to-r from-blue-600 to-blue-500 px-5 pt-12 pb-8 text-white">
        <Link href="/" className="text-blue-100 text-sm mb-4 block">← Calculadora</Link>
        <h1 className="text-2xl font-bold">Seguro Viagem Paraguai 2026</h1>
        <p className="text-blue-100 mt-2 text-sm">Vale a pena? Quanto custa e o que cobre para quem vai de compras.</p>
      </div>

      <div className="px-4 py-6 max-w-2xl mx-auto space-y-4">
        <div className="bg-white rounded-2xl p-5 shadow-sm">
          <p className="text-gray-600 text-sm">
            Para viagens curtas de compras ao Paraguai, muita gente pula o seguro viagem — e e um erro. <strong>Atendimento medico particular em Ciudad del Este pode custar US$ 200 ou mais por consulta</strong>. Um seguro basico custa menos de R$ 50 e cobre imprevistos que podem estragar a viagem.
          </p>
        </div>

        <div className="bg-white rounded-2xl p-5 shadow-sm">
          <h2 className="text-lg font-bold text-gray-800 mb-3">O que o seguro cobre?</h2>
          <div className="space-y-3">
            {coberturas.map(item => (
              <div key={item.nome} className="flex gap-3 items-start">
                <span className="text-2xl">{item.emoji}</span>
                <div className="flex-1">
                  <div className="flex items-center gap-2">
                    <p className="font-semibold text-gray-800 text-sm">{item.nome}</p>
                    {item.destaque && <span className="text-xs bg-blue-100 text-blue-700 px-2 py-0.5 rounded-full">Essencial</span>}
                  </div>
                  <p className="text-gray-500 text-xs mt-0.5">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white rounded-2xl p-5 shadow-sm">
          <h2 className="text-lg font-bold text-gray-800 mb-3">💰 Quanto custa?</h2>
          <p className="text-gray-500 text-sm mb-3">Para viagens de 3 a 5 dias ao Paraguai, os precos ficam em torno de:</p>
          <div className="space-y-3">
            {seguradoras.map(s => (
              <div key={s.nome} className="border border-gray-100 rounded-xl p-4">
                <div className="flex justify-between items-center mb-1">
                  <p className="font-bold text-gray-800 text-sm">{s.nome}</p>
                  <span className="text-xs bg-green-100 text-green-700 px-2 py-0.5 rounded-full">{s.nota}</span>
                </div>
                <p className="text-blue-600 font-semibold text-sm">{s.preco}</p>
                <p className="text-gray-500 text-xs mt-1">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-yellow-50 border border-yellow-200 rounded-2xl p-5">
          <h2 className="font-bold text-yellow-800 mb-2">⚠️ O que o seguro NAO cobre</h2>
          <ul className="text-yellow-700 text-sm space-y-1.5">
            <li>• Danos em mercadorias compradas (eletronicos, roupas)</li>
            <li>• Problemas causados por alcool ou drogas</li>
            <li>• Doencas pre-existentes sem declaracao previa</li>
            <li>• Multas e problemas com a Receita Federal</li>
            <li>• Roubo de mercadoria na fronteira</li>
          </ul>
        </div>

        <div className="bg-white rounded-2xl p-5 shadow-sm">
          <h2 className="text-lg font-bold text-gray-800 mb-3">🤔 Vale a pena contratar?</h2>
          <div className="grid grid-cols-2 gap-3 text-sm">
            <div className="bg-green-50 rounded-xl p-3">
              <p className="font-bold text-green-800">Sim, vale</p>
              <ul className="text-green-600 mt-1 text-xs space-y-1">
                <li>• Viagem com criancas</li>
                <li>• Mais de 3 dias</li>
                <li>• Pessoas acima de 60 anos</li>
                <li>• Viagem de carro</li>
              </ul>
            </div>
            <div className="bg-gray-50 rounded-xl p-3">
              <p className="font-bold text-gray-800">Opcional</p>
              <ul className="text-gray-600 mt-1 text-xs space-y-1">
                <li>• Ida rapida de 1 dia</li>
                <li>• Adultos jovens saudaveis</li>
                <li>• Com plano de saude que cobre exterior</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="bg-blue-50 border border-blue-100 rounded-2xl p-5">
          <p className="font-bold text-blue-800 mb-1">💡 Dica</p>
          <p className="text-blue-700 text-sm">Alguns cartoes de credito premium (Visa Infinite, Mastercard Black) ja incluem seguro viagem gratuito. Verifique os beneficios do seu cartao antes de contratar.</p>
        </div>

        <Link href="/lojas-paraguai" className="flex items-center gap-3 bg-white rounded-xl px-4 py-3 text-sm text-gray-700 border border-gray-100 hover:border-blue-300 transition-colors">
          <span className="text-2xl">🏪</span>
          <div>
            <p className="font-bold text-gray-800 text-sm">Melhores lojas do Paraguai</p>
            <p className="text-xs text-gray-500">Shopping China, Flytec, Mobile Zone e mais</p>
          </div>
          <span className="ml-auto text-gray-400">→</span>
        </Link>

        <div className="bg-green-50 border border-green-100 rounded-2xl p-5">
          <p className="font-bold text-green-800 mb-3">🧮 Calcule o preco final das suas compras</p>
          <p className="text-green-600 text-sm mb-4">Com imposto, IOF e cambio real incluidos.</p>
          <Link href="/" className="block bg-green-500 text-white text-center py-3 rounded-xl font-semibold">
            Abrir Calculadora →
          </Link>
        </div>
      
        <BannerNomad />
      </div>
    </main>
  )
}
