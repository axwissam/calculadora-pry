const fs = require('fs');
let c = fs.readFileSync('app/page.jsx', 'utf8');
const antigo = 'const minutos = Math.floor((new Date() - new Date(cotacao.created_at)) / 60000)\n  const tempoStr = minutos < 60 ? ' + 'min' + ' ' + 'atrás : ' + 'h' + ' ' + 'atrás';
const novo = 'const agora = new Date()\n  const atualizado = new Date(cotacao.created_at)\n  const mesmoDia = agora.toDateString() === atualizado.toDateString()\n  const minutos = Math.floor((agora - atualizado) / 60000)\n  const tempoStr = mesmoDia && minutos < 60 ? minutos + "min atras" : mesmoDia ? "cotacao do dia" : Math.floor(minutos/60) + "h atras"';
c = c.replace(antigo, novo);
fs.writeFileSync('app/page.jsx', c, 'utf8');
console.log('done:', c.includes('cotacao do dia') ? 'OK' : 'NAO SUBSTITUIU');
