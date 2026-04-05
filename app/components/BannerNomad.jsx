const NOMAD_LINK = 'https://nomad.onelink.me/wIQT/Travel?code=1ER33NDKPF%26n=Alex'

export default function BannerNomad() {
  return (
    <a href={NOMAD_LINK} target="_blank" rel="noopener noreferrer"
      style={{ background: '#F5C800', display: 'flex', alignItems: 'center', borderRadius: 16, textDecoration: 'none', overflow: 'hidden', minHeight: 72 }}>
      <div style={{ padding: '0 20px', flexShrink: 0, display: 'flex', alignItems: 'center' }}>
        <svg width="64" height="40" viewBox="0 0 180 60" fill="none" xmlns="http://www.w3.org/2000/svg">
          <text x="0" y="48" fontFamily="Arial Black,sans-serif" fontWeight="900" fontSize="52" fill="#1a1a1a" letterSpacing="-2">NOMAD</text>
          <rect x="0" y="52" width="172" height="5" rx="2" fill="#1a1a1a"/>
        </svg>
      </div>
      <div style={{ width: 1, background: 'rgba(0,0,0,0.15)', alignSelf: 'stretch', margin: '12px 0' }} />
      <div style={{ padding: '12px 16px', flex: 1 }}>
        <p style={{ color: '#1a1a1a', fontWeight: 700, fontSize: 13, margin: 0, lineHeight: 1.4 }}>Abra sua conta na Nomad<br/>e ganhe taxa zero na 1ª conversão</p>
        <div style={{ marginTop: 6, display: 'inline-block', background: '#1a1a1a', borderRadius: 6, padding: '3px 12px' }}>
          <span style={{ color: '#F5C800', fontWeight: 900, fontSize: 14, letterSpacing: 1 }}>1ER33NDKPF</span>
        </div>
        <p style={{ color: '#1a1a1a', opacity: 0.6, fontSize: 11, margin: '4px 0 0' }}>+ 1GB no eSIM internacional · até US$ 1.000</p>
      </div>
    </a>
  )
}
