
import { createClient } from '@supabase/supabase-js'

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL,
  process.env.SUPABASE_SERVICE_KEY
)

export async function GET(request, { params }) {
  const { slug } = params

  const { data: produto, error } = await supabase
    .from('produtos')
    .select('*')
    .eq('slug', slug)
    .single()

  if (error || !produto) return Response.json({ error: 'Produto não encontrado' }, { status: 404 })

  const { data: historico } = await supabase
    .from('historico_precos')
    .select('preco_usd, created_at')
    .eq('produto_id', produto.id)
    .order('created_at', { ascending: true })
    .limit(30)

  return Response.json({ produto, historico: historico || [] })
}
