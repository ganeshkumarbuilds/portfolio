import { profile } from '../data/portfolioData'

export default function Footer() {
  return <footer id="contact"><div className="shell">
    <h2>Get in touch</h2>
    <a className="email" href={'mailto:' + profile.email}>{profile.email} ↗</a>
    <div className="footer-links"><a href={'tel:' + profile.phone.replaceAll(' ', '')}>{profile.phone}</a><a href={profile.github}>GitHub ↗</a><a href={profile.linkedin}>LinkedIn ↗</a></div>
  </div></footer>
}
