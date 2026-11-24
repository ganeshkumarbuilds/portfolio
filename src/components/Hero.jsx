import { profile } from '../data/portfolioData'

export default function Hero() {
  return (
    <header id="about" className="shell intro">
      <div>
        <p className="availability"><i aria-hidden="true" /> Open to software engineering roles</p>
        <h1>{profile.name}</h1>
        <p className="role">{profile.role}</p>
        <p className="summary">I build web applications and machine learning models. My projects help people compare hospitals, detect forest fires in images, and practice for job interviews.</p>
        <div className="actions"><a className="primary" href="#projects">View projects <span aria-hidden="true">↓</span></a><a className="secondary" href={'mailto:' + profile.email}>Email me <span aria-hidden="true">↗</span></a></div>
      </div>
      <aside className="profile-details" aria-label="Profile details">
        <dl>
          <dt>Resume</dt>
          <dd className="social">
            <a href={profile.resume} target="_blank" rel="noopener noreferrer">View resume <span aria-hidden="true">↗</span></a>
            <a href={import.meta.env.BASE_URL + 'Ganesh_Kumar_Chavala_Resume.pdf'} download aria-label="Download resume as PDF">Download PDF <span aria-hidden="true">↓</span></a>
          </dd>
          <dt>Based in</dt><dd>{profile.location}</dd>
          <dt>Education</dt><dd>B.Tech in AI &amp; Machine Learning</dd>
          <dt>Find me on</dt>
          <dd className="social">
            <a href={profile.github}>GitHub ↗</a>
            <a href={profile.linkedin}>LinkedIn ↗</a>
            <a href={profile.leetcode}>LeetCode ↗</a>
          </dd>
        </dl>
      </aside>
    </header>
  )
}
