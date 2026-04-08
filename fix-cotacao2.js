const fs = require('fs');
let c = fs.readFileSync('app/page.jsx', 'utf8');

// Corrige a funcao CotacaoBar
c = c.replace(
  `  if (!cotacao) return (
    <div className="mt-3 inline-flex items-center gap-2 bg-white/20 rounded-full px-3 py-1 text-sm">
      <span className="w-2 h-2 bg-yellow-300 rounded-full" />Carregando cotação...
    </div>
  )
  const minutos = Math.floor((new Date() - new Date(cotacao.created_at)) / 60000)
  const tempoStr = minutos < 60 ? \`\${minutos}min atrás\` : \`\${Math.floor(minutos / 60)}h atrás\`
  return (
    <div className="mt-3 inline-flex items-center gap-2 bg-white/20 rounded-full px-3 py-1 text-sm">
      <span className="w-2 h-2 bg-green-300 rounded-full animate-pulse" />
      Dólar: {fmt(cotacao.valor_dolar)} · atualizado {tempoStr}
    </div>
  )
}`,
  `function CotacaoBar({ cotacao }) {
  if (!cotacao) return (
    <div className="mt-3 inline-flex items-center gap-2 bg-white/20 rounded-full px-3 py-1 text-sm">
      <span className="w-2 h-2 bg-yellow-300 rounded-full" />Carregando cotação...
    </div>
  )
  const agora = new Date()
  const atualizado = new Date(cotacao.created_at)
  const mesmoDia = agora.toDateString() === atualizado.toDateString()
  const minutos = Math.floor((agora - atualizado) / 60000)
  const tempoStr = mesmoDia && minutos < 60 ? minutos + 'min atrás' : mesmoDia ? 'cotação do dia' : Math.floor(minutos/60) + 'h atrás'
  return (
    <div className="mt-3 inline-flex items-center gap-2 bg-white/20 rounded-full px-3 py-1 text-sm">
      <span className="w-2 h-2 bg-green-300 rounded-full animate-pulse" />
      Dólar: {fmt(cotacao.valor_dolar)} · {tempoStr}
    </div>
  )
}`
);

// Adiciona CotacaoBar no header
c = c.replace(
  `        <p className="text-green-100 text-sm mt-1">Cota, impostos e câmbio em tempo real</p>
      </div>`,
  `        <p className="text-green-100 text-sm mt-1">Cota, impostos e câmbio em tempo real</p>
        <CotacaoBar cotacao={cotacao} />
      </div>`
);

fs.writeFileSync('app/page.jsx', c, 'utf8');
console.log('CotacaoBar OK:', c.includes('function CotacaoBar') ? 'SIM' : 'NAO');
console.log('CotacaoBar chamada:', c.includes('<CotacaoBar cotacao={cotacao}') ? 'SIM' : 'NAO');
console.log('cotacao do dia:', c.includes('cotação do dia') ? 'SIM' : 'NAO');
