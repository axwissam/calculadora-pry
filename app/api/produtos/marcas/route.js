
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
