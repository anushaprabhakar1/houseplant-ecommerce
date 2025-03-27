import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';

function LandingPage() {
  return (
    <div className="landing-page">
      <Header />
      <div className="hero-section">
        <div className="hero-content">
          <h1>Green Haven</h1>
          <p>
            Bring nature home with our carefully curated collection of 
            houseplants. Transform your living space into a green sanctuary.
          </p>
          <Link to="/products" className="cta-button">
            Get Started
          </Link>
        </div>
      </div>
    </div>
  );
}

export default LandingPage;