import Link from 'next/link'
import BannerNomad from '../components/BannerNomad'

export const metadata = {
  title: 'Como declarar compras no Paraguai em 2026? | Calculadora Paraguai',
  description: 'Guia completo sobre como declarar compras feitas no Paraguai na Receita Federal. App e-DBV, o que declarar, como pagar o imposto e evitar multas.',
  keywords: 'como declarar compras paraguai, declaracao receita federal paraguai, imposto compras paraguai 2026, app edbv paraguai',
}

export default function ComoDeclarar() {
  return (
    <main className="min-h-screen bg-gray-50 pb-16">
      <div className="bg-gradient-to-r from-green-600 to-green-500 px-5 pt-12 pb-8 text-white">
        <Link href="/" className="text-green-100 text-sm mb-4 block">← Calculadora</Link>
        <h1 className="text-2xl font-bold">Como declarar compras no Paraguai em 2026?</h1>
        <p className="text-green-100 mt-2 text-sm">Guia completo para declarar na Receita Federal e evitar multas.</p>
      </div>

      <div className="px-4 py-6 max-w-2xl mx-auto space-y-5">

        <div className="bg-white rounded-2xl p-5 shadow-sm">
          <h2 className="text-lg font-bold text-gray-800 mb-3">📋 Quando precisa declarar?</h2>
          <p className="text-gray-600 text-sm mb-3">Você precisa declarar suas compras ao passar pela aduana brasileira quando o valor total ultrapassar a <strong>cota de isenção de US$ 500</strong> por pessoa via terrestre ou US$ 1.000 via aérea.</p>
          <div className="space-y-2">
            <div className="flex items-center gap-3 bg-green-50 rounded-xl p-3">
              <span className="text-xl">✅</span>
              <div>
                <p className="font-semibold text-green-800 text-sm">Até US$ 500 (terrestre)</p>
                <p className="text-green-600 text-xs">Não precisa declarar — mas guarde as notas fiscais</p>
              </div>
            </div>
            <div className="flex items-center gap-3 bg-red-50 rounded-xl p-3">
              <span className="text-xl">⚠️</span>
              <div>
                <p className="font-semibold text-red-800 text-sm">Acima de US$ 500</p>
                <p className="text-red-600 text-xs">Declaração obrigatória + pagamento de 50% sobre o excedente</p>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-2xl p-5 shadow-sm">
          <h2 className="text-lg font-bold text-gray-800 mb-3">📱 App e-DBV (Receita Federal)</h2>
          <p className="text-gray-600 text-sm mb-3">A Receita Federal disponibiliza o app <strong>e-DBV</strong> para declarar bens de viajantes de forma digital, antes mesmo de chegar à aduana. É gratuito e disponível para iOS e Android.</p>
          <ol className="space-y-2 text-gray-600 text-sm">
            <li className="flex gap-2"><span className="bg-green-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm flex-shrink-0">1</span><p>Baixe o app <strong>"e-DBV"</strong> na loja do seu celular</p></li>
            <li className="flex gap-2"><span className="bg-green-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm flex-shrink-0">2</span><p>Informe seus dados pessoais, CPF e data de viagem</p></li>
            <li className="flex gap-2"><span className="bg-green-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm flex-shrink-0">3</span><p>Liste os produtos comprados com valores em dólares</p></li>
            <li className="flex gap-2"><span className="bg-green-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm flex-shrink-0">4</span><p>Pague o imposto calculado pelo app via <strong>Pix ou boleto</strong></p></li>
            <li className="flex gap-2"><span className="bg-green-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm flex-shrink-0">5</span><p>Apresente o comprovante na aduana da Ponte da Amizade</p></li>
          </ol>
          <div className="bg-blue-50 rounded-xl p-3 mt-3">
            <p className="text-blue-800 text-xs font-semibold">💡 Dica</p>
            <p className="text-blue-700 text-xs mt-1">Declare pelo app <strong>antes de cruzar a ponte</strong> — evita fila na aduana e o processo é muito mais rápido.</p>
          </div>
        </div>

        <div className="bg-white rounded-2xl p-5 shadow-sm">
          <h2 className="text-lg font-bold text-gray-800 mb-3">🧾 O que precisa ter na nota fiscal?</h2>
          <p className="text-gray-600 text-sm mb-3">Sempre exija nota fiscal nas lojas do Paraguai. A nota precisa ter:</p>
          <div className="space-y-1 text-sm text-gray-600">
            {['Nome ou descrição do produto', 'Quantidade', 'Valor em dólares ou guaranis', 'Nome e CNPJ/RUC da loja', 'Data da compra'].map(item => (
              <div key={item} className="flex gap-2 items-center">
                <span className="text-green-500">✓</span><span>{item}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white rounded-2xl p-5 shadow-sm">
          <h2 className="text-lg font-bold text-gray-800 mb-3">❌ O que acontece se não declarar?</h2>
          <p className="text-gray-600 text-sm mb-3">A aduana brasileira faz fiscalização aleatória e com scanners. Se pegar mercadoria não declarada:</p>
          <div className="space-y-2">
            {[
              { icon: '❌', texto: 'Apreensão imediata das mercadorias' },
              { icon: '❌', texto: 'Multa de 50% a 100% sobre o valor dos bens' },
              { icon: '❌', texto: 'Processo administrativo na Receita Federal' },
              { icon: '❌', texto: 'Possível impedimento em viagens futuras' },
            ].map(({ icon, texto }) => (
              <div key={texto} className="flex gap-2 items-center text-sm text-gray-600">
                <span>{icon}</span><span>{texto}</span>
              </div>
            ))}
          </div>
          <p className="mt-3 text-sm text-gray-500 bg-yellow-50 rounded-xl p-3">⚠️ Não vale o risco — o imposto de 50% sobre o excedente costuma ser bem menor que a multa por não declarar.</p>
        </div>

        <div className="bg-white rounded-2xl p-5 shadow-sm">
          <h2 className="text-lg font-bold text-gray-800 mb-3">💡 Dicas para passar tranquilo na aduana</h2>
          <div className="space-y-2 text-sm text-gray-600">
            <div className="flex gap-2"><span>1️⃣</span><p>Separe todas as notas fiscais em uma pasta ou envelope</p></div>
            <div className="flex gap-2"><span>2️⃣</span><p>Declare pelo app e-DBV antes de sair do Paraguai</p></div>
            <div className="flex gap-2"><span>3️⃣</span><p>Não esconda produtos na mala ou no carro — os scanners detectam</p></div>
            <div className="flex gap-2"><span>4️⃣</span><p>Produtos para uso pessoal têm tratamento diferente de mercadorias para revenda</p></div>
            <div className="flex gap-2"><span>5️⃣</span><p>Se tiver dúvida, declare — é sempre melhor do que arrriscar a apreensão</p></div>
          </div>
        </div>

        <div className="bg-green-50 border border-green-100 rounded-2xl p-5">
          <p className="font-bold text-green-800 mb-1">🧮 Calcule o imposto antes de comprar</p>
          <p className="text-green-700 text-sm mb-3">Saiba exatamente quanto vai pagar com nossa calculadora antes de ir às compras.</p>
          <Link href="/" className="block bg-green-500 text-white text-center py-3 rounded-xl font-semibold">Abrir Calculadora →</Link>
        </div>

        <BannerNomad />
      </div>
    </main>
  )
}
