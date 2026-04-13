const fs = require('fs')
const path = require('path')

const faqs = {
  'celular-paraguai': [
    { q: 'Vale a pena comprar celular no Paraguai?', a: 'Sim, a economia pode chegar a 40% mesmo após pagar o imposto de importação. Um iPhone que custa R$ 8.000 no Brasil pode sair por R$ 5.500 a R$ 6.000 no Paraguai com imposto incluído.' },
    { q: 'Qual o imposto para trazer celular do Paraguai?', a: 'A cota de isenção é de US$ 500. Acima disso, paga-se 50% sobre o valor excedente. Um celular de US$ 800 tem US$ 300 de excedente, gerando US$ 150 de imposto.' },
    { q: 'O celular do Paraguai funciona no Brasil?', a: 'Sim, a versão americana (LL/A) dos iPhones funciona normalmente no Brasil. Para Samsung e outras marcas, verifique as bandas 4G e 5G compatíveis com operadoras brasileiras.' },
  ],
  'notebook-paraguai': [
    { q: 'Vale a pena comprar notebook no Paraguai?', a: 'Sim, a economia pode chegar a 35%. Um MacBook Air M3 que custa R$ 12.000 no Brasil pode sair por R$ 8.500 a R$ 9.000 no Paraguai com imposto incluído.' },
    { q: 'O teclado do notebook do Paraguai é em português?', a: 'Não. A maioria dos notebooks vendidos no Paraguai tem teclado QWERTY em inglês, sem cedilha e sem acentos nas teclas físicas.' },
    { q: 'Qual o imposto para trazer notebook do Paraguai?', a: 'Acima da cota de US$ 500 paga-se 50% sobre o excedente. Um notebook de US$ 999 tem US$ 499 de excedente, gerando US$ 249,50 de imposto.' },
  ],
  'imposto-iphone-paraguai': [
    { q: 'Quanto de imposto pago para trazer iPhone do Paraguai?', a: 'Você paga 50% sobre o valor acima de US$ 500. Por exemplo: iPhone 16 por US$ 799 tem US$ 299 de excedente, gerando US$ 149,50 de imposto convertido pela cotação do dia.' },
    { q: 'O iPhone do Paraguai tem garantia no Brasil?', a: 'Não tem garantia oficial Apple no Brasil. Porém a garantia internacional de 1 ano é válida e pode ser usada em assistências técnicas particulares.' },
    { q: 'Qual versão do iPhone comprar no Paraguai?', a: 'Prefira a versão LL/A (americana) que funciona normalmente no Brasil com todas as bandas de frequência das operadoras nacionais.' },
  ],
  'perfume-paraguai': [
    { q: 'Vale a pena comprar perfume no Paraguai?', a: 'Sim, é um dos melhores produtos para comprar. A economia pode chegar a 50% em relação ao Brasil. Perfumes cabem facilmente dentro da cota de US$ 500.' },
    { q: 'Como saber se o perfume do Paraguai é original?', a: 'Compre em lojas estabelecidas como Shopping China e Elegancia. Verifique se o número de lote na caixa e no frasco são idênticos. Perfumes originais têm embalagem firme e impressão de qualidade.' },
    { q: 'Perfume entra na cota de US$ 500?', a: 'Sim, perfumes contam dentro da cota geral de US$ 500 por pessoa. Como cada frasco custa entre US$ 50 e US$ 200, dá para trazer vários frascos sem estourar a cota.' },
  ],
  'whisky-paraguai': [
    { q: 'Qual o limite de whisky que posso trazer do Paraguai?', a: 'Cada pessoa pode trazer até 12 litros de bebidas alcoólicas. Esse limite é independente da cota geral de US$ 500, mas o valor das bebidas conta dentro da cota.' },
    { q: 'Vale a pena comprar whisky no Paraguai?', a: 'Sim, é um dos produtos com maior economia. Um Johnnie Walker Black Label custa US$ 28 no Paraguai contra R$ 180 no Brasil — economia de até 55%.' },
    { q: 'O whisky do Paraguai é original?', a: 'Em lojas estabelecidas como Shopping China sim. Evite comprar de ambulantes com preços muito abaixo do normal, pois podem ser produtos adulterados.' },
  ],
  'eletronicos-paraguai': [
    { q: 'Quais eletrônicos valem mais a pena comprar no Paraguai?', a: 'Fones de ouvido (até 45% mais barato), smartphones (até 40%), smartwatches (até 38%) e notebooks (até 35%) são os produtos com melhor custo-benefício.' },
    { q: 'Eletrônico do Paraguai tem garantia no Brasil?', a: 'Na maioria dos casos não. A garantia do fabricante geralmente não cobre produtos comprados fora do Brasil. Considere contratar seguro para o aparelho.' },
    { q: 'Posso trazer eletrônico acima de US$ 500 do Paraguai?', a: 'Sim, mas paga 50% de imposto sobre o valor excedente. Mesmo assim costuma valer a pena — use a calculadora para simular o valor exato com a cotação do dia.' },
  ],
  'limite-compras-paraguai': [
    { q: 'Qual o limite de compras no Paraguai em 2026?', a: 'US$ 500 por pessoa via terrestre (Ponte da Amizade e Pedro Juan Caballero) e US$ 1.000 por pessoa via aérea.' },
    { q: 'Posso somar a cota com minha família?', a: 'Sim, cada membro da família tem sua própria cota de US$ 500, incluindo crianças. Uma família de 4 pessoas tem US$ 2.000 de cota combinada.' },
    { q: 'O que acontece se passar da cota do Paraguai?', a: 'Você paga 50% de imposto sobre o valor excedente. É obrigatório declarar na Receita Federal pelo app Viajantes ou no posto da fronteira.' },
  ],
  'como-declarar-paraguai': [
    { q: 'Como declarar compras do Paraguai na Receita Federal?', a: 'Use o app Viajantes da Receita Federal antes de cruzar a fronteira, declare os produtos e pague o DARF gerado. Ou declare diretamente no posto da Receita na fronteira.' },
    { q: 'O que é o e-DBV?', a: 'É a Declaração de Bens de Viajante da Receita Federal. Pelo app Viajantes você informa os produtos comprados, o sistema calcula o imposto e gera um DARF para pagamento.' },
    { q: 'O que acontece se não declarar compras do Paraguai?', a: 'Não declarar produtos acima da cota é descaminho — crime previsto no Código Penal. A multa pode chegar a 50% do valor dos bens retidos.' },
  ],
  'como-calcular-imposto-paraguai': [
    { q: 'Como calcular o imposto das compras do Paraguai?', a: 'Subtraia US$ 500 do valor total. O excedente é multiplicado por 50%. Exemplo: comprou US$ 700, excedente = US$ 200, imposto = US$ 100 convertido pela cotação do dia.' },
    { q: 'O imposto é sobre o total ou só o excedente?', a: 'Apenas sobre o excedente acima dos US$ 500 de cota. Se comprou US$ 600, paga 50% sobre US$ 100, não sobre os US$ 600 totais.' },
    { q: 'Como calcular o IOF nas compras do Paraguai com cartão?', a: 'O IOF é de 3,5% sobre o valor total em dólares. Cartões como Nomad e Wise não cobram IOF adicional pois o imposto já foi pago na conversão.' },
  ],
  'cota-paraguai-via-terrestre': [
    { q: 'Qual a cota de compras no Paraguai via terrestre em 2026?', a: 'US$ 500 por pessoa por viagem via terrestre, tanto pela Ponte da Amizade em Foz do Iguaçu quanto por Pedro Juan Caballero.' },
    { q: 'Com que frequência posso ir ao Paraguai?', a: 'Não há limite de frequência. Cada viagem tem direito a uma nova cota de US$ 500. Porém a Receita pode questionar viagens muito frequentes sempre com valores próximos ao limite.' },
    { q: 'A cota do Paraguai inclui bebidas?', a: 'Bebidas alcoólicas têm limite próprio de 12 litros por pessoa, mas o valor delas conta dentro da cota de US$ 500.' },
  ],
}

let ok = 0
let skip = 0

Object.entries(faqs).forEach(([pagina, perguntas]) => {
  const filePath = path.join('app', pagina, 'page.jsx')
  if (!fs.existsSync(filePath)) { console.log(`SKIP - nao existe: ${pagina}`); skip++; return }

  let content = fs.readFileSync(filePath, 'utf8')
  if (content.includes('FAQPage')) { console.log(`SKIP - ja tem FAQ: ${pagina}`); skip++; return }

  const sep = content.includes('\r\n') ? '\r\n' : '\n'

  const schema = `
<script
  type="application/ld+json"
  dangerouslySetInnerHTML={{ __html: JSON.stringify({
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": ${JSON.stringify(perguntas.map(p => ({
      "@type": "Question",
      "name": p.q,
      "acceptedAnswer": { "@type": "Answer", "text": p.a }
    })), null, 4)}
  }) }}
/>`

  // Insere antes do <main>
  const anchor = '<main '
  if (!content.includes(anchor)) { console.log(`SKIP - sem <main: ${pagina}`); skip++; return }

  content = content.replace(anchor, `<>${schema}${sep}      ${anchor}`)

  // Fecha o fragment no final
  content = content.replace(/(\s*)\)(\s*)\}(\s*)$/, `${sep}    </>${sep}  )${sep}}`)

  fs.writeFileSync(filePath, content, 'utf8')
  console.log(`OK - FAQ: ${pagina}`)
  ok++
})

console.log(`\nConcluido: ${ok} paginas com FAQ, ${skip} puladas.`)
