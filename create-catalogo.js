const fs = require('fs');

// ===== API: /api/produtos/buscar =====
fs.mkdirSync('app/api/produtos/buscar', { recursive: true });
fs.writeFileSync('app/api/produtos/buscar/route.js', `
import { createClient } from '@supabase/supabase-js'

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL,
  process.env.SUPABASE_SERVICE_KEY
)

export async function GET(request) {
  const { searchParams } = new URL(request.url)
  const q = searchParams.get('q') || ''
  const marca = searchParams.get('marca') || ''
  const categoria = searchParams.get('categoria') || ''
  const page = parseInt(searchParams.get('page') || '1')
  const limit = 20
  const offset = (page - 1) * limit

  let query = supabase
    .from('produtos')
    .select('*', { count: 'exact' })
    .eq('disponivel', true)
    .order('created_at', { ascending: false })
    .range(offset, offset + limit - 1)

  if (q) query = query.ilike('nome', \`%\${q}%\`)
  if (marca) query = query.eq('marca', marca)
  if (categoria) query = query.eq('categoria', categoria)

  const { data, error, count } = await query

  if (error) return Response.json({ error: error.message }, { status: 500 })
  return Response.json({ produtos: data, total: count, page, limit })
}
`);
console.log('OK: api/produtos/buscar');

// ===== API: /api/produtos/[slug] =====
fs.mkdirSync('app/api/produtos/[slug]', { recursive: true });
fs.writeFileSync('app/api/produtos/[slug]/route.js', `
import { createClient } from '@supabase/supabase-js'

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL,
  process.env.SUPABASE_SERVICE_KEY
)

export async function GET(request, { params }) {
  const { slug } = params

  const { data: produto, error } = await supabase
    .from('produtos')
    .select('*')
    .eq('slug', slug)
    .single()

  if (error || !produto) return Response.json({ error: 'Produto não encontrado' }, { status: 404 })

  const { data: historico } = await supabase
    .from('historico_precos')
    .select('preco_usd, created_at')
    .eq('produto_id', produto.id)
    .order('created_at', { ascending: true })
    .limit(30)

  return Response.json({ produto, historico: historico || [] })
}
`);
console.log('OK: api/produtos/[slug]');

// ===== API: /api/produtos/marcas =====
fs.mkdirSync('app/api/produtos/marcas', { recursive: true });
fs.writeFileSync('app/api/produtos/marcas/route.js', `
import { createClient } from '@supabase/supabase-js'

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL,
  process.env.SUPABASE_SERVICE_KEY
)

export async function GET() {
  const { data, error } = await supabase
    .from('produtos')
    .select('marca, categoria')
    .eq('disponivel', true)

  if (error) return Response.json({ error: error.message }, { status: 500 })

  const marcas = [...new Set(data.map(p => p.marca).filter(Boolean))].sort()
  const categorias = [...new Set(data.map(p => p.categoria).filter(Boolean))].sort()

  return Response.json({ marcas, categorias })
}
`);
console.log('OK: api/produtos/marcas');

// ===== PÁGINA /buscar =====
fs.mkdirSync('app/buscar', { recursive: true });
fs.writeFileSync('app/buscar/page.jsx', `
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
`);
console.log('OK: app/buscar');

// ===== PÁGINA /produto/[slug] =====
fs.mkdirSync('app/produto/[slug]', { recursive: true });
fs.writeFileSync('app/produto/[slug]/page.jsx', `
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
                href={\`/?valor=\${produto.preco_usd}\`}
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
`);
console.log('OK: app/produto/[slug]');

// ===== ATUALIZA SITEMAP =====
let sitemap = fs.readFileSync('app/sitemap.js', 'utf8');
if (!sitemap.includes('/buscar')) {
  sitemap = sitemap.replace(
    "{ url: `${base}/privacidade`",
    `{ url: \`\${base}/buscar\`,                              lastModified: new Date(), changeFrequency: 'daily',   priority: 0.9 },
    { url: \`\${base}/privacidade\``
  );
  fs.writeFileSync('app/sitemap.js', sitemap);
  console.log('OK: sitemap atualizado');
}

console.log('\nTudo criado! Agora adicione ao .env.local:');
console.log('NEXT_PUBLIC_SUPABASE_URL=https://hsctxzwmkoaigcbrvhiq.supabase.co');
console.log('SUPABASE_SERVICE_KEY=sua_chave_aqui');
