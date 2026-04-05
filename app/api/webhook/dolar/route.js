import { createClient } from '@supabase/supabase-js'

const supabase = createClient(
  process.env.SUPABASE_URL,
  process.env.SUPABASE_SERVICE_KEY
)

export async function POST(request) {
  const body = await request.json()
  const { valor_dolar, fonte } = body

  if (!valor_dolar || isNaN(valor_dolar) || valor_dolar <= 0) {
    return Response.json({ error: 'valor_dolar inválido' }, { status: 400 })
  }

  const { data, error } = await supabase
    .from('cotacoes')
    .insert({ valor_dolar: +valor_dolar, fonte: fonte || 'webhook' })
    .select()
    .single()

  if (error) return Response.json({ error: error.message }, { status: 500 })
  return Response.json({ ok: true, cotacao: data })
}
