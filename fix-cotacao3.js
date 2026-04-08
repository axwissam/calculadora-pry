const fs = require('fs');
let c = fs.readFileSync('app/page.jsx', 'utf8');

// Remove tudo entre as duas versoes possiveis da CotacaoBar e substitui
const inicio = 'function CotacaoBar({ cotacao }) {';
const fim = '\nfunction ComparativoSection';

const idxInicio = c.indexOf(inicio);
const idxFim = c.indexOf(fim);

if (idxInicio === -1) { console.log('NAO ACHOU inicio'); process.exit(1); }
if (idxFim === -1) { console.log('NAO ACHOU fim'); process.exit(1); }

const novaCotacaoBar = `function CotacaoBar({ cotacao }) {
  if (!cotacao) return (
    <div className="mt-3 inline-flex items-center gap-2 bg-white/20 rounded-full px-3 py-1 text-sm">
      <span className="w-2 h-2 bg-yellow-300 rounded-full" />Carregando cotacao...
    </div>
  )
  return (
    <div className="mt-3 inline-flex items-center gap-2 bg-white/20 rounded-full px-3 py-1 text-sm">
      <span className="w-2 h-2 bg-green-300 rounded-full animate-pulse" />
      Dolar: {fmt(cotacao.valor_dolar)} · cotacao do dia
    </div>
  )
}`;

c = c.slice(0, idxInicio) + novaCotacaoBar + c.slice(idxFim);
fs.writeFileSync('app/page.jsx', c, 'utf8');
console.log('OK: funcao reescrita, tamanho:', c.length);
