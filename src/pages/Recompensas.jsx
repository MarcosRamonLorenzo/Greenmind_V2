import React, { useEffect, useState } from "react";
import { ChevronDown, BadgeJapaneseYen } from "lucide-react";
import GoBack from "../components/GoBack";
import { ProgressBar } from "../components/ProgressBar";
import "./Recompensas.css"

export default function Recompensas() {

      const generarNumeros = () => {
    return Array.from({ length: 4 }, () =>
      Math.floor(Math.random() * (1000 - 500 + 1)) + 500
    );
  };

    const [numeros, setNumeros] = useState(generarNumeros);
    const money=500;
    const items = [1, 2, 3, 4];
    const recompensas = ["Bono de 1 mes de transporte público gratis."," 20 € es Steam.","3 meses gratis de Spotify premium.","Descuentos de navidad en mercados locales."]


    useEffect(() => {

    setNumeros(generarNumeros());
  }, []); 

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

                        <ProgressBar prc={(numeros[i]-money)*0.1} className="reward-card__progress" />
                    </div>
                ))}
            </div>
        </div>
    );
}
