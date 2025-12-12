import React, { useEffect, useState } from 'react';
import './ConfettiModal.css';

export default function ConfettiModal({ isOpen, onClose, rewardName }) {
  const [confetti, setConfetti] = useState([]);

  useEffect(() => {
    if (isOpen) {
      // Generate confetti pieces
      const pieces = Array.from({ length: 80 }, (_, i) => ({
        id: i,
        left: Math.random() * 100,
        animationDelay: Math.random() * 0.5,
        animationDuration: 2 + Math.random() * 2,
        color: ['#ff6b6b', '#4ecdc4', '#45b7d1', '#f7dc6f', '#bb8fce', '#85c1e2', '#52c41a', '#fa8c16'][Math.floor(Math.random() * 8)],
        rotation: Math.random() * 360,
        size: 8 + Math.random() * 8
      }));
      setConfetti(pieces);
    }
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className="confetti-modal-overlay" onClick={onClose}>
      <div className="confetti-container">
        {confetti.map((piece) => (
          <div
            key={piece.id}
            className="confetti-piece"
            style={{
              left: `${piece.left}%`,
              animationDelay: `${piece.animationDelay}s`,
              animationDuration: `${piece.animationDuration}s`,
              backgroundColor: piece.color,
              transform: `rotate(${piece.rotation}deg)`,
              width: `${piece.size}px`,
              height: `${piece.size}px`
            }}
          />
        ))}
      </div>
      
      <div className="confetti-modal-content" onClick={(e) => e.stopPropagation()}>
        <div className="confetti-modal-icon">
          <svg viewBox="0 0 100 100" className="gift-icon">
            <rect x="20" y="40" width="60" height="50" fill="#ff6b6b" rx="4"/>
            <rect x="15" y="35" width="70" height="12" fill="#c0392b" rx="2"/>
            <rect x="47" y="40" width="6" height="50" fill="#c0392b"/>
            <path d="M 35 35 Q 35 20 50 20 Q 65 20 65 35" fill="#f7dc6f" stroke="#f39c12" strokeWidth="2"/>
            <circle cx="35" cy="35" r="5" fill="#f39c12"/>
            <circle cx="65" cy="35" r="5" fill="#f39c12"/>
          </svg>
        </div>
        
        <h2 className="confetti-modal-title">¡Recompensa Reclamada!</h2>
        <p className="confetti-modal-description">{rewardName}</p>
        
        <button className="confetti-modal-button" onClick={onClose}>
          ¡Genial!
        </button>
      </div>
    </div>
  );
}
