const fs = require('fs')

let content = fs.readFileSync('app/sitemap.js', 'utf8')

const novas = `    { url: \`\${base}/celular-paraguai\`,                      lastModified: new Date(), changeFrequency: 'monthly', priority: 0.9 },
    { url: \`\${base}/samsung-paraguai\`,                      lastModified: new Date(), changeFrequency: 'monthly', priority: 0.9 },
    { url: \`\${base}/airpods-paraguai\`,                      lastModified: new Date(), changeFrequency: 'monthly', priority: 0.9 },
    { url: \`\${base}/macbook-paraguai\`,                      lastModified: new Date(), changeFrequency: 'monthly', priority: 0.9 },
    { url: \`\${base}/whisky-paraguai\`,                       lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
    { url: \`\${base}/notebook-paraguai\`,                     lastModified: new Date(), changeFrequency: 'monthly', priority: 0.9 },`

const anchor = `    { url: \`\${base}/lojas-paraguai\`,`
const anchorCRLF = anchor.replace(/\n/g, '\r\n')

if (content.includes(anchorCRLF)) {
  content = content.replace(anchorCRLF, novas.replace(/\n/g, '\r\n') + '\r\n' + anchorCRLF)
} else if (content.includes(anchor)) {
  content = content.replace(anchor, novas + '\n' + anchor)
} else {
  console.log('ERRO - ancora nao encontrada')
  process.exit(1)
}

fs.writeFileSync('app/sitemap.js', content, 'utf8')
const count = (content.match(/url:/g) || []).length
console.log(`OK - sitemap com ${count} paginas!`)
