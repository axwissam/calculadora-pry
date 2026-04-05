import { createClient } from '@supabase/supabase-js'

const supabase = createClient(
  process.env.SUPABASE_URL,
  process.env.SUPABASE_SERVICE_KEY
)

function calcular(valorUSD, cotacao, spread, iof) {
  const excedente = Math.max(0, valorUSD - 500)
  const impostoBRL = excedente * 0.50 * cotacao
  const valorBrutoBRL = valorUSD * cotacao
  const total = valorBrutoBRL + impostoBRL + (valorBrutoBRL * iof) + (valorBrutoBRL * spread)
  return { total_brl: +total.toFixed(2), imposto_brl: +impostoBRL.toFixed(2) }
}

export async function POST(request) {
  const { valor_usd } = await request.json()
  if (!valor_usd || isNaN(valor_usd)) {
    return Response.json({ error: 'valor_usd inválido' }, { status: 400 })
  }

  const { data: cotacaoData } = await supabase
    .from('cotacoes')
    .select('valor_dolar, created_at')
    .order('created_at', { ascending: false })
    .limit(1)
    .single()

  if (!cotacaoData) return Response.json({ error: 'Cotação não disponível' }, { status: 503 })

  const cotacao = parseFloat(cotacaoData.valor_dolar)
  const usd = parseFloat(valor_usd)

  const comparativo = [
    { metodo: 'Dinheiro (espécie)', ...calcular(usd, cotacao, 0, 0) },
    { metodo: 'Pix (Nubank/Inter)',  ...calcular(usd, cotacao, 0, 0.0038) },
    { metodo: 'Crédito (Nubank/C6)', ...calcular(usd, cotacao, 0.04, 0.0638) },
    { metodo: 'Crédito (banco trad.)', ...calcular(usd, cotacao, 0.06, 0.0638) },
  ]

  return Response.json({
    cotacao_usada: cotacao,
    atualizado_em: cotacaoData.created_at,
    comparativo,
  })
}
