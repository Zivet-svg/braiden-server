import { Link, useLocation } from 'react-router-dom'

function Navigation() {
  const location = useLocation()
  
  return (
    <nav className="navbar">
      <div className="container">
        <Link to="/" className="navbar-brand">
          Dur<span className="accent">Zivet</span>Media
        </Link>
        <ul className="navbar-nav">
          <li className="nav-item">
            <Link 
              to="/features" 
              className={`nav-link ${location.pathname === '/features' ? 'active' : ''}`}
            >
              Benefits
            </Link>
          </li>
          <li className="nav-item">
            <Link 
              to="/pricing" 
              className={`nav-link ${location.pathname === '/pricing' ? 'active' : ''}`}
            >
              Pricing
            </Link>
          </li>
          <li className="nav-item">
            <Link 
              to="/contact" 
              className={`nav-link ${location.pathname === '/contact' ? 'active' : ''}`}
            >
              Contact
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/checkout" className="btn btn-primary">Get Started</Link>
          </li>
        </ul>
      </div>
    </nav>
  )
}

export default Navigation
