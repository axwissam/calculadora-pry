const fs = require('fs');
let c = fs.readFileSync('app/page.jsx', 'utf8');

// Remove a versao antiga que ficou sobrando
const velha = `  const minutos = Math.floor((new Date() - new Date(cotacao.created_at)) / 60000)
  const tempoStr = minutos < 60 ? \`\${minutos}min atr\u00e1s\` : \`\${Math.floor(minutos / 60)}h atr\u00e1s\`
  return (
    <div className="mt-3 inline-flex items-center gap-2 bg-white/20 rounded-full px-3 py-1 text-sm">
      <span className="w-2 h-2 bg-green-300 rounded-full animate-pulse" />
      D\u00f3lar: {fmt(cotacao.valor_dolar)} \u00b7 {tempoStr}
    </div>
  )
}`;
c = c.replace(velha, '');
fs.writeFileSync('app/page.jsx', c, 'utf8');
console.log('ainda tem tempoStr:', c.includes('tempoStr') ? 'SIM - ERRO' : 'NAO - OK');
