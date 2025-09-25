import { useState } from 'react';
import { sendPaymentToDiscord } from '../utils/discordWebhook';
import type { PaymentFormData } from '../utils/discordWebhook';

interface Plan {
  name: string;
  price: number | string;
  period: string;
  features: string[];
}

interface Plans {
  [key: string]: Plan;
}

function Checkout() {
  const [selectedPlan, setSelectedPlan] = useState('professional')
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    paymentMethod: ''
  })

  const plans: Plans = {
    starter: {
      name: 'Starter',
      price: 99,
      period: 'month',
      features: ['Up to 10 connections per month', 'Basic AI matching', 'Email support', 'Basic analytics']
    },
    professional: {
      name: 'Professional',
      price: 299,
      period: 'month',
      features: ['Up to 50 connections per month', 'Advanced AI matching', 'Priority support', 'Advanced analytics', 'Custom integrations']
    },
    enterprise: {
      name: 'Enterprise',
      price: 'Custom',
      period: 'contact',
      features: ['Unlimited connections', 'Custom AI models', 'Dedicated support', 'Full analytics suite', 'White-label solution', 'On-premise deployment']
    }
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    
    // Send to Discord
    const plan = plans[selectedPlan as keyof Plans]
    const price = typeof plan.price === 'number' ? plan.price : 'Custom'
    
    const paymentData: PaymentFormData = {
      name: formData.name,
      email: formData.email,
      plan: `${plan.name} - $${price}`,
      paymentMethod: formData.paymentMethod,
      ltcAddress: 'LgfAghENbuhVtgYrBh8trLw6n9AKAVNZFF',
      paypalEmail: 'yeetdab2010@gmail.com'
    };

    try {
      await sendPaymentToDiscord(paymentData);
    } catch (error) {
      console.error('Error sending payment to Discord:', error);
    }
    
    // Show payment options
    alert(`Payment Options for ${plan.name} Plan ($${price}):
    
Litecoin (LTC) Payment:
Address: LgfAghENbuhVtgYrBh8trLw6n9AKAVNZFF
Amount: $${price} USD equivalent in LTC

PayPal Payment:
Email: yeetdab2010@gmail.com
Amount: $${price} USD

Please send payment and contact us with your transaction details.`)
    
    console.log('Form submitted:', { plan: selectedPlan, ...formData })
  }

  return (
    <div className="page">
      <div className="page-content">
        <div className="features-section">
          <h2 className="section-title">
            Choose Your <span className="accent">Plan</span>
          </h2>
          <p className="section-subtitle">
            Select the perfect plan for your business needs
          </p>
          
          <div style={{display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '30px', marginBottom: '60px'}}>
            {Object.entries(plans).map(([key, plan]) => (
              <div 
                key={key}
                className={`feature-card ${selectedPlan === key ? 'selected-plan' : ''}`}
                onClick={() => setSelectedPlan(key)}
                style={{
                  cursor: 'pointer',
                  border: selectedPlan === key ? '2px solid var(--primary-blue)' : '1px solid #2c2c2e',
                  borderRadius: '12px',
                  padding: '40px 30px'
                }}
              >
                <h3 className="feature-title" style={{marginBottom: '20px'}}>{plan.name}</h3>
                <div style={{fontSize: '48px', fontWeight: '600', color: 'var(--primary-blue)', marginBottom: '10px'}}>
                  {typeof plan.price === 'number' ? `$${plan.price}` : plan.price}
                  {typeof plan.price === 'number' && <span style={{fontSize: '18px', color: '#a1a1a6'}}>/{plan.period}</span>}
                </div>
                <ul style={{listStyle: 'none', padding: 0, textAlign: 'left'}}>
                  {plan.features.map((feature, index) => (
                    <li key={index} style={{padding: '8px 0', color: '#a1a1a6', fontSize: '14px'}}>
                      ✓ {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div style={{maxWidth: '600px', margin: '0 auto'}}>
            <h3 style={{fontSize: '24px', fontWeight: '600', marginBottom: '30px', color: 'var(--white)', textAlign: 'center'}}>
              Complete Your Order
            </h3>
            
            <form onSubmit={handleSubmit} style={{display: 'flex', flexDirection: 'column', gap: '20px'}}>
              <div style={{display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px'}}>
                <div>
                  <label style={{display: 'block', marginBottom: '8px', color: 'var(--white)', fontSize: '14px', fontWeight: '500'}}>
                    Full Name *
                  </label>
                  <input 
                    type="text" 
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    style={{
                      width: '100%',
                      padding: '12px 16px',
                      border: '1px solid #2c2c2e',
                      borderRadius: '8px',
                      fontSize: '16px',
                      fontFamily: 'inherit',
                      backgroundColor: '#1c1c1e',
                      color: 'var(--white)',
                      outline: 'none',
                      transition: 'border-color 0.3s ease'
                    }}
                    onFocus={(e) => e.target.style.borderColor = 'var(--primary-blue)'}
                    onBlur={(e) => e.target.style.borderColor = '#2c2c2e'}
                  />
                </div>
                
                <div>
                  <label style={{display: 'block', marginBottom: '8px', color: 'var(--white)', fontSize: '14px', fontWeight: '500'}}>
                    Email Address *
                  </label>
                  <input 
                    type="email" 
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    style={{
                      width: '100%',
                      padding: '12px 16px',
                      border: '1px solid #2c2c2e',
                      borderRadius: '8px',
                      fontSize: '16px',
                      fontFamily: 'inherit',
                      backgroundColor: '#1c1c1e',
                      color: 'var(--white)',
                      outline: 'none',
                      transition: 'border-color 0.3s ease'
                    }}
                    onFocus={(e) => e.target.style.borderColor = 'var(--primary-blue)'}
                    onBlur={(e) => e.target.style.borderColor = '#2c2c2e'}
                  />
                </div>
              </div>

              <div style={{display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px'}}>
                <div>
                  <label style={{display: 'block', marginBottom: '8px', color: 'var(--white)', fontSize: '14px', fontWeight: '500'}}>
                    Company Name
                  </label>
                  <input 
                    type="text" 
                    name="company"
                    value={formData.company}
                    onChange={handleInputChange}
                    style={{
                      width: '100%',
                      padding: '12px 16px',
                      border: '1px solid #2c2c2e',
                      borderRadius: '8px',
                      fontSize: '16px',
                      fontFamily: 'inherit',
                      backgroundColor: '#1c1c1e',
                      color: 'var(--white)',
                      outline: 'none',
                      transition: 'border-color 0.3s ease'
                    }}
                    onFocus={(e) => e.target.style.borderColor = 'var(--primary-blue)'}
                    onBlur={(e) => e.target.style.borderColor = '#2c2c2e'}
                  />
                </div>
                
                <div>
                  <label style={{display: 'block', marginBottom: '8px', color: 'var(--white)', fontSize: '14px', fontWeight: '500'}}>
                    Phone Number
                  </label>
                  <input 
                    type="tel" 
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    style={{
                      width: '100%',
                      padding: '12px 16px',
                      border: '1px solid #2c2c2e',
                      borderRadius: '8px',
                      fontSize: '16px',
                      fontFamily: 'inherit',
                      backgroundColor: '#1c1c1e',
                      color: 'var(--white)',
                      outline: 'none',
                      transition: 'border-color 0.3s ease'
                    }}
                    onFocus={(e) => e.target.style.borderColor = 'var(--primary-blue)'}
                    onBlur={(e) => e.target.style.borderColor = '#2c2c2e'}
                  />
                </div>
              </div>

              <div style={{marginTop: '20px', padding: '20px', backgroundColor: '#2c2c2e', borderRadius: '8px'}}>
                <h4 style={{color: 'var(--white)', marginBottom: '10px', fontSize: '16px'}}>Order Summary</h4>
                <div style={{display: 'flex', justifyContent: 'space-between', marginBottom: '10px'}}>
                  <span style={{color: '#a1a1a6'}}>{plans[selectedPlan as keyof Plans].name} Plan</span>
                  <span style={{color: 'var(--white)', fontWeight: '600'}}>
                    {typeof plans[selectedPlan as keyof Plans].price === 'number' ? `$${plans[selectedPlan as keyof Plans].price}/${plans[selectedPlan as keyof Plans].period}` : 'Contact Sales'}
                  </span>
                </div>
                <div style={{display: 'flex', justifyContent: 'space-between', marginTop: '20px', paddingTop: '10px', borderTop: '1px solid #2c2c2e'}}>
                  <span style={{color: 'var(--white)', fontWeight: '600', fontSize: '18px'}}>Total</span>
                  <span style={{color: 'var(--primary-blue)', fontWeight: '600', fontSize: '18px'}}>
                    {typeof plans[selectedPlan as keyof Plans].price === 'number' ? `$${plans[selectedPlan as keyof Plans].price}/${plans[selectedPlan as keyof Plans].period}` : 'Contact Sales'}
                  </span>
                </div>
              </div>

              <div style={{marginTop: '20px', padding: '20px', backgroundColor: '#2c2c2e', borderRadius: '8px'}}>
                <h4 style={{color: 'var(--white)', marginBottom: '15px', fontSize: '16px'}}>Payment Information</h4>
                <div style={{marginBottom: '15px'}}>
                  <h5 style={{color: 'var(--primary-blue)', marginBottom: '8px', fontSize: '14px'}}>Litecoin (LTC) Payment:</h5>
                  <p style={{color: '#a1a1a6', fontSize: '12px', marginBottom: '5px'}}>Address: <code style={{backgroundColor: '#1c1c1e', padding: '2px 6px', borderRadius: '4px', color: 'var(--white)'}}>LgfAghENbuhVtgYrBh8trLw6n9AKAVNZFF</code></p>
                  <p style={{color: '#a1a1a6', fontSize: '12px'}}>Send equivalent USD amount in LTC</p>
                </div>
                <div>
                  <h5 style={{color: 'var(--primary-blue)', marginBottom: '8px', fontSize: '14px'}}>PayPal Payment:</h5>
                  <p style={{color: '#a1a1a6', fontSize: '12px', marginBottom: '5px'}}>Email: <code style={{backgroundColor: '#1c1c1e', padding: '2px 6px', borderRadius: '4px', color: 'var(--white)'}}>yeetdab2010@gmail.com</code></p>
                  <p style={{color: '#a1a1a6', fontSize: '12px'}}>Send exact USD amount via PayPal</p>
                </div>
              </div>

              <button 
                type="submit"
                className="btn btn-primary btn-lg"
                style={{width: '100%', marginTop: '20px', padding: '16px 24px', fontSize: '18px'}}
              >
                Complete Purchase
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Checkout
