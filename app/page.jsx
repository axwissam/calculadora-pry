'use client'

import { useState, useEffect, useCallback } from 'react'
import Link from 'next/link'
import BannerNomad from './components/BannerNomad'

const BANCOS_PIX    = ['Nubank', 'Inter', 'C6 Bank', 'Itaú', 'Bradesco', 'Santander', 'Pix Geral']
const BANCOS_CARTAO = ['Nomad', 'Nubank', 'Inter', 'C6 Bank', 'Itaú', 'Bradesco', 'Santander']
const fmt    = (v) => new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(v)
const fmtUSD = (v) => new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'USD' }).format(v)

function useCalculadora() {
  const [moeda, setMoeda]         = useState('USD')
  const [valorUSD, setValorUSD]   = useState('')
  const [tipo, setTipo]           = useState('dinheiro')
  const [banco, setBanco]         = useState('')
  const [resultado, setResultado] = useState(null)
  const [cotacao, setCotacao]     = useState(null)
  const [loading, setLoading]     = useState(false)
  const [error, setError]         = useState(null)

  useEffect(() => {
    fetch('/api/cotacao').then(r => r.json()).then(setCotacao).catch(() => {})
  }, [])

  const calcular = useCallback(async () => {
    const raw = parseFloat(String(valorUSD).replace(',', '.'))
    const usd = moeda === 'BRL' && cotacao?.valor_dolar ? raw / cotacao.valor_dolar : raw
    if (!usd || usd <= 0) { setResultado(null); return }
    setLoading(true); setError(null)
    try {
      const r = await fetch('/api/calcular', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ valor_usd: usd, tipo_pagamento: tipo, banco: banco || undefined }),
      })
      const data = await r.json()
      if (!r.ok) throw new Error(data.error)
      setResultado(data)
    } catch (e) { setError(e.message) }
    finally { setLoading(false) }
  }, [valorUSD, tipo, banco])

  useEffect(() => { const t = setTimeout(calcular, 400); return () => clearTimeout(t) }, [calcular])
  return { valorUSD, setValorUSD, moeda, setMoeda, tipo, setTipo, banco, setBanco, resultado, cotacao, loading, error }
}

const NOMAD_LINK = 'https://nomad.onelink.me/wIQT/Travel?code=1ER33NDKPF%26n=Alex'

function BancoSelector({ tipo, banco, setBanco }) {
  if (tipo === 'dinheiro') return null
  const lista = tipo === 'pix' ? BANCOS_PIX : BANCOS_CARTAO
  return (
    <div className="mt-3 space-y-2">
      <label className="block text-sm font-medium text-gray-600">Banco / Cartão</label>

      {/* Nomad em destaque */}
      {tipo === 'credito' && (
        <a href={NOMAD_LINK} target="_blank" rel="noopener noreferrer"
          onClick={() => setBanco('Nubank')}
          style={{ background: '#F5C800', display: 'flex', alignItems: 'center', gap: 10, borderRadius: 12, padding: '10px 14px', textDecoration: 'none', border: banco === 'Nomad' ? '2px solid #b45309' : '2px solid transparent' }}>
          <span style={{ fontWeight: 900, fontSize: 13, color: '#1a1a1a', letterSpacing: 0.5 }}>NOMAD</span>
          <div style={{ flex: 1 }}>
            <span style={{ fontSize: 12, fontWeight: 700, color: '#1a1a1a' }}>Menor taxa de câmbio</span>
            <span style={{ display: 'block', fontSize: 10, color: '#555' }}>Código 1ER33NDKPF · taxa zero na 1ª conversão</span>
          </div>
          <span style={{ fontSize: 10, background: '#1a1a1a', color: '#F5C800', borderRadius: 6, padding: '2px 7px', fontWeight: 700 }}>Indicado ⭐</span>
        </a>
      )}

      <select value={banco} onChange={e => setBanco(e.target.value)}
        className="w-full border border-gray-300 rounded-xl px-4 py-3 text-base focus:outline-none focus:ring-2 focus:ring-green-500 bg-white">
        <option value="">Selecione seu banco</option>
        {lista.map(b => <option key={b} value={b}>{b}</option>)}
      </select>
    </div>
  )
}

function Row({ label, value, color = 'text-gray-700' }) {
  return (
    <div className="flex justify-between border-b border-gray-100 pb-1">
      <span className="text-gray-500">{label}</span>
      <span className={`font-semibold ${color}`}>{value}</span>
    </div>
  )
}

function ResultadoCard({ resultado }) {
  if (!resultado) return null
  const { total_brl, imposto_brl, iof_brl, spread_brl, valor_bruto_brl, isento, excedente_usd } = resultado
  return (
    <div className="bg-white rounded-2xl shadow-md p-5 border border-green-100">
      <div className="text-center mb-4">
        <p className="text-sm text-gray-500 mb-1">Você pagará no total</p>
        <p className="text-4xl font-bold text-green-600">{fmt(total_brl)}</p>
      </div>
      <div className="space-y-2 text-sm">
        <Row label="Valor base (sem taxas)" value={fmt(valor_bruto_brl)} />
        {imposto_brl > 0 && <Row label={`Imposto 50% sobre ${fmtUSD(excedente_usd)} excedente`} value={fmt(imposto_brl)} color="text-red-500" />}
        {iof_brl > 0 && <Row label="IOF" value={fmt(iof_brl)} color="text-orange-500" />}
        {spread_brl > 0 && <Row label="Spread do banco" value={fmt(spread_brl)} color="text-orange-400" />}
      </div>
      {isento
        ? <div className="mt-4 bg-green-50 border border-green-200 rounded-xl px-4 py-2 text-sm text-green-700 text-center">✅ Dentro da cota de isenção — sem imposto!</div>
        : <div className="mt-4 bg-red-50 border border-red-200 rounded-xl px-4 py-2 text-sm text-red-700 text-center">⚠️ Acima da cota de US$ 500 — imposto aplicado</div>
      }
    </div>
  )
}

function ComparativoSection({ valorUSD }) {
  const [dados, setDados] = useState(null)
  useEffect(() => {
    const usd = parseFloat(String(valorUSD).replace(',', '.'))
    if (!usd || usd <= 0) { setDados(null); return }
    const t = setTimeout(() => {
      fetch('/api/comparar', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ valor_usd: usd }) })
        .then(r => r.json()).then(setDados).catch(() => {})
    }, 700)
    return () => clearTimeout(t)
  }, [valorUSD])
  if (!dados) return null
  const sorted = [...dados.comparativo].sort((a, b) => a.total_brl - b.total_brl)
  return (
    <div>
      <h2 className="text-base font-bold text-gray-700 mb-3">📊 Compare os métodos</h2>
      <div className="space-y-2">
        {sorted.map((item, i) => (
          <div key={item.metodo} className={`flex justify-between items-center rounded-xl px-4 py-3 border ${i === 0 ? 'bg-green-50 border-green-300' : 'bg-white border-gray-100'}`}>
            <div>
              <span className={`text-sm font-medium ${i === 0 ? 'text-green-700' : 'text-gray-700'}`}>{i === 0 ? '🏆 ' : ''}{item.metodo}</span>
              {i === 0 && <span className="ml-2 text-xs bg-green-200 text-green-800 px-2 py-0.5 rounded-full">Melhor opção</span>}
            </div>
            <span className={`font-bold ${i === 0 ? 'text-green-700' : 'text-gray-600'}`}>{fmt(item.total_brl)}</span>
          </div>
        ))}
      </div>
    </div>
  )
}

function CotacaoBar({ cotacao }) {
  if (!cotacao) return (
    <div className="mt-3 inline-flex items-center gap-2 bg-white/20 rounded-full px-3 py-1 text-sm">
      <span className="w-2 h-2 bg-yellow-300 rounded-full" />Carregando cotação...
    </div>
  )
  const minutos = Math.floor((new Date() - new Date(cotacao.created_at)) / 60000)
  const tempoStr = 'cotação do dia'
  return (
    <div className="mt-3 inline-flex items-center gap-2 bg-white/20 rounded-full px-3 py-1 text-sm">
      <span className="w-2 h-2 bg-green-300 rounded-full animate-pulse" />
      Dólar: {fmt(cotacao.valor_dolar)} · {tempoStr}
    </div>
  )
}

export default function Home() {
  const { valorUSD, setValorUSD, moeda, setMoeda, tipo, setTipo, banco, setBanco, resultado, cotacao, loading, error } = useCalculadora()
  return (
    <>
<script
  type="application/ld+json"
  dangerouslySetInnerHTML={{ __html: JSON.stringify({
    "@context": "https://schema.org",
    "@type": "WebApplication",
    "name": "Calculadora de Imposto Paraguai 2026",
    "url": "https://calculadora-pry.vercel.app",
    "description": "Calcule o imposto e custo total das suas compras no Paraguai com cotação do Banco Central em tempo real.",
    "applicationCategory": "FinanceApplication",
    "operatingSystem": "All",
    "offers": { "@type": "Offer", "price": "0", "priceCurrency": "BRL" }
  }) }}
/>
    <main className="min-h-screen bg-gray-50 pb-20">
      <div className="bg-gradient-to-r from-green-600 to-green-500 px-5 pt-10 pb-8 text-white">
        <h1 className="text-2xl font-bold">🇵🇾 Calculadora Paraguai 2026</h1>
        <p className="text-green-100 text-sm mt-1">Cota, impostos e câmbio em tempo real</p>
        <CotacaoBar cotacao={cotacao} />
      </div>

      <div className="px-4 -mt-4 space-y-4">
        <div className="bg-white rounded-2xl shadow-md p-5">
          <div className="flex items-center justify-between mb-1">
            <label className="text-sm font-medium text-gray-600">{moeda === 'USD' ? 'Valor em dólar (US$)' : 'Valor em real (R$)'}</label>
            <div className="flex rounded-lg border border-gray-200 text-xs font-semibold">
              <button onClick={() => setMoeda('USD')}
                className={`px-3 py-1 ${moeda === 'USD' ? 'bg-green-500 text-white' : 'bg-white text-gray-500'}`}>USD</button>
              <button onClick={() => setMoeda('BRL')}
                className={`px-3 py-1 ${moeda === 'BRL' ? 'bg-green-500 text-white' : 'bg-white text-gray-500'}`}>BRL</button>
            </div>
          </div>
          <div className="relative">
            <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 font-medium">{moeda === 'USD' ? 'US$' : 'R$'}</span>
            <input type="number" inputMode="decimal" placeholder="0,00" value={valorUSD}
              onChange={e => setValorUSD(e.target.value)}
              className="w-full border border-gray-300 rounded-xl pl-12 pr-4 py-3 text-xl font-semibold focus:outline-none focus:ring-2 focus:ring-green-500" />
          </div>
          <div className="mt-4">
            <label className="block text-sm font-medium text-gray-600 mb-2">Forma de pagamento</label>
            <div className="grid grid-cols-3 gap-2">
              {[{ key: 'dinheiro', icon: '💵', label: 'Dinheiro' }, { key: 'pix', icon: '📱', label: 'Pix' }, { key: 'credito', icon: '💳', label: 'Cartão' }].map(({ key, icon, label }) => (
                <button key={key} onClick={() => { setTipo(key); setBanco('') }}
                  className={`py-3 rounded-xl text-sm font-medium transition-all ${tipo === key ? 'bg-green-500 text-white shadow-sm' : 'bg-gray-100 text-gray-600'}`}>
                  {icon} {label}
                </button>
              ))}
            </div>
          </div>
          <BancoSelector tipo={tipo} banco={banco} setBanco={setBanco} />
          {loading && <div className="mt-3 text-center text-sm text-gray-400 animate-pulse">Calculando...</div>}
          {error && <div className="mt-3 bg-red-50 border border-red-200 rounded-xl px-4 py-2 text-sm text-red-600">⚠️ {error}</div>}
        </div>

        <ResultadoCard resultado={resultado} />
        <ComparativoSection valorUSD={valorUSD} />

        <BannerNomad />

        {/* Bloco de conteúdo SEO — "isca" para AdSense e Google */}
        <div className="bg-white rounded-2xl p-5 shadow-sm text-sm text-gray-600 space-y-3">
          <h2 className="font-bold text-gray-800 text-base">📋 Cota de compras no Paraguai em 2026</h2>
          <p>A cota de isenção para compras no Paraguai em 2026 é de <strong>US$ 500 por pessoa via terrestre</strong> (Ponte da Amizade / Pedro Juan Caballero). Para viagens aéreas, o limite sobe para <strong>US$ 1.000 por pessoa</strong>.</p>
          <p>Valores acima da cota são tributados em <strong>50% de imposto de importação</strong> sobre o excedente. Por exemplo: se você comprou US$ 800, paga 50% sobre os US$ 300 excedentes — ou seja, US$ 150 de imposto convertidos pela cotação do dia.</p>
          <h2 className="font-bold text-gray-800 text-base mt-2">💳 IOF e spread: os custos escondidos</h2>
          <p>Além do imposto de importação, pagamentos com cartão têm <strong>IOF de 3,5%</strong> e spread bancário de até 7%. Bancos como Nomad e Wise não cobram IOF na compra — o imposto já foi pago na conversão de reais para dólar.</p>
          <p><strong>Dica:</strong> Para economizar ao máximo, prefira pagar em dinheiro ou Pix — sem IOF e sem spread bancário. Nossa calculadora de imposto Paraguai compara todas as formas de pagamento automaticamente.</p>
          <h2 className="font-bold text-gray-800 text-base mt-2">🧮 Como usar o simulador de imposto Paraguai</h2>
          <p>Digite o valor em dólar da sua compra, escolha a forma de pagamento e selecione seu banco. O resultado aparece em segundos com cotação do Banco Central atualizada a cada 30 minutos.</p>
        </div>

        <Link href="/lojas-paraguai" className="flex items-center gap-3 bg-white rounded-xl px-4 py-3 text-sm text-gray-700 border border-gray-100 hover:border-green-300 transition-colors">
          <span className="text-3xl">🏪</span>
          <div>
            <p className="font-bold text-gray-800 text-sm">Melhores lojas do Paraguai</p>
            <p className="text-xs text-gray-500">Shopping China, Flytec, Mobile Zone e mais</p>
          </div>
          <span className="ml-auto text-green-500 font-bold">→</span>
        </Link>
        <div className="grid grid-cols-1 gap-2">
          {[
            { href: '/como-calcular-imposto-paraguai', icon: '🧮', label: 'Como calcular imposto Paraguai?' },
            { href: '/quanto-de-imposto-pagar-no-paraguai', icon: '💰', label: 'Quanto de imposto pagar?' },
            { href: '/cota-paraguai-via-terrestre', icon: '🌉', label: 'Cota via terrestre 2026' },
            { href: '/imposto-iphone-paraguai', icon: '📱', label: 'Imposto iPhone Paraguai' },
            { href: '/melhor-forma-pagamento-paraguai', icon: '💳', label: 'Melhor forma de pagamento' },
            { href: '/eletronicos-paraguai', icon: '🖥️', label: 'Eletronicos no Paraguai' },
            { href: '/perfume-paraguai', icon: '🌸', label: 'Perfume no Paraguai' },
            { href: '/limite-compras-paraguai', icon: '🛃', label: 'Qual o limite de compras?' },
            { href: '/como-declarar-paraguai',  icon: '📋', label: 'Como declarar na Receita?' },
            { href: '/o-que-comprar-paraguai',  icon: '🛍️', label: 'O que vale a pena comprar?' },
          ].map(({ href, icon, label }) => (
            <Link key={href} href={href}
              className="flex items-center gap-3 bg-white rounded-xl px-4 py-3 text-sm text-gray-700 border border-gray-100 hover:border-green-300 transition-colors">
              <span className="text-lg">{icon}</span><span>{label}</span>
              <span className="ml-auto text-gray-400">→</span>
            </Link>
          ))}
        </div>

        <div className="text-center py-2">
          <Link href="/privacidade" className="text-xs text-gray-400 hover:text-gray-600">Política de Privacidade</Link>
        </div>
      </div>
    </main>
    </>
  )
}
