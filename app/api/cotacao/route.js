import { createClient } from '@supabase/supabase-js'

const supabase = createClient(
  process.env.SUPABASE_URL,
  process.env.SUPABASE_SERVICE_KEY
)

export async function GET() {
  const { data, error } = await supabase
    .from('cotacoes')
    .select('valor_dolar, fonte, created_at')
    .order('created_at', { ascending: false })
    .limit(1)
    .single()

  if (error || !data) {
    return Response.json({ error: 'Nenhuma cotação disponível' }, { status: 404 })
  }
  return Response.json(data)
}
