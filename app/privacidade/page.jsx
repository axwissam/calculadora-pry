'use client'
import { useState } from 'react'
import Link from 'next/link'
import BannerNomad from '../components/BannerNomad'

function FormContato() {
  const [nome, setNome] = useState('')
  const [email, setEmail] = useState('')
  const [enviado, setEnviado] = useState(false)
  const [loading, setLoading] = useState(false)

  const handleSubmit = async () => {
    if (!nome || !email) return
    setLoading(true)
    const form = document.createElement('form')
    form.method = 'POST'
    form.action = 'https://formsubmit.co/alex.souza3031@gmail.com'
    form.style.display = 'none'
    const fields = { nome, email, _subject: 'Contato - Calculadora Paraguai', _captcha: 'false', _template: 'table' }
    for (const [key, value] of Object.entries(fields)) {
      const input = document.createElement('input')
      input.name = key
      input.value = value
      form.appendChild(input)
    }
    document.body.appendChild(form)
    form.submit()
    setEnviado(true)
    setLoading(false)
  }

  if (enviado) return (
    <div className="bg-green-50 border border-green-200 rounded-2xl p-5 text-center">
      <p className="text-2xl mb-2">OK</p>
      <p className="font-bold text-green-800">Mensagem enviada!</p>
      <p className="text-green-700 text-sm mt-1">Entraremos em contato em breve.</p>
    </div>
  )

  return (
    <div className="bg-white rounded-2xl p-5 shadow-sm space-y-3">
      <h2 className="font-bold text-gray-800">4. Contato</h2>
      <p className="text-gray-600 text-sm">Preencha o formulario abaixo e entraremos em contato.</p>
      <div>
        <label className="block text-xs font-medium text-gray-500 mb-1">Nome</label>
        <input type="text" value={nome} onChange={e => setNome(e.target.value)} placeholder="Seu nome"
          className="w-full border border-gray-300 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-green-500" />
      </div>
      <div>
        <label className="block text-xs font-medium text-gray-500 mb-1">E-mail</label>
        <input type="email" value={email} onChange={e => setEmail(e.target.value)} placeholder="seu@email.com"
          className="w-full border border-gray-300 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-green-500" />
      </div>
      <button onClick={handleSubmit} disabled={loading || !nome || !email}
        className="w-full bg-green-500 text-white font-semibold py-3 rounded-xl disabled:opacity-50">
        {loading ? 'Enviando...' : 'Enviar mensagem'}
      </button>
    </div>
  )
}

export default function Privacidade() {
  return (
    <main className="min-h-screen bg-gray-50 pb-16">
      <div className="bg-gradient-to-r from-green-600 to-green-500 px-5 pt-10 pb-6 text-white">
        <Link href="/" className="text-green-100 text-sm mb-3 block">Calculadora</Link>
        <h1 className="text-xl font-bold">Politica de Privacidade</h1>
      </div>
      <div className="px-4 py-6 max-w-2xl mx-auto space-y-5 text-sm text-gray-600">
        <p>Ultima atualizacao: abril de 2026</p>
        <div className="bg-white rounded-2xl p-5 shadow-sm space-y-3">
          <h2 className="font-bold text-gray-800">1. Dados coletados</h2>
          <p>Esta calculadora nao coleta dados pessoais identificaveis. Os valores digitados sao processados anonimamente apenas para gerar o resultado do calculo.</p>
          <p>Registramos de forma anonima: valores calculados, tipo de pagamento e cotacao usada, sem associacao a usuarios individuais.</p>
        </div>
        <div className="bg-white rounded-2xl p-5 shadow-sm space-y-3">
          <h2 className="font-bold text-gray-800">2. Cookies e publicidade</h2>
          <p>Utilizamos o Google AdSense para exibir anuncios. O Google pode usar cookies para exibir anuncios relevantes com base em visitas anteriores.</p>
          <p>Voce pode desativar o uso de cookies acessando as <a href="https://adssettings.google.com" className="text-green-600 underline" target="_blank" rel="noopener">configuracoes de anuncios do Google</a>.</p>
        </div>
        <div className="bg-white rounded-2xl p-5 shadow-sm space-y-3">
          <h2 className="font-bold text-gray-800">3. Cotacao do dolar</h2>
          <p>As cotacoes sao obtidas do Banco Central do Brasil (PTAX) uma vez por dia em dias uteis. Nao nos responsabilizamos por variacoes entre o valor exibido e o praticado em cambio fisico.</p>
        </div>
        <FormContato />
        <Link href="/" className="block bg-green-500 text-white text-center py-3 rounded-xl font-semibold mt-4">
          Voltar para a Calculadora
        </Link>
        <BannerNomad />
      </div>
    </main>
  )
}
