const fs = require('fs')

let content = fs.readFileSync('app/lojas-paraguai/page.jsx', 'utf8')

// Troca loading="eager" por loading="lazy" nas imagens das lojas
// A primeira imagem fica eager (above the fold), as demais ficam lazy
let count = 0
content = content.replace(/loading="eager"/g, () => {
  count++
  return count === 1 ? 'loading="eager"' : 'loading="lazy"'
})

// Se não tiver loading="eager", adiciona loading="lazy" em todas as imagens
// exceto a primeira
content = content.replace(/<Image([^>]*?)(\/>|>)/g, (match, attrs, close, offset) => {
  if (match.includes('loading=')) return match
  return `<Image${attrs} loading="lazy"${close}`
})

fs.writeFileSync('app/lojas-paraguai/page.jsx', content, 'utf8')
console.log(`OK - lazy load aplicado!`)
