const { createClient } = require('@supabase/supabase-js');
require('dotenv').config();
const supabase = createClient(process.env.SUPABASE_URL, process.env.SUPABASE_SERVICE_KEY);

async function test() {
  // Testa insert
  const { data, error } = await supabase.from('produtos').insert({
    nome: 'Teste iPhone 15',
    slug: 'teste-iphone-15-mega',
    foto_url: 'https://example.com/foto.jpg',
    preco_usd: 699,
    loja: 'Mega Eletronicos',
    loja_url: 'https://mega.com',
    url_produto: 'https://mega.com/iphone',
    marca: 'Apple',
    categoria: 'Celular',
    disponivel: true
  }).select('id').single();
  
  console.log('data:', JSON.stringify(data));
  console.log('error:', JSON.stringify(error));

  // Testa select para ver se a tabela existe
  const { data: rows, error: err2 } = await supabase.from('produtos').select('*').limit(5);
  console.log('rows:', JSON.stringify(rows));
  console.log('err2:', JSON.stringify(err2));
}
test();
