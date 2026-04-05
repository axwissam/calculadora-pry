const NOMAD_LINK = 'https://nomad.onelink.me/wIQT/Travel?code=1ER33NDKPF%26n=Alex'

export default function BannerNomad() {
  return (
    <a href={NOMAD_LINK} target="_blank" rel="noopener noreferrer"
      style={{ background: '#F5C800', display: 'flex', alignItems: 'center', borderRadius: 16, textDecoration: 'none', overflow: 'hidden', minHeight: 72 }}>
      <div style={{ padding: '0 20px', flexShrink: 0 }}>
        <svg width="52" height="52" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M8 82V18L42 82V18" stroke="#1a1a1a" strokeWidth="11" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M52 82V18L86 82V18" stroke="#1a1a1a" strokeWidth="11" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </div>
      <div style={{ width: 1, background: 'rgba(0,0,0,0.15)', alignSelf: 'stretch', margin: '12px 0' }} />
      <div style={{ padding: '12px 16px', flex: 1 }}>
        <p style={{ color: '#1a1a1a', fontWeight: 700, fontSize: 13, margin: 0, lineHeight: 1.4 }}>
          Abra sua conta na Nomad<br/>e ganhe taxa zero na 1ª conversão
        </p>
        <div style={{ marginTop: 6, display: 'inline-block', background: '#1a1a1a', borderRadius: 6, padding: '3px 12px' }}>
          <span style={{ color: '#F5C800', fontWeight: 900, fontSize: 14, letterSpacing: 1 }}>1ER33NDKPF</span>
        </div>
        <p style={{ color: '#1a1a1a', opacity: 0.6, fontSize: 11, margin: '4px 0 0' }}>+ 1GB no eSIM internacional · até US$ 1.000</p>
      </div>
    </a>
  )
}

