
'use client'
import { useState, useEffect } from 'react'
import Link from 'next/link'
import BannerNomad from '../../components/BannerNomad'

export default function ProdutoDetalhe({ params }) {
  const [produto, setProduto] = useState(null)
  const [historico, setHistorico] = useState([])
  const [cotacao, setCotacao] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetch('/api/cotacao').then(r => r.json()).then(setCotacao).catch(() => {})
    fetch('/api/produtos/' + params.slug)
      .then(r => r.json())
      .then(d => { setProduto(d.produto); setHistorico(d.historico || []) })
      .catch(() => {})
      .finally(() => setLoading(false))
  }, [params.slug])

  const fmt = (v) => new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(v)
  const fmtUSD = (v) => new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'USD' }).format(v)
  const toBRL = (usd) => cotacao?.valor_dolar ? usd * cotacao.valor_dolar : null

  if (loading) return (
    <main className="min-h-screen bg-gray-50 flex items-center justify-center">
      <p className="text-gray-400 animate-pulse">Carregando produto...</p>
    </main>
  )

  if (!produto) return (
    <main className="min-h-screen bg-gray-50 flex items-center justify-center">
      <div className="text-center">
        <p className="text-gray-500 mb-4">Produto não encontrado</p>
        <Link href="/buscar" className="text-green-600 font-semibold">← Voltar para busca</Link>
      </div>
    </main>
  )

  const precoMin = historico.length > 0 ? Math.min(...historico.map(h => h.preco_usd)) : null
  const precoMax = historico.length > 0 ? Math.max(...historico.map(h => h.preco_usd)) : null

  return (
    <main className="min-h-screen bg-gray-50 pb-16">
      <div className="bg-gradient-to-r from-green-600 to-green-500 px-5 pt-12 pb-8 text-white">
        <Link href="/buscar" className="text-green-100 text-sm mb-4 block">← Voltar para busca</Link>
        <h1 className="text-xl font-bold leading-tight">{produto.nome}</h1>
        <p className="text-green-100 text-sm mt-1">{produto.loja}</p>
      </div>

      <div className="px-4 py-6 max-w-2xl mx-auto space-y-4">

        <div className="bg-white rounded-2xl shadow-sm overflow-hidden">
          {produto.foto_url && (
            <div className="bg-gray-50 p-6 flex justify-center">
              <img src={produto.foto_url} alt={produto.nome} className="max-h-48 object-contain" />
            </div>
          )}
          <div className="p-5">
            <div className="flex items-start justify-between">
              <div>
                <p className="text-3xl font-black text-green-600">{fmtUSD(produto.preco_usd)}</p>
                {toBRL(produto.preco_usd) && (
                  <p className="text-gray-500 text-sm mt-0.5">≈ {fmt(toBRL(produto.preco_usd))} com câmbio do dia</p>
                )}
              </div>
              <span className="bg-gray-100 text-gray-600 text-xs px-3 py-1 rounded-full">{produto.marca}</span>
            </div>
            <div className="mt-4 flex gap-2">
              <a
                href={produto.url_produto}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 bg-green-500 text-white text-center py-3 rounded-xl font-semibold text-sm"
              >
                Ver na loja →
              </a>
              <Link
                href={`/?valor=${produto.preco_usd}`}
                className="flex-1 bg-gray-100 text-gray-700 text-center py-3 rounded-xl font-semibold text-sm"
              >
                🧮 Calcular imposto
              </Link>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-2xl p-5 shadow-sm">
          <h2 className="font-bold text-gray-800 mb-3">📊 Informações do produto</h2>
          <div className="space-y-2 text-sm">
            {[
              { label: 'Loja', value: produto.loja },
              { label: 'Marca', value: produto.marca },
              { label: 'Categoria', value: produto.categoria },
              { label: 'Preço atual', value: fmtUSD(produto.preco_usd) },
              toBRL(produto.preco_usd) && { label: 'Em reais hoje', value: fmt(toBRL(produto.preco_usd)) },
            ].filter(Boolean).map(({ label, value }) => (
              <div key={label} className="flex justify-between items-center py-1.5 border-b border-gray-50 last:border-0">
                <span className="text-gray-500">{label}</span>
                <span className="font-medium text-gray-800">{value}</span>
              </div>
            ))}
          </div>
        </div>

        {historico.length > 1 && (
          <div className="bg-white rounded-2xl p-5 shadow-sm">
            <h2 className="font-bold text-gray-800 mb-3">📈 Histórico de preços</h2>
            <div className="flex justify-between text-xs text-gray-500 mb-3">
              <span>Mínimo: <strong className="text-green-600">{fmtUSD(precoMin)}</strong></span>
              <span>Atual: <strong className="text-blue-600">{fmtUSD(produto.preco_usd)}</strong></span>
              <span>Máximo: <strong className="text-red-500">{fmtUSD(precoMax)}</strong></span>
            </div>
            <div className="space-y-1">
              {historico.slice(-10).map((h, i) => (
                <div key={i} className="flex justify-between items-center text-xs py-1 border-b border-gray-50 last:border-0">
                  <span className="text-gray-400">{new Date(h.created_at).toLocaleDateString('pt-BR')}</span>
                  <span className="font-medium text-gray-700">{fmtUSD(h.preco_usd)}</span>
                </div>
              ))}
            </div>
          </div>
        )}

        <div className="bg-yellow-50 border border-yellow-200 rounded-2xl p-4">
          <p className="text-yellow-800 text-sm font-semibold mb-1">⚠️ Lembre-se do imposto de importação</p>
          <p className="text-yellow-700 text-xs">Compras acima de US$ 500 pagam 50% sobre o excedente. Calcule o preço final antes de comprar.</p>
          <Link href="/" className="block mt-2 text-center bg-green-500 text-white py-2 rounded-xl text-sm font-semibold">
            Calcular imposto →
          </Link>
        </div>

        <BannerNomad />
      </div>
    </main>
  )
}
