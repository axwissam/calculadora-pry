const NOMAD_LINK = 'https://nomad.onelink.me/wIQT/Travel?code=1ER33NDKPF%26n=Alex'

export default function BannerNomad() {
  return (
    <a href={NOMAD_LINK} target="_blank" rel="noopener noreferrer" style={{ display: 'block', borderRadius: 16, overflow: 'hidden', textDecoration: 'none' }}>
      <img src="/banner-nomad.png" alt="Abra sua conta na Nomad e ganhe taxa zero na 1ª conversão - código 1ER33NDKPF" style={{ width: '100%', display: 'block' }} />
    </a>
  )
}
