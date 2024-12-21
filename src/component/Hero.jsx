import React from 'react';
import { Link } from 'react-router-dom';
import './style/Hero.css';

const Hero = () => {
  return (
    <div className="hero-container">
      <div className="hero-content">
        <main className="hero-main">
          <div className="hero-text">
            <h1 className="hero-title">
              <span>Your Health is Our</span>{' '}
              <span className="blue">Top Priority</span>
            </h1>
            <p className="hero-description">
              Experience world-class healthcare services with our team of expert doctors.
              We provide comprehensive medical care with a focus on patient comfort and recovery.
            </p>
            <div className="hero-buttons">
              <Link to="/signup" className="button primary">
                Get Started
              </Link>
              <Link to="/login" className="button secondary">
                Login
              </Link>
            </div>
          </div>
        </main>
      </div>
      <div className="hero-image-container">
        <img
          className="hero-image"
          src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?ixlib=rb-1.2.1&auto=format&fit=crop&w=2850&q=80"
          alt="Medical professionals in a modern hospital"
        />
      </div>
    </div>
  );
};

export default Hero;
