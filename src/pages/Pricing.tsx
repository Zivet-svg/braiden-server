
function Pricing() {
  return (
    <div className="page">
      <div className="page-content">
        <div className="features-section">
          <h2 className="section-title">
            Simple <span className="accent">Pricing</span>
          </h2>
          <p className="section-subtitle">
            Choose the plan that works for your business
          </p>
          
          <div className="features-grid">
            <div className="feature-card">
              <h3 className="feature-title">Starter</h3>
              <div className="stat-number" style={{fontSize: '48px', marginBottom: '20px'}}>$99</div>
              <p className="feature-description" style={{marginBottom: '30px'}}>
                Perfect for small businesses getting started
              </p>
              <ul style={{textAlign: 'left', listStyle: 'none', padding: 0, marginBottom: '30px'}}>
                <li style={{padding: '8px 0', borderBottom: '1px solid var(--border-light)'}}>✓ Up to 10 connections per month</li>
                <li style={{padding: '8px 0', borderBottom: '1px solid var(--border-light)'}}>✓ Basic AI matching</li>
                <li style={{padding: '8px 0', borderBottom: '1px solid var(--border-light)'}}>✓ Email support</li>
                <li style={{padding: '8px 0', borderBottom: '1px solid var(--border-light)'}}>✓ Basic analytics</li>
              </ul>
              <a href="/checkout" className="btn btn-outline btn-lg" style={{width: '100%'}}>Get Started</a>
            </div>
            
            <div className="feature-card" style={{border: '2px solid var(--primary-blue)'}}>
              <h3 className="feature-title">Professional</h3>
              <div className="stat-number" style={{fontSize: '48px', marginBottom: '20px', color: 'var(--primary-blue)'}}>$299</div>
              <p className="feature-description" style={{marginBottom: '30px'}}>
                Most popular for growing businesses
              </p>
              <ul style={{textAlign: 'left', listStyle: 'none', padding: 0, marginBottom: '30px'}}>
                <li style={{padding: '8px 0', borderBottom: '1px solid var(--border-light)'}}>✓ Up to 50 connections per month</li>
                <li style={{padding: '8px 0', borderBottom: '1px solid var(--border-light)'}}>✓ Advanced AI matching</li>
                <li style={{padding: '8px 0', borderBottom: '1px solid var(--border-light)'}}>✓ Priority support</li>
                <li style={{padding: '8px 0', borderBottom: '1px solid var(--border-light)'}}>✓ Advanced analytics</li>
                <li style={{padding: '8px 0', borderBottom: '1px solid var(--border-light)'}}>✓ Custom integrations</li>
              </ul>
              <a href="/checkout" className="btn btn-primary btn-lg" style={{width: '100%'}}>Get Started</a>
            </div>
            
            <div className="feature-card">
              <h3 className="feature-title">Enterprise</h3>
              <div className="stat-number" style={{fontSize: '48px', marginBottom: '20px'}}>Custom</div>
              <p className="feature-description" style={{marginBottom: '30px'}}>
                For large organizations with specific needs
              </p>
              <ul style={{textAlign: 'left', listStyle: 'none', padding: 0, marginBottom: '30px'}}>
                <li style={{padding: '8px 0', borderBottom: '1px solid var(--border-light)'}}>✓ Unlimited connections</li>
                <li style={{padding: '8px 0', borderBottom: '1px solid var(--border-light)'}}>✓ Custom AI models</li>
                <li style={{padding: '8px 0', borderBottom: '1px solid var(--border-light)'}}>✓ Dedicated support</li>
                <li style={{padding: '8px 0', borderBottom: '1px solid var(--border-light)'}}>✓ Full analytics suite</li>
                <li style={{padding: '8px 0', borderBottom: '1px solid var(--border-light)'}}>✓ White-label solution</li>
                <li style={{padding: '8px 0', borderBottom: '1px solid var(--border-light)'}}>✓ On-premise deployment</li>
              </ul>
              <a href="/checkout" className="btn btn-outline btn-lg" style={{width: '100%'}}>Contact Sales</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Pricing
