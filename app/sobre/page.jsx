import Link from 'next/link'
import BannerNomad from '../components/BannerNomad'

export const metadata = {
  title: 'Sobre — Calculadora de Compras do Paraguai | Calculadora Paraguai',
  description: 'Conheça a Calculadora Paraguai, a ferramenta gratuita que ajuda brasileiros a calcular o imposto de importação e planejar compras em Ciudad del Este.',
  keywords: 'sobre calculadora paraguai, cotaparaguai, calculadora imposto paraguai, quem fez calculadora paraguai',
}

export default function Sobre() {
  return (
    <main className="min-h-screen bg-gray-50 pb-16">
      <div className="bg-gradient-to-r from-green-600 to-green-500 px-5 pt-12 pb-8 text-white">
        <Link href="/" className="text-green-100 text-sm mb-4 block">← Calculadora</Link>
        <h1 className="text-2xl font-bold">Sobre o Calculadora Paraguai</h1>
        <p className="text-green-100 mt-2 text-sm">A ferramenta gratuita para quem compra em Ciudad del Este.</p>
      </div>

      <div className="px-4 py-6 max-w-2xl mx-auto space-y-5">

        <div className="bg-white rounded-2xl p-5 shadow-sm">
          <h2 className="text-lg font-bold text-gray-800 mb-3">🎯 O que é o Calculadora Paraguai?</h2>
          <p className="text-gray-600 text-sm leading-relaxed">
            O <strong>Calculadora Paraguai</strong> é uma ferramenta gratuita criada para ajudar os brasileiros a planejar suas compras em Ciudad del Este com mais segurança e transparência. Chega de chegar na fronteira sem saber quanto vai pagar de imposto ou se a compra realmente vale a pena.
          </p>
          <p className="text-gray-600 text-sm leading-relaxed mt-3">
            Com nossa calculadora, você descobre em segundos quanto vai pagar no total — incluindo imposto de importação — usando a cotação real do dólar do Banco Central do Brasil, atualizada todos os dias úteis.
          </p>
        </div>

        <div className="bg-white rounded-2xl p-5 shadow-sm">
          <h2 className="text-lg font-bold text-gray-800 mb-4">✅ O que você encontra aqui</h2>
          <div className="space-y-3">
            {[
              { icon: '🧮', titulo: 'Calculadora de Imposto', desc: 'Calcule o imposto de importação de qualquer produto com câmbio real do Banco Central.' },
              { icon: '📱', titulo: 'Preços de Produtos', desc: 'Tabelas com preços reais de iPhone, Samsung, MacBook, PS5, perfumes e mais.' },
              { icon: '📋', titulo: 'Guias Completos', desc: 'Tudo sobre a alfândega, cota de US$ 500, como declarar e o que pode trazer.' },
              { icon: '🏪', titulo: 'Guia de Lojas', desc: 'As melhores lojas de Ciudad del Este com dicas de onde comprar com segurança.' },
              { icon: '💳', titulo: 'Dicas de Pagamento', desc: 'Como pagar no Paraguai sem perder dinheiro com IOF e spread cambial.' },
            ].map(({ icon, titulo, desc }) => (
              <div key={titulo} className="flex gap-3 bg-gray-50 rounded-xl p-3">
                <span className="text-2xl">{icon}</span>
                <div>
                  <p className="font-bold text-gray-800 text-sm">{titulo}</p>
                  <p className="text-gray-500 text-xs mt-0.5">{desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white rounded-2xl p-5 shadow-sm">
          <h2 className="text-lg font-bold text-gray-800 mb-3">🌎 Por que criamos esse site?</h2>
          <p className="text-gray-600 text-sm leading-relaxed">
            Milhares de brasileiros cruzam a Ponte da Amizade todo mês para fazer compras em Ciudad del Este. Mas muitos chegam sem saber exatamente quanto vão pagar de imposto, qual é a cota de isenção ou como declarar na Receita Federal. Isso gera estresse, surpresas desagradáveis e até confisco de produtos na volta.
          </p>
          <p className="text-gray-600 text-sm leading-relaxed mt-3">
            Criamos o Calculadora Paraguai para resolver esse problema de forma simples, gratuita e acessível pelo celular — porque a maioria das pessoas pesquisa no smartphone enquanto ainda está no Paraguai.
          </p>
        </div>

        <div className="bg-white rounded-2xl p-5 shadow-sm">
          <h2 className="text-lg font-bold text-gray-800 mb-3">📊 Como funciona a cotação?</h2>
          <p className="text-gray-600 text-sm leading-relaxed">
            Usamos a cotação PTAX do <strong>Banco Central do Brasil</strong>, que é a mesma taxa usada pela Receita Federal para calcular o imposto de importação. A cotação é atualizada automaticamente todos os dias úteis, garantindo que o cálculo seja sempre preciso e confiável.
          </p>
        </div>

        <div className="bg-green-50 border border-green-100 rounded-2xl p-5">
          <p className="font-bold text-green-800 mb-1">🧮 Experimente a calculadora agora</p>
          <p className="text-green-700 text-sm mb-3">Gratuita, sem cadastro e com câmbio real do Banco Central.</p>
          <Link href="/" className="block bg-green-500 text-white text-center py-3 rounded-xl font-semibold">Abrir Calculadora →</Link>
        </div>

        <div className="bg-white rounded-2xl p-5 shadow-sm">
          <h2 className="text-lg font-bold text-gray-800 mb-3">📬 Contato</h2>
          <p className="text-gray-600 text-sm">
            Encontrou algum erro, tem uma sugestão ou quer entrar em contato? Acesse nossa{' '}
            <Link href="/privacidade" className="text-green-600 font-semibold hover:underline">página de contato</Link>
            {' '}e envie uma mensagem. Respondemos em até 48 horas.
          </p>
        </div>

        <BannerNomad />
      </div>
    </main>
  )
}
