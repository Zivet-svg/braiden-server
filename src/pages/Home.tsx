
function Home() {
  return (
    <div className="page">
      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-content">
          <div className="hero-badge">
            New
          </div>
          
          <h1 className="hero-title">
            Dur<span className="accent">Zivet</span>Media
          </h1>
          
          <p className="hero-subtitle">
            Connect with the right media partners instantly.
            <br />
            The future of brand partnerships is here.
          </p>
          
          <div className="hero-buttons">
            <a href="/features" className="btn btn-primary btn-lg">Learn more</a>
            <a href="/checkout" className="btn btn-outline btn-lg">Get Started</a>
          </div>
          
          {/* Stats */}
          <div className="stats-grid">
            <div className="stat-card">
              <div className="stat-number">2H</div>
              <div className="stat-label">Average Connection Time</div>
              <div className="stat-description">Lightning fast matching</div>
            </div>
            <div className="stat-card">
              <div className="stat-number">100%</div>
              <div className="stat-label">Success Rate</div>
              <div className="stat-description">Perfect matches guaranteed</div>
            </div>
            <div className="stat-card">
              <div className="stat-number">24/7</div>
              <div className="stat-label">Support</div>
              <div className="stat-description">Always available</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Home
