const fs = require('fs');
let c = fs.readFileSync('app/page.jsx', 'utf8');

const old = `        <div className="grid grid-cols-1 gap-2">`;
const fixed = `        <Link href="/lojas-paraguai" className="block bg-white rounded-2xl shadow-sm border border-green-100 p-4 hover:border-green-300 transition-colors">
          <div className="flex items-center gap-3">
            <span className="text-3xl">🏪</span>
            <div>
              <p className="font-bold text-gray-800 text-sm">Melhores lojas do Paraguai</p>
              <p className="text-xs text-gray-500">Shopping China, Flytec, Mobile Zone e mais</p>
            </div>
            <span className="ml-auto text-green-500 font-bold">→</span>
          </div>
        </Link>
        <div className="grid grid-cols-1 gap-2">`;

if (!c.includes(old)) {
  console.log('ERRO - trecho nao encontrado');
  process.exit(1);
}
c = c.replace(old, fixed);
fs.writeFileSync('app/page.jsx', c);
console.log('OK');
