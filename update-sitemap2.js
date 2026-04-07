const fs = require('fs')
const path = require('path')

const filePath = path.join(process.cwd(), 'app', 'sitemap.js')
let content = fs.readFileSync(filePath, 'utf8')

const novas = `    { url: \`\${base}/seguro-viagem-paraguai\`,        lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
    { url: \`\${base}/duty-free-foz-do-iguacu\`,        lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },`

const ancora = `    { url: \`\${base}/privacidade\``

if (content.includes(ancora)) {
  content = content.replace(ancora, novas + '\n    { url: `${base}/privacidade`')
  fs.writeFileSync(filePath, content, 'utf8')
  console.log('OK - sitemap atualizado com 18 paginas!')
} else {
  console.log('ERRO - ancora nao encontrada no sitemap.js')
}
