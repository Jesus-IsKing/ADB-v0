'use client';

import React, { useState } from 'react';
import Link from 'next/link';

export function KineticNavigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeShape, setActiveShape] = useState<string | null>(null);

  const toggleMenu = () => setIsMenuOpen((prev) => !prev);
  const closeMenu = () => setIsMenuOpen(false);

  return (
    <div className="kinetic-nav-wrapper">
      <div className="site-header-wrapper">
        <header className="header">
          <div className="container is--full">
            <nav className="nav-row">
              <Link href="/" aria-label="home" className="nav-logo-row w-inline-block text-2xl font-bold text-primary">
                Adorabella
              </Link>
              <div className="nav-row__right">
                <div className="nav-toggle-label" onClick={toggleMenu} style={{ cursor: 'pointer', pointerEvents: 'auto' }}>
                  <span className="toggle-text">Menu</span>
                </div>

                <button
                  role="button"
                  className="nav-close-btn"
                  onClick={toggleMenu}
                  style={{ pointerEvents: 'auto' }}
                  aria-label="Toggle menu"
                >
                  <div className="menu-button-text">
                    <p className="p-large">Menu</p>
                    <p className="p-large">Close</p>
                  </div>
                  <div className="icon-wrap">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="100%"
                      viewBox="0 0 16 16"
                      fill="none"
                      className="menu-button-icon"
                    >
                      <path d="M7.33333 16L7.33333 -3.2055e-07L8.66667 -3.78832e-07L8.66667 16L7.33333 16Z" fill="currentColor"></path>
                      <path d="M16 8.66667L-2.62269e-07 8.66667L-3.78832e-07 7.33333L16 7.33333L16 8.66667Z" fill="currentColor"></path>
                      <path d="M6 7.33333L7.33333 7.33333L7.33333 6C7.33333 6.73637 6.73638 7.33333 6 7.33333Z" fill="currentColor"></path>
                      <path d="M10 7.33333L8.66667 7.33333L8.66667 6C8.66667 6.73638 9.26362 7.33333 10 7.33333Z" fill="currentColor"></path>
                      <path d="M6 8.66667L7.33333 8.66667L7.33333 10C7.33333 9.26362 6.73638 8.66667 6 8.66667Z" fill="currentColor"></path>
                      <path d="M10 8.66667L8.66667 8.66667L8.66667 10C8.66667 9.26362 9.26362 8.66667 10 8.66667Z" fill="currentColor"></path>
                    </svg>
                  </div>
                </button>
              </div>
            </nav>
          </div>
        </header>
      </div>

      <section className="fullscreen-menu-container">
        <div data-nav={isMenuOpen ? 'open' : 'closed'} className={`nav-overlay-wrapper transition-all duration-300 ${isMenuOpen ? 'block' : 'hidden'}`}>
          <div className="overlay" onClick={closeMenu}></div>
          <nav className={`menu-content transition-transform duration-500 ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}>
            <div className="menu-bg">
              <div className="backdrop-layer first"></div>
              <div className="backdrop-layer second"></div>
              <div className="backdrop-layer"></div>

              <div className="ambient-background-shapes">
                <svg className="bg-shape bg-shape-1" viewBox="0 0 400 400" fill="none">
                  <circle className="shape-element" cx="80" cy="120" r="40" fill="rgba(251,114,50,0.15)" />
                  <circle className="shape-element" cx="300" cy="80" r="60" fill="rgba(251,114,50,0.12)" />
                  <circle className="shape-element" cx="200" cy="300" r="80" fill="rgba(251,114,50,0.1)" />
                  <circle className="shape-element" cx="350" cy="280" r="30" fill="rgba(251,114,50,0.15)" />
                </svg>

                <svg className="bg-shape bg-shape-2" viewBox="0 0 400 400" fill="none">
                  <path
                    className="shape-element"
                    d="M0 200 Q100 100, 200 200 T 400 200"
                    stroke="rgba(251,114,50,0.2)"
                    strokeWidth="60"
                    fill="none"
                  />
                  <path
                    className="shape-element"
                    d="M0 280 Q100 180, 200 280 T 400 280"
                    stroke="rgba(251,114,50,0.15)"
                    strokeWidth="40"
                    fill="none"
                  />
                </svg>

                <svg className="bg-shape bg-shape-3" viewBox="0 0 400 400" fill="none">
                  <circle className="shape-element" cx="50" cy="50" r="8" fill="rgba(251,114,50,0.3)" />
                  <circle className="shape-element" cx="150" cy="50" r="8" fill="rgba(251,114,50,0.3)" />
                  <circle className="shape-element" cx="250" cy="50" r="8" fill="rgba(251,114,50,0.3)" />
                  <circle className="shape-element" cx="350" cy="50" r="8" fill="rgba(251,114,50,0.3)" />
                  <circle className="shape-element" cx="100" cy="150" r="12" fill="rgba(251,114,50,0.25)" />
                  <circle className="shape-element" cx="200" cy="150" r="12" fill="rgba(251,114,50,0.25)" />
                  <circle className="shape-element" cx="300" cy="150" r="12" fill="rgba(251,114,50,0.25)" />
                  <circle className="shape-element" cx="50" cy="250" r="10" fill="rgba(251,114,50,0.3)" />
                  <circle className="shape-element" cx="150" cy="250" r="10" fill="rgba(251,114,50,0.3)" />
                  <circle className="shape-element" cx="250" cy="250" r="10" fill="rgba(251,114,50,0.3)" />
                  <circle className="shape-element" cx="350" cy="250" r="10" fill="rgba(251,114,50,0.3)" />
                  <circle className="shape-element" cx="100" cy="350" r="6" fill="rgba(251,114,50,0.3)" />
                  <circle className="shape-element" cx="200" cy="350" r="6" fill="rgba(251,114,50,0.3)" />
                  <circle className="shape-element" cx="300" cy="350" r="6" fill="rgba(251,114,50,0.3)" />
                </svg>

                <svg className="bg-shape bg-shape-4" viewBox="0 0 400 400" fill="none">
                  <path
                    className="shape-element"
                    d="M100 100 Q150 50, 200 100 Q250 150, 200 200 Q150 250, 100 200 Q50 150, 100 100"
                    fill="rgba(251,114,50,0.12)"
                  />
                  <path
                    className="shape-element"
                    d="M250 200 Q300 150, 350 200 Q400 250, 350 300 Q400 250, 350 300 Q300 350, 250 300 Q200 250, 250 200"
                    fill="rgba(251,114,50,0.1)"
                  />
                </svg>

                <svg className="bg-shape bg-shape-5" viewBox="0 0 400 400" fill="none">
                  <line className="shape-element" x1="0" y1="100" x2="300" y2="400" stroke="rgba(251,114,50,0.15)" strokeWidth="30" />
                  <line className="shape-element" x1="100" y1="0" x2="400" y2="300" stroke="rgba(251,114,50,0.12)" strokeWidth="25" />
                  <line className="shape-element" x1="200" y1="0" x2="400" y2="200" stroke="rgba(251,114,50,0.1)" strokeWidth="20" />
                </svg>
              </div>
            </div>

            <div className="menu-content-wrapper">
              <ul className="menu-list">
                <li className="menu-list-item transition-opacity duration-300" onMouseEnter={() => setActiveShape('1')} onMouseLeave={() => setActiveShape(null)}>
                  <Link href="#features" className="nav-link w-inline-block group" onClick={closeMenu}>
                    <p className="nav-link-text">Features</p>
                    <div className="nav-link-hover-bg group-hover:opacity-15"></div>
                  </Link>
                </li>
                <li className="menu-list-item transition-opacity duration-300" onMouseEnter={() => setActiveShape('2')} onMouseLeave={() => setActiveShape(null)}>
                  <Link href="#pricing" className="nav-link w-inline-block group" onClick={closeMenu}>
                    <p className="nav-link-text">Pricing</p>
                    <div className="nav-link-hover-bg group-hover:opacity-15"></div>
                  </Link>
                </li>
                <li className="menu-list-item transition-opacity duration-300" onMouseEnter={() => setActiveShape('3')} onMouseLeave={() => setActiveShape(null)}>
                  <Link href="#about" className="nav-link w-inline-block group" onClick={closeMenu}>
                    <p className="nav-link-text">About</p>
                    <div className="nav-link-hover-bg group-hover:opacity-15"></div>
                  </Link>
                </li>
                <li className="menu-list-item transition-opacity duration-300" onMouseEnter={() => setActiveShape('4')} onMouseLeave={() => setActiveShape(null)}>
                  <Link href="/contact" className="nav-link w-inline-block group" onClick={closeMenu}>
                    <p className="nav-link-text">Contact</p>
                    <div className="nav-link-hover-bg group-hover:opacity-15"></div>
                  </Link>
                </li>
                <li className="menu-list-item transition-opacity duration-300" onMouseEnter={() => setActiveShape('5')} onMouseLeave={() => setActiveShape(null)}>
                  <Link href="/" className="nav-link w-inline-block group" onClick={closeMenu}>
                    <p className="nav-link-text">Home</p>
                    <div className="nav-link-hover-bg group-hover:opacity-15"></div>
                  </Link>
                </li>
              </ul>
            </div>
          </nav>
        </div>
      </section>
    </div>
  );
}
