
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
        </div>
      </section>

      {/* Features Preview Section */}
      <section className="features-preview">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Why Choose DurZivetMedia?</h2>
            <p className="section-subtitle">Powerful features that drive real results</p>
          </div>
          
          <div className="features-grid">
            <div className="feature-preview-card">
              <div className="feature-icon">🚀</div>
              <h3>AI-Powered Matching</h3>
              <p>Advanced algorithms connect you with the perfect media partners in minutes, not days.</p>
            </div>
            <div className="feature-preview-card">
              <div className="feature-icon">💰</div>
              <h3>Revenue Optimization</h3>
              <p>Maximize your ROI with data-driven insights and automated deal optimization.</p>
            </div>
            <div className="feature-preview-card">
              <div className="feature-icon">🌍</div>
              <h3>Global Network</h3>
              <p>Access 200+ countries and territories with our worldwide partner network.</p>
            </div>
          </div>
        </div>
      </section>


      {/* CTA Section */}
      <section className="cta-section">
        <div className="container">
          <div className="cta-content">
            <h2>Ready to Transform Your Media Partnerships?</h2>
            <p>Start connecting with the right media partners today</p>
            <div className="cta-buttons">
              <a href="/checkout" className="btn btn-primary btn-lg">Get Started Now</a>
              <a href="/contact" className="btn btn-outline btn-lg">Contact Us</a>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Home
