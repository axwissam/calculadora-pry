import Link from 'next/link'
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

        
        <div className="bg-gray-50 rounded-2xl p-4">
          <p className="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-3">Leia também</p>
          <div className="space-y-2">
            <Link href="/notebook-paraguai" className="flex items-center gap-3 bg-white rounded-xl px-4 py-3 text-sm text-gray-700 border border-gray-100 hover:border-green-300 transition-colors">
              <span className="text-lg">💻</span>
              <span>Notebook no Paraguai</span>
              <span className="ml-auto text-gray-400">→</span>
            </Link>
            <Link href="/eletronicos-paraguai" className="flex items-center gap-3 bg-white rounded-xl px-4 py-3 text-sm text-gray-700 border border-gray-100 hover:border-green-300 transition-colors">
              <span className="text-lg">🖥️</span>
              <span>Eletrônicos no Paraguai</span>
              <span className="ml-auto text-gray-400">→</span>
            </Link>
            <Link href="/como-calcular-imposto-paraguai" className="flex items-center gap-3 bg-white rounded-xl px-4 py-3 text-sm text-gray-700 border border-gray-100 hover:border-green-300 transition-colors">
              <span className="text-lg">🧮</span>
              <span>Como calcular o imposto</span>
              <span className="ml-auto text-gray-400">→</span>
            </Link>
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
