
'use client'
import { useState, useEffect, useCallback } from 'react'
import Link from 'next/link'
import BannerNomad from '../components/BannerNomad'

export default function BuscarProdutos() {
  const [q, setQ] = useState('')
  const [marca, setMarca] = useState('')
  const [categoria, setCategoria] = useState('')
  const [produtos, setProdutos] = useState([])
  const [total, setTotal] = useState(0)
  const [loading, setLoading] = useState(false)
  const [cotacao, setCotacao] = useState(null)
  const [marcas, setMarcas] = useState([])
  const [categorias, setCategorias] = useState([])

  useEffect(() => {
    fetch('/api/cotacao').then(r => r.json()).then(setCotacao).catch(() => {})
    fetch('/api/produtos/marcas').then(r => r.json()).then(d => {
      setMarcas(d.marcas || [])
      setCategorias(d.categorias || [])
    }).catch(() => {})
    buscar('', '', '')
  }, [])

  const buscar = useCallback(async (query, m, cat) => {
    setLoading(true)
    try {
      const params = new URLSearchParams()
      if (query) params.set('q', query)
      if (m) params.set('marca', m)
      if (cat) params.set('categoria', cat)
      const res = await fetch('/api/produtos/buscar?' + params)
      const data = await res.json()
      setProdutos(data.produtos || [])
      setTotal(data.total || 0)
    } catch (e) {
      setProdutos([])
    } finally {
      setLoading(false)
    }
  }, [])

  const handleSearch = (e) => {
    e.preventDefault()
    buscar(q, marca, categoria)
  }

  const fmt = (v) => new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(v)
  const fmtUSD = (v) => new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'USD' }).format(v)
  const toBRL = (usd) => cotacao?.valor_dolar ? usd * cotacao.valor_dolar : null

  return (
    <main className="min-h-screen bg-gray-50 pb-16">
      <div className="bg-gradient-to-r from-green-600 to-green-500 px-5 pt-12 pb-8 text-white">
        <Link href="/" className="text-green-100 text-sm mb-4 block">← Calculadora</Link>
        <h1 className="text-2xl font-bold">🔍 Buscar Produtos no Paraguai</h1>
        <p className="text-green-100 mt-2 text-sm">Preços reais das lojas de Ciudad del Este</p>
      </div>

      <div className="px-4 py-4 max-w-2xl mx-auto space-y-4">
        <form onSubmit={handleSearch} className="bg-white rounded-2xl p-4 shadow-sm space-y-3">
          <div className="flex gap-2">
            <input
              type="text"
              value={q}
              onChange={e => setQ(e.target.value)}
              placeholder="Ex: iPhone 16, Samsung S24, MacBook..."
              className="flex-1 border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-green-500"
            />
            <button type="submit" className="bg-green-500 text-white px-5 py-3 rounded-xl font-semibold text-sm">
              Buscar
            </button>
          </div>
          <div className="flex gap-2">
            <select
              value={marca}
              onChange={e => { setMarca(e.target.value); buscar(q, e.target.value, categoria) }}
              className="flex-1 border border-gray-200 rounded-xl px-3 py-2 text-sm focus:outline-none focus:border-green-500"
            >
              <option value="">Todas as marcas</option>
              {marcas.map(m => <option key={m} value={m}>{m}</option>)}
            </select>
            <select
              value={categoria}
              onChange={e => { setCategoria(e.target.value); buscar(q, marca, e.target.value) }}
              className="flex-1 border border-gray-200 rounded-xl px-3 py-2 text-sm focus:outline-none focus:border-green-500"
            >
              <option value="">Todas as categorias</option>
              {categorias.map(c => <option key={c} value={c}>{c}</option>)}
            </select>
          </div>
        </form>

        {cotacao && (
          <div className="flex items-center gap-2 bg-green-50 rounded-xl px-4 py-2 text-xs text-green-700">
            <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
            Cotação do dia: {fmt(cotacao.valor_dolar)} por dólar
          </div>
        )}

        <p className="text-xs text-gray-400">{total} produto{total !== 1 ? 's' : ''} encontrado{total !== 1 ? 's' : ''}</p>

        {loading ? (
          <div className="text-center py-12 text-gray-400 text-sm animate-pulse">Buscando produtos...</div>
        ) : produtos.length === 0 ? (
          <div className="text-center py-12 text-gray-400 text-sm">Nenhum produto encontrado</div>
        ) : (
          <div className="space-y-3">
            {produtos.map(p => (
              <Link key={p.id} href={'/produto/' + p.slug} className="flex gap-3 bg-white rounded-2xl p-4 shadow-sm hover:shadow-md transition-shadow">
                {p.foto_url ? (
                  <img src={p.foto_url} alt={p.nome} className="w-20 h-20 object-contain rounded-xl bg-gray-50 flex-shrink-0" />
                ) : (
                  <div className="w-20 h-20 bg-gray-100 rounded-xl flex items-center justify-center flex-shrink-0">
                    <span className="text-2xl">📦</span>
                  </div>
                )}
                <div className="flex-1 min-w-0">
                  <p className="font-semibold text-gray-800 text-sm leading-tight">{p.nome}</p>
                  <p className="text-xs text-gray-400 mt-0.5">{p.loja}</p>
                  <div className="mt-2">
                    <p className="text-green-600 font-bold text-base">{fmtUSD(p.preco_usd)}</p>
                    {toBRL(p.preco_usd) && (
                      <p className="text-gray-500 text-xs">≈ {fmt(toBRL(p.preco_usd))} hoje</p>
                    )}
                  </div>
                  <span className="mt-1 inline-block text-xs bg-gray-100 text-gray-600 px-2 py-0.5 rounded-full">{p.marca}</span>
                </div>
                <span className="text-gray-300 self-center">→</span>
              </Link>
            ))}
          </div>
        )}

        <BannerNomad />
      </div>
    </main>
  )
}
