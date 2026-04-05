import './globals.css'

export const metadata = {
  title: 'Calculadora de Compras Paraguai 2026 - Cota e Impostos',
  description: 'Calcule quanto vai pagar em reais nas compras do Paraguai. Cota de US$ 500, imposto de 50% sobre excedente, IOF e spread bancário incluídos.',
  keywords: 'calculadora paraguai 2026, cota paraguai, imposto compras paraguai, limite compras paraguai',
  openGraph: {
    title: 'Calculadora de Compras Paraguai 2026',
    description: 'Cota de US$ 500, impostos e câmbio em tempo real.',
    locale: 'pt_BR',
    type: 'website',
    images: [{ url: '/og-image.svg', width: 1200, height: 630 }],
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR">
      <body className="bg-gray-50 antialiased">{children}</body>
    </html>
  )
}
