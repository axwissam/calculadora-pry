const fs = require('fs');
let c = fs.readFileSync('app/layout.jsx', 'utf8');
c = c.replace(
  "export const metadata = {",
  "export const metadata = {\n  metadataBase: new URL('https://www.cotaparaguai.com.br'),"
);
fs.writeFileSync('app/layout.jsx', c, 'utf8');
console.log('OK:', c.includes('cotaparaguai.com.br') ? 'SIM' : 'NAO');
