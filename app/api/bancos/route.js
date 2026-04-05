import { createClient } from '@supabase/supabase-js'

const supabase = createClient(
  process.env.SUPABASE_URL,
  process.env.SUPABASE_SERVICE_KEY
)

export async function GET() {
  const { data, error } = await supabase
    .from('spreads_bancos')
    .select('banco, tipo_cartao, taxa_spread, iof')
    .eq('ativo', true)
    .order('banco')

  if (error) return Response.json({ error: error.message }, { status: 500 })
  return Response.json(data)
}
