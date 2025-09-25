function MediaApply() {
  return (
    <div className="page">
      {/* Hero Section */}
      <section className="hero-section">
        <div className="container">
          <div className="hero-content">
            <h1 className="hero-title">
              Become a <span className="accent">Media Partner</span>
            </h1>
            <p className="hero-subtitle">
              Join our network of content creators and influencers.
              <br />
              Grow your audience while helping brands reach theirs.
            </p>
          </div>
        </div>
      </section>

      {/* Application Form Section */}
      <section className="contact-section">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Media Partner Application</h2>
            <p className="section-subtitle">Tell us about your content and audience</p>
          </div>
          
          <div className="contact-content">
            <div className="contact-info">
              <h3 style={{fontSize: '21px', fontWeight: '600', marginBottom: '20px', color: 'var(--text-primary)'}}>
                Why Partner With Us?
              </h3>
              <div style={{marginBottom: '30px'}}>
                <h4 style={{fontSize: '17px', fontWeight: '600', marginBottom: '8px', color: 'var(--text-primary)'}}>Monetize Your Content</h4>
                <p style={{color: 'var(--text-secondary)', fontSize: '17px'}}>Earn money through brand partnerships and sponsored content</p>
              </div>
              <div style={{marginBottom: '30px'}}>
                <h4 style={{fontSize: '17px', fontWeight: '600', marginBottom: '8px', color: 'var(--text-primary)'}}>Access to Premium Brands</h4>
                <p style={{color: 'var(--text-secondary)', fontSize: '17px'}}>Work with top-tier brands and exclusive opportunities</p>
              </div>
              <div style={{marginBottom: '30px'}}>
                <h4 style={{fontSize: '17px', fontWeight: '600', marginBottom: '8px', color: 'var(--text-primary)'}}>Growth Support</h4>
                <p style={{color: 'var(--text-secondary)', fontSize: '17px'}}>Get insights and tools to grow your following</p>
              </div>
            </div>
            
            <div className="contact-form">
              <form>
                <div className="form-group">
                  <label htmlFor="name">Full Name *</label>
                  <input 
                    type="text" 
                    id="name" 
                    name="name" 
                    required 
                    placeholder="Your full name"
                  />
                </div>
                
                <div className="form-group">
                  <label htmlFor="email">Email Address *</label>
                  <input 
                    type="email" 
                    id="email" 
                    name="email" 
                    required 
                    placeholder="your@email.com"
                  />
                </div>
                
                <div className="form-group">
                  <label htmlFor="platform">Primary Platform *</label>
                  <select id="platform" name="platform" required>
                    <option value="">Select your main platform</option>
                    <option value="instagram">Instagram</option>
                    <option value="youtube">YouTube</option>
                    <option value="tiktok">TikTok</option>
                    <option value="twitter">Twitter/X</option>
                    <option value="twitch">Twitch</option>
                    <option value="other">Other</option>
                  </select>
                </div>
                
                <div className="form-group">
                  <label htmlFor="followers">Follower Count *</label>
                  <input 
                    type="number" 
                    id="followers" 
                    name="followers" 
                    required 
                    placeholder="e.g., 10000"
                  />
                </div>
                
                <div className="form-group">
                  <label htmlFor="handle">Social Media Handle *</label>
                  <input 
                    type="text" 
                    id="handle" 
                    name="handle" 
                    required 
                    placeholder="@yourhandle"
                  />
                </div>
                
                <div className="form-group">
                  <label htmlFor="niche">Content Niche *</label>
                  <select id="niche" name="niche" required>
                    <option value="">Select your content niche</option>
                    <option value="lifestyle">Lifestyle</option>
                    <option value="fashion">Fashion</option>
                    <option value="tech">Technology</option>
                    <option value="gaming">Gaming</option>
                    <option value="fitness">Fitness</option>
                    <option value="beauty">Beauty</option>
                    <option value="food">Food</option>
                    <option value="travel">Travel</option>
                    <option value="business">Business</option>
                    <option value="other">Other</option>
                  </select>
                </div>
                
                <div className="form-group">
                  <label htmlFor="experience">Previous Brand Partnership Experience</label>
                  <textarea 
                    id="experience" 
                    name="experience" 
                    rows={4}
                    placeholder="Tell us about any previous brand partnerships or sponsored content you've done..."
                  ></textarea>
                </div>
                
                <div className="form-group">
                  <label htmlFor="goals">Partnership Goals</label>
                  <textarea 
                    id="goals" 
                    name="goals" 
                    rows={3}
                    placeholder="What are you looking to achieve through brand partnerships?"
                  ></textarea>
                </div>
                
                <button type="submit" className="btn btn-primary btn-lg">
                  Submit Application
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default MediaApply
