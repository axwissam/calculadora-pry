const fs = require('fs')
const path = require('path')

// Mapa de links internos: cada pagina recebe links para paginas relacionadas
const linksInternos = {
  'celular-paraguai': [
    { href: '/imposto-iphone-paraguai', icon: '📱', label: 'Imposto do iPhone no Paraguai' },
    { href: '/samsung-paraguai', icon: '📲', label: 'Samsung no Paraguai' },
    { href: '/como-calcular-imposto-paraguai', icon: '🧮', label: 'Como calcular o imposto' },
  ],
  'notebook-paraguai': [
    { href: '/macbook-paraguai', icon: '💻', label: 'MacBook no Paraguai' },
    { href: '/eletronicos-paraguai', icon: '🖥️', label: 'Eletrônicos no Paraguai' },
    { href: '/como-calcular-imposto-paraguai', icon: '🧮', label: 'Como calcular o imposto' },
  ],
  'imposto-iphone-paraguai': [
    { href: '/celular-paraguai', icon: '📱', label: 'Celular no Paraguai' },
    { href: '/quanto-de-imposto-pagar-no-paraguai', icon: '💰', label: 'Quanto de imposto pagar?' },
    { href: '/melhor-forma-pagamento-paraguai', icon: '💳', label: 'Melhor forma de pagamento' },
  ],
  'eletronicos-paraguai': [
    { href: '/celular-paraguai', icon: '📱', label: 'Celular no Paraguai' },
    { href: '/notebook-paraguai', icon: '💻', label: 'Notebook no Paraguai' },
    { href: '/airpods-paraguai', icon: '🎧', label: 'AirPods no Paraguai' },
  ],
  'perfume-paraguai': [
    { href: '/o-que-comprar-paraguai', icon: '🛍️', label: 'O que vale a pena comprar' },
    { href: '/melhor-forma-pagamento-paraguai', icon: '💳', label: 'Melhor forma de pagamento' },
    { href: '/limite-compras-paraguai', icon: '🛃', label: 'Qual o limite de compras?' },
  ],
  'whisky-paraguai': [
    { href: '/o-que-comprar-paraguai', icon: '🛍️', label: 'O que vale a pena comprar' },
    { href: '/limite-compras-paraguai', icon: '🛃', label: 'Limite de compras 2026' },
    { href: '/duty-free-foz-do-iguacu', icon: '🛫', label: 'Duty Free Foz do Iguaçu' },
  ],
  'samsung-paraguai': [
    { href: '/celular-paraguai', icon: '📱', label: 'Celular no Paraguai' },
    { href: '/imposto-iphone-paraguai', icon: '📱', label: 'Imposto iPhone Paraguai' },
    { href: '/melhor-forma-pagamento-paraguai', icon: '💳', label: 'Melhor forma de pagamento' },
  ],
  'airpods-paraguai': [
    { href: '/eletronicos-paraguai', icon: '🖥️', label: 'Eletrônicos no Paraguai' },
    { href: '/imposto-iphone-paraguai', icon: '📱', label: 'Imposto iPhone Paraguai' },
    { href: '/limite-compras-paraguai', icon: '🛃', label: 'Limite de compras 2026' },
  ],
  'macbook-paraguai': [
    { href: '/notebook-paraguai', icon: '💻', label: 'Notebook no Paraguai' },
    { href: '/eletronicos-paraguai', icon: '🖥️', label: 'Eletrônicos no Paraguai' },
    { href: '/como-calcular-imposto-paraguai', icon: '🧮', label: 'Como calcular o imposto' },
  ],
  'como-calcular-imposto-paraguai': [
    { href: '/quanto-de-imposto-pagar-no-paraguai', icon: '💰', label: 'Quanto de imposto pagar?' },
    { href: '/cota-paraguai-via-terrestre', icon: '🌉', label: 'Cota via terrestre 2026' },
    { href: '/como-declarar-paraguai', icon: '📋', label: 'Como declarar na Receita' },
  ],
  'quanto-de-imposto-pagar-no-paraguai': [
    { href: '/como-calcular-imposto-paraguai', icon: '🧮', label: 'Como calcular o imposto' },
    { href: '/cota-paraguai-via-terrestre', icon: '🌉', label: 'Cota via terrestre 2026' },
    { href: '/melhor-forma-pagamento-paraguai', icon: '💳', label: 'Melhor forma de pagamento' },
  ],
  'cota-paraguai-via-terrestre': [
    { href: '/como-calcular-imposto-paraguai', icon: '🧮', label: 'Como calcular o imposto' },
    { href: '/limite-compras-paraguai', icon: '🛃', label: 'Limite de compras 2026' },
    { href: '/como-declarar-paraguai', icon: '📋', label: 'Como declarar na Receita' },
  ],
  'como-declarar-paraguai': [
    { href: '/cota-paraguai-via-terrestre', icon: '🌉', label: 'Cota via terrestre 2026' },
    { href: '/quanto-de-imposto-pagar-no-paraguai', icon: '💰', label: 'Quanto de imposto pagar?' },
    { href: '/limite-compras-paraguai', icon: '🛃', label: 'Limite de compras 2026' },
  ],
  'limite-compras-paraguai': [
    { href: '/cota-paraguai-via-terrestre', icon: '🌉', label: 'Cota via terrestre 2026' },
    { href: '/como-declarar-paraguai', icon: '📋', label: 'Como declarar na Receita' },
    { href: '/o-que-comprar-paraguai', icon: '🛍️', label: 'O que vale a pena comprar' },
  ],
  'melhor-forma-pagamento-paraguai': [
    { href: '/nomad-paraguai', icon: '💳', label: 'Nomad no Paraguai' },
    { href: '/como-calcular-imposto-paraguai', icon: '🧮', label: 'Como calcular o imposto' },
    { href: '/celular-paraguai', icon: '📱', label: 'Celular no Paraguai' },
  ],
  'o-que-comprar-paraguai': [
    { href: '/eletronicos-paraguai', icon: '🖥️', label: 'Eletrônicos no Paraguai' },
    { href: '/perfume-paraguai', icon: '🌸', label: 'Perfume no Paraguai' },
    { href: '/whisky-paraguai', icon: '🥃', label: 'Whisky no Paraguai' },
  ],
}

const bloco = (links) => `
        <div className="bg-gray-50 rounded-2xl p-4">
          <p className="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-3">Leia também</p>
          <div className="space-y-2">
            ${links.map(l => `<Link href="${l.href}" className="flex items-center gap-3 bg-white rounded-xl px-4 py-3 text-sm text-gray-700 border border-gray-100 hover:border-green-300 transition-colors">
              <span className="text-lg">${l.icon}</span>
              <span>${l.label}</span>
              <span className="ml-auto text-gray-400">→</span>
            </Link>`).join('\n            ')}
          </div>
        </div>`

let ok = 0
let skip = 0

Object.entries(linksInternos).forEach(([pagina, links]) => {
  const filePath = path.join('app', pagina, 'page.jsx')
  if (!fs.existsSync(filePath)) { console.log(`SKIP - nao existe: ${pagina}`); skip++; return }

  let content = fs.readFileSync(filePath, 'utf8')

  // Verifica se já tem "Leia também"
  if (content.includes('Leia também')) { console.log(`SKIP - ja tem links: ${pagina}`); skip++; return }

  const sep = content.includes('\r\n') ? '\r\n' : '\n'
  const blocoHTML = bloco(links)

  // Insere antes do bloco de lojas (se existir) ou antes do BannerNomad
  const anchorLojas = '<Link href="/lojas-paraguai"'
  const anchorBanner = '<BannerNomad />'

  if (content.includes(anchorLojas)) {
    content = content.replace(anchorLojas, blocoHTML + sep + '        ' + anchorLojas)
  } else if (content.includes(anchorBanner)) {
    content = content.replace(anchorBanner, blocoHTML + sep + '        ' + anchorBanner)
  } else {
    // Insere antes do fechamento do div principal
    const anchor = '</div>\n    </main>'
    const anchorCRLF = '</div>\r\n    </main>'
    if (content.includes(anchorCRLF)) {
      content = content.replace(anchorCRLF, blocoHTML.replace(/\n/g, '\r\n') + '\r\n      </div>\r\n    </main>')
    } else if (content.includes(anchor)) {
      content = content.replace(anchor, blocoHTML + '\n      </div>\n    </main>')
    } else {
      console.log(`SKIP - ancora nao encontrada: ${pagina}`); skip++; return
    }
  }

  fs.writeFileSync(filePath, content, 'utf8')
  console.log(`OK - links internos: ${pagina}`)
  ok++
})

console.log(`\nConcluido: ${ok} paginas atualizadas, ${skip} puladas.`)
