
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
            The world's leading media partnership platform.
            <br />
            Trusted by Fortune 500 companies and top influencers globally.
          </p>
          
          <div className="hero-buttons">
            <a href="/features" className="btn btn-primary btn-lg">Discover Benefits</a>
            <a href="/checkout" className="btn btn-outline btn-lg">Start Your Journey</a>
          </div>
          
          {/* Enhanced Stats */}
          <div className="stats-grid">
            <div className="stat-card">
              <div className="stat-number">$2.8B+</div>
              <div className="stat-label">Deals Facilitated</div>
              <div className="stat-description">Total value processed</div>
            </div>
            <div className="stat-card">
              <div className="stat-number">50,000+</div>
              <div className="stat-label">Happy Clients</div>
              <div className="stat-description">Global success stories</div>
            </div>
            <div className="stat-card">
              <div className="stat-number">99.9%</div>
              <div className="stat-label">Uptime</div>
              <div className="stat-description">Reliable platform</div>
            </div>
            <div className="stat-card">
              <div className="stat-number">15min</div>
              <div className="stat-label">Avg. Match Time</div>
              <div className="stat-description">AI-powered precision</div>
            </div>
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

      {/* Testimonials Section */}
      <section className="testimonials-section">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Trusted by Industry Leaders</h2>
            <p className="section-subtitle">See what our clients say about us</p>
          </div>
          
          <div className="testimonials-grid">
            <div className="testimonial-card">
              <div className="testimonial-content">
                <p>"DurZivetMedia transformed our partnership strategy. We've seen a 340% increase in media deals since joining."</p>
              </div>
              <div className="testimonial-author">
                <div className="author-info">
                  <h4>Sarah Chen</h4>
                  <p>VP Marketing, TechCorp</p>
                </div>
                <div className="rating">⭐⭐⭐⭐⭐</div>
              </div>
            </div>
            
            <div className="testimonial-card">
              <div className="testimonial-content">
                <p>"The AI matching is incredible. We found our perfect media partners in under 20 minutes. Game changer!"</p>
              </div>
              <div className="testimonial-author">
                <div className="author-info">
                  <h4>Marcus Rodriguez</h4>
                  <p>CEO, Creative Agency</p>
                </div>
                <div className="rating">⭐⭐⭐⭐⭐</div>
              </div>
            </div>
            
            <div className="testimonial-card">
              <div className="testimonial-content">
                <p>"$2.8B in deals facilitated? That's not just impressive, that's revolutionary for our industry."</p>
              </div>
              <div className="testimonial-author">
                <div className="author-info">
                  <h4>Jennifer Kim</h4>
                  <p>Director, Media Relations</p>
                </div>
                <div className="rating">⭐⭐⭐⭐⭐</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section">
        <div className="container">
          <div className="cta-content">
            <h2>Ready to Transform Your Media Partnerships?</h2>
            <p>Join 50,000+ companies already using DurZivetMedia to grow their business</p>
            <div className="cta-buttons">
              <a href="/checkout" className="btn btn-primary btn-lg">Get Started Now</a>
              <a href="/contact" className="btn btn-outline btn-lg">Schedule Demo</a>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Home
