import Link from 'next/link'
import BannerNomad from '../components/BannerNomad'

export const metadata = {
  title: 'Samsung no Paraguai 2026 - Preços e Vale a Pena? | Calculadora Paraguai',
  description: 'Comprar Samsung no Paraguai em 2026 vale a pena? Veja preços do Galaxy S24, A55, tablets e smartwatches com imposto calculado em reais.',
  keywords: 'samsung paraguai 2026, galaxy s24 paraguai, samsung ciudad del este, preco samsung paraguai, vale a pena samsung paraguai',
}

const modelos = [
  { modelo: 'Galaxy S24 128GB', preco: 'US$ 699', cota: false, imposto: '~US$ 100', economia: '~25%' },
  { modelo: 'Galaxy S24+ 256GB', preco: 'US$ 899', cota: false, imposto: '~US$ 200', economia: '~22%' },
  { modelo: 'Galaxy S24 Ultra 256GB', preco: 'US$ 1.199', cota: false, imposto: '~US$ 350', economia: '~20%' },
  { modelo: 'Galaxy A55 5G 256GB', preco: 'US$ 379', cota: true, imposto: 'R$ 0', economia: '~30%' },
  { modelo: 'Galaxy A35 5G 128GB', preco: 'US$ 279', cota: true, imposto: 'R$ 0', economia: '~28%' },
  { modelo: 'Galaxy Tab S9 FE', preco: 'US$ 399', cota: true, imposto: 'R$ 0', economia: '~25%' },
  { modelo: 'Galaxy Watch 6', preco: 'US$ 249', cota: true, imposto: 'R$ 0', economia: '~30%' },
]

export default function SamsungParaguai() {
  return (
    <main className="min-h-screen bg-gray-50 pb-16">
      <div className="bg-gradient-to-r from-green-600 to-green-500 px-5 pt-12 pb-8 text-white">
        <Link href="/" className="text-green-100 text-sm mb-4 block">← Calculadora</Link>
        <h1 className="text-2xl font-bold">Samsung no Paraguai em 2026</h1>
        <p className="text-green-100 mt-2 text-sm">Preços, impostos e tudo que você precisa saber antes de comprar.</p>
      </div>

      <div className="px-4 py-6 max-w-2xl mx-auto space-y-5">

        <div className="bg-green-50 border border-green-200 rounded-2xl p-5">
          <p className="font-bold text-green-800">✅ Vale muito a pena comprar Samsung no Paraguai</p>
          <p className="text-green-700 text-sm mt-2">Os celulares Samsung chegam a custar <strong>20% a 30% menos</strong> do que no Brasil, mesmo após pagar o imposto de importação. Os modelos da linha A cabem dentro da cota de US$ 500 e entram sem nenhum imposto.</p>
        </div>

        <div className="bg-white rounded-2xl p-5 shadow-sm">
          <h2 className="text-lg font-bold text-gray-800 mb-3">📱 Preços Samsung no Paraguai 2026</h2>
          <div className="space-y-2">
            {modelos.map(({ modelo, preco, cota, imposto, economia }) => (
              <div key={modelo} className="flex justify-between items-center py-2 border-b border-gray-100 last:border-0">
                <div>
                  <p className="font-medium text-gray-800 text-sm">{modelo}</p>
                  <p className="text-gray-400 text-xs">{preco} · Imposto: {imposto}</p>
                </div>
                <span className={`text-xs font-bold px-2 py-0.5 rounded-full ${cota ? 'bg-green-100 text-green-700' : 'bg-yellow-100 text-yellow-700'}`}>
                  {cota ? '✅ Sem imposto' : `Economia: ${economia}`}
                </span>
              </div>
            ))}
          </div>
          <p className="text-xs text-gray-400 mt-3">* Preços aproximados. Use a calculadora para o valor exato com câmbio do dia.</p>
        </div>

        <div className="bg-white rounded-2xl p-5 shadow-sm">
          <h2 className="text-lg font-bold text-gray-800 mb-3">🆚 Samsung vs iPhone no Paraguai</h2>
          <p className="text-gray-600 text-sm mb-3">Ambas as marcas têm ótimo preço no Paraguai, mas a Samsung leva vantagem em modelos intermediários — a linha Galaxy A oferece excelente custo-benefício e cabe na cota de US$ 500.</p>
          <div className="space-y-2 text-sm">
            {[
              { item: 'Linha intermediária (A35, A55)', samsung: '✅ Dentro da cota', iphone: '❌ Estoura cota' },
              { item: 'Topo de linha', samsung: '🟡 Paga imposto', iphone: '🟡 Paga imposto' },
              { item: 'Garantia no Brasil', samsung: '✅ Autorizada', iphone: '✅ Modelo americano' },
              { item: 'Variedade de modelos', samsung: '✅ Muito maior', iphone: '🟡 Limitada' },
            ].map(({ item, samsung, iphone }) => (
              <div key={item} className="grid grid-cols-3 gap-2 py-1.5 border-b border-gray-50 text-xs">
                <span className="text-gray-700 font-medium">{item}</span>
                <span className="text-center">{samsung}</span>
                <span className="text-center">{iphone}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white rounded-2xl p-5 shadow-sm">
          <h2 className="text-lg font-bold text-gray-800 mb-3">💡 Qual Samsung comprar no Paraguai?</h2>
          <div className="space-y-3">
            <div className="bg-green-50 rounded-xl p-3">
              <p className="font-bold text-green-800 text-sm">🥇 Melhor custo-benefício: Galaxy A55 5G</p>
              <p className="text-green-700 text-xs mt-1">US$ 379 — entra dentro da cota, 5G, câmera excelente. Maior economia relativa.</p>
            </div>
            <div className="bg-blue-50 rounded-xl p-3">
              <p className="font-bold text-blue-800 text-sm">🥈 Melhor topo de linha: Galaxy S24</p>
              <p className="text-blue-700 text-xs mt-1">US$ 699 — paga ~US$ 100 de imposto mas ainda sai muito mais barato que no Brasil.</p>
            </div>
            <div className="bg-purple-50 rounded-xl p-3">
              <p className="font-bold text-purple-800 text-sm">🥉 Melhor tablet: Galaxy Tab S9 FE</p>
              <p className="text-purple-700 text-xs mt-1">US$ 399 — dentro da cota, ótima tela e desempenho para o preço.</p>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-2xl p-5 shadow-sm">
          <h2 className="text-lg font-bold text-gray-800 mb-3">✅ Dicas para comprar Samsung no Paraguai</h2>
          <div className="space-y-2 text-sm text-gray-600">
            <div className="flex gap-2"><span>1️⃣</span><p><strong>Prefira modelos com versão global</strong> — funcionam com todas as operadoras brasileiras e têm suporte no Brasil.</p></div>
            <div className="flex gap-2"><span>2️⃣</span><p><strong>Verifique o IMEI</strong> antes de pagar — confirme que não está bloqueado ou reportado como roubado.</p></div>
            <div className="flex gap-2"><span>3️⃣</span><p><strong>Exija nota fiscal</strong> — obrigatória para declarar na Receita Federal e comprovar origem na garantia.</p></div>
            <div className="flex gap-2"><span>4️⃣</span><p><strong>Compre em lojas confiáveis</strong> — Mobile Zone, Shopping China e Flytec têm boa reputação com brasileiros.</p></div>
            <div className="flex gap-2"><span>5️⃣</span><p><strong>Pague em dinheiro ou Nomad</strong> — evita IOF de 3,5% e spread de cartões comuns.</p></div>
          </div>
        </div>

        <div className="bg-white rounded-2xl p-5 shadow-sm">
          <h2 className="text-lg font-bold text-gray-800 mb-3">🧮 Como calcular o imposto do Samsung</h2>
          <div className="bg-gray-50 rounded-xl p-4 font-mono text-sm">
            <p className="font-bold text-gray-700">Exemplo: Galaxy S24 a US$ 699</p>
            <p className="mt-1">Excedente = $699 - $500 = <strong>$199</strong></p>
            <p>Imposto = $199 × 50% = <strong>$99,50</strong></p>
            <p>Em reais ≈ $99,50 × R$ 5,80 = <strong>~R$ 577</strong></p>
            <p className="mt-2 text-green-600 font-bold">Total ≈ R$ 4.630 (Brasil: R$ 6.000+) ✅</p>
          </div>
        </div>

        
        <div className="bg-gray-50 rounded-2xl p-4">
          <p className="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-3">Leia também</p>
          <div className="space-y-2">
            <Link href="/celular-paraguai" className="flex items-center gap-3 bg-white rounded-xl px-4 py-3 text-sm text-gray-700 border border-gray-100 hover:border-green-300 transition-colors">
              <span className="text-lg">📱</span>
              <span>Celular no Paraguai</span>
              <span className="ml-auto text-gray-400">→</span>
            </Link>
            <Link href="/imposto-iphone-paraguai" className="flex items-center gap-3 bg-white rounded-xl px-4 py-3 text-sm text-gray-700 border border-gray-100 hover:border-green-300 transition-colors">
              <span className="text-lg">📱</span>
              <span>Imposto iPhone Paraguai</span>
              <span className="ml-auto text-gray-400">→</span>
            </Link>
            <Link href="/melhor-forma-pagamento-paraguai" className="flex items-center gap-3 bg-white rounded-xl px-4 py-3 text-sm text-gray-700 border border-gray-100 hover:border-green-300 transition-colors">
              <span className="text-lg">💳</span>
              <span>Melhor forma de pagamento</span>
              <span className="ml-auto text-gray-400">→</span>
            </Link>
          </div>
        </div>
        <Link href="/lojas-paraguai" className="flex items-center gap-3 bg-white rounded-xl px-4 py-3 text-sm text-gray-700 border border-gray-100 hover:border-green-300 transition-colors">
          <span className="text-2xl">🏪</span>
          <div>
            <p className="font-bold text-gray-800 text-sm">Ver melhores lojas do Paraguai</p>
            <p className="text-xs text-gray-500">Mobile Zone, Shopping China, Flytec e mais</p>
          </div>
          <span className="ml-auto text-gray-400">→</span>
        </Link>

        <div className="bg-green-50 border border-green-100 rounded-2xl p-5">
          <p className="font-bold text-green-800 mb-1">🧮 Calcule o preço exato do seu Samsung</p>
          <p className="text-green-700 text-sm mb-3">Com câmbio real do Banco Central e todos os impostos.</p>
          <Link href="/" className="block bg-green-500 text-white text-center py-3 rounded-xl font-semibold">Abrir Calculadora →</Link>
        </div>

        <BannerNomad />
      </div>
    </main>
  )
}
