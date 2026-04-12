const puppeteer = require('puppeteer-core')
const { createClient } = require('@supabase/supabase-js')
require('dotenv').config()

const supabase = createClient(process.env.SUPABASE_URL, process.env.SUPABASE_SERVICE_KEY)

function slugify(text) {
  return text.toLowerCase()
    .normalize('NFD').replace(/[\u0300-\u036f]/g, '')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)/g, '')
    .substring(0, 100)
}

async function getBrowser() {
  return puppeteer.launch({
    executablePath: process.env.CHROMIUM_PATH || '/usr/bin/chromium-browser',
    headless: true,
    args: ['--no-sandbox', '--disable-setuid-sandbox', '--disable-dev-shm-usage', '--disable-gpu'],
  })
}

async function scrapeMegaEletronicos(browser) {
  console.log('[Mega] Iniciando...')
  const produtos = []
  const urls = [
    { url: 'https://megaeletronicos.com/producto/marca/apple/1', marca: 'Apple' },
    { url: 'https://megaeletronicos.com/producto/marca/samsung/2', marca: 'Samsung' },
    { url: 'https://megaeletronicos.com/producto/marca/xiaomi/3', marca: 'Xiaomi' },
  ]

  for (const { url, marca } of urls) {
    try {
      const page = await browser.newPage()
      await page.setUserAgent('Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36')
      await page.goto(url, { waitUntil: 'networkidle2', timeout: 30000 })
      await page.waitForSelector('.product-card, .card-product, [class*="product"]', { timeout: 10000 }).catch(() => {})

      const items = await page.evaluate((marca) => {
        const cards = document.querySelectorAll('[class*="product"], [class*="card"], .item')
        return Array.from(cards).slice(0, 20).map(card => {
          const nome = card.querySelector('h2, h3, [class*="name"], [class*="title"]')?.textContent?.trim()
          const preco = card.querySelector('[class*="price"], [class*="preco"], [class*="valor"]')?.textContent?.trim()
          const foto = card.querySelector('img')?.src
          const link = card.querySelector('a')?.href
          if (!nome || nome.length < 3) return null
          const precoNum = parseFloat((preco || '0').replace(/[^0-9.,]/g, '').replace(',', '.'))
          return { nome, preco_usd: precoNum || null, foto_url: foto, url_produto: link, marca, loja: 'Mega Eletronicos', loja_url: 'https://megaeletronicos.com' }
        }).filter(Boolean)
      }, marca)

      produtos.push(...items)
      await page.close()
      console.log(`[Mega] ${marca}: ${items.length} produtos`)
      await new Promise(r => setTimeout(r, 2000))
    } catch (e) {
      console.error(`[Mega] Erro ${marca}:`, e.message)
    }
  }
  return produtos
}

async function scrapeCellshop(browser) {
  console.log('[Cellshop] Iniciando...')
  const produtos = []
  const urls = [
    { url: 'https://cellshopdutyfree.com/categoria/celulares/', marca: 'Varios', categoria: 'Celulares' },
    { url: 'https://cellshopdutyfree.com/categoria/acessorios/', marca: 'Varios', categoria: 'Acessorios' },
  ]

  for (const { url, marca, categoria } of urls) {
    try {
      const page = await browser.newPage()
      await page.setUserAgent('Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36')
      await page.goto(url, { waitUntil: 'networkidle2', timeout: 30000 })

      const items = await page.evaluate((marca, categoria, loja) => {
        const cards = document.querySelectorAll('.product, .type-product, li.product')
        return Array.from(cards).slice(0, 30).map(card => {
          const nome = card.querySelector('h2, .woocommerce-loop-product__title')?.textContent?.trim()
          const preco = card.querySelector('.price, .woocommerce-Price-amount')?.textContent?.trim()
          const foto = card.querySelector('img')?.src
          const link = card.querySelector('a')?.href
          if (!nome || nome.length < 3) return null
          const precoNum = parseFloat((preco || '0').replace(/[^0-9.,]/g, '').replace(',', '.'))
          return { nome, preco_usd: precoNum || null, foto_url: foto, url_produto: link, marca, categoria, loja, loja_url: 'https://cellshopdutyfree.com' }
        }).filter(Boolean)
      }, marca, categoria, 'Cellshop Duty Free')

      produtos.push(...items)
      await page.close()
      console.log(`[Cellshop] ${categoria}: ${items.length} produtos`)
      await new Promise(r => setTimeout(r, 2000))
    } catch (e) {
      console.error(`[Cellshop] Erro:`, e.message)
    }
  }
  return produtos
}

async function scrapeAtacadoConnect(browser) {
  console.log('[Atacado] Iniciando...')
  const produtos = []
  const urls = [
    { url: 'https://atacadoconnect.com/smartphones', marca: 'Varios', categoria: 'Celulares' },
    { url: 'https://atacadoconnect.com/notebooks', marca: 'Varios', categoria: 'Notebooks' },
  ]

  for (const { url, marca, categoria } of urls) {
    try {
      const page = await browser.newPage()
      await page.setUserAgent('Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36')
      await page.goto(url, { waitUntil: 'networkidle2', timeout: 30000 })
      await new Promise(r => setTimeout(r, 3000))

      const items = await page.evaluate((marca, categoria) => {
        const cards = document.querySelectorAll('[class*="product"], [class*="card"], [class*="item"]')
        return Array.from(cards).slice(0, 30).map(card => {
          const nome = card.querySelector('h2, h3, [class*="name"], [class*="title"]')?.textContent?.trim()
          const preco = card.querySelector('[class*="price"], [class*="preco"]')?.textContent?.trim()
          const foto = card.querySelector('img')?.src
          const link = card.querySelector('a')?.href
          if (!nome || nome.length < 3) return null
          const precoNum = parseFloat((preco || '0').replace(/[^0-9.,]/g, '').replace(',', '.'))
          // Detecta marca pelo nome
          let marcaDetectada = marca
          const nomeUpper = nome.toUpperCase()
          if (nomeUpper.includes('APPLE') || nomeUpper.includes('IPHONE') || nomeUpper.includes('MACBOOK') || nomeUpper.includes('AIRPODS')) marcaDetectada = 'Apple'
          else if (nomeUpper.includes('SAMSUNG') || nomeUpper.includes('GALAXY')) marcaDetectada = 'Samsung'
          else if (nomeUpper.includes('XIAOMI') || nomeUpper.includes('REDMI')) marcaDetectada = 'Xiaomi'
          return { nome, preco_usd: precoNum || null, foto_url: foto, url_produto: link, marca: marcaDetectada, categoria, loja: 'Atacado Connect', loja_url: 'https://atacadoconnect.com' }
        }).filter(Boolean)
      }, marca, categoria)

      produtos.push(...items)
      await page.close()
      console.log(`[Atacado] ${categoria}: ${items.length} produtos`)
      await new Promise(r => setTimeout(r, 2000))
    } catch (e) {
      console.error(`[Atacado] Erro:`, e.message)
    }
  }
  return produtos
}

async function salvarProdutos(produtos) {
  console.log(`\nSalvando ${produtos.length} produtos no Supabase...`)
  let salvos = 0
  let atualizados = 0

  for (const p of produtos) {
    if (!p.nome || p.nome.length < 3) continue
    const slug = slugify(p.nome + '-' + p.loja)

    try {
      // Verifica se produto já existe
      const { data: existing } = await supabase
        .from('produtos')
        .select('id, preco_usd')
        .eq('slug', slug)
        .single()

      if (existing) {
        // Atualiza preço e registra histórico se mudou
        if (existing.preco_usd !== p.preco_usd && p.preco_usd) {
          await supabase.from('produtos').update({
            preco_usd: p.preco_usd,
            foto_url: p.foto_url,
            disponivel: true,
            updated_at: new Date().toISOString(),
          }).eq('id', existing.id)

          await supabase.from('historico_precos').insert({
            produto_id: existing.id,
            preco_usd: p.preco_usd,
            loja: p.loja,
          })
          atualizados++
        }
      } else {
        // Insere novo produto
        const { data: novo } = await supabase.from('produtos').insert({
          nome: p.nome,
          slug,
          foto_url: p.foto_url,
          preco_usd: p.preco_usd,
          loja: p.loja,
          loja_url: p.loja_url,
          url_produto: p.url_produto,
          marca: p.marca,
          categoria: p.categoria || 'Geral',
          disponivel: true,
        }).select('id').single()

        if (novo && p.preco_usd) {
          await supabase.from('historico_precos').insert({
            produto_id: novo.id,
            preco_usd: p.preco_usd,
            loja: p.loja,
          })
        }
        salvos++
      }
    } catch (e) {
      console.error(`Erro ao salvar ${p.nome}:`, e.message)
    }
  }

  console.log(`Salvos: ${salvos} novos, ${atualizados} atualizados`)
}

async function main() {
  console.log('=== Scraper Catalogo Paraguai ===')
  console.log('Inicio:', new Date().toISOString())

  const browser = await getBrowser()
  const todosProdutos = []

  try {
    const mega = await scrapeMegaEletronicos(browser)
    todosProdutos.push(...mega)

    const cellshop = await scrapeCellshop(browser)
    todosProdutos.push(...cellshop)

    const atacado = await scrapeAtacadoConnect(browser)
    todosProdutos.push(...atacado)
  } catch (e) {
    console.error('Erro geral:', e.message)
  } finally {
    await browser.close()
  }

  console.log(`\nTotal coletado: ${todosProdutos.length} produtos`)
  await salvarProdutos(todosProdutos)

  console.log('Fim:', new Date().toISOString())
}

main().catch(console.error)
