const fs = require('fs');
let c = fs.readFileSync('app/page.jsx', 'utf8');

const old = "const tempoStr = minutos !== null ? (minutos < 60 ? `${minutos}min atrás` : `${Math.floor(minutos / 60)}h atrás`) : ''";
const fixed = "const tempoStr = minutos !== null ? (minutos < 60 ? `${minutos}min atrás` : 'cotação do dia') : ''";

if (!c.includes(old)) {
  console.log('ERRO - trecho nao encontrado');
  process.exit(1);
}
c = c.replace(old, fixed);
fs.writeFileSync('app/page.jsx', c);
console.log('OK');
