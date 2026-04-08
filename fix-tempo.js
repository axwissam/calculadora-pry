const fs = require('fs');
let c = fs.readFileSync('app/page.jsx', 'utf8');
c = c.replace(
  "const tempoStr = mesmoDia && minutos < 60 ? minutos + 'min atrás' : mesmoDia ? 'cotação do dia' : Math.floor(minutos/60) + 'h atrás'",
  "const tempoStr = 'cotação do dia'"
);
fs.writeFileSync('app/page.jsx', c, 'utf8');
console.log('OK:', c.includes("const tempoStr = 'cotação do dia'") ? 'SIM' : 'NAO');
