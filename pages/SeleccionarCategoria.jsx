import React from 'react';
import { useNavigate } from 'react-router-dom';
import './SeleccionarCategoria.css';

const SeleccionarCategoria = () => {
  const navigate = useNavigate();

  const handleCategoryClick = (categoria) => {
    // Al hacer click, vamos a la página intermedia de Retos
    navigate('/retos'); 
  };

  return (
    // CORRECCIÓN AQUÍ: Cambiamos "page-container" por "category-container"
    <div className="category-container">
      <header className="header">
        <button className="back-btn">←</button>
        <h1>CATEGORÍAS</h1>
      </header>

      <div className="cards-container">
        <p className="instruction-text">Selecciona una categoría:</p>
        
        <div className="card large-card" onClick={() => handleCategoryClick('reciclaje')}>
          <div className="card-content"><h3>Reciclaje</h3></div>
        </div>

        <div className="card large-card" onClick={() => handleCategoryClick('caminar')}>
          <div className="card-content"><h3>Caminar</h3></div>
        </div>

        <div className="card large-card" onClick={() => handleCategoryClick('negocios')}>
          <div className="card-content"><h3>Negocios Locales</h3></div>
        </div>
      </div>

      {/* Menú inferior */}
      <nav className="bottom-nav">
        <div className="nav-item"></div><div className="nav-item"></div><div className="nav-item"></div><div className="nav-item"></div>
      </nav>
    </div>
  );
};

export default SeleccionarCategoria;