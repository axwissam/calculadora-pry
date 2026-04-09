import Link from 'next/link'
import BannerNomad from '../components/BannerNomad'

export const metadata = {
  title: 'Imposto iPhone Paraguai 2026 - Quanto pagar? | Calculadora Paraguai',
  description: 'Quanto de imposto voce paga para trazer iPhone do Paraguai em 2026? Tabela completa com iPhone 15, 16, SE. Calcule o preco final com cota, IOF e cambio real.',
  keywords: 'imposto iphone paraguai, iphone paraguai 2026, vale a pena iphone paraguai, iphone 16 paraguai preco, iphone mais barato paraguai',
}

const modelos = [
  { modelo: 'iPhone SE (3a geracao)', preco: 'US$ 429', entra_cota: true, imposto_est: 'R$ 0', economia: '~30%' },
  { modelo: 'iPhone 15 128GB', preco: 'US$ 699', entra_cota: false, imposto_est: '~US$ 100', economia: '~25%' },
  { modelo: 'iPhone 15 Plus 128GB', preco: 'US$ 799', entra_cota: false, imposto_est: '~US$ 150', economia: '~25%' },
  { modelo: 'iPhone 15 Pro 128GB', preco: 'US$ 999', entra_cota: false, imposto_est: '~US$ 250', economia: '~20%' },
  { modelo: 'iPhone 16 128GB', preco: 'US$ 799', entra_cota: false, imposto_est: '~US$ 150', economia: '~25%' },
  { modelo: 'iPhone 16 Pro 128GB', preco: 'US$ 1.099', entra_cota: false, imposto_est: '~US$ 300', economia: '~20%' },
  { modelo: 'iPhone 16 Pro Max 256GB', preco: 'US$ 1.299', entra_cota: false, imposto_est: '~US$ 400', economia: '~18%' },
]

export default function ImpostoIphoneParaguai() {
  return (
    <main className="min-h-screen bg-gray-50 pb-16">
      <div className="bg-gradient-to-r from-green-600 to-green-500 px-5 pt-12 pb-8 text-white">
        <Link href="/" className="text-green-100 text-sm mb-4 block">← Calculadora</Link>
        <h1 className="text-2xl font-bold">Imposto iPhone Paraguai 2026</h1>
        <p className="text-green-100 mt-2 text-sm">Quanto custa trazer iPhone do Paraguai com todos os impostos.</p>
      </div>
      <div className="px-4 py-6 max-w-2xl mx-auto space-y-5">

        <div className="bg-yellow-50 border border-yellow-200 rounded-2xl p-5">
          <p className="font-bold text-yellow-800">⚠️ A maioria dos iPhones estoura a cota de US$ 500</p>
          <p className="text-yellow-700 text-sm mt-2">Apenas o iPhone SE cabe dentro da cota sem pagar imposto. Os demais modelos pagam 50% sobre o valor que ultrapassar US$ 500.</p>
        </div>

        <div className="bg-white rounded-2xl p-5 shadow-sm">
          <h2 className="text-lg font-bold text-gray-800 mb-3">📱 Imposto por modelo em 2026</h2>
          <div className="space-y-2">
            {modelos.map(({ modelo, preco, entra_cota, imposto_est, economia }) => (
              <div key={modelo} className="flex justify-between items-center py-2 border-b border-gray-100 last:border-0">
                <div>
                  <p className="font-medium text-gray-800 text-sm">{modelo}</p>
                  <p className="text-gray-400 text-xs">{preco} no Paraguai</p>
                </div>
                <div className="text-right">
                  <span className={`text-xs font-bold px-2 py-0.5 rounded-full ${entra_cota ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'}`}>
                    {entra_cota ? '✅ Sem imposto' : '⚠️ Paga imposto'}
                  </span>
                  <p className="text-xs text-gray-500 mt-0.5">Imposto: {imposto_est}</p>
                </div>
              </div>
            ))}
          </div>
          <p className="text-xs text-gray-400 mt-3">* Preços aproximados. Use a calculadora para o valor exato com cotação do dia.</p>
        </div>

        <div className="bg-white rounded-2xl p-5 shadow-sm">
          <h2 className="text-lg font-bold text-gray-800 mb-3">🧮 Como calcular o imposto do iPhone</h2>
          <p className="text-gray-600 text-sm mb-3">A fórmula é simples:</p>
          <div className="bg-gray-50 rounded-xl p-4 font-mono text-sm space-y-1">
            <p className="font-bold text-gray-700">Exemplo: iPhone 16 a US$ 799</p>
            <p>Excedente = $799 - $500 = <strong>$299</strong></p>
            <p>Imposto = $299 × 50% = <strong>$149,50</strong></p>
            <p>Imposto em reais = $149,50 × cotação = <strong>~R$ 780</strong></p>
          </div>
          <p className="text-gray-500 text-xs mt-3">O imposto é cobrado em reais na Receita Federal ao retornar ao Brasil.</p>
        </div>

        <div className="bg-white rounded-2xl p-5 shadow-sm">
          <h2 className="text-lg font-bold text-gray-800 mb-3">💰 Ainda vale a pena comprar iPhone no Paraguai?</h2>
          <p className="text-gray-600 text-sm mb-3">Mesmo pagando imposto, o preço final costuma ser <strong>20% a 30% mais barato</strong> que no Brasil. Veja a comparação:</p>
          <div className="space-y-2">
            {[
              { modelo: 'iPhone 16 128GB', brasil: 'R$ 7.299', paraguai: '~R$ 5.200', economia: '~R$ 2.100' },
              { modelo: 'iPhone 16 Pro 128GB', brasil: 'R$ 9.299', paraguai: '~R$ 7.500', economia: '~R$ 1.800' },
            ].map(({ modelo, brasil, paraguai, economia }) => (
              <div key={modelo} className="bg-green-50 rounded-xl p-3">
                <p className="font-bold text-gray-800 text-sm">{modelo}</p>
                <div className="flex justify-between text-xs mt-1">
                  <span className="text-gray-500">Brasil: <strong>{brasil}</strong></span>
                  <span className="text-gray-500">Paraguai c/ imposto: <strong>{paraguai}</strong></span>
                  <span className="text-green-700 font-bold">Economia: {economia}</span>
                </div>
              </div>
            ))}
          </div>
          <p className="text-gray-500 text-xs mt-3">* Valores aproximados. Consulte a cotação do dia na nossa calculadora.</p>
        </div>

        <div className="bg-white rounded-2xl p-5 shadow-sm">
          <h2 className="text-lg font-bold text-gray-800 mb-3">✅ Dicas para comprar iPhone no Paraguai</h2>
          <div className="space-y-2 text-sm text-gray-600">
            <div className="flex gap-2"><span>1️⃣</span><p><strong>Prefira o modelo americano (A)</strong> — tem garantia mundial e funciona no Brasil com todas as operadoras.</p></div>
            <div className="flex gap-2"><span>2️⃣</span><p><strong>Peça nota fiscal</strong> — obrigatória para declarar na Receita Federal. Lojas sérias sempre emitem.</p></div>
            <div className="flex gap-2"><span>3️⃣</span><p><strong>Verifique o IMEI</strong> — confirme que o aparelho não está bloqueado antes de pagar.</p></div>
            <div className="flex gap-2"><span>4️⃣</span><p><strong>Loja confiável</strong> — compre em lojas conhecidas como Mobile Zone, Shopping China ou Flytec.</p></div>
            <div className="flex gap-2"><span>5️⃣</span><p><strong>Pague em dinheiro ou Nomad</strong> — evita IOF e spread bancário de cartões comuns.</p></div>
          </div>
        </div>

        <div className="bg-white rounded-2xl p-5 shadow-sm">
          <h2 className="text-lg font-bold text-gray-800 mb-3">❓ Posso trazer 2 iPhones?</h2>
          <p className="text-gray-600 text-sm">Tecnicamente sim, mas a cota de US$ 500 é por pessoa. Se você e um acompanhante cada um declarar o seu iPhone, cada um paga imposto individualmente sobre o excedente da sua cota. Não é possível juntar cotas para um único produto.</p>
        </div>

        <div className="bg-white rounded-2xl p-5 shadow-sm">
          <h2 className="text-lg font-bold text-gray-800 mb-3">🏪 Onde comprar iPhone em Ciudad del Este?</h2>
          <div className="space-y-2">
            {[
              { loja: 'Mobile Zone Internacional', desc: 'Especializada em smartphones, com as melhores condições para iPhones.' },
              { loja: 'Shopping China', desc: 'Maior shopping de importados, várias lojas vendem iPhones.' },
              { loja: 'Flytec Computers', desc: 'Boa opção para eletrônicos em geral, incluindo Apple.' },
            ].map(({ loja, desc }) => (
              <div key={loja} className="flex gap-3 items-start bg-gray-50 rounded-xl p-3">
                <span className="text-lg">🏪</span>
                <div>
                  <p className="font-semibold text-gray-800 text-sm">{loja}</p>
                  <p className="text-gray-500 text-xs">{desc}</p>
                </div>
              </div>
            ))}
          </div>
          <Link href="/lojas-paraguai" className="block mt-3 text-center text-green-600 text-sm font-semibold">Ver guia completo de lojas →</Link>
        </div>

        <div className="bg-green-50 border border-green-100 rounded-2xl p-5">
          <p className="font-bold text-green-800 mb-1">🧮 Calcule o preço exato do seu iPhone</p>
          <p className="text-green-700 text-sm mb-3">Com cotação real do Banco Central e todos os impostos.</p>
          <Link href="/" className="block bg-green-500 text-white text-center py-3 rounded-xl font-semibold">Abrir Calculadora →</Link>
        </div>

        <BannerNomad />
      </div>
    </main>
  )
}
