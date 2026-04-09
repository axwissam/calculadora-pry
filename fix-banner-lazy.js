const fs = require('fs');
let c = fs.readFileSync('app/components/BannerNomad.jsx', 'utf8');
c = c.replace(
  '<img src="/banner-nomad.png"',
  '<img src="/banner-nomad.png" loading="lazy"'
);
fs.writeFileSync('app/components/BannerNomad.jsx', c);
console.log('OK');
