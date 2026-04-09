const fs = require('fs');

// ===== COMO DECLARAR =====
const declarar = `import Link from 'next/link'
import BannerNomad from '../components/BannerNomad'

export const metadata = {
  title: 'Como declarar compras no Paraguai em 2026? | Calculadora Paraguai',
  description: 'Guia completo sobre como declarar compras feitas no Paraguai na Receita Federal. App e-DBV, o que declarar, como pagar o imposto e evitar multas.',
  keywords: 'como declarar compras paraguai, declaracao receita federal paraguai, imposto compras paraguai 2026, app edbv paraguai',
}

export default function ComoDeclarar() {
  return (
    <main className="min-h-screen bg-gray-50 pb-16">
      <div className="bg-gradient-to-r from-green-600 to-green-500 px-5 pt-12 pb-8 text-white">
        <Link href="/" className="text-green-100 text-sm mb-4 block">← Calculadora</Link>
        <h1 className="text-2xl font-bold">Como declarar compras no Paraguai em 2026?</h1>
        <p className="text-green-100 mt-2 text-sm">Guia completo para declarar na Receita Federal e evitar multas.</p>
      </div>

      <div className="px-4 py-6 max-w-2xl mx-auto space-y-5">

        <div className="bg-white rounded-2xl p-5 shadow-sm">
          <h2 className="text-lg font-bold text-gray-800 mb-3">📋 Quando precisa declarar?</h2>
          <p className="text-gray-600 text-sm mb-3">Você precisa declarar suas compras ao passar pela aduana brasileira quando o valor total ultrapassar a <strong>cota de isenção de US$ 500</strong> por pessoa via terrestre ou US$ 1.000 via aérea.</p>
          <div className="space-y-2">
            <div className="flex items-center gap-3 bg-green-50 rounded-xl p-3">
              <span className="text-xl">✅</span>
              <div>
                <p className="font-semibold text-green-800 text-sm">Até US$ 500 (terrestre)</p>
                <p className="text-green-600 text-xs">Não precisa declarar — mas guarde as notas fiscais</p>
              </div>
            </div>
            <div className="flex items-center gap-3 bg-red-50 rounded-xl p-3">
              <span className="text-xl">⚠️</span>
              <div>
                <p className="font-semibold text-red-800 text-sm">Acima de US$ 500</p>
                <p className="text-red-600 text-xs">Declaração obrigatória + pagamento de 50% sobre o excedente</p>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-2xl p-5 shadow-sm">
          <h2 className="text-lg font-bold text-gray-800 mb-3">📱 App e-DBV (Receita Federal)</h2>
          <p className="text-gray-600 text-sm mb-3">A Receita Federal disponibiliza o app <strong>e-DBV</strong> para declarar bens de viajantes de forma digital, antes mesmo de chegar à aduana. É gratuito e disponível para iOS e Android.</p>
          <ol className="space-y-2 text-gray-600 text-sm">
            <li className="flex gap-2"><span className="bg-green-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm flex-shrink-0">1</span><p>Baixe o app <strong>"e-DBV"</strong> na loja do seu celular</p></li>
            <li className="flex gap-2"><span className="bg-green-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm flex-shrink-0">2</span><p>Informe seus dados pessoais, CPF e data de viagem</p></li>
            <li className="flex gap-2"><span className="bg-green-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm flex-shrink-0">3</span><p>Liste os produtos comprados com valores em dólares</p></li>
            <li className="flex gap-2"><span className="bg-green-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm flex-shrink-0">4</span><p>Pague o imposto calculado pelo app via <strong>Pix ou boleto</strong></p></li>
            <li className="flex gap-2"><span className="bg-green-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm flex-shrink-0">5</span><p>Apresente o comprovante na aduana da Ponte da Amizade</p></li>
          </ol>
          <div className="bg-blue-50 rounded-xl p-3 mt-3">
            <p className="text-blue-800 text-xs font-semibold">💡 Dica</p>
            <p className="text-blue-700 text-xs mt-1">Declare pelo app <strong>antes de cruzar a ponte</strong> — evita fila na aduana e o processo é muito mais rápido.</p>
          </div>
        </div>

        <div className="bg-white rounded-2xl p-5 shadow-sm">
          <h2 className="text-lg font-bold text-gray-800 mb-3">🧾 O que precisa ter na nota fiscal?</h2>
          <p className="text-gray-600 text-sm mb-3">Sempre exija nota fiscal nas lojas do Paraguai. A nota precisa ter:</p>
          <div className="space-y-1 text-sm text-gray-600">
            {['Nome ou descrição do produto', 'Quantidade', 'Valor em dólares ou guaranis', 'Nome e CNPJ/RUC da loja', 'Data da compra'].map(item => (
              <div key={item} className="flex gap-2 items-center">
                <span className="text-green-500">✓</span><span>{item}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white rounded-2xl p-5 shadow-sm">
          <h2 className="text-lg font-bold text-gray-800 mb-3">❌ O que acontece se não declarar?</h2>
          <p className="text-gray-600 text-sm mb-3">A aduana brasileira faz fiscalização aleatória e com scanners. Se pegar mercadoria não declarada:</p>
          <div className="space-y-2">
            {[
              { icon: '❌', texto: 'Apreensão imediata das mercadorias' },
              { icon: '❌', texto: 'Multa de 50% a 100% sobre o valor dos bens' },
              { icon: '❌', texto: 'Processo administrativo na Receita Federal' },
              { icon: '❌', texto: 'Possível impedimento em viagens futuras' },
            ].map(({ icon, texto }) => (
              <div key={texto} className="flex gap-2 items-center text-sm text-gray-600">
                <span>{icon}</span><span>{texto}</span>
              </div>
            ))}
          </div>
          <p className="mt-3 text-sm text-gray-500 bg-yellow-50 rounded-xl p-3">⚠️ Não vale o risco — o imposto de 50% sobre o excedente costuma ser bem menor que a multa por não declarar.</p>
        </div>

        <div className="bg-white rounded-2xl p-5 shadow-sm">
          <h2 className="text-lg font-bold text-gray-800 mb-3">💡 Dicas para passar tranquilo na aduana</h2>
          <div className="space-y-2 text-sm text-gray-600">
            <div className="flex gap-2"><span>1️⃣</span><p>Separe todas as notas fiscais em uma pasta ou envelope</p></div>
            <div className="flex gap-2"><span>2️⃣</span><p>Declare pelo app e-DBV antes de sair do Paraguai</p></div>
            <div className="flex gap-2"><span>3️⃣</span><p>Não esconda produtos na mala ou no carro — os scanners detectam</p></div>
            <div className="flex gap-2"><span>4️⃣</span><p>Produtos para uso pessoal têm tratamento diferente de mercadorias para revenda</p></div>
            <div className="flex gap-2"><span>5️⃣</span><p>Se tiver dúvida, declare — é sempre melhor do que arrriscar a apreensão</p></div>
          </div>
        </div>

        <div className="bg-green-50 border border-green-100 rounded-2xl p-5">
          <p className="font-bold text-green-800 mb-1">🧮 Calcule o imposto antes de comprar</p>
          <p className="text-green-700 text-sm mb-3">Saiba exatamente quanto vai pagar com nossa calculadora antes de ir às compras.</p>
          <Link href="/" className="block bg-green-500 text-white text-center py-3 rounded-xl font-semibold">Abrir Calculadora →</Link>
        </div>

        <BannerNomad />
      </div>
    </main>
  )
}
`;

// ===== CALCULADORA DOLAR =====
const dolar = `import Link from 'next/link'
import BannerNomad from '../components/BannerNomad'

export const metadata = {
  title: 'Calculadora Dólar Paraguai 2026 — Quanto vale em reais? | Calculadora Paraguai',
  description: 'Converta dólar para real nas compras do Paraguai em 2026. Calcule com câmbio atualizado do Banco Central, impostos, IOF e spread bancário incluídos.',
  keywords: 'calculadora dolar paraguai, converter dolar real paraguai 2026, dolar paraguai hoje, cotacao dolar paraguai, quanto vale dolar paraguai',
}

export default function CalculadoraDolarParaguai() {
  return (
    <main className="min-h-screen bg-gray-50 pb-16">
      <div className="bg-gradient-to-r from-green-600 to-green-500 px-5 pt-12 pb-8 text-white">
        <Link href="/" className="text-green-100 text-sm mb-4 block">← Calculadora</Link>
        <h1 className="text-2xl font-bold">Calculadora Dólar Paraguai 2026</h1>
        <p className="text-green-100 mt-2 text-sm">Converta dólar para real com impostos, IOF e câmbio real incluídos.</p>
      </div>
      <div className="px-4 py-6 max-w-2xl mx-auto space-y-6">

        <div className="bg-green-500 rounded-2xl p-5 text-white text-center">
          <p className="font-bold text-xl mb-1">🧮 Use a calculadora agora</p>
          <p className="text-green-100 text-sm mb-4">Cotação do dia direto do Banco Central. Resultado em segundos.</p>
          <Link href="/" className="block bg-white text-green-600 font-bold py-3 rounded-xl">Calcular minha compra →</Link>
        </div>

        <div className="bg-white rounded-2xl p-5 shadow-sm">
          <h2 className="text-lg font-bold text-gray-800 mb-3">❌ Por que não basta multiplicar pelo dólar?</h2>
          <p className="text-gray-600 text-sm mb-3">Muita gente multiplica o preço em dólar pela cotação do dia e acha que sabe o valor final. Mas no Paraguai existem custos extras que podem aumentar em <strong>15% a 25%</strong> o valor dependendo de como você paga.</p>
          <div className="space-y-2 text-sm">
            {[
              { custo: 'Cotação dólar turismo', impacto: '+2% a +5%', desc: 'Bancos usam cotação mais cara que a comercial' },
              { custo: 'IOF', impacto: '+3,5%', desc: 'Imposto federal em transações internacionais com cartão' },
              { custo: 'Spread bancário', impacto: '+3% a +7%', desc: 'Margem do banco na conversão de moeda' },
              { custo: 'Taxa da loja no cartão', impacto: '+5% a +10%', desc: 'Cobrada pelas lojas para pagamento em cartão' },
              { custo: 'Imposto de importação', impacto: '+50% sobre excedente', desc: 'Para compras acima de US$ 500 por pessoa' },
            ].map(({ custo, impacto, desc }) => (
              <div key={custo} className="bg-gray-50 rounded-xl p-3">
                <div className="flex justify-between items-center">
                  <p className="font-medium text-gray-700 text-sm">{custo}</p>
                  <span className="text-red-500 font-bold text-xs">{impacto}</span>
                </div>
                <p className="text-gray-400 text-xs mt-0.5">{desc}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white rounded-2xl p-5 shadow-sm">
          <h2 className="text-lg font-bold text-gray-800 mb-3">💱 Dólar turismo vs dólar comercial</h2>
          <p className="text-gray-600 text-sm mb-3">A cotação que você vê no Google é o <strong>dólar comercial</strong>. Mas nem todo mundo paga por ela:</p>
          <div className="grid grid-cols-2 gap-3 text-sm">
            <div className="bg-blue-50 rounded-xl p-3">
              <p className="font-bold text-blue-800">Dólar Comercial</p>
              <p className="text-blue-600 mt-1 text-xs">Usado por: Nomad, Wise, Pix</p>
              <p className="text-blue-700 font-semibold mt-2">Mais barato ✅</p>
            </div>
            <div className="bg-orange-50 rounded-xl p-3">
              <p className="font-bold text-orange-800">Dólar Turismo</p>
              <p className="text-orange-600 mt-1 text-xs">Usado por: bancos tradicionais</p>
              <p className="text-orange-700 font-semibold mt-2">2% a 5% mais caro ⚠️</p>
            </div>
          </div>
          <p className="text-gray-500 text-xs mt-3">Nossa calculadora usa o dólar comercial do Banco Central — a cotação mais justa para o consumidor.</p>
        </div>

        <div className="bg-white rounded-2xl p-5 shadow-sm">
          <h2 className="text-lg font-bold text-gray-800 mb-3">💵 Qual a melhor forma de pagar no Paraguai?</h2>
          <div className="space-y-2 text-sm">
            {[
              { forma: '💵 Dinheiro em espécie', avaliacao: 'Melhor opção', cor: 'green', desc: 'Zero IOF, zero spread, cotação comercial. Mas exige cuidado com segurança.' },
              { forma: '📱 Pix (via Nomad/Wise)', avaliacao: 'Ótima opção', cor: 'green', desc: 'Sem IOF, spread baixo, seguro e prático.' },
              { forma: '💳 Cartão Nomad/Wise', avaliacao: 'Boa opção', cor: 'blue', desc: 'Sem IOF, spread de 1-2%. Verifique taxa da maquininha.' },
              { forma: '💳 Cartão comum (Visa/Master)', avaliacao: 'Evite', cor: 'red', desc: 'IOF 3,5% + spread 4-7% + cotação turismo. Muito mais caro.' },
            ].map(({ forma, avaliacao, cor, desc }) => (
              <div key={forma} className={\`rounded-xl p-3 \${cor === 'green' ? 'bg-green-50' : cor === 'blue' ? 'bg-blue-50' : 'bg-red-50'}\`}>
                <div className="flex justify-between items-center">
                  <p className="font-semibold text-gray-800 text-sm">{forma}</p>
                  <span className={\`text-xs font-bold \${cor === 'green' ? 'text-green-700' : cor === 'blue' ? 'text-blue-700' : 'text-red-700'}\`}>{avaliacao}</span>
                </div>
                <p className="text-gray-500 text-xs mt-1">{desc}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white rounded-2xl p-5 shadow-sm">
          <h2 className="text-lg font-bold text-gray-800 mb-3">📊 Exemplo real: iPhone 16 a US$ 799</h2>
          <div className="space-y-2 text-sm">
            {[
              { forma: 'Dinheiro', total: 'R$ 4.155', destaque: true },
              { forma: 'Nomad/Wise', total: 'R$ 4.238', destaque: false },
              { forma: 'Cartão comum', total: 'R$ 4.780', destaque: false },
            ].map(({ forma, total, destaque }) => (
              <div key={forma} className={\`flex justify-between items-center p-3 rounded-xl \${destaque ? 'bg-green-50 border border-green-200' : 'bg-gray-50'}\`}>
                <span className="text-gray-700 text-sm">{forma}</span>
                <span className={\`font-bold \${destaque ? 'text-green-700' : 'text-gray-700'}\`}>{total}</span>
              </div>
            ))}
          </div>
          <p className="text-gray-400 text-xs mt-2">* Cotação simulada. Use a calculadora para o valor exato do dia.</p>
        </div>

        <div className="bg-blue-50 border border-blue-100 rounded-2xl p-5">
          <p className="font-bold text-blue-800 mb-2">🧮 Calcule agora com câmbio real</p>
          <p className="text-blue-600 text-sm mb-4">Cotação atualizada direto do Banco Central.</p>
          <Link href="/" className="block bg-green-500 text-white text-center py-3 rounded-xl font-semibold">Abrir Calculadora →</Link>
        </div>

        <BannerNomad />
      </div>
    </main>
  )
}
`;

// ===== LIMITE COMPRAS =====
const limite = `import Link from 'next/link'
import BannerNomad from '../components/BannerNomad'

export const metadata = {
  title: 'Qual o limite de compras no Paraguai em 2026? | Calculadora Paraguai',
  description: 'Descubra o limite de isenção para compras no Paraguai em 2026. Cota de US$ 500 via terrestre, US$ 1.000 aéreo, imposto de 50% sobre excedente e regras completas.',
  keywords: 'limite compras paraguai 2026, cota isencao paraguai, quanto posso trazer paraguai, cota us$ 500 paraguai',
}

export default function LimiteParaguai() {
  return (
    <main className="min-h-screen bg-gray-50 pb-16">
      <div className="bg-gradient-to-r from-green-600 to-green-500 px-5 pt-12 pb-8 text-white">
        <Link href="/" className="text-green-100 text-sm mb-4 block">← Calculadora</Link>
        <h1 className="text-2xl font-bold">Qual o limite de compras no Paraguai em 2026?</h1>
        <p className="text-green-100 mt-2 text-sm">Cota de isenção, regras e como calcular o imposto sobre o excedente.</p>
      </div>

      <div className="px-4 py-6 max-w-2xl mx-auto space-y-6">

        <div className="bg-white rounded-2xl p-5 shadow-sm">
          <h2 className="text-lg font-bold text-gray-800 mb-3">🛃 A cota de isenção em 2026</h2>
          <div className="grid grid-cols-2 gap-3 mb-3">
            <div className="bg-green-50 rounded-xl p-4 text-center">
              <p className="text-2xl font-black text-green-600">US$ 500</p>
              <p className="text-green-700 text-xs mt-1">Via terrestre</p>
              <p className="text-green-600 text-xs">Ponte da Amizade / PJC</p>
            </div>
            <div className="bg-blue-50 rounded-xl p-4 text-center">
              <p className="text-2xl font-black text-blue-600">US$ 1.000</p>
              <p className="text-blue-700 text-xs mt-1">Via aérea</p>
              <p className="text-blue-600 text-xs">Voos internacionais</p>
            </div>
          </div>
          <p className="text-gray-600 text-sm">Cada viajante pode trazer mercadorias dentro desses valores <strong>sem pagar imposto de importação</strong>.</p>
        </div>

        <div className="bg-white rounded-2xl p-5 shadow-sm">
          <h2 className="text-lg font-bold text-gray-800 mb-3">💰 O que acontece se ultrapassar a cota?</h2>
          <p className="text-gray-600 text-sm mb-3">Valores acima da cota são tributados em <strong>50% de imposto de importação</strong> sobre o excedente.</p>
          <div className="space-y-2">
            <div className="bg-gray-50 rounded-xl p-4 font-mono text-sm">
              <p className="font-bold text-gray-700">Exemplo 1: compra de US$ 700</p>
              <p className="mt-1">Excedente = $700 - $500 = <strong>$200</strong></p>
              <p>Imposto = $200 × 50% = <strong>$100</strong></p>
            </div>
            <div className="bg-gray-50 rounded-xl p-4 font-mono text-sm">
              <p className="font-bold text-gray-700">Exemplo 2: compra de US$ 1.200</p>
              <p className="mt-1">Excedente = $1.200 - $500 = <strong>$700</strong></p>
              <p>Imposto = $700 × 50% = <strong>$350</strong></p>
            </div>
          </div>
          <p className="text-gray-500 text-xs mt-2">O imposto é cobrado em reais na aduana, convertido pela cotação do dia.</p>
        </div>

        <div className="bg-white rounded-2xl p-5 shadow-sm">
          <h2 className="text-lg font-bold text-gray-800 mb-3">👨‍👩‍👧‍👦 Posso somar a cota da família?</h2>
          <p className="text-gray-600 text-sm mb-3">Sim! Cada pessoa tem sua cota individual — incluindo crianças de qualquer idade.</p>
          <div className="bg-green-50 rounded-xl p-4">
            <p className="font-bold text-green-800 text-sm">Família de 4 pessoas:</p>
            <p className="text-green-700 text-sm mt-1">4 × US$ 500 = <strong>US$ 2.000 sem imposto</strong></p>
          </div>
          <p className="text-gray-500 text-xs mt-3">⚠️ Mas cada pessoa precisa declarar os seus próprios produtos — não é possível colocar tudo no nome de uma pessoa só.</p>
        </div>

        <div className="bg-white rounded-2xl p-5 shadow-sm">
          <h2 className="text-lg font-bold text-gray-800 mb-3">📋 Limites específicos por produto</h2>
          <div className="space-y-2 text-sm">
            {[
              { produto: 'Bebidas alcoólicas', limite: 'Até 12 litros', obs: 'Independente da cota geral' },
              { produto: 'Cigarros', limite: 'Até 25 maços', obs: 'Independente da cota geral' },
              { produto: 'Eletrônicos', limite: 'Dentro da cota de US$ 500', obs: '1 unidade por tipo para uso pessoal' },
              { produto: 'Perfumes', limite: 'Dentro da cota geral', obs: 'Para uso pessoal' },
              { produto: 'Roupas e calçados', limite: 'Dentro da cota geral', obs: 'Para uso pessoal, não revenda' },
              { produto: 'Medicamentos', limite: 'Uso pessoal comprovado', obs: 'Exige receita médica em alguns casos' },
            ].map(({ produto, limite, obs }) => (
              <div key={produto} className="flex justify-between items-start py-2 border-b border-gray-100 last:border-0">
                <div>
                  <p className="font-medium text-gray-800 text-sm">{produto}</p>
                  <p className="text-gray-400 text-xs">{obs}</p>
                </div>
                <span className="text-green-700 font-semibold text-xs text-right ml-2">{limite}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white rounded-2xl p-5 shadow-sm">
          <h2 className="text-lg font-bold text-gray-800 mb-3">⚠️ Regras importantes</h2>
          <div className="space-y-2 text-sm text-gray-600">
            <div className="flex gap-2"><span>✅</span><p>A cota é <strong>por pessoa</strong> — não acumula entre viagens</p></div>
            <div className="flex gap-2"><span>✅</span><p>Só vale para <strong>uso pessoal</strong> — mercadorias para revenda têm regras diferentes</p></div>
            <div className="flex gap-2"><span>✅</span><p>Você pode viajar quantas vezes quiser — a cota se renova a cada viagem</p></div>
            <div className="flex gap-2"><span>⚠️</span><p>A Receita Federal pode questionar se você viaja com frequência — tenha suas notas fiscais</p></div>
            <div className="flex gap-2"><span>⚠️</span><p>Produtos acima do limite devem ser declarados no app <strong>e-DBV</strong> antes de cruzar a ponte</p></div>
          </div>
        </div>

        <div className="bg-blue-50 border border-blue-100 rounded-2xl p-5">
          <p className="font-bold text-blue-800 mb-2">🧮 Calcule agora</p>
          <p className="text-blue-600 text-sm mb-4">Use nossa calculadora para saber exatamente quanto vai pagar em reais, incluindo todos os impostos.</p>
          <Link href="/" className="block bg-green-500 text-white text-center py-3 rounded-xl font-semibold">Abrir Calculadora →</Link>
        </div>

        <BannerNomad />
      </div>
    </main>
  )
}
`;

fs.writeFileSync('app/como-declarar-paraguai/page.jsx', declarar);
console.log('OK: como-declarar-paraguai');

fs.writeFileSync('app/calculadora-dolar-paraguai/page.jsx', dolar);
console.log('OK: calculadora-dolar-paraguai');

fs.writeFileSync('app/limite-compras-paraguai/page.jsx', limite);
console.log('OK: limite-compras-paraguai');
