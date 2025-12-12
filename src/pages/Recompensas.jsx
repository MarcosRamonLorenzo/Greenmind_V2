import React, { useEffect, useState } from "react";
import { ChevronDown, BadgeJapaneseYen } from "lucide-react";
import GoBack from "../components/GoBack";
import { ProgressBar } from "../components/ProgressBar";
import ConfettiModal from "../components/ConfettiModal";
import "./Recompensas.css"

export default function Recompensas() {

      const generarNumeros = () => {
    return Array.from({ length: 4 }, () =>
      Math.floor(Math.random() * (1000 - 500 + 1)) + 500
    );
  };

    const [numeros, setNumeros] = useState(generarNumeros);
    const [showModal, setShowModal] = useState(false);
    const [claimedReward, setClaimedReward] = useState("");
    const [money, setMoney] = useState(900);
    const items = [1, 2, 3, 4];
    const recompensas = ["Bono de 1 mes de transporte público gratis."," 20 € es Steam.","3 meses gratis de Spotify premium.","Descuentos de navidad en mercados locales."]


    useEffect(() => {

    setNumeros(generarNumeros());
  }, []); 

    const handleClaimReward = (rewardName, cost) => {
        if (money >= cost) {
            setClaimedReward(rewardName);
            setShowModal(true);
            setMoney(money-cost);
        }
    };

    return (
        <div className="rewards">
            <GoBack />

            <h1 className="rewards__title">Recompensas</h1>

            <div className="rewards__balance">
                <span className="rewards__balance-value">{money}</span>
                <BadgeJapaneseYen size={20} color="goldenrod" />
            </div>

            <div className="rewards__filter">
                <span>Lorem</span>
                <ChevronDown size={20} />
            </div>

            <div className="rewards__list">
                {items.map((_, i) => (
                    <div key={i} className="reward-card">
                        <div className="reward-card__header">
                            <span className="reward-card__title">{recompensas[i]}</span>

                            <div className="reward-card__currency">
                                <span>{numeros[i]}</span>
                                <BadgeJapaneseYen size={18} color="goldenrod" />
                            </div>
                        </div>

                        <ProgressBar prc={Math.min(100, (money / numeros[i]) * 100)} className="reward-card__progress" />
                        <button 
                            className="reward-card__button"
                            onClick={() => handleClaimReward(recompensas[i], numeros[i])}
                            disabled={money < numeros[i]}
                        >
                            Canjear
                        </button>
                    </div>
                ))}
            </div>

            <ConfettiModal 
                isOpen={showModal} 
                onClose={() => setShowModal(false)}
                rewardName={claimedReward}
            />
        </div>
    );
}
