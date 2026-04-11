'use client'
const NOMAD_LINK = 'https://nomad.onelink.me/wIQT/Travel?code=1ER33NDKPF%26n=Alex'

export default function BannerNomad() {
  return (
    <div style={{ padding: '16px 0' }}>
      <a href={NOMAD_LINK} target="_blank" rel="noopener noreferrer" style={{ display: 'block', borderRadius: 16, overflow: 'hidden', textDecoration: 'none', maxWidth: 600, margin: '0 auto' }}>
        <img src="/banner-nomad.webp" loading="eager" fetchpriority="high" alt="Abra sua conta na Nomad e ganhe taxa zero na 1ª conversão - código 1ER33NDKPF" width="1024" height="275" style={{ width: '100%', height: 'auto', display: 'block' }} />
      </a>
    </div>
  )
}

