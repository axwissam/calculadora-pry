const fs = require('fs')

let content = fs.readFileSync('app/page.jsx', 'utf8')
const sep = content.includes('\r\n') ? '\r\n' : '\n'

// Adiciona botão flutuante para rolar de volta à calculadora
const floatBtn = `
function BotaoFlutuante({ resultado }) {
  const [visible, setVisible] = React.useState(false)
  React.useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 400)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])
  if (!visible) return null
  return (
    <button
      onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      className="fixed bottom-6 right-4 z-50 bg-green-500 text-white rounded-full shadow-lg px-4 py-3 text-sm font-semibold flex items-center gap-2"
      style={{ boxShadow: '0 4px 20px rgba(34,197,94,0.4)' }}>
      🧮 Calcular
    </button>
  )
}
`

// Importa React explicitamente para poder usar React.useState no botão flutuante
if (!content.includes("import React")) {
  content = content.replace(
    "import { useState, useEffect, useCallback } from 'react'",
    "import React, { useState, useEffect, useCallback } from 'react'"
  )
  console.log('OK - import React adicionado')
}

// Insere componente antes do export default
if (!content.includes('BotaoFlutuante')) {
  content = content.replace(
    'export default function Home() {',
    floatBtn + 'export default function Home() {'
  )
  console.log('OK - componente BotaoFlutuante inserido')
}

// Insere o botão no JSX, antes do fechamento do </main>
const anchor = '</main>'
const anchorIdx = content.lastIndexOf(anchor)
if (anchorIdx > -1) {
  content = content.slice(0, anchorIdx) +
    `      <BotaoFlutuante resultado={resultado} />${sep}      ` +
    content.slice(anchorIdx)
  console.log('OK - botao flutuante inserido no JSX')
}

fs.writeFileSync('app/page.jsx', content, 'utf8')
console.log('Concluido!')
