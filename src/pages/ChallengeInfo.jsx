import { useParams } from "react-router-dom";
import { MoneyInfo } from "../components/MoneyInfo";
import { ProgressBar } from "../components/ProgressBar";
import "./ChallengeInfo.css";
import GoBack from "../components/GoBack";

export const ChallengeInfo = () => {
  const { id } = useParams();

  return (
    <div className="challenge-info-container">
      <div className="challenge-info">
        <h1>Reto 1</h1>
        <div className="progress-container">
           <p>{35}% del reto completado</p> 
          <ProgressBar prc={35} />
        </div>
        <p className="challenge-info-text">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur
          repellat eos libero? Animi repellat fugit non cupiditate nostrum nobis
          ad reiciendis veniam pariatur vitae, aspernatur atque velit hic ex
          vero!
        </p>
        <div className="reward-container">
          <p>Reward</p>
          <MoneyInfo number={20} />
        </div>
      </div>
      <div className="map-container"></div>
      <button className="scan-button">ScaN</button>
      <GoBack className={"challenge-go-back"} />
    </div>
  );
};
