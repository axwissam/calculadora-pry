const fs = require('fs');
let c = fs.readFileSync('app/page.jsx', 'utf8');
c = c.replace(
  "  const minutos = Math.floor((new Date() - new Date(cotacao.created_at)) / 60000)\n  const tempoStr = minutos < 60 ? `${minutos}min atr\u00e1s` : `${Math.floor(minutos / 60)}h atr\u00e1s`\n  return (\n    <div className=\"mt-3 inline-flex items-center gap-2 bg-white/20 rounded-full px-3 py-1 text-sm\">\n      <span className=\"w-2 h-2 bg-green-300 rounded-full animate-pulse\" />\n      D\u00f3lar: {fmt(cotacao.valor_dolar)} \u00b7 atualizado {tempoStr}",
  "  return (\n    <div className=\"mt-3 inline-flex items-center gap-2 bg-white/20 rounded-full px-3 py-1 text-sm\">\n      <span className=\"w-2 h-2 bg-green-300 rounded-full animate-pulse\" />\n      D\u00f3lar: {fmt(cotacao.valor_dolar)} \u00b7 cota\u00e7\u00e3o do dia"
);
fs.writeFileSync('app/page.jsx', c, 'utf8');
const ok = c.includes('cota\u00e7\u00e3o do dia') && !c.includes('tempoStr');
console.log(ok ? 'OK' : 'ERRO');
