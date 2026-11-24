import { profile } from '../data/portfolioData'

export default function Hero() {
  return (
    <header id="about" className="shell intro">
      <div>
        <p className="availability"><i aria-hidden="true" /> Open to software engineering roles</p>
        <h1>{profile.name}</h1>
        <p className="role">{profile.role}</p>
        <p className="summary">I build web applications with Spring Boot, React, and PostgreSQL. My projects span hospital booking, image classification, and automated code review.</p>
        <div className="actions"><a className="primary" href="#projects">View projects <span aria-hidden="true">↓</span></a><a className="secondary" href={'mailto:' + profile.email}>Email me <span aria-hidden="true">↗</span></a></div>
      </div>
      <aside className="profile-details" aria-label="Profile details">
        <dl>
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
