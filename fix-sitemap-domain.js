const fs = require('fs');
let c = fs.readFileSync('app/sitemap.js', 'utf8');
c = c.replace(/https:\/\/calculadora-pry\.vercel\.app/g, 'https://www.cotaparaguai.com.br');
fs.writeFileSync('app/sitemap.js', c, 'utf8');
console.log('OK:', c.includes('cotaparaguai.com.br') ? 'SIM' : 'NAO');
