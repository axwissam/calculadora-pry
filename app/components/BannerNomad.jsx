const NOMAD_LINK = 'https://nomad.onelink.me/wIQT/Travel?code=1ER33NDKPF%26n=Alex'

export default function BannerNomad() {
  return (
    <a
      href={NOMAD_LINK}
      target="_blank"
      rel="noopener noreferrer"
      style={{ background: '#F5C800', display: 'block', borderRadius: 16, textDecoration: 'none' }}
      className="overflow-hidden"
    >
      <div className="flex items-center">
        {/* Logo lado esquerdo */}
        <div style={{ background: '#F5C800', padding: '16px 18px', flexShrink: 0 }}>
          {/* Logo Nomad em SVG simplificado */}
          <svg width="90" height="32" viewBox="0 0 110 38" fill="none" xmlns="http://www.w3.org/2000/svg">
            <text x="0" y="30" fontFamily="system-ui,sans-serif" fontWeight="900" fontSize="32" fill="#1a1a1a" letterSpacing="-1">NOMAD</text>
          </svg>
        </div>

        {/* Divisor */}
        <div style={{ width: 1, background: 'rgba(0,0,0,0.15)', alignSelf: 'stretch', margin: '12px 0' }} />

        {/* Texto lado direito */}
        <div style={{ padding: '12px 16px', flex: 1 }}>
          <p style={{ color: '#1a1a1a', fontWeight: 700, fontSize: 13, margin: 0, lineHeight: 1.3 }}>
            Abra sua conta na Nomad<br/>e ganhe taxa zero na 1ª conversão
          </p>
          <div style={{ marginTop: 6, display: 'inline-block', background: '#1a1a1a', borderRadius: 6, padding: '4px 12px' }}>
            <span style={{ color: '#F5C800', fontWeight: 900, fontSize: 15, letterSpacing: 1 }}>1ER33NDKPF</span>
          </div>
          <p style={{ color: '#1a1a1a', opacity: 0.65, fontSize: 11, margin: '4px 0 0' }}>
            + 1GB no eSIM internacional · até US$ 1.000
          </p>
        </div>
      </div>
    </a>
  )
}
