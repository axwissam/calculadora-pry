
import { createClient } from '@supabase/supabase-js'

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL,
  process.env.SUPABASE_SERVICE_KEY
)

export async function GET(request) {
  const { searchParams } = new URL(request.url)
  const q = searchParams.get('q') || ''
  const marca = searchParams.get('marca') || ''
  const categoria = searchParams.get('categoria') || ''
  const page = parseInt(searchParams.get('page') || '1')
  const limit = 20
  const offset = (page - 1) * limit

  let query = supabase
    .from('produtos')
    .select('*', { count: 'exact' })
    .eq('disponivel', true)
    .order('created_at', { ascending: false })
    .range(offset, offset + limit - 1)

  if (q) query = query.ilike('nome', `%${q}%`)
  if (marca) query = query.eq('marca', marca)
  if (categoria) query = query.eq('categoria', categoria)

  const { data, error, count } = await query

  if (error) return Response.json({ error: error.message }, { status: 500 })
  return Response.json({ produtos: data, total: count, page, limit })
}
