import { useNavigate, useParams } from "react-router-dom";
import { MoneyInfo } from "../components/MoneyInfo";
import { ProgressBar } from "../components/ProgressBar";
import "./ChallengeInfo.css";
import GoBack from "../components/GoBack";
import { Map } from "../components/Map";
import { BadgeJapaneseYen, Scan } from "lucide-react";
import { challenges } from "../data/data";



export const ChallengeInfo = () => {

  const navigate = useNavigate();

  const { id } = useParams();

  const challenge = challenges.find(c => c.id === Number(id));

  return (
    <div className="challenge-info-container">
      <div className="challenge-info">
        <h1>{challenge.titulo}</h1>
        <p className="challenge-info-text">
          {challenge.descripcion}
        </p>
        <div className="progress-container">
          <p>{challenge.completado}% del reto completado</p>
          <ProgressBar prc={challenge.completado} />
        </div>
        <div className="reward-container">
          <span>{challenge.precio}</span>
          <BadgeJapaneseYen width={23} color="goldenrod" />
        </div>
      </div>
      <div className="map-container"><Map /></div>
      <button className="scan-button" onClick={() => { navigate('/scan') }}><Scan /> Scan</button>
      <GoBack className={"challenge-go-back"} />
    </div>
  );
};
