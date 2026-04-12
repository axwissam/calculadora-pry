const fs = require('fs');

// ===== SAMSUNG PARAGUAI =====
const samsung = `import Link from 'next/link'
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
                <span className={\`text-xs font-bold px-2 py-0.5 rounded-full \${cota ? 'bg-green-100 text-green-700' : 'bg-yellow-100 text-yellow-700'}\`}>
                  {cota ? '✅ Sem imposto' : \`Economia: \${economia}\`}
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
`;

// ===== AIRPODS PARAGUAI =====
const airpods = `import Link from 'next/link'
import BannerNomad from '../components/BannerNomad'

export const metadata = {
  title: 'AirPods no Paraguai 2026 - Preços e Vale a Pena? | Calculadora Paraguai',
  description: 'Comprar AirPods no Paraguai em 2026 vale a pena? Veja preços do AirPods 4, Pro 2, Max com imposto calculado. Economia de até 40% vs Brasil.',
  keywords: 'airpods paraguai 2026, airpods pro paraguai, airpods max paraguai, preco airpods paraguai, apple paraguai',
}

const modelos = [
  { modelo: 'AirPods 4', preco: 'US$ 129', cota: true, imposto: 'R$ 0', economia: '~35%' },
  { modelo: 'AirPods 4 ANC', preco: 'US$ 179', cota: true, imposto: 'R$ 0', economia: '~35%' },
  { modelo: 'AirPods Pro 2', preco: 'US$ 249', cota: true, imposto: 'R$ 0', economia: '~38%' },
  { modelo: 'AirPods Max (USB-C)', preco: 'US$ 549', cota: false, imposto: '~US$ 25', economia: '~30%' },
]

export default function AirpodsParaguai() {
  return (
    <main className="min-h-screen bg-gray-50 pb-16">
      <div className="bg-gradient-to-r from-green-600 to-green-500 px-5 pt-12 pb-8 text-white">
        <Link href="/" className="text-green-100 text-sm mb-4 block">← Calculadora</Link>
        <h1 className="text-2xl font-bold">AirPods no Paraguai em 2026</h1>
        <p className="text-green-100 mt-2 text-sm">Preços, impostos e qual modelo comprar.</p>
      </div>

      <div className="px-4 py-6 max-w-2xl mx-auto space-y-5">

        <div className="bg-green-50 border border-green-200 rounded-2xl p-5">
          <p className="font-bold text-green-800">✅ AirPods é um dos melhores produtos para comprar no Paraguai</p>
          <p className="text-green-700 text-sm mt-2">Os AirPods custam até <strong>40% menos</strong> que no Brasil e todos os modelos (exceto o Max) cabem dentro da cota de US$ 500 — sem pagar nenhum imposto de importação.</p>
        </div>

        <div className="bg-white rounded-2xl p-5 shadow-sm">
          <h2 className="text-lg font-bold text-gray-800 mb-3">🎧 Preços AirPods no Paraguai 2026</h2>
          <div className="space-y-2">
            {modelos.map(({ modelo, preco, cota, imposto, economia }) => (
              <div key={modelo} className="flex justify-between items-center py-2 border-b border-gray-100 last:border-0">
                <div>
                  <p className="font-medium text-gray-800 text-sm">{modelo}</p>
                  <p className="text-gray-400 text-xs">{preco} · Imposto: {imposto}</p>
                </div>
                <span className={\`text-xs font-bold px-2 py-0.5 rounded-full \${cota ? 'bg-green-100 text-green-700' : 'bg-yellow-100 text-yellow-700'}\`}>
                  {cota ? \`✅ Sem imposto · \${economia}\` : \`Economia: \${economia}\`}
                </span>
              </div>
            ))}
          </div>
          <p className="text-xs text-gray-400 mt-3">* Preços aproximados. Use a calculadora para o valor exato com câmbio do dia.</p>
        </div>

        <div className="bg-white rounded-2xl p-5 shadow-sm">
          <h2 className="text-lg font-bold text-gray-800 mb-3">🥇 Qual AirPods comprar no Paraguai?</h2>
          <div className="space-y-3">
            <div className="bg-green-50 rounded-xl p-4">
              <p className="font-bold text-green-800">Melhor escolha: AirPods Pro 2</p>
              <p className="text-green-700 text-sm mt-1">US$ 249 — cancelamento de ruído ativo, áudio espacial, chip H2. Entra dentro da cota sem pagar imposto. No Brasil custa R$ 2.199 — no Paraguai sai ~R$ 1.310. <strong>Economia de ~R$ 890!</strong></p>
            </div>
            <div className="bg-blue-50 rounded-xl p-4">
              <p className="font-bold text-blue-800">Melhor custo-benefício: AirPods 4</p>
              <p className="text-blue-700 text-sm mt-1">US$ 129 — modelo básico com ótima qualidade de som. No Brasil custa R$ 1.199 — no Paraguai sai ~R$ 680. <strong>Economia de ~R$ 519!</strong></p>
            </div>
            <div className="bg-purple-50 rounded-xl p-4">
              <p className="font-bold text-purple-800">Premium: AirPods Max</p>
              <p className="text-purple-700 text-sm mt-1">US$ 549 — ultrapassa a cota em US$ 49, pagando ~US$ 25 de imposto. Mesmo assim sai bem mais barato que no Brasil (R$ 5.499).</p>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-2xl p-5 shadow-sm">
          <h2 className="text-lg font-bold text-gray-800 mb-3">📦 Posso trazer mais de um AirPods?</h2>
          <p className="text-gray-600 text-sm mb-3">Sim, desde que fique dentro da cota de US$ 500 por pessoa. Exemplos:</p>
          <div className="space-y-2 text-sm">
            <div className="bg-green-50 rounded-xl p-3">
              <p className="text-green-700">2x AirPods 4 (US$ 129 cada) = <strong>US$ 258</strong> — dentro da cota ✅</p>
            </div>
            <div className="bg-green-50 rounded-xl p-3">
              <p className="text-green-700">AirPods Pro 2 (US$ 249) + AirPods 4 (US$ 129) = <strong>US$ 378</strong> — dentro da cota ✅</p>
            </div>
            <div className="bg-yellow-50 rounded-xl p-3">
              <p className="text-yellow-700">AirPods Pro 2 (US$ 249) + AirPods Max (US$ 549) = <strong>US$ 798</strong> — paga imposto sobre US$ 298 ⚠️</p>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-2xl p-5 shadow-sm">
          <h2 className="text-lg font-bold text-gray-800 mb-3">✅ Dicas para comprar AirPods no Paraguai</h2>
          <div className="space-y-2 text-sm text-gray-600">
            <div className="flex gap-2"><span>1️⃣</span><p><strong>Verifique o número de série</strong> em checkcoverage.apple.com — confirma autenticidade e garantia.</p></div>
            <div className="flex gap-2"><span>2️⃣</span><p><strong>Compre em lojas Apple reseller</strong> — Shopping China e Mobile Zone têm produtos originais.</p></div>
            <div className="flex gap-2"><span>3️⃣</span><p><strong>Verifique se a caixa está lacrada</strong> — AirPods originais sempre vêm com lacre intacto.</p></div>
            <div className="flex gap-2"><span>4️⃣</span><p><strong>Exija nota fiscal</strong> — necessária para declarar na Receita Federal.</p></div>
            <div className="flex gap-2"><span>5️⃣</span><p><strong>Combine com outros produtos</strong> — se comprar iPhone + AirPods, distribua pela família para não estourar a cota.</p></div>
          </div>
        </div>

        <div className="bg-white rounded-2xl p-5 shadow-sm">
          <h2 className="text-lg font-bold text-gray-800 mb-3">💰 Comparação de preços Brasil vs Paraguai</h2>
          <div className="space-y-2 text-sm">
            {[
              { modelo: 'AirPods 4', brasil: 'R$ 1.199', paraguai: '~R$ 680', economia: '~R$ 519' },
              { modelo: 'AirPods Pro 2', brasil: 'R$ 2.199', paraguai: '~R$ 1.310', economia: '~R$ 889' },
              { modelo: 'AirPods Max', brasil: 'R$ 5.499', paraguai: '~R$ 3.100', economia: '~R$ 2.400' },
            ].map(({ modelo, brasil, paraguai, economia }) => (
              <div key={modelo} className="bg-gray-50 rounded-xl p-3">
                <p className="font-bold text-gray-800 text-sm">{modelo}</p>
                <div className="flex justify-between text-xs mt-1">
                  <span className="text-gray-500">Brasil: <strong>{brasil}</strong></span>
                  <span className="text-gray-500">Paraguai: <strong>{paraguai}</strong></span>
                  <span className="text-green-700 font-bold">{economia}</span>
                </div>
              </div>
            ))}
          </div>
          <p className="text-gray-400 text-xs mt-2">* Valores aproximados com câmbio de R$ 5,25.</p>
        </div>

        <div className="bg-green-50 border border-green-100 rounded-2xl p-5">
          <p className="font-bold text-green-800 mb-1">🧮 Calcule o preço exato dos seus AirPods</p>
          <p className="text-green-700 text-sm mb-3">Com câmbio real do Banco Central e todos os impostos.</p>
          <Link href="/" className="block bg-green-500 text-white text-center py-3 rounded-xl font-semibold">Abrir Calculadora →</Link>
        </div>

        <BannerNomad />
      </div>
    </main>
  )
}
`;

// ===== MACBOOK PARAGUAI =====
const macbook = `import Link from 'next/link'
import BannerNomad from '../components/BannerNomad'

export const metadata = {
  title: 'MacBook no Paraguai 2026 - Preços e Vale a Pena? | Calculadora Paraguai',
  description: 'Comprar MacBook no Paraguai em 2026 vale a pena? Veja preços do MacBook Air M2, M3, Pro com imposto calculado. Economia de até 30% vs Brasil.',
  keywords: 'macbook paraguai 2026, macbook air paraguai, macbook pro paraguai, preco macbook paraguai, apple notebook paraguai',
}

const modelos = [
  { modelo: 'MacBook Air 13" M2 8GB 256GB', preco: 'US$ 899', cota: false, imposto: '~US$ 200', economia: '~25%' },
  { modelo: 'MacBook Air 13" M3 8GB 256GB', preco: 'US$ 1.099', cota: false, imposto: '~US$ 300', economia: '~22%' },
  { modelo: 'MacBook Air 15" M3 8GB 256GB', preco: 'US$ 1.299', cota: false, imposto: '~US$ 400', economia: '~20%' },
  { modelo: 'MacBook Pro 14" M3 8GB 512GB', preco: 'US$ 1.599', cota: false, imposto: '~US$ 550', economia: '~18%' },
  { modelo: 'MacBook Pro 16" M3 Pro', preco: 'US$ 2.499', cota: false, imposto: '~US$ 1.000', economia: '~15%' },
]

export default function MacbookParaguai() {
  return (
    <main className="min-h-screen bg-gray-50 pb-16">
      <div className="bg-gradient-to-r from-green-600 to-green-500 px-5 pt-12 pb-8 text-white">
        <Link href="/" className="text-green-100 text-sm mb-4 block">← Calculadora</Link>
        <h1 className="text-2xl font-bold">MacBook no Paraguai em 2026</h1>
        <p className="text-green-100 mt-2 text-sm">Preços, impostos e qual modelo vale mais a pena comprar.</p>
      </div>

      <div className="px-4 py-6 max-w-2xl mx-auto space-y-5">

        <div className="bg-green-50 border border-green-200 rounded-2xl p-5">
          <p className="font-bold text-green-800">✅ MacBook no Paraguai é até 30% mais barato que no Brasil</p>
          <p className="text-green-700 text-sm mt-2">Mesmo pagando o imposto de importação de 50% sobre o excedente da cota de US$ 500, o MacBook ainda sai significativamente mais barato do que no Brasil. Para notebooks Apple, o Paraguai é o melhor destino da América do Sul.</p>
        </div>

        <div className="bg-white rounded-2xl p-5 shadow-sm">
          <h2 className="text-lg font-bold text-gray-800 mb-3">💻 Preços MacBook no Paraguai 2026</h2>
          <div className="space-y-2">
            {modelos.map(({ modelo, preco, cota, imposto, economia }) => (
              <div key={modelo} className="flex justify-between items-center py-2 border-b border-gray-100 last:border-0">
                <div>
                  <p className="font-medium text-gray-800 text-sm">{modelo}</p>
                  <p className="text-gray-400 text-xs">{preco} · Imposto: {imposto}</p>
                </div>
                <span className="text-xs font-bold px-2 py-0.5 rounded-full bg-green-100 text-green-700">
                  Economia: {economia}
                </span>
              </div>
            ))}
          </div>
          <p className="text-xs text-gray-400 mt-3">* Preços aproximados. Use a calculadora para o valor exato com câmbio do dia.</p>
        </div>

        <div className="bg-white rounded-2xl p-5 shadow-sm">
          <h2 className="text-lg font-bold text-gray-800 mb-3">🧮 Exemplo de cálculo: MacBook Air M3</h2>
          <div className="bg-gray-50 rounded-xl p-4 font-mono text-sm space-y-1">
            <p className="font-bold text-gray-700">MacBook Air 13" M3 a US$ 1.099</p>
            <p>Excedente = $1.099 - $500 = <strong>$599</strong></p>
            <p>Imposto = $599 × 50% = <strong>$299,50</strong></p>
            <p>Imposto em reais = $299,50 × R$ 5,25 = <strong>~R$ 1.572</strong></p>
            <p>Preço MacBook = $1.099 × R$ 5,25 = <strong>~R$ 5.770</strong></p>
            <p className="text-green-600 font-bold mt-1">Total com imposto ≈ R$ 7.342</p>
            <p className="text-gray-500 text-xs">Brasil: R$ 11.999+ — Economia de ~R$ 4.657 ✅</p>
          </div>
        </div>

        <div className="bg-white rounded-2xl p-5 shadow-sm">
          <h2 className="text-lg font-bold text-gray-800 mb-3">💰 Comparação Brasil vs Paraguai</h2>
          <div className="space-y-2 text-sm">
            {[
              { modelo: 'MacBook Air M2 13"', brasil: 'R$ 9.999', paraguai: '~R$ 5.880', economia: '~R$ 4.100' },
              { modelo: 'MacBook Air M3 13"', brasil: 'R$ 11.999', paraguai: '~R$ 7.342', economia: '~R$ 4.657' },
              { modelo: 'MacBook Pro 14" M3', brasil: 'R$ 17.999', paraguai: '~R$ 11.500', economia: '~R$ 6.500' },
            ].map(({ modelo, brasil, paraguai, economia }) => (
              <div key={modelo} className="bg-gray-50 rounded-xl p-3">
                <p className="font-bold text-gray-800 text-sm">{modelo}</p>
                <div className="flex justify-between text-xs mt-1">
                  <span className="text-gray-500">Brasil: <strong>{brasil}</strong></span>
                  <span className="text-gray-500">Paraguai c/ imposto: <strong>{paraguai}</strong></span>
                  <span className="text-green-700 font-bold">{economia}</span>
                </div>
              </div>
            ))}
          </div>
          <p className="text-gray-400 text-xs mt-2">* Valores aproximados com câmbio de R$ 5,25.</p>
        </div>

        <div className="bg-white rounded-2xl p-5 shadow-sm">
          <h2 className="text-lg font-bold text-gray-800 mb-3">🎯 Qual MacBook comprar no Paraguai?</h2>
          <div className="space-y-3">
            <div className="bg-green-50 rounded-xl p-4">
              <p className="font-bold text-green-800">Para estudantes e uso geral: MacBook Air M3 13"</p>
              <p className="text-green-700 text-sm mt-1">Melhor equilíbrio entre preço e performance. Leve, bateria de 18h e chip M3 muito rápido para o dia a dia.</p>
            </div>
            <div className="bg-blue-50 rounded-xl p-4">
              <p className="font-bold text-blue-800">Para trabalho pesado: MacBook Pro 14" M3</p>
              <p className="text-blue-700 text-sm mt-1">Ideal para edição de vídeo, design e programação. Tela mini-LED incrível e performance profissional.</p>
            </div>
            <div className="bg-yellow-50 rounded-xl p-4">
              <p className="font-bold text-yellow-800">Economia máxima: MacBook Air M2</p>
              <p className="text-yellow-700 text-sm mt-1">O M2 ainda é excelente e costuma ter preço menor. Boa opção para quem quer economizar mais.</p>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-2xl p-5 shadow-sm">
          <h2 className="text-lg font-bold text-gray-800 mb-3">✅ Dicas para comprar MacBook no Paraguai</h2>
          <div className="space-y-2 text-sm text-gray-600">
            <div className="flex gap-2"><span>1️⃣</span><p><strong>Verifique o número de série</strong> em checkcoverage.apple.com — confirma autenticidade e cobertura da garantia Apple.</p></div>
            <div className="flex gap-2"><span>2️⃣</span><p><strong>Prefira modelo americano (A)</strong> — teclado em inglês mas funciona perfeitamente no Brasil com garantia mundial.</p></div>
            <div className="flex gap-2"><span>3️⃣</span><p><strong>Declare obrigatoriamente</strong> — todos os MacBooks ultrapassam a cota de US$ 500. Use o app e-DBV antes de cruzar a ponte.</p></div>
            <div className="flex gap-2"><span>4️⃣</span><p><strong>Exija nota fiscal</strong> — necessária para declarar e para acionar a garantia.</p></div>
            <div className="flex gap-2"><span>5️⃣</span><p><strong>Compre em lojas confiáveis</strong> — Flytec Computers e Visão VIP têm boa reputação para notebooks Apple.</p></div>
          </div>
        </div>

        <Link href="/lojas-paraguai" className="flex items-center gap-3 bg-white rounded-xl px-4 py-3 text-sm text-gray-700 border border-gray-100 hover:border-green-300 transition-colors">
          <span className="text-2xl">🏪</span>
          <div>
            <p className="font-bold text-gray-800 text-sm">Ver melhores lojas do Paraguai</p>
            <p className="text-xs text-gray-500">Flytec, Visão VIP, Shopping China e mais</p>
          </div>
          <span className="ml-auto text-gray-400">→</span>
        </Link>

        <div className="bg-green-50 border border-green-100 rounded-2xl p-5">
          <p className="font-bold text-green-800 mb-1">🧮 Calcule o preço exato do seu MacBook</p>
          <p className="text-green-700 text-sm mb-3">Com câmbio real do Banco Central e imposto de importação incluído.</p>
          <Link href="/" className="block bg-green-500 text-white text-center py-3 rounded-xl font-semibold">Abrir Calculadora →</Link>
        </div>

        <BannerNomad />
      </div>
    </main>
  )
}
`;

fs.mkdirSync('app/samsung-paraguai', { recursive: true });
fs.writeFileSync('app/samsung-paraguai/page.jsx', samsung);
console.log('OK: samsung-paraguai');

fs.mkdirSync('app/airpods-paraguai', { recursive: true });
fs.writeFileSync('app/airpods-paraguai/page.jsx', airpods);
console.log('OK: airpods-paraguai');

fs.mkdirSync('app/macbook-paraguai', { recursive: true });
fs.writeFileSync('app/macbook-paraguai/page.jsx', macbook);
console.log('OK: macbook-paraguai');

// Atualiza sitemap
let sitemap = fs.readFileSync('app/sitemap.js', 'utf8');
const oldEntry = "{ url: \`\${base}/celular-paraguai\`";
const newEntries = `{ url: \`\${base}/samsung-paraguai\`,                     lastModified: new Date(), changeFrequency: 'monthly', priority: 0.9 },
    { url: \`\${base}/airpods-paraguai\`,                     lastModified: new Date(), changeFrequency: 'monthly', priority: 0.9 },
    { url: \`\${base}/macbook-paraguai\`,                     lastModified: new Date(), changeFrequency: 'monthly', priority: 0.9 },
    { url: \`\${base}/celular-paraguai\``;

if (sitemap.includes(oldEntry)) {
  sitemap = sitemap.replace(oldEntry, newEntries);
  fs.writeFileSync('app/sitemap.js', sitemap);
  console.log('OK: sitemap atualizado com 24 paginas');
} else {
  console.log('AVISO: sitemap nao atualizado - entrada nao encontrada');
}
