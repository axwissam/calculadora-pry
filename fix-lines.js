const fs = require('fs');
let c = fs.readFileSync('app/page.jsx', 'utf8');
const lines = c.split('\n');
for (let i = 0; i < lines.length; i++) {
  if (lines[i].includes('tempoStr') && lines[i].includes('const tempoStr')) {
    lines[i] = "  const tempoStr = 'cota\u00e7\u00e3o do dia'";
    console.log('Linha', i, 'substituida');
  }
  if (lines[i].includes('tempoStr') && lines[i].includes('minutos')) {
    lines[i] = '';
    console.log('Linha', i, 'removida');
  }
}
fs.writeFileSync('app/page.jsx', lines.join('\n'), 'utf8');
console.log('tempoStr restante:', c.split('\n').filter(l => l.includes('tempoStr')).length);
