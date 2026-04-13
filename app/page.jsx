'use client'

import React, { useState, useEffect, useCallback } from 'react'
import Link from 'next/link'
import BannerNomad from './components/BannerNomad'

const BANCOS_PIX = ['Nubank', 'Inter', 'C6 Bank', 'ItaÃƒÆ’Ã†â€™Ãƒâ€ Ã¢â‚¬â„¢ÃƒÆ’Ã¢â‚¬Å¡Ãƒâ€šÃ‚Âº', 'Bradesco', 'Santander', 'Pix Geral']
const BANCOS_CARTAO = ['Nomad', 'Nubank', 'Inter', 'C6 Bank', 'ItaÃƒÆ’Ã†â€™Ãƒâ€ Ã¢â‚¬â„¢ÃƒÆ’Ã¢â‚¬Å¡Ãƒâ€šÃ‚Âº', 'Bradesco', 'Santander']
const fmt = (v) => new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(v)
const fmtUSD = (v) => new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'USD' }).format(v)

function useCalculadora() {
  const [moeda, setMoeda] = useState('USD')
  const [valorUSD, setValorUSD] = useState('500')
  const [tipo, setTipo] = useState('dinheiro')
  const [banco, setBanco] = useState('')
  const [resultado, setResultado] = useState(null)
  const [cotacao, setCotacao] = useState(null)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)
  const [pessoas, setPessoas] = useState(1)
  const [historico, setHistorico] = useState(() => { try { return JSON.parse(localStorage.getItem('historico_calc') || '[]') } catch { return [] } })

  useEffect(() => {
    fetch('/api/cotacao').then(r => r.json()).then(setCotacao).catch(() => { })
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
      const novoItem = { valor: usd, tipo, banco, total: data.total_brl, isento: data.isento, data: new Date().toLocaleString('pt-BR') }
      setHistorico(prev => { const novo = [novoItem, ...prev].slice(0, 5); try { localStorage.setItem('historico_calc', JSON.stringify(novo)) } catch {} return novo })
    } catch (e) { setError(e.message) }
    finally { setLoading(false) }
  }, [valorUSD, tipo, banco])

  useEffect(() => { const t = setTimeout(calcular, 400); return () => clearTimeout(t) }, [calcular])
  return { valorUSD, setValorUSD, moeda, setMoeda, tipo, setTipo, banco, setBanco, resultado, cotacao, loading, error, pessoas, setPessoas, historico }
}

const NOMAD_LINK = 'https://nomad.onelink.me/wIQT/Travel?code=1ER33NDKPF%26n=Alex'

function BancoSelector({ tipo, banco, setBanco }) {
  if (tipo === 'dinheiro') return null
  const lista = tipo === 'pix' ? BANCOS_PIX : BANCOS_CARTAO
  return (
    <div className="mt-3 space-y-2">
      <label className="block text-sm font-medium text-gray-600">Banco / CartÃƒÆ’Ã†â€™Ãƒâ€ Ã¢â‚¬â„¢ÃƒÆ’Ã¢â‚¬Å¡Ãƒâ€šÃ‚Â£o</label>

      {/* Nomad em destaque */}
      {tipo === 'credito' && (
        <a href={NOMAD_LINK} target="_blank" rel="noopener noreferrer"
          onClick={() => setBanco('Nubank')}
          style={{ background: '#F5C800', display: 'flex', alignItems: 'center', gap: 10, borderRadius: 12, padding: '10px 14px', textDecoration: 'none', border: banco === 'Nomad' ? '2px solid #b45309' : '2px solid transparent' }}>
          <span style={{ fontWeight: 900, fontSize: 13, color: '#1a1a1a', letterSpacing: 0.5 }}>NOMAD</span>
          <div style={{ flex: 1 }}>
            <span style={{ fontSize: 12, fontWeight: 700, color: '#1a1a1a' }}>Menor taxa de cÃƒÆ’Ã†â€™Ãƒâ€ Ã¢â‚¬â„¢ÃƒÆ’Ã¢â‚¬Å¡Ãƒâ€šÃ‚Â¢mbio</span>
            <span style={{ display: 'block', fontSize: 10, color: '#555' }}>CÃƒÆ’Ã†â€™Ãƒâ€ Ã¢â‚¬â„¢ÃƒÆ’Ã¢â‚¬Å¡Ãƒâ€šÃ‚Â³digo 1ER33NDKPF ÃƒÆ’Ã†â€™ÃƒÂ¢Ã¢â€šÂ¬Ã…Â¡ÃƒÆ’Ã¢â‚¬Å¡Ãƒâ€šÃ‚Â· taxa zero na 1ÃƒÆ’Ã†â€™ÃƒÂ¢Ã¢â€šÂ¬Ã…Â¡ÃƒÆ’Ã¢â‚¬Å¡Ãƒâ€šÃ‚Âª conversÃƒÆ’Ã†â€™Ãƒâ€ Ã¢â‚¬â„¢ÃƒÆ’Ã¢â‚¬Å¡Ãƒâ€šÃ‚Â£o</span>
          </div>
          <span style={{ fontSize: 10, background: '#1a1a1a', color: '#F5C800', borderRadius: 6, padding: '2px 7px', fontWeight: 700 }}>Indicado ÃƒÆ’Ã†â€™Ãƒâ€šÃ‚Â¢ÃƒÆ’Ã¢â‚¬Å¡Ãƒâ€šÃ‚Â­ÃƒÆ’Ã¢â‚¬Å¡Ãƒâ€šÃ‚Â</span>
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
        <p className="text-sm text-gray-500 mb-1">VocÃƒÆ’Ã†â€™Ãƒâ€ Ã¢â‚¬â„¢ÃƒÆ’Ã¢â‚¬Å¡Ãƒâ€šÃ‚Âª pagarÃƒÆ’Ã†â€™Ãƒâ€ Ã¢â‚¬â„¢ÃƒÆ’Ã¢â‚¬Å¡Ãƒâ€šÃ‚Â¡ no total</p>
        <p className="text-4xl font-bold text-green-600">{fmt(total_brl)}</p>
      </div>
      <div className="space-y-2 text-sm">
        <Row label="Valor base (sem taxas)" value={fmt(valor_bruto_brl)} />
        {imposto_brl > 0 && <Row label={`Imposto 50% sobre ${fmtUSD(excedente_usd)} excedente`} value={fmt(imposto_brl)} color="text-red-500" />}
        {iof_brl > 0 && <Row label="IOF" value={fmt(iof_brl)} color="text-orange-500" />}
        {spread_brl > 0 && <Row label="Spread do banco" value={fmt(spread_brl)} color="text-orange-400" />}
      </div>
      {isento
        ? <div className="mt-4 bg-green-50 border border-green-200 rounded-xl px-4 py-2 text-sm text-green-700 text-center">ÃƒÆ’Ã†â€™Ãƒâ€šÃ‚Â¢ÃƒÆ’Ã¢â‚¬Â¦ÃƒÂ¢Ã¢â€šÂ¬Ã…â€œÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬Ãƒâ€šÃ‚Â¦ Dentro da cota de isenÃƒÆ’Ã†â€™Ãƒâ€ Ã¢â‚¬â„¢ÃƒÆ’Ã¢â‚¬Å¡Ãƒâ€šÃ‚Â§ÃƒÆ’Ã†â€™Ãƒâ€ Ã¢â‚¬â„¢ÃƒÆ’Ã¢â‚¬Å¡Ãƒâ€šÃ‚Â£o ÃƒÆ’Ã†â€™Ãƒâ€šÃ‚Â¢ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â€šÂ¬Ã…Â¡Ãƒâ€šÃ‚Â¬ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬Ãƒâ€šÃ‚Â sem imposto!</div>
        : <div className="mt-4 bg-red-50 border border-red-200 rounded-xl px-4 py-2 text-sm text-red-700 text-center">ÃƒÆ’Ã†â€™Ãƒâ€šÃ‚Â¢ÃƒÆ’Ã¢â‚¬Â¦Ãƒâ€šÃ‚Â¡ÃƒÆ’Ã¢â‚¬Å¡Ãƒâ€šÃ‚Â ÃƒÆ’Ã†â€™Ãƒâ€šÃ‚Â¯ÃƒÆ’Ã¢â‚¬Å¡Ãƒâ€šÃ‚Â¸ÃƒÆ’Ã¢â‚¬Å¡Ãƒâ€šÃ‚Â Acima da cota de US$ 500 ÃƒÆ’Ã†â€™Ãƒâ€šÃ‚Â¢ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â€šÂ¬Ã…Â¡Ãƒâ€šÃ‚Â¬ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬Ãƒâ€šÃ‚Â imposto aplicado</div>
      }
    </div>
  )
}

function ComparativoSection({ valorUSD, moeda, cotacao }) {
  const [dados, setDados] = useState(null)
  useEffect(() => {
    const raw = parseFloat(String(valorUSD).replace(',', '.'))
      const usd = moeda === 'BRL' && cotacao?.valor_dolar ? raw / cotacao.valor_dolar : raw
    if (!usd || usd <= 0) { setDados(null); return }
    const t = setTimeout(() => {
      fetch('/api/comparar', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ valor_usd: usd }) })
        .then(r => r.json()).then(setDados).catch(() => { })
    }, 700)
    return () => clearTimeout(t)
  }, [valorUSD, moeda, cotacao])
  if (!dados) return null
  const sorted = [...dados.comparativo].sort((a, b) => a.total_brl - b.total_brl)
  return (
    <div>
      <h2 className="text-base font-bold text-gray-700 mb-3">ÃƒÆ’Ã†â€™Ãƒâ€šÃ‚Â°ÃƒÆ’Ã¢â‚¬Â¦Ãƒâ€šÃ‚Â¸ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬Ãƒâ€¦Ã¢â‚¬Å“ÃƒÆ’Ã¢â‚¬Â¦Ãƒâ€šÃ‚Â  Compare os mÃƒÆ’Ã†â€™Ãƒâ€ Ã¢â‚¬â„¢ÃƒÆ’Ã¢â‚¬Å¡Ãƒâ€šÃ‚Â©todos</h2>
      <div className="space-y-2">
        {sorted.map((item, i) => (
          <div key={item.metodo} className={`flex justify-between items-center rounded-xl px-4 py-3 border ${i === 0 ? 'bg-green-50 border-green-300' : 'bg-white border-gray-100'}`}>
            <div>
              <span className={`text-sm font-medium ${i === 0 ? 'text-green-700' : 'text-gray-700'}`}>{i === 0 ? 'ÃƒÆ’Ã†â€™Ãƒâ€šÃ‚Â°ÃƒÆ’Ã¢â‚¬Â¦Ãƒâ€šÃ‚Â¸ÃƒÆ’Ã¢â‚¬Å¡Ãƒâ€šÃ‚ÂÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬Ãƒâ€šÃ‚Â  ' : ''}{item.metodo}</span>
              {i === 0 && <span className="ml-2 text-xs bg-green-200 text-green-800 px-2 py-0.5 rounded-full">Melhor opÃƒÆ’Ã†â€™Ãƒâ€ Ã¢â‚¬â„¢ÃƒÆ’Ã¢â‚¬Å¡Ãƒâ€šÃ‚Â§ÃƒÆ’Ã†â€™Ãƒâ€ Ã¢â‚¬â„¢ÃƒÆ’Ã¢â‚¬Å¡Ãƒâ€šÃ‚Â£o</span>}
            </div>
            <span className={`font-bold ${i === 0 ? 'text-green-700' : 'text-gray-600'}`}>{fmt(item.total_brl)}</span>
          </div>
        ))}
      </div>
    </div>
  )
}

function CotacaoBar({ cotacao }) {
  const minutos = cotacao ? Math.floor((new Date() - new Date(cotacao.created_at)) / 60000) : null
  const tempoStr = minutos !== null ? (minutos < 60 ? `${minutos}min atrÃƒÆ’Ã†â€™Ãƒâ€ Ã¢â‚¬â„¢ÃƒÆ’Ã¢â‚¬Å¡Ãƒâ€šÃ‚Â¡s` : 'cotaÃƒÆ’Ã†â€™Ãƒâ€ Ã¢â‚¬â„¢ÃƒÆ’Ã¢â‚¬Å¡Ãƒâ€šÃ‚Â§ÃƒÆ’Ã†â€™Ãƒâ€ Ã¢â‚¬â„¢ÃƒÆ’Ã¢â‚¬Å¡Ãƒâ€šÃ‚Â£o do dia') : ''
  return (
    <div className="mt-3 inline-flex items-center gap-2 bg-white/20 rounded-full px-3 py-1 text-sm" style={{ minHeight: 28 }}>
      {cotacao ? (
        <>
          <span className="w-2 h-2 bg-green-300 rounded-full animate-pulse" />
          DÃƒÆ’Ã†â€™Ãƒâ€ Ã¢â‚¬â„¢ÃƒÆ’Ã¢â‚¬Å¡Ãƒâ€šÃ‚Â³lar: {fmt(cotacao.valor_dolar)} ÃƒÆ’Ã†â€™ÃƒÂ¢Ã¢â€šÂ¬Ã…Â¡ÃƒÆ’Ã¢â‚¬Å¡Ãƒâ€šÃ‚Â· atualizado {tempoStr}
        </>
      ) : (
        <>
          <span className="w-2 h-2 bg-yellow-300 rounded-full" />
          Carregando cotaÃƒÆ’Ã†â€™Ãƒâ€ Ã¢â‚¬â„¢ÃƒÆ’Ã¢â‚¬Å¡Ãƒâ€šÃ‚Â§ÃƒÆ’Ã†â€™Ãƒâ€ Ã¢â‚¬â„¢ÃƒÆ’Ã¢â‚¬Å¡Ãƒâ€šÃ‚Â£o...
        </>
      )}
    </div>
  )
}


function ProgressoCota({ resultado, valorUSD, cotacao, moeda }) {
  if (!resultado || !cotacao) return null
  const raw = parseFloat(String(valorUSD).replace(',', '.')) || 0
  const usd = moeda === 'BRL' && cotacao?.valor_dolar ? raw / cotacao.valor_dolar : raw
  const pct = Math.min((usd / 500) * 100, 150)
  const cor = usd <= 500 ? 'bg-green-500' : 'bg-red-500'
  const label = usd >= 500 ? (usd === 500 ? 'Na cota exata ÃƒÆ’Ã†â€™Ãƒâ€šÃ‚Â¢ÃƒÆ’Ã¢â‚¬Â¦ÃƒÂ¢Ã¢â€šÂ¬Ã…â€œÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬Ãƒâ€šÃ‚Â¦' : `US$ ${(usd - 500).toFixed(0)} acima da cota`) : `US$ ${(500 - usd).toFixed(0)} disponÃƒÆ’Ã†â€™Ãƒâ€ Ã¢â‚¬â„¢ÃƒÆ’Ã¢â‚¬Å¡Ãƒâ€šÃ‚Â­veis`
  return (
    <div className="bg-white rounded-2xl p-4 shadow-sm">
      <div className="flex justify-between text-xs text-gray-500 mb-1">
        <span>Cota usada</span>
        <span>{label}</span>
      </div>
      <div className="w-full bg-gray-100 rounded-full h-3">
        <div className={`h-3 rounded-full transition-all ${cor}`} style={{ width: `${Math.min(pct, 100)}%` }} />
      </div>
      <div className="flex justify-between text-xs mt-1">
        <span className="text-gray-400">US$ 0</span>
        <span className="text-gray-600 font-medium">US$ 500 (cota)</span>
      </div>
    </div>
  )
}

function CompartilharBtn({ resultado, valorUSD, tipo }) {
  if (!resultado) return null
  const texto = `Calculei minhas compras no Paraguai:\nÃƒÆ’Ã†â€™Ãƒâ€šÃ‚Â°ÃƒÆ’Ã¢â‚¬Â¦Ãƒâ€šÃ‚Â¸ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬ÃƒÂ¢Ã¢â‚¬Å¾Ã‚Â¢ÃƒÆ’Ã¢â‚¬Å¡Ãƒâ€šÃ‚Â° Valor: US$ ${valorUSD}\nÃƒÆ’Ã†â€™Ãƒâ€šÃ‚Â°ÃƒÆ’Ã¢â‚¬Â¦Ãƒâ€šÃ‚Â¸ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬ÃƒÂ¢Ã¢â‚¬Å¾Ã‚Â¢ÃƒÆ’Ã¢â‚¬Å¡Ãƒâ€šÃ‚Â³ Pagamento: ${tipo}\nÃƒÆ’Ã†â€™Ãƒâ€šÃ‚Â°ÃƒÆ’Ã¢â‚¬Â¦Ãƒâ€šÃ‚Â¸ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬ÃƒÂ¢Ã¢â‚¬Å¾Ã‚Â¢ÃƒÆ’Ã¢â‚¬Å¡Ãƒâ€šÃ‚Âµ Total: R$ ${resultado.total_brl.toFixed(2).replace('.', ',')}\n${resultado.isento ? 'ÃƒÆ’Ã†â€™Ãƒâ€šÃ‚Â¢ÃƒÆ’Ã¢â‚¬Â¦ÃƒÂ¢Ã¢â€šÂ¬Ã…â€œÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬Ãƒâ€šÃ‚Â¦ Dentro da cota ÃƒÆ’Ã†â€™Ãƒâ€šÃ‚Â¢ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â€šÂ¬Ã…Â¡Ãƒâ€šÃ‚Â¬ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬Ãƒâ€šÃ‚Â sem imposto!' : 'ÃƒÆ’Ã†â€™Ãƒâ€šÃ‚Â¢ÃƒÆ’Ã¢â‚¬Â¦Ãƒâ€šÃ‚Â¡ÃƒÆ’Ã¢â‚¬Å¡Ãƒâ€šÃ‚Â ÃƒÆ’Ã†â€™Ãƒâ€šÃ‚Â¯ÃƒÆ’Ã¢â‚¬Å¡Ãƒâ€šÃ‚Â¸ÃƒÆ’Ã¢â‚¬Å¡Ãƒâ€šÃ‚Â Imposto aplicado'}\n\nCalcule o seu em cotaparaguai.com.br`
  const url = `https://wa.me/?text=${encodeURIComponent(texto)}`
  return (
    <a href={url} target="_blank" rel="noopener noreferrer"
      className="flex items-center justify-center gap-2 bg-green-500 text-white rounded-xl py-3 text-sm font-semibold w-full">
      <span>ÃƒÆ’Ã†â€™Ãƒâ€šÃ‚Â°ÃƒÆ’Ã¢â‚¬Â¦Ãƒâ€šÃ‚Â¸ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬Ãƒâ€¦Ã¢â‚¬Å“ÃƒÆ’Ã¢â‚¬Å¡Ãƒâ€šÃ‚Â¤</span> Compartilhar no WhatsApp
    </a>
  )
}

function HistoricoCalcuos({ historico }) {
  if (!historico || historico.length === 0) return null
  return (
    <div className="bg-white rounded-2xl p-5 shadow-sm">
      <h2 className="font-bold text-gray-800 text-sm mb-3">ÃƒÆ’Ã†â€™Ãƒâ€šÃ‚Â°ÃƒÆ’Ã¢â‚¬Â¦Ãƒâ€šÃ‚Â¸ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬Ãƒâ€šÃ‚Â¢ÃƒÆ’Ã¢â‚¬Å¡Ãƒâ€šÃ‚Â Suas ÃƒÆ’Ã†â€™Ãƒâ€ Ã¢â‚¬â„¢ÃƒÆ’Ã¢â‚¬Å¡Ãƒâ€šÃ‚Âºltimas consultas</h2>
      <div className="space-y-2">
        {historico.map((h, i) => (
          <div key={i} className="flex justify-between items-center py-2 border-b border-gray-50 text-sm">
            <div>
              <span className="font-medium text-gray-700">US$ {h.valor.toFixed(0)}</span>
              <span className="text-gray-400 text-xs ml-2">{h.tipo} ÃƒÆ’Ã†â€™ÃƒÂ¢Ã¢â€šÂ¬Ã…Â¡ÃƒÆ’Ã¢â‚¬Å¡Ãƒâ€šÃ‚Â· {h.data}</span>
            </div>
            <span className={`font-bold ${h.isento ? 'text-green-600' : 'text-orange-500'}`}>
              {new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(h.total)}
            </span>
          </div>
        ))}
      </div>
    </div>
  )
}

function ModoFamilia({ pessoas, setPessoas, resultado, cotacao }) {
  if (!resultado || !cotacao) return null
  return (
    <div className="bg-blue-50 border border-blue-100 rounded-2xl p-4">
      <div className="flex items-center justify-between mb-2">
        <span className="text-sm font-medium text-blue-800">ÃƒÆ’Ã†â€™Ãƒâ€šÃ‚Â°ÃƒÆ’Ã¢â‚¬Â¦Ãƒâ€šÃ‚Â¸ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬Ãƒâ€¹Ã…â€œÃƒÆ’Ã¢â‚¬Å¡Ãƒâ€šÃ‚Â¨ÃƒÆ’Ã†â€™Ãƒâ€šÃ‚Â¢ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â€šÂ¬Ã…Â¡Ãƒâ€šÃ‚Â¬ÃƒÆ’Ã¢â‚¬Å¡Ãƒâ€šÃ‚ÂÃƒÆ’Ã†â€™Ãƒâ€šÃ‚Â°ÃƒÆ’Ã¢â‚¬Â¦Ãƒâ€šÃ‚Â¸ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬Ãƒâ€¹Ã…â€œÃƒÆ’Ã¢â‚¬Å¡Ãƒâ€šÃ‚Â©ÃƒÆ’Ã†â€™Ãƒâ€šÃ‚Â¢ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â€šÂ¬Ã…Â¡Ãƒâ€šÃ‚Â¬ÃƒÆ’Ã¢â‚¬Å¡Ãƒâ€šÃ‚ÂÃƒÆ’Ã†â€™Ãƒâ€šÃ‚Â°ÃƒÆ’Ã¢â‚¬Â¦Ãƒâ€šÃ‚Â¸ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬Ãƒâ€¹Ã…â€œÃƒÆ’Ã¢â‚¬Å¡Ãƒâ€šÃ‚Â§ÃƒÆ’Ã†â€™Ãƒâ€šÃ‚Â¢ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â€šÂ¬Ã…Â¡Ãƒâ€šÃ‚Â¬ÃƒÆ’Ã¢â‚¬Å¡Ãƒâ€šÃ‚ÂÃƒÆ’Ã†â€™Ãƒâ€šÃ‚Â°ÃƒÆ’Ã¢â‚¬Â¦Ãƒâ€šÃ‚Â¸ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬Ãƒâ€¹Ã…â€œÃƒÆ’Ã¢â‚¬Å¡Ãƒâ€šÃ‚Â¦ Modo famÃƒÆ’Ã†â€™Ãƒâ€ Ã¢â‚¬â„¢ÃƒÆ’Ã¢â‚¬Å¡Ãƒâ€šÃ‚Â­lia</span>
        <div className="flex items-center gap-3">
          <button onClick={() => setPessoas(p => Math.max(1, p - 1))}
            className="w-8 h-8 rounded-full bg-blue-200 text-blue-800 font-bold text-lg flex items-center justify-center">ÃƒÆ’Ã†â€™Ãƒâ€šÃ‚Â¢ÃƒÆ’Ã¢â‚¬Â¹ÃƒÂ¢Ã¢â€šÂ¬Ã‚Â ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬ÃƒÂ¢Ã¢â‚¬Å¾Ã‚Â¢</button>
          <span className="font-bold text-blue-800 w-4 text-center">{pessoas}</span>
          <button onClick={() => setPessoas(p => Math.min(10, p + 1))}
            className="w-8 h-8 rounded-full bg-blue-500 text-white font-bold text-lg flex items-center justify-center">+</button>
        </div>
      </div>
      <div className="grid grid-cols-2 gap-2 text-sm">
        <div className="bg-white rounded-xl p-3 text-center">
          <p className="text-gray-500 text-xs">Cota total</p>
          <p className="font-bold text-blue-700">US$ {(500 * pessoas).toLocaleString()}</p>
        </div>
        <div className="bg-white rounded-xl p-3 text-center">
          <p className="text-gray-500 text-xs">Total a pagar</p>
          <p className="font-bold text-green-600">
            {new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(resultado.total_brl * pessoas)}
          </p>
        </div>
      </div>
    </div>
  )
}

function BotaoFlutuante({ resultado }) {
  const [visible, setVisible] = React.useState(false)
  React.useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 400)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])
  if (!visible) return null
  return (
    <button
      onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      className="fixed bottom-6 right-4 z-50 bg-green-500 text-white rounded-full shadow-lg px-4 py-3 text-sm font-semibold flex items-center gap-2"
      style={{ boxShadow: '0 4px 20px rgba(34,197,94,0.4)' }}>
      ÃƒÆ’Ã†â€™Ãƒâ€šÃ‚Â°ÃƒÆ’Ã¢â‚¬Â¦Ãƒâ€šÃ‚Â¸ÃƒÆ’Ã¢â‚¬Å¡Ãƒâ€šÃ‚Â§ÃƒÆ’Ã¢â‚¬Å¡Ãƒâ€šÃ‚Â® Calcular
    </button>
  )
}
export default function Home() {
  const { valorUSD, setValorUSD, moeda, setMoeda, tipo, setTipo, banco, setBanco, resultado, cotacao, loading, error, pessoas, setPessoas, historico } = useCalculadora()
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebApplication",
            "name": "Calculadora de Imposto Paraguai 2026",
            "url": "https://calculadora-pry.vercel.app",
            "description": "Calcule o imposto e custo total das suas compras no Paraguai com cotaÃƒÆ’Ã†â€™Ãƒâ€ Ã¢â‚¬â„¢ÃƒÆ’Ã¢â‚¬Å¡Ãƒâ€šÃ‚Â§ÃƒÆ’Ã†â€™Ãƒâ€ Ã¢â‚¬â„¢ÃƒÆ’Ã¢â‚¬Å¡Ãƒâ€šÃ‚Â£o do Banco Central em tempo real.",
            "applicationCategory": "FinanceApplication",
            "operatingSystem": "All",
            "offers": { "@type": "Offer", "price": "0", "priceCurrency": "BRL" }
          })
        }}
      />
      <main className="min-h-screen bg-gray-50 pb-20">
        <div className="bg-gradient-to-r from-green-600 to-green-500 px-5 pt-10 pb-8 text-white">
          <h1 className="text-2xl font-bold">ÃƒÆ’Ã†â€™Ãƒâ€šÃ‚Â°ÃƒÆ’Ã¢â‚¬Â¦Ãƒâ€šÃ‚Â¸ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬Ãƒâ€šÃ‚Â¡ÃƒÆ’Ã¢â‚¬Å¡Ãƒâ€šÃ‚ÂµÃƒÆ’Ã†â€™Ãƒâ€šÃ‚Â°ÃƒÆ’Ã¢â‚¬Â¦Ãƒâ€šÃ‚Â¸ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬Ãƒâ€šÃ‚Â¡ÃƒÆ’Ã¢â‚¬Å¡Ãƒâ€šÃ‚Â¾ Calculadora Paraguai 2026</h1>
          <p className="text-green-100 text-sm mt-1">Cota, impostos e cÃƒÆ’Ã†â€™Ãƒâ€ Ã¢â‚¬â„¢ÃƒÆ’Ã¢â‚¬Å¡Ãƒâ€šÃ‚Â¢mbio em tempo real</p>
          <CotacaoBar cotacao={cotacao} />
        </div>

        <div className="px-4 -mt-4 space-y-4">
          <div className="bg-white rounded-2xl shadow-md p-5">
            <div className="flex items-center justify-between mb-1">
              <label className="text-sm font-medium text-gray-600">{moeda === 'USD' ? 'Valor em dÃƒÆ’Ã†â€™Ãƒâ€ Ã¢â‚¬â„¢ÃƒÆ’Ã¢â‚¬Å¡Ãƒâ€šÃ‚Â³lar (US$)' : 'Valor em real (R$)'}</label>
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
                autoFocus className="w-full border border-gray-300 rounded-xl pl-12 pr-4 py-3 text-xl font-semibold focus:outline-none focus:ring-2 focus:ring-green-500" />
            </div>
            <div className="mt-4">
              <label className="block text-sm font-medium text-gray-600 mb-2">Forma de pagamento</label>
              <div className="grid grid-cols-3 gap-2">
                {[{ key: 'dinheiro', icon: 'ÃƒÆ’Ã†â€™Ãƒâ€šÃ‚Â°ÃƒÆ’Ã¢â‚¬Â¦Ãƒâ€šÃ‚Â¸ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬ÃƒÂ¢Ã¢â‚¬Å¾Ã‚Â¢ÃƒÆ’Ã¢â‚¬Å¡Ãƒâ€šÃ‚Âµ', label: 'Dinheiro' }, { key: 'pix', icon: 'ÃƒÆ’Ã†â€™Ãƒâ€šÃ‚Â°ÃƒÆ’Ã¢â‚¬Â¦Ãƒâ€šÃ‚Â¸ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬Ãƒâ€¦Ã¢â‚¬Å“ÃƒÆ’Ã¢â‚¬Å¡Ãƒâ€šÃ‚Â±', label: 'Pix' }, { key: 'credito', icon: 'ÃƒÆ’Ã†â€™Ãƒâ€šÃ‚Â°ÃƒÆ’Ã¢â‚¬Â¦Ãƒâ€šÃ‚Â¸ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬ÃƒÂ¢Ã¢â‚¬Å¾Ã‚Â¢ÃƒÆ’Ã¢â‚¬Å¡Ãƒâ€šÃ‚Â³', label: 'CartÃƒÆ’Ã†â€™Ãƒâ€ Ã¢â‚¬â„¢ÃƒÆ’Ã¢â‚¬Å¡Ãƒâ€šÃ‚Â£o' }].map(({ key, icon, label }) => (
                  <button key={key} onClick={() => { setTipo(key); setBanco('') }}
                    className={`py-3 rounded-xl text-sm font-medium transition-all ${tipo === key ? 'bg-green-500 text-white shadow-sm' : 'bg-gray-100 text-gray-600'}`}>
                    {icon} {label}
                  </button>
                ))}
              </div>
            </div>
            <BancoSelector tipo={tipo} banco={banco} setBanco={setBanco} />
            {loading && <div className="mt-3 text-center text-sm text-gray-400 animate-pulse">Calculando...</div>}
            {error && <div className="mt-3 bg-red-50 border border-red-200 rounded-xl px-4 py-2 text-sm text-red-600">ÃƒÆ’Ã†â€™Ãƒâ€šÃ‚Â¢ÃƒÆ’Ã¢â‚¬Â¦Ãƒâ€šÃ‚Â¡ÃƒÆ’Ã¢â‚¬Å¡Ãƒâ€šÃ‚Â ÃƒÆ’Ã†â€™Ãƒâ€šÃ‚Â¯ÃƒÆ’Ã¢â‚¬Å¡Ãƒâ€šÃ‚Â¸ÃƒÆ’Ã¢â‚¬Å¡Ãƒâ€šÃ‚Â {error}</div>}
          </div>

          <ResultadoCard resultado={resultado} />
          <ComparativoSection valorUSD={valorUSD} moeda={moeda} cotacao={cotacao} />

          <ProgressoCota resultado={resultado} valorUSD={valorUSD} cotacao={cotacao} moeda={moeda} />
          <ModoFamilia pessoas={pessoas} setPessoas={setPessoas} resultado={resultado} cotacao={cotacao} />
          <CompartilharBtn resultado={resultado} valorUSD={valorUSD} tipo={tipo} />
          <HistoricoCalcuos historico={historico} />
          <BannerNomad />

          {/* Bloco de conteÃƒÆ’Ã†â€™Ãƒâ€ Ã¢â‚¬â„¢ÃƒÆ’Ã¢â‚¬Å¡Ãƒâ€šÃ‚Âºdo SEO ÃƒÆ’Ã†â€™Ãƒâ€šÃ‚Â¢ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â€šÂ¬Ã…Â¡Ãƒâ€šÃ‚Â¬ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬Ãƒâ€šÃ‚Â "isca" para AdSense e Google */}
          <div className="bg-white rounded-2xl p-5 shadow-sm text-sm text-gray-600 space-y-3">
            <h2 className="font-bold text-gray-800 text-base">ÃƒÆ’Ã†â€™Ãƒâ€šÃ‚Â°ÃƒÆ’Ã¢â‚¬Â¦Ãƒâ€šÃ‚Â¸ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬Ãƒâ€¦Ã¢â‚¬Å“ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬Ãƒâ€šÃ‚Â¹ Cota de compras no Paraguai em 2026</h2>
            <p>A cota de isenÃƒÆ’Ã†â€™Ãƒâ€ Ã¢â‚¬â„¢ÃƒÆ’Ã¢â‚¬Å¡Ãƒâ€šÃ‚Â§ÃƒÆ’Ã†â€™Ãƒâ€ Ã¢â‚¬â„¢ÃƒÆ’Ã¢â‚¬Å¡Ãƒâ€šÃ‚Â£o para compras no Paraguai em 2026 ÃƒÆ’Ã†â€™Ãƒâ€ Ã¢â‚¬â„¢ÃƒÆ’Ã¢â‚¬Å¡Ãƒâ€šÃ‚Â© de <strong>US$ 500 por pessoa via terrestre</strong> (Ponte da Amizade / Pedro Juan Caballero). Para viagens aÃƒÆ’Ã†â€™Ãƒâ€ Ã¢â‚¬â„¢ÃƒÆ’Ã¢â‚¬Å¡Ãƒâ€šÃ‚Â©reas, o limite sobe para <strong>US$ 1.000 por pessoa</strong>.</p>
            <p>Valores acima da cota sÃƒÆ’Ã†â€™Ãƒâ€ Ã¢â‚¬â„¢ÃƒÆ’Ã¢â‚¬Å¡Ãƒâ€šÃ‚Â£o tributados em <strong>50% de imposto de importaÃƒÆ’Ã†â€™Ãƒâ€ Ã¢â‚¬â„¢ÃƒÆ’Ã¢â‚¬Å¡Ãƒâ€šÃ‚Â§ÃƒÆ’Ã†â€™Ãƒâ€ Ã¢â‚¬â„¢ÃƒÆ’Ã¢â‚¬Å¡Ãƒâ€šÃ‚Â£o</strong> sobre o excedente. Por exemplo: se vocÃƒÆ’Ã†â€™Ãƒâ€ Ã¢â‚¬â„¢ÃƒÆ’Ã¢â‚¬Å¡Ãƒâ€šÃ‚Âª comprou US$ 800, paga 50% sobre os US$ 300 excedentes ÃƒÆ’Ã†â€™Ãƒâ€šÃ‚Â¢ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â€šÂ¬Ã…Â¡Ãƒâ€šÃ‚Â¬ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬Ãƒâ€šÃ‚Â ou seja, US$ 150 de imposto convertidos pela cotaÃƒÆ’Ã†â€™Ãƒâ€ Ã¢â‚¬â„¢ÃƒÆ’Ã¢â‚¬Å¡Ãƒâ€šÃ‚Â§ÃƒÆ’Ã†â€™Ãƒâ€ Ã¢â‚¬â„¢ÃƒÆ’Ã¢â‚¬Å¡Ãƒâ€šÃ‚Â£o do dia.</p>
            <h2 className="font-bold text-gray-800 text-base mt-2">ÃƒÆ’Ã†â€™Ãƒâ€šÃ‚Â°ÃƒÆ’Ã¢â‚¬Â¦Ãƒâ€šÃ‚Â¸ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬ÃƒÂ¢Ã¢â‚¬Å¾Ã‚Â¢ÃƒÆ’Ã¢â‚¬Å¡Ãƒâ€šÃ‚Â³ IOF e spread: os custos escondidos</h2>
            <p>AlÃƒÆ’Ã†â€™Ãƒâ€ Ã¢â‚¬â„¢ÃƒÆ’Ã¢â‚¬Å¡Ãƒâ€šÃ‚Â©m do imposto de importaÃƒÆ’Ã†â€™Ãƒâ€ Ã¢â‚¬â„¢ÃƒÆ’Ã¢â‚¬Å¡Ãƒâ€šÃ‚Â§ÃƒÆ’Ã†â€™Ãƒâ€ Ã¢â‚¬â„¢ÃƒÆ’Ã¢â‚¬Å¡Ãƒâ€šÃ‚Â£o, pagamentos com cartÃƒÆ’Ã†â€™Ãƒâ€ Ã¢â‚¬â„¢ÃƒÆ’Ã¢â‚¬Å¡Ãƒâ€šÃ‚Â£o tÃƒÆ’Ã†â€™Ãƒâ€ Ã¢â‚¬â„¢ÃƒÆ’Ã¢â‚¬Å¡Ãƒâ€šÃ‚Âªm <strong>IOF de 3,5%</strong> e spread bancÃƒÆ’Ã†â€™Ãƒâ€ Ã¢â‚¬â„¢ÃƒÆ’Ã¢â‚¬Å¡Ãƒâ€šÃ‚Â¡rio de atÃƒÆ’Ã†â€™Ãƒâ€ Ã¢â‚¬â„¢ÃƒÆ’Ã¢â‚¬Å¡Ãƒâ€šÃ‚Â© 7%. Bancos como Nomad e Wise nÃƒÆ’Ã†â€™Ãƒâ€ Ã¢â‚¬â„¢ÃƒÆ’Ã¢â‚¬Å¡Ãƒâ€šÃ‚Â£o cobram IOF na compra ÃƒÆ’Ã†â€™Ãƒâ€šÃ‚Â¢ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â€šÂ¬Ã…Â¡Ãƒâ€šÃ‚Â¬ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬Ãƒâ€šÃ‚Â o imposto jÃƒÆ’Ã†â€™Ãƒâ€ Ã¢â‚¬â„¢ÃƒÆ’Ã¢â‚¬Å¡Ãƒâ€šÃ‚Â¡ foi pago na conversÃƒÆ’Ã†â€™Ãƒâ€ Ã¢â‚¬â„¢ÃƒÆ’Ã¢â‚¬Å¡Ãƒâ€šÃ‚Â£o de reais para dÃƒÆ’Ã†â€™Ãƒâ€ Ã¢â‚¬â„¢ÃƒÆ’Ã¢â‚¬Å¡Ãƒâ€šÃ‚Â³lar.</p>
            <p><strong>Dica:</strong> Para economizar ao mÃƒÆ’Ã†â€™Ãƒâ€ Ã¢â‚¬â„¢ÃƒÆ’Ã¢â‚¬Å¡Ãƒâ€šÃ‚Â¡ximo, prefira pagar em dinheiro ou Pix ÃƒÆ’Ã†â€™Ãƒâ€šÃ‚Â¢ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â€šÂ¬Ã…Â¡Ãƒâ€šÃ‚Â¬ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬Ãƒâ€šÃ‚Â sem IOF e sem spread bancÃƒÆ’Ã†â€™Ãƒâ€ Ã¢â‚¬â„¢ÃƒÆ’Ã¢â‚¬Å¡Ãƒâ€šÃ‚Â¡rio. Nossa calculadora de imposto Paraguai compara todas as formas de pagamento automaticamente.</p>
            <h2 className="font-bold text-gray-800 text-base mt-2">ÃƒÆ’Ã†â€™Ãƒâ€šÃ‚Â°ÃƒÆ’Ã¢â‚¬Â¦Ãƒâ€šÃ‚Â¸ÃƒÆ’Ã¢â‚¬Å¡Ãƒâ€šÃ‚Â§ÃƒÆ’Ã¢â‚¬Å¡Ãƒâ€šÃ‚Â® Como usar o simulador de imposto Paraguai</h2>
            <p>Digite o valor em dÃƒÆ’Ã†â€™Ãƒâ€ Ã¢â‚¬â„¢ÃƒÆ’Ã¢â‚¬Å¡Ãƒâ€šÃ‚Â³lar da sua compra, escolha a forma de pagamento e selecione seu banco. O resultado aparece em segundos com cotaÃƒÆ’Ã†â€™Ãƒâ€ Ã¢â‚¬â„¢ÃƒÆ’Ã¢â‚¬Å¡Ãƒâ€šÃ‚Â§ÃƒÆ’Ã†â€™Ãƒâ€ Ã¢â‚¬â„¢ÃƒÆ’Ã¢â‚¬Å¡Ãƒâ€šÃ‚Â£o do Banco Central atualizada a cada 30 minutos.</p>
          </div>

          <Link href="/lojas-paraguai" className="flex items-center gap-3 bg-white rounded-xl px-4 py-3 text-sm text-gray-700 border border-gray-100 hover:border-green-300 transition-colors">
            <span className="text-3xl">ÃƒÆ’Ã†â€™Ãƒâ€šÃ‚Â°ÃƒÆ’Ã¢â‚¬Â¦Ãƒâ€šÃ‚Â¸ÃƒÆ’Ã¢â‚¬Å¡Ãƒâ€šÃ‚ÂÃƒÆ’Ã¢â‚¬Å¡Ãƒâ€šÃ‚Âª</span>
            <div>
              <p className="font-bold text-gray-800 text-sm">Melhores lojas do Paraguai</p>
              <p className="text-xs text-gray-500">Shopping China, Flytec, Mobile Zone e mais</p>
            </div>
            <span className="ml-auto text-green-500 font-bold">ÃƒÆ’Ã†â€™Ãƒâ€šÃ‚Â¢ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬Ãƒâ€šÃ‚Â ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬ÃƒÂ¢Ã¢â‚¬Å¾Ã‚Â¢</span>
          </Link>
          <div className="grid grid-cols-1 gap-2">
            {[
              { href: '/celular-paraguai', icon: 'ÃƒÆ’Ã†â€™Ãƒâ€šÃ‚Â°ÃƒÆ’Ã¢â‚¬Â¦Ãƒâ€šÃ‚Â¸ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬Ãƒâ€¦Ã¢â‚¬Å“ÃƒÆ’Ã¢â‚¬Å¡Ãƒâ€šÃ‚Â±', label: 'Celular no Paraguai 2026' },
            { href: '/notebook-paraguai', icon: 'ÃƒÆ’Ã†â€™Ãƒâ€šÃ‚Â°ÃƒÆ’Ã¢â‚¬Â¦Ãƒâ€šÃ‚Â¸ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬ÃƒÂ¢Ã¢â‚¬Å¾Ã‚Â¢ÃƒÆ’Ã¢â‚¬Å¡Ãƒâ€šÃ‚Â»', label: 'Notebook no Paraguai 2026' },
            { href: '/whisky-paraguai', icon: 'ÃƒÆ’Ã†â€™Ãƒâ€šÃ‚Â°ÃƒÆ’Ã¢â‚¬Â¦Ãƒâ€šÃ‚Â¸ÃƒÆ’Ã¢â‚¬Å¡Ãƒâ€šÃ‚Â¥ÃƒÆ’Ã¢â‚¬Â ÃƒÂ¢Ã¢â€šÂ¬Ã¢â€žÂ¢', label: 'Whisky no Paraguai 2026' },
            { href: '/samsung-paraguai', icon: 'ÃƒÆ’Ã†â€™Ãƒâ€šÃ‚Â°ÃƒÆ’Ã¢â‚¬Â¦Ãƒâ€šÃ‚Â¸ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬Ãƒâ€¦Ã¢â‚¬Å“ÃƒÆ’Ã¢â‚¬Å¡Ãƒâ€šÃ‚Â²', label: 'Samsung no Paraguai 2026' },
              { href: '/airpods-paraguai', icon: 'ÃƒÆ’Ã†â€™Ãƒâ€šÃ‚Â°ÃƒÆ’Ã¢â‚¬Â¦Ãƒâ€šÃ‚Â¸ÃƒÆ’Ã¢â‚¬Â¦Ãƒâ€šÃ‚Â½ÃƒÆ’Ã¢â‚¬Å¡Ãƒâ€šÃ‚Â§', label: 'AirPods no Paraguai 2026' },
              { href: '/macbook-paraguai', icon: 'ÃƒÆ’Ã†â€™Ãƒâ€šÃ‚Â°ÃƒÆ’Ã¢â‚¬Â¦Ãƒâ€šÃ‚Â¸ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬ÃƒÂ¢Ã¢â‚¬Å¾Ã‚Â¢ÃƒÆ’Ã¢â‚¬Å¡Ãƒâ€šÃ‚Â»', label: 'MacBook no Paraguai 2026' },
              { href: '/quanto-custa-iphone-paraguai', icon: '', label: 'Quanto custa iPhone no Paraguai?' },
              { href: '/ps5-paraguai', icon: '', label: 'PS5 no Paraguai 2026' },
              { href: '/perfume-chanel-paraguai', icon: '', label: 'Perfume Chanel no Paraguai' },
              { href: '/como-calcular-imposto-paraguai', icon: 'ÃƒÆ’Ã†â€™Ãƒâ€šÃ‚Â°ÃƒÆ’Ã¢â‚¬Â¦Ãƒâ€šÃ‚Â¸ÃƒÆ’Ã¢â‚¬Å¡Ãƒâ€šÃ‚Â§ÃƒÆ’Ã¢â‚¬Å¡Ãƒâ€šÃ‚Â®', label: 'Como calcular imposto Paraguai?' },
              { href: '/quanto-de-imposto-pagar-no-paraguai', icon: 'ÃƒÆ’Ã†â€™Ãƒâ€šÃ‚Â°ÃƒÆ’Ã¢â‚¬Â¦Ãƒâ€šÃ‚Â¸ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬ÃƒÂ¢Ã¢â‚¬Å¾Ã‚Â¢ÃƒÆ’Ã¢â‚¬Å¡Ãƒâ€šÃ‚Â°', label: 'Quanto de imposto pagar?' },
              { href: '/cota-paraguai-via-terrestre', icon: 'ÃƒÆ’Ã†â€™Ãƒâ€šÃ‚Â°ÃƒÆ’Ã¢â‚¬Â¦Ãƒâ€šÃ‚Â¸ÃƒÆ’Ã¢â‚¬Â¦ÃƒÂ¢Ã¢â€šÂ¬Ã¢â€žÂ¢ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬Ãƒâ€šÃ‚Â°', label: 'Cota via terrestre 2026' },
              { href: '/imposto-iphone-paraguai', icon: 'ÃƒÆ’Ã†â€™Ãƒâ€šÃ‚Â°ÃƒÆ’Ã¢â‚¬Â¦Ãƒâ€šÃ‚Â¸ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬Ãƒâ€¦Ã¢â‚¬Å“ÃƒÆ’Ã¢â‚¬Å¡Ãƒâ€šÃ‚Â±', label: 'Imposto iPhone Paraguai' },
              { href: '/melhor-forma-pagamento-paraguai', icon: 'ÃƒÆ’Ã†â€™Ãƒâ€šÃ‚Â°ÃƒÆ’Ã¢â‚¬Â¦Ãƒâ€šÃ‚Â¸ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬ÃƒÂ¢Ã¢â‚¬Å¾Ã‚Â¢ÃƒÆ’Ã¢â‚¬Å¡Ãƒâ€šÃ‚Â³', label: 'Melhor forma de pagamento' },
              { href: '/eletronicos-paraguai', icon: 'ÃƒÆ’Ã†â€™Ãƒâ€šÃ‚Â°ÃƒÆ’Ã¢â‚¬Â¦Ãƒâ€šÃ‚Â¸ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬ÃƒÂ¢Ã¢â€šÂ¬Ã…â€œÃƒÆ’Ã¢â‚¬Å¡Ãƒâ€šÃ‚Â¥ÃƒÆ’Ã†â€™Ãƒâ€šÃ‚Â¯ÃƒÆ’Ã¢â‚¬Å¡Ãƒâ€šÃ‚Â¸ÃƒÆ’Ã¢â‚¬Å¡Ãƒâ€šÃ‚Â', label: 'Eletronicos no Paraguai' },
              { href: '/perfume-paraguai', icon: 'ÃƒÆ’Ã†â€™Ãƒâ€šÃ‚Â°ÃƒÆ’Ã¢â‚¬Â¦Ãƒâ€šÃ‚Â¸ÃƒÆ’Ã¢â‚¬Â¦ÃƒÂ¢Ã¢â€šÂ¬Ã¢â€žÂ¢ÃƒÆ’Ã¢â‚¬Å¡Ãƒâ€šÃ‚Â¸', label: 'Perfume no Paraguai' },
              { href: '/limite-compras-paraguai', icon: 'ÃƒÆ’Ã†â€™Ãƒâ€šÃ‚Â°ÃƒÆ’Ã¢â‚¬Â¦Ãƒâ€šÃ‚Â¸ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬Ãƒâ€šÃ‚ÂºÃƒÆ’Ã¢â‚¬Â ÃƒÂ¢Ã¢â€šÂ¬Ã¢â€žÂ¢', label: 'Qual o limite de compras?' },
              { href: '/como-declarar-paraguai', icon: 'ÃƒÆ’Ã†â€™Ãƒâ€šÃ‚Â°ÃƒÆ’Ã¢â‚¬Â¦Ãƒâ€šÃ‚Â¸ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬Ãƒâ€¦Ã¢â‚¬Å“ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬Ãƒâ€šÃ‚Â¹', label: 'Como declarar na Receita?' },
              { href: '/o-que-comprar-paraguai', icon: 'ÃƒÆ’Ã†â€™Ãƒâ€šÃ‚Â°ÃƒÆ’Ã¢â‚¬Â¦Ãƒâ€šÃ‚Â¸ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬Ãƒâ€šÃ‚ÂºÃƒÆ’Ã¢â‚¬Å¡Ãƒâ€šÃ‚ÂÃƒÆ’Ã†â€™Ãƒâ€šÃ‚Â¯ÃƒÆ’Ã¢â‚¬Å¡Ãƒâ€šÃ‚Â¸ÃƒÆ’Ã¢â‚¬Å¡Ãƒâ€šÃ‚Â', label: 'O que vale a pena comprar?' },
            ].map(({ href, icon, label }) => (
              <Link key={href} href={href}
                className="flex items-center gap-3 bg-white rounded-xl px-4 py-3 text-sm text-gray-700 border border-gray-100 hover:border-green-300 transition-colors">
                <span className="text-lg">{icon}</span><span>{label}</span>
                <span className="ml-auto text-gray-400">ÃƒÆ’Ã†â€™Ãƒâ€šÃ‚Â¢ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬Ãƒâ€šÃ‚Â ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬ÃƒÂ¢Ã¢â‚¬Å¾Ã‚Â¢</span>
              </Link>
            ))}
          </div>

          <div className="text-center py-2">
            <Link href="/privacidade" className="text-xs text-gray-400 hover:text-gray-600">PolÃƒÆ’Ã†â€™Ãƒâ€ Ã¢â‚¬â„¢ÃƒÆ’Ã¢â‚¬Å¡Ãƒâ€šÃ‚Â­tica de Privacidade</Link>
          </div>
        </div>
            <BotaoFlutuante resultado={resultado} />
      </main>
    </>
  )
}
