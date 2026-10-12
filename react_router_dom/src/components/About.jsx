import React from 'react'

const About = () => {
  return (
    <div>
      <section className="hero">
        <h1>About MyApp</h1>
        <p className="lead">
          We are a small team of designers and developers who like building
          things that are fast, accessible and easy to use.
        </p>
      </section>

      <section className="section">
        <h2>Our story</h2>
        <p>
          MyApp started with a simple idea: most websites are heavier than they
          need to be. We began by helping local businesses get online, and
          grew by keeping every project focused and well made.
        </p>
        <p>
          Today we work with startups, shops and community groups, turning
          rough ideas into working products.
        </p>
      </section>

      <section className="stats">
        <div className="stat">
          <strong>50+</strong>
          <span>Projects delivered</span>
        </div>
        <div className="stat">
          <strong>5</strong>
          <span>Years in business</span>
        </div>
        <div className="stat">
          <strong>98%</strong>
          <span>Clients who return</span>
        </div>
      </section>

      <section className="section">
        <h2>What we value</h2>
        <div className="grid">
          <div className="card">
            <h3>Simplicity</h3>
            <p>If a feature doesn't help the visitor, we leave it out.</p>
          </div>
          <div className="card">
            <h3>Speed</h3>
            <p>Fast pages keep people reading, and rank better in search.</p>
          </div>
          <div className="card">
            <h3>Honesty</h3>
            <p>Clear timelines, clear prices, and plain answers.</p>
          </div>
        </div>
      </section>

      <section className="section">
        <h2>The team</h2>
        <div className="grid">
          <div className="card person">
            <div className="avatar">A</div>
            <h3>Asha Rao</h3>
            <p>Founder and lead developer</p>
          </div>
          <div className="card person">
            <div className="avatar">R</div>
            <h3>Ravi Kumar</h3>
            <p>Product designer</p>
          </div>
          <div className="card person">
            <div className="avatar">M</div>
            <h3>Meera Nair</h3>
            <p>Project manager</p>
          </div>
        </div>
      </section>
    </div>
  )
}

export default About