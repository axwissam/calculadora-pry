const fs = require('fs')

const updates = [
  {
    path: 'app/cota-paraguai-via-terrestre/page.jsx',
    oldTitle: "title: 'Cota Paraguai Via Terrestre 2026 - Limite e Regras | Calculadora Paraguai'",
    newTitle: "title: 'Cota de Compras Paraguai 2026: US$ 500 Via Terrestre | CotaParaguai'",
    oldDesc: "description: 'Cota de compras no Paraguai via terrestre em 2026. US$ 500 por pessoa pela Ponte da Amizade. Regras, o que conta e como nao pagar imposto.'",
    newDesc: "description: 'Cota paraguai 2026: US$ 500 por pessoa via terrestre pela Ponte da Amizade. Veja o que conta na cota, como somar com a familia e evitar imposto.'",
  },
  {
    path: 'app/notebook-paraguai/page.jsx',
    oldTitle: "title: 'Notebook no Paraguai 2026 - Vale a Pena? Precos e Dicas | Calculadora Paraguai'",
    newTitle: "title: 'Notebook no Paraguai 2026: Precos, Imposto e Vale a Pena? | CotaParaguai'",
    oldDesc: "description: 'Vale a pena comprar notebook no Paraguai em 2026? Precos de MacBook, Dell e Lenovo, calculo de imposto e o que verificar antes de comprar.'",
    newDesc: "description: 'Quanto custa notebook no Paraguai em 2026? MacBook Air a partir de US$ 1.099, Dell e Lenovo com ate 35% de desconto. Calcule o preco final com imposto.'",
  },
  {
    path: 'app/lojas-paraguai/page.jsx',
    oldTitle: "title: 'Melhores Lojas do Paraguai em 2026 | Guia Completo Ciudad del Este'",
    newTitle: "title: 'Melhores Lojas do Paraguai 2026: Shopping China, Flytec e mais | CotaParaguai'",
    oldDesc: "description: 'Conhe\u00C3\u00A7a as melhores e mais confi\u00C3\u00A1veis lojas do Paraguai em 2026. Shopping China, Flytec, Mobile Zone, Vis\u00C3\u00A3o VIP, Star Company e Elegancia com endere\u00C3\u00A7os e dicas.'",
    newDesc: "description: 'Guia das melhores lojas do Paraguai em 2026. Shopping China, Flytec, Mobile Zone, Visao VIP e Elegancia — enderecos, especialidades e links oficiais.'",
  },
  {
    path: 'app/whisky-paraguai/page.jsx',
    oldTitle: "title: 'Whisky no Paraguai 2026 - Precos e Limite para Trazer | Calculadora Paraguai'",
    newTitle: "title: 'Whisky no Paraguai 2026: Quantas Garrafas Posso Trazer? | CotaParaguai'",
    oldDesc: "description: 'Quanto custa whisky no Paraguai em 2026? Limite de 12 litros, melhores marcas e como trazer sem pagar imposto. Guia completo.'",
    newDesc: "description: 'Quantas garrafas de whisky posso trazer do Paraguai? Limite de 12 litros por pessoa. Johnnie Walker, Jack Daniels e mais com ate 60% de desconto.'",
  },
  {
    path: 'app/celular-paraguai/page.jsx',
    oldTitle: "title: 'Celular no Paraguai 2026 - Vale a Pena? Precos e Dicas | Calculadora Paraguai'",
    newTitle: "title: 'Celular no Paraguai 2026: iPhone e Samsung com ate 40% off | CotaParaguai'",
    oldDesc: "description: 'Vale a pena comprar celular no Paraguai em 2026? Veja precos de iPhone e Samsung, calcule o imposto e saiba o que verificar antes de comprar.'",
    newDesc: "description: 'Comprar celular no Paraguai vale a pena em 2026? iPhone 16 a partir de US$ 799 e Samsung Galaxy com ate 40% de desconto. Calcule o preco final com imposto.'",
  },
]

let ok = 0
updates.forEach(({ path, oldTitle, newTitle, oldDesc, newDesc }) => {
  if (!fs.existsSync(path)) { console.log(`SKIP - nao existe: ${path}`); return }
  let content = fs.readFileSync(path, 'utf8')
  let changed = false

  if (content.includes(oldTitle)) {
    content = content.replace(oldTitle, newTitle)
    changed = true
  } else {
    console.log(`SKIP title - nao encontrado em ${path}`)
  }

  if (content.includes(oldDesc)) {
    content = content.replace(oldDesc, newDesc)
    changed = true
  } else {
    // Tenta achar a description de outra forma
    const descMatch = content.match(/description: ['"](.+?)['"],/)
    if (descMatch) {
      content = content.replace(`description: '${descMatch[1]}'`, `description: '${newDesc.replace("description: '", "").replace("'", "")}'`)
      content = content.replace(`description: "${descMatch[1]}"`, `description: "${newDesc.replace('description: "', '').replace('"', '')}"`)
      changed = true
    } else {
      console.log(`SKIP desc - nao encontrado em ${path}`)
    }
  }

  if (changed) {
    fs.writeFileSync(path, content, 'utf8')
    console.log(`OK - ${path}`)
    ok++
  }
})

console.log(`\nConcluido: ${ok} paginas atualizadas.`)
