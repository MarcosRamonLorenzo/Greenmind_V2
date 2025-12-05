import "./Home.css"; // El CSS está en la misma carpeta, así que se queda igual


import mercado from "../assets/mercado.png";
import reciclaje from "../assets/reciclaje.jpg"
import bikeImg from '../assets/bici.jpg';
import carpoolImg from '../assets/coche.jpg';
import busImg from '../assets/bus.jpg';
import profileImg from '../assets/squirtEl.jpg';
import { BadgeJapaneseYen, Flame, House, Leaf, User } from 'lucide-react';
import useUser from "../hooks/useUser";
import { BottomNav } from "../components/BottomNav";
import { HomeCard } from "../components/HomeCard";
import { ProgressBar } from "../components/ProgressBar";
import { MoneyInfo } from "../components/MoneyInfo";


export const Home = () => {

   const { estadoUsuario } = useUser();

  return (
    <div className="home-container">
      {/* Header Section */}
      <header className="home-header">
        <div className="user-profile">
          <div className="avatar-placeholder">
           <img src={profileImg} alt=""  />
          </div>
           <div className="greeting">
            <h1>Bienvenido</h1>
            <p>{estadoUsuario?.user_metadata.name}</p>
          </div>
        </div>

         <div className="stats-container">
          <div className="stat-chip">
            <span>5</span>
            <Flame width={15} color="red" />
          </div>
          <MoneyInfo number={500}/>
        </div>
      </header>

      {/* Weekly Goal Card */}
      <section className="weekly-goal-card">
        <h3>¡A por los retos!</h3>
        <p>75% de tu objetivo semanal completado</p>
        <ProgressBar prc={45}/>
      </section>

      {/* Challenges Section */}
      <section className="challenges-section">
        <div className="section-header">
          <h2>Retos</h2>
        </div>
        <div className="filter-chips">
          <div className="chip active">Movilidad</div>
          <div className="chip">Plástico</div>
          <div className="chip">Reciclaje</div>
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
         <HomeCard img={carpoolImg} text={"Comparte tu coche"} type={1}/>
         <HomeCard img={reciclaje} text={"Recicla 20 botellas de plastico"} type={2}/>
         <HomeCard img={mercado} text={"Compra fruta en un mercado"} type={3}/>
         <HomeCard img={busImg} text={"Usa el bus tres veces hoy"} type={1}/>
        </div>
      </section>

      {/* Bottom Nav */}
      <BottomNav/>
    </div>
  );
};