import { createClient } from '@supabase/supabase-js'
import Link from 'next/link'
import BannerNomad from '../components/BannerNomad'

const supabase = createClient(
  process.env.SUPABASE_URL,
  process.env.SUPABASE_SERVICE_KEY
)

const fmt = (v) => new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(v)

export const revalidate = 60

async function getDados() {
  const [cotacoes, calculos, spreads] = await Promise.all([
    supabase.from('cotacoes').select('*').order('created_at', { ascending: false }).limit(24),
    supabase.from('calculos_log').select('*').order('created_at', { ascending: false }).limit(10),
    supabase.from('calculos_log').select('tipo_pagamento').then(({ data }) => {
      if (!data) return {}
      return data.reduce((acc, r) => {
        acc[r.tipo_pagamento] = (acc[r.tipo_pagamento] || 0) + 1
        return acc
      }, {})
    })
  ])
  return { cotacoes: cotacoes.data || [], calculos: calculos.data || [], spreads }
}

export default async function AdminPage() {
  const { cotacoes, calculos } = await getDados()
  const ultima = cotacoes[0]
  const totalCalculos = calculos.length

  return (
    <main className="min-h-screen bg-gray-50 pb-16">
      <div className="bg-gray-900 px-5 pt-10 pb-6 text-white">
        <Link href="/" className="text-gray-400 text-sm mb-4 block">← Calculadora</Link>
        <h1 className="text-xl font-bold">📊 Painel Admin</h1>
        <p className="text-gray-400 text-sm mt-1">Calculadora Paraguai 2026</p>
      </div>

      <div className="px-4 py-5 space-y-4 max-w-2xl mx-auto">
        {/* Cards de status */}
        <div className="grid grid-cols-2 gap-3">
          <div className="bg-white rounded-2xl p-4 shadow-sm">
            <p className="text-xs text-gray-500 mb-1">Cotação atual</p>
            <p className="text-2xl font-bold text-green-600">{ultima ? fmt(ultima.valor_dolar) : '—'}</p>
            <p className="text-xs text-gray-400 mt-1">{ultima?.fonte || '—'}</p>
          </div>
          <div className="bg-white rounded-2xl p-4 shadow-sm">
            <p className="text-xs text-gray-500 mb-1">Cotações salvas</p>
            <p className="text-2xl font-bold text-blue-600">{cotacoes.length}</p>
            <p className="text-xs text-gray-400 mt-1">últimas 24</p>
          </div>
          <div className="bg-white rounded-2xl p-4 shadow-sm">
            <p className="text-xs text-gray-500 mb-1">Cálculos feitos</p>
            <p className="text-2xl font-bold text-purple-600">{totalCalculos}</p>
            <p className="text-xs text-gray-400 mt-1">últimos 10 reg.</p>
          </div>
          <div className="bg-white rounded-2xl p-4 shadow-sm">
            <p className="text-xs text-gray-500 mb-1">Cron job</p>
            <p className="text-2xl font-bold text-green-600">✅</p>
            <p className="text-xs text-gray-400 mt-1">todo início de hora</p>
          </div>
        </div>

        {/* Histórico de cotações */}
        <div className="bg-white rounded-2xl p-4 shadow-sm">
          <h2 className="font-bold text-gray-800 mb-3">📈 Histórico de cotações</h2>
          <div className="space-y-2 max-h-64 overflow-y-auto">
            {cotacoes.map(c => (
              <div key={c.id} className="flex justify-between items-center text-sm py-1 border-b border-gray-50">
                <span className="font-semibold text-green-700">{fmt(c.valor_dolar)}</span>
                <span className="text-xs text-gray-400 bg-gray-100 px-2 py-0.5 rounded-full">{c.fonte}</span>
                <span className="text-xs text-gray-400">
                  {new Date(c.created_at).toLocaleString('pt-BR', { day: '2-digit', month: '2-digit', hour: '2-digit', minute: '2-digit' })}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Últimos cálculos */}
        {calculos.length > 0 && (
          <div className="bg-white rounded-2xl p-4 shadow-sm">
            <h2 className="font-bold text-gray-800 mb-3">🧮 Últimos cálculos</h2>
            <div className="space-y-2">
              {calculos.map(c => (
                <div key={c.id} className="flex justify-between items-center text-sm py-1 border-b border-gray-50">
                  <span className="text-gray-600">{new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'USD' }).format(c.valor_usd)}</span>
                  <span className="text-xs bg-blue-100 text-blue-700 px-2 py-0.5 rounded-full">{c.tipo_pagamento}</span>
                  <span className="font-semibold text-gray-800">{fmt(c.valor_brl)}</span>
                </div>
              ))}
            </div>
          </div>
        )}
      
        <BannerNomad />
      </div>
    </main>
  )
}
