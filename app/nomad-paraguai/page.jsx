import Link from 'next/link'
import BannerNomad from '../components/BannerNomad'

export const metadata = {
  title: 'Vale a pena usar o Nomad no Paraguai em 2026? | Calculadora Paraguai',
  description: 'O cartão Nomad é uma boa opção para compras no Paraguai? Veja taxas, IOF, spread e compare com dinheiro e Pix. Código de indicação com benefícios.',
  keywords: 'nomad paraguai 2026, cartao nomad ciudad del este, taxa nomad paraguai, codigo nomad indicacao, nomad vs dinheiro paraguai',
}

export default function NomadParaguai() {
  return (
    <main className="min-h-screen bg-gray-50 pb-16">
      <div className="bg-gradient-to-r from-green-600 to-green-500 px-5 pt-12 pb-8 text-white">
        <Link href="/" className="text-green-100 text-sm mb-4 block">← Calculadora</Link>
        <h1 className="text-2xl font-bold">Vale a pena usar o Nomad no Paraguai em 2026?</h1>
        <p className="text-green-100 mt-2 text-sm">Taxas, IOF, spread e tudo que você precisa saber antes de ir.</p>
      </div>
      <div className="px-4 py-6 max-w-2xl mx-auto space-y-6">

        <div className="bg-green-50 border border-green-200 rounded-2xl p-5">
          <p className="font-bold text-green-800 text-lg">✅ Sim, vale a pena — com ressalvas</p>
          <p className="text-green-700 text-sm mt-2">O Nomad é uma das melhores opções para quem não quer andar com muito dinheiro em espécie. O custo final fica próximo do dinheiro, especialmente em compras maiores.</p>
        </div>

        <div className="bg-white rounded-2xl p-5 shadow-sm">
          <h2 className="text-lg font-bold text-gray-800 mb-3">📊 Taxas do Nomad no Paraguai em 2026</h2>
          <div className="space-y-2">
            {[
              { item: 'IOF na compra', valor: 'R$ 0,00', obs: 'Já pago na conversão BRL→USD', ok: true },
              { item: 'Spread (conversão)', valor: '1% a 2%', obs: 'Depende do nível Nomad Pass', ok: true },
              { item: 'Cotação usada', valor: 'Dólar comercial', obs: 'Mais barato que turismo', ok: true },
              { item: 'Anuidade', valor: 'Gratuita', obs: 'Sem custo fixo', ok: true },
              { item: 'Taxa na maquininha', valor: '5% a 10%', obs: 'Cobrada pela loja, não pelo Nomad', ok: false },
            ].map(({ item, valor, obs, ok }) => (
              <div key={item} className="flex justify-between items-start py-2 border-b border-gray-100 last:border-0">
                <div>
                  <p className="text-sm font-medium text-gray-700">{item}</p>
                  <p className="text-xs text-gray-400">{obs}</p>
                </div>
                <span className={`text-sm font-bold ${ok ? 'text-green-600' : 'text-orange-500'}`}>{valor}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white rounded-2xl p-5 shadow-sm">
          <h2 className="text-lg font-bold text-gray-800 mb-3">💵 Nomad vs Dinheiro vs Cartão comum</h2>
          <div className="space-y-2 text-xs">
            <div className="grid grid-cols-4 gap-1 font-bold text-gray-500 pb-1 border-b">
              <span>Custo</span>
              <span className="text-center">Dinheiro</span>
              <span className="text-center">Nomad</span>
              <span className="text-center">Cartão comum</span>
            </div>
            {[
              { custo: 'IOF', dinheiro: '✅ Zero', nomad: '✅ Zero', comum: '❌ 3,5%' },
              { custo: 'Spread', dinheiro: '✅ Zero', nomad: '🟡 1-2%', comum: '❌ 4-7%' },
              { custo: 'Cotação', dinheiro: '✅ Comercial', nomad: '✅ Comercial', comum: '❌ Turismo' },
              { custo: 'Segurança', dinheiro: '⚠️ Risco', nomad: '✅ Seguro', comum: '✅ Seguro' },
              { custo: 'Aceitação', dinheiro: '✅ Sempre', nomad: '🟡 Maioria', comum: '🟡 Maioria' },
            ].map(({ custo, dinheiro, nomad, comum }) => (
              <div key={custo} className="grid grid-cols-4 gap-1 py-1.5 border-b border-gray-50">
                <span className="text-gray-700 font-medium">{custo}</span>
                <span className="text-center">{dinheiro}</span>
                <span className="text-center">{nomad}</span>
                <span className="text-center">{comum}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white rounded-2xl p-5 shadow-sm">
          <h2 className="text-lg font-bold text-gray-800 mb-3">🏪 As lojas aceitam Nomad no Paraguai?</h2>
          <p className="text-gray-600 text-sm mb-3">A maioria das lojas grandes de Ciudad del Este aceita cartão internacional, incluindo Nomad. Porém, <strong>atenção às taxas da maquininha</strong> — algumas lojas cobram de 5% a 10% sobre o valor ao pagar no cartão.</p>
          <div className="bg-yellow-50 rounded-xl p-3">
            <p className="text-yellow-800 text-sm font-semibold">💡 Dica importante</p>
            <p className="text-yellow-700 text-xs mt-1">Sempre pergunte antes: "Tem taxa no cartão?" Se tiver, compare se vale mais a pena pagar em dinheiro ou aceitar a taxa pelo conforto e segurança do cartão.</p>
          </div>
        </div>

        <div className="bg-white rounded-2xl p-5 shadow-sm">
          <h2 className="text-lg font-bold text-gray-800 mb-3">📱 Como usar o Nomad no Paraguai</h2>
          <div className="space-y-2 text-sm text-gray-600">
            <div className="flex gap-2"><span>1️⃣</span><p><strong>Antes de viajar:</strong> converta reais para dólares no app Nomad. Use a cotação do dia para planejar quanto levar.</p></div>
            <div className="flex gap-2"><span>2️⃣</span><p><strong>Na loja:</strong> pergunte se aceitam cartão internacional e se tem taxa adicional.</p></div>
            <div className="flex gap-2"><span>3️⃣</span><p><strong>Sempre pague em dólares</strong> — nunca aceite converter para reais na maquininha (DCC), pois a taxa é péssima.</p></div>
            <div className="flex gap-2"><span>4️⃣</span><p><strong>Acompanhe pelo app</strong> — o Nomad notifica cada transação em tempo real.</p></div>
          </div>
        </div>

        <div className="bg-white rounded-2xl p-5 shadow-sm">
          <h2 className="text-lg font-bold text-gray-800 mb-3">❓ Nomad ou Wise — qual é melhor para o Paraguai?</h2>
          <p className="text-gray-600 text-sm">Os dois são excelentes e têm custos parecidos. A diferença principal é que o <strong>Nomad tem mais suporte em português</strong> e é focado no público brasileiro. O Wise tem spread levemente menor em algumas situações. Para o Paraguai, os dois funcionam bem — use o que já tiver.</p>
        </div>

        <div className="bg-yellow-400 rounded-2xl p-5">
          <p className="font-bold text-gray-900 text-base mb-1">🎁 Abra sua conta Nomad com benefícios</p>
          <p className="text-gray-800 text-sm mb-3">Use o código abaixo e ganhe <strong>taxa zero na 1ª conversão</strong> + 1GB de eSIM internacional.</p>
          <div className="bg-gray-900 rounded-xl px-5 py-3 text-center mb-3">
            <span className="text-yellow-400 font-black text-2xl tracking-widest">1ER33NDKPF</span>
          </div>
          <a href="https://nomad.onelink.me/wIQT/Travel?code=1ER33NDKPF%26n=Alex" target="_blank" rel="noopener noreferrer" className="block bg-gray-900 text-yellow-400 text-center py-3 rounded-xl font-bold">
            Abrir conta na Nomad →
          </a>
        </div>

        <div className="bg-blue-50 border border-blue-100 rounded-2xl p-5">
          <p className="font-bold text-blue-800 mb-2">🧮 Compare Nomad vs outros métodos</p>
          <p className="text-blue-600 text-sm mb-4">Nossa calculadora mostra o custo exato com câmbio em tempo real.</p>
          <Link href="/" className="block bg-green-500 text-white text-center py-3 rounded-xl font-semibold">Abrir Calculadora →</Link>
        </div>

        <BannerNomad />
      </div>
    </main>
  )
}
