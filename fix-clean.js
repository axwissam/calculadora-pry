const fs = require('fs');
let c = fs.readFileSync('app/page.jsx', 'utf8');

// Remove o bloco duplicado: segunda ComparativoSection + CotacaoBar antiga
const inicio = '\nfunction CotacaoBar({ cotacao }) {\n  if (!cotacao) return (\n    <div className="mt-3 inline-flex items-center gap-2 bg-white/20 rounded-full px-3 py-1 text-sm">\n      <span className="w-2 h-2 bg-yellow-300 rounded-full" />Carregando cotacao...\n    </div>\n  )\n  return (\n    <div className="mt-3 inline-flex items-center gap-2 bg-white/20 rounded-full px-3 py-1 text-sm">\n      <span className="w-2 h-2 bg-green-300 rounded-full animate-pulse" />\n      Dolar: {fmt(cotacao.valor_dolar)} \u00b7 cotacao do dia\n    </div>\n  )\n}\nfunction ComparativoSection';

const fim = '\nfunction CotacaoBar({ cotacao }) {\n  if (!cotacao) return (\n    <div className="mt-3 inline-flex items-center gap-2 bg-white/20 rounded-full px-3 py-1 text-sm">\n      <span className="w-2 h-2 bg-yellow-300 rounded-full" />Carregando cota\u00e7\u00e3o...\n    </div>\n  )\n  const minutos';

const i1 = c.indexOf(inicio);
const i2 = c.indexOf(fim);
console.log('inicio em:', i1, 'fim em:', i2);

if (i1 !== -1 && i2 !== -1 && i2 > i1) {
  // Remove tudo entre inicio e fim (a segunda ComparativoSection duplicada)
  const parteRemover = c.slice(i1 + inicio.length - '\nfunction ComparativoSection'.length, i2);
  c = c.slice(0, i1) + c.slice(i2);
  console.log('Removido bloco de', parteRemover.length, 'chars');
}

// Agora corrige a CotacaoBar final para mostrar o valor
c = c.replace(
  '  const minutos = Math.floor((new Date() - new Date(cotacao.created_at)) / 60000)\n  return (\n    <div className="mt-3 inline-flex items-center gap-2 bg-white/20 rounded-full px-3 py-1 text-sm">\n      <span className="w-2 h-2 bg-green-300 rounded-full animate-pulse" />\n    </div>\n  )\n}',
  '  return (\n    <div className="mt-3 inline-flex items-center gap-2 bg-white/20 rounded-full px-3 py-1 text-sm">\n      <span className="w-2 h-2 bg-green-300 rounded-full animate-pulse" />\n      D\u00f3lar: {fmt(cotacao.valor_dolar)} \u00b7 cota\u00e7\u00e3o do dia\n    </div>\n  )\n}'
);

fs.writeFileSync('app/page.jsx', c, 'utf8');

const count = (c.match(/function CotacaoBar/g) || []).length;
const countComp = (c.match(/function ComparativoSection/g) || []).length;
console.log('CotacaoBar count:', count, '(deve ser 1)');
console.log('ComparativoSection count:', countComp, '(deve ser 1)');
console.log('cotacao do dia:', c.includes('cota\u00e7\u00e3o do dia') ? 'SIM' : 'NAO');
