const fs = require('fs');
const path = require('path');

const appDir = 'app';
const dirs = fs.readdirSync(appDir).filter(d => {
  const full = path.join(appDir, d);
  return fs.statSync(full).isDirectory() && fs.existsSync(path.join(full, 'page.jsx'));
});

console.log('Paginas encontradas:', dirs);

let count = 0;
for (const dir of dirs) {
  const file = path.join(appDir, dir, 'page.jsx');
  let c = fs.readFileSync(file, 'utf8');
  if (c.includes('BannerNomad')) { console.log('SKIP (ja tem):', dir); continue; }
  c = c.replace("import Link from 'next/link'", "import Link from 'next/link'\nimport BannerNomad from '../components/BannerNomad'");
  c = c.replace(/(<\/div>\s*<\/main>)(?![\s\S]*<\/div>\s*<\/main>)/, '\n        <BannerNomad />\n      </div>\n    </main>');
  fs.writeFileSync(file, c, 'utf8');
  count++;
  console.log('OK:', dir);
}
console.log('Total:', count, 'paginas atualizadas');
