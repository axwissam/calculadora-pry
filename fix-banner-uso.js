const fs = require('fs');
const pages = ['lojas-paraguai','como-calcular-imposto-paraguai','quanto-de-imposto-pagar-no-paraguai','cota-paraguai-via-terrestre'];

for (const dir of pages) {
  const file = `app/${dir}/page.jsx`;
  let c = fs.readFileSync(file, 'utf8');

  // Insere <BannerNomad /> antes do ultimo </div>\n    </main>
  const lines = c.split('\n');
  // Encontra a linha do </main>
  let mainIdx = -1;
  for (let i = lines.length - 1; i >= 0; i--) {
    if (lines[i].includes('</main>')) { mainIdx = i; break; }
  }
  if (mainIdx === -1) { console.log('ERRO - </main> nao encontrado em', dir); continue; }

  // Insere antes do </div> que precede o </main>
  let divIdx = -1;
  for (let i = mainIdx - 1; i >= 0; i--) {
    if (lines[i].trim() === '</div>') { divIdx = i; break; }
  }
  if (divIdx === -1) { console.log('ERRO - </div> nao encontrado em', dir); continue; }

  lines.splice(divIdx, 0, '        <BannerNomad />');
  fs.writeFileSync(file, lines.join('\n'));
  console.log('OK:', dir);
}
