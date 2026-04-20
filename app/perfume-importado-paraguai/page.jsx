import Link from 'next/link'
import BannerNomad from '../components/BannerNomad'
export const metadata = {
  title: 'Perfume Importado no Paraguai 2026 - Precos e Marcas | CotaParaguai',
  description: 'Melhores perfumes importados no Paraguai em 2026. Chanel, Dior, Armani e mais com ate 50% de desconto. Veja precos e dicas.',
  keywords: 'perfume importado paraguai, perfume chanel paraguai, perfume dior paraguai, perfume barato cidade del este 2026',
}
export default function PerfumeImportadoParaguai() {
  return (
    <main className="min-h-screen bg-gray-50 pb-16">
      <div className="bg-gradient-to-r from-green-600 to-green-500 px-5 pt-12 pb-8 text-white">
        <Link href="/" className="text-green-100 text-sm mb-4 block">← Calculadora</Link>
        <h1 className="text-2xl font-bold">Perfume Importado no Paraguai 2026</h1>
        <p className="text-green-100 mt-2 text-sm">Chanel, Dior, Armani e mais — ate 50% mais barato que no Brasil.</p>
      </div>
      <div className="px-4 py-6 max-w-2xl mx-auto space-y-6">
        <div className="bg-green-50 border border-green-200 rounded-2xl p-5">
          <p className="font-bold text-green-800 text-base">Perfume importado e um dos melhores produtos para comprar</p>
          <p className="text-green-700 text-sm mt-2">Leve, cabe facilmente na cota de US$ 500 e a diferenca de preco e enorme — ate <strong>50% mais barato</strong> que no Brasil.</p>
        </div>
        <div className="bg-white rounded-2xl p-5 shadow-sm">
          <h2 className="text-lg font-bold text-gray-800 mb-3">Precos de perfumes importados em 2026</h2>
          <div className="space-y-2">
            {[
              { nome: 'Chanel N°5 EDP 100ml', preco: 'US$ 85 a 110' },
              { nome: 'Dior Sauvage EDT 100ml', preco: 'US$ 75 a 95' },
              { nome: 'Armani Acqua di Gio 100ml', preco: 'US$ 60 a 80' },
              { nome: 'Carolina Herrera Good Girl 80ml', preco: 'US$ 65 a 85' },
              { nome: 'YSL Black Opium EDP 90ml', preco: 'US$ 70 a 90' },
              { nome: 'Versace Eros EDT 100ml', preco: 'US$ 55 a 75' },
              { nome: 'Bleu de Chanel EDP 100ml', preco: 'US$ 90 a 115' },
            ].map(({ nome, preco }) => (
              <div key={nome} className="flex justify-between items-center py-2 border-b border-gray-100 last:border-0">
                <span className="text-sm text-gray-700">{nome}</span>
                <span className="text-sm font-bold text-green-600">{preco}</span>
              </div>
            ))}
          </div>
        </div>
        <div className="bg-white rounded-2xl p-5 shadow-sm">
          <h2 className="text-lg font-bold text-gray-800 mb-3">Quantos perfumes posso trazer?</h2>
          <p className="text-gray-600 text-sm mb-3">Nao ha limite de quantidade — o limite e a cota de <strong>US$ 500 por pessoa</strong>. Com perfumes a US$ 80 cada, da pra trazer 6 unidades e ainda sobrar cota.</p>
          <div className="bg-blue-50 rounded-xl p-3 text-sm text-blue-700">
            <p className="font-bold">Exemplo pratico:</p>
            <p className="mt-1">4 perfumes a US$ 90 = US$ 360 — dentro da cota ✅</p>
          </div>
        </div>
        <div className="bg-yellow-50 border border-yellow-200 rounded-2xl p-5">
          <h2 className="font-bold text-yellow-800 mb-2">Cuidado com falsificados</h2>
          <ul className="text-yellow-700 text-sm space-y-1.5">
            <li>• Compre em lojas estabelecidas — evite ambulantes</li>
            <li>• Teste o perfume antes de pagar — original tem fixacao de 6h+</li>
            <li>• Preco muito abaixo do normal e sinal de falsificado</li>
            <li>• Exija nota fiscal</li>
          </ul>
        </div>
        <div className="bg-blue-50 border border-blue-100 rounded-2xl p-5">
          <p className="font-bold text-blue-800 mb-2">Calcule o valor total das suas compras</p>
          <p className="text-blue-600 text-sm mb-4">Some os perfumes com outras compras e veja se vai pagar imposto.</p>
          <Link href="/" className="block bg-green-500 text-white text-center py-3 rounded-xl font-semibold">Abrir Calculadora →</Link>
        </div>
        <div className="bg-white rounded-2xl p-5 shadow-sm">
          <h2 className="font-bold text-gray-800 mb-3">Leia tambem</h2>
          <div className="space-y-2">
            {[
              { href: '/perfume-paraguai', label: 'Perfumes no Paraguai — guia completo' },
              { href: '/o-que-comprar-paraguai', label: 'O que vale a pena comprar?' },
              { href: '/limite-compras-paraguai', label: 'Qual o limite de compras?' },
              { href: '/melhor-forma-pagamento-paraguai', label: 'Melhor forma de pagamento' },
            ].map(({ href, label }) => (
              <Link key={href} href={href} className="flex items-center justify-between bg-gray-50 rounded-xl px-4 py-3 text-sm text-gray-700 border border-gray-100">
                <span>{label}</span><span className="text-gray-400">→</span>
              </Link>
            ))}
          </div>
        </div>
        <BannerNomad />
      </div>
    </main>
  )
}
