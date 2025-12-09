import React from 'react';
import { useNavigate } from 'react-router-dom';
import './RetosCategoria.css'; // Crearemos este CSS abajo

const RetosCategoria = () => {
  const navigate = useNavigate();

  return (
    <div className="page-container">
      <header className="header">
        <button className="back-btn" onClick={() => navigate(-1)}>←</button>
        <h1>RETOS SEMANALES</h1>
      </header>

      {/* Sección superior con progreso del reto actual */}
      <div className="current-challenge-card">
        <h3>Reto actual: Reciclaje Plástico</h3>
        <p>75% completado</p>
        <div className="progress-bar-bg">
          <div className="progress-bar-fill" style={{ width: '75%' }}></div>
        </div>
      </div>

      {/* Sección del diagrama de flujo (simulado visualmente) */}
      <div className="flow-container">
        <div className="flow-row">
            <div className="flow-box">Inicio</div>
            <div className="arrow-right">→</div>
            <div className="flow-box">Paso 1</div>
        </div>
        <div className="arrow-down-container">↓</div>
        <div className="flow-row reverse">
            <div className="flow-box">Fin</div>
            <div className="arrow-left">←</div>
            <div className="flow-box">Paso 2</div>
        </div>
      </div>

      {/* Botón grande inferior para ir a Recompensas */}
      <div className="footer-action">
        <button className="rewards-btn" onClick={() => navigate('/recompensa')}>
          REWARDS (Ir a Recompensas)
        </button>
      </div>
    </div>
  );
};

export default RetosCategoria;