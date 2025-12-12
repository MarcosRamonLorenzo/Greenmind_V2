import { useEffect, useState } from "react";
import { Recycle, Truck, ShoppingCart, Lock } from "lucide-react"; // Ajusté los íconos
import { motion } from "framer-motion";
import "./CategoryPage.css";
import GoBack from "../components/GoBack.jsx";
import { useNavigate, useParams } from "react-router-dom";

// Íconos por categoría
const categoryIcons = {
  reciclar: Recycle,
  movilidad: Truck,
  compras: ShoppingCart,
};

// Mapear id de categoría a nombre
const categoryNames = {
  1: "reciclar",
  2: "movilidad",
  3: "compras",
};

// COMPONENTE DE RETO (Activo / Bloqueado)
function RetoItem({ status = "locked", onClick, categoria = "reciclar", id }) {
  const isLocked = status === "locked";
  const isUnlocked = status === "unlocked";

  const Icon = categoryIcons[categoria] || Recycle;

  return (
    <motion.div
      whileTap={!isLocked ? { scale: 0.95 } : undefined}
      onClick={!isLocked ? onClick : undefined}
      className="reto-item"
      style={{
        width: 120,
        height: 120,
        borderRadius: "50%",
        position: "relative",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        cursor: isLocked ? "default" : "pointer",
        opacity: isLocked ? 0.5 : 1,
      }}
    >
      <div
        style={{
          width: 85,
          height: 85,
          borderRadius: "50%",
          background: isLocked ? "#e5e5e5" : "var(--primary)",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          boxShadow: isLocked ? "none" : "0px 4px 0px #7ab26a",
        }}
      >
        {isLocked ? <Lock size={32} color="#777" /> : <Icon size={32} color="white" fill="white" />}
      </div>

      {isUnlocked && (
        <div
          style={{
            position: "absolute",
            top: -25,
            background: "white",
            padding: "4px 12px",
            borderRadius: 12,
            fontSize: 14,
            fontWeight: "bold",
            color: "var(--primary)",
            border: "2px solid #e5e5e5",
          }}
        >
          Iniciar Reto {id}
        </div>
      )}

      {isUnlocked && (
        <svg
          width="120"
          height="120"
          style={{ position: "absolute", top: 0, left: 0, transform: "rotate(-90deg)" }}
        >
          <circle
            cx="60"
            cy="60"
            r="50"
            stroke="#fde047"
            strokeWidth="10"
            strokeLinecap="round"
            fill="none"
            strokeDasharray="60 315"
          />
        </svg>
      )}
    </motion.div>
  );
}

// PÁGINA COMPLETA
export default function CategoryPage() {

  const navigate = useNavigate();

  const { id } = useParams(); // id de la URL
  const categoria = categoryNames[id] || "reciclar"; // asigna el nombre de la categoría
  const Icon = categoryIcons[categoria] || Recycle;

  const [retos, setRetos] = useState([
    { id: 1, status: "unlocked" },
    { id: 2, status: "locked" },
    { id: 3, status: "locked" },
    { id: 4, status: "locked" },
    { id: 5, status: "locked" },
    { id: 6, status: "locked" },
    { id: 7, status: "locked" },



  ]);

  // Lógica de click en retos
  const handleRetoClick = (id) => {
    const reto = retos.find((r) => r.id === id);
    if (!reto || reto.status === "locked") return;

    setRetos((prev) =>
      prev.map((r) =>
        r.id === id
          ? { ...r, status: "completed" }
          : r.id === id + 1
            ? { ...r, status: "unlocked" }
            : r
      )
    );
  };

  return (
    <div className="page">
      <GoBack className={"category-page-goback"} />

      <div className="header">
        <div className="header-info">
          <Icon size={40} className="icon" />
          <h1 className="title">{categoria}</h1>
        </div>
      </div>

      <div className="scroll-container">
        <div className="retos-list" style={{ display: "flex", gap: 10 }}>
          {retos.map((r) => (
            <RetoItem
              key={r.id}
              status={r.status}
              onClick={() => handleRetoClick(r.id)}
              categoria={categoria}
              id={r.id}
            />
          ))}
        </div>
      </div>
      <button className="button-recompensas" onClick={() => { navigate('/recompensas') }}>Recompensas</button>
    </div>
  );
}
