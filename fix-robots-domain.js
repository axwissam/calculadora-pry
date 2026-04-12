const fs = require('fs');
let c = fs.readFileSync('app/robots.js', 'utf8');
c = c.replace('https://calculadora-pry.vercel.app/sitemap.xml', 'https://www.cotaparaguai.com.br/sitemap.xml');
fs.writeFileSync('app/robots.js', c, 'utf8');
console.log('OK:', c.includes('cotaparaguai.com.br') ? 'SIM' : 'NAO');
