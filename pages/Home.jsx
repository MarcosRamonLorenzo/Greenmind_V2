import React from 'react';
import "./Home.css"; // El CSS está en la misma carpeta, así que se queda igual

// --- IMPORTANTE: RUTAS DE IMÁGENES ---
// "../" nos lleva a la raíz del proyecto
// Luego entramos en "src/assets/..."
import streakImg from '../src/assets/racha.png';
import bikeImg from '../src/assets/bici.jpg';
import carpoolImg from '../src/assets/coche.jpg';
import busImg from '../src/assets/bus.jpg';

export const Home = () => {
  return (
    <div className="home-container">
      {/* Header Section */}
      <header className="home-header">
        <div className="user-profile">
          <div className="avatar-placeholder">
            <svg viewBox="0 0 24 24" fill="currentColor" className="user-icon">
              <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
            </svg>
          </div>
          <div className="greeting">
            <h1>Buenas,</h1>
            <p>Usuario</p>
          </div>
        </div>

        <div className="stats-container">
          <div className="stat-chip">
            <span>5</span>
            <img src={streakImg} alt="Racha" className="stat-icon-img" />
          </div>
          <div className="stat-chip">
            <span>500</span>
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="icon-coin">
              <circle cx="12" cy="12" r="10"></circle>
              <path d="M16 8h-6a2 2 0 1 0 0 4h4a2 2 0 1 1 0 4H8"></path>
              <line x1="12" y1="18" x2="12" y2="22"></line>
              <line x1="12" y1="2" x2="12" y2="6"></line>
            </svg>
          </div>
        </div>
      </header>

      {/* Weekly Goal Card */}
      <section className="weekly-goal-card">
        <h3>¡A por los retos!</h3>
        <p>75% de tu objetivo semanal completado</p>
        <div className="progress-bar-container">
          <div className="progress-bar" style={{ width: '75%' }}></div>
        </div>
      </section>

      {/* Challenges Section */}
      <section className="challenges-section">
        <div className="section-header">
          <h2>Retos</h2>
        </div>
        <div className="filter-chips">
          <button className="chip active">Movilidad</button>
          <button className="chip">Plástico</button>
          <button className="chip">Reciclaje</button>
        </div>
      </section>

      {/* Today Section */}
      <section className="today-section">
        <div className="section-header">
          <h2>Hoy</h2>
        </div>
        <div className="today-card">
          <div 
            className="card-image" 
            style={{ backgroundImage: `url(${bikeImg})` }}
          >
            <span className="image-tag">Movilidad</span>
          </div>
          <div className="card-content">
            <h3>Usa tu bicicleta dos veces hoy</h3>
            <div className="chevron-right">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="9 18 15 12 9 6"></polyline>
              </svg>
            </div>
          </div>
        </div>
      </section>

      {/* Last Challenges Section */}
      <section className="last-challenges-section">
        <div className="section-header">
          <h2>Últimos retos</h2>
          <div className="chevron-left">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="15 18 9 12 15 6"></polyline>
            </svg>
          </div>
        </div>
        <div className="challenges-list">
          <div className="challenge-card-small">
            <div 
              className="small-image" 
              style={{ backgroundImage: `url(${carpoolImg})` }}
            ></div>
            <div className="small-card-content">
              <h3>Comparte tu coche</h3>
            </div>
          </div>
          <div className="challenge-card-small">
            <div 
              className="small-image"
              style={{ backgroundImage: `url(${busImg})` }}
            ></div>
            <div className="small-card-content">
              <h3>Usa el bus tres veces hoy</h3>
            </div>
          </div>
        </div>
      </section>

      {/* Bottom Nav */}
      <nav className="bottom-nav">
        <button className="nav-item">
          <div className="nav-icon-placeholder"></div>
        </button>
        <button className="nav-item active">
          <div className="nav-icon-placeholder"></div>
        </button>
        <button className="nav-item">
          <div className="nav-icon-placeholder"></div>
        </button>
        <button className="nav-item">
          <div className="nav-icon-placeholder"></div>
        </button>
      </nav>
    </div>
  );
};