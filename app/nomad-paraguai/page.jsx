import Link from 'next/link'
import BannerNomad from '../components/BannerNomad'
export const metadata = {
  title: 'Vale a pena usar o Nomad no Paraguai em 2026? | Calculadora Paraguai',
  description: 'O cartão Nomad é uma boa opção para compras no Paraguai? Veja taxas, IOF, spread e compare com dinheiro e Pix.',
  keywords: 'nomad paraguai 2026, cartao nomad ciudad del este, taxa nomad paraguai, codigo nomad indicacao',
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
        <div className="bg-yellow-400 rounded-2xl p-5">
          <p className="font-bold text-gray-900 text-base mb-1">🎁 Abra sua conta com benefícios</p>
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
