import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Recompensa.css';

const Recompensa = () => {
  const navigate = useNavigate();
  
  // Datos simulados
  const recompensas = [
    { id: 1, titulo: "Botella Ecológica", puntos: 1000, progreso: 50 },
    { id: 2, titulo: "Descuento 20%", puntos: 1000, progreso: 80 },
    { id: 3, titulo: "Entrada Evento", puntos: 1000, progreso: 30 },
    { id: 4, titulo: "Donación", puntos: 1000, progreso: 10 },
  ];

  return (
    <div className="page-container">
      <header className="header">
        <button className="back-btn" onClick={() => navigate(-1)}>←</button>
        <h1>RECOMPENSAS</h1>
      </header>

      {/* Contador de puntos del usuario (Pequeño recuadro gris arriba) */}
      <div className="points-badge">
        <span>500 💎</span>
      </div>

      {/* Filtro Dropdown */}
      <div className="filter-section">
        <select className="filter-dropdown">
            <option>Filtrar por...</option>
            <option>Menor coste</option>
            <option>Mayor coste</option>
        </select>
      </div>

      <div className="rewards-list">
        {recompensas.map((item) => (
          <div key={item.id} className="reward-card">
             <div className="reward-details">
                <h4>{item.titulo}</h4>
                <div className="progress-bar-bg">
                    <div className="progress-bar-fill" style={{width: `${item.progreso}%`}}></div>
                </div>
             </div>
             <div className="reward-cost">{item.puntos} 💎</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Recompensa;