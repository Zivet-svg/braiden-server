import React from 'react'

function Contact() {
  return (
    <div className="page">
      <div className="page-content">
        <div className="features-section">
          <h2 className="section-title">
            Get in <span className="accent">Touch</span>
          </h2>
          <p className="section-subtitle">
            Ready to revolutionize your media partnerships? Let's talk.
          </p>
          
          <div style={{display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '60px', marginTop: '60px'}}>
            <div>
              <h3 style={{fontSize: '21px', fontWeight: '600', marginBottom: '20px', color: 'var(--text-primary)'}}>
                Contact Information
              </h3>
              <div style={{marginBottom: '30px'}}>
                <h4 style={{fontSize: '17px', fontWeight: '600', marginBottom: '8px', color: 'var(--text-primary)'}}>Email</h4>
                <p style={{color: 'var(--text-secondary)', fontSize: '17px'}}>hello@mediaconnect.com</p>
              </div>
              <div style={{marginBottom: '30px'}}>
                <h4 style={{fontSize: '17px', fontWeight: '600', marginBottom: '8px', color: 'var(--text-primary)'}}>Phone</h4>
                <p style={{color: 'var(--text-secondary)', fontSize: '17px'}}>+1 (555) 123-4567</p>
              </div>
              <div style={{marginBottom: '30px'}}>
                <h4 style={{fontSize: '17px', fontWeight: '600', marginBottom: '8px', color: 'var(--text-primary)'}}>Address</h4>
                <p style={{color: 'var(--text-secondary)', fontSize: '17px'}}>
                  123 Innovation Drive<br />
                  San Francisco, CA 94105
                </p>
              </div>
            </div>
            
            <div>
              <h3 style={{fontSize: '21px', fontWeight: '600', marginBottom: '20px', color: 'var(--text-primary)'}}>
                Send us a message
              </h3>
              <form style={{display: 'flex', flexDirection: 'column', gap: '20px'}}>
                <div>
                  <input 
                    type="text" 
                    placeholder="Your name"
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
                    placeholder="Your email"
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
                  <textarea 
                    placeholder="Your message"
                    rows="4"
                    style={{
                      width: '100%',
                      padding: '12px 16px',
                      border: '1px solid var(--border-light)',
                      borderRadius: '8px',
                      fontSize: '17px',
                      fontFamily: 'inherit',
                      outline: 'none',
                      resize: 'vertical',
                      transition: 'border-color 0.3s ease'
                    }}
                    onFocus={(e) => e.target.style.borderColor = 'var(--primary-blue)'}
                    onBlur={(e) => e.target.style.borderColor = 'var(--border-light)'}
                  />
                </div>
                <button 
                  type="submit"
                  className="btn btn-primary btn-lg"
                  style={{alignSelf: 'flex-start'}}
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact
