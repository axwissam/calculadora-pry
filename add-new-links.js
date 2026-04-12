const fs = require('fs');
let c = fs.readFileSync('app/page.jsx', 'utf8');

// Encontra e substitui usando regex para lidar com espaços inesperados
const regex = /\{ href: '\/como-calcular-imposto-paraguai', icon: '🧮', label: 'Como calcular imposto Par[^']*' \},/;

if (!regex.test(c)) {
  console.log('ERRO - regex nao encontrou o trecho');
  process.exit(1);
}

c = c.replace(regex, `{ href: '/samsung-paraguai', icon: '📲', label: 'Samsung no Paraguai 2026' },
              { href: '/airpods-paraguai', icon: '🎧', label: 'AirPods no Paraguai 2026' },
              { href: '/macbook-paraguai', icon: '💻', label: 'MacBook no Paraguai 2026' },
              { href: '/como-calcular-imposto-paraguai', icon: '🧮', label: 'Como calcular imposto Paraguai?' },`);

fs.writeFileSync('app/page.jsx', c);
console.log('OK');
