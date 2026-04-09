const fs = require('fs');
let c = fs.readFileSync('app/o-que-comprar-paraguai/page.jsx', 'utf8');
c = c.replace("MAC, Maybelline e L'Oréal", "MAC, Maybelline e L\u2019Or\u00e9al");
fs.writeFileSync('app/o-que-comprar-paraguai/page.jsx', c);
console.log('OK');
