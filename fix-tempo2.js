const fs = require('fs');
let c = fs.readFileSync('app/page.jsx', 'utf8');
c = c.replace(
  "const minutos = Math.floor((new Date() - new Date(cotacao.created_at)) / 60000)\n  const tempoStr = minutos < 60 ? `${minutos}min atr\u00e1s` : `${Math.floor(minutos / 60)}h atr\u00e1s`",
  "const tempoStr = 'cota\u00e7\u00e3o do dia'"
);
c = c.replace(
  "Dólar: {fmt(cotacao.valor_dolar)} · atualizado {tempoStr}",
  "Dólar: {fmt(cotacao.valor_dolar)} · {tempoStr}"
);
fs.writeFileSync('app/page.jsx', c, 'utf8');
console.log('OK:', c.includes("cotação do dia") ? 'SIM' : 'NAO');
