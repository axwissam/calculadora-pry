import { createClient } from '@supabase/supabase-js'

const supabase = createClient(
  process.env.SUPABASE_URL,
  process.env.SUPABASE_SERVICE_KEY
)

function calcular(valorUSD, cotacao, spread, iof) {
  const ISENCAO = 500
  const excedente = Math.max(0, valorUSD - ISENCAO)
  const impostoBRL = excedente * 0.50 * cotacao
  const valorBrutoBRL = valorUSD * cotacao
  const iofBRL = valorBrutoBRL * iof
  const spreadBRL = valorBrutoBRL * spread
  const totalBRL = valorBrutoBRL + impostoBRL + iofBRL + spreadBRL

  return {
    valor_usd: valorUSD,
    cotacao_usada: cotacao,
    valor_bruto_brl: +valorBrutoBRL.toFixed(2),
    imposto_brl: +impostoBRL.toFixed(2),
    iof_brl: +iofBRL.toFixed(2),
    spread_brl: +spreadBRL.toFixed(2),
    total_brl: +totalBRL.toFixed(2),
    isento: valorUSD <= ISENCAO,
    excedente_usd: +excedente.toFixed(2),
  }
}

export async function POST(request) {
  const body = await request.json()
  const { valor_usd, tipo_pagamento, banco } = body

  if (!valor_usd || isNaN(valor_usd) || valor_usd < 0) {
    return Response.json({ error: 'valor_usd inválido' }, { status: 400 })
  }

  // Busca cotação mais recente
  const { data: cotacaoData } = await supabase
    .from('cotacoes')
    .select('valor_dolar')
    .order('created_at', { ascending: false })
    .limit(1)
    .single()

  if (!cotacaoData) {
    return Response.json({ error: 'Cotação não disponível' }, { status: 503 })
  }

  const cotacao = parseFloat(cotacaoData.valor_dolar)
  let spread = 0, iof = 0

  if (tipo_pagamento !== 'dinheiro' && banco) {
    const { data: spreadData } = await supabase
      .from('spreads_bancos')
      .select('taxa_spread, iof')
      .eq('banco', banco)
      .eq('tipo_cartao', tipo_pagamento)
      .eq('ativo', true)
      .single()

    if (spreadData) {
      spread = parseFloat(spreadData.taxa_spread)
      iof = parseFloat(spreadData.iof)
    }
  }

  const resultado = calcular(parseFloat(valor_usd), cotacao, spread, iof)

  // Log assíncrono
  supabase.from('calculos_log').insert({
    valor_usd: resultado.valor_usd,
    tipo_pagamento: tipo_pagamento || 'dinheiro',
    banco: banco || null,
    cotacao_usada: cotacao,
    valor_brl: resultado.total_brl,
    imposto_brl: resultado.imposto_brl,
    iof_brl: resultado.iof_brl,
    spread_brl: resultado.spread_brl,
  }).then(() => {})

  return Response.json(resultado)
}
