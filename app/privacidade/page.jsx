import Link from 'next/link'

export const metadata = {
  title: 'Política de Privacidade | Calculadora Paraguai 2026',
  description: 'Política de privacidade da Calculadora Paraguai 2026.',
}

export default function Privacidade() {
  return (
    <main className="min-h-screen bg-gray-50 pb-16">
      <div className="bg-gradient-to-r from-green-600 to-green-500 px-5 pt-10 pb-6 text-white">
        <Link href="/" className="text-green-100 text-sm mb-3 block">← Calculadora</Link>
        <h1 className="text-xl font-bold">Política de Privacidade</h1>
      </div>
      <div className="px-4 py-6 max-w-2xl mx-auto space-y-5 text-sm text-gray-600">
        <p>Última atualização: abril de 2026</p>

        <div className="bg-white rounded-2xl p-5 shadow-sm space-y-3">
          <h2 className="font-bold text-gray-800">1. Dados coletados</h2>
          <p>Esta calculadora não coleta dados pessoais identificáveis. Os valores digitados (quantia em dólares, forma de pagamento) são processados anonimamente apenas para gerar o resultado do cálculo.</p>
          <p>Registramos de forma anônima: valores calculados, tipo de pagamento escolhido e cotação usada — sem associação a usuários individuais.</p>
        </div>

        <div className="bg-white rounded-2xl p-5 shadow-sm space-y-3">
          <h2 className="font-bold text-gray-800">2. Cookies e publicidade</h2>
          <p>Utilizamos o Google AdSense para exibir anúncios. O Google pode usar cookies para exibir anúncios relevantes com base em visitas anteriores a este e outros sites.</p>
          <p>Você pode desativar o uso de cookies pelo Google acessando as <a href="https://adssettings.google.com" className="text-green-600 underline" target="_blank" rel="noopener">configurações de anúncios do Google</a>.</p>
        </div>

        <div className="bg-white rounded-2xl p-5 shadow-sm space-y-3">
          <h2 className="font-bold text-gray-800">3. Cotação do dólar</h2>
          <p>As cotações são obtidas automaticamente de fontes públicas (AwesomeAPI e Banco Central do Brasil) a cada 30 minutos. Não nos responsabilizamos por variações entre o valor exibido e o praticado em câmbio físico.</p>
        </div>

        <div className="bg-white rounded-2xl p-5 shadow-sm space-y-3">
          <h2 className="font-bold text-gray-800">4. Contato</h2>
          <p>Dúvidas sobre esta política? Entre em contato: <span className="text-green-600">contato@calculadoraparaguai.com.br</span></p>
        </div>

        <Link href="/" className="block bg-green-500 text-white text-center py-3 rounded-xl font-semibold mt-4">
          Voltar para a Calculadora →
        </Link>
      </div>
    </main>
  )
}
