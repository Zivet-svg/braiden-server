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
            
            <div>
              <h3 style={{fontSize: '21px', fontWeight: '600', marginBottom: '20px', color: 'var(--text-primary)'}}>
                Media Partner Application
              </h3>
              <form style={{display: 'flex', flexDirection: 'column', gap: '20px'}}>
                <div>
                  <input 
                    type="text" 
                    placeholder="Full Name *"
                    style={{
                      width: '100%',
                      padding: '12px 16px',
                      border: '1px solid var(--border-light)',
                      borderRadius: '8px',
                      fontSize: '17px',
                      fontFamily: 'inherit',
                      outline: 'none',
                      transition: 'border-color 0.3s ease'
                    }}
                    onFocus={(e) => e.target.style.borderColor = 'var(--primary-blue)'}
                    onBlur={(e) => e.target.style.borderColor = 'var(--border-light)'}
                  />
                </div>
                
                <div>
                  <input 
                    type="email" 
                    placeholder="Email Address *"
                    style={{
                      width: '100%',
                      padding: '12px 16px',
                      border: '1px solid var(--border-light)',
                      borderRadius: '8px',
                      fontSize: '17px',
                      fontFamily: 'inherit',
                      outline: 'none',
                      transition: 'border-color 0.3s ease'
                    }}
                    onFocus={(e) => e.target.style.borderColor = 'var(--primary-blue)'}
                    onBlur={(e) => e.target.style.borderColor = 'var(--border-light)'}
                  />
                </div>
                
                <div>
                  <select 
                    style={{
                      width: '100%',
                      padding: '12px 16px',
                      border: '1px solid var(--border-light)',
                      borderRadius: '8px',
                      fontSize: '17px',
                      fontFamily: 'inherit',
                      outline: 'none',
                      transition: 'border-color 0.3s ease',
                      backgroundColor: '#1c1c1e',
                      color: 'var(--white)'
                    }}
                    onFocus={(e) => e.target.style.borderColor = 'var(--primary-blue)'}
                    onBlur={(e) => e.target.style.borderColor = 'var(--border-light)'}
                  >
                    <option value="">Select your main platform *</option>
                    <option value="instagram">Instagram</option>
                    <option value="youtube">YouTube</option>
                    <option value="tiktok">TikTok</option>
                    <option value="twitter">Twitter/X</option>
                    <option value="twitch">Twitch</option>
                    <option value="other">Other</option>
                  </select>
                </div>
                
                <div>
                  <input 
                    type="number" 
                    placeholder="Follower Count *"
                    style={{
                      width: '100%',
                      padding: '12px 16px',
                      border: '1px solid var(--border-light)',
                      borderRadius: '8px',
                      fontSize: '17px',
                      fontFamily: 'inherit',
                      outline: 'none',
                      transition: 'border-color 0.3s ease'
                    }}
                    onFocus={(e) => e.target.style.borderColor = 'var(--primary-blue)'}
                    onBlur={(e) => e.target.style.borderColor = 'var(--border-light)'}
                  />
                </div>
                
                <div>
                  <input 
                    type="text" 
                    placeholder="Social Media Handle * (e.g., @yourhandle)"
                    style={{
                      width: '100%',
                      padding: '12px 16px',
                      border: '1px solid var(--border-light)',
                      borderRadius: '8px',
                      fontSize: '17px',
                      fontFamily: 'inherit',
                      outline: 'none',
                      transition: 'border-color 0.3s ease'
                    }}
                    onFocus={(e) => e.target.style.borderColor = 'var(--primary-blue)'}
                    onBlur={(e) => e.target.style.borderColor = 'var(--border-light)'}
                  />
                </div>
                
                <div>
                  <select 
                    style={{
                      width: '100%',
                      padding: '12px 16px',
                      border: '1px solid var(--border-light)',
                      borderRadius: '8px',
                      fontSize: '17px',
                      fontFamily: 'inherit',
                      outline: 'none',
                      transition: 'border-color 0.3s ease',
                      backgroundColor: '#1c1c1e',
                      color: 'var(--white)'
                    }}
                    onFocus={(e) => e.target.style.borderColor = 'var(--primary-blue)'}
                    onBlur={(e) => e.target.style.borderColor = 'var(--border-light)'}
                  >
                    <option value="">Select your content niche *</option>
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
                
                <div>
                  <textarea 
                    placeholder="Previous Brand Partnership Experience (optional)"
                    rows={4}
                    style={{
                      width: '100%',
                      padding: '12px 16px',
                      border: '1px solid var(--border-light)',
                      borderRadius: '8px',
                      fontSize: '17px',
                      fontFamily: 'inherit',
                      outline: 'none',
                      transition: 'border-color 0.3s ease',
                      resize: 'vertical',
                      minHeight: '100px'
                    }}
                    onFocus={(e) => e.target.style.borderColor = 'var(--primary-blue)'}
                    onBlur={(e) => e.target.style.borderColor = 'var(--border-light)'}
                  ></textarea>
                </div>
                
                <div>
                  <textarea 
                    placeholder="Partnership Goals (optional)"
                    rows={3}
                    style={{
                      width: '100%',
                      padding: '12px 16px',
                      border: '1px solid var(--border-light)',
                      borderRadius: '8px',
                      fontSize: '17px',
                      fontFamily: 'inherit',
                      outline: 'none',
                      transition: 'border-color 0.3s ease',
                      resize: 'vertical',
                      minHeight: '80px'
                    }}
                    onFocus={(e) => e.target.style.borderColor = 'var(--primary-blue)'}
                    onBlur={(e) => e.target.style.borderColor = 'var(--border-light)'}
                  ></textarea>
                </div>
                
                <button 
                  type="submit" 
                  className="btn btn-primary btn-lg"
                  style={{marginTop: '10px'}}
                >
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
